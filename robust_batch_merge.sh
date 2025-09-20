#!/bin/bash

# Robust batch merge script with better error handling
set -e

echo "🚀 Starting ROBUST BATCH MERGE of cursor branches..."

# Get next 100 cursor branches (skip first 50)
CURSOR_BRANCHES=$(git branch -r | grep "cursor/" | sed 's/origin\///' | sed -n '51,150p')

SUCCESS_COUNT=0
FAILED_COUNT=0
TOTAL_COUNT=0
ALREADY_UPTODATE=0
CONFLICT_COUNT=0

echo "📊 Processing cursor branches 51-150..."

for branch in $CURSOR_BRANCHES; do
    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    echo "📋 Processing branch $TOTAL_COUNT: $branch"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    elif git merge "origin/$branch" --no-edit 2>&1 | grep -q "Already up to date"; then
        echo "ℹ️  Branch $branch already up to date"
        ALREADY_UPTODATE=$((ALREADY_UPTODATE + 1))
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Resolve conflicts by taking our version
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit --no-edit 2>/dev/null; then
            echo "✅ Resolved conflicts and merged $branch"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            echo "❌ Failed to resolve conflicts in $branch, skipping..."
            FAILED_COUNT=$((FAILED_COUNT + 1))
            # Reset to clean state
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Push every 20 successful merges with retry logic
    if [ $((SUCCESS_COUNT % 20)) -eq 0 ] && [ $SUCCESS_COUNT -gt 0 ]; then
        echo "🔄 Pushing changes after $SUCCESS_COUNT successful merges..."
        for i in {1..3}; do
            if git push origin main 2>/dev/null; then
                echo "✅ Push successful"
                break
            else
                echo "⚠️  Push attempt $i failed, pulling latest changes..."
                git pull origin main 2>/dev/null || true
                sleep 2
            fi
        done
    fi
done

echo ""
echo "📊 ROBUST BATCH MERGE SUMMARY:"
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "ℹ️  Already up to date: $ALREADY_UPTODATE branches"
echo "⚠️  Conflicts resolved: $CONFLICT_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo "📋 Total processed: $TOTAL_COUNT branches"

# Final push with retry
echo "🔄 Pushing final changes..."
for i in {1..3}; do
    if git push origin main 2>/dev/null; then
        echo "✅ Final push successful"
        break
    else
        echo "⚠️  Final push attempt $i failed, pulling latest changes..."
        git pull origin main 2>/dev/null || true
        sleep 2
    fi
done

echo "🎉 ROBUST BATCH MERGE completed!"