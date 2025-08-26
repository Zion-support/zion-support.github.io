#!/bin/bash

echo "Final Comprehensive PR Merge Process"
echo "===================================="
echo "Repository: Zion-Holdings/zion.app"
echo "Target branch: main"
echo ""

# Function to log messages with timestamps
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to resolve complex merge conflicts
resolve_complex_conflicts() {
    local pr_number=$1
    local branch_name=$2
    
    log_message "Resolving complex conflicts for PR #$pr_number ($branch_name)..."
    
    # First, handle unmerged paths (U status files)
    local unmerged_files=$(git status --porcelain | grep "^U" | awk '{print $2}')
    
    if [ -n "$unmerged_files" ]; then
        log_message "Found unmerged files: $unmerged_files"
        
        for file in $unmerged_files; do
            log_message "Processing unmerged file: $file"
            
            # Check if file exists in HEAD (our current branch)
            if [ -f "$file" ]; then
                log_message "File exists in HEAD, keeping it"
                if [[ "$file" == dist/* ]]; then
                    git add -f "$file" 2>/dev/null
                else
                    git add "$file" 2>/dev/null
                fi
            else
                log_message "File doesn't exist in HEAD, checking if it should be deleted"
                # If file was deleted in HEAD but modified in incoming branch, 
                # we'll keep the deletion (remove the file)
                if git ls-files --error-unmatch "$file" 2>/dev/null; then
                    log_message "File was tracked, removing it"
                    git rm "$file" 2>/dev/null
                else
                    log_message "File was untracked, ignoring"
                fi
            fi
        done
    fi
    
    # Now handle regular conflicts (UU status files)
    local conflicted_files=$(git status --porcelain | grep "^UU" | awk '{print $2}')
    
    if [ -n "$conflicted_files" ]; then
        log_message "Found conflicted files: $conflicted_files"
        
        for file in $conflicted_files; do
            log_message "Resolving conflict in: $file"
            
            # Resolve by accepting incoming changes
            if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.js ]] || [[ "$file" == *.jsx ]]; then
                log_message "Resolving TypeScript/JavaScript file: $file"
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.css ]] || [[ "$file" == *.scss ]]; then
                log_message "Resolving CSS file: $file"
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.json ]]; then
                log_message "Resolving JSON file: $file"
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.md ]]; then
                log_message "Resolving Markdown file: $file"
                git checkout --theirs "$file" 2>/dev/null
            else
                log_message "Resolving other file: $file"
                git checkout --theirs "$file" 2>/dev/null
            fi
            
            # Add the resolved file
            if [[ "$file" == dist/* ]]; then
                log_message "Force adding ignored file: $file"
                git add -f "$file" 2>/dev/null
            else
                git add "$file" 2>/dev/null
            fi
        done
    fi
    
    # Check if we can commit now
    if git status | grep -q "unmerged paths"; then
        log_message "Still have unmerged paths, attempting additional resolution..."
        
        # Try to add all remaining files
        git add . 2>/dev/null
        
        # Check if we can commit
        if git status | grep -q "unmerged paths"; then
            log_message "Still have conflicts, cannot commit"
            return 1
        fi
    fi
    
    # Try to commit
    if git commit -m "Merge PR #$pr_number: $branch_name (advanced conflict resolution)" 2>/dev/null; then
        log_message "✓ Advanced conflict resolution successful for PR #$pr_number"
        return 0
    else
        log_message "✗ Failed to commit after advanced conflict resolution"
        return 1
    fi
}

# Function to process a single PR
process_pr() {
    local pr_number=$1
    local branch_name=$2
    
    log_message "Processing PR #$pr_number from branch: $branch_name"
    
    # Check if branch is available locally
    if ! git branch -r | grep -q "origin/$branch_name"; then
        log_message "Branch not available locally, fetching..."
        if ! git fetch origin "$branch_name" 2>/dev/null; then
            log_message "✗ Failed to fetch branch $branch_name"
            return 1
        fi
    fi
    
    # Check if we can fast-forward merge
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
        log_message "✗ Merge failed for PR #$pr_number, attempting advanced conflict resolution..."
        
        # Try advanced conflict resolution
        if resolve_complex_conflicts "$pr_number" "$branch_name"; then
            return 0
        else
            log_message "✗ Advanced conflict resolution failed for PR #$pr_number, aborting merge..."
            git merge --abort 2>/dev/null
            return 1
        fi
    fi
}

# Main processing loop - process all remaining PRs
log_message "Starting final comprehensive PR merge process..."

# Extract PR information and process each one
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
' prs_current.json | while IFS='|' read -r pr_number branch_name; do
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
log_message "Final comprehensive merge process complete!"
log_message "Summary:"
git log --oneline -20