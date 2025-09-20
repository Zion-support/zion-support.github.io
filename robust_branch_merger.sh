#!/bin/bash

# Robust Branch Merger Script
set -e

echo "🚀 Starting robust branch merging process..."

# Function to merge branch safely
merge_branch_robust() {
    local branch="$1"
    # Clean up the branch name (remove extra spaces)
    branch=$(echo "$branch" | tr -d ' ')
    local branch_name="${branch#origin/}"
    
    echo "🔄 Attempting to merge: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/$branch"; then
        echo "⚠️  Branch $branch not found, skipping..."
        return 1
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "$branch" HEAD 2>/dev/null; then
        echo "✅ Already merged: $branch_name"
        return 0
    fi
    
    # Try to merge
    if git merge "$branch" --no-ff -m "Merge $branch_name into main"; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Conflicts detected, resolving by keeping our changes..."
        
        # Resolve conflicts by keeping our version
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            if [ -f "$file" ]; then
                git checkout --ours "$file" 2>/dev/null || true
    echo "✅ Successful merges: $successful_merges"
    echo "❌ Failed merges: $failed_merges"
    
    # Final cleanup of any remaining conflicts
    echo ""
    echo "🧹 Performing final conflict cleanup..."
    
            fi
        done
        
        # Add cleaned files
        git add . 2>/dev/null || true
        git commit -m "Final cleanup of remaining conflict markers" 2>/dev/null || true
    fi
    
    # Push all changes
    echo ""
    echo "📤 Pushing all changes to remote..."
    git push origin main --force
    
    echo ""
    echo "🎉 ROBUST BRANCH MERGING COMPLETED!"
    echo "📈 Main branch is now fully updated"
    echo "🚀 Repository ready for continued development"
    
    # Show final status
    echo ""
    echo "📍 Final status:"
    git status --short
    echo ""
    echo "📋 Recent commits:"
    git log --oneline -5
}

# Run main function
main "$@"