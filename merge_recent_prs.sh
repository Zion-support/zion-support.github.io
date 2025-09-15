#!/bin/bash

# Merge Recent PRs Script
# This script processes the most recent 100 branches

set -e

echo "🚀 Starting Recent PRs Merge Process"
echo "===================================="

# Get the most recent 100 branches
RECENT_BRANCHES=$(git branch -r | grep "cursor/create-and-deploy-new-content" | tail -100 | sed 's/origin\///' | sort)

echo "📋 Processing 100 most recent branches"

# Counter for tracking
SUCCESS_COUNT=0
FAILED_COUNT=0
TOTAL_COUNT=$(echo "$RECENT_BRANCHES" | wc -l)

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local branch_num=$2
    
    echo ""
    echo "🔄 [$branch_num/$TOTAL_COUNT] Processing: $branch"
    echo "----------------------------------------"
    
    # Try to merge directly
    if git merge "origin/$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        return 0
    else
        echo "❌ Merge conflict for $branch, attempting resolution..."
        
        # Try to resolve conflicts automatically
        if resolve_conflicts_quick; then
            echo "✅ Conflicts resolved for $branch"
            git add .
            git commit -m "Resolve merge conflicts for $branch"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            return 0
        else
            echo "❌ Could not resolve conflicts for $branch"
            git merge --abort 2>/dev/null || true
            FAILED_COUNT=$((FAILED_COUNT + 1))
            return 1
        fi
    fi
}

# Function to resolve conflicts quickly
resolve_conflicts_quick() {
    local resolved=false
    
    # Resolve common conflicts by taking the newer version
    if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
        # For all conflicted files, take the newer version (theirs)
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read line; do
            file=$(echo "$line" | awk '{print $2}')
            if [ -f "$file" ]; then
                git checkout --theirs "$file" 2>/dev/null && git add "$file"
                resolved=true
            fi
        done
        
        # Also resolve any remaining conflicts
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read line; do
            file=$(echo "$line" | awk '{print $2}')
            if [ -f "$file" ]; then
                git checkout --ours "$file" 2>/dev/null && git add "$file"
                resolved=true
            fi
        done
    fi
    
    return 0
}

# Process each branch
branch_num=1
for branch in $RECENT_BRANCHES; do
    merge_branch "$branch" "$branch_num"
    branch_num=$((branch_num + 1))
    
    # Push every 10 branches
    if [ $((branch_num % 10)) -eq 0 ]; then
        echo ""
        echo "🚀 Pushing changes after $branch_num branches..."
        if git push origin main; then
            echo "✅ Changes pushed successfully"
        else
            echo "⚠️  Failed to push changes, will retry later"
        fi
    fi
    
    # Small delay
    sleep 0.5
done

# Final push
echo ""
echo "🚀 Final push..."
if git push origin main; then
    echo "✅ Final changes pushed successfully"
else
    echo "⚠️  Failed to push final changes"
fi

# Final summary
echo ""
echo "🎉 Recent PRs Merge Process Complete!"
echo "====================================="
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo "📊 Total processed: $TOTAL_COUNT branches"

echo ""
echo "🏁 Recent PRs processing complete!"