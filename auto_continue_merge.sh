#!/bin/bash

# Automated continuation script for the comprehensive merge process
# This script will automatically continue merging branches with minimal intervention

set -e

echo "Starting automated merge continuation..."

# Configuration
LOG_FILE="auto_merge_log_$(date +%Y%m%d-%H%M%S).txt"
SKIP_FILE="auto_skipped_branches.txt"
MAX_ATTEMPTS=3

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Initialize log files
echo "=== Auto Merge Log Started $(date) ===" > "$LOG_FILE"
echo "Current branch: $CURRENT_BRANCH" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"

# Function to log messages
log_message() {
    local message="$1"
    echo "$message"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" >> "$LOG_FILE"
}

# Function to check if branch is worth merging
is_branch_worth_merging() {
    local branch="$1"
    
    # Skip backup and temporary branches
    if [[ "$branch" =~ backup|temp|test|merge|systematic|comprehensive ]]; then
        return 1
    fi
    
    # Skip branches with very old commits (older than 6 months)
    local last_commit_date=$(git log -1 --format=%cd --date=short "origin/$branch" 2>/dev/null)
    if [[ -z "$last_commit_date" ]]; then
        return 1
    fi
    
    # Convert date to timestamp for comparison
    local commit_timestamp=$(date -d "$last_commit_date" +%s 2>/dev/null)
    local six_months_ago=$(date -d "6 months ago" +%s 2>/dev/null)
    
    if [[ "$commit_timestamp" -lt "$six_months_ago" ]]; then
        return 1
    fi
    
    # Check commit count - skip if too many commits
    local commit_count=$(git log --oneline HEAD.."$branch" 2>/dev/null | wc -l)
    if [[ "$commit_count" -gt 50 ]]; then
        return 1
    fi
    
    return 0
}

# Function to automatically resolve common conflicts
auto_resolve_conflicts() {
    local branch_name="$1"
    
    log_message "  Auto-resolving conflicts for $branch_name..."
    
    # Get list of conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U)
    
    for file in $conflicted_files; do
        log_message "    Resolving conflict in: $file"
        
        # Check if file was deleted in incoming branch
        if git ls-files --deleted | grep -q "^$file$"; then
            log_message "      File $file was deleted, removing..."
            git rm "$file"
            continue
        fi
        
        # Check if file was added in incoming branch
        if ! git ls-files --error-unmatch "$file" 2>/dev/null; then
            log_message "      File $file was added, accepting..."
            git add "$file"
            continue
        fi
        
        # For content conflicts, try to accept incoming changes
        if [[ -f "$file" ]]; then
            # Check if it's a simple conflict that can be auto-resolved
