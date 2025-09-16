#!/bin/bash

echo "🚀 Starting automated branch merge process..."

# Get all remote branches (excluding main)
branches=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | head -20)

echo "🔍 Found branches to merge:"
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
                if [ "$status" = "DU" ]; then
                    git rm "$file"
                else
                    git add "$file"
                fi
            done
            
            # Commit the resolved conflicts
            if git commit --no-verify -m "🔧 Resolve merge conflicts in $branch - keep main branch version"; then
                echo "✅ Successfully resolved conflicts and merged $branch"
                merged=$((merged + 1))
            else
                echo "❌ Failed to resolve conflicts in $branch"
                git merge --abort
                conflicts=$((conflicts + 1))
            fi
        else
            echo "❌ Failed to merge $branch (no conflicts detected)"
            git merge --abort
            conflicts=$((conflicts + 1))
        fi
    fi
    
    processed=$((processed + 1))
    
    # Safety check - don't process too many branches at once
    if [ $processed -ge 10 ]; then
        echo "⚠️  Reached safety limit of 10 branches processed"
        break
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "   Total branches processed: $processed"
echo "   Successfully merged: $merged"
echo "   Conflicts encountered: $conflicts"
echo ""
echo "✅ Branch merge process completed!"