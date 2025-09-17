#!/bin/bash

# Script to merge remaining branches into main
# This script will attempt to merge remaining branches and resolve conflicts automatically

echo "Starting comprehensive merge process..."

# List of remaining branches to merge
branches=(
    "origin/feat/add-ai-lab-articles-and-promos"
    "origin/feat/enterprise-agent-risk-scorecards-2026"
    "origin/feature/new-content-sept16-2025"
    "origin/feature/new-content-sept-16-2025"
    "origin/feat/content-2025-09-16-v2"
    "origin/feat/new-content-2025-09-16"
    "origin/feature/new-blog-promos-2025-09-16"
    "origin/feat/add-sept-2025-content"
    "origin/feat/new-content-sept-2025"
    "origin/feat/add-latest-content-and-homepage-auto-feed"
)

successful_merges=0
failed_merges=0

for branch in "${branches[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Try to merge the branch
    if git merge "$branch" --no-ff -m "Merge: $branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        ((successful_merges++))
    else
        echo "⚠️  Merge conflict in $branch, resolving by keeping our version..."
        
        # Resolve conflicts by keeping our version
        git checkout --ours . 2>/dev/null
        git add . 2>/dev/null
        git commit -m "Merge: $branch - Resolved conflicts by keeping our new content" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo "✅ Successfully resolved conflicts and merged $branch"
            ((successful_merges++))
        else
            echo "❌ Failed to merge $branch, continuing..."
            git merge --abort 2>/dev/null
            ((failed_merges++))
        fi
    fi
done

echo ""
echo "Merge process completed!"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "Total branches processed: $((successful_merges + failed_merges))"