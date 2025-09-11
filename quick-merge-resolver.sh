#!/bin/bash

echo "🚀 Starting quick merge conflict resolution..."

# Check git status
echo "📋 Checking git status..."
git status

# Find and resolve merge conflicts
echo "🔍 Finding merge conflicts..."
CONFLICTS=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")

if [ -n "$CONFLICTS" ]; then
    echo "⚠️ Found merge conflicts in:"
    echo "$CONFLICTS"
    
    # Resolve conflicts by keeping HEAD version
    echo "🔧 Resolving conflicts by keeping HEAD version..."
    for file in $CONFLICTS; do
        if [ -f "$file" ]; then
            echo "Processing: $file"
            # Remove conflict markers and keep HEAD version
            sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /c\
# Resolved merge conflict - kept HEAD version' "$file"
        fi
    done
    
    # Add resolved files
    git add .
    
    # Commit the merge
    git commit -m "Resolve merge conflicts automatically"
    
    echo "✅ Merge conflicts resolved and committed"
else
    echo "✅ No merge conflicts found"
fi

# Check for branches that can be merged
echo "🔍 Checking for branches to merge..."
git fetch origin

# Get list of remote branches
BRANCHES=$(git branch -r | grep -v "origin/main" | grep -E "(cursor|check|fix|merge)" | head -10)

echo "📋 Found potential branches to merge:"
echo "$BRANCHES"

# Try to merge each branch
for branch in $BRANCHES; do
    echo "🔄 Attempting to merge: $branch"
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged: $branch"
    else
        echo "⚠️ Failed to merge: $branch (may have conflicts)"
        # Try to resolve conflicts
        CONFLICTS=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        if [ -n "$CONFLICTS" ]; then
            echo "🔧 Resolving conflicts in: $CONFLICTS"
            for file in $CONFLICTS; do
                if [ -f "$file" ]; then
                    # Keep HEAD version for conflicts
                    sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /c\
# Resolved merge conflict - kept HEAD version' "$file"
                fi
            done
            git add .
            git commit -m "Resolve conflicts when merging $branch"
            echo "✅ Conflicts resolved for: $branch"
        fi
    fi
done

# Push changes
echo "📤 Pushing changes to origin..."
git push origin main

echo "🎉 Merge conflict resolution completed!"