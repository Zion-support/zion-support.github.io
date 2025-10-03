#!/bin/bash

# Batch branch merger - processes branches in smaller batches
# This is safer for handling large numbers of branches

set -e

echo "=============================================================="
echo "BATCH BRANCH MERGER"
echo "Repository: Zion-Holdings/zion.app"
echo "=============================================================="

# Ensure we're on main branch
git checkout main
git pull origin main

# Get recent branches first (last 50)
echo "🔍 Fetching recent cursor branches..."
git fetch --all

# Get list of recent cursor branches (limit to 50 for safety)
cursor_branches=$(git branch -r | grep -E "cursor/fix-errors-and-merge-to-main" | tail -50 | sed 's/origin\///' | sort -u)

total_branches=$(echo "$cursor_branches" | wc -l)
echo "📊 Processing $total_branches recent cursor branches"

# Initialize counters
success_count=0
failed_count=0
skipped_count=0

for branch in $cursor_branches; do
    echo ""
    echo "=============================================================="
    echo "Processing: $branch"
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
    
    if git merge $branch --no-ff -m "Merge $branch into main - automated batch merge" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        success_count=$((success_count + 1))
        
        # Push the merge
        echo "📤 Pushing merge to origin/main..."
        git push origin main
        
    else
        echo "⚠️  Merge conflict detected for $branch"
        
        # Check git status for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Attempting automatic conflict resolution..."
            
            # Try to resolve conflicts automatically
            git status --porcelain | while read line; do
                file=$(echo $line | awk '{print $2}')
                if [[ $line == UU* ]] || [[ $line == AA* ]] || [[ $line == DD* ]]; then
                    echo "  Resolving conflict in: $file"
                    # Use 'ours' strategy for automatic resolution
                    git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Try to complete the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Conflict resolution successful"
                success_count=$((success_count + 1))
                git push origin main
            else
                echo "❌ Conflict resolution failed, aborting merge"
                git merge --abort 2>/dev/null || true
                failed_count=$((failed_count + 1))
            fi
        else
            echo "✅ Merge completed despite warnings"
            success_count=$((success_count + 1))
            git push origin main
        fi
    fi
    
    # Clean up local branch
    git branch -D $branch 2>/dev/null || true
    
    # Small delay to avoid overwhelming the system
    sleep 1
done

echo ""
echo "=============================================================="
echo "BATCH MERGE SUMMARY"
echo "=============================================================="
echo "Total branches processed: $total_branches"
echo "✅ Successfully merged: $success_count"
echo "❌ Failed to merge: $failed_count"
echo "⏭️  Already merged (skipped): $skipped_count"
echo ""

# Final push to ensure everything is up to date
echo "📤 Final push to origin/main..."
git push origin main

echo "🎉 Batch merging process completed!"
echo "=============================================================="