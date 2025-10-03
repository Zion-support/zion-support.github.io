#!/bin/bash

# Final comprehensive merge script
set -e

echo "Starting final comprehensive merge process..."

# Get all branches and process them in batches
all_branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main")

successful_merges=0
failed_merges=0
total_branches=$(echo "$all_branches" | wc -l)

echo "Total branches to process: $total_branches"

# Process branches in smaller batches to avoid issues
batch_size=50
batch_num=1

echo "$all_branches" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    local_branch=$(echo $branch | sed 's/origin\///')
    
    # Process in batches
    if [ $((successful_merges + failed_merges)) -gt $((batch_size * batch_num)) ]; then
        echo "Completed batch $batch_num, pushing changes..."
        git push origin main
        git pull origin main
        ((batch_num++))
    fi
    
    echo "Processing: $local_branch"
    
    # Check if branch exists locally or if we can fetch it
    if git show-ref --verify --quiet refs/heads/$local_branch 2>/dev/null; then
        echo "  ⏭️  Branch exists locally, checking merge status..."
        git checkout main
        
        if git merge --ff-only $local_branch 2>/dev/null; then
            echo "  ✅ Fast-forward merged $local_branch"
            ((successful_merges++))
            git branch -d $local_branch 2>/dev/null || true
        else
            echo "  🔄 Attempting regular merge for $local_branch"
            if git merge --no-edit $local_branch 2>/dev/null; then
                echo "  ✅ Successfully merged $local_branch"
                ((successful_merges++))
                git branch -d $local_branch 2>/dev/null || true
            else
                echo "  ❌ Merge failed for $local_branch"
                git merge --abort 2>/dev/null || true
                ((failed_merges++))
            fi
        fi
    else
        # Try to fetch and checkout the branch
        if git fetch origin $local_branch 2>/dev/null && git checkout -b $local_branch origin/$local_branch 2>/dev/null; then
            git checkout main
            
            if git merge --no-edit $local_branch 2>/dev/null; then
                echo "  ✅ Successfully merged $local_branch"
                ((successful_merges++))
                git branch -d $local_branch 2>/dev/null || true
            else
                echo "  ❌ Merge conflict in $local_branch"
                git merge --abort 2>/dev/null || true
                ((failed_merges++))
            fi
        else
            echo "  ❌ Failed to fetch/checkout $local_branch"
            ((failed_merges++))
        fi
    fi
    
    # Keep track of progress
    current=$((successful_merges + failed_merges))
    echo "Progress: $current/$total_branches branches processed"
done

echo ""
echo "=== FINAL MERGE SUMMARY ==="
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"
echo "Total processed: $((successful_merges + failed_merges))"

# Final cleanup and push
git checkout main
git push origin main

echo "Final merge process completed!"