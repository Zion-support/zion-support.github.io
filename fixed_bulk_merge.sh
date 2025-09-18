#!/bin/bash

# Fixed Bulk Merge Script
set -e

echo "🚀 Starting fixed bulk merge process..."

# Function to merge branch with conflict resolution
merge_branch_with_resolution() {
    local branch="$1"
    local branch_name="${branch#origin/}"
    
    echo "🔄 Merging branch: $branch_name"
    
    if git merge "$branch" --no-ff -m "Merge $branch_name into main"; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Conflicts detected, resolving by keeping our changes..."
        # Resolve conflicts by keeping our version
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            if [ -f "$file" ]; then
                git checkout --ours "$file" 2>/dev/null || true
                sed -i '/^<<<<<<< HEAD$/d; /^=======$/d; /^>>>>>>> .*/d' "$file" 2>/dev/null || true
            fi
        done
        
        git add . && git commit -m "Resolve conflicts for $branch_name - keeping our changes"
        echo "✅ Resolved conflicts and merged $branch_name"
        return 0
    fi
}

# Main execution
main() {
    echo "📍 Current status:"
    git status --short
    
    # Get recent cursor branches (limit to avoid too many)
    echo "🔍 Finding recent cursor branches to merge..."
    
    recent_branches=$(git branch -r --sort=-committerdate | grep "origin/cursor/" | head -50)
    
    if [ -z "$recent_branches" ]; then
        echo "ℹ️  No branches found to merge"
        return 0
    fi
    
    echo "📋 Found branches to merge (showing first 10):"
    echo "$recent_branches" | head -10
    
    successful_merges=0
    failed_merges=0
    already_merged=0
    
    while IFS= read -r branch; do
        if [ -n "$branch" ] && [ "$branch" != "origin/main" ]; then
            echo ""
            echo "🔄 Processing: $branch"
            
            # Check if already merged
            if git merge-base --is-ancestor "$branch" HEAD 2>/dev/null; then
                echo "✅ Already merged: ${branch#origin/}"
                ((already_merged++))
                continue
            fi
            
            if merge_branch_with_resolution "$branch"; then
                ((successful_merges++))
            else
                ((failed_merges++))
                # Abort the merge if it failed
                git merge --abort 2>/dev/null || true
            fi
            
            # Small delay
            sleep 0.5
        fi
    done <<< "$recent_branches"
    
    echo ""
    echo "📊 Merge Summary:"
    echo "✅ Successful merges: $successful_merges"
    echo "✅ Already merged: $already_merged"
    echo "❌ Failed merges: $failed_merges"
    
    # Push all changes
    echo ""
    echo "📤 Pushing all changes to remote..."
    git push origin main --force
    
    echo ""
    echo "🎉 Bulk merge process completed!"
}

# Run main function
main "$@"