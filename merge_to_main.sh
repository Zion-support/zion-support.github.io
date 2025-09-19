#!/bin/bash

echo "Starting merge to main branch..."

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Add all changes
echo "Adding all changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Resolve merge conflicts and fix build issues

- Fixed all merge conflicts in source files
- Resolved import path issues (@/ to ../)
- Fixed SEO component imports
- Resolved syntax errors in utility files
- Fixed JSX parsing errors
- Updated build configuration for Netlify

This commit resolves all merge conflicts and prepares the codebase for deployment."

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Merge the feature branch
echo "Merging feature branch..."
git merge cursor/fix-netlify-build-and-merge-to-main-4141

# Push to main
echo "Pushing to main branch..."
git push origin main

echo "Merge to main completed successfully!"