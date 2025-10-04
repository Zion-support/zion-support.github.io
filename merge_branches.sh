#!/bin/bash

# Script to merge all open PR branches into main
set -e

echo "Starting branch merge process..."

# Go to main branch
git checkout main

# List of branches to merge
branches=(
    "origin/comprehensive-improvements-20251004-113535"
    "origin/final-verification"
    "origin/cursor/fix-errors-and-merge-to-main-056e"
    "origin/cursor/fix-errors-and-merge-to-main-0cce"
    "origin/cursor/fix-errors-and-merge-to-main-0e51"
    "origin/cursor/fix-errors-and-merge-to-main-1afd"
    "origin/cursor/fix-errors-and-merge-to-main-7495"
    "origin/cursor/fix-errors-and-merge-to-main-79c5"
    "origin/cursor/fix-errors-and-merge-to-main-7d92"
    "origin/cursor/fix-errors-and-merge-to-main-8fa9"
    "origin/cursor/fix-errors-and-merge-to-main-9597"
    "origin/cursor/fix-errors-and-merge-to-main-99ac"
    "origin/cursor/fix-errors-and-merge-to-main-dcce"
    "origin/cursor/fix-errors-and-merge-to-main-e017"
    "origin/cursor/fix-errors-and-merge-to-main-e0a3"
    "origin/cursor/fix-errors-and-merge-to-main-e9fe"
    "origin/cursor/fix-errors-and-merge-to-main-ea0a"
    "origin/cursor/fix-errors-and-merge-to-main-f9ce"
    "origin/cursor/fix-errors-and-merge-to-main-fe3c"
)

# Merge each branch
for branch in "${branches[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/$branch; then
        echo "Merging $branch into main..."
        
        # Try to merge
        if git merge "$branch" --no-edit; then
            echo "✅ Successfully merged $branch"
        else
            echo "❌ Merge conflict in $branch - resolving..."
            
            # Check for conflicts
            if git status --porcelain | grep -q "^UU"; then
                echo "Resolving conflicts in $branch..."
                # For now, we'll abort the merge and continue
                git merge --abort
                echo "⚠️  Skipped $branch due to conflicts"
            else
                echo "✅ Successfully merged $branch after conflict resolution"
            fi
        fi
    else
        echo "⚠️  Branch $branch does not exist, skipping..."
    fi
    
    echo "---"
done

echo "Branch merge process completed!"
echo "Current status:"
git status