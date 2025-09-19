#!/bin/bash

# Git operations script for Netlify build fix
echo "Starting git operations..."

# Add all changes
git add .

# Commit changes
git commit -m "Fix Netlify build configuration and dependencies

- Verified Netlify.toml configuration is correct
- Confirmed build:netlify script works properly
- Build tested successfully with Vite
- All dependencies installed and working"

# Push to current branch
git push origin cursor/fix-netlify-build-and-merge-to-main-751e

# Switch to main branch
git checkout main

# Merge the fix branch
git merge cursor/fix-netlify-build-and-merge-to-main-751e

# Push to main
git push origin main

echo "Git operations completed successfully!"