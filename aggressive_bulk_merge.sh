#!/bin/bash

# Aggressive bulk merge for all remaining branches
set -e

echo "🚀 Starting aggressive bulk merge of ALL remaining branches..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and it's up to date
echo "🔄 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
BATCH_SIZE=50

# Function to merge a batch of branches
merge_batch() {
    local batch_num=$1
    local start_idx=$2
    local end_idx=$3
    
    echo ""
    echo "📦 Processing batch $batch_num (branches $start_idx to $end_idx)"
    
    # Get batch of branches
    local batch_branches=$(git branch -r --no-merged main | sed -n "${start_idx},${end_idx}p")
    
    local batch_success=0
    local batch_failed=0
    
    while IFS= read -r branch; do
        if [ -n "$branch" ]; then
            echo "🔄 Attempting to merge: $branch"
            
            # Try merge with automatic conflict resolution
            if git merge "$branch" --no-ff -X ours -m "Aggressive merge: $branch" 2>/dev/null; then
                echo "✅ Successfully merged $branch"
                ((batch_success++))
                ((SUCCESSFUL_MERGES++))
            else
                # Handle conflicts automatically
                echo "⚠️  Conflicts detected, resolving automatically..."
                
                # Use ours strategy for all conflicts
                git checkout --ours . 2>/dev/null || true
                git add . 2>/dev/null || true
                
                if git commit -m "Auto-resolved conflicts for $branch" 2>/dev/null; then
                    echo "✅ Auto-resolved conflicts and merged $branch"
                    ((batch_success++))
                    ((SUCCESSFUL_MERGES++))
                else
                    echo "❌ Failed to auto-resolve conflicts for $branch"
                    git merge --abort 2>/dev/null || true
                    ((batch_failed++))
                    ((FAILED_MERGES++))
                fi
            fi
        fi
    done <<< "$batch_branches"
    
    echo "📊 Batch $batch_num results: $batch_success successful, $batch_failed failed"
    
    # Push after each batch
    echo "💾 Pushing batch $batch_num changes..."
    if git push origin main --force 2>/dev/null; then
        echo "✅ Successfully pushed batch $batch_num"
    else
        echo "❌ Failed to push batch $batch_num"
    fi
    
    return $batch_failed
}

# Get total number of unmerged branches
TOTAL_BRANCHES=$(git branch -r --no-merged main | wc -l)
echo "📊 Total unmerged branches: $TOTAL_BRANCHES"

# Calculate number of batches
TOTAL_BATCHES=$(( (TOTAL_BRANCHES + BATCH_SIZE - 1) / BATCH_SIZE ))
echo "📊 Processing in $TOTAL_BATCHES batches of $BATCH_SIZE branches each"

# Process all batches
for batch_num in $(seq 1 $TOTAL_BATCHES); do
    start_idx=$(( (batch_num - 1) * BATCH_SIZE + 1 ))
    end_idx=$(( batch_num * BATCH_SIZE ))
    
    # Adjust end_idx if it exceeds total branches
    if [ $end_idx -gt $TOTAL_BRANCHES ]; then
        end_idx=$TOTAL_BRANCHES
    fi
    
    merge_batch $batch_num $start_idx $end_idx
    
    # Progress update
    echo "📊 Overall progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed"
    echo "📊 Remaining branches: $((TOTAL_BRANCHES - SUCCESSFUL_MERGES - FAILED_MERGES))"
    
    # Small delay between batches
    sleep 2
done

# Final summary
echo ""
echo "📊 Aggressive Bulk Merge Summary:"
echo "✅ Successful merges: $SUCCESSFUL_MERGES"
echo "❌ Failed merges: $FAILED_MERGES"
echo "📊 Total processed: $((SUCCESSFUL_MERGES + FAILED_MERGES))"
echo "📊 Remaining unmerged: $(git branch -r --no-merged main | wc -l)"
echo "⏰ Completed at: $(date)"
echo "🎉 Aggressive bulk merge process completed!"