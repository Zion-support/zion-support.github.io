#!/bin/bash

# Efficient branch merging script
set -e

echo "Starting efficient branch processing..."

# Get all recent branches excluding main and HEAD
all_branches=($(git branch -r --sort=-committerdate | grep -v "origin/main" | grep -v "origin/HEAD"))

echo "Found ${#all_branches[@]} total branches"

# Process branches in batches of 5
batch_size=5
total_branches=${#all_branches[@]}
processed=0

for ((i=0; i<total_branches; i+=batch_size)); do
    batch_end=$((i + batch_size))
    if [ $batch_end -gt $total_branches ]; then
        batch_end=$total_branches
    fi
    
    echo "=== Processing batch $((i/batch_size + 1)) (branches $((i+1))-$batch_end) ==="
    
    for ((j=i; j<batch_end; j++)); do
        branch=${all_branches[j]}
        branch_name=${branch#origin/}
        
        echo "Processing: $branch_name"
        
        # Check if branch has meaningful changes
        changes=$(git log --oneline main..$branch_name 2>/dev/null | wc -l)
        
        if [ $changes -gt 10 ]; then
            echo "Branch $branch_name has $changes meaningful changes"
            
            # Attempt to merge
            if git merge --no-edit $branch_name 2>/dev/null; then
                echo "Successfully merged $branch_name"
                processed=$((processed + 1))
            else
                echo "Failed to merge $branch_name (may already be merged or have conflicts)"
            fi
        else
            echo "Skipping $branch_name (only $changes changes)"
        fi
    done
    
    echo "Processed $processed branches so far"
    echo ""
done

echo "Efficient processing complete. Total branches processed: $processed"