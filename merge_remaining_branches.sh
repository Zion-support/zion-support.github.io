#!/bin/bash

# Script to merge remaining unmerged branches
set -e

echo "Starting merge of remaining unmerged branches..."

# Function to merge a single branch with conflict resolution
merge_branch() {
    local branch=$1
    echo "Attempting to merge $branch..."
    
    # Try to merge
    if git merge "$branch" --no-ff -m "Merge $branch" 2>/dev/null; then
        echo "✓ Successfully merged $branch"
        return 0
    else
        echo "⚠ Conflict detected in $branch, attempting to resolve..."
        
        # Check what files have conflicts
        conflict_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
        
        if [ -n "$conflict_files" ]; then
            echo "Resolving conflicts in: $conflict_files"
            
            # For package files, prefer the incoming version
            for file in $conflict_files; do
                if [[ "$file" == *"package"* ]] || [[ "$file" == *"yarn.lock"* ]]; then
                    echo "Taking incoming version for $file"
                    git checkout --theirs "$file" 2>/dev/null || true
                else
                    echo "Taking incoming version for $file"
                    git checkout --theirs "$file" 2>/dev/null || true
                fi
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

# Get list of unmerged branches
echo "Getting list of unmerged branches..."
unmerged_branches=$(git branch -r --no-merged main | grep "cursor/check-fix-push-and-merge-to-main-" | head -20)

successful_merges=0
failed_merges=0
processed=0

echo "Processing unmerged branches..."

for branch in $unmerged_branches; do
    ((processed++))
    echo ""
    echo "[$processed] Processing $branch"
    
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    # Commit every 5 successful merges
    if [ $successful_merges -gt 0 ] && [ $((successful_merges % 5)) -eq 0 ]; then
        echo "Committing batch of $successful_merges merges..."
        git push origin main
    fi
    
    # Limit to prevent overwhelming
    if [ $processed -ge 15 ]; then
        echo "Processed 15 branches, stopping for safety"
        break
    fi
done

echo ""
echo "=== MERGE PROCESS COMPLETED ==="
echo "Processed: $processed"
echo "Successful: $successful_merges"
echo "Failed: $failed_merges"

# Final push
if [ $successful_merges -gt 0 ]; then
    echo "Pushing final changes..."
    git push origin main
fi

echo "✅ Merge process completed!"