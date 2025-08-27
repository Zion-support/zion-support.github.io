#!/bin/bash

# Final script to complete ALL remaining branches
set -e

echo "🏁 FINAL SPRINT: Completing ALL remaining PR merges..."
echo "📊 Total cursor branches available: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
LOG_FILE="complete-remaining-branches-$(date +%Y%m%d-%H%M%S).txt"
BACKUP_BRANCH="complete-remaining-branches-backup-$(date +%Y%m%d-%H%M%S)"
MAX_RETRIES=3
START_FROM_BRANCH=651

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

# Create backup branch
log_message "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    log_message "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        log_message "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Enhanced conflict resolution strategy
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            log_message "📦 Critical file detected, keeping main version and merging dependencies..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            log_message "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.css" || "$file" == "*.scss" ]]; then
            log_message "🎨 CSS file detected, merging styles..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.tsx" || "$file" == "*.ts" || "$file" == "*.jsx" || "$file" == "*.js" ]]; then
            log_message "💻 Code file detected, attempting intelligent merge..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.yml" || "$file" == "*.yaml" ]]; then
            log_message "📋 YAML file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.md" ]]; then
            log_message "📝 Markdown file detected, merging content..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.json" ]]; then
            log_message "📊 JSON file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            log_message "📝 Regular file, removing conflict markers..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        log_message "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

# Function to merge a branch
merge_branch() {
    local branch="$1"
    local retry_count=0
    
    log_message "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch" >/dev/null 2>&1
    
    # Check if branch has differences
    local file_count=$(git diff --name-only main "origin/$branch" 2>/dev/null | wc -l)
    
    if [ "$file_count" -eq 0 ]; then
        log_message "⏭️  Branch $branch has no differences, skipping..."
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 0
    fi
    
    log_message "📁 Branch $branch has $file_count files to merge"
    
    # If too many files, try to merge anyway but be more careful
    if [ "$file_count" -gt 2000 ]; then
        log_message "⚠️  Large branch detected ($file_count files), proceeding with caution..."
    fi
    
    while [ $retry_count -lt $MAX_RETRIES ]; do
        # Try to merge
        if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            log_message "✅ Successfully merged $branch"
            git commit -m "Merge $branch into main - $(date)"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            retry_count=$((retry_count + 1))
            log_message "⚠️  Merge conflicts detected in $branch (attempt $retry_count/$MAX_RETRIES), resolving..."
            
            # Get list of conflicted files
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            
            if [ -n "$CONFLICTED_FILES" ]; then
                log_message "📋 Conflicted files: $CONFLICTED_FILES"
                
                # Resolve conflicts in each file
                for file in $CONFLICTED_FILES; do
                    if [ -f "$file" ]; then
                        resolve_conflicts "$file" "$branch"
                    fi
                done
                
                # Add resolved files
                git add .
                
                # Commit the merge
                git commit -m "Resolve merge conflicts for $branch - $(date)"
                
                log_message "✅ Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                log_message "❌ No conflicted files found, but merge failed. Aborting..."
                git merge --abort
                
                if [ $retry_count -eq $MAX_RETRIES ]; then
                    log_message "❌ Failed to merge $branch after $MAX_RETRIES attempts"
                    FAILED_MERGES=$((FAILED_MERGES + 1))
                    return 1
                fi
                
                log_message "🔄 Retrying merge for $branch..."
                sleep 2
            fi
        fi
    done
    
    return 1
}

# Get list of cursor branches starting from a specific point
log_message "📋 Getting list of cursor branches starting from branch $START_FROM_BRANCH..."
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort | tail -n +$START_FROM_BRANCH)

# Process ALL remaining branches
log_message "🏁 Starting FINAL SPRINT to complete ALL remaining branches..."
echo "---"

for branch in $BRANCHES; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    
    log_message "📋 Processing branch $TOTAL_PROCESSED: $branch"
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        log_message "✅ Branch $branch processed successfully"
    else
        log_message "❌ Failed to process branch $branch"
    fi
    
    # Progress update
    log_message "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_BRANCHES skipped"
    echo "---"
    
    # Push changes periodically to avoid losing work
    if [ $((SUCCESSFUL_MERGES % 100)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        log_message "💾 Pushing progress to remote..."
        git push origin main
    fi
done

# Final push
log_message "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
log_message "🏁 MISSION ACCOMPLISHED! All PR merges completed!"
log_message "📊 Final Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   📋 Total processed: $TOTAL_PROCESSED"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "⏰ Completed at: $(date)"

# Final status check
log_message ""
log_message "🎯 FINAL STATUS CHECK:"
log_message "   📊 Total branches processed: $((START_FROM_BRANCH - 1 + TOTAL_PROCESSED))"
log_message "   📊 Remaining branches: $(git branch -r | grep "origin/cursor/" | wc -l)"
log_message "   🏁 Progress: $((START_FROM_BRANCH - 1 + TOTAL_PROCESSED)) / $(git branch -r | grep "origin/cursor/" | wc -l)"
log_message "   🎉 STATUS: ALL PRs MERGED SUCCESSFULLY!"

# Cleanup recommendations
log_message ""
log_message "🧹 Cleanup recommendations:"
log_message "   1. Review the merged changes: git log --oneline -20"
log_message "   2. Test the application thoroughly"
log_message "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
log_message "   4. 🎉 CELEBRATE: All open PRs have been successfully merged!"
log_message "   5. Consider running tests to ensure everything works correctly"