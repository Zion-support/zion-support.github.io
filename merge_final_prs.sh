#!/bin/bash

# Script to merge final open PRs
set -e

echo "Starting final PR merge process..."

# Final PR branches to process
FINAL_BRANCHES=(
    "cursor/fix-secrets-detection-in-build-bc1e"
    "cursor/fix-errors-and-merge-to-main-5794"
    "cursor/fix-errors-and-merge-to-main-0aa9"
    "cursor/fix-errors-and-merge-to-main-9e5d"
    "cursor/fix-errors-and-merge-to-main-a47b"
    "cursor/fix-errors-and-merge-to-main-1ad1"
    "cursor/fix-errors-and-merge-to-main-946e"
    "cursor/fix-errors-and-merge-to-main-eb06"
    "cursor/fix-errors-and-merge-to-main-40b1"
    "cursor/fix-errors-and-merge-to-main-bba8"
)

# Process each final PR branch
for branch in "${FINAL_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "Merging $branch into main..."
        
        # Try to merge the branch
        if git merge origin/$branch --no-ff -m "Merge $branch into main"; then
            echo "Successfully merged $branch"
        else
            echo "Merge conflict detected in $branch, resolving..."
            
            # Check for conflict markers
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "Resolving conflicts in $branch..."
                
                # Auto-resolve conflicts by accepting incoming changes for most files
                git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                    echo "Resolving conflict in $file"
                    # For most cases, accept the incoming change (theirs)
                    git checkout --theirs "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                done
                
                # Complete the merge
                git commit --no-edit || git commit -m "Resolve merge conflicts in $branch"
                echo "Resolved conflicts and merged $branch"
            else
                echo "No conflicts found, completing merge..."
                git commit --no-edit || git commit -m "Merge $branch into main"
            fi
        fi
    else
        echo "Branch $branch not found, skipping..."
    fi
done

echo "All final PRs processed. Pushing changes to main..."
git push origin main

echo "Final PR merge process completed!"