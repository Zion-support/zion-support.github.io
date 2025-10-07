#!/bin/bash

# Script to merge the most recent PRs
set -e

echo "🚀 Starting recent PRs merge process..."

# Get the 20 most recent cursor branches
RECENT_BRANCHES=$(git branch -r | grep "origin/cursor/" | head -50 | while read branch; do echo "$(git log --format="%ci %H" "$branch" | head -1) $branch"; done | sort -r | head -20 | cut -d' ' -f4-)

echo "📊 Processing 20 most recent cursor branches"

count=0
successful_merges=0
failed_merges=0

for branch in $RECENT_BRANCHES; do
    count=$((count + 1))
    branch_name=$(echo "$branch" | sed 's/origin\///')
    echo ""
    echo "🔄 Processing branch $count/20: $branch_name"
    
    # Try to merge directly without checkout
    if git merge "$branch" --no-ff -m "Merge $branch_name into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name into main"
        successful_merges=$((successful_merges + 1))
    else
        echo "⚠️  Merge conflict in $branch_name - attempting to resolve..."
        
        # Abort the failed merge
        git merge --abort 2>/dev/null || true
        
        # Try with checkout and conflict resolution
        if git checkout "$branch_name" 2>/dev/null; then
            git pull origin "$branch_name" 2>/dev/null || true
            git checkout main
            
            # Try merge again
            if git merge "$branch_name" --no-ff -m "Merge $branch_name into main" 2>/dev/null; then
                echo "✅ Successfully merged $branch_name after checkout"
                successful_merges=$((successful_merges + 1))
            else
                echo "❌ Skipping $branch_name due to unresolvable conflicts"
                git merge --abort 2>/dev/null || true
                failed_merges=$((failed_merges + 1))
            fi
        else
            echo "❌ Failed to checkout $branch_name - skipping"
            failed_merges=$((failed_merges + 1))
        fi
    fi
done

echo ""
echo "🎉 Recent PRs merge completed!"
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
echo "✨ Recent PRs merge process completed!"