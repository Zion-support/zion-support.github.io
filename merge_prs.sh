#!/bin/bash

# Script to merge all open PRs into main branch
echo "Starting PR merge process..."

# Get list of open PRs
echo "Fetching open PRs..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

# Extract PR numbers and branch names
echo "Processing PRs..."
jq -r '.[] | "\(.number) \(.head.ref)"' prs.json > pr_list.txt

# Process each PR
while IFS=' ' read -r pr_number branch_name; do
    echo "Processing PR #$pr_number from branch $branch_name"
    
    # Fetch the branch
    git fetch origin "$branch_name" 2>/dev/null || {
        echo "Failed to fetch branch $branch_name, skipping PR #$pr_number"
        continue
    }
    
    # Checkout the branch
    git checkout -b "pr-$pr_number" "origin/$branch_name" 2>/dev/null || {
        echo "Failed to checkout branch $branch_name, skipping PR #$pr_number"
        continue
    }
    
    # Try to merge with main
    echo "Attempting to merge PR #$pr_number..."
    git merge main --no-ff -m "Merge PR #$pr_number: $branch_name" 2>/dev/null || {
        echo "Merge conflict in PR #$pr_number, attempting to resolve..."
        # Auto-resolve conflicts by accepting main branch changes
        git checkout --theirs . 2>/dev/null || true
        git add . 2>/dev/null || true
        git commit -m "Resolve merge conflicts for PR #$pr_number" 2>/dev/null || {
            echo "Failed to resolve conflicts for PR #$pr_number, skipping"
            git merge --abort 2>/dev/null || true
            git checkout main
            git branch -D "pr-$pr_number" 2>/dev/null || true
            continue
        }
    }
    
    # Switch back to main and merge
    git checkout main
    git merge "pr-$pr_number" --no-ff -m "Merge PR #$pr_number into main"
    
    # Clean up
    git branch -D "pr-$pr_number"
    
    echo "Successfully merged PR #$pr_number"
    
done < pr_list.txt

# Push all changes
echo "Pushing changes to main..."
git push origin main

# Clean up
rm -f prs.json pr_list.txt

echo "PR merge process completed!"