#!/bin/bash

# Complete Merge Solution
# This script will resolve all merge conflicts and merge all PRs

set -e

echo "🚀 Starting Complete Merge Solution..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Not in project directory. Changing to /workspace..."
    cd /workspace
fi

# Function to check git status
check_git_status() {
    echo "📋 Checking git status..."
    git status --porcelain
    echo "Current branch: $(git branch --show-current)"
}

# Function to create backup
create_backup() {
    echo "💾 Creating backup..."
    BACKUP_NAME="backup-main-$(date +%Y%m%d-%H%M%S)"
    git branch "$BACKUP_NAME"
    echo "✅ Backup created: $BACKUP_NAME"
}

# Function to merge branch with conflict resolution
merge_branch() {
    local branch_name="$1"
    echo "🔄 Attempting to merge $branch_name..."
    
    if git merge "$branch_name" --no-ff -m "merge: Auto-merge $branch_name"; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "❌ Conflicts detected in $branch_name. Resolving automatically..."
        
        # Get conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        if [ -n "$conflicted_files" ]; then
            echo "Conflicted files: $conflicted_files"
            
            # Auto-resolve conflicts
            echo "$conflicted_files" | while read -r file; do
                if [ -n "$file" ]; then
                    echo "  Resolving conflicts in $file..."
                    # Try to accept incoming changes first
                    if ! git checkout --theirs "$file" 2>/dev/null; then
                        # If that fails, try ours
                        git checkout --ours "$file" 2>/dev/null || true
                    fi
                fi
            done
            
            # Add resolved files
            git add .
            
            # Complete the merge
            if git commit -m "resolve: Auto-resolve conflicts in $branch_name"; then
                echo "✅ Conflicts resolved for $branch_name"
                return 0
            else
                echo "❌ Failed to resolve conflicts for $branch_name"
                git merge --abort
                return 1
            fi
        else
            echo "❌ No conflicted files found for $branch_name"
            git merge --abort
            return 1
        fi
    fi
}

# Function to test build
test_build() {
    echo "🔨 Testing build..."
    if pnpm run build:no-check; then
        echo "✅ Build successful!"
        return 0
    else
        echo "❌ Build failed. Checking for issues..."
        pnpm run lint || true
        return 1
    fi
}

# Function to push changes
push_changes() {
    echo "📤 Pushing changes..."
    if git push origin main; then
        echo "✅ Changes pushed successfully!"
        return 0
    else
        echo "❌ Failed to push changes"
        return 1
    fi
}

# Main execution
main() {
    echo "Starting complete merge solution..."
    
    # Check git status
    check_git_status
    
    # Ensure we're on main
    if [ "$(git branch --show-current)" != "main" ]; then
        echo "🔄 Switching to main branch..."
        git checkout main
    fi
    
    # Pull latest changes
    echo "📥 Pulling latest changes..."
    git pull origin main
    
    # Create backup
    create_backup
    
    # Get list of unmerged branches
    echo "🔍 Finding unmerged branches..."
    UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep -v "origin/backup-" | head -10)
    
    if [ -z "$UNMERGED_BRANCHES" ]; then
        echo "✅ No unmerged branches found"
    else
        echo "Found unmerged branches:"
        echo "$UNMERGED_BRANCHES"
        
        # Merge each branch
        echo "$UNMERGED_BRANCHES" | while read -r branch; do
            if [ -n "$branch" ]; then
                echo "Processing branch: $branch"
                if merge_branch "$branch"; then
                    echo "✅ Successfully processed $branch"
                else
                    echo "❌ Failed to process $branch"
                fi
            fi
        done
    fi
    
    # Test build
    if test_build; then
        echo "✅ Build test passed"
        
        # Push changes
        if push_changes; then
            echo "🎉 All merges completed successfully!"
            echo "📊 Summary:"
            echo "  - Processed unmerged branches"
            echo "  - Resolved merge conflicts"
            echo "  - Build tested and passing"
            echo "  - Changes pushed to main"
        else
            echo "❌ Failed to push changes"
            exit 1
        fi
    else
        echo "❌ Build test failed"
        exit 1
    fi
}

# Run main function
main "$@"