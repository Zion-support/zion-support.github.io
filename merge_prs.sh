#!/bin/bash

# Script to merge open PRs into main branch
set -e

echo "Starting PR merge process..."

# Check if we're on main branch
git checkout main

# Fetch latest changes
git fetch origin

# Merge PR #23674 (Parse netlify configuration file)
echo "Merging PR #23674..."
git merge origin/cursor/parse-netlify-configuration-file-ce72 --no-ff -m "Merge PR #23674: Parse netlify configuration file"

# Merge PR #23673 (Fix Netlify build and merge to main)
echo "Merging PR #23673..."
git merge origin/cursor/fix-netlify-build-and-merge-to-main-eff1 --no-ff -m "Merge PR #23673: Fix Netlify build and merge to main"

# Test the build
echo "Testing build..."
pnpm run build:no-check

# Push changes
echo "Pushing changes to main..."
git push origin main

echo "All PRs merged successfully!"