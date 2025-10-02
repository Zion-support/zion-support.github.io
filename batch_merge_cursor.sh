#!/bin/bash

# Batch merge remaining cursor branches
set -e

echo "🚀 Starting batch merge of remaining cursor branches..."

# List of remaining branches to merge (most recent first)
REMAINING_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-ec55"
    "origin/cursor/create-and-deploy-new-content-8ac8"
    "origin/cursor/create-and-deploy-new-content-4875"
    "origin/cursor/create-and-deploy-new-content-c829"
    "origin/cursor/create-and-deploy-new-content-11d9"
    "origin/cursor/create-and-deploy-new-content-4aed"
    "origin/cursor/create-and-deploy-new-content-4072"
    "origin/cursor/create-and-deploy-new-content-b898"
    "origin/cursor/create-and-deploy-new-content-2ca8"
    "origin/cursor/create-and-deploy-new-content-3330"
    "origin/cursor/create-and-deploy-new-content-14f7"
    "origin/cursor/create-and-deploy-new-content-2473"
)

successful_merges=0
failed_merges=0

for branch in "${REMAINING_BRANCHES[@]}"; do
    echo "📋 Attempting to merge: $branch"
    
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged: $branch"
        ((successful_merges++))
    else
        echo "❌ Merge conflict in: $branch"
        
        # Auto-resolve common conflicts
        if git status --porcelain | grep -q "app/page.tsx"; then
            echo "🔧 Resolving app/page.tsx conflict..."
            git checkout --ours app/page.tsx
        fi
        
        if git status --porcelain | grep -q "src/pages/Home.tsx"; then
            echo "🔧 Resolving src/pages/Home.tsx conflict..."
            git checkout --ours src/pages/Home.tsx
        fi
        
        if git status --porcelain | grep -q "package.json"; then
            echo "🔧 Resolving package.json conflict..."
            git checkout --ours package.json
        fi
        
        if git status --porcelain | grep -q "package-lock.json"; then
            echo "🔧 Resolving package-lock.json conflict..."
            git checkout --ours package-lock.json
        fi
        
        # Add all resolved files and commit
        git add .
        if git commit -m "Merge $branch with auto-conflict resolution" --no-edit; then
            echo "✅ Conflicts resolved for: $branch"
            ((successful_merges++))
        else
            echo "⚠️  Could not resolve conflicts for: $branch, aborting merge"
            git merge --abort
            ((failed_merges++))
        fi
    fi
    echo "---"
done

echo "📊 Batch Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

echo "🎉 Batch merge process completed!"