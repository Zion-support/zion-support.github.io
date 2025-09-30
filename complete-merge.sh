#!/bin/bash
set -e

echo "=== Complete Merge and PR Resolution Script ==="
echo ""

# Step 1: Resolve current merge conflicts
echo "Step 1: Resolving merge conflicts in current branch..."
git add -A
git commit -m "Resolve merge conflicts - keep new 2026 AI breakthrough content" || echo "No conflicts to commit"

# Step 2: Merge current branch into main
echo ""
echo "Step 2: Merging current branch into main..."
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"

# Switch to main and merge
git checkout main
git pull origin main --no-edit || echo "Already up to date"
git merge $CURRENT_BRANCH --no-edit -m "Merge $CURRENT_BRANCH: Add January and February 2026 AI breakthrough content"

# Step 3: Push to main
echo ""
echo "Step 3: Pushing to main branch..."
git push origin main

echo ""
echo "=== Merge Complete! ==="
echo "Next steps:"
echo "1. Check GitHub for any remaining open PRs"
echo "2. Merge them through GitHub UI or CLI"
echo ""
