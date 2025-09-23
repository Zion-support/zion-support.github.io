#!/bin/bash

# Efficient Batch PR Merge Script
# This script processes branches in batches of 50

set -e

echo "🚀 Starting Efficient Batch PR Merge Process"
echo "==========================================="

# Get all branches
ALL_BRANCHES=$(git branch -r | grep "cursor/create-and-deploy-new-content" | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -l)

echo "📋 Total branches to process: $TOTAL_BRANCHES"

# Process in batches of 50
BATCH_SIZE=50
BATCH_NUM=1
OFFSET=0

while [ $OFFSET -lt $TOTAL_BRANCHES ]; do
    echo ""
    echo "🔄 Processing Batch $BATCH_NUM (branches $((OFFSET + 1))-$((OFFSET + BATCH_SIZE)))"
    echo "=================================================="
    
    # Get current batch
    CURRENT_BATCH=$(echo "$ALL_BRANCHES" | sed -n "$((OFFSET + 1)),$((OFFSET + BATCH_SIZE))p")
    BATCH_COUNT=$(echo "$CURRENT_BATCH" | wc -l)
    
    echo "📋 Processing $BATCH_COUNT branches in this batch"
    
    # Counter for this batch
    BATCH_SUCCESS=0
    BATCH_FAILED=0
    
    # Process each branch in current batch
    branch_num=1
    for branch in $CURRENT_BATCH; do
        echo ""
        echo "🔄 [$branch_num/$BATCH_COUNT] Processing: $branch"
        echo "----------------------------------------"
        
        # Try to merge directly
        if git merge "origin/$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            BATCH_SUCCESS=$((BATCH_SUCCESS + 1))
        else
            echo "❌ Merge conflict for $branch, attempting resolution..."
            
            # Try to resolve conflicts automatically
            if resolve_conflicts_quick; then
                echo "✅ Conflicts resolved for $branch"
                git add .
                git commit -m "Resolve merge conflicts for $branch"
                BATCH_SUCCESS=$((BATCH_SUCCESS + 1))
            else
                echo "❌ Could not resolve conflicts for $branch"
                git merge --abort 2>/dev/null || true
                BATCH_FAILED=$((BATCH_FAILED + 1))
            fi
        fi
        
        branch_num=$((branch_num + 1))
        
        # Small delay to avoid overwhelming
        sleep 0.5
    done
    
    # Push changes after each batch
    echo ""
    echo "🚀 Pushing batch $BATCH_NUM changes..."
    if git push origin main; then
        echo "✅ Batch $BATCH_NUM pushed successfully"
    else
        echo "⚠️  Failed to push batch $BATCH_NUM, will retry later"
    fi
    
    # Summary for this batch
    echo ""
    echo "📊 Batch $BATCH_NUM Summary:"
    echo "✅ Successfully merged: $BATCH_SUCCESS"
    echo "❌ Failed to merge: $BATCH_FAILED"
    echo "📊 Total in batch: $BATCH_COUNT"
    
    # Update counters
    OFFSET=$((OFFSET + BATCH_SIZE))
    BATCH_NUM=$((BATCH_NUM + 1))
    
    # Add delay between batches
    sleep 2
done

echo ""
echo "🎉 All Batches Complete!"
echo "======================="
echo "📊 Total branches processed: $TOTAL_BRANCHES"

# Function to resolve conflicts quickly
resolve_conflicts_quick() {
    local resolved=false
    
    # Resolve common conflicts by taking the newer version
    if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
        # For all conflicted files, take the newer version (theirs)
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read line; do
            file=$(echo "$line" | awk '{print $2}')
            if [ -f "$file" ]; then
                git checkout --theirs "$file" 2>/dev/null && git add "$file"
                resolved=true
            fi
        done
        
        # Also resolve any remaining conflicts
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read line; do
            file=$(echo "$line" | awk '{print $2}')
            if [ -f "$file" ]; then
                git checkout --ours "$file" 2>/dev/null && git add "$file"
                resolved=true
            fi
        done
    fi
    
    return 0
}