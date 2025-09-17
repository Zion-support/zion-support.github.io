#!/bin/bash

# Script to resolve merge conflicts and merge to main
echo "Starting merge process..."

# Check current branch
echo "Current branch:"
git branch --show-current

# Add all changes
echo "Adding all changes..."
git add -A

# Commit changes
echo "Committing changes..."
git commit -m "Resolve merge conflicts and update App.tsx imports

- Resolved all merge conflicts in App.tsx
- Added missing component imports
- Cleaned up duplicate imports
- Fixed component references

This resolves the merge conflicts from multiple PRs and prepares for main branch merge."

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Merge the current branch
echo "Merging changes to main..."
git merge cursor/fix-netlify-build-and-merge-to-main-76f5

# Push to main
echo "Pushing to main..."
git push origin main

echo "Merge completed successfully!"