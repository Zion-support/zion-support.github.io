#!/bin/bash

# Script to merge recent website-related branches
set -e

echo "🚀 Starting website branches merge process..."

# List of recent website branches to merge
WEBSITE_BRANCHES=(
    "cursor/website-audit-merged"
    "cursor/website-audit-merged-v2"
    "cursor/website-cleanup-v2"
    "cursor/website-fixes-clean"
    "cursor/website-improvements-2025"
)

echo "📊 Processing ${#WEBSITE_BRANCHES[@]} website branches"

count=0
successful_merges=0
failed_merges=0

for branch in "${WEBSITE_BRANCHES[@]}"; do
    count=$((count + 1))
    echo ""
    echo "🔄 Processing branch $count/${#WEBSITE_BRANCHES[@]}: $branch"
    
    # Try to merge directly without checkout
    if git merge "origin/$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch into main"
        successful_merges=$((successful_merges + 1))
    else
        echo "⚠️  Merge conflict in $branch - attempting to resolve..."
        
        # Abort the failed merge
        git merge --abort 2>/dev/null || true
        
        # Try with checkout and conflict resolution
        if git checkout "$branch" 2>/dev/null; then
            git pull origin "$branch" 2>/dev/null || true
            git checkout main
            
            # Try merge again
            if git merge "$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
                echo "✅ Successfully merged $branch after checkout"
                successful_merges=$((successful_merges + 1))
            else
                echo "❌ Skipping $branch due to unresolvable conflicts"
                git merge --abort 2>/dev/null || true
                failed_merges=$((failed_merges + 1))
            fi
        else
            echo "❌ Failed to checkout $branch - skipping"
            failed_merges=$((failed_merges + 1))
        fi
    fi
done

echo ""
echo "🎉 Website branches merge completed!"
echo "📊 Final stats: $count branches processed"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Push the merged changes
echo "🚀 Pushing merged changes to origin/main..."
if git push origin main; then
    echo "✅ Successfully pushed all merged changes to origin/main"
else
    echo "❌ Failed to push changes to origin/main"
    exit 1
fi

echo ""
echo "✨ Website branches merge process completed!"