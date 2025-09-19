#!/bin/bash

# Set git configuration
git config user.name "Cursor Agent"
git config user.email "cursoragent@cursor.com"

# Check current status
echo "Current git status:"
git status --porcelain

# Add all changes
echo "Adding all changes..."
git add .

# Check what will be committed
echo "Changes to be committed:"
git diff --cached --name-only

# Commit changes
echo "Committing changes..."
git commit -m "Fix Netlify build configuration and dependencies

- Updated package.json with proper build scripts
- Fixed Vite configuration for production builds
- Ensured all dependencies are properly installed
- Build now passes successfully with no errors
- Ready for Netlify deployment"

# Check current branch
echo "Current branch:"
git branch --show-current

# Push to current branch
echo "Pushing to current branch..."
git push origin cursor/fix-netlify-build-and-merge-to-main-2e0b

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Merge the feature branch
echo "Merging feature branch..."
git merge cursor/fix-netlify-build-and-merge-to-main-2e0b

# Push to main
echo "Pushing to main branch..."
git push origin main

<<<<<<< HEAD
echo "All operations completed successfully!"
=======
echo "All operations completed successfully!"
>>>>>>> origin/backup-main-20250918-004015
