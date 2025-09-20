#!/bin/bash

# Incremental script to merge PRs in batches for safer processing
set -e

echo "🚀 Starting incremental merge conflict resolution for open PRs..."
echo "📊 Total cursor branches to process: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=10
MAX_FAILURES=5
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"

# Create a backup branch
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
CURRENT_BATCH=0

# Get all cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"

    echo "🔧 Resolving conflicts in $file for branch $branch..."

    # Detect git conflict markers
    if grep -q "<<<<<<< " "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."

        # Backup conflicted file
        cp "$file" "${file}.backup.$(date +%s)"

        # Prefer main for critical files; otherwise strip markers keeping 'theirs'
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 package file detected, preferring main version"
            git checkout --ours -- "$file" || true
            git add "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" ]]; then
            echo "⚙️  config file detected, preferring main version"
            git checkout --ours -- "$file" || true
            git add "$file"
        else
            echo "📝 regular file, preferring incoming changes"
            git checkout --theirs -- "$file" || true
            git add "$file"
        fi

        echo "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

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

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
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
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Function to process a batch of branches
process_batch() {
    local batch_start=$1
    local batch_end=$2
    
    echo "📦 Processing batch $CURRENT_BATCH (branches $batch_start to $batch_end)..."
    echo "---"
    
    local batch_success=0
    local batch_failures=0
    
    # Convert branches to array and process the batch
    local branch_array=($BRANCHES)
    local total_branches=${#branch_array[@]}
    
    for ((i=batch_start; i<batch_end && i<total_branches; i++)); do
        local branch="${branch_array[$i]}"
        echo "📋 Processing branch $((i+1))/$total_branches: $branch"
        
        # Check if branch can be merged
        if ! can_merge_branch "$branch"; then
            echo "⏭️  Skipping $branch (already merged or doesn't exist)"
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
            continue
        fi
        
        # Try to merge the branch
        if merge_branch "$branch"; then
            echo "✅ Branch $branch processed successfully"
            batch_success=$((batch_success + 1))
        else
            echo "❌ Failed to process branch $branch"
            batch_failures=$((batch_failures + 1))
            
            # Check if we've hit the failure limit
            if [ $batch_failures -ge $MAX_FAILURES ]; then
                echo "⚠️  Too many failures in this batch, stopping batch processing"
                break
            fi
        fi
        
        # Progress update
        echo "📊 Batch progress: $batch_success successful, $batch_failures failed"
        echo "📊 Overall progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
        echo "---"
    done
    
    # Sync and push changes after each batch
    echo "🔄 Syncing with origin/main before push..."
    git pull --rebase origin main || true
    echo "💾 Pushing batch changes to remote..."
    git push origin main || true
    
    echo "✅ Batch $CURRENT_BATCH completed: $batch_success successful, $batch_failures failed"
    echo "---"
    
    return $batch_failures
}

# Main processing loop
echo "🔄 Starting batch processing..."
echo "📊 Batch size: $BATCH_SIZE, Max failures per batch: $MAX_FAILURES"
echo "---"

# Calculate total batches
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)
TOTAL_BATCHES=$(( (TOTAL_BRANCHES + BATCH_SIZE - 1) / BATCH_SIZE ))

echo "📊 Total branches: $TOTAL_BRANCHES, Total batches: $TOTAL_BATCHES"
echo "---"

    # Process branches in batches
    for ((batch_start=0; batch_start<TOTAL_BRANCHES; batch_start+=BATCH_SIZE)); do
        CURRENT_BATCH=$((CURRENT_BATCH + 1))
        batch_end=$((batch_start + BATCH_SIZE))
    
    echo "🚀 Starting batch $CURRENT_BATCH/$TOTAL_BATCHES"
    
    if process_batch $batch_start $batch_end; then
        echo "✅ Batch $CURRENT_BATCH completed successfully"
    else
        echo "⚠️  Batch $CURRENT_BATCH had issues, but continuing..."
    fi
    
    # Ask user if they want to continue to next batch
    if [ $CURRENT_BATCH -lt $TOTAL_BATCHES ]; then
        echo ""
        read -p "Continue to next batch? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "⏸️  Pausing batch processing. You can resume later."
            break
        fi
    fi
    
    echo "---"
done

# Summary
echo ""
echo "🎉 Incremental merge conflict resolution completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   📦 Batches processed: $CURRENT_BATCH"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Consider cleaning up old feature branches"
echo "   5. Run the script again to process remaining branches if needed"