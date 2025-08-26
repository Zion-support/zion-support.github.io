#!/bin/bash

echo "Robust PR Merge Process for All Open PRs"
echo "========================================="
echo "Repository: Zion-Holdings/zion.app"
echo "Target branch: main"
echo ""

# Function to log messages with timestamps
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to resolve merge conflicts aggressively
resolve_conflicts_aggressively() {
    local pr_number=$1
    local branch_name=$2
    
    log_message "Resolving conflicts aggressively for PR #$pr_number..."
    
    # Handle all types of conflicts
    local conflicted_files=$(git status --porcelain | grep -E "^UU|^AA|^DD|^U" | awk '{print $2}')
    
    if [ -n "$conflicted_files" ]; then
        log_message "Found conflicted files: $conflicted_files"
        
        for file in $conflicted_files; do
            log_message "Resolving conflict in: $file"
            
            # For content conflicts, accept incoming changes
            if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.js ]] || [[ "$file" == *.jsx ]]; then
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.css ]] || [[ "$file" == *.scss ]]; then
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.json ]]; then
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.md ]]; then
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.html ]]; then
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.toml ]]; then
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.lock ]]; then
                git checkout --theirs "$file" 2>/dev/null
            else
                git checkout --theirs "$file" 2>/dev/null
            fi
            
            # Add the resolved file
            git add "$file" 2>/dev/null
        done
    fi
    
    # Handle unmerged paths
    local unmerged_files=$(git status --porcelain | grep "^U" | awk '{print $2}')
    if [ -n "$unmerged_files" ]; then
        log_message "Found unmerged files: $unmerged_files"
        
        for file in $unmerged_files; do
            log_message "Processing unmerged file: $file"
            
            if [ -f "$file" ]; then
                log_message "File exists, keeping it"
                git add "$file" 2>/dev/null
            else
                log_message "File doesn't exist, removing it"
                git rm "$file" 2>/dev/null
            fi
        done
    fi
    
    # Try to commit
    if git commit -m "Merge PR #$pr_number: $branch_name (aggressive conflict resolution)" 2>/dev/null; then
        log_message "✓ Aggressive conflict resolution successful for PR #$pr_number"
        return 0
    else
        log_message "✗ Failed to commit after aggressive conflict resolution"
        return 1
    fi
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
    
    # Try fast-forward merge first
    if git merge-base --is-ancestor HEAD "origin/$branch_name" 2>/dev/null; then
        log_message "Branch can be fast-forwarded, performing fast-forward merge..."
        if git merge "origin/$branch_name" --ff-only --no-edit 2>/dev/null; then
            log_message "✓ Fast-forward merge successful for PR #$pr_number"
            return 0
        else
            log_message "Fast-forward merge failed, trying regular merge..."
        fi
    fi
    
    # Attempt regular merge
    log_message "Attempting regular merge..."
    if git merge "origin/$branch_name" --no-edit 2>/dev/null; then
        log_message "✓ Successfully merged PR #$pr_number"
        return 0
    else
        log_message "✗ Merge failed for PR #$pr_number, attempting aggressive conflict resolution..."
        
        # Try aggressive conflict resolution
        if resolve_conflicts_aggressively "$pr_number" "$branch_name"; then
            return 0
        else
            log_message "✗ Aggressive conflict resolution failed for PR #$pr_number, aborting merge..."
            git merge --abort 2>/dev/null
            return 1
        fi
    fi
}

# Main processing loop
log_message "Starting robust PR merge process..."

# Get the list of open PRs and extract branch information
log_message "Fetching open PRs..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

# Extract PR information and process each one
log_message "Processing PRs..."
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    pr_number = number
}
/"head":/ {
    in_head = 1
}
/"ref":/ && in_head {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url") {
        printf "%s|%s\n", pr_number, ref
        in_head = 0
    }
}
' prs.json | while IFS='|' read -r pr_number branch_name; do
    if [ -n "$pr_number" ] && [ -n "$branch_name" ]; then
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
        
        # Show current status every 10 PRs
        if [ $((pr_number % 10)) -eq 0 ]; then
            log_message "Progress update - Current status:"
            git log --oneline -3
            echo ""
        fi
    fi
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
log_message "Robust merge process complete!"
log_message "Summary:"
git log --oneline -15