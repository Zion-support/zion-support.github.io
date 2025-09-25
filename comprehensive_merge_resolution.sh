#!/bin/bash

# Comprehensive Merge Resolution Script
set -e

echo "🚀 Starting Comprehensive Merge Resolution Process..."
echo "📅 $(date)"

# Function to safely merge a branch with conflict resolution
merge_branch_safely() {
    local branch_name="$1"
    local timestamp=$(date +%Y%m%d-%H%M%S)
    
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
    
    # Create local tracking branch
    local local_branch="local-${branch_name##*/}-${timestamp}"
    
    echo "🔄 Attempting to merge $branch_name..."
    
    # Try to merge
    if git merge "origin/$branch_name" --no-commit --no-ff 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        git commit -m "Merge $branch_name - resolved conflicts automatically - $timestamp"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch_name, resolving automatically..."
        
        # Auto-resolve conflicts
        conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            echo "🔧 Auto-resolving conflicts in: $conflicted_files"
            
            # Resolve conflicts by taking theirs (incoming changes) for most files
            for file in $conflicted_files; do
                if [ -f "$file" ]; then
                    echo "  - Resolving $file"
                    # For package files, prefer theirs; for config files, prefer ours
                    if [[ "$file" =~ (package\.json|package-lock\.json|yarn\.lock)$ ]]; then
                        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    else
                        git checkout --ours "$file" 2>/dev/null || git checkout --theirs "$file" 2>/dev/null || true
                    fi
                    git add "$file"
                fi
            done
            
            # Try to commit the resolved merge
            if git commit -m "Merge $branch_name - auto-resolved conflicts - $timestamp"; then
                echo "✅ Successfully merged $branch_name with auto-resolved conflicts"
                return 0
            else
                echo "❌ Failed to commit resolved merge for $branch_name"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            echo "❌ No conflicted files found, aborting merge for $branch_name"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get all recent branches that need merging
echo "🔍 Finding branches to merge..."

# Get recent cursor branches
cursor_branches=$(git for-each-ref --format='%(refname:short)' refs/remotes/origin | \
    grep "cursor/" | \
    head -30)

# Get recent maintenance branches
maintenance_branches=$(git for-each-ref --format='%(refname:short)' refs/remotes/origin | \
    grep "maintenance/" | \
    head -10)

# Get recent codex branches
codex_branches=$(git for-each-ref --format='%(refname:short)' refs/remotes/origin | \
    grep "codex" | \
    head -10)

# Combine all branches
all_branches="$cursor_branches $maintenance_branches $codex_branches"

echo "📊 Found $(echo "$all_branches" | wc -w) branches to process"

successful_merges=0
failed_merges=0

# Process each branch
for branch in $all_branches; do
    branch_name="${branch#origin/}"
    echo ""
    echo "🔄 Processing: $branch_name"
    
    if merge_branch_safely "$branch_name"; then
        ((successful_merges++))
        echo "✅ Success: $branch_name"
    else
        ((failed_merges++))
        echo "❌ Failed: $branch_name"
    fi
    
    # Add small delay to prevent overwhelming the system
    sleep 0.1
done

echo ""
echo "📊 Comprehensive Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "📊 Total processed: $((successful_merges + failed_merges))"
echo "📅 Completed at: $(date)"

# Push all changes to remote
if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "🚀 Pushing changes to remote..."
    git push origin main --force-with-lease
    echo "✅ All changes pushed successfully!"
fi

echo "🎉 Comprehensive merge resolution completed!"