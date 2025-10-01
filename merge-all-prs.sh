#!/bin/bash
set -e

echo "=========================================="
echo "PR MASS MERGE AUTOMATION"
echo "=========================================="
echo "Starting at: $(date)"
echo ""

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get all remote branches
BRANCHES=$(git branch -r | grep -E "origin/(cursor|codex)" | sed 's/origin\///' | grep -v HEAD)
TOTAL=$(echo "$BRANCHES" | wc -l)
MERGED=0
CONFLICTS=0
FAILED=0

echo "Total branches to process: $TOTAL"
echo ""

# Create log file
LOG_FILE="merge-log-$(date +%Y%m%d-%H%M%S).txt"
touch "$LOG_FILE"

# Function to try merge
merge_branch() {
    local branch=$1
    local branch_name=$(basename "$branch")
    
    echo "[$((MERGED + CONFLICTS + FAILED + 1))/$TOTAL] Processing: $branch"
    
    # Fetch the branch
    git fetch origin "$branch:$branch" 2>/dev/null || {
        echo "  ✗ Failed to fetch $branch" | tee -a "$LOG_FILE"
        return 1
    }
    
    # Try to merge
    if git merge "$branch" --no-edit -m "Merge $branch into main" 2>&1; then
        echo "  ✓ Merged successfully" | tee -a "$LOG_FILE"
        MERGED=$((MERGED + 1))
        
        # Delete local branch
        git branch -d "$branch" 2>/dev/null || true
        return 0
    else
        # Check if there are conflicts
        if git status | grep -q "Unmerged paths\|both modified"; then
            echo "  ⚠ Merge conflict detected" | tee -a "$LOG_FILE"
            
            # Auto-resolve by accepting incoming changes
            git status --short | grep "^UU\|^AA\|^DD" | awk '{print $2}' | while read file; do
                if [ -f "$file" ]; then
                    # Accept theirs (incoming changes)
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Try to complete the merge
            if git commit --no-edit -m "Merge $branch into main (auto-resolved conflicts)" 2>/dev/null; then
                echo "  ✓ Conflicts auto-resolved and merged" | tee -a "$LOG_FILE"
                CONFLICTS=$((CONFLICTS + 1))
                git branch -d "$branch" 2>/dev/null || true
                return 0
            else
                # Abort if can't resolve
                git merge --abort 2>/dev/null || true
                echo "  ✗ Could not auto-resolve conflicts" | tee -a "$LOG_FILE"
                FAILED=$((FAILED + 1))
                return 1
            fi
        else
            echo "  ✗ Merge failed" | tee -a "$LOG_FILE"
            git merge --abort 2>/dev/null || true
            FAILED=$((FAILED + 1))
            return 1
        fi
    fi
}

# Process branches in batches
BATCH_SIZE=100
BATCH_COUNT=0

for branch in $BRANCHES; do
    merge_branch "$branch" || true
    
    BATCH_COUNT=$((BATCH_COUNT + 1))
    
    # Push every 100 merges
    if [ $((BATCH_COUNT % BATCH_SIZE)) -eq 0 ]; then
        echo ""
        echo "=== Batch $((BATCH_COUNT / BATCH_SIZE)) complete - Pushing to remote ==="
        git push origin main || {
            echo "Push failed, continuing..."
        }
        echo "Progress: Merged=$MERGED, Conflicts=$CONFLICTS, Failed=$FAILED"
        echo ""
    fi
    
    # Brief pause to avoid overwhelming the system
    sleep 0.1
done

# Final push
echo ""
echo "=== Final push to remote ==="
git push origin main || echo "Final push failed"

# Summary
echo ""
echo "=========================================="
echo "MERGE SUMMARY"
echo "=========================================="
echo "Total processed: $TOTAL"
echo "Successfully merged: $MERGED"
echo "Merged with conflicts (auto-resolved): $CONFLICTS"
echo "Failed: $FAILED"
echo "Success rate: $(awk "BEGIN {printf \"%.2f\", (($MERGED + $CONFLICTS) / $TOTAL) * 100}")%"
echo ""
echo "Log file: $LOG_FILE"
echo "Completed at: $(date)"
echo "=========================================="
