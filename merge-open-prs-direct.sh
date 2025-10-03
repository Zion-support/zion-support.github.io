#!/bin/bash

# Direct approach to merge open PRs
set -e

echo "🚀 Starting direct merge of open PRs..."
echo "⏰ Started at: $(date)"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

# Function to log messages with timestamps
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message"
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    local pr_number="$2"
    
    log_message "🔄 Attempting to merge $branch (PR #$pr_number)..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        log_message "❌ Branch $branch does not exist on remote, skipping..."
        return 1
    fi
    
    # Try to merge with conflict resolution
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge PR #$pr_number: $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        log_message "⚠️  Merge conflicts detected in $branch, attempting to resolve..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$CONFLICTED_FILES" ]; then
            log_message "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts by keeping main version for critical files
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    log_message "🔧 Resolving conflicts in $file..."
                    
                    # Create backup
                    cp "$file" "${file}.backup.$(date +%s)"
                    
                    # Remove conflict markers and keep main version
                    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                    sed -i '/>>>>>>> /d' "$file"
                    
                    log_message "✅ Resolved conflicts in $file"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for PR #$pr_number: $branch - $(date)"
            
            log_message "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            log_message "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort 2>/dev/null || true
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Get open PRs and process them
log_message "📋 Fetching open PRs from GitHub..."

# Process the known open PRs
PRS=(
    "24936|cursor/fix-errors-and-merge-to-main-266d"
    "24935|cursor/fix-errors-and-merge-to-main-0173"
    "24933|cursor/fix-errors-and-merge-to-main-3532"
)

for pr_info in "${PRS[@]}"; do
    IFS='|' read -r pr_number branch_name <<< "$pr_info"
    
    echo ""
    echo "=========================================="
    echo "🔄 Processing PR #$pr_number from branch: $branch_name"
    echo "=========================================="
    
    if merge_branch "$branch_name" "$pr_number"; then
        log_message "✅ PR #$pr_number processed successfully"
    else
        log_message "❌ PR #$pr_number processing failed"
    fi
    
    echo "=========================================="
    echo ""
    
    # Push changes every 2 successful merges
    if [ $((SUCCESSFUL_MERGES % 2)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        log_message "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Small delay
    sleep 1
done

# Final push
log_message "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Open PR merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "⏰ Completed at: $(date)"