#!/bin/bash

# Script to merge cursor-created branches with the latest content
set -e

echo "========================================="
echo "Merging Latest Cursor Content Branches"
echo "========================================="
echo ""

# Make sure we're on main and up to date
git checkout main
git pull origin main

# Get the 10 most recently updated cursor branches
echo "Finding recently updated cursor branches..."
RECENT_BRANCHES=$(git for-each-ref --sort=-committerdate refs/remotes/origin/cursor/create-and-deploy-new-content-* --format='%(refname:short)' | head -10 | sed 's/origin\///')

echo "Found branches:"
echo "$RECENT_BRANCHES"
echo ""

MERGED_COUNT=0
FAILED_COUNT=0

for BRANCH in $RECENT_BRANCHES; do
  echo "========================================="
  echo "Processing: $BRANCH"
  echo "========================================="
  
  # Check if already merged
  if git merge-base --is-ancestor "origin/$BRANCH" HEAD 2>/dev/null; then
    echo "✓ Already merged: $BRANCH"
    continue
  fi
  
  echo "Attempting to merge $BRANCH..."
  
  if git merge "origin/$BRANCH" --no-edit -m "Merge $BRANCH - automated content integration" 2>&1; then
    echo "✓ Successfully merged: $BRANCH"
    MERGED_COUNT=$((MERGED_COUNT + 1))
  else
    echo "✗ Merge conflict detected"
    echo "Auto-resolving conflicts..."
    
    # Auto-resolve by keeping our version for main files
    git checkout --ours app/page.tsx 2>/dev/null || true
    git checkout --ours app/layout.tsx 2>/dev/null || true
    git add . 2>/dev/null || true
    
    if git commit --no-edit -m "Merge $BRANCH - auto-resolved conflicts" 2>&1; then
      echo "✓ Auto-resolved and merged: $BRANCH"
      MERGED_COUNT=$((MERGED_COUNT + 1))
    else
      echo "✗ Could not complete merge, aborting"
      git merge --abort 2>/dev/null || true
      FAILED_COUNT=$((FAILED_COUNT + 1))
    fi
  fi
  echo ""
done

echo "========================================="
echo "Summary"
echo "========================================="
echo "Merged: $MERGED_COUNT branches"
echo "Failed: $FAILED_COUNT branches"
echo ""

if [ $MERGED_COUNT -gt 0 ]; then
  echo "Pushing to main..."
  git push origin main
  echo "✓ All changes pushed successfully"
else
  echo "No new branches merged"
fi

echo ""
echo "========================================="
echo "Complete!"
echo "========================================="