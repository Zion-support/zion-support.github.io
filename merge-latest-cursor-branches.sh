#!/bin/bash

# Script to merge all latest cursor branches into main
set -e

echo "Starting comprehensive merge of latest cursor branches..."

# Get list of all latest cursor branches discovered
LATEST_CURSOR_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-19db"
    "cursor/fix-errors-and-merge-to-main-40d9"
    "cursor/fix-errors-and-merge-to-main-5fb2"
    "cursor/fix-errors-and-merge-to-main-7e2b"
    "cursor/fix-errors-and-merge-to-main-8510"
    "cursor/fix-errors-and-merge-to-main-afb8"
    "cursor/fix-errors-and-merge-to-main-afbc"
    "cursor/fix-errors-and-merge-to-main-b319"
    "cursor/fix-errors-and-merge-to-main-ca41"
    "cursor/fix-errors-and-merge-to-main-dfd4"
    "cursor/fix-errors-and-merge-to-main-e15f"
)

# Ensure we're on main branch
git checkout main

# Track merged branches
MERGED_BRANCHES=()
FAILED_BRANCHES=()

echo "Merging latest cursor branches into main..."

for branch in "${LATEST_CURSOR_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "  ✓ Branch exists, attempting merge..."
        
        # Try to merge the branch
        if git merge origin/$branch --no-edit; then
            echo "  ✅ Successfully merged $branch"
            MERGED_BRANCHES+=("$branch")
        else
            echo "  ❌ Failed to merge $branch due to conflicts"
            FAILED_BRANCHES+=("$branch")
            
            # Reset to clean state
            git merge --abort 2>/dev/null || true
        fi
    else
        echo "  ⚠️  Branch $branch does not exist, skipping..."
    fi
done

echo ""
echo "=== MERGE SUMMARY ==="
echo "Successfully merged branches:"
for branch in "${MERGED_BRANCHES[@]}"; do
    echo "  ✅ $branch"
done

echo ""
echo "Failed to merge branches (conflicts):"
for branch in "${FAILED_BRANCHES[@]}"; do
    echo "  ❌ $branch"
done

echo ""
echo "Total merged: ${#MERGED_BRANCHES[@]}"
echo "Total failed: ${#FAILED_BRANCHES[@]}"

# Push changes if any were merged
if [ ${#MERGED_BRANCHES[@]} -gt 0 ]; then
    echo ""
    echo "Pushing merged changes to main..."
    git push origin main
    echo "✅ Changes pushed to main branch"
fi

echo ""
echo "Latest cursor branches merge process completed!"