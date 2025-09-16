#!/bin/bash

# Simple script to resolve merge conflicts
cd /workspace

echo "Starting simple resolve..."

# Check status
git status --short

# Switch to main
git checkout main

# Pull latest
git pull origin main

# Fetch all
git fetch --all

# Get one cursor branch
BRANCH=$(git branch -r | grep "origin/cursor/" | head -1 | sed 's/origin\///')

if [ -n "$BRANCH" ]; then
    echo "Merging: $BRANCH"
    git merge "origin/$BRANCH" || echo "Merge failed"
fi

# Push
git push origin main

echo "Done"