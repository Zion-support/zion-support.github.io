#!/bin/bash

# Efficient batch merge script for remaining cursor branches
set -e

echo "Starting batch merge of remaining cursor branches..."

# Function to merge a single branch with automatic conflict resolution
merge_branch() {
    local branch=$1
    echo "Processing $branch..."
    
    # Try to merge
    if git merge "$branch" --no-ff -m "Merge $branch" 2>/dev/null; then
        echo "✓ Successfully merged $branch"
        return 0
    else
        echo "⚠ Conflict detected in $branch, resolving automatically..."
        
        # Get list of conflicted files
        conflict_files=$(git status --porcelain | grep "^UU\|^AA\|^DD\|^AU\|^UA" | awk '{print $2}')
        
        if [ -n "$conflict_files" ]; then
            echo "Resolving conflicts in: $conflict_files"
            
            # Resolve conflicts automatically
            for file in $conflict_files; do
                case "$file" in
                    *"package"*|*"yarn.lock"*|*"pnpm"*)
                        echo "Taking incoming version for $file"
                        git checkout --theirs "$file" 2>/dev/null || true
                        ;;
                    *".yarn"*|*"install-state"*)
                        echo "Removing $file"
                        git rm "$file" 2>/dev/null || true
                        ;;
                    *)
                        echo "Taking incoming version for $file"
                        git checkout --theirs "$file" 2>/dev/null || true
                        ;;
                esac
            done
            
            # Add resolved files and commit
            git add .
            if git commit -m "Resolve conflicts for $branch" 2>/dev/null; then
                echo "✓ Successfully resolved conflicts for $branch"
                return 0
            else
                echo "✗ Failed to resolve conflicts for $branch"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            echo "✗ Unknown conflict in $branch"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get list of remaining unmerged branches
echo "Getting remaining unmerged branches..."
remaining_branches=$(git branch -r --no-merged main | grep "cursor/check-fix-push-and-merge-to-main-" | head -30)

successful_merges=0
failed_merges=0
processed=0

echo "Processing remaining branches in batches..."

for branch in $remaining_branches; do
    ((processed++))
    echo ""
    echo "[$processed] $branch"
    
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    # Push every 10 successful merges
    if [ $successful_merges -gt 0 ] && [ $((successful_merges % 10)) -eq 0 ]; then
        echo "Pushing batch of $successful_merges merges..."
        git push origin main
    fi
    
    # Limit to prevent overwhelming
    if [ $processed -ge 25 ]; then
        echo "Processed 25 branches, stopping for safety"
        break
    fi
done

echo ""
echo "=== BATCH MERGE COMPLETED ==="
echo "Processed: $processed"
echo "Successful: $successful_merges"
echo "Failed: $failed_merges"

# Final push
if [ $successful_merges -gt 0 ]; then
    echo "Pushing final changes..."
    git push origin main
fi

echo "✅ Batch merge completed!"