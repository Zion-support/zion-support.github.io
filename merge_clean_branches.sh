#!/bin/bash

# Script to merge all clean branches into main
echo "Merging all clean branches into main..."

# List of clean branches from our earlier check
CLEAN_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-5ff2"
    "origin/cursor/create-and-deploy-new-content-fe41"
    "origin/cursor/create-and-deploy-new-content-aad6"
    "origin/cursor/create-and-deploy-new-content-9e97"
    "origin/cursor/create-and-deploy-new-content-3e6c"
    "origin/cursor/create-and-deploy-new-content-b5dc"
    "origin/cursor/create-and-deploy-new-content-ad37"
    "origin/cursor/create-and-deploy-new-content-6153"
    "origin/cursor/create-and-deploy-new-content-c2fd"
    "origin/cursor/create-and-deploy-new-content-f111"
    "origin/cursor/create-and-deploy-new-content-4f92"
    "origin/cursor/create-and-deploy-new-content-ea25"
    "origin/cursor/create-and-deploy-new-content-ba9d"
    "origin/cursor/create-and-deploy-new-content-32bb"
    "origin/cursor/create-and-deploy-new-content-6428"
    "origin/cursor/create-and-deploy-new-content-6a11"
    "origin/cursor/create-and-deploy-new-content-2aa4"
    "origin/cursor/create-and-deploy-new-content-3c32"
    "origin/cursor/create-and-deploy-new-content-ddaa"
)

merged_count=0
failed_count=0

for branch in "${CLEAN_BRANCHES[@]}"; do
    echo "Merging branch: $branch"
    
    if git merge "$branch" --no-edit > /dev/null 2>&1; then
        echo "  ✅ Successfully merged"
        ((merged_count++))
    else
        echo "  ❌ Merge failed for $branch"
        git merge --abort > /dev/null 2>&1
        ((failed_count++))
    fi
done

echo ""
echo "MERGE SUMMARY:"
echo "Successfully merged: $merged_count branches"
echo "Failed merges: $failed_count branches"
echo "Total branches processed: ${#CLEAN_BRANCHES[@]}"

if [ $merged_count -gt 0 ]; then
    echo ""
    echo "✅ Successfully merged $merged_count branches into main!"
fi

if [ $failed_count -gt 0 ]; then
    echo ""
    echo "⚠️  $failed_count branches failed to merge and were skipped."
fi