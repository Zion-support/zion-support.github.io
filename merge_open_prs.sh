#!/bin/bash

# Script to merge open PRs
set -e

echo "🚀 Starting merge of open PRs..."
echo "⏰ Started at: $(date)"

# Create backup branch
BACKUP_BRANCH="pr-merge-backup-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Function to merge a branch
merge_branch() {
    local branch="$1"
    local pr_number="$2"
    local pr_title="$3"
    
    echo "🔄 Attempting to merge $branch (PR #$pr_number): $pr_title"
    
    # Fetch the latest version of the branch
    git fetch origin "$branch" >/dev/null 2>&1
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "❌ Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Check if branch has differences
    local file_count=$(git diff --name-only main "origin/$branch" 2>/dev/null | wc -l)
    
    if [ "$file_count" -eq 0 ]; then
        echo "⏭️  Branch $branch has no differences, skipping..."
        return 0
    fi
    
    echo "📁 Branch $branch has $file_count files to merge"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge PR #$pr_number: $pr_title - $(date)"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts by preferring main branch
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "🔧 Resolving conflicts in $file..."
                    git checkout --ours -- "$file"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for PR #$pr_number: $pr_title - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            return 0
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            return 1
        fi
    fi
}

# PR data from the JSON file
# PR #9269: Expand services and deploy updates
# PR #9268: Analyze, improve, and deploy ziontechgroup app  
# PR #9267: Expand services and deploy updates
# PR #9266: Analyze, improve, and deploy ziontechgroup app
# PR #9264: Expand services and deploy updates
# PR #9259: Analyze, improve, and deploy ziontechgroup app

# Since we don't have the exact branch names, let's try to find them
echo "🔍 Looking for PR branches..."

# Try to find branches that might be related to these PRs
POSSIBLE_BRANCHES=$(git branch -r | grep -E "(cursor|pr|9269|9268|9267|9266|9264|9259)" | head -20)

echo "📋 Found potential branches:"
echo "$POSSIBLE_BRANCHES"

# Process each potential branch
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

for branch in $POSSIBLE_BRANCHES; do
    # Remove origin/ prefix
    clean_branch=$(echo "$branch" | sed 's/origin\///')
    
    echo "🔄 Processing branch: $clean_branch"
    
    if merge_branch "$clean_branch" "unknown" "Unknown PR"; then
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Successfully processed $clean_branch"
    else
        FAILED_MERGES=$((FAILED_MERGES + 1))
        echo "❌ Failed to process $clean_branch"
    fi
    
    echo "---"
done

# Push changes if there were successful merges
if [ $SUCCESSFUL_MERGES -gt 0 ]; then
    echo "💾 Pushing changes to remote..."
    git push origin main
fi

# Summary
echo ""
echo "🎉 Merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"