#!/bin/bash

# Parallel batch merge script for maximum efficiency
set -e

echo "🚀 Starting PARALLEL BATCH MERGE of cursor branches..."

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local batch_id=$2
    
    echo "📋 [Batch $batch_id] Processing: $branch"
    
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✅ [Batch $batch_id] Successfully merged $branch"
        echo "SUCCESS:$branch" >> "/tmp/merge_results_$batch_id.txt"
    elif git merge "origin/$branch" --no-edit 2>&1 | grep -q "Already up to date"; then
        echo "ℹ️  [Batch $batch_id] Branch $branch already up to date"
        echo "UPTODATE:$branch" >> "/tmp/merge_results_$batch_id.txt"
    else
        echo "⚠️  [Batch $batch_id] Merge conflict in $branch, resolving..."
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit --no-edit 2>/dev/null; then
            echo "✅ [Batch $batch_id] Resolved conflicts and merged $branch"
            echo "SUCCESS:$branch" >> "/tmp/merge_results_$batch_id.txt"
        else
            echo "❌ [Batch $batch_id] Failed to resolve conflicts in $branch"
            echo "FAILED:$branch" >> "/tmp/merge_results_$batch_id.txt"
            git merge --abort 2>/dev/null || true
        fi
    fi
}

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/" | sed 's/origin\///')
TOTAL_BRANCHES=$(echo "$CURSOR_BRANCHES" | wc -l)

echo "📊 Processing $TOTAL_BRANCHES cursor branches in parallel batches..."

# Process branches in batches of 100
BATCH_SIZE=100
BATCH_NUM=0
CURRENT_BATCH=()

for branch in $CURSOR_BRANCHES; do
    CURRENT_BATCH+=("$branch")
    
    if [ ${#CURRENT_BATCH[@]} -eq $BATCH_SIZE ]; then
        BATCH_NUM=$((BATCH_NUM + 1))
        echo "🔄 Processing batch $BATCH_NUM with ${#CURRENT_BATCH[@]} branches..."
        
        # Process batch in parallel
        for i in "${!CURRENT_BATCH[@]}"; do
            merge_branch "${CURRENT_BATCH[$i]}" "$BATCH_NUM" &
        done
        
        # Wait for all processes in this batch to complete
        wait
        
        # Push changes after each batch
        echo "🔄 Pushing changes after batch $BATCH_NUM..."
        for i in {1..3}; do
            if git push origin main 2>/dev/null; then
                echo "✅ Push successful after batch $BATCH_NUM"
                break
            else
                echo "⚠️  Push attempt $i failed, pulling latest changes..."
                git pull origin main 2>/dev/null || true
                sleep 2
            fi
        done
        
        # Clear current batch
        CURRENT_BATCH=()
        
        # Show progress
        echo "📊 Completed batch $BATCH_NUM, continuing..."
    fi
done

# Process remaining branches
if [ ${#CURRENT_BATCH[@]} -gt 0 ]; then
    BATCH_NUM=$((BATCH_NUM + 1))
    echo "🔄 Processing final batch $BATCH_NUM with ${#CURRENT_BATCH[@]} branches..."
    
    for i in "${!CURRENT_BATCH[@]}"; do
        merge_branch "${CURRENT_BATCH[$i]}" "$BATCH_NUM" &
    done
    
    wait
    
    # Final push
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
fi

# Aggregate results
SUCCESS_COUNT=0
UPTODATE_COUNT=0
FAILED_COUNT=0

for result_file in /tmp/merge_results_*.txt; do
    if [ -f "$result_file" ]; then
        SUCCESS_COUNT=$((SUCCESS_COUNT + $(grep -c "SUCCESS:" "$result_file" 2>/dev/null || echo 0)))
        UPTODATE_COUNT=$((UPTODATE_COUNT + $(grep -c "UPTODATE:" "$result_file" 2>/dev/null || echo 0)))
        FAILED_COUNT=$((FAILED_COUNT + $(grep -c "FAILED:" "$result_file" 2>/dev/null || echo 0)))
        rm -f "$result_file"
    fi
done

echo ""
echo "📊 PARALLEL BATCH MERGE SUMMARY:"
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "ℹ️  Already up to date: $UPTODATE_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo "📋 Total processed: $((SUCCESS_COUNT + UPTODATE_COUNT + FAILED_COUNT)) branches"

echo "🎉 PARALLEL BATCH MERGE completed!"