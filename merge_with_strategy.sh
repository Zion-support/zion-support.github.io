#!/bin/bash

# Script to merge branches with conflict resolution strategy
# This will prefer main branch changes for conflicts

set -e

echo "Starting branch merge with conflict resolution strategy..."

# Get list of recent cursor branches
BRANCHES=(
    "cursor/create-and-deploy-new-content-6179"
    "cursor/create-and-deploy-new-content-8601"
    "cursor/create-and-deploy-new-content-f513"
    "enhanced-content-showcase"
    "cursor/create-and-deploy-new-content-1847"
    "cursor/create-and-deploy-new-content-a401"
    "cursor/create-and-deploy-new-content-aa63"
    "cursor/create-and-deploy-new-content-18dd"
    "cursor/create-and-deploy-new-content-240a"
    "new-content-and-promotional-banners"
    "cursor/create-and-deploy-new-content-22af"
    "cursor/create-and-deploy-new-content-9b5b"
    "cursor/create-and-deploy-new-content-d16a"
    "cursor/create-and-deploy-new-content-7e66"
    "cursor/create-and-deploy-new-content-db22"
    "cursor/create-and-deploy-new-content-83e8"
    "feature/new-ai-content-2025"
    "merged-content-and-promotion-final"
    "cursor/create-and-deploy-new-content-3a84"
    "cursor/create-and-deploy-new-content-6eb0"
)

# Ensure we're on main branch
git checkout main
git pull origin main

# Track successful and failed merges
SUCCESSFUL_MERGES=()
FAILED_MERGES=()

echo "Found ${#BRANCHES[@]} branches to process..."

for branch in "${BRANCHES[@]}"; do
    echo ""
    echo "Processing branch: $branch"
    echo "=========================================="
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "origin/$branch" HEAD; then
        echo "Branch $branch is already merged, skipping..."
        continue
    fi
    
    # Try to merge the branch with strategy
    if git merge "origin/$branch" --no-edit -X ours; then
        echo "✅ Successfully merged $branch"
        SUCCESSFUL_MERGES+=("$branch")
        
        # Push the merge
        if git push origin main; then
            echo "✅ Successfully pushed merge for $branch"
        else
            echo "❌ Failed to push merge for $branch"
        fi
    else
        echo "❌ Merge conflict in $branch even with strategy"
        FAILED_MERGES+=("$branch")
        
        # Abort the merge
        git merge --abort
        echo "Aborted merge for $branch"
    fi
    
    echo "Current status:"
    git status --porcelain
    echo ""
done

echo ""
echo "=========================================="
echo "MERGE SUMMARY"
echo "=========================================="
echo "Successful merges: ${#SUCCESSFUL_MERGES[@]}"
for branch in "${SUCCESSFUL_MERGES[@]}"; do
    echo "  ✅ $branch"
done

echo ""
echo "Failed merges: ${#FAILED_MERGES[@]}"
for branch in "${FAILED_MERGES[@]}"; do
    echo "  ❌ $branch"
done

echo ""
echo "Final git status:"
git status

echo ""
echo "Script completed!"