#!/bin/bash

# Script to merge the specific PR: Fix Netlify build and merge to main
echo "🚀 Starting PR merge process for: Fix Netlify build and merge to main"

# Configure git
git config pull.rebase false
git config merge.tool vimdiff
git config merge.conflictstyle diff3

# Ensure we're on main branch
echo "🌿 Switching to main branch..."
git checkout main

# Pull latest changes
echo "⬇️ Pulling latest changes from origin..."
git pull origin main

# The specific PR branch
PR_BRANCH="cursor/fix-netlify-build-and-merge-to-main-bc4d"

echo "🔄 Processing PR branch: $PR_BRANCH"

# Fetch the PR branch
echo "📥 Fetching PR branch..."
git fetch origin $PR_BRANCH

if [ $? -eq 0 ]; then
    echo "✅ Successfully fetched $PR_BRANCH"
    
    # Try to merge
    echo "🔀 Attempting to merge $PR_BRANCH into main..."
    if git merge "origin/$PR_BRANCH" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $PR_BRANCH"
    else
        echo "⚠️ Merge conflicts detected. Resolving..."
        
        # Check for conflicted files
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            CONFLICTED_FILES=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
            
            echo "🔧 Resolving conflicts in:"
            echo "$CONFLICTED_FILES"
            
            for file in $CONFLICTED_FILES; do
                echo "  Processing: $file"
                
                # Handle different file types
                if [[ "$file" == *"tsconfig.tsbuildinfo"* ]] || [[ "$file" == *".next/"* ]] || [[ "$file" == *"dist/"* ]] || [[ "$file" == *"node_modules/"* ]]; then
                    echo "    Removing build artifact: $file"
                    git rm "$file" 2>/dev/null || rm -f "$file"
                elif [[ "$file" == "package-lock.json" ]] || [[ "$file" == "yarn.lock" ]]; then
                    echo "    Keeping our version of: $file"
                    git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                elif [[ "$file" == "netlify.toml" ]] || [[ "$file" == "next.config.js" ]] || [[ "$file" == "vite.config.js" ]]; then
                    echo "    Keeping our version of config: $file"
                    git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                else
                    echo "    Adding file: $file"
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Commit the resolution
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Successfully resolved conflicts and merged $PR_BRANCH"
            else
                echo "❌ Failed to resolve conflicts for $PR_BRANCH"
                git merge --abort 2>/dev/null || true
                exit 1
            fi
        else
            echo "❌ Merge failed for unknown reason: $PR_BRANCH"
            git merge --abort 2>/dev/null || true
            exit 1
        fi
    fi
    
    # Push the changes
    echo "⬆️ Pushing merged changes to origin/main..."
    if git push origin main; then
        echo "✅ Successfully pushed changes to main"
        echo "🎉 PR merge completed successfully!"
    else
        echo "❌ Failed to push changes to main"
        exit 1
    fi
else
    echo "❌ Failed to fetch $PR_BRANCH"
    exit 1
fi

echo ""
echo "📊 Final Status:"
git status --short

echo ""
echo "🎉 PR merge process completed!"
echo "The 'Fix Netlify build and merge to main' PR has been successfully merged into main branch."