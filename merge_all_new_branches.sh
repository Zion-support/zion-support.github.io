#!/bin/bash

echo "Starting comprehensive merge of all new branches..."

# Get all remote branches
git fetch --all

# Get list of new branches to merge (most recent ones)
NEW_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-19cc"
    "origin/cursor/create-and-deploy-new-content-1ff5"
    "origin/cursor/create-and-deploy-new-content-6fb7"
    "origin/cursor/create-and-deploy-new-content-8c29"
    "origin/cursor/create-and-deploy-new-content-3930"
    "origin/cursor/create-and-deploy-new-content-0826"
    "origin/cursor/create-and-deploy-new-content-4b1d"
    "origin/cursor/create-and-deploy-new-content-503f"
    "origin/cursor/create-and-deploy-new-content-d93e"
    "origin/cursor/create-and-deploy-new-content-c79e"
    "origin/cursor/create-and-deploy-new-content-492d"
    "origin/cursor/create-and-deploy-new-content-c2d4"
    "origin/content-creation-and-advertising-2025"
)

SUCCESS_COUNT=0
FAILED_COUNT=0
ALREADY_UPTODATE=0
TOTAL_COUNT=${#NEW_BRANCHES[@]}

echo "Total branches to process: $TOTAL_COUNT"

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/$branch"; then
        echo "Branch $branch does not exist, skipping..."
        return
    fi
    
    # Try to merge
    if git merge "$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    elif git merge "$branch" --no-ff -m "Merge $branch into main" 2>&1 | grep -q "Already up to date"; then
        echo "ℹ️  Already up to date: $branch"
        ALREADY_UPTODATE=$((ALREADY_UPTODATE + 1))
    else
        echo "❌ Merge conflict in $branch, attempting to resolve..."
        
        # Check for conflicts
        if git status | grep -q "both modified"; then
            echo "Resolving conflicts automatically..."
            
            # Resolve conflicts by accepting our changes
            git checkout --ours .
            git add .
            
            if git commit -m "Resolve merge conflicts in $branch"; then
                echo "✅ Resolved conflicts for $branch"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            else
                echo "❌ Failed to resolve conflicts for $branch"
                git merge --abort
                FAILED_COUNT=$((FAILED_COUNT + 1))
            fi
        else
            echo "❌ Failed to merge $branch"
            git merge --abort
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    fi
    
    echo "---"
}

# Process each branch
for branch in "${NEW_BRANCHES[@]}"; do
    merge_branch "$branch"
done

echo "Merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT"
echo "Already up to date: $ALREADY_UPTODATE"
echo "Failed to merge: $FAILED_COUNT"
echo "Total processed: $TOTAL_COUNT"

# Push all changes
echo "Pushing changes to remote..."
git push origin main