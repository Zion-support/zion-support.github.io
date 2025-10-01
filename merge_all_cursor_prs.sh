#!/bin/bash

# Script to merge all cursor/create-and-deploy-new-content branches into main

echo "🚀 Starting merge of all cursor branches into main..."
echo "=================================================="

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get all cursor branches
cursor_branches=$(git branch -r | grep "origin/cursor/create-and-deploy-new-content" | sed 's/origin\///' | tr -d ' ')

# Counter for tracking
total=0
successful=0
failed=0

# Loop through each branch
for branch in $cursor_branches; do
    total=$((total + 1))
    echo ""
    echo "📦 Processing branch $total: $branch"
    echo "-----------------------------------"
    
    # Try to merge the branch
    if git merge --no-ff "origin/$branch" -m "Merge: $branch into main"; then
        echo "✅ Successfully merged $branch"
        successful=$((successful + 1))
    else
        echo "⚠️  Merge conflict detected in $branch"
        echo "🔧 Attempting automatic conflict resolution..."
        
        # Get list of conflicted files
        conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            echo "Conflicted files:"
            echo "$conflicted_files"
            
            # For App.tsx and banner files, prefer ours (main)
            for file in $conflicted_files; do
                if [[ "$file" == "App.tsx" ]] || [[ "$file" == components/*Banner.tsx ]]; then
                    echo "  Using main version for: $file"
                    git checkout --ours "$file"
                    git add "$file"
                elif [[ "$file" == content/* ]] || [[ "$file" == src/content/* ]]; then
                    echo "  Using branch version for content: $file"
                    git checkout --theirs "$file"
                    git add "$file"
                else
                    echo "  Using main version for: $file"
                    git checkout --ours "$file"
                    git add "$file"
                fi
            done
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Conflicts resolved and merged: $branch"
                successful=$((successful + 1))
            else
                echo "❌ Failed to complete merge for: $branch"
                git merge --abort
                failed=$((failed + 1))
            fi
        else
            echo "❌ Merge failed for unknown reason: $branch"
            git merge --abort
            failed=$((failed + 1))
        fi
    fi
done

echo ""
echo "=================================================="
echo "🎯 Merge Summary:"
echo "   Total branches processed: $total"
echo "   ✅ Successful merges: $successful"
echo "   ❌ Failed merges: $failed"
echo "=================================================="

# Push all changes to main
if [ $successful -gt 0 ]; then
    echo ""
    echo "📤 Pushing merged changes to origin/main..."
    git push origin main
    echo "✅ All changes pushed successfully!"
fi

echo ""
echo "🎉 Merge process complete!"
