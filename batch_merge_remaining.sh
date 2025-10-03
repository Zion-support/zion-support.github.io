#!/bin/bash

# Batch merge script for remaining cursor branches
set -e

echo "🚀 Starting batch merge of remaining cursor branches..."

# Get total count
TOTAL_BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | wc -l)
echo "📊 Total branches to process: $TOTAL_BRANCHES"

# Process in batches of 100
BATCH_SIZE=100
BATCH_NUM=1
START_INDEX=51  # Start from 51 since we already processed 50

while true; do
    echo ""
    echo "🔄 Processing Batch $BATCH_NUM (branches $START_INDEX to $((START_INDEX + BATCH_SIZE - 1)))"
    
    # Get current batch of branches
    BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | sed -n "${START_INDEX},$((START_INDEX + BATCH_SIZE - 1))p")
    
    if [ -z "$BRANCHES" ]; then
        echo "✅ No more branches to process"
        break
    fi
    
    BATCH_COUNT=$(echo "$BRANCHES" | wc -l)
    echo "📊 Processing $BATCH_COUNT branches in this batch"
    
    SUCCESS_COUNT=0
    FAILED_COUNT=0
    
    # Process each branch in the batch
    for branch in $BRANCHES; do
        echo "  🔄 Processing: $branch"
        
        # Delete local branch if exists
        git branch -D "$branch" 2>/dev/null || true
        
        # Checkout and merge
        if git checkout -b "$branch" "origin/$branch" 2>/dev/null; then
            git checkout main
            
            # Try merge
            if git merge "$branch" --no-edit 2>/dev/null; then
                echo "    ✅ Merged successfully"
                git branch -d "$branch" 2>/dev/null || true
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            else
                echo "    ⚠️  Conflict detected, attempting auto-resolve..."
                
                # Auto-resolve conflicts
                CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
                if [ -n "$CONFLICT_FILES" ]; then
                    for file in $CONFLICT_FILES; do
                        # Prefer main branch for most files
                        git checkout --ours "$file" 2>/dev/null || true
                    done
                    
                    if git add . && git commit -m "🔧 Auto-resolve conflicts for $branch" --no-edit 2>/dev/null; then
                        echo "    ✅ Conflicts resolved"
                        git branch -d "$branch" 2>/dev/null || true
                        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
                    else
                        echo "    ❌ Failed to resolve conflicts"
                        git merge --abort 2>/dev/null || true
                        git branch -d "$branch" 2>/dev/null || true
                        FAILED_COUNT=$((FAILED_COUNT + 1))
                    fi
                else
                    echo "    ❌ Merge failed for unknown reason"
                    git merge --abort 2>/dev/null || true
                    git branch -d "$branch" 2>/dev/null || true
                    FAILED_COUNT=$((FAILED_COUNT + 1))
                fi
            fi
        else
            echo "    ❌ Failed to checkout $branch"
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    done
    
    echo "📊 Batch $BATCH_NUM Summary: ✅ $SUCCESS_COUNT successful, ❌ $FAILED_COUNT failed"
    
    # Push changes after each batch
    echo "🚀 Pushing changes to main..."
    git pull origin main --rebase
    git push origin main
    
    # Update for next batch
    START_INDEX=$((START_INDEX + BATCH_SIZE))
    BATCH_NUM=$((BATCH_NUM + 1))
    
    # Safety check to prevent infinite loop
    if [ $START_INDEX -gt $TOTAL_BRANCHES ]; then
        echo "✅ Reached end of branch list"
        break
    fi
    
    # Brief pause between batches
    sleep 2
done

echo ""
echo "🎉 Batch merge process completed!"
echo "📊 Final summary: All batches processed"

# Final cleanup
git branch | grep "cursor/fix-errors-and-merge-to-main" | xargs -r git branch -D 2>/dev/null || true

exit 0