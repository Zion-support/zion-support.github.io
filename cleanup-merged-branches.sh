#!/bin/bash

# Script to clean up branches that are already merged or redundant
echo "🧹 Starting cleanup of merged/redundant branches..."
echo "⏰ Started at: $(date)"

# Ensure we're on main
git checkout main
git pull origin main

# Initialize counters
CLEANED_BRANCHES=0
FAILED_CLEANUPS=0

# Get all cursor branches
BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)

echo "📊 Found $TOTAL_BRANCHES cursor branches to check..."

# Function to check if a branch is redundant
is_branch_redundant() {
    local branch="$1"
    
    # Get the latest commit of the branch
    local branch_commit=$(git rev-parse "origin/$branch" 2>/dev/null)
    if [ -z "$branch_commit" ]; then
        return 1  # Branch doesn't exist
    fi
    
    # Check if this commit is already in main branch history
    if git merge-base --is-ancestor "$branch_commit" main 2>/dev/null; then
        return 0  # Branch is redundant (already in main history)
    fi
    
    return 1  # Branch is not redundant
}

# Function to delete a remote branch
delete_remote_branch() {
    local branch="$1"
    
    echo "🗑️  Deleting redundant branch: $branch"
    
    if git push origin --delete "$branch" 2>/dev/null; then
        CLEANED_BRANCHES=$((CLEANED_BRANCHES + 1))
        echo "✅ Successfully deleted $branch"
        return 0
    else
        FAILED_CLEANUPS=$((FAILED_CLEANUPS + 1))
        echo "❌ Failed to delete $branch"
        return 1
    fi
}

# Process branches
echo "🔄 Starting cleanup process..."
echo "---"

CURRENT=0
for branch in $BRANCHES; do
    CURRENT=$((CURRENT + 1))
    echo "📋 [$CURRENT/$TOTAL_BRANCHES] Checking: $branch"
    
    if is_branch_redundant "$branch"; then
        delete_remote_branch "$branch"
    else
        echo "⏭️  Branch $branch is not redundant, keeping it"
    fi
    
    # Progress update every 100 branches
    if [ $((CURRENT % 100)) -eq 0 ]; then
        echo "📊 Progress: $CLEANED_BRANCHES cleaned, $FAILED_CLEANUPS failed"
        echo "---"
    fi
done

# Clean up local references
echo "🧹 Cleaning up local references..."
git remote prune origin

# Summary
echo ""
echo "🎉 Branch cleanup completed!"
echo "📊 Final Summary:"
echo "   🗑️  Cleaned branches: $CLEANED_BRANCHES"
echo "   ❌ Failed cleanups: $FAILED_CLEANUPS"
echo "   📈 Cleanup rate: $(( (CLEANED_BRANCHES * 100) / (CLEANED_BRANCHES + FAILED_CLEANUPS) ))%"
echo "⏰ Completed at: $(date)"

# Check remaining branches
REMAINING_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | wc -l)
echo "📊 Remaining cursor branches: $REMAINING_BRANCHES"

echo ""
echo "🎯 Branch cleanup operation completed!"