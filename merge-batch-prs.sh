#!/bin/bash

# Batch merge script for Netlify-related PRs
set -e

echo "🚀 Starting batch merge for Netlify PRs..."

# Change to workspace directory
cd /workspace

# Ensure we're on main and up to date
echo "📋 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Get list of Netlify-related branches
echo "🔍 Finding Netlify-related branches..."
NETLIFY_BRANCHES=$(git branch -r | grep -E "(netlify|cursor/fix-netlify|chore/fix-netlify|chore/netlify|fix/netlify)" | head -10 | sed 's/origin\///g')

echo "📊 Found branches to process:"
echo "$NETLIFY_BRANCHES"

# Process each branch
for branch in $NETLIFY_BRANCHES; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Skip if it's main
    if [ "$branch" = "main" ]; then
        continue
    fi
    
    # Checkout the branch
    echo "📥 Checking out $branch..."
    git checkout "$branch" || {
        echo "⚠️  Could not checkout $branch, skipping..."
        continue
    }
    
    # Try to merge main into the branch
    echo "🔀 Merging main into $branch..."
    if git merge main --no-edit; then
        echo "✅ Successfully merged main into $branch"
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts by keeping our version (HEAD)
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "🔧 Resolving conflicts in $file..."
                    
                    # For critical files, keep main version
                    if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "netlify.toml" ]]; then
                        echo "📦 Critical file, keeping main version..."
                        git checkout --ours "$file"
                    else
                        echo "📝 Regular file, keeping HEAD version..."
                        git checkout --ours "$file"
                    fi
                fi
            done
            
            # Add resolved files and commit
            git add .
            git commit -m "Resolve merge conflicts with main branch - $(date)"
            echo "✅ Successfully resolved conflicts in $branch"
        else
            echo "❌ No conflicted files found, aborting merge..."
            git merge --abort
            continue
        fi
    fi
    
    # Push the updated branch
    echo "💾 Pushing updated $branch..."
    git push origin "$branch"
    
    # Switch back to main
    echo "🔄 Switching back to main..."
    git checkout main
    
    # Merge the branch into main
    echo "🔀 Merging $branch into main..."
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch into main"
        
        # Push main
        echo "💾 Pushing updated main..."
        git push origin main
        
        echo "🎉 Successfully processed $branch"
    else
        echo "❌ Failed to merge $branch into main"
        # Abort the merge
        git merge --abort
    fi
    
    echo "⏱️  Waiting 2 seconds before next branch..."
    sleep 2
done

echo ""
echo "🎉 Batch merge completed!"
echo "📊 Final status:"
git status --short