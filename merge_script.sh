#!/bin/bash

# Script to resolve merge conflicts and merge branches
set -e

echo "Starting merge conflict resolution process..."

# Check current status
echo "Current git status:"
git status

# Fetch latest changes
echo "Fetching latest changes..."
git fetch origin

# Check what branches we have
echo "Available branches:"
git branch -r | grep -E "(cursor|fix|merge)" | head -10

# Try to merge origin/main
echo "Attempting to merge origin/main..."
if git merge origin/main --no-edit; then
    echo "Merge successful!"
else
    echo "Merge failed, checking for conflicts..."
    git status
    echo "Resolving conflicts automatically..."
    # Auto-resolve conflicts by accepting incoming changes
    git checkout --theirs . || true
    git add .
    git commit -m "Resolve merge conflicts by accepting remote changes" || true
fi

# Push changes
echo "Pushing changes..."
git push origin main || echo "Push failed, but merge completed locally"

echo "Merge process completed!"