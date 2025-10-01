#!/bin/bash

# Comprehensive script to merge all open PRs into main branch
set -e

echo "🚀 Starting Comprehensive PR Merge Process..."
echo "=============================================="

# Ensure we're on main and up to date
echo ""
echo "📍 Step 1: Updating main branch..."
git checkout main
git pull origin main

# Fetch all remote branches
echo ""
echo "📥 Step 2: Fetching all remote branches..."
git fetch --all --prune

# Get list of cursor branches that are ahead of main
echo ""
echo "🔍 Step 3: Identifying branches to merge..."

BRANCHES_TO_MERGE=(
  "cursor/create-and-deploy-new-content-9c80"
  "cursor/create-and-deploy-new-content-006c"
  "add-revolutionary-content-2026"
  "add-revolutionary-content-2027"
  "add-ultimate-content-2025"
  "comprehensive-improvements-20250929-211542"
  "content-update-2025-09-30"
  "content-refresh-2025-09-30"
)

# Counter for tracking
MERGED_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0
TOTAL_BRANCHES=${#BRANCHES_TO_MERGE[@]}

echo "📊 Found $TOTAL_BRANCHES branches to process"
echo ""

# Function to merge a single branch
merge_branch() {
  local BRANCH=$1
  local BRANCH_NUM=$2
  
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "🔄 [$BRANCH_NUM/$TOTAL_BRANCHES] Processing: $BRANCH"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  
  # Check if branch exists on remote
  if ! git ls-remote --heads origin "$BRANCH" | grep -q "$BRANCH"; then
    echo "⚠️  Branch $BRANCH not found on remote, skipping..."
    SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
    return
  fi
  
  # Fetch the branch
  echo "📥 Fetching $BRANCH..."
  git fetch origin "$BRANCH"
  
  # Try to merge
  echo "🔀 Attempting merge..."
  if git merge "origin/$BRANCH" --no-edit -m "chore: Merge PR from $BRANCH into main"; then
    echo "✅ Successfully merged $BRANCH"
    MERGED_COUNT=$((MERGED_COUNT + 1))
  else
    echo "⚠️  Merge conflict detected, resolving..."
    
    # Get conflicted files
    CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
    
    if [ -n "$CONFLICTED_FILES" ]; then
      echo "📝 Conflicted files:"
      echo "$CONFLICTED_FILES" | sed 's/^/  - /'
      
      # Strategy: Keep our changes (main branch)
      for FILE in $CONFLICTED_FILES; do
        if [ -f "$FILE" ]; then
          echo "  → Resolving $FILE (keeping main version)..."
          git checkout --ours "$FILE"
          git add "$FILE"
        fi
      done
      
      # Try to complete the merge
      if git commit --no-edit -m "chore: Merge PR from $BRANCH (conflicts resolved by keeping main)"; then
        echo "✅ Conflicts resolved and merged $BRANCH"
        MERGED_COUNT=$((MERGED_COUNT + 1))
      else
        echo "❌ Failed to complete merge for $BRANCH"
        git merge --abort 2>/dev/null || true
        FAILED_COUNT=$((FAILED_COUNT + 1))
      fi
    else
      echo "❌ Failed to merge $BRANCH (unknown error)"
      git merge --abort 2>/dev/null || true
      FAILED_COUNT=$((FAILED_COUNT + 1))
    fi
  fi
  
  echo ""
}

# Process each branch
BRANCH_NUM=1
for BRANCH in "${BRANCHES_TO_MERGE[@]}"; do
  merge_branch "$BRANCH" "$BRANCH_NUM"
  BRANCH_NUM=$((BRANCH_NUM + 1))
done

# Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 MERGE SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Successfully merged: $MERGED_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo "⏭️  Skipped: $SKIPPED_COUNT branches"
echo "📦 Total processed: $TOTAL_BRANCHES branches"
echo ""

# Push if we merged anything
if [ $MERGED_COUNT -gt 0 ]; then
  echo "🚀 Pushing merged changes to main..."
  if git push origin main; then
    echo "✅ All changes successfully pushed to main!"
  else
    echo "❌ Failed to push changes. Please resolve manually."
    exit 1
  fi
else
  echo "ℹ️  No branches were merged, nothing to push."
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 PR Merge Process Completed!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
