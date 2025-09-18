#!/bin/bash

# Script to resolve merge conflicts and merge all open PRs
set -e

echo "=== Starting Merge Conflict Resolution and PR Merging ==="

# Check current status
echo "1. Checking current git status..."
git status

# Check for open PRs on GitHub
echo "2. Checking for open PRs..."
curl -s -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open > open_prs.json

# Check if there are open PRs
if [ -s open_prs.json ] && [ "$(cat open_prs.json)" != "[]" ]; then
    echo "Found open PRs. Processing..."
    
    # Extract PR numbers and branches
    cat open_prs.json | grep -o '"number":[0-9]*' | grep -o '[0-9]*' > pr_numbers.txt
    cat open_prs.json | grep -o '"head":{"ref":"[^"]*"' | grep -o '"[^"]*"$' | tr -d '"' > pr_branches.txt
    
    # Process each PR
    while IFS= read -r pr_number && IFS= read -r branch_name <&3; do
        echo "Processing PR #$pr_number from branch $branch_name..."
        
        # Fetch the branch
        git fetch origin "$branch_name"
        
        # Check if branch exists locally
        if git show-ref --verify --quiet "refs/heads/$branch_name"; then
            git checkout "$branch_name"
        else
            git checkout -b "$branch_name" "origin/$branch_name"
        fi
        
        # Try to merge with main
        git checkout main
        if git merge "origin/$branch_name" --no-commit; then
            echo "Successfully merged $branch_name"
            git commit -m "Merge PR #$pr_number from $branch_name"
        else
            echo "Merge conflict in $branch_name. Resolving..."
            
            # Resolve conflicts by keeping main version for common files
            for file in $(git diff --name-only --diff-filter=U); do
                echo "Resolving conflict in $file..."
                git checkout --ours "$file"
                git add "$file"
            done
            
            # Commit the resolved merge
            git commit -m "Resolve merge conflicts for PR #$pr_number from $branch_name"
        fi
        
    done < pr_numbers.txt 3< pr_branches.txt
    
    # Clean up
    rm -f open_prs.json pr_numbers.txt pr_branches.txt
else
    echo "No open PRs found."
fi

# Check for unmerged remote branches
echo "3. Checking for unmerged remote branches..."
git fetch origin

# Get list of remote branches that haven't been merged
for branch in $(git branch -r | grep -v main | grep -v HEAD); do
    branch_name=$(echo "$branch" | sed 's/origin\///')
    
    # Check if branch is already merged
    if ! git merge-base --is-ancestor "$branch" main 2>/dev/null; then
        echo "Found unmerged branch: $branch_name"
        
        # Check if it's a recent branch (last 7 days)
        last_commit_date=$(git log -1 --format=%ct "$branch")
        current_date=$(date +%s)
        days_diff=$(( (current_date - last_commit_date) / 86400 ))
        
        if [ $days_diff -le 7 ]; then
            echo "Merging recent branch: $branch_name"
            
            # Try to merge
            if git merge "$branch" --no-commit; then
                git commit -m "Merge branch $branch_name"
                echo "Successfully merged $branch_name"
            else
                echo "Merge conflict in $branch_name. Resolving..."
                
                # Resolve conflicts
                for file in $(git diff --name-only --diff-filter=U); do
                    echo "Resolving conflict in $file..."
                    git checkout --ours "$file"
                    git add "$file"
                done
                
                git commit -m "Resolve merge conflicts for $branch_name"
                echo "Resolved conflicts and merged $branch_name"
            fi
        else
            echo "Skipping old branch: $branch_name (last commit $days_diff days ago)"
        fi
    fi
done

# Push all changes to origin
echo "4. Pushing all changes to origin..."
git push origin main

echo "=== Merge Conflict Resolution and PR Merging Complete ==="