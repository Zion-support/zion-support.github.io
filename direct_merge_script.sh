#!/bin/bash

# Script to merge branches directly without checking them out
echo "🔄 Starting direct merge process..."

# Fetch all remote branches
echo "📥 Fetching all remote branches..."
git fetch --all

# Get list of cursor branches that need to be merged
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main" | head -50)

echo "📋 Found cursor branches to process:"
echo "$CURSOR_BRANCHES"

# Counter for tracking progress
COUNT=0
SUCCESS_COUNT=0
FAILED_COUNT=0

# Process each branch
for branch in $CURSOR_BRANCHES; do
    COUNT=$((COUNT + 1))
    echo ""
    echo "🔧 Processing branch $COUNT: $branch"
    
    # Extract branch name without origin/
    branch_name=${branch#origin/}
    
    # Try to merge the branch directly
    echo "📤 Attempting to merge $branch_name into main..."
    
    # Attempt direct merge
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch_name"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Push the changes
        echo "📤 Pushing changes to main..."
        git push origin main
        
    else
        echo "❌ Failed to merge $branch_name"
        FAILED_COUNT=$((FAILED_COUNT + 1))
        
        # Abort the merge
        git merge --abort
    fi
    
    # Break after processing 50 branches
    if [ $COUNT -ge 100 ]; then
        echo "🛑 Reached limit of 50 branches, stopping..."
        break
    fi
done

echo ""
echo "📊 Merge process completed!"
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo "📈 Total processed: $COUNT branches"

echo ""
echo "🎉 Direct merge script completed!"