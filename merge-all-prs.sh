#!/bin/bash

# Script to merge all open PRs and resolve conflicts
set -e

echo "Starting merge process..."

# First, try to pull the latest changes from main
echo "Pulling latest changes from main..."
git pull origin main --no-edit || {
    echo "Pull failed, trying to resolve conflicts..."
    git status
    exit 1
}

# Check if there are any merge conflicts
if git diff --name-only --diff-filter=U | grep -q .; then
    echo "Merge conflicts detected. Resolving..."
    git diff --name-only --diff-filter=U | while read file; do
        echo "Resolving conflicts in $file"
        # Take the remote version for now
        git checkout --theirs "$file"
        git add "$file"
    done
    git commit -m "resolve: merge conflicts resolved by taking remote version"
fi

# Now try to merge recent branches that might be open PRs
echo "Looking for recent branches to merge..."

# Get list of recent branches (excluding main and backup branches)
git branch -r | grep -v "origin/main" | grep -v "origin/master" | grep -v "aggressive-merge-backup" | head -20 | while read branch; do
    branch_name=$(echo "$branch" | sed 's/origin\///')
    echo "Attempting to merge $branch_name..."
    
    # Try to merge the branch
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "Successfully merged $branch_name"
    else
        echo "Failed to merge $branch_name, skipping..."
        git merge --abort 2>/dev/null || true
    fi
done

echo "Merge process completed."
git status