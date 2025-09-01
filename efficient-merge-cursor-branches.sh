#!/bin/bash

# Efficient Merge Cursor Branches Script
# This script merges cursor branches in smaller batches with better error handling

set -e

echo "🚀 Starting efficient merge of cursor branches into main..."

# Ensure we're on main branch
git checkout main
git pull origin main

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///')

# Counter for tracking progress
TOTAL_BRANCHES=$(echo "$CURSOR_BRANCHES" | wc -l)
CURRENT=0
SUCCESSFUL=0
FAILED=0
SKIPPED=0

echo "📊 Found $TOTAL_BRANCHES cursor branches to merge"

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local current=$2
    local total=$3
    
    echo ""
    echo "🔄 [$current/$total] Merging branch: $branch"
    echo "=================================================="
    
    # Check if branch exists and is accessible
    if ! git ls-remote --heads origin "$branch" >/dev/null 2>&1; then
        echo "  ⚠️  Branch $branch not accessible, skipping..."
        return 1
    fi
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit --strategy=recursive --strategy-option=theirs 2>/dev/null; then
        echo "  ✅ Successfully merged $branch"
        SUCCESSFUL=$((SUCCESSFUL + 1))
        return 0
    else
        echo "  ❌ Failed to merge $branch, resolving conflicts..."
        
        # Try to resolve conflicts by keeping main version
        if git reset --hard HEAD 2>/dev/null; then
            echo "  🔧 Reset to main, skipping $branch"
            SKIPPED=$((SKIPPED + 1))
            return 1
        else
            echo "  ❌ Could not reset, marking as failed"
            FAILED=$((FAILED + 1))
            return 1
        fi
    fi
}

# Process branches in batches of 10
BATCH_SIZE=10
BATCH_NUM=1

echo "📦 Processing branches in batches of $BATCH_SIZE..."

while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        CURRENT=$((CURRENT + 1))
        
        # Merge the branch
        if merge_branch "$branch" "$CURRENT" "$TOTAL_BRANCHES"; then
            # If successful, commit and push every 5 successful merges
            if [ $((SUCCESSFUL % 5)) -eq 0 ]; then
                echo "  📤 Committing and pushing batch $BATCH_NUM..."
                git add .
                git commit -m "Merge cursor branches batch $BATCH_NUM - $SUCCESSFUL successful merges" || true
                git push origin main || echo "  ⚠️  Push failed, continuing..."
            fi
        fi
        
        # Process in batches
        if [ $((CURRENT % BATCH_SIZE)) -eq 0 ]; then
            echo ""
            echo "📊 Batch $BATCH_NUM completed:"
            echo "  ✅ Successful: $SUCCESSFUL"
            echo "  ❌ Failed: $FAILED"
            echo "  ⏭️  Skipped: $SKIPPED"
            echo "  📍 Progress: $CURRENT/$TOTAL_BRANCHES"
            echo ""
            
            # Commit current batch
            git add .
            git commit -m "Complete cursor branch merge batch $BATCH_NUM" || true
            
            # Push to remote
            git push origin main || echo "  ⚠️  Push failed, continuing..."
            
            BATCH_NUM=$((BATCH_NUM + 1))
            
            # Small delay between batches
            sleep 2
        fi
    fi
done <<< "$CURSOR_BRANCHES"

# Final commit and push
echo ""
echo "🎉 All batches completed! Finalizing..."
git add .
git commit -m "Complete cursor branch merge process - $SUCCESSFUL successful, $FAILED failed, $SKIPPED skipped" || true
git push origin main

echo ""
echo "📊 Final Results:"
echo "  ✅ Successful merges: $SUCCESSFUL"
echo "  ❌ Failed merges: $FAILED"
echo "  ⏭️  Skipped branches: $SKIPPED"
echo "  📍 Total processed: $CURRENT/$TOTAL_BRANCHES"
echo ""
echo "🚀 Cursor branch merge process completed!"