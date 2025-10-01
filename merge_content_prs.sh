#!/bin/bash

# Script to merge important content-related branches into main
# This will merge branches that add new content and features

set -e

echo "========================================="
echo "Starting PR Merge Process"
echo "========================================="
echo ""

# Make sure we're on main and up to date
git checkout main
git pull origin main

# List of important content branches to merge (most recent and significant)
BRANCHES=(
  "content-and-advertising-update-2026"
  "content-update-2026-final"
  "feature/new-content-and-advertising-2026"
  "feature/revolutionary-ai-2026-content"
  "final-content-merge-2026"
  "add-revolutionary-content-2026"
  "content/october-2025-ai-breakthroughs"
  "content/october-2025-breakthrough-innovations"
)

MERGED_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0

for BRANCH in "${BRANCHES[@]}"; do
  echo ""
  echo "========================================="
  echo "Processing branch: $BRANCH"
  echo "========================================="
  
  # Check if branch exists remotely
  if git ls-remote --heads origin "$BRANCH" | grep -q "$BRANCH"; then
    echo "✓ Branch exists: $BRANCH"
    
    # Try to merge the branch
    echo "Attempting to merge $BRANCH..."
    
    if git merge "origin/$BRANCH" --no-edit -m "Merge $BRANCH into main - automated content integration"; then
      echo "✓ Successfully merged: $BRANCH"
      MERGED_COUNT=$((MERGED_COUNT + 1))
    else
      echo "✗ Merge conflict detected in: $BRANCH"
      echo "Attempting automatic conflict resolution..."
      
      # Try to resolve conflicts automatically by favoring main's version
      # This is safe for content additions as we want to keep accumulated content
      git checkout --ours app/page.tsx 2>/dev/null || true
      git add . 2>/dev/null || true
      
      if git commit --no-edit -m "Merge $BRANCH - auto-resolved conflicts"; then
        echo "✓ Auto-resolved and merged: $BRANCH"
        MERGED_COUNT=$((MERGED_COUNT + 1))
      else
        echo "✗ Could not auto-resolve conflicts, aborting merge for: $BRANCH"
        git merge --abort 2>/dev/null || true
        FAILED_COUNT=$((FAILED_COUNT + 1))
      fi
    fi
  else
    echo "✗ Branch not found: $BRANCH"
    SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
  fi
done

echo ""
echo "========================================="
echo "Merge Summary"
echo "========================================="
echo "Successfully merged: $MERGED_COUNT branches"
echo "Failed to merge: $FAILED_COUNT branches"
echo "Skipped (not found): $SKIPPED_COUNT branches"
echo ""

if [ $MERGED_COUNT -gt 0 ]; then
  echo "Pushing changes to main..."
  if git push origin main; then
    echo "✓ Successfully pushed all merged changes to main"
  else
    echo "✗ Failed to push changes. Please review and push manually."
    exit 1
  fi
else
  echo "No branches were merged. Nothing to push."
fi

echo ""
echo "========================================="
echo "Merge process complete!"
echo "========================================="