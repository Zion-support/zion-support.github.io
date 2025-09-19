#!/bin/bash

# Fix Netlify build issues and push to main branch
echo "Adding all changes..."
git add .

echo "Committing changes..."
git commit -m "Fix Netlify build issues: resolve syntax errors in React components

- Fix JSX structure in SpaceTechInnovation2026.tsx
- Fix JSX structure in UltimateTechShowcase2026.tsx  
- Fix JSX structure in AdvancedAISystems2026.tsx
- Remove extra closing div tags and fix component structure
- Ensure proper JSX syntax for Netlify build"

echo "Switching to main branch..."
git checkout main

echo "Merging changes..."
git merge cursor/fix-netlify-build-and-merge-to-main-692f

echo "Pushing to main branch..."
git push origin main

echo "Done! Netlify build should now work."