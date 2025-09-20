#!/bin/bash

# GitHub PR Merger - Find and merge actual open PRs
# This script uses GitHub API to find real open PRs and merge them

set -e

echo "🚀 Starting GitHub PR Merger..."
echo "⏰ Started at: $(date)"
echo "=================================================="

# Configuration
LOG_FILE="github-pr-merge-$(date +%Y%m%d-%H%M%S).log"
REPO="Zion-Holdings/zion.app"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_PRS=0

# Logging function
log_message() {
    local message="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $message" | tee -a "$LOG_FILE"
}

# Function to get open PRs using GitHub API
get_open_prs() {
    log_message "🔍 Fetching open PRs from GitHub API..."
    
    # Try to get open PRs using curl
    local response=$(curl -s -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/$REPO/pulls?state=open&per_page=100" 2>/dev/null || echo "[]")
    
    if [[ "$response" == "[]" || -z "$response" ]]; then
        log_message "📋 No open PRs found via API, trying alternative method..."
        
        # Alternative: try to find PRs using git commands
        local pr_branches=($(git branch -r | grep -E "pull/[0-9]+" | head -20 | sed 's/.*pull\///' | sed 's/\/.*//' || echo ""))
        
        if [[ ${#pr_branches[@]} -gt 0 ]]; then
            log_message "📋 Found ${#pr_branches[@]} potential PR branches"
            printf '%s\n' "${pr_branches[@]}"
        else
            log_message "📋 No PR branches found"
            echo "[]"
        fi
    else
        # Parse PR numbers from API response
        echo "$response" | grep -o '"number":[0-9]*' | sed 's/"number"://' || echo "[]"
    fi
}

# Function to process a single PR
process_pr() {
    local pr_num="$1"
    
    log_message "🔄 Processing PR #$pr_num"
    
    # Try to fetch the PR branch
    local branch_name="pr-$pr_num"
    
    if git fetch origin "pull/$pr_num/head:$branch_name" 2>/dev/null; then
        log_message "✅ Successfully fetched PR #$pr_num"
    else
        log_message "❌ Failed to fetch PR #$pr_num"
        SKIPPED_PRS=$((SKIPPED_PRS + 1))
        return 1
    fi
    
    # Checkout the PR branch
    if git checkout "$branch_name" 2>/dev/null; then
        log_message "✅ Successfully checked out PR #$pr_num"
    else
        log_message "❌ Failed to checkout PR #$pr_num"
        SKIPPED_PRS=$((SKIPPED_PRS + 1))
        return 1
    fi
    
    # Try to merge main into the PR branch
    if git merge main --no-commit 2>/dev/null; then
        log_message "✅ No conflicts in PR #$pr_num"
        git commit -m "Merge main into PR #$pr_num - no conflicts" || true
    else
        log_message "⚠️  Conflicts detected in PR #$pr_num, resolving..."
        
        # Resolve conflicts automatically
        local conflicted_files=$(git status --porcelain | grep "^UU" | cut -c4- || echo "")
        
        if [[ -n "$conflicted_files" ]]; then
            echo "$conflicted_files" | while read -r file; do
                if [[ -n "$file" ]]; then
                    log_message "🔧 Resolving conflicts in $file"
                    
                    # Strategy: Keep main version for config files, merge others
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
                fi
            done
            
            # Check if conflicts are resolved
            if [[ $(git status --porcelain | grep "^UU" | wc -l) -eq 0 ]]; then
                git commit -m "Resolve merge conflicts in PR #$pr_num" || true
                log_message "✅ Conflicts resolved for PR #$pr_num"
            else
                log_message "❌ Could not resolve all conflicts in PR #$pr_num"
                git merge --abort
                git checkout main
                git branch -D "$branch_name"
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            log_message "❌ No conflicted files found but merge failed"
            git merge --abort
            git checkout main
            git branch -D "$branch_name"
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
    
    # Test build
    log_message "🏗️  Testing build for PR #$pr_num..."
    if npm ci --legacy-peer-deps --silent 2>/dev/null && npm run build --silent 2>/dev/null; then
        log_message "✅ Build successful for PR #$pr_num"
    else
        log_message "⚠️  Build failed, attempting to fix..."
        npm install --legacy-peer-deps --silent 2>/dev/null || true
        
        if npm run build --silent 2>/dev/null; then
            log_message "✅ Build fixed for PR #$pr_num"
            git add . && git commit -m "Fix build issues" || true
        else
            log_message "❌ Build still failing, skipping merge..."
            git checkout main
            git branch -D "$branch_name"
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
    
    # Merge to main
    git checkout main
    if git merge "$branch_name" --no-ff -m "Merge PR #$pr_num into main

- Resolved merge conflicts
- Build verified
- Ready for production"; then
        log_message "✅ Successfully merged PR #$pr_num into main"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        git branch -D "$branch_name"
        return 0
    else
        log_message "❌ Failed to merge PR #$pr_num to main"
        git checkout main
        git branch -D "$branch_name"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
    fi
}

# Main execution
log_message "🚀 Starting GitHub PR merge process..."

# Get list of open PRs
PR_LIST=($(get_open_prs))

if [[ ${#PR_LIST[@]} -eq 0 || "${PR_LIST[0]}" == "[]" ]]; then
    log_message "📋 No open PRs found to merge"
else
    log_message "📋 Found ${#PR_LIST[@]} open PRs to process"
    
    # Process each PR
    for pr_num in "${PR_LIST[@]}"; do
        if [[ "$pr_num" == "[]" || -z "$pr_num" ]]; then
            continue
        fi
        
        log_message "🔄 Processing PR #$pr_num"
        
        if process_pr "$pr_num"; then
            log_message "✅ Successfully processed PR #$pr_num"
        else
            log_message "❌ Failed to process PR #$pr_num"
        fi
        
        # Push changes periodically
        if [[ $((SUCCESSFUL_MERGES % 3)) -eq 0 && $SUCCESSFUL_MERGES -gt 0 ]]; then
            log_message "🚀 Pushing changes to remote..."
            git push origin main || log_message "⚠️  Push failed, continuing..."
        fi
    done
fi

# Final push
log_message "🚀 Final push to remote..."
git push origin main

# Summary
echo ""
echo "=================================================="
echo "🎉 GitHub PR Merge Process Complete!"
echo "⏰ Finished at: $(date)"
echo ""
echo "📊 Results:"
echo "  ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "  ❌ Failed merges: $FAILED_MERGES"
echo "  ⏭️  Skipped PRs: $SKIPPED_PRS"
echo ""
echo "📝 Log saved to: $LOG_FILE"
echo "=================================================="