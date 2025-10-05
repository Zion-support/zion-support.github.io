#!/bin/bash

# Safe merge script to handle a subset of branches first
# This will help us identify patterns and handle conflicts more systematically

set -e

echo "🚀 Starting safe merge process for cursor branches..."

# Ensure we're on main branch
git checkout main
git pull origin main

# Get first 20 branches to start with
BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -20 | sed 's/origin\///' | sort)

echo "📊 Processing first 20 branches as a test batch"

MERGED_COUNT=0
FAILED_COUNT=0
CONFLICT_COUNT=0

# Create a log file for tracking
LOG_FILE="safe_merge_log_$(date +%Y%m%d_%H%M%S).txt"
echo "📝 Logging to: $LOG_FILE"

for branch in $BRANCHES; do
    echo "🔄 Processing branch: $branch"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit --no-ff 2>>"$LOG_FILE"; then
        echo "✅ Successfully merged: $branch"
        ((MERGED_COUNT++))
    else
        # Check if it's a conflict or other error
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "⚠️  Merge conflict in: $branch"
            ((CONFLICT_COUNT++))
            
            # Show what files have conflicts
            echo "   Conflicting files:"
            git status --porcelain | grep -E "^UU|^AA|^DD" | while read status file; do
                echo "     $status $file"
            done
            
            # For this test batch, let's abort conflicts to analyze them
            echo "   Aborting merge to analyze conflicts..."
            git merge --abort 2>/dev/null || true
            ((FAILED_COUNT++))
        else
            echo "❌ Failed to merge: $branch"
            git merge --abort 2>/dev/null || true
            ((FAILED_COUNT++))
        fi
    fi
done

echo ""
echo "🎉 Safe merge test completed!"
echo "📊 Results for first 20 branches:"
echo "   ✅ Successfully merged: $MERGED_COUNT branches"
echo "   ⚠️  Conflicts detected: $CONFLICT_COUNT branches"
echo "   ❌ Failed: $FAILED_COUNT branches"
echo "   📝 Log file: $LOG_FILE"

if [ $MERGED_COUNT -gt 0 ]; then
    echo "🚀 Pushing successful merges to main..."
    git push origin main
    echo "✅ Test batch pushed to main!"
else
    echo "⚠️  No successful merges to push."
fi

echo "✅ Safe merge test complete. Check the log file for details."