#!/bin/bash
# github_pr_management.sh - GitHub PR management using GitHub CLI

set -e

echo "=== GitHub PR Management ==="

# Configuration
GITHUB_REPO="Zion-Holdings/zion.app"
GITHUB_OWNER="Zion-Holdings"
GITHUB_REPO_NAME="zion.app"

# Check if GitHub CLI is available
if ! command -v gh >/dev/null 2>&1; then
    echo "❌ GitHub CLI (gh) is not installed"
    echo "Please install it using:"
    echo "  brew install gh  # macOS"
    echo "  apt install gh   # Ubuntu"
    echo "  choco install gh # Windows"
    echo ""
    echo "Then authenticate with: gh auth login"
    exit 1
fi

# Check if authenticated
if ! gh auth status >/dev/null 2>&1; then
    echo "❌ Not authenticated with GitHub"
    echo "Please run: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI is available and authenticated"

# Function to get open PRs
get_open_prs() {
    echo "Fetching open PRs..."
    
    local prs=$(gh pr list --repo $GITHUB_REPO --state open --json number,headRefName,title,mergeable,createdAt,updatedAt)
    
    if [ "$prs" = "[]" ]; then
        echo "No open PRs found"
        return 1
    fi
    
    echo "$prs" | jq -r '.[] | "\(.number): \(.title) (\(.headRefName))"'
    return 0
}

# Function to check PR conflicts
check_pr_conflicts() {
    local pr_number=$1
    
    echo "Checking conflicts for PR #$pr_number"
    
    local pr_data=$(gh pr view $pr_number --repo $GITHUB_REPO --json mergeable,headRefName,title,state)
    local mergeable=$(echo $pr_data | jq -r '.mergeable')
    local branch=$(echo $pr_data | jq -r '.headRefName')
    local title=$(echo $pr_data | jq -r '.title')
    local state=$(echo $pr_data | jq -r '.state')
    
    if [ "$state" != "OPEN" ]; then
        echo "  ⏭️ PR #$pr_number is not open (state: $state), skipping"
        return 2
    fi
    
    echo "  PR: $title"
    echo "  Branch: $branch"
    echo "  Mergeable: $mergeable"
    
    if [ "$mergeable" = "false" ]; then
        echo "  ⚠️ PR #$pr_number has conflicts"
        return 1
    elif [ "$mergeable" = "true" ]; then
        echo "  ✅ PR #$pr_number has no conflicts"
        return 0
    else
        echo "  ❓ PR #$pr_number mergeable status is unknown"
        return 1
    fi
}

# Function to resolve PR conflicts
resolve_pr_conflicts() {
    local pr_number=$1
    
    echo "Resolving conflicts for PR #$pr_number"
    
    local pr_data=$(gh pr view $pr_number --repo $GITHUB_REPO --json headRefName,title)
    local branch=$(echo $pr_data | jq -r '.headRefName')
    local title=$(echo $pr_data | jq -r '.title')
    
    echo "  Updating branch $branch with latest main"
    
    # Fetch latest changes
    git fetch origin main
    git fetch origin $branch
    
    # Checkout branch
    if git show-ref --verify --quiet refs/heads/$branch; then
        git checkout $branch
        git pull origin $branch
    else
        git checkout -b $branch origin/$branch
    fi
    
    # Try to merge main
    if git merge origin/main --no-commit; then
        echo "  ✅ Successfully merged main into $branch"
        git commit -m "Merge main into $branch to resolve conflicts"
        git push origin $branch
        return 0
    else
        echo "  ❌ Merge conflicts detected in $branch"
        
        # Try automatic conflict resolution
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            echo "  Attempting automatic conflict resolution..."
            
            for file in $conflicted_files; do
                echo "    Resolving conflicts in $file"
                
                # Use automatic resolution strategies
                if [[ $file == "package.json" ]]; then
                    git checkout --theirs $file
                    git add $file
                elif [[ $file == *.tsx ]] || [[ $file == *.ts ]]; then
                    git checkout --theirs $file
                    git add $file
                elif [[ $file == *.json ]] || [[ $file == *.toml ]] || [[ $file == *.yaml ]] || [[ $file == *.yml ]]; then
                    git checkout --theirs $file
                    git add $file
                else
                    git checkout --theirs $file
                    git add $file
                fi
            done
            
            # Complete merge
            if git diff --check; then
                git commit -m "Resolved merge conflicts in $branch"
                git push origin $branch
                echo "  ✅ Successfully resolved conflicts in $branch"
                return 0
            else
                git merge --abort
                echo "  ❌ Could not automatically resolve conflicts in $branch"
                return 1
            fi
        else
            git merge --abort
            echo "  ❌ No conflicted files found but merge failed"
            return 1
        fi
    fi
}

