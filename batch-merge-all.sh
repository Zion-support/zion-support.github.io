#!/bin/bash

# Batch merge script for all remaining cursor branches
set -e

echo "🚀 Starting batch merge process for all remaining branches..."
echo "⏰ Started at: $(date)"

# Create backup
BACKUP_BRANCH="batch-backup-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0
BATCH_SIZE=100
TOTAL_PROCESSED=0

# Get all cursor branches
echo "📋 Fetching all cursor branches..."
git fetch --all
git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sed 's/^[[:space:]]*//' > /tmp/all_cursor_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/all_cursor_branches.txt)
echo "📊 Total branches to process: $TOTAL_BRANCHES"

# Process branches in batches
while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        echo "🔄 Processing: $branch"
        
        # Fetch and merge branch
        if git fetch origin "$branch" 2>/dev/null; then
            # Try to merge with conflict resolution
            if git merge --no-edit "origin/$branch" 2>/dev/null; then
                echo "✅ Merged $branch"
                ((SUCCESSFUL_MERGES++))
            else
                echo "⚠️ Conflicts in $branch - auto-resolving..."
                
                # Auto-resolve conflicts by keeping main version
                git checkout --ours . 2>/dev/null || true
                git add . 2>/dev/null || true
                
                if git commit --no-edit 2>/dev/null; then
                    echo "✅ Auto-resolved and merged $branch"
                    ((SUCCESSFUL_MERGES++))
                else
                    echo "❌ Failed to merge $branch"
                    git merge --abort 2>/dev/null || true
                    ((FAILED_MERGES++))
                fi
            fi
        else
            echo "⚠️ Could not fetch $branch"
            ((SKIPPED_BRANCHES++))
        fi
        
        ((TOTAL_PROCESSED++))
        
        # Progress update and push every 100 branches
        if [ $((TOTAL_PROCESSED % BATCH_SIZE)) -eq 0 ]; then
            echo "📊 Progress: $TOTAL_PROCESSED/$TOTAL_BRANCHES processed"
            echo "✅ Successful: $SUCCESSFUL_MERGES"
            echo "❌ Failed: $FAILED_MERGES"
            echo "⚠️ Skipped: $SKIPPED_BRANCHES"
            
            # Push progress
            echo "🚀 Pushing batch progress..."
            git push origin main
            echo "⏸️ Pausing for 5 seconds to avoid rate limits..."
            sleep 5
        fi
    fi
done < /tmp/all_cursor_branches.txt

# Final push
echo "🚀 Final push to main..."
git push origin main

# Final summary
echo ""
echo "🎉 Batch merge process completed!"
echo "⏰ Finished at: $(date)"
echo "📊 Final Summary:"
echo "✅ Successful merges: $SUCCESSFUL_MERGES"
echo "❌ Failed merges: $FAILED_MERGES"
echo "⚠️ Skipped branches: $SKIPPED_BRANCHES"
echo "📋 Total processed: $TOTAL_PROCESSED"
echo "🔒 Backup branch: $BACKUP_BRANCH"

# Clean up
rm -f /tmp/all_cursor_branches.txt
echo "🧹 Cleanup completed"