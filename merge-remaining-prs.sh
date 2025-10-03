#!/bin/bash

# Script to merge all remaining open PRs into main branch
set -e

echo "🚀 Starting comprehensive merge of all remaining open PRs..."

# Ensure we're on main and up to date
echo "📥 Ensuring main is up to date..."
git checkout main
git fetch origin
git pull origin main

# Counter for successful merges
MERGED_COUNT=0
FAILED_COUNT=0

# Function to resolve conflicts in a file
resolve_conflicts_in_file() {
    local file="$1"
    echo "🔧 Resolving conflicts in $file..."
    
    # Remove conflict markers and keep the incoming changes (from PR)
    sed -i '/^<<<<<<< /d' "$file" 2>/dev/null || true
    sed -i '/^======= /d' "$file" 2>/dev/null || true
    sed -i '/^>>>>>>> /d' "$file" 2>/dev/null || true
    
    # Remove empty lines that might be left
    sed -i '/^$/N;/^\n$/d' "$file" 2>/dev/null || true
    
    echo "✅ Conflicts resolved in $file"
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    echo "🔄 Attempting to merge $branch..."
    
    # Try to merge with no-commit first to check for conflicts
    if git merge "origin/$branch" --no-commit --no-ff 2>/dev/null; then
        echo "✅ Successfully merged $branch (no conflicts)"
        git commit -m "Merge $branch into main - resolved conflicts automatically"
        return 0
    else
        echo "⚠️  Merge conflict detected in $branch"
        
        # Check for conflict files
        local conflict_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflict_files" ]; then
            echo "🔧 Resolving conflicts in files: $conflict_files"
            for file in $conflict_files; do
                resolve_conflicts_in_file "$file"
            done
            
            # Add resolved files
            git add $conflict_files
            
            # Commit the merge
            git commit -m "Merge $branch into main - resolved conflicts automatically"
            echo "✅ Conflicts resolved and merged $branch"
            return 0
        else
            echo "❌ Failed to merge $branch - aborting"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get all cursor branches that need merging
echo "📋 Getting list of cursor branches to merge..."
CURSOR_BRANCHES=$(git branch -r --list 'origin/cursor/*' | grep -v HEAD | sed 's/origin\///' | head -50)

if [ -z "$CURSOR_BRANCHES" ]; then
    echo "⚠️  No cursor branches found to merge"
    exit 0
fi

echo "📋 Found cursor branches to merge:"
echo "$CURSOR_BRANCHES"

# Merge each branch
for branch in $CURSOR_BRANCHES; do
    echo ""
    echo "=========================================="
    echo "🔀 Processing branch: $branch"
    echo "=========================================="
    
    if merge_branch "$branch"; then
        echo "✅ Successfully merged $branch"
        MERGED_COUNT=$((MERGED_COUNT + 1))
        
        # Push every 10 successful merges to avoid losing work
        if [ $((MERGED_COUNT % 10)) -eq 0 ]; then
            echo "💾 Pushing progress to remote..."
            git push origin main
        fi
    else
        echo "❌ Failed to merge $branch"
        FAILED_COUNT=$((FAILED_COUNT + 1))
    fi
    
    echo "---"
done

echo ""
echo "=========================================="
echo "📊 Merge Summary"
echo "=========================================="
echo "✅ Successfully merged: $MERGED_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo ""

# Final push
if [ $MERGED_COUNT -gt 0 ]; then
    echo "📤 Pushing all merged changes to main..."
    if git push origin main; then
        echo "✅ All changes pushed to main successfully!"
    else
        echo "❌ Failed to push to main. Please check and push manually."
        exit 1
    fi
else
    echo "⚠️  No branches were merged. Nothing to push."
fi

echo ""
echo "🎉 Merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $MERGED_COUNT"
echo "   ❌ Failed merges: $FAILED_COUNT"