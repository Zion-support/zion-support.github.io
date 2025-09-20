#!/bin/bash

# Simple script to merge all cursor branches efficiently
set -e

echo "🚀 Starting simple merge process for all cursor branches..."
echo "⏰ Started at: $(date)"

# Create backup
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0

# Get all cursor branches (clean format)
git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sed 's/^[[:space:]]*//' > /tmp/clean_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/clean_branches.txt)
echo "📊 Total branches to process: $TOTAL_BRANCHES"

# Process branches
while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        echo "🔄 Processing: $branch"
        
        # Fetch branch
        if git fetch origin "$branch" 2>/dev/null; then
            # Try to merge
            if git merge --no-edit "origin/$branch" 2>/dev/null; then
                echo "✅ Successfully merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            else
                echo "⚠️ Merge failed for $branch (conflicts or already merged)"
                git merge --abort 2>/dev/null || true
                FAILED_MERGES=$((FAILED_MERGES + 1))
            fi
        else
            echo "⚠️ Failed to fetch $branch"
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        fi
        
        # Progress update every 100 merges
        if [ $((SUCCESSFUL_MERGES % 100)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
            echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $SKIPPED_BRANCHES skipped"
            echo "💾 Pushing progress..."
            git push origin main
        fi
    fi
done < /tmp/clean_branches.txt

# Final push
echo "💾 Pushing final changes..."
git push origin main

# Cleanup
rm -f /tmp/clean_branches.txt

# Summary
echo ""
echo "🎉 Merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   ⏭️ Skipped branches: $SKIPPED_BRANCHES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"