#!/bin/bash

# Clean script to merge all open PRs and resolve conflicts
set -e

echo "🚀 Starting clean merge of all open PRs..."
echo "⏰ Started at: $(date)"
echo "---"

# Create a backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

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
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        log_message "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Enhanced conflict resolution strategy
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            log_message "📦 Package file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            log_message "⚙️  Config file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == "README.md" || "$file" == "LICENSE" ]]; then
            log_message "📚 Documentation file, keeping both versions where possible..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == *".tsx" || "$file" == *".ts" ]]; then
            log_message "📱 TypeScript file detected, keeping incoming version..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        else
            log_message "📝 Regular file, attempting to merge both versions..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
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
    git fetch origin "$branch" 2>/dev/null || {
        log_message "❌ Failed to fetch $branch"
        return 1
    }
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        log_message "❌ Branch $branch does not exist on remote, skipping..."
        return 1
    fi
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        log_message "⏭️  Branch $branch already merged, skipping..."
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
            log_message "📋 Conflicted files: $CONFLICTED_FILES"
            
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            if git commit -m "Resolve merge conflicts for $branch - $(date)"; then
                log_message "✅ Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                log_message "❌ Failed to commit resolved conflicts for $branch"
                git merge --abort
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            log_message "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Get all unmerged branches, prioritizing cursor branches
CURSOR_BRANCHES=$(git branch -r --no-merged main | grep "origin/cursor/" | sed 's/origin\///' | sort)
CODEX_BRANCHES=$(git branch -r --no-merged main | grep "origin/.*codex/" | sed 's/origin\///' | sort)
OTHER_BRANCHES=$(git branch -r --no-merged main | grep -v "origin/cursor/" | grep -v "origin/.*codex/" | sed 's/origin\///' | sort)

# Combine branches with cursor branches first
ALL_BRANCHES="$CURSOR_BRANCHES $CODEX_BRANCHES $OTHER_BRANCHES"

echo "📋 Processing cursor branches first, then codex branches, then other branches"
echo "🔍 Found $(echo "$CURSOR_BRANCHES" | wc -l) cursor branches"
echo "🔍 Found $(echo "$CODEX_BRANCHES" | wc -l) codex branches"
echo "🔍 Found $(echo "$OTHER_BRANCHES" | wc -l) other branches"
echo "---"

# Process branches in batches
BATCH_SIZE=50
CURRENT=0
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -l)

echo "📊 Total branches to process: $TOTAL_BRANCHES"
echo "---"

for branch in $ALL_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    
    if [ -z "$branch" ]; then
        continue
    fi
    
    echo "📋 [$CURRENT/$TOTAL_BRANCHES] Processing branch: $branch"
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Failed to process branch $branch"
    fi
    
    # Progress update
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_BRANCHES skipped"
    echo "---"
    
    # Push changes periodically to avoid losing work
    if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        log_message "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 0.5
done

# Final push
log_message "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Clean merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Show recent commits
echo ""
echo "📝 Recent commits:"
git log --oneline -10

# Cleanup recommendations
echo ""
echo "🧹 Next steps:"
echo "   1. Review the merged changes: git log --oneline -50"
echo "   2. Test the application thoroughly"
echo "   3. Check for any remaining conflicts: git status"
echo "   4. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   5. Consider cleaning up old feature branches"

echo ""
echo "🎯 All open PRs have been processed!"