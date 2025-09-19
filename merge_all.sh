#!/bin/bash

echo "=== Starting Merge Resolution Process ==="

# Function to run commands with timeout
run_cmd() {
    timeout 30 "$@"
    return $?
}

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Commit any uncommitted changes
echo "Checking for uncommitted changes..."
if [ -n "$(git status --porcelain)" ]; then
    echo "Found uncommitted changes, committing them..."
    git add .
    git commit -m "Add comprehensive AI content and promotional components"
    echo "Changes committed"
else
    echo "No uncommitted changes"
fi

# Fetch latest
echo "Fetching latest changes..."
git fetch origin

# Try to merge main
echo "Attempting to merge main..."
if git merge origin/main; then
    echo "Merge successful"
else
    echo "Merge conflicts detected, resolving..."
    git checkout --ours .
    git add .
    git commit -m "Resolve merge conflicts automatically"
    echo "Conflicts resolved"
fi

# Push current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Pushing branch: $CURRENT_BRANCH"
git push origin $CURRENT_BRANCH

# Switch to main and merge
echo "Switching to main branch..."
git checkout main
git pull origin main

echo "Merging content branch into main..."
git merge $CURRENT_BRANCH

echo "Pushing main branch..."
git push origin main

echo "=== Merge Process Completed ==="