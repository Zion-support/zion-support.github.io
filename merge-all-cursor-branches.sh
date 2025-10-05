#!/bin/bash

# Script to merge all cursor branches into main
set -e

echo "Starting systematic merge of all cursor branches..."

# Get list of all cursor branches
CURSOR_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-100d"
    "cursor/fix-errors-and-merge-to-main-2f1b"
    "cursor/fix-errors-and-merge-to-main-4800"
    "cursor/fix-errors-and-merge-to-main-494d"
    "cursor/fix-errors-and-merge-to-main-4c51"
    "cursor/fix-errors-and-merge-to-main-5696"
    "cursor/fix-errors-and-merge-to-main-6ee3"
    "cursor/fix-errors-and-merge-to-main-7318"
    "cursor/fix-errors-and-merge-to-main-7795"
    "cursor/fix-errors-and-merge-to-main-8f2f"
    "cursor/fix-errors-and-merge-to-main-90a6"
    "cursor/fix-errors-and-merge-to-main-97a6"
    "cursor/fix-errors-and-merge-to-main-9bdd"
    "cursor/fix-errors-and-merge-to-main-9caa"
    "cursor/fix-errors-and-merge-to-main-9f74"
    "cursor/fix-errors-and-merge-to-main-9ff4"
    "cursor/fix-errors-and-merge-to-main-b122"
    "cursor/fix-errors-and-merge-to-main-b8f9"
    "cursor/fix-errors-and-merge-to-main-cefe"
    "cursor/fix-errors-and-merge-to-main-d0f7"
    "cursor/fix-errors-and-merge-to-main-dc65"
    "cursor/fix-errors-and-merge-to-main-f4fa"
    "cursor/fix-errors-and-merge-to-main-fbf8"
    "cursor/fix-errors-and-merge-to-main-fcbc"
)

# Ensure we're on main branch
git checkout main
git pull origin main

# Track merged branches
MERGED_BRANCHES=()
FAILED_BRANCHES=()

echo "Merging cursor branches into main..."

for branch in "${CURSOR_BRANCHES[@]}"; do
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
echo "Merge process completed!"