#!/bin/bash

# Enhanced script to resolve merge conflicts and merge all cursor branches into main
set -e

echo "🚀 Starting enhanced merge conflict resolution for all cursor branches..."
echo "📊 Total cursor branches to process: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=100
MAX_RETRIES=3
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
LOG_FILE="enhanced-merge-log-$(date +%Y%m%d-%H%M%S).txt"

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
TOTAL_PROCESSED=0

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

# Function to resolve conflicts in a file with enhanced logic
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    log_message "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
        elif [[ "$file" == "package-lock.json" ]]; then
            log_message "📦 Package-lock.json detected, keeping main version..."
        elif [[ "$file" == "*.css" || "$file" == "*.scss" ]]; then
            log_message "🎨 CSS file detected, merging styles..."
        else
            log_message "📝 Regular file, removing conflict markers..."
