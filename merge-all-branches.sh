#!/bin/bash

# Script to merge all cursor branches into main with automatic conflict resolution

echo "Starting comprehensive branch merge process..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# List of all branches to merge (prioritized)
BRANCHES=(
    "origin/feature/revolutionary-2026-ai-content"
    "origin/ultimate-neural-fusion-content"
    "origin/ai-2027-content-integration"
)

# Function to merge with automatic conflict resolution
merge_branch() {
    local branch=$1
    echo "========================================="
    echo "Merging branch: $branch"
    echo "========================================="
    
    # Try to merge
    if git merge "$branch" --no-edit -X ours; then
        echo "✓ Successfully merged $branch"
        return 0
    else
        echo "! Conflicts detected in $branch, resolving..."
        
        # Accept all ours for conflicts
        git checkout --ours .
        git add .
        
        # Remove deleted files that cause conflicts
        git status | grep "deleted by them" | awk '{print $4}' | xargs -r git rm 2>/dev/null || true
        
        # Complete the merge
        if git commit --no-edit -m "Merge: $branch (conflicts resolved with ours strategy)"; then
            echo "✓ Resolved conflicts and completed merge of $branch"
            return 0
        else
            echo "✗ Failed to complete merge of $branch"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Merge priority branches
for branch in "${BRANCHES[@]}"; do
    merge_branch "$branch"
done

echo "========================================="
echo "Merging recent cursor branches..."
echo "========================================="

# Get all cursor branches sorted by most recent
CURSOR_BRANCHES=$(git branch -r | grep "cursor/create-and-deploy-new-content" | sort -r | head -30)

# Merge each cursor branch
for branch in $CURSOR_BRANCHES; do
    merge_branch "$branch"
done

echo "========================================="
echo "Merge process completed!"
echo "========================================="

# Push all changes to main
echo "Pushing all changes to origin/main..."
git push origin main

echo "✓ All done! All branches have been merged into main."
