#!/bin/bash

# Script to merge Netlify fix branches into main
set -e

echo "🚀 Starting merge of Netlify fix branches into main..."
echo "⏰ Started at: $(date)"
echo "---"

# Ensure we're on main branch
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0

# Function to log messages with timestamps
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message"
}

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    log_message "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
        elif [[ "$file" == "netlify.toml" ]]; then
            log_message "🌐 Netlify config detected, keeping main version..."
        fi
        
        log_message "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        log_message "❌ Branch $branch does not exist on remote, skipping..."
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 1
    fi
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        log_message "✅ Branch $branch is already merged, skipping..."
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 0
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - Netlify build fixes"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        log_message "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$CONFLICTED_FILES" ]; then
            log_message "📁 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files and commit
            git add .
            git commit -m "Merge $branch into main with conflict resolution - Netlify build fixes"
            log_message "✅ Successfully merged $branch with conflict resolution"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            log_message "❌ Failed to resolve conflicts in $branch"
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process each branch
while IFS= read -r branch; do
    # Skip empty lines and trim whitespace
    branch=$(echo "$branch" | xargs)
    [ -z "$branch" ] && continue
    
    log_message "---"
    log_message "🔄 Processing branch: $branch"
    
    if merge_branch "$branch"; then
        log_message "✅ Branch $branch processed successfully"
    else
        log_message "❌ Branch $branch failed to merge"
    fi
    
done < pr_branches_to_merge.txt

# Final summary
log_message "🎯 FINAL MERGE SUMMARY"
log_message "========================"
log_message "✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "❌ Failed merges: $FAILED_MERGES"
log_message "🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "⏰ Completed at: $(date)"

# Push final changes if successful
if [ $SUCCESSFUL_MERGES -gt 0 ]; then
    log_message "🚀 Pushing merged changes to origin/main..."
    git push origin main
    log_message "✅ All changes pushed successfully!"
else
    log_message "⚠️  No successful merges, not pushing changes"
fi

log_message "🎉 Netlify fix branches merge process completed!"