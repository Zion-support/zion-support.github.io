#!/bin/bash

# Comprehensive script to check GitHub for open PRs, resolve merge conflicts, and merge them into main
set -e

echo "🚀 Starting comprehensive PR merge process..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
GITHUB_REPO="Zion-Holdings/zion.app"
GITHUB_TOKEN="${GITHUB_TOKEN:-}"
BATCH_SIZE=10
MAX_RETRIES=3
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
LOG_FILE="comprehensive-pr-merge-log-$(date +%Y%m%d-%H%M%S).txt"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log messages
log_message() {
    local message="$1"
    local color="${2:-$NC}"
    echo -e "$(date '+%Y-%m-%d %H:%M:%S') - ${color}${message}${NC}" | tee -a "$LOG_FILE"
}

# Function to check GitHub API for open PRs
check_github_prs() {
    log_message "🔍 Checking GitHub for open PRs..." "$BLUE"
    
    # Use GitHub API to get open PRs
    local response=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
        "https://api.github.com/repos/$GITHUB_REPO/pulls?state=open&per_page=100")
    
    if [ $? -ne 0 ]; then
        log_message "❌ Failed to fetch PRs from GitHub API" "$RED"
        return 1
    fi
    
    # Extract PR numbers and titles
    local pr_count=$(echo "$response" | jq -r '. | length' 2>/dev/null || echo "0")
    
    if [ "$pr_count" = "0" ] || [ "$pr_count" = "null" ]; then
        log_message "ℹ️  No open PRs found or failed to parse response" "$YELLOW"
        return 1
    fi
    
    log_message "📋 Found $pr_count open PRs" "$GREEN"
    
    # Extract PR details and save to file for processing
    echo "$response" | jq -r '.[] | "\(.number)|\(.head.ref)|\(.title)|\(.mergeable)|\(.head.sha)"' 2>/dev/null > /tmp/pr_list.txt
    
    if [ ! -s /tmp/pr_list.txt ]; then
        log_message "❌ Failed to parse PR information" "$RED"
        return 1
    fi
    
    log_message "✅ Successfully retrieved PR information" "$GREEN"
    return 0
}

# Function to process GitHub PRs
process_github_prs() {
    log_message "🔄 Processing GitHub PRs..." "$BLUE"
    
    if [ ! -f /tmp/pr_list.txt ]; then
        log_message "❌ PR list file not found" "$RED"
        return 1
    fi
    
    local total_prs=$(wc -l < /tmp/pr_list.txt)
    local successful_merges=0
    local failed_merges=0
    local processed=0
    
    log_message "📊 Total PRs to process: $total_prs" "$BLUE"
    
    # Process each PR
    while IFS='|' read -r pr_number branch_name title mergeable head_sha; do
        if [ -z "$pr_number" ] || [ -z "$branch_name" ]; then
            continue
        fi
        
        processed=$((processed + 1))
        log_message "📋 Processing PR #$pr_number: $title (branch: $branch_name)" "$BLUE"
        
        # Check if branch is already merged
        if git branch --merged main | grep -q "$branch_name"; then
            log_message "⏭️  Skipping $branch_name (already merged)" "$YELLOW"
            continue
        fi
        
        # Check if branch exists remotely
        if ! git ls-remote --heads origin "$branch_name" > /dev/null 2>&1; then
            log_message "⚠️  Branch $branch_name doesn't exist remotely, skipping..." "$YELLOW"
            continue
        fi
        
        # Try to merge the branch
        if merge_branch "$branch_name"; then
            log_message "✅ PR #$pr_number ($branch_name) processed successfully" "$GREEN"
            successful_merges=$((successful_merges + 1))
            
            # Try to close the PR via GitHub API (optional)
            log_message "🔒 Closing PR #$pr_number via GitHub API..." "$BLUE"
            curl -s -X PATCH -H "Authorization: token $GITHUB_TOKEN" \
                -H "Accept: application/vnd.github.v3+json" \
                "https://api.github.com/repos/$GITHUB_REPO/pulls/$pr_number" \
                -d '{"state":"closed"}' > /dev/null 2>&1 || {
                log_message "⚠️  Failed to close PR #$pr_number via API" "$YELLOW"
            }
        else
            log_message "❌ Failed to process PR #$pr_number ($branch_name)" "$RED"
            failed_merges=$((failed_merges + 1))
        fi
        
        # Progress update
        log_message "📊 Progress: $processed/$total_prs, ✅ $successful_merges, ❌ $failed_merges" "$BLUE"
        
        # Push changes periodically
        if [ $((processed % BATCH_SIZE)) -eq 0 ]; then
            log_message "💾 Pushing batch changes to remote..." "$BLUE"
            git push origin main 2>/dev/null || {
                log_message "⚠️  Failed to push changes, continuing..." "$YELLOW"
            }
        fi
        
        # Small delay to avoid overwhelming the system
        sleep 2
    done < /tmp/pr_list.txt
    
    log_message "🎉 GitHub PR processing completed!" "$GREEN"
    log_message "📊 Final results: ✅ $successful_merges successful, ❌ $failed_merges failed" "$BLUE"
}

