#!/bin/bash

# Merge PR script
echo "Starting PR merge process..."

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Add changes
git add netlify.toml

# Commit the fix
git commit -m "Fix Netlify configuration to match Vite output directory

- Updated netlify.toml publish directory from 'out' to 'dist'
- This resolves the mismatch between Vite config (outDir: 'dist') and Netlify config
- Ensures Netlify can find the built files in the correct directory"

# Switch to main
git checkout main

# Merge the PR branch
git merge cursor/fix-netlify-build-and-merge-to-main-1aaf --no-ff -m "Merge PR #12720: Fix Netlify build and merge to main

This PR resolves Netlify build issues by:
1. Updating Vite configuration to output to 'dist' directory
2. Updating Netlify configuration to publish from 'dist' directory
3. Ensuring consistency between build and deployment configurations

Resolves merge conflicts and ensures successful Netlify deployment."

# Push to main
git push origin main

echo "PR merge completed successfully!"