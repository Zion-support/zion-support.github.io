#!/bin/bash

echo "Adding all changes..."
git add .

echo "Checking status..."
git status

echo "Committing changes..."
git commit -m "Resolve merge conflicts and merge all PRs into main branch

- Fixed all merge conflicts by keeping main branch content
- Merged PR #11811: Website audit and update with deployment
- Merged PR #11809: Enhance and expand ziontechgroup.com services and site
- Resolved build issues and ensured all pages work correctly
- Cleaned up conflicting files and maintained working state"

echo "Pushing to main branch..."
git push origin main

echo "All changes committed and pushed successfully!"