#!/bin/bash
# Smart merge of recent cursor branches into main

set -e

echo "=== Smart Merge of Recent Cursor Branches ==="

# Get unmerged cursor branches sorted by date (most recent first)
branches=$(git for-each-ref --sort=-committerdate refs/remotes/origin/cursor/create-and-deploy-new-content-* --format='%(refname:short)' | sed 's|origin/||' | head -20)

merged_count=0
skipped_count=0

for branch in $branches; do
    echo ""
    echo "=== Attempting to merge: $branch ==="
    
    # Check if already merged
    if git merge-base --is-ancestor "origin/$branch" HEAD 2>/dev/null; then
        echo "✓ Already merged, skipping"
        ((skipped_count++))
        continue
    fi
    
    # Try merge with strategy to prefer content from branches
    if git merge --no-edit -X theirs "origin/$branch" 2>&1; then
        echo "✓ Successfully merged $branch"
        ((merged_count++))
    else
        # Auto-resolve conflicts
        echo "⚠ Conflicts detected, auto-resolving..."
        
        # For content files, take theirs; for config, take ours
        git status --porcelain | grep "^UU" | awk '{print $2}' | while read file; do
            if [[ "$file" =~ (posts|articles|insights|content/|components/.*Banner) ]]; then
                git checkout --theirs "$file"
                echo "  ✓ Kept branch version: $file"
            else
                git checkout --ours "$file"
                echo "  ✓ Kept main version: $file"
            fi
            git add "$file"
        done
        
        if git commit --no-edit 2>/dev/null; then
            echo "✓ Auto-resolved and merged $branch"
            ((merged_count++))
        else
            echo "✗ Skipping $branch - could not auto-resolve"
            git merge --abort 2>/dev/null || true
        fi
    fi
done

echo ""
echo "=== Pushing merged changes ==="
git push origin main

echo ""
echo "=== Summary ==="
echo "Merged: $merged_count"
echo "Skipped: $skipped_count"
echo "Done!"
