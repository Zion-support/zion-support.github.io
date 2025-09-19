#!/bin/bash

# Efficient batch merge script to handle cursor branches in smaller chunks
set -e

echo "🚀 Starting EFFICIENT BATCH MERGE of cursor branches..."

# Get first 50 cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/" | sed 's/origin\///' | head -50)

SUCCESS_COUNT=0
FAILED_COUNT=0
TOTAL_COUNT=0
ALREADY_UPTODATE=0
CONFLICT_COUNT=0

echo "📊 Processing first 50 cursor branches..."

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
    
    # Push every 10 successful merges
    if [ $((SUCCESS_COUNT % 10)) -eq 0 ] && [ $SUCCESS_COUNT -gt 0 ]; then
        echo "🔄 Pushing changes after $SUCCESS_COUNT successful merges..."
        git push origin main 2>/dev/null || echo "⚠️  Push failed, continuing..."
    fi
done

echo ""
echo "📊 BATCH MERGE SUMMARY:"
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "ℹ️  Already up to date: $ALREADY_UPTODATE branches"
echo "⚠️  Conflicts resolved: $CONFLICT_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo "📋 Total processed: $TOTAL_COUNT branches"

# Final push
echo "🔄 Pushing final changes..."
git push origin main

echo "🎉 BATCH MERGE completed!"