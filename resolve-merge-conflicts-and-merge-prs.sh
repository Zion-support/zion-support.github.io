#!/bin/bash

# Script to resolve all merge conflicts and merge open PRs into main branch
# This script handles the complete workflow for PR management

set -e  # Exit on any error

echo "🚀 Starting PR resolution and merge process..."

# Function to check if we're in a git repository
check_git_repo() {
    if [ ! -d ".git" ]; then
        echo "❌ Not in a git repository. Please run this script from the repository root."
        exit 1
    fi
    echo "✅ Git repository detected"
}

# Function to get current branch
get_current_branch() {
    git branch --show-current
}

# Function to fetch latest changes
fetch_latest() {
    echo "📥 Fetching latest changes from remote..."
    git fetch origin
    echo "✅ Latest changes fetched"
}

# Function to check for open PRs (this would need GitHub CLI or API)
check_open_prs() {
    echo "🔍 Checking for open pull requests..."
    
    # Try to use GitHub CLI if available
    if command -v gh &> /dev/null; then
        echo "Using GitHub CLI to check PRs..."
        gh pr list --state open --json number,title,headRefName,baseRefName
    else
        echo "⚠️  GitHub CLI not available. Please check PRs manually on GitHub."
        echo "Repository: https://github.com/Zion-Holdings/zion.app"
        return 1
    fi
}

# Function to resolve merge conflicts
resolve_merge_conflicts() {
    local branch_name=$1
    echo "🔧 Resolving merge conflicts for branch: $branch_name"
    
    # Checkout the branch
    git checkout "$branch_name"
    
    # Try to merge main into the branch
    if git merge main; then
        echo "✅ No merge conflicts found for $branch_name"
    else
        echo "⚠️  Merge conflicts detected for $branch_name"
        echo "🔧 Attempting to resolve conflicts automatically..."
        
        # List conflicted files
        echo "Conflicted files:"
        git diff --name-only --diff-filter=U
        
        # Try to resolve conflicts using git strategies
        echo "Attempting automatic conflict resolution..."
        
        # For each conflicted file, try to resolve
        for file in $(git diff --name-only --diff-filter=U); do
            echo "Resolving conflicts in: $file"
            
            # Try to resolve using ours strategy (keep our changes)
            if git checkout --ours "$file" 2>/dev/null; then
                git add "$file"
                echo "✅ Resolved $file using 'ours' strategy"
            else
                # Try to resolve using theirs strategy (keep their changes)
                if git checkout --theirs "$file" 2>/dev/null; then
                    git add "$file"
                    echo "✅ Resolved $file using 'theirs' strategy"
                else
                    echo "❌ Could not automatically resolve $file"
                    echo "Please resolve manually and run: git add $file"
                fi
            fi
        done
        
        # Check if all conflicts are resolved
        if git diff --check; then
            echo "✅ All conflicts resolved"
            git commit -m "Resolved merge conflicts automatically"
        else
            echo "❌ Some conflicts still remain. Please resolve manually."
            return 1
        fi
    fi
}

# Function to merge PR
merge_pr() {
    local pr_number=$1
    local branch_name=$2
    
    echo "🔄 Merging PR #$pr_number ($branch_name) into main..."
    
    # Switch to main branch
    git checkout main
    
    # Pull latest changes
    git pull origin main
    
    # Merge the PR branch
    if git merge "$branch_name" --no-ff -m "Merge PR #$pr_number: $branch_name"; then
        echo "✅ Successfully merged $branch_name into main"
        
        # Push to remote
        git push origin main
        echo "✅ Changes pushed to remote main branch"
        
        # Delete the PR branch
        git branch -d "$branch_name"
        git push origin --delete "$branch_name"
        echo "✅ Deleted PR branch $branch_name"
        
        return 0
    else
        echo "❌ Failed to merge $branch_name into main"
        return 1
    fi
}

# Function to handle all PRs
handle_all_prs() {
    echo "🔄 Processing all open PRs..."
    
    # Get list of open PRs
    if command -v gh &> /dev/null; then
        # Use GitHub CLI to get PR information
        prs=$(gh pr list --state open --json number,title,headRefName,baseRefName --jq '.[] | "\(.number)|\(.headRefName)|\(.title)"')
        
        if [ -z "$prs" ]; then
            echo "✅ No open PRs found"
            return 0
        fi
        
        echo "Found open PRs:"
        echo "$prs"
        
        # Process each PR
        while IFS='|' read -r pr_number branch_name title; do
            echo ""
            echo "🔄 Processing PR #$pr_number: $title"
            echo "Branch: $branch_name"
            
            # Resolve merge conflicts
            if resolve_merge_conflicts "$branch_name"; then
                # Merge the PR
                if merge_pr "$pr_number" "$branch_name"; then
                    echo "✅ Successfully processed PR #$pr_number"
                else
                    echo "❌ Failed to merge PR #$pr_number"
                fi
            else
                echo "❌ Failed to resolve conflicts for PR #$pr_number"
            fi
        done <<< "$prs"
    else
        echo "⚠️  GitHub CLI not available. Please install it or handle PRs manually."
        echo "Install GitHub CLI: https://cli.github.com/"
        return 1
    fi
}

# Function to check for uncommitted changes
check_uncommitted_changes() {
    if ! git diff-index --quiet HEAD --; then
        echo "⚠️  You have uncommitted changes. Please commit or stash them first."
        git status
        return 1
    fi
    return 0
}

# Main execution
main() {
    echo "🚀 Starting comprehensive PR resolution and merge process..."
    echo "Repository: Zion-Holdings/zion.app"
    echo "=========================================="
    
    # Check if we're in a git repo
    check_git_repo
    
    # Check for uncommitted changes
    if ! check_uncommitted_changes; then
        echo "❌ Please commit or stash your changes before proceeding."
        exit 1
    fi
    
    # Fetch latest changes
    fetch_latest
    
    # Show current status
    echo "Current branch: $(get_current_branch)"
    echo "Current status:"
    git status --short
    
    # Handle all PRs
    handle_all_prs
    
    echo ""
    echo "🎉 PR resolution and merge process completed!"
    echo "=========================================="
    
    # Final status check
    echo "Final repository status:"
    git status --short
    echo "Current branch: $(get_current_branch)"
}

# Run the main function
main "$@"