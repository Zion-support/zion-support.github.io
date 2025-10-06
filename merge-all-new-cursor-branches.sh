#!/bin/bash

# Script to merge all new cursor branches into main
set -e

echo "Starting comprehensive merge of all new cursor branches..."

# Get list of all new cursor branches discovered
NEW_CURSOR_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-016f"
    "cursor/fix-errors-and-merge-to-main-073a"
    "cursor/fix-errors-and-merge-to-main-0ebe"
    "cursor/fix-errors-and-merge-to-main-0fc7"
    "cursor/fix-errors-and-merge-to-main-214f"
    "cursor/fix-errors-and-merge-to-main-25ca"
    "cursor/fix-errors-and-merge-to-main-277a"
    "cursor/fix-errors-and-merge-to-main-2bbe"
    "cursor/fix-errors-and-merge-to-main-4415"
    "cursor/fix-errors-and-merge-to-main-451b"
    "cursor/fix-errors-and-merge-to-main-4dbc"
    "cursor/fix-errors-and-merge-to-main-4feb"
    "cursor/fix-errors-and-merge-to-main-5597"
    "cursor/fix-errors-and-merge-to-main-6b3f"
    "cursor/fix-errors-and-merge-to-main-77cd"
    "cursor/fix-errors-and-merge-to-main-7f81"
    "cursor/fix-errors-and-merge-to-main-85b7"
    "cursor/fix-errors-and-merge-to-main-921e"
    "cursor/fix-errors-and-merge-to-main-9658"
    "cursor/fix-errors-and-merge-to-main-b024"
    "cursor/fix-errors-and-merge-to-main-bba2"
    "cursor/fix-errors-and-merge-to-main-cf0f"
    "cursor/fix-errors-and-merge-to-main-d4d4"
    "cursor/fix-errors-and-merge-to-main-e1bd"
    "cursor/fix-errors-and-merge-to-main-e6b7"
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