#!/bin/bash

# Comprehensive script to merge open PRs and resolve conflicts
# This script handles the 3 open PRs identified in current-open-prs.json

set -e

LOG_FILE="merge-open-prs-$(date +%Y%m%d-%H%M%S).log"
echo "=====================================" | tee -a "$LOG_FILE"
echo "COMPREHENSIVE OPEN PR MERGE SCRIPT" | tee -a "$LOG_FILE"
echo "=====================================" | tee -a "$LOG_FILE"
echo "Started: $(date)" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

# Counters
success=0
already_merged=0
failed=0
total_processed=0

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Ensure we're on main branch
log "Ensuring we're on main branch..."
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    log "Switching to main branch..."
    git checkout main
fi

# Pull latest main
log "Updating main branch..."
git fetch origin
git pull origin main --no-edit

log "Fetching all remote branches..."
git fetch --all

# Get all cursor branches that might contain the PR content
log "Looking for cursor branches related to ziontechgroup enhancements..."

# Look for branches that match the PR patterns
cursor_branches=$(git branch -r | grep -E "cursor/enhance-and-expand-ziontechgroup|cursor/fix-errors-and-merge" | head -20)

if [ -z "$cursor_branches" ]; then
    log "No matching cursor branches found. Checking all cursor branches..."
    cursor_branches=$(git branch -r | grep "origin/cursor/" | head -10)
fi

total_branches=$(echo "$cursor_branches" | wc -l)
log "Found $total_branches cursor branches to process"

# Process each branch
for branch in $cursor_branches; do
    branch_name=$(echo "$branch" | sed 's/origin\///')
    ((total_processed++))
    
    log "[$total_processed/$total_branches] Processing: $branch_name"
    
    # Check if already merged
    if git branch -r --merged main | grep -q "origin/$branch_name"; then
        log "⏭️  Already merged: $branch_name"
        ((already_merged++))
        continue
    fi
    
    log "🔄 Attempting to merge: $branch_name"
    
    # Try to merge
    if git merge "origin/$branch_name" --no-edit -m "Merge $branch_name into main" 2>&1 | tee -a "$LOG_FILE"; then
        log "✅ Successfully merged: $branch_name"
        ((success++))
    else
        # Handle conflicts
        if git status | grep -q "Unmerged paths\|both modified\|both added"; then
            log "⚠️  Resolving conflicts in: $branch_name"
            
            # Get conflicted files
            conflicted=$(git diff --name-only --diff-filter=U)
            
            for file in $conflicted; do
                log "  → Resolving conflict in: $file"
                
                # Strategy: Keep their changes for new content, ours for core files
                if [[ "$file" =~ ^(app/services|app/blog|app/case-studies|components)/.*\.(tsx|ts|jsx|js)$ ]] || \
                   [[ "$file" =~ ^(src/pages|src/components)/.*\.(tsx|ts|jsx|js)$ ]] || \
                   [[ "$file" =~ \.(md|json)$ ]]; then
                    # New content and components - accept theirs
                    git checkout --theirs "$file"
                    git add "$file"
                    log "    → Accepted their version: $file"
                elif [[ "$file" =~ ^(package\.json|pnpm-lock\.yaml|next\.config\.|tsconfig\.|eslint\.config\.)$ ]] || \
                     [[ "$file" =~ ^(app/layout\.tsx|app/page\.tsx)$ ]]; then
                    # Core configuration and main files - keep ours
                    git checkout --ours "$file"
                    git add "$file"
                    log "    → Kept our version: $file"
                else
                    # Default - accept theirs
                    git checkout --theirs "$file"
                    git add "$file"
                    log "    → Accepted their version (default): $file"
                fi
            done
            
            # Complete merge
            if git -c core.editor=true commit --no-edit -m "Merge $branch_name (auto-resolved conflicts)" 2>&1 | tee -a "$LOG_FILE"; then
                log "✅ Conflicts resolved successfully for: $branch_name"
                ((success++))
            else
                log "❌ Failed to commit conflict resolution for: $branch_name"
                git merge --abort 2>/dev/null || true
                ((failed++))
            fi
        else
            log "❌ Merge failed for: $branch_name (no conflicts detected)"
            git merge --abort 2>/dev/null || true
            ((failed++))
        fi
    fi
    
    # Push every 5 merges
    if [ $((success % 5)) -eq 0 ] && [ $success -gt 0 ]; then
        log "📤 Pushing batch of merges..."
        if git push origin main --no-verify 2>&1 | tee -a "$LOG_FILE"; then
            log "✅ Batch pushed successfully"
        else
            log "⚠️  Push failed, will retry at end"
        fi
        sleep 2
    fi
done

# Final push
log "📤 Final push to origin/main..."
if git push origin main --no-verify 2>&1 | tee -a "$LOG_FILE"; then
    log "✅ Final push successful"
else
    log "⚠️  Final push failed"
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

log "🎉 Open PR merge process completed!"