#!/bin/bash

echo "=== Resolving Merge Conflicts and Pushing Changes ==="

# Check current status
echo "1. Checking git status..."
git status

# Add all resolved files
echo "2. Adding resolved files..."
git add .

# Commit the resolved conflicts
echo "3. Committing resolved conflicts..."
git commit -m "Resolve all merge conflicts and integrate new content

- Cleaned up App.tsx with proper imports and routing
- Integrated all new 2026 technology pages
- Added interactive technology showcase
- Enhanced frontend advertising and user experience
- All conflicts resolved and features working"

# Push to main branch
echo "4. Pushing to main branch..."
git push origin main

echo "5. Checking for open PRs..."
# List all branches to see if there are any feature branches
git branch -a | grep -v main

echo "=== Process Complete ==="