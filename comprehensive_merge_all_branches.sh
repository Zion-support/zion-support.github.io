#!/bin/bash

# Comprehensive Merge Script for All Cursor Branches
# This script will merge all cursor/fix-errors-and-merge-to-main branches into main

set -e

echo "🚀 Starting comprehensive merge of all cursor branches..."

# Get all unmerged cursor branches
BRANCHES=$(git branch -r --no-merged main | grep "cursor/fix-errors-and-merge-to-main" | head -50)

# Counter for tracking progress
count=0
total=$(echo "$BRANCHES" | wc -l)
successful_merges=0
failed_merges=0

echo "📊 Found $total branches to merge (processing first 50 for safety)"

# Create a log file for tracking
LOG_FILE="merge_log_$(date +%Y%m%d_%H%M%S).txt"
echo "Merge started at $(date)" > "$LOG_FILE"

for branch in $BRANCHES; do
    count=$((count + 1))
    echo ""
    echo "🔄 [$count/$total] Processing: $branch"
    
    # Extract branch name without origin/
    branch_name=$(echo "$branch" | sed 's/origin\///')
    
    # Try to merge the branch
    if git merge --no-edit "$branch" 2>/dev/null; then
        echo "✅ Successfully merged: $branch_name"
        successful_merges=$((successful_merges + 1))
        echo "SUCCESS: $branch_name" >> "$LOG_FILE"
        
        # Commit the merge
        git add .
        git commit -m "Merge $branch_name into main" || true
        
    else
        echo "❌ Failed to merge: $branch_name (conflicts or issues)"
        failed_merges=$((failed_merges + 1))
        echo "FAILED: $branch_name" >> "$LOG_FILE"
        
        # Reset to clean state
        git merge --abort 2>/dev/null || true
        git reset --hard HEAD 2>/dev/null || true
    fi
    
    # Safety check - if we've processed too many, break
    if [ $count -ge 50 ]; then
        echo "⚠️  Safety limit reached (50 branches). Stopping here."
        break
    fi
done

echo ""
echo "📈 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "📝 Log saved to: $LOG_FILE"

# Push changes
echo "🚀 Pushing changes to origin..."
git push origin main

echo "🎉 Comprehensive merge completed!"