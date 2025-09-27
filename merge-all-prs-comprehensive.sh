#!/bin/bash

# Comprehensive PR Merge Script
# This script will find all open PRs, resolve conflicts, and merge them into main

set -e

echo "🚀 Starting comprehensive PR merge process..."

# Function to check if we're in a git repository
check_git_repo() {
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
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
    sed -i 's/<<<<<<< HEAD//g' "$file"
    sed -i 's/=======//g' "$file"
    sed -i 's/>>>>>>> [^[:space:]]*//g' "$file"
    
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
        
        # Get list of conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            echo "🔧 Resolving conflicts in: $conflicted_files"
            
            # Resolve conflicts in each file
            for file in $conflicted_files; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file"
                fi
            done
            
            # Add resolved files
            git add $conflicted_files
            
            # Commit the merge
            git commit -m "Resolve merge conflicts in PR #$pr_number"
            
            echo "✅ Successfully resolved and merged PR #$pr_number"
        else
            echo "❌ No conflicted files found, aborting merge"
            git merge --abort
            return 1
        fi
    fi
}

# Function to push changes
push_changes() {
    echo "📤 Pushing changes to remote..."
    git push origin main
    echo "✅ Changes pushed successfully"
}

# Function to clean up branches
cleanup_branches() {
    echo "🧹 Cleaning up merged branches..."
    
    # Get list of local branches that have been merged
    local merged_branches=$(git branch --merged main | grep -v "main" | grep -v "\*" | xargs -n 1 echo)
    
    if [ -n "$merged_branches" ]; then
        echo "🗑️  Deleting merged branches: $merged_branches"
        echo "$merged_branches" | xargs -n 1 git branch -d
    else
        echo "ℹ️  No merged branches to clean up"
    fi
}

# Main execution
main() {
    echo "🎯 Starting comprehensive PR merge process..."
    
    # Check if we're in a git repo
    check_git_repo
    
    # Fetch latest changes
    fetch_latest
    
    # Get open PRs
    local open_prs=$(get_open_prs)
    
    if [ -z "$open_prs" ]; then
        echo "✅ No open PRs to merge"
        exit 0
    fi
    
    # Process each PR
    for pr_number in $open_prs; do
        echo "🔄 Processing PR #$pr_number..."
        
        # Get branch name for this PR
        local branch_name=$(get_pr_branch "$pr_number")
        
        if [ -z "$branch_name" ]; then
            echo "⚠️  Could not get branch name for PR #$pr_number, skipping..."
            continue
        fi
        
        echo "📋 PR #$pr_number is on branch: $branch_name"
        
        # Try to merge the PR
        if merge_pr "$pr_number" "$branch_name"; then
            echo "✅ Successfully processed PR #$pr_number"
        else
            echo "❌ Failed to process PR #$pr_number"
        fi
        
        echo "---"
    done
    
    # Push all changes
    push_changes
    
    # Clean up merged branches
    cleanup_branches
    
    echo "🎉 Comprehensive PR merge process completed!"
    echo "📊 Summary:"
    echo "   - Processed PRs: $open_prs"
    echo "   - All changes pushed to main"
    echo "   - Cleaned up merged branches"
}

# Run main function
main "$@"