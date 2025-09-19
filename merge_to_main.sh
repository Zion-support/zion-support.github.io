#!/bin/bash

# Script to merge current branch to main
set -e

echo "Starting merge process..."

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Check if there are any uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "Found uncommitted changes, committing them..."
    git add .
    git commit -m "Fix Netlify build configuration and dependencies"
fi

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Merge the feature branch
echo "Merging feature branch..."
git merge cursor/fix-netlify-build-and-merge-to-main-d228

# Push to origin
echo "Pushing to origin..."
git push origin main

echo "Merge completed successfully!"