#!/bin/bash

# Script to merge remaining PRs
set -e

echo "🚀 Starting remaining PRs merge process..."

# Get all remaining cursor branches (skip first 20)
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed -n '21,$p' | sed 's/origin\///')

total=$(echo "$CURSOR_BRANCHES" | wc -l)
echo "📊 Processing remaining $total cursor branches"

count=0
successful_merges=0
failed_merges=0

for branch in $CURSOR_BRANCHES; do
    count=$((count + 1))
    echo ""
    echo "🔄 Processing branch $count/$total: $branch"
    
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
    
    # Progress indicator every 10 branches
    if [ $((count % 10)) -eq 0 ]; then
        echo "📈 Progress: $count/$total branches processed (✅ $successful_merges successful, ❌ $failed_merges failed)"
    fi
done

echo ""
echo "🎉 Remaining PRs merge completed!"
echo "📊 Final stats: $count branches processed"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"