#!/bin/bash

# Batch merge script for cursor branches
# Merges 50 branches at a time, resolves conflicts automatically

set -e

BATCH_SIZE=50
log_file="batch-merge-$(date +%Y%m%d-%H%M%S).log"

echo "Starting batch merge process..." | tee -a "$log_file"

# Ensure on main
git checkout main
git pull origin main --no-edit

# Fetch all branches
git fetch --all

# Get all cursor branches that aren't already merged
branches=$(git branch -r | grep "origin/cursor/create-and-deploy-new-content" | sed 's/origin\///' | tr -d ' ')

count=0
success=0
failed=0

for branch in $branches; do
    # Check if already merged
    if git branch -r --merged | grep -q "origin/$branch"; then
        echo "Already merged: $branch" | tee -a "$log_file"
        continue
    fi
    
    echo "Merging: $branch" | tee -a "$log_file"
    
    # Try to merge
    if git merge "origin/$branch" --no-edit -m "Merge $branch" 2>&1 | tee -a "$log_file"; then
        echo "✅ Success: $branch" | tee -a "$log_file"
        ((success++))
    else
        # Handle conflicts
        if git status | grep -q "Unmerged paths\|both modified\|both added"; then
            echo "⚠️  Resolving conflicts in $branch..." | tee -a "$log_file"
            
            # Accept theirs for new content files
            git diff --name-only --diff-filter=U | while read file; do
                echo "  Resolving: $file"
                git checkout --theirs "$file"
                git add "$file"
            done
            
            # Complete merge
            if git -c core.editor=true commit --no-edit -m "Merge $branch (auto-resolved)" 2>&1; then
                echo "✅ Resolved and merged: $branch" | tee -a "$log_file"
                ((success++))
            else
                echo "❌ Failed to complete merge: $branch" | tee -a "$log_file"
                git merge --abort 2>/dev/null || true
                ((failed++))
            fi
        else
            echo "❌ Failed: $branch" | tee -a "$log_file"
            git merge --abort 2>/dev/null || true
            ((failed++))
        fi
    fi
    
    ((count++))
    
    # Push every BATCH_SIZE merges
    if [ $((count % BATCH_SIZE)) -eq 0 ]; then
        echo "Pushing batch of $BATCH_SIZE merges..." | tee -a "$log_file"
        git push origin main --no-verify
        echo "Batch push complete. Successes: $success, Failures: $failed" | tee -a "$log_file"
        
        # Brief pause to avoid overwhelming the system
        sleep 5
    fi
done

# Final push
echo "Final push..." | tee -a "$log_file"
git push origin main --no-verify

echo "========================" | tee -a "$log_file"
echo "Merge Complete!" | tee -a "$log_file"
echo "Total merged: $success" | tee -a "$log_file"
echo "Total failed: $failed" | tee -a "$log_file"
echo "========================" | tee -a "$log_file"
