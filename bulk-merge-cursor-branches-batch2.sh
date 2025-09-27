#!/bin/bash

# Bulk merge script for cursor branches - Batch 2
set -e

echo "Starting bulk merge of cursor branches - Batch 2..."

# Get next batch of cursor branches (51-100)
CURSOR_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed -n '51,100p')

# Counter for tracking progress
count=0
total=$(echo "$CURSOR_BRANCHES" | wc -l)

echo "Found $total cursor branches to process in batch 2"

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

# Process each branch
for branch in $CURSOR_BRANCHES; do
    count=$((count + 1))
    echo "[$count/$total] Processing $branch..."
    
    # Extract branch name without origin/
    branch_name=${branch#origin/}
    
    # Try to merge the branch
    if git merge --no-edit "$branch" 2>/dev/null; then
        echo "  ✓ Successfully merged $branch_name"
    else
        echo "  ⚠ Merge conflict in $branch_name, resolving automatically..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            # Auto-resolve conflicts by taking main's version for common files
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                if [[ "$file" == *".yarn/install-state.gz"* ]] || [[ "$file" == *"package-lock.json"* ]] || [[ "$file" == *"yarn.lock"* ]]; then
                    echo "    Resolving $file by taking main's version"
                    git checkout --ours "$file"
                    git add "$file"
                elif [[ "$file" == *".md"* ]] || [[ "$file" == *".txt"* ]]; then
                    echo "    Resolving $file by taking main's version"
                    git checkout --ours "$file"
                    git add "$file"
                else
                    echo "    Resolving $file by taking incoming version"
                    git checkout --theirs "$file"
                    git add "$file"
                fi
            done
            
            # Complete the merge
            if git commit --no-edit; then
                echo "  ✓ Resolved conflicts and merged $branch_name"
            else
                echo "  ✗ Failed to resolve conflicts for $branch_name, skipping"
                git merge --abort
            fi
        else
            echo "  ✗ Unknown merge issue with $branch_name, skipping"
            git merge --abort
        fi
    fi
    
    # Push main after each merge to keep it updated
    if [ $((count % 10)) -eq 0 ]; then
        echo "  Pushing main after $count merges..."
        git push origin main
    fi
done

# Final push
echo "Pushing final state to main..."
git push origin main

echo "Bulk merge batch 2 completed! Processed $count branches."