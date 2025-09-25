#!/bin/bash

# Script to resolve merge conflicts and merge all open PRs
set -e

echo "🚀 Starting PR merge resolution process..."

# Function to merge a branch with conflict resolution
merge_branch_with_conflict_resolution() {
    local branch_name="$1"
    echo "📋 Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
        echo "⚠️  Branch $branch_name does not exist, skipping..."
        return 0
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "origin/$branch_name" main 2>/dev/null; then
        echo "✅ Branch $branch_name already merged, skipping..."
        return 0
    fi
    
    echo "🔄 Attempting to merge $branch_name into main..."
    
    # Try to merge
    if git merge "origin/$branch_name" --no-ff -m "Merge $branch_name: resolve conflicts and integrate changes" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch_name, resolving automatically..."
        
        # Auto-resolve conflicts by preferring incoming changes
        conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            echo "🔧 Auto-resolving conflicts in: $conflicted_files"
            
            # Resolve conflicts by taking theirs (incoming changes)
            for file in $conflicted_files; do
                if [ -f "$file" ]; then
                    echo "  - Resolving $file"
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    git add "$file"
                fi
            done
            
            # Commit the resolved merge
            git commit -m "Merge $branch_name: auto-resolved conflicts and integrated changes"
            echo "✅ Successfully merged $branch_name with auto-resolved conflicts"
        else
            echo "❌ No conflicted files found, aborting merge"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get list of cursor branches to merge
echo "🔍 Finding cursor branches to merge..."
cursor_branches=(
    "cursor/check-fix-push-and-merge-to-main-1174"
    "cursor/check-fix-push-and-merge-to-main-6ac3"
    "cursor/check-fix-push-and-merge-to-main-9a5a"
    "cursor/check-fix-push-and-merge-to-main-a07e"
    "cursor/check-fix-push-and-merge-to-main-d583"
    "cursor/check-fix-push-and-merge-to-main-e168"
    "cursor/check-fix-push-and-merge-to-main-efca"
    "cursor/check-fix-push-and-merge-to-main-1631"
)

echo "📊 Found ${#cursor_branches[@]} branches to process"

# Process each branch
successful_merges=0
failed_merges=0

for branch in "${cursor_branches[@]}"; do
    echo ""
    echo "🔄 Processing: $branch"
    if merge_branch_with_conflict_resolution "$branch"; then
        successful_merges=$((successful_merges + 1))
    else
        failed_merges=$((failed_merges + 1))
    fi
done

echo ""
echo "📈 Merge Summary:"
echo "  ✅ Successful merges: $successful_merges"
echo "  ❌ Failed merges: $failed_merges"
echo "  📊 Total processed: $((successful_merges + failed_merges))"

if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "🚀 Pushing all changes to remote..."
    git push origin main
    echo "✅ All changes pushed to remote successfully!"
fi

echo "🏁 PR merge resolution process complete!"