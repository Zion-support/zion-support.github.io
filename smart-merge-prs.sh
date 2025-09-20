#!/bin/bash

# Smart script to merge only PRs with actual differences
set -e

echo "🚀 Starting smart PR merge process..."
echo "📊 Total cursor branches available: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
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
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

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

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    log_message "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            log_message "⚙️  Config file detected, keeping main version..."
        elif [[ "$file" == "*.tsx" || "$file" == "*.ts" || "$file" == "*.jsx" || "$file" == "*.js" ]]; then
            log_message "💻 Code file detected, attempting intelligent merge..."
        elif [[ "$file" == "*.md" ]]; then
            log_message "📝 Markdown file detected, merging content..."
        else
            log_message "📝 Regular file, removing conflict markers..."
