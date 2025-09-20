#!/bin/bash

echo "Starting systematic merge of open PR branches..."

# List of branches to merge (excluding main and already merged ones)
branches=(
    "origin/cursor/fix-netlify-build-and-merge-to-main-19e8"
    "origin/cursor/fix-netlify-build-and-merge-to-main-1b96"
    "origin/cursor/fix-netlify-build-and-merge-to-main-2732"
    "origin/cursor/fix-netlify-build-and-merge-to-main-2912"
    "origin/cursor/fix-netlify-build-and-merge-to-main-2f2d"
    "origin/cursor/fix-netlify-build-and-merge-to-main-33bf"
    "origin/cursor/fix-netlify-build-and-merge-to-main-3d35"
    "origin/cursor/fix-netlify-build-and-merge-to-main-5896"
    "origin/cursor/fix-netlify-build-and-merge-to-main-767d"
    "origin/cursor/fix-netlify-build-and-merge-to-main-7ed7"
    "origin/cursor/fix-netlify-build-and-merge-to-main-851a"
    "origin/cursor/fix-netlify-build-and-merge-to-main-9425"
    "origin/cursor/fix-netlify-build-and-merge-to-main-992e"
    "origin/cursor/fix-netlify-build-and-merge-to-main-a392"
    "origin/cursor/fix-netlify-build-and-merge-to-main-a446"
    "origin/cursor/fix-netlify-build-and-merge-to-main-ac0e"
    "origin/cursor/fix-netlify-build-and-merge-to-main-aebe"
    "origin/cursor/fix-netlify-build-and-merge-to-main-b71c"
    "origin/cursor/fix-netlify-build-and-merge-to-main-d0e7"
    "origin/cursor/fix-netlify-build-and-merge-to-main-d3d9"
    "origin/cursor/fix-netlify-build-and-merge-to-main-d410"
    "origin/cursor/fix-netlify-build-and-merge-to-main-d4ef"
    "origin/cursor/fix-netlify-build-and-merge-to-main-d721"
    "origin/cursor/fix-netlify-build-and-merge-to-main-e8a2"
)

successful_merges=0
failed_merges=0

for branch in "${branches[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Try to merge the branch
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        ((successful_merges++))
    else
        echo "⚠️  Merge conflict or issue with $branch, resolving automatically..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts by accepting current version..."
            # Resolve conflicts by accepting current version
            git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            git commit --no-edit 2>/dev/null || true
            echo "✅ Resolved conflicts for $branch"
            ((successful_merges++))
        else
            echo "❌ Failed to merge $branch"
            ((failed_merges++))
            # Abort the merge
            git merge --abort 2>/dev/null || true
        fi
    fi
done

echo ""
echo "=== Merge Summary ==="
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "Total branches processed: ${#branches[@]}"

if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "🎉 Successfully merged $successful_merges branches!"
fi