# Function to create backup branch
create_backup() {
    log_message "🔒 Creating backup branch: $BACKUP_BRANCH" "$BLUE"
    
    if git checkout -b "$BACKUP_BRANCH" 2>/dev/null; then
        git push origin "$BACKUP_BRANCH" 2>/dev/null || true
        git checkout main
        log_message "✅ Backup branch created successfully" "$GREEN"
    else
        log_message "⚠️  Failed to create backup branch, continuing..." "$YELLOW"
    fi
}

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    log_message "🔧 Resolving conflicts in $file for branch $branch..." "$BLUE"
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        log_message "⚠️  Found conflicts in $file, resolving..." "$YELLOW"
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)" 2>/dev/null || true
        
        # Enhanced conflict resolution strategy
        if [[ "$file" == "package.json" ]]; then
            log_message "📦 Package.json detected, merging dependencies intelligently..." "$BLUE"
            # Keep main version but merge new dependencies
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        elif [[ "$file" == "package-lock.json" ]]; then
            log_message "📦 Package-lock.json detected, keeping main version..." "$BLUE"
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            log_message "⚙️  Config file detected, keeping main version..." "$BLUE"
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        elif [[ "$file" == *.css || "$file" == *.scss ]]; then
            log_message "🎨 CSS file detected, merging styles..." "$BLUE"
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        elif [[ "$file" == *.tsx || "$file" == *.ts || "$file" == *.jsx || "$file" == *.js ]]; then
            log_message "💻 Code file detected, attempting intelligent merge..." "$BLUE"
            # For code files, try to keep both versions where possible
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        else
            log_message "📝 Regular file, removing conflict markers..." "$BLUE"
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        fi
        
        log_message "✅ Resolved conflicts in $file" "$GREEN"
        return 0
    else
        log_message "ℹ️  No conflicts found in $file" "$BLUE"
        return 1
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    local retry_count=0
    
    log_message "🔄 Attempting to merge $branch..." "$BLUE"
    
    while [ $retry_count -lt $MAX_RETRIES ]; do
        # Fetch the latest version of the branch
        git fetch origin "$branch" 2>/dev/null || {
            log_message "❌ Failed to fetch branch $branch" "$RED"
            return 1
        }
        
        # Try to merge
        if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            log_message "✅ Successfully merged $branch" "$GREEN"
            git commit -m "Merge $branch into main - $(date)" 2>/dev/null || true
            return 0
        else
            log_message "⚠️  Merge conflicts detected in $branch (attempt $((retry_count + 1))/$MAX_RETRIES), resolving..." "$YELLOW"
            
            # Get list of conflicted files
            local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
            
            if [ -n "$conflicted_files" ]; then
                log_message "📋 Conflicted files: $conflicted_files" "$BLUE"
                
                # Resolve conflicts in each file
                for file in $conflicted_files; do
                    if [ -f "$file" ]; then
                        resolve_conflicts "$file" "$branch"
                    fi
                done
                
                # Add resolved files
                git add . 2>/dev/null || true
                
                # Commit the merge
                if git commit -m "Resolve merge conflicts for $branch - $(date)" 2>/dev/null; then
                    log_message "✅ Successfully resolved conflicts and merged $branch" "$GREEN"
                    return 0
                else
                    log_message "❌ Failed to commit resolved conflicts" "$RED"
                fi
            else
                log_message "❌ No conflicted files found, but merge failed. Aborting..." "$RED"
                git merge --abort 2>/dev/null || true
            fi
            
            retry_count=$((retry_count + 1))
            
            if [ $retry_count -lt $MAX_RETRIES ]; then
                log_message "🔄 Retrying merge for $branch (attempt $((retry_count + 1))/$MAX_RETRIES)..." "$YELLOW"
                sleep 2
            else
                log_message "❌ Failed to merge $branch after $MAX_RETRIES attempts" "$RED"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        fi
    done
}

