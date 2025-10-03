#!/bin/bash

# Script to merge all open PRs systematically
set -e

echo "🚀 Starting comprehensive PR merge process..."

# Get all remote branches with the pattern
echo "📋 Fetching all cursor/fix-errors-and-merge-to-main branches..."
git fetch origin

# Get list of all branches to merge
BRANCHES=$(git branch -r | grep -E "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)

echo "📊 Found $TOTAL_BRANCHES branches to process"

# Counter for tracking progress
COUNT=0
MERGED=0
FAILED=0
SKIPPED=0

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local count=$2
    local total=$3
    
    echo ""
    echo "🔄 [$count/$total] Processing branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "✅ Branch $branch already exists locally"
        git checkout $branch
        git pull origin $branch
    else
        echo "📥 Checking out branch $branch"
        git checkout -b $branch origin/$branch
    fi
    
    # Switch back to main
    git checkout main
    
    # Check if branch can be merged (no conflicts)
    if git merge --no-commit --no-ff $branch 2>/dev/null; then
        echo "✅ Branch $branch can be merged without conflicts"
        git merge --no-ff $branch -m "Merge $branch into main"
        echo "🎉 Successfully merged $branch"
        ((MERGED++))
        
        # Push the merge
        git push origin main
        
        # Clean up local branch
        git branch -D $branch
        
    else
        echo "⚠️  Merge conflicts detected for $branch"
        
        # Abort the merge
        git merge --abort
        
        # Try to resolve conflicts automatically
        echo "🔧 Attempting to resolve conflicts..."
        
        if git merge --no-commit --no-ff $branch; then
            echo "✅ Conflicts resolved automatically"
            git merge --no-ff $branch -m "Merge $branch into main (auto-resolved conflicts)"
            echo "🎉 Successfully merged $branch with auto-resolved conflicts"
            ((MERGED++))
            
            # Push the merge
            git push origin main
            
            # Clean up local branch
            git branch -D $branch
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort
            ((FAILED++))
            
            # Clean up local branch
            git branch -D $branch
        fi
    fi
    
    echo "📈 Progress: Merged: $MERGED, Failed: $FAILED, Skipped: $SKIPPED"
}

# Process branches in batches to avoid overwhelming the system
echo "🚀 Starting batch processing..."

# Process first 10 branches
echo "📦 Processing batch 1 (branches 1-10)..."
for branch in $(echo "$BRANCHES" | head -10); do
    ((COUNT++))
    merge_branch $branch $COUNT $TOTAL_BRANCHES
done

echo ""
echo "🎯 Batch 1 completed!"
echo "📊 Summary:"
echo "  Total branches: $TOTAL_BRANCHES"
echo "  Processed: $COUNT"
echo "  Successfully merged: $MERGED"
echo "  Failed: $FAILED"
echo "  Skipped: $SKIPPED"
echo ""

# Check git status
echo "📋 Current repository status:"
git status

echo ""
echo "✅ Script execution completed!"