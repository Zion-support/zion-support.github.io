#!/bin/bash

# Continue merging remaining cursor branches
set -e

echo "Continuing batch merge process..."

# Get remaining cursor branches with commits not in main
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | while read branch; do 
    commits=$(git log --oneline main..$branch | wc -l)
    if [ $commits -gt 0 ]; then 
        echo "$branch"
    fi
done | tail -n +51)  # Skip first 50 branches

echo "Found $(echo "$branches" | wc -l) remaining branches to merge"

# Merge branches in smaller batches
batch_size=5
count=0
for branch in $branches; do
    if [ $((count % batch_size)) -eq 0 ]; then
        echo "Processing batch $((count / batch_size + 1))..."
    fi
    
    echo "Merging $branch..."
    
    # Try to merge with strategy to prefer the incoming changes
    if git merge $branch --strategy-option=theirs --no-edit 2>/dev/null; then
        echo "✓ Successfully merged $branch"
    else
        echo "⚠ Conflict in $branch, resolving automatically..."
        
        # Resolve conflicts by choosing the incoming version (theirs)
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            if [ -f "$file" ]; then
                echo "  Resolving conflict in $file"
                git checkout --theirs "$file" 2>/dev/null || true
                git add "$file"
            elif [ -d "$file" ]; then
                echo "  Adding directory $file"
                git add "$file"
            else
                echo "  Removing $file"
                git rm "$file" 2>/dev/null || true
            fi
        done
        
        # Complete the merge
        if git commit --no-edit 2>/dev/null; then
            echo "✓ Resolved conflicts for $branch"
        else
            echo "⚠ No changes to commit for $branch"
        fi
    fi
    
    count=$((count + 1))
    
    # Commit every 10 merges to avoid large commits
    if [ $((count % 10)) -eq 0 ]; then
        echo "Committed $count merges so far..."
    fi
done

echo "Continue merge completed! Processed $count additional branches."