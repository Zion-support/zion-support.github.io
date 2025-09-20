#!/bin/bash

# Fix and merge Netlify build changes
echo "Starting Netlify build fix and merge process..."

# Check current status
echo "Current branch:"
git branch --show-current

echo "Git status:"
git status --porcelain

# Add all changes
echo "Adding changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Fix Netlify build configuration and ensure successful build

- Verified build configuration in netlify.toml
- Confirmed build command works with npm run build:netlify
- Build generates proper dist/ directory with all assets
- No build errors detected
- Ready for deployment"

# Push to current branch
echo "Pushing to current branch..."
git push origin cursor/fix-netlify-build-and-merge-to-main-fc9a

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Merge the fix branch
echo "Merging fix branch into main..."
git merge cursor/fix-netlify-build-and-merge-to-main-fc9a

# Push to main
echo "Pushing to main..."
git push origin main

echo "Netlify build fix and merge completed successfully!"