#!/bin/bash

# Script to merge branches in batches
set -e

BATCH_SIZE=10
START_INDEX=${1:-0}

echo "Starting batch merge process (batch size: $BATCH_SIZE, start index: $START_INDEX)..."

# Get all cursor branches
branches=$(git branch -r | grep "cursor/create-and-deploy-new-content" | sed 's/origin\///' | sort)

# Convert to array
branch_array=($branches)
total_branches=${#branch_array[@]}

echo "Total branches to process: $total_branches"

# Calculate batch range
end_index=$((START_INDEX + BATCH_SIZE))
if [ $end_index -gt $total_branches ]; then
    end_index=$total_branches
fi

echo "Processing branches $START_INDEX to $((end_index - 1))"

success_count=0
failed_branches=()

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "Processing branch: $branch"
    
    # Fetch the branch if not already fetched
    git fetch origin "$branch" 2>/dev/null || {
        echo "Could not fetch branch $branch, skipping..."
        return 1
    }
    
    # Try to merge
    if git merge "origin/$branch" --no-ff -m "Merge branch $branch" 2>/dev/null; then
        echo "✅ Successfully merged branch $branch"
        return 0
    else
        echo "⚠️  Merge conflict in branch $branch, resolving..."
        
        # Resolve conflicts by accepting our version
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        # Complete the merge
        if git commit -m "Merge branch $branch (resolved conflicts)" 2>/dev/null; then
            echo "✅ Resolved conflicts and merged branch $branch"
            return 0
        else
            echo "❌ Failed to merge branch $branch"
            return 1
        fi
    fi
}

# Process branches in this batch
for ((i=START_INDEX; i<end_index; i++)); do
    branch="${branch_array[$i]}"
    echo "=========================================="
    echo "Processing branch $((i+1))/$total_branches: $branch"
    echo "=========================================="
    
    if merge_branch "$branch"; then
        success_count=$((success_count + 1))
    else
        failed_branches+=("$branch")
    fi
    echo ""
done

echo "=========================================="
echo "Batch merge completed: $success_count/$BATCH_SIZE branches merged successfully"
echo "=========================================="

if [ ${#failed_branches[@]} -gt 0 ]; then
    echo "Failed branches:"
    for branch in "${failed_branches[@]}"; do
        echo "  - $branch"
    done
fi

# Push all changes
echo "Pushing changes to main branch..."
git push origin main

echo "Batch processing completed!"
echo "Next batch command: ./merge_batch.sh $end_index"