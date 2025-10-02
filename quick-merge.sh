#!/bin/bash

echo "🚀 Quick merge script for open PRs"
echo "Current directory: $(pwd)"

# Check current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"

# Switch to main if not already there
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

# Fetch latest changes
echo "Fetching latest changes..."
git fetch origin

# Merge the PR branch
echo "Merging PR branch..."
git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-e200 --no-ff -m "Merge PR #24664: Enhance and expand ziontechgroup.com services and site"

# Push changes
echo "Pushing merged changes..."
git push origin main

echo "✅ Merge completed successfully!"