# Function to merge PR
merge_pr() {
    local pr_number=$1
    local merge_method=${2:-"merge"}  # merge, squash, rebase
    
    echo "Merging PR #$pr_number using $merge_method method"
    
    local pr_data=$(gh pr view $pr_number --repo $GITHUB_REPO --json title,headRefName)
    local title=$(echo $pr_data | jq -r '.title')
    local branch=$(echo $pr_data | jq -r '.headRefName')
    
    echo "  PR: $title"
    echo "  Branch: $branch"
    
    # Check if PR is mergeable
    local mergeable=$(gh pr view $pr_number --repo $GITHUB_REPO --json mergeable | jq -r '.mergeable')
    
    if [ "$mergeable" != "true" ]; then
        echo "  ❌ PR #$pr_number is not mergeable (status: $mergeable)"
        return 1
    fi
    
    # Merge the PR
    if gh pr merge $pr_number --repo $GITHUB_REPO --$merge_method --delete-branch; then
        echo "  ✅ Successfully merged PR #$pr_number"
        return 0
    else
        echo "  ❌ Failed to merge PR #$pr_number"
        return 1
    fi
}

# Function to manage all open PRs
manage_open_prs() {
    echo "=== Managing Open PRs ==="
    
    # Get list of open PRs
    local open_prs=$(gh pr list --repo $GITHUB_REPO --state open --json number,headRefName,title,mergeable)
    
    if [ "$open_prs" = "[]" ]; then
        echo "No open PRs found"
        return 0
    fi
    
    local pr_count=$(echo $open_prs | jq length)
    echo "Found $pr_count open PRs"
    
    local processed=0
    local merged=0
    local conflicts_resolved=0
    local failed=0
    
    # Process each PR
    echo $open_prs | jq -r '.[] | .number' | while read pr_number; do
        ((processed++))
        echo ""
        echo "[$processed/$pr_count] Processing PR #$pr_number"
        
        # Check for conflicts
        if check_pr_conflicts $pr_number; then
            # No conflicts, try to merge
            if merge_pr $pr_number; then
                ((merged++))
                echo "  ✅ Successfully merged PR #$pr_number"
            else
                ((failed++))
                echo "  ❌ Failed to merge PR #$pr_number"
            fi
        else
            # Has conflicts, try to resolve
            if resolve_pr_conflicts $pr_number; then
                ((conflicts_resolved++))
                echo "  ✅ Successfully resolved conflicts for PR #$pr_number"
                
                # Try to merge after resolving conflicts
                sleep 2  # Wait for GitHub to update
                if merge_pr $pr_number; then
                    ((merged++))
                    echo "  ✅ Successfully merged PR #$pr_number after conflict resolution"
                else
                    ((failed++))
                    echo "  ❌ Failed to merge PR #$pr_number after conflict resolution"
                fi
            else
                ((failed++))
                echo "  ❌ Failed to resolve conflicts for PR #$pr_number"
            fi
        fi
        
        # Return to main branch
        git checkout main >/dev/null 2>&1
        
        # Rate limiting
        sleep 3
    done
    
    echo ""
    echo "=== PR Management Results ==="
    echo "Total processed: $processed"
    echo "Successfully merged: $merged"
    echo "Conflicts resolved: $conflicts_resolved"
    echo "Failed: $failed"
}

# Function to clean up closed PRs
cleanup_closed_prs() {
    echo "=== Cleaning up closed PRs ==="
    
    # Get closed PRs with deleted branches
    local closed_prs=$(gh pr list --repo $GITHUB_REPO --state closed --json number,headRefName,title)
    
    if [ "$closed_prs" = "[]" ]; then
        echo "No closed PRs found"
        return 0
    fi
    
    echo "Found $(echo $closed_prs | jq length) closed PRs"
    
    # Clean up local branches for closed PRs
    echo $closed_prs | jq -r '.[] | .headRefName' | while read branch; do
        if git show-ref --verify --quiet refs/heads/$branch; then
            echo "Cleaning up local branch: $branch"
            git branch -D $branch >/dev/null 2>&1
        fi
    done
    
    echo "✅ Cleaned up local branches for closed PRs"
}

# Main execution function
main() {
    echo "Starting GitHub PR management..."
    
    # Ensure we're in the right directory and on main
    cd /workspace
    git checkout main
    git pull origin main
    
    # Manage open PRs
    manage_open_prs
    
    # Clean up closed PRs
    cleanup_closed_prs
    
    echo ""
    echo "=== GitHub PR Management Complete ==="
    echo "Repository: $GITHUB_REPO"
    echo "Current branch: $(git branch --show-current)"
    echo "Latest commit: $(git log -1 --oneline)"
}

# Error handling
trap 'echo "Error occurred. Rolling back to main branch..."; git checkout main; exit 1' ERR

# Run main function
main "$@"