#!/bin/bash

# Script to merge all remaining feature branches
set -e

echo "Starting comprehensive merge of all remaining feature branches..."

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

# List of all remaining feature branches to merge
ALL_REMAINING_BRANCHES=(
    "feature/q4-services-and-ui"
    "feature/seo-perf-improvements"
    "feature/services-2029q2"
    "feature/services-aug-22"
    "feature/services-expansion"
)

# Merge each remaining branch
for branch in "${ALL_REMAINING_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    if merge_branch "$branch"; then
        echo "✅ Successfully merged $branch"
    else
        echo "❌ Failed to merge $branch, skipping..."
    fi
    echo "---"
done

echo "All remaining merges completed!"
echo "Current status:"
git status

# Push all changes
echo "Pushing all changes to origin/main..."
git push origin main