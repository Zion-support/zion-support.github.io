#!/bin/bash

# Script to merge remaining feature branches
set -e

echo "Starting merge of remaining feature branches..."

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch=$1
    echo "Attempting to merge branch: $branch"
    
    if git merge "origin/$branch" --no-commit; then
        echo "Successfully merged $branch without conflicts"
        git commit -m "Merge $branch into main - no conflicts"
        return 0
    else
        echo "Conflicts found in $branch, resolving automatically..."
        
        # Resolve conflicts by preferring main branch (ours)
        git status --porcelain | grep "^UU\|^AA\|^AU\|^UA" | while read status file; do
            echo "Resolving conflict in $file"
            git checkout --ours "$file" 2>/dev/null || true
            git add "$file" 2>/dev/null || true
        done
        
        # Add all resolved files
        git add . 2>/dev/null || true
        
        # Commit the merge
        if git commit -m "Merge $branch into main - resolved conflicts automatically"; then
            echo "Successfully resolved conflicts and merged $branch"
            return 0
        else
            echo "Failed to commit merge for $branch"
            git merge --abort
            return 1
        fi
    fi
}

# List of remaining feature branches to merge
REMAINING_BRANCHES=(
    "feature/q4-2025-services-ui"
    "feature/q4-services-and-ui"
    "feature/seo-perf-improvements"
    "feature/services-2029q2"
)

# Merge each remaining branch
for branch in "${REMAINING_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    if merge_branch "$branch"; then
        echo "✅ Successfully merged $branch"
        # Push after each successful merge
        git push origin main
    else
        echo "❌ Failed to merge $branch, skipping..."
    fi
    echo "---"
done

echo "Merge process completed!"
echo "Current status:"
git status