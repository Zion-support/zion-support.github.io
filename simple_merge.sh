#!/bin/bash

# Simple script to merge branches in batches
set -e

echo "Starting simple branch merge process..."

# Get first 10 branches
branches=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | head -10)

echo "Processing first 10 branches:"
echo "$branches"

# Function to merge a single branch
merge_single_branch() {
    local branch=$1
    echo "Processing branch: $branch"
    
    # Switch to main and pull latest
    git checkout main
    git pull origin main
    
    # Try to merge the branch
    if git merge origin/$branch -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git push origin main
        echo "✅ Pushed to origin"
    else
        echo "❌ Conflict in $branch, skipping for now"
        git merge --abort
    fi
    
    echo "---"
}

# Process each branch
for branch in $branches; do
    merge_single_branch "$branch"
done

echo "First batch completed!"