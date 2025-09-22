#!/bin/bash

# Script to merge all remote branches into main
set -e

echo "🚀 Starting comprehensive branch merge process..."

# Get all remote branches except main and HEAD
branches=$(git branch -r | grep -v "HEAD" | grep -v "main" | sed 's/origin\///' | head -50)

echo "📋 Found $(echo "$branches" | wc -l) branches to process"

# Counter for tracking
merged_count=0
failed_count=0
conflict_count=0

# Function to merge a single branch
merge_branch() {
    local branch=$1
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Check if branch exists locally, if not fetch it
    if ! git show-ref --verify --quiet refs/heads/$branch; then
        echo "📥 Fetching branch $branch..."
        git fetch origin $branch:$branch
    fi
    
    # Check if branch can be merged
    if git merge-base main $branch > /dev/null 2>&1; then
        echo "✅ Branch $branch can be merged"
        
        # Try to merge
        if git merge $branch --no-edit --no-ff; then
            echo "✅ Successfully merged $branch"
            ((merged_count++))
        else
            echo "❌ Merge conflict in $branch"
            ((conflict_count++))
            
            # Try to resolve conflicts automatically
            echo "🔧 Attempting to resolve conflicts..."
            
            # Check for common conflict patterns and resolve them
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "🔍 Found merge conflicts, attempting resolution..."
                
                # Try to resolve common conflicts
                git status --porcelain | while read status file; do
                    if [[ $status =~ ^UU|^AA|^DD ]]; then
                        echo "🔧 Resolving conflict in $file"
                        
                        # For common files, try to keep both versions or the newer one
                        if [[ $file == *.tsx || $file == *.ts || $file == *.js || $file == *.jsx ]]; then
                            # For code files, try to merge intelligently
                            if git checkout --theirs "$file" 2>/dev/null; then
                                git add "$file"
                                echo "✅ Resolved $file using theirs"
                            elif git checkout --ours "$file" 2>/dev/null; then
                                git add "$file"
                                echo "✅ Resolved $file using ours"
                            else
                                echo "⚠️  Could not auto-resolve $file"
                            fi
                        fi
                    fi
                done
                
                # Try to commit the merge
                if git commit --no-edit; then
                    echo "✅ Successfully resolved and merged $branch"
                    ((merged_count++))
                    ((conflict_count--))
                else
                    echo "❌ Could not resolve conflicts in $branch, aborting merge"
                    git merge --abort
                    ((failed_count++))
                fi
            else
                echo "❌ Could not resolve conflicts in $branch, aborting merge"
                git merge --abort
                ((failed_count++))
            fi
        fi
    else
        echo "⚠️  Branch $branch cannot be merged (no common ancestor)"
        ((failed_count++))
    fi
}

# Process each branch
echo "$branches" | while read branch; do
    if [ -n "$branch" ]; then
        merge_branch "$branch"
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "✅ Successfully merged: $merged_count branches"
echo "❌ Failed to merge: $failed_count branches"
echo "🔧 Resolved conflicts: $conflict_count branches"

# Push all changes
echo ""
echo "🚀 Pushing all changes to origin..."
git push origin main

echo "🎉 Merge process completed!"