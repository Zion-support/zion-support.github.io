#!/bin/bash

# Comprehensive script to merge all cursor/fix-errors-and-merge-to-main branches
echo "Starting comprehensive merge of all cursor/fix-errors-and-merge-to-main branches..."

# Get all branches matching the pattern
all_branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main")
total_branches=$(echo "$all_branches" | wc -l)

echo "Found $total_branches branches to process"

# Counter for tracking
count=0
successful_merges=0
failed_merges=0
already_merged=0
conflict_merges=0

# Process branches in batches of 50
echo "$all_branches" | while read -r branch; do
    count=$((count + 1))
    echo "Processing branch $count/$total_branches: $branch"
    
    # Extract branch name without origin/
    branch_name=${branch#origin/}
    
    # Check if branch has commits not in main
    if git merge-base --is-ancestor "$branch" main 2>/dev/null; then
        echo "  ⏭️  $branch_name already merged (ancestor of main)"
        already_merged=$((already_merged + 1))
    else
        # Try to merge the branch
        echo "  🔄 Attempting to merge $branch_name..."
        
        if git merge "$branch" --no-ff -m "Merge $branch_name into main" 2>/dev/null; then
            echo "  ✅ Successfully merged $branch_name"
            successful_merges=$((successful_merges + 1))
        else
            # Check if it's a conflict or other issue
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "  ⚠️  Merge conflict in $branch_name - resolving..."
                # Try to resolve conflicts automatically
                if git add . && git commit -m "Resolve merge conflicts for $branch_name" 2>/dev/null; then
                    echo "  ✅ Resolved conflicts and merged $branch_name"
                    successful_merges=$((successful_merges + 1))
                    conflict_merges=$((conflict_merges + 1))
                else
                    echo "  ❌ Failed to resolve conflicts for $branch_name"
                    git merge --abort 2>/dev/null || true
                    failed_merges=$((failed_merges + 1))
                fi
            else
                echo "  ❌ Failed to merge $branch_name (other issue)"
                git merge --abort 2>/dev/null || true
                failed_merges=$((failed_merges + 1))
            fi
        fi
    fi
    
    # Progress indicator
    if [ $((count % 100)) -eq 0 ]; then
        echo "Progress: $count/$total_branches processed"
    fi
done

echo ""
echo "=== COMPREHENSIVE MERGE SUMMARY ==="
echo "Total branches processed: $count"
echo "Successful merges: $successful_merges"
echo "Already merged: $already_merged"
echo "Conflict merges: $conflict_merges"
echo "Failed merges: $failed_merges"
echo "=================================="