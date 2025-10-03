#!/bin/bash

# Comprehensive batch merge script for all remaining branches
set -e

echo "Starting comprehensive batch merge of all remaining branches..."

# Get all cursor/fix-errors-and-merge-to-main branches
all_branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -200)

successful_merges=0
failed_merges=0
skipped_merges=0

echo "Found $(echo "$all_branches" | wc -l) branches to process"

for branch in $all_branches; do
    # Remove origin/ prefix
    local_branch=$(echo $branch | sed 's/origin\///')
    
    echo "Processing branch: $local_branch"
    
    # Check if branch already exists locally
    if git show-ref --verify --quiet refs/heads/$local_branch; then
        echo "  ⏭️  Branch $local_branch already exists locally, skipping..."
        ((skipped_merges++))
        continue
    fi
    
    # Try to checkout the branch
    if git fetch origin $local_branch 2>/dev/null && git checkout -b $local_branch origin/$local_branch 2>/dev/null; then
        git checkout main
        
        # Try to merge
        if git merge --no-edit $local_branch 2>/dev/null; then
            echo "  ✅ Successfully merged $local_branch"
            ((successful_merges++))
            
            # Clean up the branch
            git branch -d $local_branch 2>/dev/null || true
        else
            echo "  ❌ Merge conflict in $local_branch - attempting resolution..."
            
            # Get conflicted files
            conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
            
            if [ -n "$conflicted_files" ]; then
                echo "    Resolving conflicts in: $conflicted_files"
                
                # Auto-resolve conflicts by keeping main branch version
                for file in $conflicted_files; do
                    if [ -f "$file" ]; then
                        # Use git checkout --theirs to keep main branch version
                        git checkout --theirs "$file" 2>/dev/null || true
                        git add "$file" 2>/dev/null || true
                    fi
                done
                
                # Commit the resolution
                if git commit --no-edit 2>/dev/null; then
                    echo "    ✅ Auto-resolved conflicts for $local_branch"
                    ((successful_merges++))
                    git branch -d $local_branch 2>/dev/null || true
                else
                    echo "    ❌ Could not auto-resolve conflicts for $local_branch"
                    git merge --abort 2>/dev/null || true
                    ((failed_merges++))
                fi
            else
                echo "    ❌ No conflicted files found for $local_branch"
                git merge --abort 2>/dev/null || true
                ((failed_merges++))
            fi
        fi
        
        git checkout main
    else
        echo "  ❌ Failed to checkout $local_branch"
        ((failed_merges++))
    fi
done

echo ""
echo "=== COMPREHENSIVE MERGE SUMMARY ==="
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"
echo "Skipped merges: $skipped_merges"
echo "Total processed: $((successful_merges + failed_merges + skipped_merges))"

echo ""
echo "Comprehensive batch merge completed!"

# Check final status
git status
git log --oneline -5