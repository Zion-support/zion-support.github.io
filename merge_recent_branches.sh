#!/bin/bash

echo "🔄 Starting to merge recent branches..."

# Get the most recent branches
RECENT_BRANCHES=$(git branch -r | grep "cursor/create-and-deploy-new-content" | tail -20)

echo "📋 Found recent branches:"
echo "$RECENT_BRANCHES"

# Process each branch
for branch in $RECENT_BRANCHES; do
    branch_name=$(echo $branch | sed 's/origin\///')
    echo "🔄 Processing branch: $branch_name"
    
    # Fetch the branch
    git fetch origin "$branch_name"
    
    # Try to merge
    if git merge "origin/$branch_name" --no-ff -m "Merge branch $branch_name"; then
        echo "   ✅ Successfully merged $branch_name"
    else
        echo "   ⚠️  Conflict in $branch_name, resolving..."
        
        # Resolve conflicts by accepting our changes
        git checkout --ours .
        git add .
        git commit -m "Resolve conflicts for $branch_name"
        
        if [ $? -eq 0 ]; then
            echo "   ✅ Successfully resolved conflicts for $branch_name"
        else
            echo "   ❌ Failed to resolve conflicts for $branch_name"
            git merge --abort
        fi
    fi
    
    echo "   ---"
done

# Push all changes
echo "🚀 Pushing all changes to main..."
git push origin main

echo "🎉 Finished merging recent branches!"