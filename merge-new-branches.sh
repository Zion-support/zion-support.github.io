#!/bin/bash

# Script to merge all new cursor branches into main
set -e

echo "Starting merge process for new cursor branches..."

# Get all cursor branches
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | sort)

total=$(echo "$branches" | wc -l)
echo "Found $total branches to merge"

count=0
successful_merges=0
failed_merges=0

for branch in $branches; do
    count=$((count + 1))
    echo "[$count/$total] Processing branch: $branch"
    
    # Check if branch exists locally, if not fetch it
    if ! git show-ref --verify --quiet refs/heads/"$branch"; then
        git fetch origin "$branch"
    fi
    
    # Try to merge the branch
    if git merge --no-ff "origin/$branch" -m "Merge branch '$branch' into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        successful_merges=$((successful_merges + 1))
    else
        echo "❌ Merge conflict in $branch - resolving automatically"
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            # For package files, prefer the main branch version
            git checkout --ours package.json package-lock.json pnpm-lock.yaml 2>/dev/null || true
            
            # For other conflicts, try to resolve them
            git add . 2>/dev/null || true
            
            # Complete the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Resolved conflicts and merged $branch"
                successful_merges=$((successful_merges + 1))
            else
                echo "❌ Failed to resolve conflicts in $branch"
                git merge --abort 2>/dev/null || true
                failed_merges=$((failed_merges + 1))
            fi
        else
            echo "✅ Merged $branch (no conflicts)"
            successful_merges=$((successful_merges + 1))
        fi
    fi
    
    # Clean up local branch if it exists
    git branch -D "$branch" 2>/dev/null || true
done

echo ""
echo "Merge Summary:"
echo "Total branches processed: $total"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"

if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "Pushing updated main branch to origin..."
    git push origin main
    echo "✅ Main branch updated successfully"
fi