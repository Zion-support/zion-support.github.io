#!/bin/bash

# Script to merge all cursor/fix-errors-and-merge-to-main branches into main
# This script will attempt to merge all available branches and resolve conflicts automatically

set -e

echo "Starting comprehensive branch merge process..."

# Ensure we're on main branch
git checkout main
git pull origin main

# Get all cursor/fix-errors-and-merge-to-main branches
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///')

# Counter for successful merges
successful_merges=0
failed_merges=0

echo "Found $(echo "$branches" | wc -l) branches to process"

for branch in $branches; do
    echo "Processing branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "Branch $branch already exists locally"
    else
        echo "Fetching branch $branch"
        git fetch origin $branch:$branch || {
            echo "Failed to fetch branch $branch, skipping..."
            ((failed_merges++))
            continue
        }
    fi
    
    # Try to merge the branch
    echo "Attempting to merge $branch into main..."
    
    if git merge $branch --no-edit; then
        echo "Successfully merged $branch"
        ((successful_merges++))
        
        # Push the changes
        echo "Pushing changes to origin/main..."
        git push origin main || {
            echo "Failed to push changes for $branch"
            ((failed_merges++))
        }
    else
        echo "Merge conflict in $branch, attempting to resolve..."
        
        # Check if there are actual conflicts or if it's already up to date
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Real conflicts detected in $branch, attempting auto-resolution..."
            
            # Try to resolve conflicts automatically
            # This is a basic conflict resolution strategy
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                echo "Resolving conflict in $file"
                
                # For most conflicts, we'll take the main branch version
                # This is a simple strategy - in practice, you might want more sophisticated resolution
                if [[ "$status" == "UU" || "$status" == "AA" ]]; then
                    git checkout --ours "$file" || true
                    git add "$file" || true
                elif [[ "$status" == "DD" ]]; then
                    git rm "$file" || true
                fi
            done
            
            # Try to complete the merge
            if git commit --no-edit; then
                echo "Successfully resolved conflicts and merged $branch"
                ((successful_merges++))
                
                # Push the changes
                echo "Pushing resolved changes to origin/main..."
                git push origin main || {
                    echo "Failed to push resolved changes for $branch"
                    ((failed_merges++))
                }
            else
                echo "Failed to resolve conflicts for $branch, aborting merge"
                git merge --abort || true
                ((failed_merges++))
            fi
        else
            echo "No real conflicts in $branch, likely already up to date"
            git merge --abort || true
        fi
    fi
    
    echo "Completed processing $branch"
    echo "---"
done

echo "Merge process completed!"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"

# Final status check
echo "Final git status:"
git status

echo "Final build test:"
npm run build || echo "Build failed - manual intervention required"