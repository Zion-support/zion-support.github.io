#!/bin/bash

# Script to merge all remaining branches into main
set -e

echo "Starting merge of all remaining branches..."

# Get list of all non-cursor branches that might have PRs
REMAINING_BRANCHES=(
    "add-new-2026-content"
    "add-revolutionary-content-2026"
    "ai-2027-content-integration"
    "ai-dashboard-improvements"
    "ai-dashboard-improvements-merged"
    "auto-merge-main"
)

# Ensure we're on main branch
git checkout main
git pull origin main

# Track merged branches
MERGED_BRANCHES=()
FAILED_BRANCHES=()

echo "Merging remaining branches into main..."

for branch in "${REMAINING_BRANCHES[@]}"; do
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
echo "Remaining branches merge process completed!"