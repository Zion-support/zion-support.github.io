#!/bin/bash

# Script to merge the latest cursor branches systematically
set -e

echo "🚀 Starting merge of latest cursor branches..."

# Get the most recent branches
RECENT_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-ae5e"
    "origin/cursor/create-and-deploy-new-content-5f1b"
    "origin/cursor/create-and-deploy-new-content-c61c"
    "origin/cursor/create-and-deploy-new-content-a7cb"
    "origin/cursor/create-and-deploy-new-content-b119"
    "origin/cursor/create-and-deploy-new-content-7129"
    "origin/cursor/create-and-deploy-new-content-a5cd"
    "origin/cursor/create-and-deploy-new-content-14bb"
    "origin/cursor/create-and-deploy-new-content-ea95"
)

successful_merges=0
failed_merges=0
already_merged=0

echo "📋 Found ${#RECENT_BRANCHES[@]} recent branches to process..."

for branch in "${RECENT_BRANCHES[@]}"; do
    echo "📋 Processing: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        ((failed_merges++))
        continue
    fi
    
    # Try to merge
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged: $branch"
        ((successful_merges++))
    else
        # Check if it's already merged
        if git merge-base --is-ancestor "$branch" HEAD 2>/dev/null; then
            echo "ℹ️  Already merged: $branch"
            ((already_merged++))
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
    fi
    echo "---"
done

echo "📊 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "ℹ️  Already merged: $already_merged"
echo "❌ Failed merges: $failed_merges"

echo "🎉 Merge process completed!"