#!/bin/bash

# Script to merge current branch to main
set -e

echo "Starting merge process..."

# Check current branch
echo "Current branch:"
git branch --show-current

# Add and commit any changes
echo "Adding all changes..."
git add .

echo "Committing changes..."
git commit -m "Fix Netlify build: Install dependencies and ensure build compatibility

- Installed npm dependencies to resolve 'vite: not found' error
- Build now completes successfully with all assets generated
- Linting passes with only TypeScript version warning (non-critical)
- All build artifacts created in dist/ directory"

# Switch to main
echo "Switching to main branch..."
git checkout main

echo "Pulling latest changes..."
git pull origin main

# Merge the feature branch
echo "Merging cursor/fix-netlify-build-and-merge-to-main-0ddb..."
git merge cursor/fix-netlify-build-and-merge-to-main-0ddb --no-ff -m "Merge fix-netlify-build-and-merge-to-main-0ddb: Fix Netlify build issues"

echo "Pushing to main..."
git push origin main

echo "Merge completed successfully!"
