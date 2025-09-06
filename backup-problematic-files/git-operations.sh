#!/bin/bash

echo "Starting git operations..."

# Check current branch
echo "Current branch:"
git branch --show-current

# Add all changes
echo "Adding all changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Fix syntax errors and merge conflicts

- Fixed merge conflict markers in test files
- Fixed malformed code in App.test.ts, AccessibilityEnhancer.test.tsx, and products.test.ts
- Cleaned up TypeScript syntax errors
- Removed duplicate code sections
- Fixed quote and bracket issues"

# Push changes
echo "Pushing changes..."
git push origin cursor/fix-syntax-push-and-merge-to-main-1c2c

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Merge the feature branch
echo "Merging feature branch..."
git merge cursor/fix-syntax-push-and-merge-to-main-1c2c

# Push to main
echo "Pushing to main..."
git push origin main

echo "Git operations completed successfully!"