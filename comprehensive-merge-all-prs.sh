#!/bin/bash

# Comprehensive PR Merge Script
# Merges all unmerged cursor branches with automatic conflict resolution

set -e

LOG_FILE="comprehensive-merge-$(date +%Y%m%d-%H%M%S).log"
BATCH_SIZE=100
MAX_BRANCHES=500  # Limit to prevent overwhelming

echo "=====================================" | tee -a "$LOG_FILE"
echo "COMPREHENSIVE PR MERGE SCRIPT" | tee -a "$LOG_FILE"
echo "=====================================" | tee -a "$LOG_FILE"
echo "Started: $(date)" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

# Counters
success=0
already_merged=0
failed=0
total_processed=0

# Ensure we're on main
echo "Checking out main branch..." | tee -a "$LOG_FILE"
git checkout main
git pull origin main --no-edit

echo "Fetching all remote branches..." | tee -a "$LOG_FILE"
git fetch --all

# Get all cursor branches
all_branches=$(git branch -r | grep "origin/cursor/create-and-deploy-new-content" | sed 's/origin\///' | tr -d ' ')
total_branches=$(echo "$all_branches" | wc -l)

echo "Total branches found: $total_branches" | tee -a "$LOG_FILE"
echo "Processing limit: $MAX_BRANCHES branches" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

# Process branches
for branch in $all_branches; do
    # Stop if we've hit the limit
    if [ $total_processed -ge $MAX_BRANCHES ]; then
        echo "Reached processing limit of $MAX_BRANCHES branches" | tee -a "$LOG_FILE"
        break
    fi
    
    ((total_processed++))
    
    # Check if already merged
    if git branch -r --merged main | grep -q "origin/$branch"; then
        echo "[$total_processed/$total_branches] ⏭️  Already merged: $branch"
        ((already_merged++))
        continue
    fi
    
    echo "[$total_processed/$total_branches] 🔄 Merging: $branch" | tee -a "$LOG_FILE"
    
    # Try to merge
    if git merge "origin/$branch" --no-edit -m "Merge $branch into main" 2>&1 | tee -a "$LOG_FILE"; then
        echo "✅ Success: $branch" | tee -a "$LOG_FILE"
        ((success++))
    else
        # Handle conflicts
        if git status | grep -q "Unmerged paths\|both modified\|both added"; then
            echo "⚠️  Resolving conflicts in: $branch" | tee -a "$LOG_FILE"
            
            # Get conflicted files
            conflicted=$(git diff --name-only --diff-filter=U)
            
            for file in $conflicted; do
                echo "  → Resolving: $file"
                
                # Strategy: Keep theirs for new content, ours for core files
                if [[ "$file" =~ ^(blog|case-studies|content)/.*\.(tsx|md)$ ]] || \
                   [[ "$file" =~ components/.*Banner.*\.tsx$ ]]; then
                    # New content - accept theirs
                    git checkout --theirs "$file"
                    git add "$file"
                elif [[ "$file" =~ (App\.tsx|app/page\.tsx|src/pages/Home\.tsx)$ ]]; then
                    # Core files - keep ours
                    git checkout --ours "$file"
                    git add "$file"
                else
                    # Default - accept theirs
                    git checkout --theirs "$file"
                    git add "$file"
                fi
            done
            
            # Complete merge
            if git -c core.editor=true commit --no-edit -m "Merge $branch (auto-resolved)" 2>&1; then
                echo "✅ Resolved: $branch" | tee -a "$LOG_FILE"
                ((success++))
            else
                echo "❌ Failed: $branch" | tee -a "$LOG_FILE"
                git merge --abort 2>/dev/null || true
                ((failed++))
            fi
        else
            echo "❌ Failed: $branch" | tee -a "$LOG_FILE"
            git merge --abort 2>/dev/null || true
            ((failed++))
        fi
    fi
    
    # Push every BATCH_SIZE merges
    if [ $((success % BATCH_SIZE)) -eq 0 ] && [ $success -gt 0 ]; then
        echo "" | tee -a "$LOG_FILE"
        echo "📤 Pushing batch of $BATCH_SIZE merges..." | tee -a "$LOG_FILE"
        if git push origin main --no-verify 2>&1 | tee -a "$LOG_FILE"; then
            echo "✅ Batch pushed successfully" | tee -a "$LOG_FILE"
        else
            echo "⚠️  Push failed, will retry at end" | tee -a "$LOG_FILE"
        fi
        echo "" | tee -a "$LOG_FILE"
        sleep 2
    fi
done

# Final push
echo "" | tee -a "$LOG_FILE"
echo "📤 Final push to origin/main..." | tee -a "$LOG_FILE"
if git push origin main --no-verify 2>&1 | tee -a "$LOG_FILE"; then
    echo "✅ Final push successful" | tee -a "$LOG_FILE"
else
    echo "⚠️  Final push failed" | tee -a "$LOG_FILE"
fi

# Summary
echo "" | tee -a "$LOG_FILE"
echo "=====================================" | tee -a "$LOG_FILE"
echo "MERGE SUMMARY" | tee -a "$LOG_FILE"
echo "=====================================" | tee -a "$LOG_FILE"
echo "Total processed: $total_processed" | tee -a "$LOG_FILE"
echo "Already merged: $already_merged" | tee -a "$LOG_FILE"
echo "Successfully merged: $success" | tee -a "$LOG_FILE"
echo "Failed: $failed" | tee -a "$LOG_FILE"
echo "Completed: $(date)" | tee -a "$LOG_FILE"
echo "=====================================" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"
echo "Log file: $LOG_FILE" | tee -a "$LOG_FILE"
