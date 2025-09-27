#!/bin/bash

# Merge remaining branches script
set -e

echo "🚀 Starting merge of remaining branches..."

# Get list of branches that have new commits
branches=($(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | tail -20 | sed 's/origin\///'))

successful_merges=0
failed_merges=0

for branch in "${branches[@]}"; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Check if branch has commits not in main
    if git log --oneline "origin/$branch" --not origin/main | head -1 > /dev/null 2>&1; then
        echo "📝 Branch has new commits, attempting merge..."
        
        # Try to merge with strategy to take main version for conflicts
        if git merge "origin/$branch" --no-commit -X ours 2>/dev/null; then
            echo "✅ No conflicts in $branch"
            git commit -m "Merge $branch into main - no conflicts"
            ((successful_merges++))
        else
            echo "⚠️  Conflicts detected, resolving..."
            
            # Check if there are actual conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                # Resolve conflicts by taking main version
                git checkout --ours .
                git add .
                git commit -m "Merge $branch into main - conflicts resolved (took main version)"
                echo "✅ Conflicts resolved for $branch"
                ((successful_merges++))
            else
                echo "❌ Merge failed for $branch - aborting"
                git merge --abort
                ((failed_merges++))
            fi
        fi
    else
        echo "⏭️  Branch has no new commits, skipping"
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "  ✅ Successful merges: $successful_merges"
echo "  ❌ Failed merges: $failed_merges"

# Push all changes
echo ""
echo "🚀 Pushing all changes to remote..."
git push origin main

echo "🎉 Merge process completed!"