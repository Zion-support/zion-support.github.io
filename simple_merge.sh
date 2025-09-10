#!/bin/bash

echo "=== Simple PR Merge Script ==="

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Check if we're on main
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

# Pull latest changes
echo "Pulling latest changes from origin..."
git pull origin main

# Check for any local branches that might be PRs
echo "Checking for local branches..."
git branch | grep -v main | while read branch; do
    branch=$(echo $branch | sed 's/^[ *]*//')
    echo "Found branch: $branch"
    
    # Try to merge the branch
    echo "Attempting to merge $branch into main..."
    if git merge "$branch" --no-ff --no-edit; then
        echo "✅ Successfully merged $branch"
        git push origin main
    else
        echo "❌ Failed to merge $branch, trying with -X theirs..."
        git merge --abort
        if git merge "$branch" --no-ff --no-edit -X theirs; then
            echo "✅ Successfully merged $branch with theirs strategy"
            git push origin main
        else
            echo "❌ Failed to merge $branch even with theirs strategy"
            git merge --abort
        fi
    fi
done

echo "=== Merge process completed ==="