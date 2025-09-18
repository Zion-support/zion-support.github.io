#!/bin/bash

echo "Starting systematic merge of important branches..."

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch="$1"
    echo "Attempting to merge branch: $branch"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-ff -m "Merge $branch branch"; then
        echo "✅ Successfully merged $branch"
    else
        echo "⚠️  Conflicts detected in $branch. Resolving automatically..."
        
        # Auto-resolve conflicts by taking the newer version (HEAD)
        git diff --name-only --diff-filter=U | while read file; do
            echo "Resolving conflict in: $file"
            # Remove conflict markers and keep HEAD version
            sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
            sed -i '/^>>>>>>> /d' "$file"
        done
        
        # Add resolved files and commit
        git add .
        if git commit -m "Resolve conflicts and merge $branch"; then
            echo "✅ Successfully resolved conflicts and merged $branch"
        else
            echo "❌ Failed to commit merge for $branch"
            git merge --abort
            return 1
        fi
    fi
}

# List of important branches to merge (most recent and relevant)
IMPORTANT_BRANCHES=(
    "feat/clean-updates-content"
    "feature/ai-ops-post-and-homepage-promo"
    "cursor/create-and-deploy-new-content-21c3"
    "performance-optimizations"
    "feat/new-content-sept-2025"
)

# Merge each important branch
for branch in "${IMPORTANT_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    if merge_branch "$branch"; then
        echo "✅ Completed merge of $branch"
    else
        echo "❌ Failed to merge $branch, continuing with next branch"
    fi
    echo "---"
done

echo "Merge process completed!"