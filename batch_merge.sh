#!/bin/bash

# Batch merge script to merge multiple branches efficiently
# This script will attempt to merge branches and resolve conflicts automatically

echo "Starting batch merge process..."

# List of branches to merge (most recent first)
branches=(
    "origin/cursor/fix-errors-and-merge-to-main-0e4c"
    "origin/cursor/fix-errors-and-merge-to-main-2bc2"
    "origin/cursor/fix-errors-and-merge-to-main-3ba2"
    "origin/cursor/fix-errors-and-merge-to-main-4157"
    "origin/cursor/fix-errors-and-merge-to-main-4583"
    "origin/cursor/fix-errors-and-merge-to-main-46db"
    "origin/cursor/fix-errors-and-merge-to-main-47bd"
    "origin/cursor/fix-errors-and-merge-to-main-488a"
    "origin/cursor/fix-errors-and-merge-to-main-4942"
    "origin/cursor/fix-errors-and-merge-to-main-4ae2"
    "origin/cursor/fix-errors-and-merge-to-main-4b35"
    "origin/cursor/fix-errors-and-merge-to-main-4b83"
    "origin/cursor/fix-errors-and-merge-to-main-4bc9"
    "origin/cursor/fix-errors-and-merge-to-main-4dd8"
    "origin/cursor/fix-errors-and-merge-to-main-51f9"
    "origin/cursor/fix-errors-and-merge-to-main-526d"
    "origin/cursor/fix-errors-and-merge-to-main-5324"
    "origin/cursor/fix-errors-and-merge-to-main-533c"
    "origin/cursor/fix-errors-and-merge-to-main-544f"
    "origin/cursor/fix-errors-and-merge-to-main-5451"
)

successful_merges=0
failed_merges=0

for branch in "${branches[@]}"; do
    echo ""
    echo "Attempting to merge: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
        ((successful_merges++))
    else
        echo "⚠️  Merge conflict detected in $branch"
        
        # Check if there are actual conflicts
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo "  Resolving conflicts using main branch version..."
            ./resolve_conflicts.sh
            
            if git add . && git commit -m "Resolve merge conflicts for $branch"; then
                echo "✅ Successfully resolved conflicts and merged $branch"
                ((successful_merges++))
            else
                echo "❌ Failed to resolve conflicts for $branch"
                git merge --abort
                ((failed_merges++))
            fi
        else
            echo "  No actual conflicts, completing merge..."
            if git add . && git commit -m "Complete merge for $branch"; then
                echo "✅ Successfully completed merge for $branch"
                ((successful_merges++))
            else
                echo "❌ Failed to complete merge for $branch"
                git merge --abort
                ((failed_merges++))
            fi
        fi
    fi
done

echo ""
echo "Batch merge completed!"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"
echo "Total branches processed: ${#branches[@]}"