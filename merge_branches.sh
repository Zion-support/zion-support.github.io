#!/bin/bash

# Script to merge unmerged cursor branches into main
set -e

echo "Starting branch merge process..."

# Get list of unmerged cursor branches
UNMERGED_BRANCHES=$(git branch -r --no-merged main | grep 'cursor/' | head -3)

echo "Found unmerged branches:"
echo "$UNMERGED_BRANCHES"

for branch in $UNMERGED_BRANCHES; do
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/$branch; then
        echo "Merging $branch into main..."
        
        # Try to merge with automatic conflict resolution
        if git merge --no-edit --no-ff $branch; then
            echo "Successfully merged $branch"
        else
            echo "Merge conflict in $branch, resolving..."
            
            # Resolve conflicts by taking the branch version
            git checkout --theirs .
            git add .
            git commit --no-edit
            
            echo "Resolved conflicts for $branch"
        fi
    else
        echo "Branch $branch does not exist, skipping..."
    fi
done

echo "All branches processed. Pushing to remote..."
git push origin main

echo "Merge process completed!"