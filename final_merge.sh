#!/bin/bash

# Final merge script - handle remaining branches efficiently
set -e

echo "Starting final merge process..."

# Get all remaining cursor branches
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | while read branch; do 
    commits=$(git log --oneline main..$branch | wc -l)
    if [ $commits -gt 0 ]; then 
        echo "$branch"
    fi
done)

total_branches=$(echo "$branches" | wc -l)
echo "Found $total_branches branches to merge"

# Process in larger batches
batch_size=20
count=0
for branch in $branches; do
    if [ $((count % batch_size)) -eq 0 ]; then
        echo "Processing batch $((count / batch_size + 1)) of $((total_branches / batch_size + 1))..."
    fi
    
    # Try to merge with strategy to prefer the incoming changes
    if git merge $branch --strategy-option=theirs --no-edit 2>/dev/null; then
        echo "✓ Merged $branch"
    else
        # Resolve conflicts automatically
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            if [ -f "$file" ]; then
                git checkout --theirs "$file" 2>/dev/null || true
                git add "$file"
            elif [ -d "$file" ]; then
                git add "$file"
            else
                git rm "$file" 2>/dev/null || true
            fi
        done
        
        # Complete the merge
        git commit --no-edit 2>/dev/null || true
    fi
    
    count=$((count + 1))
    
    # Progress indicator
    if [ $((count % 100)) -eq 0 ]; then
        echo "Progress: $count/$total_branches branches processed"
    fi
done

echo "Final merge completed! Processed $count branches total."