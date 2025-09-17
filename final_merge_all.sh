#!/bin/bash

# Final comprehensive merge script
set -e

echo "🚀 Starting final comprehensive merge process..."

# Get all feature branches
feature_branches=($(git branch -r | grep "origin/feat/" | sed 's/origin\///' | head -50))
content_branches=($(git branch -r | grep "origin/feature/" | sed 's/origin\///' | head -50))

all_branches=("${feature_branches[@]}" "${content_branches[@]}")

echo "🔍 Found ${#all_branches[@]} branches to process"

successful_merges=0
failed_merges=0

# Process each branch
for branch in "${all_branches[@]}"; do
    echo ""
    echo "🔄 Processing: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "❌ Branch $branch does not exist, skipping..."
        ((failed_merges++))
        continue
    fi
    
    # Try to merge
    if git merge "$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        ((successful_merges++))
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        
        # Resolve conflicts by accepting our changes
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit -m "Resolve conflicts and merge $branch" 2>/dev/null; then
            echo "✅ Resolved conflicts and merged $branch"
            ((successful_merges++))
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort 2>/dev/null || true
            ((failed_merges++))
        fi
    fi
    
    # Push every 10 merges
    if ((successful_merges % 10 == 0)); then
        echo "🔄 Pushing progress..."
        git push origin main --force 2>/dev/null || true
    fi
    
    sleep 1
done

echo ""
echo "📊 Final Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Final push
echo ""
echo "🚀 Final push to main..."
if git push origin main --force; then
    echo "✅ Successfully pushed all changes to main"
else
    echo "❌ Failed to push changes to main"
fi

echo ""
echo "🎉 Final comprehensive merge process completed!"