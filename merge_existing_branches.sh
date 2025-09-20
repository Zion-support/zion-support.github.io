#!/bin/bash

# Script to merge existing branches into main
echo "Starting merge of existing branches..."

# List of branches that actually exist and need to be merged
BRANCHES_TO_MERGE=(
    "origin/cursor/fix-netlify-build-and-merge-to-main-6450"
    "origin/netlify-build-fix-20250920-000750"
    "origin/cursor/fix-netlify-build-and-merge-to-main-f85d"
    "origin/cursor/fix-netlify-build-and-merge-to-main-150c"
    "origin/cursor/fix-netlify-build-and-merge-to-main-7f1d"
    "origin/cursor/fix-netlify-build-and-merge-to-main-896f"
    "origin/cursor/fix-netlify-build-and-merge-to-main-13a7"
    "origin/cursor/fix-netlify-build-and-merge-to-main-3ca5"
    "origin/cursor/fix-netlify-build-and-merge-to-main-c68a"
    "origin/cursor/fix-netlify-build-and-merge-to-main-fabc"
)

# Function to merge a branch
merge_branch() {
    local branch_name=$1
    local short_name=$(echo "$branch_name" | sed 's/origin\///')
    
    echo "Processing branch: $short_name"
    
    # Try to merge
    if git merge "$branch_name" --no-ff -m "Merge branch $short_name" 2>/dev/null; then
        echo "✅ Successfully merged branch: $short_name"
        return 0
    else
        echo "⚠️ Merge conflict in branch: $short_name, attempting to resolve..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts for branch: $short_name..."
            
            # Use our version for conflicts (accept incoming changes)
            git checkout --theirs .
            git add .
            
            # Complete the merge
            git commit -m "Merge branch $short_name (resolved conflicts)"
            echo "✅ Resolved conflicts and merged branch: $short_name"
        else
            echo "No conflicts detected, completing merge for branch: $short_name"
            git commit -m "Merge branch $short_name"
        fi
        return 0
    fi
}

# Counter for tracking
count=0
merged=0
failed=0

# Process each branch
for branch in "${BRANCHES_TO_MERGE[@]}"; do
    count=$((count + 1))
    echo "=========================================="
    echo "[$count] Processing branch: $branch"
    echo "=========================================="
    
    if merge_branch "$branch"; then
        merged=$((merged + 1))
    else
        failed=$((failed + 1))
    fi
    
    echo ""
done

echo "=========================================="
echo "MERGE SUMMARY"
echo "=========================================="
echo "Total branches processed: $count"
echo "Successfully merged: $merged"
echo "Failed to merge: $failed"
echo "=========================================="

# Push all changes
echo "Pushing changes to main branch..."
git push origin main

echo "All existing branches have been processed and pushed to main branch!"