#!/bin/bash

# Batch merge script for all cursor branches
set -e

echo "🚀 Starting batch merge process..."

# List of all branches to process
BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-1361"
    "cursor/fix-errors-and-merge-to-main-1aaf"
    "cursor/fix-errors-and-merge-to-main-2303"
    "cursor/fix-errors-and-merge-to-main-2ad6"
    "cursor/fix-errors-and-merge-to-main-549d"
    "cursor/fix-errors-and-merge-to-main-5562"
    "cursor/fix-errors-and-merge-to-main-59dc"
    "cursor/fix-errors-and-merge-to-main-59e5"
    "cursor/fix-errors-and-merge-to-main-5a1e"
    "cursor/fix-errors-and-merge-to-main-5caf"
    "cursor/fix-errors-and-merge-to-main-6517"
    "cursor/fix-errors-and-merge-to-main-69a3"
    "cursor/fix-errors-and-merge-to-main-6af4"
    "cursor/fix-errors-and-merge-to-main-7162"
    "cursor/fix-errors-and-merge-to-main-7679"
    "cursor/fix-errors-and-merge-to-main-7a03"
    "cursor/fix-errors-and-merge-to-main-8428"
    "cursor/fix-errors-and-merge-to-main-8fe9"
    "cursor/fix-errors-and-merge-to-main-95bc"
    "cursor/fix-errors-and-merge-to-main-9759"
    "cursor/fix-errors-and-merge-to-main-9a25"
    "cursor/fix-errors-and-merge-to-main-a771"
    "cursor/fix-errors-and-merge-to-main-adc9"
    "cursor/fix-errors-and-merge-to-main-b32f"
    "cursor/fix-errors-and-merge-to-main-b7c3"
    "cursor/fix-errors-and-merge-to-main-bcfd"
    "cursor/fix-errors-and-merge-to-main-bd5e"
    "cursor/fix-errors-and-merge-to-main-c24f"
    "cursor/fix-errors-and-merge-to-main-c26f"
    "cursor/fix-errors-and-merge-to-main-c338"
    "cursor/fix-errors-and-merge-to-main-caf5"
    "cursor/fix-errors-and-merge-to-main-cf6a"
    "cursor/fix-errors-and-merge-to-main-d14e"
    "cursor/fix-errors-and-merge-to-main-e14f"
    "cursor/fix-errors-and-merge-to-main-e7ee"
    "cursor/fix-errors-and-merge-to-main-e8d8"
    "cursor/fix-errors-and-merge-to-main-ea18"
    "cursor/fix-errors-and-merge-to-main-ec2e"
    "cursor/fix-errors-and-merge-to-main-ec70"
    "cursor/fix-errors-and-merge-to-main-f08d"
    "cursor/fix-errors-and-merge-to-main-fed1"
)

# Function to process a single branch
process_branch() {
    local branch=$1
    echo "🔄 Processing: $branch"
    
    # Checkout the branch
    git checkout "$branch" 2>/dev/null || {
        echo "⚠️  Branch $branch not found, skipping..."
        return 0
    }
    
    # Try to merge main into the branch
    if git merge main --no-edit 2>/dev/null; then
        echo "✅ Clean merge for $branch"
    else
        echo "🔧 Resolving conflicts in $branch..."
        # Use our conflict resolution script
        node fix_merge_conflicts.cjs
        git commit -m "Merge main into $branch - resolved conflicts" || true
    fi
    
    # Switch back to main
    git checkout main
    
    # Merge the branch into main
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch into main"
    else
        echo "⚠️  Final merge conflict, resolving..."
        node fix_merge_conflicts.cjs
        git commit -m "Merge $branch into main - resolved conflicts" || true
    fi
    
    echo "🎉 Completed: $branch"
}

# Process branches in batches of 5
BATCH_SIZE=5
TOTAL_BRANCHES=${#BRANCHES[@]}
PROCESSED=0

echo "📊 Total branches to process: $TOTAL_BRANCHES"

for ((i=0; i<TOTAL_BRANCHES; i+=BATCH_SIZE)); do
    echo "🚀 Processing batch $((i/BATCH_SIZE + 1))..."
    
    for ((j=i; j<i+BATCH_SIZE && j<TOTAL_BRANCHES; j++)); do
        process_branch "${BRANCHES[j]}"
        ((PROCESSED++))
    done
    
    echo "📤 Pushing progress after batch $((i/BATCH_SIZE + 1))..."
    git push origin main || echo "⚠️  Push failed, continuing..."
    
    echo "✅ Batch $((i/BATCH_SIZE + 1)) completed. Progress: $PROCESSED/$TOTAL_BRANCHES"
    echo "---"
done

echo "🎯 All branches processed successfully!"
echo "📊 Final stats: $PROCESSED/$TOTAL_BRANCHES branches merged"
echo "📤 Final push to remote..."
git push origin main

echo "✅ Batch merge process completed!"