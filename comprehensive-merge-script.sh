#!/bin/bash

# Comprehensive PR merge and conflict resolution script
set -e

echo "🚀 Starting comprehensive PR merge and conflict resolution..."

# Function to get open PRs from GitHub API
get_open_prs() {
    echo "📋 Fetching open PRs from GitHub..."
    
    # Get open PRs using GitHub API
    curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | \
    grep -E '"number"|"title"|"head".*"ref"|"base".*"ref"' | \
    sed 's/.*"number": \([0-9]*\).*/\1/' | \
    sed 's/.*"title": "\([^"]*\)".*/\1/' | \
    sed 's/.*"ref": "\([^"]*\)".*/\1/' | \
    head -50
}

# Function to resolve conflicts automatically
resolve_conflicts() {
    local file=$1
    echo "  🔧 Resolving conflicts in: $file"
    
    # For package.json conflicts, prefer main version
    if [[ "$file" == "package.json" ]]; then
        git checkout --ours "$file" 2>/dev/null || true
        return 0
    fi
    
    # For package-lock.json, regenerate
    if [[ "$file" == "package-lock.json" ]]; then
        git checkout --ours "$file" 2>/dev/null || true
        npm install --package-lock-only 2>/dev/null || true
        return 0
    fi
    
    # For yarn.lock, regenerate
    if [[ "$file" == "yarn.lock" ]]; then
        git checkout --ours "$file" 2>/dev/null || true
        yarn install --frozen-lockfile 2>/dev/null || true
        return 0
    fi
    
    # For TypeScript config files, prefer main
    if [[ "$file" == "tsconfig.json" ]] || [[ "$file" == "tsconfig.typecheck.json" ]]; then
        git checkout --ours "$file" 2>/dev/null || true
        return 0
    fi
    
    # For deleted files conflicts, remove them
    if git status --porcelain | grep -q "^DU.*$file"; then
        git rm "$file" 2>/dev/null || true
        return 0
    fi
    
    # For other conflicts, try to resolve automatically
    if git status --porcelain | grep -q "^UU.*$file\|^AA.*$file\|^DD.*$file"; then
        # Try to take the version from the branch being merged
        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
    fi
}

# Function to merge a specific PR
merge_pr() {
    local pr_number=$1
    local pr_title=$2
    local branch_name=$3
    
    echo "🔄 Processing PR #$pr_number: $pr_title"
    echo "   Branch: $branch_name"
    
    # Fetch the branch
    git fetch origin "$branch_name" 2>/dev/null || {
        echo "❌ Branch $branch_name not found"
        return 1
    }
    
    # Check if already merged
    if git branch --merged main | grep -q "$branch_name"; then
        echo "✅ PR #$pr_number already merged"
        return 0
    fi
    
    # Create a temporary branch for merging
    local temp_branch="temp-merge-pr-$pr_number-$(date +%s)"
    git checkout -b "$temp_branch" main
    
    echo "🔄 Attempting to merge $branch_name into $temp_branch..."
    
    # Try to merge with conflict resolution
    if git merge "origin/$branch_name" --no-ff -m "Merge PR #$pr_number: $pr_title" 2>/dev/null; then
        echo "✅ Successfully merged PR #$pr_number"
        
        # Update main
        git checkout main
        git merge "$temp_branch" --ff-only
        git push origin main
        
        # Clean up
        git branch -D "$temp_branch"
        return 0
    else
        echo "⚠️  Merge conflicts detected in PR #$pr_number, attempting resolution..."
        
        # List conflicted files
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
            echo "  Conflict in: $file"
        done
        
        # Resolve conflicts automatically
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
            resolve_conflicts "$file"
        done
        
        # Add resolved files
        git add . 2>/dev/null || true
        
        # Check if all conflicts are resolved
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "❌ Could not automatically resolve all conflicts in PR #$pr_number"
            git merge --abort
            git checkout main
            git branch -D "$temp_branch"
            return 1
        else
            echo "✅ Conflicts resolved, completing merge for PR #$pr_number..."
            git commit --no-edit
            
            # Update main
            git checkout main
            git merge "$temp_branch" --ff-only
            git push origin main
            
            # Clean up
            git branch -D "$temp_branch"
            echo "✅ Successfully resolved conflicts and merged PR #$pr_number"
            return 0
        fi
    fi
}

# Main execution
echo "📊 Current repository status:"
git status --porcelain | head -10

# Get the latest from origin
echo "🔄 Fetching latest changes from origin..."
git fetch origin --prune

# Get list of open PRs
echo "📋 Getting list of open PRs..."
open_prs=$(get_open_prs)

if [ -z "$open_prs" ]; then
    echo "✅ No open PRs found"
    exit 0
fi

echo "Found open PRs: $open_prs"

# Process each PR
for pr_info in $open_prs; do
    pr_number=$(echo "$pr_info" | head -1)
    pr_title=$(echo "$pr_info" | head -2 | tail -1)
    branch_name=$(echo "$pr_info" | tail -1)
    
    if [ -n "$pr_number" ] && [ -n "$branch_name" ]; then
        echo ""
        if merge_pr "$pr_number" "$pr_title" "$branch_name"; then
            echo "✅ Successfully processed PR #$pr_number"
        else
            echo "❌ Failed to process PR #$pr_number"
        fi
    fi
done

echo ""
echo "🎉 PR merge process completed!"
echo "📊 Final status:"
git status
git log --oneline -5