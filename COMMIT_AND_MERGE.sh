#!/bin/bash

# Simple script to commit fixes and merge to main
# Usage: bash COMMIT_AND_MERGE.sh

set -e

echo "========================================="
echo " COMMIT AND MERGE SCRIPT"
echo "========================================="
echo ""

# Stage files
echo "Staging fixed files..."
git add api-documentation.tsx
git add app/components/PerformanceMonitor.tsx
git add clean-build/pages/_app.tsx
git add clean-build/pages/about.tsx
echo "✓ Files staged"
echo ""

# Commit
echo "Committing changes..."
git commit -m "fix: Resolve TypeScript syntax errors in multiple files

- Fixed api-documentation.tsx JSX structure
- Fixed PerformanceMonitor.tsx interface definitions
- Rewrote clean-build/pages/_app.tsx with proper syntax
- Rewrote clean-build/pages/about.tsx with valid JSX

Resolves critical TypeScript compilation errors that were blocking builds."

echo "✓ Changes committed"
echo ""

# Show current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"
echo ""

# Switch to main
echo "Switching to main branch..."
git checkout main
git pull origin main
echo "✓ On main, up to date"
echo ""

# Merge
echo "Merging $CURRENT_BRANCH into main..."
git merge $CURRENT_BRANCH --no-ff -m "Merge $CURRENT_BRANCH: Fix TypeScript syntax errors"
echo "✓ Merged successfully"
echo ""

# Push
echo "Pushing to origin/main..."
git push origin main
echo "✓ Pushed to remote"
echo ""

echo "========================================="
echo " ✓ MERGE COMPLETE"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Check GitHub for open PRs"
echo "2. Merge any open PRs"
echo "3. Verify builds: npm run build"
echo "4. Run tests: npm test"
echo ""