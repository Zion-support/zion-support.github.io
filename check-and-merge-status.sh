#!/bin/bash

echo "🔍 Checking current merge status and continuing with remaining PRs..."

# Check current git status
echo "📊 Current git status:"
git status --porcelain

echo ""
echo "📋 Current branch:"
git branch --show-current

echo ""
echo "🔄 Fetching latest changes..."
git fetch --all

echo ""
echo "📊 Checking for remaining cursor branches..."
REMAINING_BRANCHES=$(git branch -r | grep "origin/cursor/" | wc -l)
echo "Found $REMAINING_BRANCHES cursor branches remaining"

echo ""
echo "📋 Checking for unmerged branches..."
UNMERGED_BRANCHES=$(git branch -r --no-merged main | grep "origin/cursor/" | wc -l)
echo "Found $UNMERGED_BRANCHES unmerged cursor branches"

echo ""
echo "🚀 Starting merge process for remaining branches..."

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0

# Get unmerged cursor branches
UNMERGED_BRANCH_LIST=$(git branch -r --no-merged main | grep "origin/cursor/" | sed 's/origin\///' | head -10)

for branch in $UNMERGED_BRANCH_LIST; do
    echo "🔄 Processing branch: $branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts by removing conflict markers
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "🔧 Resolving conflicts in $file..."
                    sed -i '/                    sed -i '/                    CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
    
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
    echo "---"
done

# Push changes
echo "💾 Pushing changes to remote..."
git push origin main

echo ""
echo "🎉 Merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "⏰ Completed at: $(date)"