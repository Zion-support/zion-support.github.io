#!/bin/bash

# Comprehensive merge script for all unmerged branches
set -e

echo "🚀 Starting comprehensive merge of all unmerged branches..."

# Get list of unmerged cursor branches
UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep "cursor/create-and-deploy-new-content" | head -20)

echo "📋 Found unmerged branches:"
echo "$UNMERGED_BRANCHES"

# Counter for successful merges
SUCCESS_COUNT=0
FAILED_COUNT=0

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo ""
    echo "🔄 Attempting to merge: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "❌ Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge --no-ff "$branch" -m "merge: Merge $branch into main (automated merge)"; then
        echo "✅ Successfully merged: $branch"
        ((SUCCESS_COUNT++))
        return 0
    else
        echo "⚠️  Merge conflict in: $branch"
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts by accepting our changes..."
            
            # Resolve conflicts by accepting our changes
            git checkout --ours .
            git add .
            
            if git commit -m "merge: Resolved conflicts and merged $branch (accepted our changes)"; then
                echo "✅ Successfully resolved conflicts and merged: $branch"
                ((SUCCESS_COUNT++))
                return 0
            else
                echo "❌ Failed to resolve conflicts for: $branch"
                git merge --abort
                ((FAILED_COUNT++))
                return 1
            fi
        else
            echo "❌ Merge failed for: $branch"
            git merge --abort
            ((FAILED_COUNT++))
            return 1
        fi
    fi
}

# Merge each branch
for branch in $UNMERGED_BRANCHES; do
    merge_branch "$branch"
done

echo ""
echo "📊 Merge Summary:"
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"

# Push changes
echo ""
echo "🚀 Pushing changes to remote..."
if git push origin main; then
    echo "✅ Successfully pushed to origin/main"
else
    echo "❌ Failed to push to origin/main"
    exit 1
fi

echo ""
echo "🎉 Merge process completed!"
echo "📈 Total branches processed: $((SUCCESS_COUNT + FAILED_COUNT))"