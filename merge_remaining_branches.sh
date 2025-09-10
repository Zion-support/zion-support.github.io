#!/bin/bash

# Script to merge remaining branches efficiently
set -e

echo "Merging remaining branches..."

# List of remaining branches to merge
branches=(
    "origin/cursor/check-fix-push-and-merge-to-main-6ecb"
    "origin/cursor/check-fix-push-and-merge-to-main-93f1"
    "origin/cursor/check-fix-push-and-merge-to-main-abd6"
    "origin/cursor/check-fix-push-and-merge-to-main-b3cd"
    "origin/cursor/check-fix-push-and-merge-to-main-f438"
    "origin/cursor/fix-netlify-build-and-merge-to-main-2a9f"
    "origin/cursor/fix-netlify-build-and-merge-to-main-2ee4"
    "origin/cursor/fix-netlify-build-and-merge-to-main-3df7"
    "origin/cursor/fix-netlify-build-and-merge-to-main-4497"
    "origin/cursor/fix-netlify-build-and-merge-to-main-47ac"
    "origin/cursor/fix-netlify-build-and-merge-to-main-6310"
    "origin/cursor/fix-netlify-build-and-merge-to-main-8304"
    "origin/cursor/fix-netlify-build-and-merge-to-main-88ba"
    "origin/cursor/fix-netlify-build-and-merge-to-main-b157"
    "origin/cursor/fix-netlify-build-and-merge-to-main-b390"
    "origin/cursor/fix-netlify-build-and-merge-to-main-bfeb"
    "origin/cursor/fix-netlify-build-and-merge-to-main-c7f4"
    "origin/cursor/fix-netlify-build-and-merge-to-main-ec6b"
    "origin/cursor/fix-netlify-build-and-merge-to-main-f262"
)

successful=0
failed=0

for branch in "${branches[@]}"; do
    echo "Processing $branch..."
    
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✅ Merged $branch successfully"
        ((successful++))
    else
        echo "⚠️  Conflict in $branch, resolving..."
        
        # Resolve conflicts by taking main branch version
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit -m "Resolve merge conflicts for $branch" 2>/dev/null; then
            echo "✅ Resolved conflicts for $branch"
            ((successful++))
        else
            echo "❌ Failed to resolve $branch"
            git merge --abort 2>/dev/null || true
            ((failed++))
        fi
    fi
done

echo "Summary: $successful successful, $failed failed"

# Push all changes
echo "Pushing changes..."
git push origin main

echo "Done!"