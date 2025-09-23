#!/bin/bash

#!/bin/bash

set -e

echo "🚀 Starting smart merge conflict resolution for open PRs..."
echo "⏰ Started at: $(date)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=${BATCH_SIZE:-10}
MAX_CONFLICTS_PER_BRANCH=${MAX_CONFLICTS_PER_BRANCH:-10}
LOG_FILE="smart-merge-log-$(date +%Y%m%d-%H%M%S).txt"
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"

log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

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

echo "📋 Fetching PR refs and cursor branches..."
git fetch origin +refs/pull/*/head:refs/remotes/origin/pr/* >/dev/null 2>&1 || true
git fetch --all >/dev/null 2>&1
BRANCHES=$(git for-each-ref --sort=-committerdate --format='%(refname:short)' \
  refs/remotes/origin/pr/ refs/remotes/origin/cursor/ 2>/dev/null | sed 's#^origin/##')

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    log_message "🔧 Resolving conflicts in $file for $branch..."
    if grep -q "<<<<<<< HEAD" "$file"; then
        log_message "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        case "$file" in
            package.json|package-lock.json)
                log_message "📦 Critical file, prefer main version"
                sed -i '/<<<<<<< HEAD/,/=======/d' "$file"; sed -i '/>>>>>>> /d' "$file";;
            next.config.js|tsconfig.json|tailwind.config.js)
                log_message "⚙️  Config file, prefer main version"
                sed -i '/<<<<<<< HEAD/,/=======/d' "$file"; sed -i '/>>>>>>> /d' "$file";;
            *)
                log_message "📝 Removing conflict markers"
                sed -i '/<<<<<<< HEAD/,/=======/d' "$file"; sed -i '/>>>>>>> /d' "$file";;
        esac
        log_message "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

can_merge_branch() {
    local branch="$1"
    git fetch origin "$branch" >/dev/null 2>&1 || return 1
    git diff --quiet main "origin/$branch" && return 1 || return 0
}
# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
    if ! can_merge_branch "$branch"; then
        log_message "⏭️  Skipping $branch (no differences or missing)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 0
    fi
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        log_message "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            log_message "📋 Conflicted files: $CONFLICTED_FILES"
            local conflict_count=0
            for file in $CONFLICTED_FILES; do
                if [ $conflict_count -ge $MAX_CONFLICTS_PER_BRANCH ]; then
                    log_message "⚠️  Too many conflicts in $branch, aborting merge"
                    git merge --abort
                    return 1
                fi
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                    conflict_count=$((conflict_count + 1))
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
            log_message "❌ No conflicted files found, aborting merge"
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

IFS=$'\n' read -d '' -r -a BRANCHES_ARRAY <<< "$BRANCHES"
TOTAL_BRANCHES=${#BRANCHES_ARRAY[@]}

log_message "🔄 Starting processing of $TOTAL_BRANCHES branches (batch size: $BATCH_SIZE)"

for ((i=0; i<TOTAL_BRANCHES && i<BATCH_SIZE; i++)); do
    branch="${BRANCHES_ARRAY[$i]}"
    log_message "📋 Processing $branch ($((i+1))/$TOTAL_BRANCHES)"
    if merge_branch "$branch"; then
        log_message "✅ $branch merged"
    else
        log_message "❌ $branch failed"
    fi
    log_message "📊 Progress: success=$SUCCESSFUL_MERGES failed=$FAILED_MERGES conflicts=$CONFLICT_RESOLUTIONS skipped=$SKIPPED_BRANCHES"
done

log_message "💾 Pushing changes to remote..."
git push origin main

# Summary
echo ""
log_message "🎉 Merge conflict resolution completed!"
log_message "📊 Summary: success=$SUCCESSFUL_MERGES failed=$FAILED_MERGES conflicts=$CONFLICT_RESOLUTIONS skipped=$SKIPPED_BRANCHES"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "⏰ Completed at: $(date)"
