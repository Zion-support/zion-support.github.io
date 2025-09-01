#!/bin/bash

# Batch Merge Cursor Branches Script
# This script merges cursor branches in smaller batches to avoid timeouts

set -e

echo "🚀 Starting batch merge of cursor branches into main..."

# Ensure we're on main branch
git checkout main
git pull origin main

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///')

# Counter for tracking progress
TOTAL_BRANCHES=$(echo "$CURSOR_BRANCHES" | wc -l)
CURRENT=0
SUCCESSFUL=0
FAILED=0
SKIPPED=0

echo "📊 Found $TOTAL_BRANCHES cursor branches to merge"

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local current=$2
    local total=$3
    
    echo ""
    echo "🔄 [$current/$total] Merging branch: $branch"
    echo "=================================================="
    
    # Check if branch exists locally, if not fetch it
    if ! git show-ref --verify --quiet refs/heads/$branch; then
        echo "📥 Fetching branch $branch..."
        git fetch origin $branch:$branch
    fi
    
    # Check if branch has changes compared to main
    local commits_ahead=$(git rev-list --count main..$branch 2>/dev/null || echo "0")
    
    if [ "$commits_ahead" -eq "0" ]; then
        echo "⏭️  Branch $branch has no new commits, skipping..."
        return 1
    fi
    
    echo "📝 Branch $branch has $commits_ahead commits ahead of main"
    
    # Try to merge
    if git merge --no-edit $branch 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflict detected in $branch, attempting to resolve..."
        
        # Resolve conflicts by keeping main version for most files
        resolve_conflicts_simple
        
        # Try to complete the merge
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "❌ Unresolved conflicts remain, aborting merge..."
            git merge --abort
            return 2
        else
            echo "✅ Conflicts resolved, completing merge..."
            git add .
            if git commit -m "Merge $branch into main - conflicts resolved" 2>/dev/null; then
                echo "✅ Successfully merged $branch after conflict resolution"
                return 0
            else
                echo "❌ Failed to complete merge after conflict resolution"
                git merge --abort
                return 2
            fi
        fi
    fi
}

# Function to resolve conflicts simply
resolve_conflicts_simple() {
    echo "🔧 Resolving conflicts by keeping main version..."
    
    # Get list of conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U)
    
    for file in $conflicted_files; do
        echo "  📄 Resolving conflicts in: $file"
        
        # For most files, keep the main version
        if git checkout --ours "$file" 2>/dev/null; then
            echo "    ✅ Kept main version of $file"
            git add "$file"
        else
            echo "    ⚠️  Could not resolve $file, keeping branch version"
            git checkout --theirs "$file" 2>/dev/null || echo "    ❌ Failed to resolve $file"
            git add "$file"
        fi
    done
}

# Main merge loop - process in batches of 5
BATCH_SIZE=5
BATCH_COUNT=0

for branch in $CURSOR_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    
    case $(merge_branch $branch $CURRENT $TOTAL_BRANCHES) in
        0) SUCCESSFUL=$((SUCCESSFUL + 1)) ;;
        1) SKIPPED=$((SKIPPED + 1)) ;;
        2) FAILED=$((FAILED + 1)) ;;
    esac
    
    # Push changes every batch
    BATCH_COUNT=$((BATCH_COUNT + 1))
    if [ $BATCH_COUNT -eq $BATCH_SIZE ]; then
        echo "📤 Pushing batch changes to remote..."
        if git push origin main; then
            echo "✅ Batch changes pushed successfully"
        else
            echo "❌ Failed to push batch changes"
        fi
        BATCH_COUNT=0
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 0.5
done

# Final push
echo "📤 Final push to remote..."
if git push origin main; then
    echo "✅ Final push successful"
else
    echo "❌ Final push failed"
fi

# Summary
echo ""
echo "🎉 Batch merge operation completed!"
echo "=================================================="
echo "📊 Summary:"
echo "   Total branches processed: $TOTAL_BRANCHES"
echo "   ✅ Successfully merged: $SUCCESSFUL"
echo "   ⏭️  Skipped (no changes): $SKIPPED"
echo "   ❌ Failed to merge: $FAILED"
echo "=================================================="

if [ $FAILED -gt 0 ]; then
    echo "⚠️  Some branches failed to merge. Check the logs above for details."
    echo "💡 You may need to manually resolve conflicts for failed branches."
fi

echo "🚀 All manageable branches have been merged into main!"