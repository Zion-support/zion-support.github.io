#!/bin/bash

<<<<<<< HEAD
# Smart script to merge only PRs with actual differences
set -e

echo "🚀 Starting smart PR merge process..."
echo "📊 Total cursor branches available: $(git branch -r | grep "origin/cursor/" | wc -l)"
=======
# Smart script to resolve merge conflicts and merge all open PRs into main
# Processes branches in batches for better control and progress tracking
set -e

echo "🚀 Starting smart merge conflict resolution for all open PRs..."
echo "📊 Total cursor branches to process: $(git branch -r | grep "origin/cursor/" | wc -l)"
>>>>>>> origin/auto/autonomy-17186719616
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
<<<<<<< HEAD
BATCH_SIZE=50
LOG_FILE="smart-merge-log-$(date +%Y%m%d-%H%M%S).txt"
BACKUP_BRANCH="smart-merge-backup-$(date +%Y%m%d-%H%M%S)"

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

# Create backup branch
log_message "🔒 Creating backup branch: $BACKUP_BRANCH"
=======
BATCH_SIZE=10
MAX_CONFLICTS_PER_BRANCH=10
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"

# Create a backup branch
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
>>>>>>> origin/auto/autonomy-17186719616
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

<<<<<<< HEAD
# Function to check if a branch has differences
has_differences() {
    local branch="$1"
    
    # Fetch the branch
    git fetch origin "$branch" >/dev/null 2>&1
    
    # Check if there are differences
    if git diff --quiet main "origin/$branch"; then
        return 1  # No differences
    else
        return 0  # Has differences
    fi
}
=======
# Get all cursor branches, sorted by most recent first
echo "📋 Fetching all cursor branches..."
git fetch --all
BRANCHES=$(git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | sed 's/origin\///')
>>>>>>> origin/auto/autonomy-17186719616

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
<<<<<<< HEAD
    log_message "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        log_message "⚠️  Found conflicts in $file, resolving..."
=======
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
>>>>>>> origin/auto/autonomy-17186719616
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
<<<<<<< HEAD
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
=======
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
            # For package files, we'll need special handling
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "README.md" || "$file" == "LICENSE" ]]; then
            echo "📚 Documentation file, keeping both versions where possible..."
            # Remove conflict markers but try to preserve content
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            # Remove conflict markers and try to keep both versions
>>>>>>> origin/auto/autonomy-17186719616
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
<<<<<<< HEAD
        log_message "✅ Resolved conflicts in $file"
=======
        echo "✅ Resolved conflicts in $file"
>>>>>>> origin/auto/autonomy-17186719616
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

<<<<<<< HEAD
=======
# Function to check if a branch can be merged
can_merge_branch() {
    local branch="$1"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        return 1
    fi
    
    # Skip if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        return 1
    fi
    
    return 0
}

>>>>>>> origin/auto/autonomy-17186719616
# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
<<<<<<< HEAD
    log_message "🔄 Attempting to merge $branch..."
    
    # Check if branch has differences
    if ! has_differences "$branch"; then
        log_message "⏭️  Branch $branch has no differences, skipping..."
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 0
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
=======
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
>>>>>>> origin/auto/autonomy-17186719616
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
<<<<<<< HEAD
        log_message "⚠️  Merge conflicts detected in $branch, resolving..."
=======
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
>>>>>>> origin/auto/autonomy-17186719616
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
<<<<<<< HEAD
            log_message "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
=======
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Limit the number of conflicts we'll try to resolve per branch
            local conflict_count=0
            for file in $CONFLICTED_FILES; do
                if [ $conflict_count -ge $MAX_CONFLICTS_PER_BRANCH ]; then
                    echo "⚠️  Too many conflicts in $branch, skipping..."
                    git merge --abort
                    return 1
                fi
                
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                    conflict_count=$((conflict_count + 1))
>>>>>>> origin/auto/autonomy-17186719616
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            
<<<<<<< HEAD
            log_message "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            log_message "❌ No conflicted files found, but merge failed. Aborting..."
=======
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
>>>>>>> origin/auto/autonomy-17186719616
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

