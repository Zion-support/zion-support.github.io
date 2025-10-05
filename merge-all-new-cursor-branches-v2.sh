#!/bin/bash

# Script to merge all new cursor branches into main
set -e

echo "Starting comprehensive merge of all new cursor branches..."

# Get list of all new cursor branches discovered
NEW_CURSOR_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-0d7b"
    "cursor/fix-errors-and-merge-to-main-1276"
    "cursor/fix-errors-and-merge-to-main-25c0"
    "cursor/fix-errors-and-merge-to-main-2639"
    "cursor/fix-errors-and-merge-to-main-29f9"
    "cursor/fix-errors-and-merge-to-main-4506"
    "cursor/fix-errors-and-merge-to-main-4f71"
    "cursor/fix-errors-and-merge-to-main-74f1"
    "cursor/fix-errors-and-merge-to-main-7a71"
    "cursor/fix-errors-and-merge-to-main-9758"
    "cursor/fix-errors-and-merge-to-main-9993"
    "cursor/fix-errors-and-merge-to-main-aa77"
    "cursor/fix-errors-and-merge-to-main-c37a"
    "cursor/fix-errors-and-merge-to-main-ce14"
    "cursor/fix-errors-and-merge-to-main-6926"
)

# Ensure we're on main branch
git checkout main

# Track merged branches
MERGED_BRANCHES=()
FAILED_BRANCHES=()

echo "Merging new cursor branches into main..."

for branch in "${NEW_CURSOR_BRANCHES[@]}"; do
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
echo "New cursor branches merge process completed!"