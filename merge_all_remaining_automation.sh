#!/bin/bash

echo "🚀 Starting bulk merge of all remaining automation branches..."

# Get all automation branches that are not merged
branches=$(git branch -r --no-merged origin/main | grep "automation/git-sync")

total=$(echo "$branches" | wc -l)
echo "📊 Total automation branches to process: $total"

count=0
for branch in $branches; do
    count=$((count + 1))
    echo "📦 Processing $count/$total: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-commit 2>/dev/null; then
        git commit -m "Merge $branch - resolved conflicts"
    else
        # Resolve conflicts automatically
        git checkout --theirs public/automation/content-registry.json 2>/dev/null || true
        git checkout --theirs public/automation/new-content-registry.json 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit -m "Merge $branch - resolved conflicts" 2>/dev/null; then
            echo "✅ Successfully resolved and merged $branch"
        else
            echo "❌ Failed to merge $branch, aborting..."
            git merge --abort
        fi
    fi
    
    # Push every 100 merges to avoid large pushes
    if [ $((count % 100)) -eq 0 ]; then
        echo "🔄 Pushing progress after $count merges..."
        git push origin main
    fi
done

echo "🎉 Completed merging all automation branches!"
echo "📊 Final push..."
git push origin main