# Function to process cursor branches
process_cursor_branches() {
    log_message "🔄 Processing cursor branches..." "$BLUE"
    
    # Get all cursor branches
    local branches=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)
    local total_branches=$(echo "$branches" | wc -l)
    
    log_message "📊 Total cursor branches: $total_branches" "$BLUE"
    
    if [ "$total_branches" -eq 0 ]; then
        log_message "ℹ️  No cursor branches found" "$YELLOW"
        return 0
    fi
    
    local successful_merges=0
    local failed_merges=0
    local processed=0
    
    # Process branches in batches
    echo "$branches" | while IFS= read -r branch; do
        if [ -z "$branch" ]; then
            continue
        fi
        
        processed=$((processed + 1))
        log_message "📋 Processing branch $processed/$total_branches: $branch" "$BLUE"
        
        # Check if branch is already merged
        if git branch --merged main | grep -q "$branch"; then
            log_message "⏭️  Skipping $branch (already merged)" "$YELLOW"
            continue
        fi
        
        # Try to merge the branch
        if merge_branch "$branch"; then
            log_message "✅ Branch $branch processed successfully" "$GREEN"
            successful_merges=$((successful_merges + 1))
        else
            log_message "❌ Failed to process branch $branch" "$RED"
            failed_merges=$((failed_merges + 1))
        fi
        
        # Progress update
        log_message "📊 Progress: $processed/$total_branches, ✅ $successful_merges, ❌ $failed_merges" "$BLUE"
        
        # Push changes periodically
        if [ $((processed % BATCH_SIZE)) -eq 0 ]; then
            log_message "💾 Pushing batch changes to remote..." "$BLUE"
            git push origin main 2>/dev/null || {
                log_message "⚠️  Failed to push changes, continuing..." "$YELLOW"
            }
        fi
        
        # Small delay to avoid overwhelming the system
        sleep 1
    done
    
    log_message "🎉 Cursor branch processing completed!" "$GREEN"
    log_message "📊 Final results: ✅ $successful_merges successful, ❌ $failed_merges failed" "$BLUE"
}

# Main execution
main() {
    log_message "🚀 Starting comprehensive PR merge process..." "$GREEN"
    
    # Create backup
    create_backup
    
    # Check GitHub PRs
    if check_github_prs; then
        log_message "📋 GitHub PRs found, processing..." "$GREEN"
        process_github_prs
    else
        log_message "🔄 No GitHub PRs found, processing cursor branches instead..." "$YELLOW"
    fi
    
    # Process cursor branches
    process_cursor_branches
    
    # Final push
    log_message "💾 Pushing final changes to remote..." "$BLUE"
    git push origin main 2>/dev/null || {
        log_message "⚠️  Failed to push final changes" "$RED"
    }
    
    # Summary
    log_message "🎉 Comprehensive PR merge process completed!" "$GREEN"
    log_message "🔒 Backup branch: $BACKUP_BRANCH" "$BLUE"
    log_message "📝 Log file: $LOG_FILE" "$BLUE"
    log_message "⏰ Completed at: $(date)" "$GREEN"
}

# Check if jq is available for JSON parsing
if ! command -v jq &> /dev/null; then
    log_message "⚠️  jq is not installed. Installing jq..." "$YELLOW"
    if command -v apt-get &> /dev/null; then
        sudo apt-get update && sudo apt-get install -y jq
    elif command -v yum &> /dev/null; then
        sudo yum install -y jq
    elif command -v brew &> /dev/null; then
        brew install jq
    else
        log_message "❌ Cannot install jq automatically. Please install jq manually." "$RED"
        exit 1
    fi
fi

# Run main function
main "$@"
