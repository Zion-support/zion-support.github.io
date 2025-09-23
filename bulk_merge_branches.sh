#!/bin/bash

echo "Starting bulk merge process for all open branches..."

# Get all remote branches that haven't been merged
git fetch --all

# Get list of recent branches
RECENT_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-04f1"
    "origin/cursor/create-and-deploy-new-content-0e99"
    "origin/cursor/create-and-deploy-new-content-4240"
    "origin/cursor/create-and-deploy-new-content-0936"
    "origin/cursor/create-and-deploy-new-content-1488"
    "origin/cursor/create-and-deploy-new-content-76d1"
    "origin/22xuo1-codex/implement-wishlist-functionality"
    "origin/74tfm8-codex/implement-instant-messaging-for-negotiations"
    "origin/75rlpk-codex/fix-modulenamemapper-configuration-for-tests"
    "origin/7dxqey-codex/fix-missing-product-export-from-@prisma/client"
    "origin/7fnoko-codex/fix-client-side-rendering-and-javascript-errors"
    "origin/7ieis8-codex/add-error-handling-and-fallback-data"
    "origin/9llxiv-codex/implement-analytics-and-error-tracking"
    "origin/9njm0n-codex/implement-feature-flags-and-a/b-testing"
    "origin/bw06m0-codex/fix-typescript-errors-in-components"
)

SUCCESS_COUNT=0
FAILED_COUNT=0

for branch in "${RECENT_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/$branch"; then
        echo "Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Try to merge
    if git merge "$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        echo "❌ Merge conflict in $branch, attempting to resolve..."
        
        # Check for conflicts
        if git status | grep -q "both modified"; then
            echo "Resolving conflicts automatically..."
            
            # Resolve conflicts by accepting our changes
            git checkout --ours .
            git add .
            
            if git commit -m "Resolve merge conflicts in $branch"; then
                echo "✅ Resolved conflicts for $branch"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            else
                echo "❌ Failed to resolve conflicts for $branch"
                git merge --abort
                FAILED_COUNT=$((FAILED_COUNT + 1))
            fi
        else
            echo "❌ Failed to merge $branch"
            git merge --abort
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    fi
    
    echo "---"
done

echo "Bulk merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT"
echo "Failed to merge: $FAILED_COUNT"

# Push all changes
echo "Pushing changes to remote..."
git push origin main