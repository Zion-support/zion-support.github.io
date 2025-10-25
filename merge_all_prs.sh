#!/bin/bash

# Script to merge all open PR branches into main
echo "Starting comprehensive merge of all PR branches..."

# Get all cursor/fix-errors-and-merge-to-main branches
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -20)

echo "Found branches to merge:"
echo "$branches"

# Switch to main
git checkout main

# Merge each branch
for branch in $branches; do
    echo "Attempting to merge $branch..."
    
    # Extract branch name without origin/
    branch_name=$(echo $branch | sed 's/origin\///')
    
    # Try to merge the branch
    if git merge "origin/$branch_name" --no-ff -m "Merge $branch_name into main" 2>/dev/null; then
        echo "Successfully merged $branch_name"
    else
        echo "Failed to merge $branch_name (conflicts or already merged)"
        # Reset merge attempt
        git merge --abort 2>/dev/null
    fi
done

echo "Merge process completed. Checking status..."
git status

echo "Pushing changes to main..."
git push origin main

echo "All done!"