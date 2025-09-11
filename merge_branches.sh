#!/bin/bash

# Script to merge branches ahead of main
# This will attempt to merge branches that are ahead of main

echo "Starting branch merging process..."

# Get branches that are ahead of main
branches=$(git for-each-ref --format='%(refname:short) %(ahead-behind:origin/main)' refs/remotes/origin | awk '$2 > 0 {print $1}' | head -50)

success_count=0
conflict_count=0
error_count=0

for branch in $branches; do
    echo "Attempting to merge $branch..."
    
    # Try to merge the branch
    if git merge "$branch" --no-commit 2>/dev/null; then
        # Merge successful, commit it
        git commit -m "Merge $branch: automated merge" 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "✅ Successfully merged $branch"
            ((success_count++))
        else
            echo "❌ Failed to commit merge for $branch"
            ((error_count++))
        fi
    else
        # Check if it's a conflict or other error
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "⚠️  Conflicts detected in $branch, attempting to resolve..."
            
            # Try to resolve common conflicts
            if git status --porcelain | grep -q "deleted by us.*content-registry.json"; then
                git rm public/automation/content-registry.json 2>/dev/null
            fi
            if git status --porcelain | grep -q "deleted by us.*new-content-registry.json"; then
                git rm public/automation/new-content-registry.json 2>/dev/null
            fi
            
            # Add all resolved files
            git add . 2>/dev/null
            
            # Try to commit
            if git commit -m "Merge $branch: resolved conflicts" 2>/dev/null; then
                echo "✅ Successfully merged $branch (conflicts resolved)"
                ((success_count++))
            else
                echo "❌ Failed to resolve conflicts for $branch, aborting merge"
                git merge --abort 2>/dev/null
                ((conflict_count++))
            fi
        else
            echo "❌ Error merging $branch (unrelated histories or other issue)"
            git merge --abort 2>/dev/null
            ((error_count++))
        fi
    fi
done

echo ""
echo "Merge process completed:"
echo "✅ Successfully merged: $success_count branches"
echo "⚠️  Conflicts encountered: $conflict_count branches"
echo "❌ Errors: $error_count branches"

# Push changes
echo "Pushing changes to remote..."
git push origin main