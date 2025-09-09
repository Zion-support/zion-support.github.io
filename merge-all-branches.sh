#!/bin/bash

# Automated script to merge all remote branches into main
# This script handles the massive number of branches efficiently

set -e

echo "🚀 Starting automated branch merging process..."
echo "=================================================="

# Function to safely merge a branch
merge_branch() {
    local branch_name="$1"
    echo "📋 Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch_name"; then
        echo "⚠️  Branch $branch_name not found, skipping..."
        return 1
    fi
    
    # Create a temporary branch for merging
    local temp_branch="temp-merge-$(echo $branch_name | sed 's/origin\///' | sed 's/\//-/g')"
    
    # Checkout the remote branch
    if git checkout -b "$temp_branch" "$branch_name" 2>/dev/null; then
        echo "✅ Checked out $branch_name"
        
        # Try to merge into main
        if git checkout main 2>/dev/null; then
            if git merge "$temp_branch" --no-ff -m "Merge $branch_name into main" 2>/dev/null; then
                echo "✅ Successfully merged $branch_name"
                git branch -D "$temp_branch" 2>/dev/null || true
                return 0
            else
                echo "⚠️  Merge conflict in $branch_name, resolving..."
                # Try to resolve conflicts automatically
                if git checkout --theirs . 2>/dev/null && git add . 2>/dev/null && git commit -m "Auto-resolve conflicts for $branch_name" 2>/dev/null; then
                    echo "✅ Auto-resolved conflicts for $branch_name"
                    git branch -D "$temp_branch" 2>/dev/null || true
                    return 0
                else
                    echo "❌ Failed to resolve conflicts for $branch_name"
                    git merge --abort 2>/dev/null || true
                    git checkout main 2>/dev/null || true
                    git branch -D "$temp_branch" 2>/dev/null || true
                    return 1
                fi
            fi
        else
            echo "❌ Failed to checkout main"
            git branch -D "$temp_branch" 2>/dev/null || true
            return 1
        fi
    else
        echo "❌ Failed to checkout $branch_name"
        return 1
    fi
}

# Get all remote branches
echo "📊 Fetching all remote branches..."
git fetch --all

# Get list of remote branches (excluding main and HEAD)
branches=$(git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | sed 's/^[[:space:]]*//' | head -50)

echo "🔍 Found $(echo "$branches" | wc -l) branches to process"
echo "📝 Processing first 50 branches (to avoid overwhelming the system)..."
echo ""

# Counters
success_count=0
failed_count=0
total_count=0

# Process each branch
for branch in $branches; do
    total_count=$((total_count + 1))
    echo "🔄 Processing $total_count/50: $branch"
    
    if merge_branch "$branch"; then
        success_count=$((success_count + 1))
        echo "✅ Success: $branch"
    else
        failed_count=$((failed_count + 1))
        echo "❌ Failed: $branch"
    fi
    
    echo "---"
    
    # Small delay to prevent overwhelming the system
    sleep 1
done

echo ""
echo "📊 MERGE SUMMARY"
echo "=================="
echo "Total branches processed: $total_count"
echo "Successfully merged: $success_count"
echo "Failed to merge: $failed_count"
echo "Success rate: $(( success_count * 100 / total_count ))%"

# Push changes to remote
echo ""
echo "🚀 Pushing changes to remote..."
if git push origin main; then
    echo "✅ Successfully pushed to remote"
else
    echo "⚠️  Failed to push to remote, but local changes are saved"
fi

echo ""
echo "🎉 Automated branch merging completed!"
echo "💡 Note: This script processed the first 50 branches for safety."
echo "   Run again to process more branches if needed."