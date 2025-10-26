#!/bin/bash

# Script to merge all open PRs and resolve conflicts
set -e

echo "Starting to merge all open PRs..."

# Get list of all open PRs
PRS=$(gh pr list --state open --json number,headRefName --jq '.[] | "\(.number) \(.headRefName)"')

# Counter for tracking progress
count=0
total=$(echo "$PRS" | wc -l)

echo "Found $total open PRs to process"

# Process each PR
while IFS= read -r line; do
    if [ -z "$line" ]; then
        continue
    fi
    
    pr_number=$(echo "$line" | awk '{print $1}')
    branch_name=$(echo "$line" | awk '{print $2}')
    
    count=$((count + 1))
    echo ""
    echo "Processing PR #$pr_number ($count/$total) - Branch: $branch_name"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/remotes/origin/$branch_name; then
        echo "Branch $branch_name exists, attempting merge..."
        
        # Try to merge the branch
        if git merge origin/$branch_name --no-commit --no-ff; then
            echo "Successfully merged $branch_name"
            git commit -m "Merge PR #$pr_number: $branch_name"
        else
            echo "Merge conflict detected for $branch_name, resolving..."
            
            # Check for merge conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "Resolving merge conflicts for $branch_name..."
                
                # Auto-resolve conflicts by accepting the incoming changes for most files
                # This is a simple strategy - in practice you might want more sophisticated conflict resolution
                git checkout --theirs . || true
                git add .
                
                if git commit -m "Resolve merge conflicts for PR #$pr_number: $branch_name"; then
                    echo "Successfully resolved conflicts for $branch_name"
                else
                    echo "Failed to commit after conflict resolution for $branch_name"
                    git merge --abort
                fi
            else
                echo "No conflicts found, committing merge..."
                git commit -m "Merge PR #$pr_number: $branch_name"
            fi
        fi
    else
        echo "Branch $branch_name does not exist locally, skipping..."
    fi
    
    # Push changes
    echo "Pushing changes..."
    git push origin main || echo "Failed to push, continuing with next PR..."
    
done <<< "$PRS"

echo ""
echo "Completed processing all PRs!"
echo "Final status:"
git status