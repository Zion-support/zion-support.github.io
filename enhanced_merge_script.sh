#!/bin/bash

# Enhanced Merge Script for Resolving All Conflicts and Merging All Branches
set -e

echo "🚀 Starting Enhanced Merge Process..."
echo "📅 $(date)"

# Function to safely merge a branch
merge_branch_safely() {
    local branch_name="$1"
    local timestamp=$(date +%Y%m%d-%H%M%S)
    
    echo "📋 Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
        echo "⚠️  Branch $branch_name does not exist, skipping..."
        return 0
    fi
    
    # Create local tracking branch
    local local_branch="local-${branch_name##*/}-${timestamp}"
    git checkout -b "$local_branch" "origin/$branch_name" 2>/dev/null || {
        echo "⚠️  Failed to checkout $branch_name, skipping..."
        return 0
    }
    
    # Try to merge with main
    if git merge main --no-commit --no-ff 2>/dev/null; then
        echo "✅ Successfully merged $branch_name with main"
        git commit -m "Merge $branch_name into main - resolved conflicts automatically - $timestamp"
        
        # Merge back to main
        git checkout main
        git merge "$local_branch" --no-ff -m "Integrated $branch_name - $timestamp"
        
        # Clean up local branch
        git branch -D "$local_branch" 2>/dev/null || true
        
        echo "✅ Successfully integrated $branch_name into main"
        return 0
    else
        echo "⚠️  Merge conflict in $branch_name, attempting resolution..."
        
        # Try to resolve conflicts automatically
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Auto-resolving conflicts in $branch_name..."
            
            # Auto-resolve common conflicts
            git status --porcelain | while read line; do
                file=$(echo "$line" | cut -c4-)
                if [[ "$file" =~ \.(json|md|txt|yml|yaml)$ ]]; then
                    echo "🔧 Auto-resolving $file"
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                fi
            done
            
            # Add resolved files
            git add . 2>/dev/null || true
            
            # Try to commit
            if git commit -m "Auto-resolved conflicts in $branch_name - $timestamp"; then
                echo "✅ Auto-resolved conflicts in $branch_name"
                
                # Merge back to main
                git checkout main
                git merge "$local_branch" --no-ff -m "Integrated $branch_name (auto-resolved conflicts) - $timestamp"
                
                # Clean up
                git branch -D "$local_branch" 2>/dev/null || true
                echo "✅ Successfully integrated $branch_name (with auto-resolved conflicts)"
                return 0
            fi
        fi
        
        # If auto-resolution failed, abort merge
        echo "❌ Failed to resolve conflicts in $branch_name, aborting merge"
        git merge --abort 2>/dev/null || true
        git checkout main
        git branch -D "$local_branch" 2>/dev/null || true
        return 1
    fi
}

# Get all recent branches that need merging
echo "🔍 Finding branches to merge..."

# Get recent branches (last 7 days)
recent_branches=$(git for-each-ref --format='%(refname:short) %(committerdate)' refs/remotes/origin | \
    awk -v date="$(date -d '7 days ago' '+%Y-%m-%d')" '$2 >= date {print $1}' | \
    grep -E "(cursor|codex)" | \
    sort -k2 -r | head -100)

if [ -z "$recent_branches" ]; then
    echo "⚠️  No recent branches found to merge"
    exit 0
fi

echo "📊 Found $(echo "$recent_branches" | wc -l) recent branches to process"

# Process each branch
successful_merges=0
failed_merges=0

for branch in $recent_branches; do
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
    
    # Add a small delay to prevent overwhelming the system
    sleep 0.1
done

echo ""
echo "📊 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "📅 Completed at: $(date)"

# Push all changes to remote
echo ""
echo "🚀 Pushing changes to remote..."
git push origin main --force-with-lease

echo "🎉 Enhanced merge process completed!"