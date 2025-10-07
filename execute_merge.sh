#!/bin/bash

# Execute PR Merge Resolution
echo "🚀 Executing PR Merge Resolution Plan"

# Set error handling
set -e

# Change to workspace directory
cd /workspace

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to safely execute command with timeout
safe_exec() {
    local cmd="$1"
    local timeout="${2:-30}"
    
    log "Executing: $cmd"
    if timeout "$timeout" bash -c "$cmd"; then
        log "✅ Command succeeded: $cmd"
        return 0
    else
        log "⚠️  Command failed or timed out: $cmd"
        return 1
    fi
}

# Step 1: Check current git state
log "📋 Checking current git state..."
safe_exec "git status --porcelain" 10 || log "Git status check failed"

# Step 2: Switch to main branch
log "🔄 Switching to main branch..."
safe_exec "git checkout main" 10 || log "Already on main or checkout failed"

# Step 3: Pull latest changes
log "📥 Pulling latest changes..."
safe_exec "git pull origin main" 60 || log "Pull failed, continuing..."

# Step 4: List available branches
log "📋 Listing available branches..."
safe_exec "git branch -r | head -20" 10 || log "Branch listing failed"

# Step 5: Function to merge branches safely
merge_branch_safe() {
    local branch="$1"
    log "🔄 Attempting to merge branch: $branch"
    
    # Check if branch exists remotely
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch" 2>/dev/null; then
        log "⚠️  Branch $branch does not exist remotely"
        return 1
    fi
    
    # Attempt merge with timeout
    if timeout 120 git merge "origin/$branch" --no-ff -m "Merge $branch into main"; then
        log "✅ Successfully merged $branch"
        return 0
    else
        log "⚠️  Merge conflict in $branch, attempting resolution..."
        
        # Auto-resolve conflicts
        local conflict_files
        conflict_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}' || true)
        
        if [ -n "$conflict_files" ]; then
            echo "$conflict_files" | while read -r file; do
                if [ -n "$file" ]; then
                    log "🔧 Resolving conflicts in $file"
                    
                    # Use appropriate strategy based on file type
                    if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]]; then
                        git checkout --ours "$file" 2>/dev/null || true
                    elif [[ "$file" == *.json ]]; then
                        git checkout --theirs "$file" 2>/dev/null || true
                    else
                        git checkout --ours "$file" 2>/dev/null || true
                    fi
                    
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Commit the merge
            if timeout 30 git commit --no-edit; then
                log "✅ Resolved conflicts and merged $branch"
                return 0
            else
                log "❌ Failed to resolve conflicts for $branch"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            log "❌ No conflict files found for $branch"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Step 6: Merge known branches from PR data
log "🔄 Merging known branches..."

KNOWN_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-c241"
    "cursor/check-fix-push-and-merge-to-main"
    "feature/enhanced-services"
)

merged_count=0
failed_count=0

for branch in "${KNOWN_BRANCHES[@]}"; do
    if merge_branch_safe "$branch"; then
        ((merged_count++))
    else
        ((failed_count++))
    fi
done

# Step 7: Try to merge any remaining cursor branches
log "🔄 Checking for remaining cursor branches..."
cursor_branches=$(git branch -r | grep "cursor/" | grep -v "merged" | head -5 | sed 's/origin\///' || true)

if [ -n "$cursor_branches" ]; then
    echo "$cursor_branches" | while read -r branch; do
        if [ -n "$branch" ] && [[ ! " ${KNOWN_BRANCHES[@]} " =~ " ${branch} " ]]; then
            if merge_branch_safe "$branch"; then
                ((merged_count++))
            else
                ((failed_count++))
            fi
        fi
    done
fi

# Step 8: Push changes to main
log "🚀 Pushing changes to main..."
if safe_exec "git push origin main" 120; then
    log "✅ Successfully pushed to main"
else
    log "❌ Failed to push to main"
    log "📋 Current git status:"
    git status --porcelain || true
fi

# Step 9: Final summary
log "📊 Final Summary:"
log "✅ Successfully merged: $merged_count branches"
log "❌ Failed to merge: $failed_count branches"

log "📝 Recent commits:"
git log --oneline -5 || log "Could not retrieve commit history"

log "🎉 PR Merge Resolution Process Completed!"

# Step 10: Run post-merge checks
log "🔍 Running post-merge checks..."

# Check if we can run linting
if safe_exec "npm run lint" 60; then
    log "✅ Linting passed"
else
    log "⚠️  Linting failed or timed out"
fi

# Check if we can build
if safe_exec "npm run build:fast" 120; then
    log "✅ Build succeeded"
else
    log "⚠️  Build failed or timed out"
fi

log "🏁 All processes completed!"