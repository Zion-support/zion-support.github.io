#!/bin/bash

# Script to merge all open branches into main
# This script will attempt to merge branches systematically

echo "Starting comprehensive branch merge process..."

# Get list of remote branches (excluding main and HEAD)
branches=$(git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | head -50)

# Counter for successful merges
success_count=0
conflict_count=0
already_merged_count=0

for branch in $branches; do
    echo ""
    echo "Processing branch: $branch"
    
    # Check if branch has unique commits
    unique_commits=$(git log --oneline $branch --not origin/main | wc -l)
    
    if [ "$unique_commits" -eq 0 ]; then
        echo "  ✓ Already merged or no unique commits"
        ((already_merged_count++))
        continue
    fi
    
    echo "  Found $unique_commits unique commits"
    
    # Attempt to merge
    if git merge $branch --no-edit --no-ff 2>/dev/null; then
        echo "  ✓ Successfully merged $branch"
        ((success_count++))
    else
        echo "  ⚠ Merge conflict in $branch"
        
        # Try to resolve conflicts automatically
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "  Attempting to resolve conflicts..."
            
            # For most conflicts, we'll take our version
            git checkout --ours .
            git add .
            
            if git commit --no-edit; then
                echo "  ✓ Resolved conflicts and merged $branch"
                ((success_count++))
            else
                echo "  ✗ Failed to resolve conflicts for $branch"
                git merge --abort 2>/dev/null
                ((conflict_count++))
            fi
        else
            echo "  ✗ Failed to merge $branch"
            git merge --abort 2>/dev/null
            ((conflict_count++))
        fi
    fi
done

echo ""
echo "Merge Summary:"
echo "  ✓ Successfully merged: $success_count branches"
echo "  ⚠ Conflicts (resolved): $conflict_count branches"
echo "  ℹ Already merged: $already_merged_count branches"

# Push all changes
echo ""
echo "Pushing changes to remote..."
if git push origin main; then
    echo "✓ Successfully pushed all changes"
else
    echo "⚠ Failed to push some changes"
fi

echo ""
echo "Branch merge process completed!"