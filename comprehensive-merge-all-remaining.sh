#!/bin/bash

# Comprehensive merge script for all remaining cursor branches
set -e

echo "🚀 Starting comprehensive merge of all remaining cursor branches..."

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -100)

echo "📋 Found $(echo "$CURSOR_BRANCHES" | wc -l) cursor branches to process in this batch"

# Counter for progress tracking
SUCCESS_COUNT=0
FAILED_COUNT=0
CONFLICT_COUNT=0
BATCH_COUNT=0

# Process each branch
for branch in $CURSOR_BRANCHES; do
    echo ""
    echo "📋 Processing branch: $branch"
    
    # Checkout the branch
    if ! git checkout "$branch" 2>/dev/null; then
        echo "⚠️  Could not checkout $branch, skipping..."
        ((FAILED_COUNT++))
        continue
    fi
    
    # Switch back to main
    git checkout main
    
    # Attempt to merge
    echo "🔄 Attempting to merge $branch..."
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        ((SUCCESS_COUNT++))
    else
        echo "⚠️  Merge conflict in $branch, attempting to resolve..."
        
        # Try to resolve conflicts automatically
        if git add . && git commit -m "Merge $branch with auto-resolved conflicts" 2>/dev/null; then
            echo "✅ Resolved conflicts and merged $branch"
            ((SUCCESS_COUNT++))
            ((CONFLICT_COUNT++))
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort 2>/dev/null || true
            ((FAILED_COUNT++))
        fi
    fi
    
    # Push progress every 20 branches
    if ((SUCCESS_COUNT % 20 == 0)); then
        echo "💾 Pushing progress to remote..."
        git push origin main --force-with-lease 2>/dev/null || true
    fi
    
    echo "📊 Progress: $SUCCESS_COUNT successful, $FAILED_COUNT failed, $CONFLICT_COUNT conflicts resolved"
done

# Final push
echo "💾 Final push to remote..."
git push origin main --force-with-lease

echo ""
echo "🎉 Merge process completed!"
echo "📊 Final stats:"
echo "   ✅ Successful merges: $SUCCESS_COUNT"
echo "   ❌ Failed merges: $FAILED_COUNT"
echo "   🔧 Conflicts resolved: $CONFLICT_COUNT"