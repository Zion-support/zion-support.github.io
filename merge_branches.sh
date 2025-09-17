#!/bin/bash

# Script to systematically merge all remote branches into main
# This will help resolve conflicts and merge all open PRs

echo "Starting systematic branch merge process..."

# Get list of remote branches (excluding main)
branches=$(git branch -r | grep -v 'origin/main' | grep 'origin/cursor/' | head -20)

for branch in $branches; do
    echo "Processing branch: $branch"
    
    # Checkout the branch
    git checkout "$branch" 2>/dev/null
    if [ $? -ne 0 ]; then
        echo "Failed to checkout $branch, skipping..."
        continue
    fi
    
    # Try to merge with main
    git merge main 2>/dev/null
    if [ $? -eq 0 ]; then
        echo "✅ Successfully merged $branch with main"
        # Switch back to main and merge this branch
        git checkout main
        git merge "$branch" 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "✅ Successfully merged $branch into main"
        else
            echo "❌ Failed to merge $branch into main"
        fi
    else
        echo "❌ Merge conflicts in $branch, will resolve manually"
        # Reset the merge attempt
        git merge --abort 2>/dev/null
    fi
    
    echo "---"
done

echo "Branch merge process completed!"