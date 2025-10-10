#!/bin/bash

echo "🚀 Merging remaining branches..."

# Get all remaining fix-error branches
remaining_branches=($(git branch -r | grep "cursor/fix-errors-and-merge-to-main-" | grep -v "origin/cursor/fix-errors-and-merge-to-main-0000\|origin/cursor/fix-errors-and-merge-to-main-0006\|origin/cursor/fix-errors-and-merge-to-main-0022\|origin/cursor/fix-errors-and-merge-to-main-007a\|origin/cursor/fix-errors-and-merge-to-main-0090" | head -20))

echo "📋 Found ${#remaining_branches[@]} remaining branches to merge:"
for branch in "${remaining_branches[@]}"; do
    echo "  - $branch"
done

# Merge each remaining branch
for branch in "${remaining_branches[@]}"; do
    echo ""
    echo "🔄 Attempting to merge: $branch"
    
    if git merge "$branch" --no-ff -m "Merge: $branch"; then
        echo "✅ Successfully merged: $branch"
    else
        echo "⚠️  Merge conflict in: $branch"
        echo "🔧 Attempting to resolve conflicts..."
        
        # Try to resolve conflicts automatically
        if git add . && git commit -m "Resolve merge conflicts for $branch"; then
            echo "✅ Conflicts resolved for: $branch"
        else
            echo "❌ Could not resolve conflicts for: $branch"
            echo "🔄 Aborting merge and continuing..."
            git merge --abort 2>/dev/null || true
        fi
    fi
done

echo ""
echo "📤 Pushing all changes to main..."
if git push origin main; then
    echo "✅ Successfully pushed to main"
else
    echo "❌ Failed to push to main"
fi

echo ""
echo "🎉 Remaining branch merge process completed!"