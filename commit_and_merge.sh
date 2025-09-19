#!/bin/bash

# Simple script to commit changes and merge to main
echo "Starting git operations..."

# Add all changes
git add .

# Commit changes
git commit -m "Fix Netlify build configuration and TypeScript config

- Fixed trailing comma in tsconfig.json exclude array
- Verified build configuration is working correctly
- Build test passed successfully
- Ready for Netlify deployment"

echo "Changes committed successfully!"

# Show current status
git status --short

echo "To complete the merge to main, run:"
echo "git checkout main"
echo "git merge cursor/fix-netlify-build-and-merge-to-main-d228"
echo "git push origin main"