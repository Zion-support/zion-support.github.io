#!/bin/bash

# Comprehensive branch merger for cursor/fix-errors-and-merge-to-main branches
# This script will merge all relevant branches into main

set -e

echo "=============================================================="
echo "COMPREHENSIVE BRANCH MERGER"
echo "Repository: Zion-Holdings/zion.app"
echo "=============================================================="

# Ensure we're on main branch
git checkout main
git pull origin main

# Get all cursor branches
echo "🔍 Fetching all cursor branches..."
git fetch --all

# Get list of all cursor branches
cursor_branches=$(git branch -r | grep -E "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | sort -u)

total_branches=$(echo "$cursor_branches" | wc -l)
echo "📊 Found $total_branches cursor branches to process"

# Initialize counters
success_count=0
failed_count=0
skipped_count=0

# Process branches in batches to avoid overwhelming the system
batch_size=10
processed=0

for branch in $cursor_branches; do
    processed=$((processed + 1))
    
    echo ""
    echo "=============================================================="
    echo "Processing branch $processed/$total_branches: $branch"
    echo "=============================================================="
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "📋 Branch exists locally, updating..."
        git checkout $branch
        git pull origin $branch
    else
        echo "📋 Creating local branch from remote..."
        git checkout -b $branch origin/$branch
    fi
    
    # Switch back to main
    git checkout main
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "✅ Branch already merged, skipping..."
        skipped_count=$((skipped_count + 1))
        
        # Clean up local branch
        git branch -D $branch 2>/dev/null || true
        continue
    fi
    
    # Attempt to merge
    echo "🔄 Attempting to merge $branch into main..."
    
    if git merge $branch --no-ff -m "Merge $branch into main - automated merge" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        success_count=$((success_count + 1))
        
        # Push the merge
        echo "📤 Pushing merge to origin/main..."
        git push origin main
        
    else
        echo "⚠️  Merge conflict detected for $branch"
        
        # Check for merge conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts automatically..."
            
            # Use git mergetool or manual resolution
            # For now, we'll abort the merge and continue
            git merge --abort 2>/dev/null || true
            
            echo "❌ Automatic conflict resolution failed, skipping $branch"
            failed_count=$((failed_count + 1))
        else
            echo "✅ Merge completed despite warnings"
            success_count=$((success_count + 1))
            git push origin main
        fi
    fi
    
    # Clean up local branch
    git branch -D $branch 2>/dev/null || true
    
    # Progress update
    if [ $((processed % batch_size)) -eq 0 ]; then
        echo ""
        echo "📊 Progress: $processed/$total_branches processed"
        echo "✅ Successful: $success_count"
        echo "❌ Failed: $failed_count"
        echo "⏭️  Skipped: $skipped_count"
        echo ""
        
        # Small delay to avoid overwhelming the system
        sleep 2
    fi
done

echo ""
echo "=============================================================="
echo "MERGE COMPLETION SUMMARY"
echo "=============================================================="
echo "Total branches processed: $total_branches"
echo "✅ Successfully merged: $success_count"
echo "❌ Failed to merge: $failed_count"
echo "⏭️  Already merged (skipped): $skipped_count"
echo ""
echo "Repository status:"
git status --short
echo ""

# Final push to ensure everything is up to date
echo "📤 Final push to origin/main..."
git push origin main

echo "🎉 Branch merging process completed!"
echo "=============================================================="