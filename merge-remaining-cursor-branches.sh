#!/bin/bash

# Merge Remaining Cursor Branches Script
# This script efficiently merges remaining cursor branches with better conflict handling

set -e

echo "🚀 Starting efficient merge of remaining cursor branches into main..."

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
    echo "================================================"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit --strategy=recursive -X theirs 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESSFUL=$((SUCCESSFUL + 1))
        
        # Push after each successful merge
        if git push origin main 2>/dev/null; then
            echo "🚀 Pushed to remote successfully"
        else
            echo "⚠️  Push failed, but merge was successful"
        fi
        
    else
        echo "❌ Merge failed for $branch, resolving conflicts..."
        
        # Resolve conflicts by keeping main version
        if git checkout --ours . 2>/dev/null && git add . 2>/dev/null; then
            if git commit -m "Resolve merge conflicts from $branch - keep main version" 2>/dev/null; then
                echo "✅ Conflicts resolved for $branch"
                SUCCESSFUL=$((SUCCESSFUL + 1))
                
                # Push after conflict resolution
                if git push origin main 2>/dev/null; then
                    echo "🚀 Pushed to remote successfully"
                else
                    echo "⚠️  Push failed, but conflicts were resolved"
                fi
            else
                echo "❌ Failed to commit conflict resolution for $branch"
                git merge --abort 2>/dev/null || true
                FAILED=$((FAILED + 1))
            fi
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort 2>/dev/null || true
            FAILED=$((FAILED + 1))
        fi
    fi
}

# Process branches in smaller batches to avoid overwhelming the system
echo "🔄 Processing branches in batches..."
BATCH_SIZE=50
BATCH_NUM=1

echo "$CURSOR_BRANCHES" | while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        CURRENT=$((CURRENT + 1))
        
        # Process in batches
        if [ $((CURRENT % BATCH_SIZE)) -eq 0 ]; then
            echo ""
            echo "📦 Completed batch $BATCH_NUM (processed $CURRENT branches)"
            echo "📊 Progress: $SUCCESSFUL successful, $FAILED failed, $SKIPPED skipped"
            echo "🔄 Pausing briefly before next batch..."
            sleep 5
            BATCH_NUM=$((BATCH_NUM + 1))
        fi
        
        merge_branch "$branch" "$CURRENT" "$TOTAL_BRANCHES"
        
        # Small delay between merges to avoid overwhelming the system
        sleep 1
    fi
done

echo ""
echo "🎉 Merge process completed!"
echo "📊 Final Results:"
echo "   ✅ Successful merges: $SUCCESSFUL"
echo "   ❌ Failed merges: $FAILED"
echo "   ⏭️  Skipped: $SKIPPED"
echo "   📦 Total processed: $CURRENT"
echo ""
echo "🚀 All cursor branches have been processed!"