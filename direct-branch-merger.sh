#!/bin/bash

# Direct Branch Merger - Merge specific branches directly
# This script attempts to merge specific branches that are known to exist

set -e

echo "🚀 Starting Direct Branch Merger..."
echo "⏰ Started at: $(date)"
echo "=================================================="

# Configuration
LOG_FILE="direct-merge-$(date +%Y%m%d-%H%M%S).log"
MAX_BRANCHES=10

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0

# Logging function
log_message() {
    local message="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $message" | tee -a "$LOG_FILE"
}

# Function to resolve conflicts
resolve_conflicts() {
    local file="$1"
    
    log_message "🔧 Resolving conflicts in $file..."
    
    # Strategy: Keep main version for critical files
    if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "netlify.toml" ]]; then
        git checkout --ours "$file"
    elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
        git checkout --ours "$file"
    elif [[ "$file" == *.tsx || "$file" == *.ts || "$file" == *.jsx || "$file" == *.js ]]; then
        # Try to merge component files
        sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file" 2>/dev/null || true
        sed -i '/^>>>>>>> /d' "$file" 2>/dev/null || true
        if [[ ! -s "$file" ]]; then
            git checkout --ours "$file"
        fi
    else
        git checkout --ours "$file"
    fi
    
    git add "$file"
}

# Function to process a single branch
process_branch() {
    local branch="$1"
    local branch_name=$(basename "$branch")
    
    log_message "🔄 Processing branch: $branch_name"
    
    # Create local branch from remote
    if git checkout -b "merge-$branch_name" "$branch" 2>/dev/null; then
        log_message "✅ Successfully checked out $branch_name"
    else
        log_message "❌ Failed to checkout $branch_name"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 1
    fi
    
    # Try to merge main
    if git merge main --no-commit 2>/dev/null; then
        log_message "✅ No conflicts in $branch_name"
        git commit -m "Merge main into $branch_name - no conflicts" || true
    else
        log_message "⚠️  Conflicts in $branch_name, resolving..."
        
        # Get conflicted files
        local conflicted_files=$(git status --porcelain | grep "^UU" | cut -c4- || echo "")
        
        if [[ -n "$conflicted_files" ]]; then
            echo "$conflicted_files" | while read -r file; do
                if [[ -n "$file" ]]; then
                    resolve_conflicts "$file"
                fi
            done
            
            # Check if resolved
            if [[ $(git status --porcelain | grep "^UU" | wc -l) -eq 0 ]]; then
                git commit -m "Resolve merge conflicts in $branch_name" || true
                log_message "✅ Conflicts resolved for $branch_name"
            else
                log_message "❌ Could not resolve conflicts in $branch_name"
                git merge --abort
                git checkout main
                git branch -D "merge-$branch_name"
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            log_message "❌ No conflicted files but merge failed"
            git merge --abort
            git checkout main
            git branch -D "merge-$branch_name"
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
    
    # Quick build test
    log_message "🏗️  Testing build for $branch_name..."
    if npm ci --legacy-peer-deps --silent 2>/dev/null && npm run build --silent 2>/dev/null; then
        log_message "✅ Build successful for $branch_name"
    else
        log_message "⚠️  Build failed, attempting quick fix..."
        npm install --legacy-peer-deps --silent 2>/dev/null || true
        
        if npm run build --silent 2>/dev/null; then
            log_message "✅ Build fixed for $branch_name"
            git add . && git commit -m "Fix build issues" || true
        else
            log_message "❌ Build still failing, skipping merge..."
            git checkout main
            git branch -D "merge-$branch_name"
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
    
    # Merge to main
    git checkout main
    if git merge "merge-$branch_name" --no-ff -m "Merge $branch_name into main

- Resolved merge conflicts
- Build verified
- Ready for production"; then
        log_message "✅ Successfully merged $branch_name into main"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        git branch -D "merge-$branch_name"
        return 0
    else
        log_message "❌ Failed to merge $branch_name to main"
        git checkout main
        git branch -D "merge-$branch_name"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
    fi
}

# Main execution
log_message "🔍 Finding branches to merge..."

# Get recent branches that might be mergeable
RECENT_BRANCHES=($(git for-each-ref --sort=-committerdate --format='%(refname)' refs/remotes/origin | grep -E "(cursor|codex)" | head -$MAX_BRANCHES))

log_message "📋 Found ${#RECENT_BRANCHES[@]} branches to process"

# Process branches
for i in "${!RECENT_BRANCHES[@]}"; do
    branch="${RECENT_BRANCHES[$i]}"
    
    if [[ "$branch" == *"HEAD"* ]]; then
        continue
    fi
    
    log_message "🔄 [$((i+1))/${#RECENT_BRANCHES[@]}] Processing: $branch"
    
    if process_branch "$branch"; then
        log_message "✅ Success: $branch"
    else
        log_message "❌ Failed: $branch"
    fi
    
    # Push every few merges
    if [[ $((i % 3)) -eq 0 && $i -gt 0 ]]; then
        log_message "🚀 Pushing changes..."
        git push origin main || log_message "⚠️  Push failed, continuing..."
    fi
done

# Final push
log_message "🚀 Final push..."
git push origin main

# Summary
echo ""
echo "=================================================="
echo "🎉 Direct Branch Merge Complete!"
echo "⏰ Finished at: $(date)"
echo ""
echo "📊 Results:"
echo "  ✅ Successful: $SUCCESSFUL_MERGES"
echo "  ❌ Failed: $FAILED_MERGES"
echo "  ⏭️  Skipped: $SKIPPED_BRANCHES"
echo ""
echo "📝 Log: $LOG_FILE"
echo "=================================================="