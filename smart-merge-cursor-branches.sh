#!/bin/bash

# Smart script to merge cursor branches efficiently
echo "🚀 Starting smart cursor branch merge process..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get all cursor branches
echo "📋 Fetching all cursor branches..."
git fetch origin

# Get list of cursor branches that need merging
CURSOR_BRANCHES=($(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -50))

echo "📊 Found ${#CURSOR_BRANCHES[@]} cursor branches to process"

successful_merges=0
failed_merges=0
already_merged=0

# Process each branch
for branch in "${CURSOR_BRANCHES[@]}"; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Check if branch is already merged into main
    if git merge-base --is-ancestor "origin/$branch" "origin/main" 2>/dev/null; then
        echo "   ✅ Branch $branch is already merged into main, skipping..."
        ((already_merged++))
        continue
    fi
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit --no-ff 2>/dev/null; then
        echo "   ✅ Successfully merged $branch"
        ((successful_merges++))
    else
        echo "   ⚠️  Merge conflicts detected for $branch, attempting resolution..."
        
        # Try to resolve conflicts by taking theirs (incoming changes)
        git checkout --theirs . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit --no-edit 2>/dev/null; then
            echo "   ✅ Conflicts resolved and merged $branch"
            ((successful_merges++))
        else
            echo "   ❌ Failed to resolve conflicts for $branch"
            git merge --abort 2>/dev/null || true
            ((failed_merges++))
        fi
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 0.5
done

# Push all changes
echo ""
echo "📤 Pushing merged changes to main..."
if git push origin main; then
    echo "✅ Successfully pushed all merged changes to main"
else
    echo "❌ Failed to push changes to main"
fi

# Generate summary
echo ""
echo "📊 SMART MERGE SUMMARY:"
echo "   ✅ Successful merges: $successful_merges"
echo "   ❌ Failed merges: $failed_merges"
echo "   🔄 Already merged: $already_merged"
echo "   📈 Total branches processed: ${#CURSOR_BRANCHES[@]}"

if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "🎉 Successfully merged $successful_merges branches into main!"
fi

echo ""
echo "🏁 Smart merge process completed!"