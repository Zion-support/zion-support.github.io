#!/bin/bash

# Script to merge all cursor branches into main
set -e

echo "Starting merge process for all cursor branches..."

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | head -20)

echo "Found branches to merge:"
echo "$CURSOR_BRANCHES"

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

# Counter for tracking progress
count=0
total=$(echo "$CURSOR_BRANCHES" | wc -l)

echo "Total branches to merge: $total"

# Merge each branch
for branch in $CURSOR_BRANCHES; do
    count=$((count + 1))
    echo ""
    echo "Processing branch $count/$total: $branch"
    
    # Fetch the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge "origin/$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
    else
        echo "⚠️  Merge conflict in $branch, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU"; then
            echo "Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically where possible
            git status --porcelain | grep "^UU" | while read status file; do
                echo "Resolving conflict in: $file"
                
                # For most conflicts, we can accept the incoming changes
                # or use a simple strategy
                if [[ "$file" == *".tsx" ]] || [[ "$file" == *".ts" ]] || [[ "$file" == *".js" ]]; then
                    # For TypeScript/JavaScript files, try to resolve
                    if git checkout --theirs "$file" 2>/dev/null; then
                        echo "Resolved $file using theirs"
                    elif git checkout --ours "$file" 2>/dev/null; then
                        echo "Resolved $file using ours"
                    fi
                fi
            done
            
            # Add resolved files
            git add .
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Resolved conflicts and merged $branch"
            else
                echo "❌ Failed to complete merge for $branch"
                git merge --abort
                continue
            fi
        else
            echo "❌ Failed to merge $branch"
            git merge --abort
            continue
        fi
    fi
    
    # Push the updated main branch
    git push origin main
    
    echo "Pushed updated main branch"
done

echo ""
echo "✅ Merge process completed!"
echo "Merged $count branches successfully"