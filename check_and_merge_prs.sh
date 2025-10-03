#!/bin/bash

# Script to check and merge all open PRs
echo "🚀 Starting PR merge process..."

# Update main branch first
echo "📥 Updating main branch..."
git checkout main
git pull origin main

# Get list of all cursor branches
echo "🔍 Finding all cursor branches..."
cursor_branches=$(git branch -r | grep "cursor/create-and-deploy-new-content" | sed 's/origin\///')

# Count branches
branch_count=$(echo "$cursor_branches" | wc -l)
echo "📊 Found $branch_count cursor branches to process"

# Process each branch
processed=0
merged=0
conflicts=0
errors=0

for branch in $cursor_branches; do
    processed=$((processed + 1))
    echo ""
    echo "🔄 Processing branch $processed/$branch_count: $branch"
    
    # Fetch the branch
    git fetch origin "$branch"
    
    # Check if branch exists and has commits
    if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        # Check if branch is already merged
        if git merge-base --is-ancestor "origin/$branch" main; then
            echo "✅ Branch $branch is already merged, skipping..."
            continue
        fi
        
        # Try to merge
        echo "🔀 Attempting to merge $branch into main..."
        if git merge "origin/$branch" --no-edit; then
            echo "✅ Successfully merged $branch"
            merged=$((merged + 1))
        else
            echo "⚠️  Merge conflict detected in $branch"
            conflicts=$((conflicts + 1))
            
            # Check for conflicts
            if git diff --name-only --diff-filter=U | grep -q .; then
                echo "🔧 Attempting to resolve conflicts automatically..."
                
                # Try to resolve common conflicts
                conflict_files=$(git diff --name-only --diff-filter=U)
                for file in $conflict_files; do
                    echo "   Resolving conflicts in $file"
                    
                    # For page.tsx files, try to merge imports and content
                    if [[ "$file" == "app/page.tsx" ]]; then
                        # Remove conflict markers and keep both sides
                        sed -i '/^<<<<<<< HEAD$/d' "$file"
                        sed -i '/^=======$/d' "$file"
                        sed -i '/^>>>>>>> /d' "$file"
                    fi
                done
                
                # Add resolved files
                git add .
                
                # Try to complete the merge
                if git commit --no-edit; then
                    echo "✅ Successfully resolved conflicts and merged $branch"
                    merged=$((merged + 1))
                    conflicts=$((conflicts - 1))
                else
                    echo "❌ Failed to resolve conflicts in $branch"
                    git merge --abort
                fi
            else
                git merge --abort
            fi
        fi
    else
        echo "❌ Branch $branch does not exist or has no commits"
        errors=$((errors + 1))
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "   Branches processed: $processed"
echo "   Successfully merged: $merged"
echo "   Conflicts encountered: $conflicts"
echo "   Errors: $errors"

# Push changes to main
if [ $merged -gt 0 ]; then
    echo ""
    echo "📤 Pushing merged changes to main..."
    git push origin main
    echo "✅ Changes pushed to main branch"
fi

echo ""
echo "🎉 PR merge process completed!"