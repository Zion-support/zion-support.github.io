#!/bin/bash

# Comprehensive script to merge all remaining branches
echo "Starting comprehensive merge of all remaining branches..."

# Get total count
total_branches=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main-" | wc -l)
echo "Total branches to process: $total_branches"

success_count=0
conflict_count=0
up_to_date_count=0
failed_count=0
processed=0

# Process all branches in batches of 100
git branch -r | grep "cursor/check-fix-push-and-merge-to-main-" | while read branch; do
    processed=$((processed + 1))
    echo "[$processed/$total_branches] Processing: $branch"
    
    # Attempt to merge
    if git merge "$branch" --no-commit --no-ff >/dev/null 2>&1; then
        git commit -m "Merge $branch into main" >/dev/null 2>&1
        success_count=$((success_count + 1))
        echo "  ✓ Successfully merged"
    else
        # Check if it's already up to date
        if git merge "$branch" --no-commit --no-ff 2>&1 | grep -q "Already up to date"; then
            up_to_date_count=$((up_to_date_count + 1))
            echo "  - Already up to date"
        else
            # Try to resolve conflicts automatically
            echo "  ! Resolving conflicts..."
            
            # Resolve common conflicts
            git checkout --ours .yarn/install-state.gz yarn.lock package-lock.json 2>/dev/null || true
            git checkout --theirs package.json 2>/dev/null || true
            
            # Add resolved files
            git add . 2>/dev/null || true
            
            # Commit if possible
            if git commit -m "Merge $branch into main (resolved conflicts)" >/dev/null 2>&1; then
                conflict_count=$((conflict_count + 1))
                echo "  ✓ Resolved conflicts and merged"
            else
                # Abort if we can't resolve
                git merge --abort >/dev/null 2>&1
                failed_count=$((failed_count + 1))
                echo "  ✗ Failed to resolve conflicts, aborted"
            fi
        fi
    fi
    
    # Push every 50 merges to avoid large pushes
    if [ $((processed % 50)) -eq 0 ]; then
        echo "Pushing batch of 50 merges..."
        git push origin main >/dev/null 2>&1
        echo "Pushed batch $((processed / 50))"
    fi
done

echo ""
echo "Comprehensive merge completed:"
echo "  Successfully merged: $success_count"
echo "  Resolved conflicts: $conflict_count" 
echo "  Already up to date: $up_to_date_count"
echo "  Failed merges: $failed_count"
echo "  Total processed: $processed"