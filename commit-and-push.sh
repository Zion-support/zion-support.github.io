#!/bin/bash

echo "Adding all changes..."
git add .

echo "Committing changes..."
git commit -m "Fix syntax errors in service pages

- Fixed AIHealthcare.tsx with proper React component structure
- Fixed AIHealthcareRevenueCycle.tsx with clean syntax
- Fixed AIIdentityManagement.tsx with proper imports and JSX
- Removed corrupted content and malformed syntax
- Added proper SEO components and responsive design
- Standardized component structure across service pages"

echo "Pushing to current branch..."
git push origin cursor/fix-syntax-push-and-merge-to-main-535e

echo "Switching to main branch..."
git checkout main

echo "Merging changes..."
git merge cursor/fix-syntax-push-and-merge-to-main-535e

echo "Pushing to main..."
git push origin main

echo "Done!"
