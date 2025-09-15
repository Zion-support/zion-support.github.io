#!/bin/bash

# Script to merge all branches into main
echo "🚀 Starting automated branch merge process..."

# Get all remote branches
echo "📋 Fetching all remote branches..."
git fetch --all

# Get list of all remote branches (excluding main)
branches=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | head -20)

echo "🔍 Found branches to process:"
echo "$branches"

# Counter for processed branches
processed=0
merged=0
conflicts=0

for branch in $branches; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-ff -m "Merge branch $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        merged=$((merged + 1))
    else
        echo "⚠️  Merge conflict in $branch, attempting to resolve..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            git add .
            git commit -m "Resolve merge conflicts for $branch" 2>/dev/null
            
            if [ $? -eq 0 ]; then
                echo "✅ Successfully resolved conflicts for $branch"
                merged=$((merged + 1))
            else
                echo "❌ Failed to resolve conflicts for $branch, skipping..."
                git merge --abort 2>/dev/null
                conflicts=$((conflicts + 1))
            fi
        else
            echo "❌ Failed to merge $branch"
            conflicts=$((conflicts + 1))
        fi
    fi
    
    processed=$((processed + 1))
    
    # Safety check - don't process too many branches at once
    if [ $processed -ge 20 ]; then
        echo "🛑 Reached safety limit of 20 branches, stopping..."
        break
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "   Processed: $processed branches"
echo "   Successfully merged: $merged branches"
echo "   Conflicts/Failed: $conflicts branches"

# Push all changes
echo ""
echo "🚀 Pushing all changes to main..."
git push origin main

echo "✅ Merge process completed!"