<<<<<<< HEAD
# Get list of cursor branches
log_message "📋 Getting list of cursor branches..."
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)

# Process branches in batches
log_message "🔄 Starting batch processing..."
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
    if [ $((SUCCESSFUL_MERGES % 20)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        log_message "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Check if we've processed enough for this session
    if [ $TOTAL_PROCESSED -ge $BATCH_SIZE ]; then
        log_message "🎯 Reached batch size limit ($BATCH_SIZE). Stopping for this session."
        break
    fi
done

# Final push
log_message "💾 Pushing final changes to remote..."
=======
# Function to process a batch of branches
process_batch() {
    local batch_start=$1
    local batch_end=$2
    local batch_branches=("${@:3}")
    
    echo "🔄 Processing batch $batch_start-$batch_end of $(echo "$BRANCHES" | wc -l | tr -d ' ')"
    echo "---"
    
    for branch in "${batch_branches[@]}"; do
        TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
        echo "📋 Processing branch $TOTAL_PROCESSED: $branch"
        
        # Check if branch can be merged
        if ! can_merge_branch "$branch"; then
            echo "⏭️  Skipping $branch (already merged or doesn't exist)"
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
            continue
        fi
        
        # Try to merge the branch
        if merge_branch "$branch"; then
            echo "✅ Branch $branch processed successfully"
        else
            echo "❌ Failed to process branch $branch"
        fi
        
        # Progress update
        echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_BRANCHES skipped"
        echo "---"
        
        # Push changes every 10 successful merges to avoid losing work
        if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
            echo "💾 Pushing progress to remote..."
            git push origin main
        fi
    done
}

# Main processing loop
echo "🔄 Starting batch processing..."
echo "---"

# Convert branches string to array
IFS=$'\n' read -d '' -r -a BRANCHES_ARRAY <<< "$BRANCHES"
TOTAL_BRANCHES=${#BRANCHES_ARRAY[@]}

# Process branches in batches
for ((i=0; i<TOTAL_BRANCHES; i+=BATCH_SIZE)); do
    batch_start=$((i + 1))
    batch_end=$((i + BATCH_SIZE))
    if [ $batch_end -gt $TOTAL_BRANCHES ]; then
        batch_end=$TOTAL_BRANCHES
    fi
    
    # Extract batch of branches
    batch_branches=("${BRANCHES_ARRAY[@]:i:BATCH_SIZE}")
    
    echo "🚀 Starting batch $batch_start-$batch_end of $TOTAL_BRANCHES"
    echo "📊 Batch contains ${#batch_branches[@]} branches"
    echo "---"
    
    # Process this batch
    process_batch "$batch_start" "$batch_end" "${batch_branches[@]}"
    
    # Push after each batch
    echo "💾 Pushing batch results to remote..."
    git push origin main
    
    echo "✅ Completed batch $batch_start-$batch_end"
    echo "---"
    
    # Progress summary
    echo "📊 Overall Progress: $TOTAL_PROCESSED/$TOTAL_BRANCHES branches processed"
    echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
    echo "   ❌ Failed merges: $FAILED_MERGES"
    echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
    echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
    echo "---"
done

# Final push
echo "💾 Pushing final changes to remote..."
>>>>>>> origin/auto/autonomy-17186719616
git push origin main

# Summary
echo ""
<<<<<<< HEAD
log_message "🎉 Smart merge process completed for this session!"
log_message "📊 Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   📋 Total processed: $TOTAL_PROCESSED"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "⏰ Completed at: $(date)"

# Cleanup recommendations
log_message ""
log_message "🧹 Cleanup recommendations:"
log_message "   1. Review the merged changes: git log --oneline -20"
log_message "   2. Test the application thoroughly"
log_message "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
log_message "   4. Run this script again to process more branches"
=======
echo "🎉 Smart merge conflict resolution completed!"
echo "📊 Final Summary:"
echo "   📋 Total branches processed: $TOTAL_PROCESSED"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Consider cleaning up old feature branches"
echo "   5. Run tests to ensure everything works correctly"
>>>>>>> origin/auto/autonomy-17186719616
