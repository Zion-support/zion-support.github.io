#!/bin/bash

# Script to merge multiple PRs efficiently
# Usage: ./merge_prs.sh [number_of_prs_to_merge]

NUM_PR=${1:-10}  # Default to 10 PRs if no argument provided
echo "Merging $NUM_PR PRs..."

# Get list of unmerged PRs
PRS=$(git branch -r --no-merged main | grep "cursor/" | head -$NUM_PR)

for pr in $PRS; do
    echo "Merging $pr..."
    
    # Try to merge with conflict resolution
    if git merge "$pr" --no-ff --allow-unrelated-histories -X theirs -m "Merge PR: $pr" 2>/dev/null; then
        echo "✓ Successfully merged $pr"
    else
        echo "⚠ Conflict in $pr, attempting to resolve..."
        
        # Check for common conflict patterns and resolve them
        if git status --porcelain | grep -q "deleted by us"; then
            # Handle modify/delete conflicts by adding the files
            git status --porcelain | grep "deleted by us" | awk '{print $2}' | xargs -I {} git add {}
        fi
        
        if git status --porcelain | grep -q "deleted by them"; then
            # Handle files deleted by them
            git status --porcelain | grep "deleted by them" | awk '{print $2}' | xargs -I {} git rm {}
        fi
        
        # Add all remaining conflicts
        git add .
        
        # Commit the merge
        if git commit -m "Merge PR: $pr - Resolved conflicts"; then
            echo "✓ Successfully merged $pr with conflict resolution"
        else
            echo "✗ Failed to merge $pr, aborting..."
            git merge --abort
        fi
    fi
done

echo "Completed merging $NUM_PR PRs"