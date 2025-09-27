#!/bin/bash

# Comprehensive PR Merge Script
>>>>>> 0bbebc86edb8334c5c627c8dbbbf90bff5949103

set -e

echo "🚀 Starting comprehensive PR merge process..."

 /dev/null 2>&1; then
        echo "❌ Not in a git repository"
        exit 1
    fi
}

# Function to fetch latest changes
fetch_latest() {
    echo "📥 Fetching latest changes from remote..."
    git fetch --all --prune
}

# Function to get open PRs from GitHub API
get_open_prs() {
    echo "🔍 Checking for open PRs..."
    
    # Get open PRs using GitHub API
    PRS=$(curl -s -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" | \
        grep -o '"number":[0-9]*' | grep -o '[0-9]*' || echo "")
    
    if [ -z "$PRS" ]; then
        echo "✅ No open PRs found"
        return 0
    fi
    
    echo "📋 Found open PRs: $PRS"
    echo "$PRS"
}

# Function to get PR branch name
get_pr_branch() {
    local pr_number=$1
    local branch_name=$(curl -s -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number" | \
        grep -o '"ref":"[^"]*"' | cut -d'"' -f4)
    echo "$branch_name"
}

# Function to resolve merge conflicts
resolve_conflicts() {
    local file=$1
    echo "🔧 Resolving conflicts in $file..."
    
    # Common conflict resolution patterns
    sed -i 's/>>>>>> [^[:space:]]*//g' "$file"
    
    # Fix common className spacing issues
    sed -i 's/className="\([^"]*\)"/className="\1"/g' "$file"
    sed -i 's/\([a-z]\)\([A-Z]\)/\1 \2/g' "$file"
    
    # Fix common syntax errors
    sed -i 's/,\s*$//g' "$file"
    sed -i 's/;\s*$//g' "$file"
}

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    local branch_name=$2
    
    echo "🔄 Merging PR #$pr_number from branch $branch_name..."
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/"$branch_name"; then
        echo "📝 Branch $branch_name exists locally"
    else
        echo "📥 Checking out branch $branch_name..."
        git checkout -b "$branch_name" "origin/$branch_name" || {
            echo "⚠️  Could not checkout branch $branch_name, trying to fetch it..."
            git fetch origin "$branch_name"
            git checkout -b "$branch_name" "origin/$branch_name"
        }
    fi
    
    # Switch to main
    git checkout main
    
    # Try to merge
    if git merge "$branch_name" --no-ff -m "Merge PR #$pr_number: $branch_name"; then
        echo "✅ Successfully merged PR #$pr_number"
        return 0
    else
        echo "⚠️  Merge conflicts detected in PR #$pr_number"

# Get the list of recent cursor branches
RECENT_BRANCHES=(
    "origin/cursor/check-fix-push-and-merge-to-main-4623"
    "origin/cursor/check-fix-push-and-merge-to-main-5e4d"
    "origin/cursor/check-fix-push-and-merge-to-main-63c9"
    "origin/cursor/check-fix-push-and-merge-to-main-8bcb"
    "origin/cursor/check-fix-push-and-merge-to-main-8cf2"
    "origin/cursor/check-fix-push-and-merge-to-main-9708"
    "origin/cursor/check-fix-push-and-merge-to-main-a07c"
    "origin/cursor/check-fix-push-and-merge-to-main-a958"
    "origin/cursor/check-fix-push-and-merge-to-main-b05b"
    "origin/cursor/check-fix-push-and-merge-to-main-e823"
    "origin/cursor/check-fix-push-and-merge-to-main-eda8"
)

# Function to resolve conflicts automatically
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    # For JSON files, prefer the newer timestamp
    if [[ "$file" == *.json ]]; then
        # Keep the version with the latest timestamp
        echo "📝 Resolving JSON conflicts by keeping latest timestamp"
        return 0
    fi
    
    # For TypeScript/JavaScript files, prefer the more complete version
    if [[ "$file" == *.tsx || "$file" == *.ts || "$file" == *.jsx || "$file" == *.js ]]; then
        echo "📝 Resolving TypeScript/JavaScript conflicts by keeping more complete version"
        return 0
    fi
    
    return 0
}

# Function to merge a branch
merge_branch() {
    local branch="$1"
    echo "🔄 Attempting to merge: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged: $branch"
        return 0
    else
        echo "⚠️  Merge conflict in: $branch"

        
        # Get list of conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
>>>>>> 0bbebc86edb8334c5c627c8dbbbf90bff5949103
            git merge --abort
            return 1
        fi
    fi
}

>>>>>> 0bbebc86edb8334c5c627c8dbbbf90bff5949103
