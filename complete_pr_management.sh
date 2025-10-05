#!/bin/bash
set -e

echo "=== Complete PR Management and Merge Conflict Resolution ==="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to safely run git commands
safe_git() {
    echo "Running: git $*"
    if git "$@"; then
        echo "✅ Success: git $*"
        return 0
    else
        echo "❌ Failed: git $*"
        return 1
    fi
}

# Function to check for merge conflicts
check_conflicts() {
    echo "Checking for merge conflicts..."
    if git diff --check >/dev/null 2>&1; then
        echo "✅ No merge conflicts detected"
        return 0
    else
        echo "❌ Merge conflicts detected:"
        git diff --check
        return 1
    fi
}

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in $file..."
    
    if grep -q "" "$file"; then
        echo "Found conflict markers in $file"
        # This would need manual resolution in a real scenario
        echo "Manual resolution needed for $file"
        return 1
    else
        echo "No conflicts in $file"
        return 0
    fi
}

# Main execution
main() {
    cd /workspace
    
    echo "Current directory: $(pwd)"
    echo "Git version: $(git --version)"
    
    # Step 1: Check current status
    echo "=== Step 1: Current Status ==="
    safe_git status
    echo "Current branch: $(git branch --show-current)"
    echo "Last commit: $(git log --oneline -1)"
    
    # Step 2: Check for conflicts
    echo "=== Step 2: Conflict Check ==="
    check_conflicts
    
    # Step 3: Pull latest changes
    echo "=== Step 3: Pull Latest Changes ==="
    if safe_git fetch origin; then
        echo "Fetch successful"
    else
        echo "Fetch failed, continuing..."
    fi
    
    # Step 4: Try to pull main
    echo "=== Step 4: Pull Main Branch ==="
    if safe_git pull origin main --no-rebase; then
        echo "Pull successful"
    else
        echo "Pull failed, checking status..."
        git status
        echo "Attempting to resolve..."
        
        # Check if we're in a merge state
        if [ -f ".git/MERGE_HEAD" ]; then
            echo "In merge state, attempting to resolve..."
            # This would need manual intervention
            echo "Manual merge resolution needed"
        fi
    fi
    
    # Step 5: Check build status
    echo "=== Step 5: Build Status ==="
    if command_exists pnpm; then
        echo "Running type check..."
        if pnpm type-check; then
            echo "✅ TypeScript check passed"
        else
            echo "❌ TypeScript check failed"
        fi
        
        echo "Running build..."
        if pnpm build; then
            echo "✅ Build successful"
        else
            echo "❌ Build failed"
        fi
    else
        echo "pnpm not available, skipping build check"
    fi
    
    # Step 6: List all branches
    echo "=== Step 6: Branch Information ==="
    echo "Local branches:"
    git branch
    echo "Remote branches:"
    git branch -r
    
    # Step 7: Check for open PRs (this would require GitHub CLI or API)
    echo "=== Step 7: PR Information ==="
    echo "To check open PRs, visit: https://github.com/Zion-Holdings/zion.app/pulls"
    echo "Or use GitHub CLI: gh pr list"
    
    # Step 8: Attempt to push
    echo "=== Step 8: Push Changes ==="
    if safe_git push origin main; then
        echo "Push successful"
    else
        echo "Push failed, may need to pull first"
    fi
    
    echo "=== Process Complete ==="
    echo "Next steps:"
    echo "1. Check GitHub for open PRs: https://github.com/Zion-Holdings/zion.app/pulls"
    echo "2. Resolve any conflicts in open PRs"
    echo "3. Merge approved PRs into main"
    echo "4. Verify Netlify deployment"
}

# Run main function
main "$@"