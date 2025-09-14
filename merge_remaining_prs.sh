#!/bin/bash

# Script to merge remaining PRs efficiently
set -e

PR_BRANCHES=(
    "cursor/create-and-deploy-new-content-ff10"  # PR 17483
    "cursor/create-and-deploy-new-content-689e"  # PR 17482
    "cursor/create-and-deploy-new-content-41b2"  # PR 17480
    "cursor/create-and-deploy-new-content-764e"  # PR 17479
    "cursor/create-and-deploy-new-content-9a40"  # PR 17478
    "cursor/create-and-deploy-new-content-d87d"  # PR 17477
    "cursor/create-and-deploy-new-content-0ecd"  # PR 17475
)

for branch in "${PR_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Checkout the branch
    git checkout "$branch" 2>/dev/null || {
        echo "Branch $branch not found, skipping..."
        continue
    }
    
    # Try to merge with main
    if git merge main --no-edit 2>/dev/null; then
        echo "✅ No conflicts in $branch"
    else
        echo "⚠️  Conflicts found in $branch, resolving..."
        
        # Resolve conflicts by using HEAD version for common conflicted files
        git checkout --ours app/page.tsx content/index.yaml app/layout.tsx app/sitemap.ts 2>/dev/null || true
        git checkout --ours app/components/UltimateContentShowcase2025.tsx 2>/dev/null || true
        
        # Add all changes
        git add .
        
        # Commit the merge
        git commit -m "Resolve merge conflicts in $branch - used HEAD version for conflicted files" || {
            echo "❌ Failed to commit $branch"
            git merge --abort
            continue
        }
    fi
    
    # Switch back to main and merge
    git checkout main
    git merge "$branch" --no-edit
    
    echo "✅ Successfully merged $branch into main"
done

echo "🎉 All PRs processed successfully!"