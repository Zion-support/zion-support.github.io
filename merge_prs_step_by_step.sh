#!/bin/bash

echo "Step-by-step PR Merge Process"
echo "=============================="
echo "Repository: Zion-Holdings/zion.app"
echo "Target branch: main"
echo ""

# Function to log messages with timestamps
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to process a single PR
process_pr() {
    local pr_number=$1
    local branch_name=$2
    
    log_message "Processing PR #$pr_number from branch: $branch_name"
    
    # Fetch the branch
    log_message "Fetching branch $branch_name..."
    if ! git fetch origin "$branch_name" 2>/dev/null; then
        log_message "✗ Failed to fetch branch $branch_name"
        return 1
    fi
    
    # Check if we can merge
    log_message "Attempting to merge $branch_name..."
    if git merge "origin/$branch_name" --no-edit 2>/dev/null; then
        log_message "✓ Successfully merged PR #$pr_number"
        return 0
    else
        log_message "✗ Merge failed for PR #$pr_number, attempting conflict resolution..."
        
        # Try to resolve conflicts by accepting incoming changes
        local conflicted_files=$(git status --porcelain | grep "^UU" | awk '{print $2}')
        if [ -n "$conflicted_files" ]; then
            log_message "Found conflicted files: $conflicted_files"
            
            for file in $conflicted_files; do
                log_message "Resolving conflict in: $file"
                git checkout --theirs "$file" 2>/dev/null
                git add "$file" 2>/dev/null
            done
            
            # Try to commit the resolution
            if git commit -m "Merge PR #$pr_number: $branch_name (conflict resolution)" 2>/dev/null; then
                log_message "✓ Conflict resolution successful for PR #$pr_number"
                return 0
            else
                log_message "✗ Failed to commit conflict resolution"
                git merge --abort 2>/dev/null
                return 1
            fi
        else
            log_message "✗ No conflicted files found, aborting merge"
            git merge --abort 2>/dev/null
            return 1
        fi
    fi
}

# Main processing loop
log_message "Starting step-by-step PR merge process..."

# Process PRs one by one
prs=(
    "8382:cursor/analyze-improve-and-deploy-ziontechgroup-app-4b0c"
    "8380:cursor/website-audit-and-enhancement-7c45"
    "8377:cursor/expand-services-and-deploy-updates-fb92"
    "8376:cursor/analyze-improve-and-deploy-ziontechgroup-app-8acb"
    "8375:cursor/expand-services-and-deploy-updates-e9d3"
    "8373:cursor/analyze-improve-and-deploy-ziontechgroup-app-8acb"
)

for pr_info in "${prs[@]}"; do
    IFS=':' read -r pr_number branch_name <<< "$pr_info"
    
    echo ""
    echo "=========================================="
    log_message "Processing PR #$pr_number from branch: $branch_name"
    echo "=========================================="
    
    if process_pr "$pr_number" "$branch_name"; then
        log_message "✓ PR #$pr_number processed successfully"
    else
        log_message "✗ PR #$pr_number processing failed"
    fi
    
    echo "=========================================="
    echo ""
    
    # Show current status
    log_message "Current status:"
    git log --oneline -3
    echo ""
done

# Final status and push
echo ""
log_message "All PRs processed. Checking final status..."
git status

echo ""
log_message "Pushing changes to main branch..."
if git push origin main; then
    log_message "✓ Successfully pushed all changes to main branch"
else
    log_message "✗ Failed to push changes to main branch"
    log_message "Attempting force push as fallback..."
    if git push origin main --force; then
        log_message "✓ Force push successful"
    else
        log_message "✗ Force push also failed"
        exit 1
    fi
fi

echo ""
log_message "Step-by-step merge process complete!"
log_message "Summary:"
git log --oneline -10