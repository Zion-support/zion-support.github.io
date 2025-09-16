#!/bin/bash

# Advanced merge script that handles conflicts automatically
echo "🚀 Starting advanced merge process..."

# Function to resolve conflicts by keeping main branch version
resolve_conflicts() {
    echo "🔧 Resolving conflicts by keeping main branch version..."
    
    # Find all conflicted files
    conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
    
    for file in $conflicted_files; do
        echo "   Resolving: $file"
        
        # For binary files, just add them
        if file "$file" | grep -q "binary"; then
            git add "$file"
            continue
        fi
        
        # For text files, use git checkout to keep main branch version
        git checkout --ours "$file"
        git add "$file"
    done
    
    # Handle modify/delete conflicts
    git status --porcelain | grep "^DU\|^UD" | while read status file; do
        echo "   Handling modify/delete: $file"
        git add "$file"
    done
}

# Get recent branches (last 10)
recent_branches=$(git branch -r --sort=-committerdate | grep -v 'origin/main' | grep -v 'origin/HEAD' | head -10)

echo "📋 Processing recent branches:"
echo "$recent_branches"

processed=0
merged=0
failed=0

for branch in $recent_branches; do
    branch_name=$(echo $branch | sed 's/origin\///')
    echo ""
    echo "🔄 Processing branch: $branch_name"
    
    # Try to merge
    if git merge "$branch" --no-ff -m "Auto-merge $branch_name into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        merged=$((merged + 1))
    else
        echo "⚠️  Conflicts in $branch_name, attempting resolution..."
        
        # Resolve conflicts
        resolve_conflicts
        
        # Commit the resolution
        if git commit -m "Resolve conflicts for $branch_name" 2>/dev/null; then
            echo "✅ Successfully resolved conflicts for $branch_name"
            merged=$((merged + 1))
        else
            echo "❌ Failed to resolve conflicts for $branch_name"
            git merge --abort 2>/dev/null
            failed=$((failed + 1))
        fi
    fi
    
    processed=$((processed + 1))
    
    # Safety limit
    if [ $processed -ge 5 ]; then
        echo "🛑 Reached safety limit, stopping..."
        break
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "   Processed: $processed branches"
echo "   Successfully merged: $merged branches"
echo "   Failed: $failed branches"

# Push changes
echo ""
echo "🚀 Pushing changes to main..."
git push origin main

echo "✅ Merge process completed!"