#!/bin/bash

# Configuration
MAIN_BRANCH="main"
BRANCH_PREFIX="origin/cursor/fix-netlify-build-and-merge-to-main-"
BATCH_SIZE=10  # Process branches in batches to avoid overwhelming the system
MAX_BATCHES=50  # Limit to prevent infinite processing

echo "🚀 Starting batch merge process for remaining branches..."

# Ensure we are on the main branch and it's up to date
git checkout $MAIN_BRANCH
git pull origin $MAIN_BRANCH --rebase

# Get all remote branches that match the prefix
ALL_BRANCHES=$(git branch -r | grep "$BRANCH_PREFIX" | sed 's/ *origin\///' | head -500)  # Limit to first 500 branches

if [ -z "$ALL_BRANCHES" ]; then
  echo "✅ No branches found matching the prefix '$BRANCH_PREFIX' to merge."
  exit 0
fi

echo "Found $(echo "$ALL_BRANCHES" | wc -l) branches to process in batches of $BATCH_SIZE"

# Process branches in batches
batch_num=1
echo "$ALL_BRANCHES" | while read -r branch; do
  if [ -z "$branch" ]; then
    continue
  fi
  
  # Calculate batch
  current_batch=$((($(echo "$ALL_BRANCHES" | grep -n "^$branch$" | cut -d: -f1) - 1) / BATCH_SIZE + 1))
  
  if [ $current_batch -gt $MAX_BATCHES ]; then
    echo "⚠️ Reached maximum batch limit ($MAX_BATCHES). Stopping."
    break
  fi
  
  echo "📋 Processing batch $current_batch, branch: $branch"
  
  # Try to merge the branch
  if git merge --no-ff "origin/$branch" -m "Merge branch '$branch' into $MAIN_BRANCH" 2>/dev/null; then
    echo "✅ Successfully merged $branch"
  else
    echo "⚠️ Failed to merge $branch (likely conflicts or already merged). Skipping."
    # Reset to clean state
    git merge --abort 2>/dev/null || true
  fi
  
  # Every 10 branches, push and pull to keep in sync
  if [ $((current_batch % 10)) -eq 0 ]; then
    echo "🔄 Syncing with remote after batch $current_batch..."
    git push origin $MAIN_BRANCH 2>/dev/null || true
    git pull origin $MAIN_BRANCH --rebase 2>/dev/null || true
  fi
done

echo "🎉 Batch merge process completed!"

# Final push
echo "🚀 Pushing final changes to repository..."
git push origin $MAIN_BRANCH

if [ $? -eq 0 ]; then
  echo "✅ All changes pushed to main branch!"
else
  echo "❌ Failed to push changes to origin/$MAIN_BRANCH."
fi

echo "✨ Batch merge process completed successfully."