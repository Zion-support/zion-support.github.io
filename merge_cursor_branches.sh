#!/bin/bash

# Script to merge all cursor/check-fix branches into main
set -e

echo "Starting merge process for cursor branches..."

# Array of branches to merge
branches=(
    "cursor/check-fix-push-and-merge-to-main-0a34"
    "cursor/check-fix-push-and-merge-to-main-2b29"
    "cursor/check-fix-push-and-merge-to-main-43bd"
    "cursor/check-fix-push-and-merge-to-main-5149"
    "cursor/check-fix-push-and-merge-to-main-6972"
    "cursor/check-fix-push-and-merge-to-main-6df3"
    "cursor/check-fix-push-and-merge-to-main-8c36"
    "cursor/check-fix-push-and-merge-to-main-b528"
    "cursor/check-fix-push-and-merge-to-main-d62b"
    "cursor/check-fix-push-and-merge-to-main-d753"
)

# Ensure we're on main branch
git checkout main

# Counter for successful merges
successful_merges=0
failed_merges=0

for branch in "${branches[@]}"; do
    echo ""
    echo "Processing branch: $branch"
    echo "=================================="
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Try to merge the branch
    if git merge origin/$branch --no-ff -m "Merge branch '$branch' into main"; then
        echo "✅ Successfully merged $branch"
        ((successful_merges++))
    else
        echo "❌ Merge conflict in $branch"
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch..."
            
            # List conflicted files
            conflicted_files=$(git diff --name-only --diff-filter=U)
            echo "Conflicted files: $conflicted_files"
            
            # Try to resolve conflicts automatically
            for file in $conflicted_files; do
                echo "Resolving conflicts in $file..."
                
                # For package.json and yarn.lock files, prefer the main branch version
                if [[ "$file" == *"package.json"* ]] || [[ "$file" == *"yarn.lock"* ]] || [[ "$file" == *"package-lock.json"* ]]; then
                    echo "Using main branch version for $file"
                    git checkout --ours "$file"
                    git add "$file"
                else
                    # For other files, try to resolve automatically
                    if command -v git-mergetool &> /dev/null; then
                        git mergetool --tool=vimdiff "$file" || true
                    else
                        # Manual conflict resolution - prefer main branch
                        echo "Preferring main branch version for $file"
                        git checkout --ours "$file"
                        git add "$file"
                    fi
                fi
            done
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Successfully resolved conflicts and merged $branch"
                ((successful_merges++))
            else
                echo "❌ Failed to complete merge for $branch"
                git merge --abort
                ((failed_merges++))
            fi
        else
            # No conflicts but merge failed for other reasons
            echo "❌ Merge failed for $branch (no conflicts detected)"
            git merge --abort
            ((failed_merges++))
        fi
    fi
done

echo ""
echo "=================================="
echo "Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "=================================="

# Push the updated main branch
if [ $successful_merges -gt 0 ]; then
    echo "Pushing updated main branch..."
    git push origin main
    echo "✅ Main branch pushed successfully"
else
    echo "No successful merges to push"
fi

echo "Merge process completed!"