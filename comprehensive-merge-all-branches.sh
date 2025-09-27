#!/bin/bash

# Comprehensive Merge All Branches Script
# This script will systematically merge all remote branches into main

set -e

echo "🚀 Starting comprehensive merge of all branches into main..."
echo "📅 Started at: $(date)"

# Ensure we're on main and it's up to date
echo "🔄 Ensuring we're on main branch and up to date..."
git checkout main
git pull origin main

# Get list of all remote branches (excluding main and HEAD)
echo "📋 Getting list of all remote branches..."
ALL_BRANCHES=($(git branch -r | grep -v origin/main | grep -v HEAD | sed 's/origin\///' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//' | sort -V))

TOTAL_BRANCHES=${#ALL_BRANCHES[@]}
echo "📊 Found $TOTAL_BRANCHES branches to process"

# Counters for tracking progress
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0
ALREADY_UPTODATE_COUNT=0
CONFLICT_RESOLVED_COUNT=0

# Process branches in batches to avoid overwhelming the system
BATCH_SIZE=100
BATCH_NUMBER=1

for ((i=0; i<TOTAL_BRANCHES; i+=BATCH_SIZE)); do
    BATCH_END=$((i + BATCH_SIZE))
    if [ $BATCH_END -gt $TOTAL_BRANCHES ]; then
        BATCH_END=$TOTAL_BRANCHES
    fi
    
    echo ""
    echo "📦 Processing batch $BATCH_NUMBER: branches $((i+1))-$BATCH_END"
    echo "🕐 Batch started at: $(date)"
    
    # Process each branch in the current batch
    for ((j=i; j<BATCH_END; j++)); do
        branch="${ALL_BRANCHES[$j]}"
        current_branch=$((j+1))
        
        # Show progress every 10 branches
        if [ $((current_branch % 10)) -eq 0 ]; then
            echo "📊 Progress: $current_branch/$TOTAL_BRANCHES (✅ $SUCCESS_COUNT successful, ❌ $FAILED_COUNT failed, ⏭️ $SKIPPED_COUNT skipped, 📋 $ALREADY_UPTODATE_COUNT up-to-date)"
        fi
        
        # Skip very long branch names or problematic patterns
        if [ ${#branch} -gt 100 ] || [[ "$branch" =~ (HEAD|main|master) ]]; then
            echo "⏭️  Skipping problematic branch: $branch"
            ((SKIPPED_COUNT++))
            continue
        fi
        
        # Check if branch exists
        if ! git show-ref --verify --quiet "refs/remotes/origin/$branch" 2>/dev/null; then
            echo "⚠️  Branch $branch doesn't exist, skipping..."
            ((SKIPPED_COUNT++))
            continue
        fi
        
        # Check if branch has commits not in main
        if ! git log --oneline "origin/$branch" --not origin/main | head -1 > /dev/null 2>&1; then
            echo "📋 Branch $branch has no new commits, skipping..."
            ((ALREADY_UPTODATE_COUNT++))
            continue
        fi
        
        # Attempt to merge the branch
        echo "🔄 Merging branch: $branch"
        
        # Try different merge strategies
        MERGE_SUCCESS=false
        
        # Strategy 1: Normal merge
        if git merge "origin/$branch" --no-edit --no-ff 2>/dev/null; then
            echo "✅ Successfully merged $branch (normal merge)"
            ((SUCCESS_COUNT++))
            MERGE_SUCCESS=true
        # Strategy 2: Ours strategy (prefer main)
        elif git merge "origin/$branch" --no-edit --no-ff -X ours 2>/dev/null; then
            echo "✅ Successfully merged $branch (ours strategy)"
            ((SUCCESS_COUNT++))
            ((CONFLICT_RESOLVED_COUNT++))
            MERGE_SUCCESS=true
        # Strategy 3: Theirs strategy (prefer branch)
        elif git merge "origin/$branch" --no-edit --no-ff -X theirs 2>/dev/null; then
            echo "✅ Successfully merged $branch (theirs strategy)"
            ((SUCCESS_COUNT++))
            ((CONFLICT_RESOLVED_COUNT++))
            MERGE_SUCCESS=true
        # Strategy 4: Manual conflict resolution
        else
            echo "⚠️  Conflicts detected in $branch, attempting resolution..."
            
            # Check if we're in a merge state
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                # Try to resolve conflicts automatically
                git checkout --ours . 2>/dev/null || true
                git add . 2>/dev/null || true
                
                if git commit --no-edit 2>/dev/null; then
                    echo "✅ Resolved conflicts for $branch"
                    ((SUCCESS_COUNT++))
                    ((CONFLICT_RESOLVED_COUNT++))
                    MERGE_SUCCESS=true
                else
                    echo "❌ Failed to resolve conflicts for $branch"
                    git merge --abort 2>/dev/null || true
                    ((FAILED_COUNT++))
                fi
            else
                echo "❌ Failed to merge $branch"
                git merge --abort 2>/dev/null || true
                ((FAILED_COUNT++))
            fi
        fi
        
        # Clean up any stray files
        git clean -fd 2>/dev/null || true
    done
    
    # Push changes after each batch
    echo "📤 Pushing batch $BATCH_NUMBER changes..."
    if git push origin main; then
        echo "✅ Batch $BATCH_NUMBER pushed successfully"
    else
        echo "❌ Failed to push batch $BATCH_NUMBER"
    fi
    
    ((BATCH_NUMBER++))
    
    # Brief pause between batches to avoid overwhelming the system
    echo "⏸️  Brief pause before next batch..."
    sleep 2
done

# Final push
echo "📤 Final push to origin/main..."
if git push origin main; then
    echo "✅ Successfully pushed all merged changes"
else
    echo "⚠️  Failed to push final changes"
fi

echo ""
echo "🎉 Comprehensive merge process completed!"
echo "📅 Completed at: $(date)"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESS_COUNT"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLVED_COUNT"
echo "   ❌ Failed merges: $FAILED_COUNT"
echo "   ⚠️  Skipped branches: $SKIPPED_COUNT"
echo "   📋 Already up-to-date: $ALREADY_UPTODATE_COUNT"
echo "   📊 Total processed: $((SUCCESS_COUNT + FAILED_COUNT + SKIPPED_COUNT + ALREADY_UPTODATE_COUNT))"

# Calculate success rate
if [ $((SUCCESS_COUNT + FAILED_COUNT)) -gt 0 ]; then
    SUCCESS_RATE=$((SUCCESS_COUNT * 100 / (SUCCESS_COUNT + FAILED_COUNT)))
    echo "   📈 Success rate: $SUCCESS_RATE%"
fi

# Show final status
echo ""
echo "🔍 Final repository status:"
git status --short
echo ""
echo "📈 Latest commits:"
git log --oneline -5

echo ""
echo "✅ All branches have been processed!"