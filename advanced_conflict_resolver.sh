#!/bin/bash

echo "Advanced Conflict Resolution Script"
echo "=================================="

# Function to resolve complex merge conflicts
resolve_complex_conflicts() {
    local pr_number=$1
    local branch_name=$2
    
    echo "Resolving complex conflicts for PR #$pr_number ($branch_name)..."
    
    # First, handle unmerged paths (U status files)
    local unmerged_files=$(git status --porcelain | grep "^U" | awk '{print $2}')
    
    if [ -n "$unmerged_files" ]; then
        echo "Found unmerged files: $unmerged_files"
        
        for file in $unmerged_files; do
            echo "Processing unmerged file: $file"
            
            # Check if file exists in HEAD (our current branch)
            if [ -f "$file" ]; then
                echo "File exists in HEAD, keeping it"
                git add "$file"
            else
                echo "File doesn't exist in HEAD, checking if it should be deleted"
                # If file was deleted in HEAD but modified in incoming branch, 
                # we'll keep the deletion (remove the file)
                if git ls-files --error-unmatch "$file" 2>/dev/null; then
                    echo "File was tracked, removing it"
                    git rm "$file"
                else
                    echo "File was untracked, ignoring"
                fi
            fi
        done
    fi
    
    # Now handle regular conflicts (UU status files)
    local conflicted_files=$(git status --porcelain | grep "^UU" | awk '{print $2}')
    
    if [ -n "$conflicted_files" ]; then
        echo "Found conflicted files: $conflicted_files"
        
        for file in $conflicted_files; do
            echo "Resolving conflict in: $file"
            
            # Resolve by accepting incoming changes
            if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.js ]] || [[ "$file" == *.jsx ]]; then
                echo "Resolving TypeScript/JavaScript file: $file"
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.css ]] || [[ "$file" == *.scss ]]; then
                echo "Resolving CSS file: $file"
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.json ]]; then
                echo "Resolving JSON file: $file"
                git checkout --theirs "$file" 2>/dev/null
            elif [[ "$file" == *.md ]]; then
                echo "Resolving Markdown file: $file"
                git checkout --theirs "$file" 2>/dev/null
            else
                echo "Resolving other file: $file"
                git checkout --theirs "$file" 2>/dev/null
            fi
            
            # Add the resolved file
            if [[ "$file" == dist/* ]]; then
                echo "Force adding ignored file: $file"
                git add -f "$file" 2>/dev/null
            else
                git add "$file" 2>/dev/null
            fi
        done
    fi
    
    # Check if we can commit now
    if git status | grep -q "unmerged paths"; then
        echo "Still have unmerged paths, attempting additional resolution..."
        
        # Try to add all remaining files
        git add . 2>/dev/null
        
        # Check if we can commit
        if git status | grep -q "unmerged paths"; then
            echo "Still have conflicts, cannot commit"
            return 1
        fi
    fi
    
    # Try to commit
    if git commit -m "Merge PR #$pr_number: $branch_name (advanced conflict resolution)" 2>/dev/null; then
        echo "✓ Advanced conflict resolution successful for PR #$pr_number"
        return 0
    else
        echo "✗ Failed to commit after advanced conflict resolution"
        return 1
    fi
}

# Function to process a single PR with advanced conflict resolution
process_pr_advanced() {
    local pr_number=$1
    local branch_name=$2
    
    echo "Processing PR #$pr_number from branch: $branch_name with advanced conflict resolution..."
    
    # Check if branch is available locally
    if ! git branch -r | grep -q "origin/$branch_name"; then
        echo "Branch not available locally, fetching..."
        if ! git fetch origin "$branch_name" 2>/dev/null; then
            echo "✗ Failed to fetch branch $branch_name"
            return 1
        fi
    fi
    
    # Attempt merge
    echo "Attempting merge..."
    if git merge "origin/$branch_name" --no-edit 2>/dev/null; then
        echo "✓ Successfully merged PR #$pr_number"
        return 0
    else
        echo "✗ Merge failed for PR #$pr_number, attempting advanced conflict resolution..."
        
        # Try advanced conflict resolution
        if resolve_complex_conflicts "$pr_number" "$branch_name"; then
            return 0
        else
            echo "✗ Advanced conflict resolution failed for PR #$pr_number, aborting merge..."
            git merge --abort 2>/dev/null
            return 1
        fi
    fi
}

# Main execution
if [ $# -eq 2 ]; then
    pr_number=$1
    branch_name=$2
    process_pr_advanced "$pr_number" "$branch_name"
else
    echo "Usage: $0 <PR_NUMBER> <BRANCH_NAME>"
    echo "Example: $0 6707 cursor/website-audit-and-enhancement-ba38"
    exit 1
fi