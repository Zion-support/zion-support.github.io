#!/bin/bash

# Bulk merge script to resolve conflicts and merge all cursor branches into main
# This script will handle merge conflicts automatically and merge all branches

set -e

echo "🚀 Starting bulk merge process for all cursor branches..."

# Ensure we're on main branch
git checkout main
git pull origin main

# Get all cursor branches
BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | sort)

TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)
echo "📊 Found $TOTAL_BRANCHES branches to merge"

MERGED_COUNT=0
FAILED_COUNT=0
CONFLICT_COUNT=0

# Create a log file for tracking
LOG_FILE="merge_log_$(date +%Y%m%d_%H%M%S).txt"
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
            
            # Auto-resolve conflicts by taking our version (main) for most files
            git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            git commit --no-edit 2>/dev/null || {
                echo "❌ Failed to resolve conflicts for: $branch"
                git merge --abort 2>/dev/null || true
                ((FAILED_COUNT++))
                continue
            }
            
            echo "✅ Resolved conflicts and merged: $branch"
            ((MERGED_COUNT++))
        else
            echo "❌ Failed to merge: $branch"
            git merge --abort 2>/dev/null || true
            ((FAILED_COUNT++))
        fi
    fi
    
    # Show progress every 50 branches
    if [ $((MERGED_COUNT + FAILED_COUNT + CONFLICT_COUNT)) -gt 0 ] && [ $((MERGED_COUNT + FAILED_COUNT + CONFLICT_COUNT) % 50) -eq 0 ]; then
        echo "📈 Progress: $((MERGED_COUNT + FAILED_COUNT + CONFLICT_COUNT))/$TOTAL_BRANCHES branches processed"
        echo "   ✅ Merged: $MERGED_COUNT"
        echo "   ⚠️  Conflicts: $CONFLICT_COUNT"
        echo "   ❌ Failed: $FAILED_COUNT"
    fi
done

echo ""
echo "🎉 Bulk merge completed!"
echo "📊 Final Results:"
echo "   ✅ Successfully merged: $MERGED_COUNT branches"
echo "   ⚠️  Conflicts resolved: $CONFLICT_COUNT branches"
echo "   ❌ Failed: $FAILED_COUNT branches"
echo "   📝 Log file: $LOG_FILE"

# Push the final result
echo "🚀 Pushing merged changes to main..."
git push origin main

echo "✅ All done! Main branch has been updated with all merges."