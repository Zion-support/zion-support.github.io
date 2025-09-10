#!/bin/bash

# Efficient batch merge script for large number of branches
set -e

echo "Starting batch merge process for remaining branches..."

# Get all branches and process in batches
BATCH_SIZE=50
TOTAL_PROCESSED=0
SUCCESS_COUNT=0
FAILED_BRANCHES=()

# Get list of all branches
ALL_BRANCHES=($(git branch -r | grep -E "(codex|cursor)" | grep -v "origin/main" | head -1000))

echo "Found ${#ALL_BRANCHES[@]} branches to process in batches of $BATCH_SIZE"

# Process branches in batches
for ((i=0; i<${#ALL_BRANCHES[@]}; i+=BATCH_SIZE)); do
    BATCH_END=$((i + BATCH_SIZE))
    if [ $BATCH_END -gt ${#ALL_BRANCHES[@]} ]; then
        BATCH_END=${#ALL_BRANCHES[@]}
    fi
    
    echo ""
    echo "Processing batch $((i/BATCH_SIZE + 1)): branches $((i+1)) to $BATCH_END"
    
    # Process each branch in the current batch
    for ((j=i; j<BATCH_END; j++)); do
        branch="${ALL_BRANCHES[j]}"
        echo "Processing: $branch"
        
        # Extract branch name without origin/
        local_branch=$(echo "$branch" | sed 's/origin\///')
        
        # Skip if branch already processed or doesn't exist
        if git show-ref --verify --quiet "refs/remotes/$branch"; then
            # Fetch the branch
            if git fetch origin "$local_branch" 2>/dev/null; then
                # Try to merge into main
                if git merge "$local_branch" --no-ff -m "Merge $local_branch into main" 2>/dev/null; then
                    echo "  ✓ Successfully merged $local_branch"
                    SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
                else
                    echo "  ✗ Failed to merge $local_branch (conflicts)"
                    git merge --abort 2>/dev/null || true
                    FAILED_BRANCHES+=("$branch")
                fi
            else
                echo "  ✗ Failed to fetch $local_branch"
                FAILED_BRANCHES+=("$branch")
            fi
        else
            echo "  - Skipping $branch (not found)"
        fi
        
        TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    done
    
    # Push after each batch
    echo "Pushing batch $((i/BATCH_SIZE + 1))..."
    if git push origin main; then
        echo "Batch $((i/BATCH_SIZE + 1)) pushed successfully"
    else
        echo "Failed to push batch $((i/BATCH_SIZE + 1))"
        git pull origin main --rebase
        git push origin main
    fi
    
    # Progress update
    echo "Progress: $TOTAL_PROCESSED/${#ALL_BRANCHES[@]} branches processed"
done

echo ""
echo "Batch merge process completed!"
echo "Total processed: $TOTAL_PROCESSED branches"
echo "Successfully merged: $SUCCESS_COUNT branches"
echo "Failed branches: ${#FAILED_BRANCHES[@]}"

if [ ${#FAILED_BRANCHES[@]} -gt 0 ]; then
    echo "Failed branches:"
    for branch in "${FAILED_BRANCHES[@]}"; do
        echo "  - $branch"
    done
fi