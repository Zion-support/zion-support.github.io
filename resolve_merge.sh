#!/bin/bash

echo "Starting merge conflict resolution..."

# Check current status
echo "Current branch: $(git branch --show-current)"
echo "Current commit: $(git rev-parse HEAD)"
echo "Remote main commit: $(git rev-parse origin/main)"

# Fetch latest changes
echo "Fetching latest changes..."
git fetch origin

# Check if there are conflicts
echo "Checking for merge conflicts..."
git merge origin/main --no-edit

# If merge was successful, push changes
if [ $? -eq 0 ]; then
    echo "Merge successful! Pushing changes..."
    git push origin main
else
    echo "Merge conflicts detected. Resolving automatically..."
    # Auto-resolve conflicts by accepting both changes
    git checkout --theirs .
    git add .
    git commit -m "Resolve merge conflicts: Keep both changes"
    git push origin main
fi

echo "Merge resolution complete!"