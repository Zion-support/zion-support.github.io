#!/bin/bash

# Script to merge remaining branches systematically
set -e

echo "🚀 Starting systematic branch merge process..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get list of recent branches
echo "📋 Getting recent branches..."
RECENT_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-94bf"
    "origin/cursor/create-and-deploy-new-content-ac09"
    "origin/cursor/create-and-deploy-new-content-c19b"
    "origin/cursor/create-and-deploy-new-content-c1e7"
    "origin/cursor/create-and-deploy-new-content-e267"
    "origin/cursor/create-and-deploy-new-content-e9a4"
    "origin/cursor/create-and-deploy-new-content-f631"
    "origin/feature/revolutionary-ai-content-2025-2026"
    "origin/integrate-new-content"
)

count=0
total=${#RECENT_BRANCHES[@]}

for branch in "${RECENT_BRANCHES[@]}"; do
    count=$((count + 1))
    branch_name=$(echo "$branch" | sed 's/origin\///')
    
    echo ""
    echo "🔄 Processing branch: $branch_name ($count/$total)"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Try to merge
    echo "🔀 Attempting to merge $branch_name..."
    if git merge "$branch" --no-ff -m "Merge branch: $branch_name"; then
        echo "✅ Successfully merged $branch_name"
        
        # Push the changes
        echo "📤 Pushing changes..."
        git push origin main
        
    else
        echo "⚠️  Merge conflict in $branch_name, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts automatically..."
            
            # List conflicted files
            conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
            
            for file in $conflicted_files; do
                echo "  Resolving conflict in: $file"
                
                # For most files, accept the current version (ours)
                # This is a simple strategy - in production you might want more sophisticated resolution
                git checkout --ours "$file" || true
                git add "$file" || true
            done
            
            # Commit the resolution
            if git commit -m "Resolve merge conflicts for $branch_name"; then
                echo "✅ Conflicts resolved for $branch_name"
                git push origin main
            else
                echo "❌ Failed to resolve conflicts for $branch_name"
                git merge --abort
            fi
        else
            echo "❌ Failed to merge $branch_name for unknown reason"
            git merge --abort
        fi
    fi
    
    echo "⏳ Waiting 1 second before next branch..."
    sleep 1
done

echo ""
echo "🎉 Branch merge process completed!"
echo "📊 Processed $count branches"

# Final status check
echo ""
echo "📋 Final git status:"
git status

echo ""
echo "🌿 Recent commits:"
git log --oneline -10