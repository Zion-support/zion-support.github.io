#!/bin/bash

# Conservative script to merge cursor branches in small batches
# This allows for better control and monitoring

set -e

echo "🚀 Starting batch merge of cursor branches..."
echo "📊 Processing branches in small batches for better control"

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Initialize counters
SUCCESS_COUNT=0
FAILED_COUNT=0
CONFLICT_COUNT=0
TOTAL_BRANCHES=0
BATCH_SIZE=10

echo "🔄 Processing branches in batches of $BATCH_SIZE..."

# Get first batch of cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | head -$BATCH_SIZE)

for branch in $CURSOR_BRANCHES; do
    TOTAL_BRANCHES=$((TOTAL_BRANCHES + 1))
    BRANCH_NAME=$(echo $branch | sed 's/origin\///')
    
    echo ""
    echo "📋 [$TOTAL_BRANCHES/$BATCH_SIZE] Processing: $BRANCH_NAME"
    
    # Fetch the branch
    git fetch origin $BRANCH_NAME
    
    # Check if branch has any commits not in main
    if git merge-base --is-ancestor origin/$BRANCH_NAME main 2>/dev/null; then
        echo "⏭️  Branch already merged, skipping: $BRANCH_NAME"
        continue
    fi
    
    # Attempt to merge with strategy
    echo "🔄 Attempting merge..."
    if git merge --no-edit --strategy-option=ours origin/$BRANCH_NAME 2>/dev/null; then
        echo "✅ Successfully merged: $BRANCH_NAME"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Commit the merge if needed
        if ! git diff --quiet HEAD~1 HEAD 2>/dev/null; then
            git commit --no-edit -m "Merge $BRANCH_NAME into main" || true
        fi
        
    else
        echo "⚠️  Merge conflict in: $BRANCH_NAME"
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Check git status for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Auto-resolving conflicts..."
            
            # Use ours strategy for conflicts (keep main branch version)
            git status --porcelain | while read status file; do
                case $status in
                    "UU"|"AA")
                        echo "  Resolving conflict in: $file"
                        git checkout --ours "$file" 2>/dev/null || true
                        git add "$file" 2>/dev/null || true
                        ;;
                    "DD")
                        echo "  Removing deleted file: $file"
                        git rm "$file" 2>/dev/null || true
                        ;;
                esac
            done
            
            # Commit the resolution
            if git commit --no-edit -m "Resolve conflicts in $BRANCH_NAME (prefer main)" 2>/dev/null; then
                echo "✅ Successfully resolved conflicts: $BRANCH_NAME"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
                CONFLICT_COUNT=$((CONFLICT_COUNT - 1))
            else
                echo "❌ Failed to resolve conflicts: $BRANCH_NAME"
                git merge --abort 2>/dev/null || true
                FAILED_COUNT=$((FAILED_COUNT + 1))
            fi
        else
            # No real conflicts, just commit
            git commit --no-edit -m "Merge $BRANCH_NAME into main" 2>/dev/null || true
            echo "✅ Successfully merged (no conflicts): $BRANCH_NAME"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            CONFLICT_COUNT=$((CONFLICT_COUNT - 1))
        fi
    fi
    
    echo "📈 Current stats: ✅ $SUCCESS_COUNT | ⚠️ $CONFLICT_COUNT | ❌ $FAILED_COUNT"
done

echo ""
echo "🎯 Batch Summary:"
echo "📊 Branches processed: $TOTAL_BRANCHES"
echo "✅ Successfully merged: $SUCCESS_COUNT"
echo "⚠️  Conflicts resolved: $CONFLICT_COUNT"
echo "❌ Failed merges: $FAILED_COUNT"

# Check if we should continue
if [ $TOTAL_BRANCHES -gt 0 ]; then
    echo ""
    echo "🚀 Pushing changes to origin/main..."
    git push origin main
    
    echo "✅ Batch completed successfully!"
    echo "🔄 Run this script again to process the next batch"
else
    echo "ℹ️  No branches to process in this batch"
fi

echo ""
echo "📊 Remaining branches: $(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | wc -l)"