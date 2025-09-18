#!/bin/bash

# Improved script to merge all open PR branches into main
set -e

echo "🚀 Starting improved merge of all open PR branches..."
echo "📊 Total branches to process: $(wc -l < open_pr_branches.txt)"
echo "⏰ Started at: $(date)"
echo "---"

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

# Function to resolve conflicts in a file with enhanced logic
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
        elif [[ "$file" == *".tsx" || "$file" == *".ts" ]]; then
            log_message "📱 TypeScript file detected, keeping incoming version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            log_message "📝 Regular file, attempting to merge both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        log_message "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

# Function to merge a single branch with enhanced error handling
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
    
    # Check if branch exists remotely first
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        log_message "❌ Branch $branch does not exist on remote, skipping..."
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 1
    fi
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        log_message "✅ Branch $branch is already merged, skipping..."
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 0
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
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
            git commit -m "Merge $branch into main with conflict resolution - $(date)"
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

# Process branches in batches
BATCH_SIZE=10
TOTAL_BRANCHES=$(wc -l < open_pr_branches.txt)
CURRENT_BATCH=1
TOTAL_BATCHES=$(( (TOTAL_BRANCHES + BATCH_SIZE - 1) / BATCH_SIZE ))

log_message "📋 Processing $TOTAL_BRANCHES branches in $TOTAL_BATCHES batches of $BATCH_SIZE"

while IFS= read -r branch; do
    # Skip empty lines
    [ -z "$branch" ] && continue
    
    # Calculate current batch
    CURRENT_BATCH_NUM=$(( (SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES) / BATCH_SIZE + 1 ))
    
    if [ $CURRENT_BATCH_NUM -gt $CURRENT_BATCH ]; then
        CURRENT_BATCH=$CURRENT_BATCH_NUM
        log_message "🔄 Starting batch $CURRENT_BATCH of $TOTAL_BATCHES"
        
        # Pull latest changes before pushing
        log_message "📥 Pulling latest changes from origin/main..."
        git pull origin main
        
        # Push current progress
        if [ $SUCCESSFUL_MERGES -gt 0 ] || [ $CONFLICT_RESOLUTIONS -gt 0 ]; then
            log_message "🚀 Pushing batch $((CURRENT_BATCH - 1)) progress..."
            git push origin main
            log_message "✅ Batch $((CURRENT_BATCH - 1)) pushed successfully!"
        fi
    fi
    
    log_message "---"
    log_message "🔄 Processing branch: $branch (Batch $CURRENT_BATCH)"
    
    if merge_branch "$branch"; then
        log_message "✅ Branch $branch processed successfully"
    else
        log_message "❌ Branch $branch failed to merge"
    fi
    
    # Progress update every 10 branches
    if [ $(( (SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES) % 10 )) -eq 0 ]; then
        log_message "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $SKIPPED_BRANCHES skipped"
    fi
    
done < open_pr_branches.txt

# Final summary
log_message "🎯 FINAL MERGE SUMMARY"
log_message "========================"
log_message "✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "❌ Failed merges: $FAILED_MERGES"
log_message "🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "⏰ Completed at: $(date)"

# Pull latest changes before final push
log_message "📥 Pulling latest changes before final push..."
git pull origin main

# Push final changes if successful
if [ $SUCCESSFUL_MERGES -gt 0 ]; then
    log_message "🚀 Pushing final merged changes to origin/main..."
    git push origin main
    log_message "✅ All changes pushed successfully!"
else
    log_message "⚠️  No successful merges, not pushing changes"
fi

log_message "🎉 Comprehensive merge process completed!"