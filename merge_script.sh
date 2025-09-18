#!/bin/bash

# Merge script to resolve conflicts and merge PRs
set -e

echo "Starting merge process..."

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Fetch latest changes
echo "Fetching latest changes..."
git fetch origin

# Check for merge conflicts
echo "Checking for conflicts..."
if git merge-tree $(git merge-base HEAD origin/main) HEAD origin/main | grep -q "<<<<<<<"; then
    echo "Merge conflicts detected. Resolving..."
    
    # Try to merge with strategy
    git merge origin/main -X ours --no-edit || {
        echo "Automatic merge failed. Manual resolution needed."
        exit 1
    }
else
    echo "No conflicts detected. Proceeding with merge..."
    git merge origin/main --no-edit
fi

# Push changes
echo "Pushing changes to main..."
git push origin main

echo "Merge completed successfully!"