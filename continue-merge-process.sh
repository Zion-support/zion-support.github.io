#!/bin/bash
# Script to continue the merge process for all open PRs
set -e
echo "🚀 Continuing merge process for all open PRs..."
echo "📊 Total cursor branches available: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"
# Configuration
BATCH_SIZE=10
LOG_FILE="continue-merge-log-$(date +%Y%m%d-%H%M%S).txt"
BACKUP_BRANCH="continue-merge-backup-$(date +%Y%m%d-%H%M%S)"
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
# Get list of existing cursor branches
log_message "📋 Getting list of existing cursor branches..."
EXISTING_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)
# Filter out branches that don't exist remotely and are already merged
log_message "🔍 Filtering existing branches..."
VALID_BRANCHES=""
for branch in $EXISTING_BRANCHES; do
    if git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        # Skip if branch is already merged
        if ! git branch --merged main | grep -q "$branch"; then
            VALID_BRANCHES="$VALID_BRANCHES $branch"
        fi
    fi
done
TOTAL_BRANCHES=$(echo "$VALID_BRANCHES" | wc -w)
log_message "✅ Found $TOTAL_BRANCHES valid unmerged branches to process"
# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
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
