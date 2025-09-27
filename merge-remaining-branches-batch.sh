#!/bin/bash

# Merge Remaining Branches in Smaller Batches
# This script processes branches more efficiently with better error handling

set -e

echo "🚀 Starting batch merge of remaining branches..."
echo "📅 Started at: $(date)"

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

# Get list of branches that haven't been merged yet
echo "📋 Getting list of unmerged branches..."
UNMERGED_BRANCHES=($(git branch -r --no-merged origin/main | grep -v HEAD | sed 's/origin\///' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//' | head -50))

TOTAL_BRANCHES=${#UNMERGED_BRANCHES[@]}
echo "📊 Found $TOTAL_BRANCHES unmerged branches to process"

if [ $TOTAL_BRANCHES -eq 0 ]; then
    echo "✅ No unmerged branches found! All branches are up to date."
    exit 0
fi

# Counters
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0

# Process each branch
for i in "${!UNMERGED_BRANCHES[@]}"; do
    branch="${UNMERGED_BRANCHES[$i]}"
    current=$((i+1))
    
    echo ""
    echo "🔄 Processing $current/$TOTAL_BRANCHES: $branch"
    
    # Skip problematic branches
    if [ ${#branch} -gt 100 ] || [[ "$branch" =~ (HEAD|main|master) ]]; then
        echo "⏭️  Skipping problematic branch"
        ((SKIPPED_COUNT++))
        continue
    fi
    
    # Check if branch exists and has commits
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch" 2>/dev/null; then
        echo "⚠️  Branch doesn't exist, skipping"
        ((SKIPPED_COUNT++))
        continue
    fi
    
    # Try to merge
    if git merge "origin/$branch" --no-edit --no-ff 2>/dev/null; then
        echo "✅ Successfully merged"
        ((SUCCESS_COUNT++))
    elif git merge "origin/$branch" --no-edit --no-ff -X ours 2>/dev/null; then
        echo "✅ Merged with conflict resolution (ours)"
        ((SUCCESS_COUNT++))
    elif git merge "origin/$branch" --no-edit --no-ff -X theirs 2>/dev/null; then
        echo "✅ Merged with conflict resolution (theirs)"
        ((SUCCESS_COUNT++))
    else
        echo "❌ Failed to merge"
        git merge --abort 2>/dev/null || true
        ((FAILED_COUNT++))
    fi
    
    # Push every 10 merges
    if [ $((current % 10)) -eq 0 ]; then
        echo "📤 Pushing changes..."
        git push origin main || echo "⚠️  Push failed, continuing..."
    fi
done

# Final push
echo "📤 Final push..."
git push origin main || echo "⚠️  Final push failed"

echo ""
echo "🎉 Batch merge completed!"
echo "📊 Summary:"
echo "   ✅ Successful: $SUCCESS_COUNT"
echo "   ❌ Failed: $FAILED_COUNT"
echo "   ⏭️  Skipped: $SKIPPED_COUNT"
echo "📅 Completed at: $(date)"