#!/bin/bash

# Script to merge current branch to main
set -e

echo "Current branch:"
git branch --show-current

echo "Git status:"
git status --porcelain

echo "Adding all changes..."
git add .

echo "Committing changes..."
git commit -m "Fix Netlify build: Install dependencies and ensure build compatibility

- Installed npm dependencies to resolve 'vite: not found' error
- Build now completes successfully with all assets generated
- Linting passes with only TypeScript version warning (non-critical)
- All build artifacts created in dist/ directory"

echo "Switching to main branch..."
git checkout main

echo "Merging current branch to main..."
git merge cursor/fix-netlify-build-and-merge-to-main-0ddb --no-ff -m "Merge fix-netlify-build-and-merge-to-main-0ddb: Fix Netlify build issues"

echo "Pushing to main..."
git push origin main

echo "Build fix successfully merged to main branch!"