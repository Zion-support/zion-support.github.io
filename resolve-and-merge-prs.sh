#!/bin/bash

# Comprehensive PR merge and conflict resolution script
set -e

echo "🚀 Starting comprehensive PR merge process..."

# Function to safely execute git commands
safe_git() {
    local cmd="$1"
    echo "Executing: git $cmd"
    if timeout 30 git $cmd; then
        echo "✅ Success: git $cmd"
        return 0
    else
        echo "❌ Failed: git $cmd"
        return 1
    fi
}

# Function to resolve merge conflicts
resolve_conflicts() {
    echo "🔧 Resolving merge conflicts..."
    
    # Check for conflict files
    local conflicts=$(git status --porcelain | grep -E '^(UU|AA|DD)' | awk '{print $2}' || true)
    
    if [ -z "$conflicts" ]; then
        echo "No conflicts found"
        return 0
    fi
    
    echo "Found conflicts in: $conflicts"
    
    # Resolve each conflict
    echo "$conflicts" | while read -r file; do
        if [ -n "$file" ]; then
            echo "  Resolving conflict in: $file"
            
            case "$file" in
                "package.json"|"package-lock.json")
                    echo "    Using version from feature branch for $file"
                    git checkout --theirs "$file" || git checkout --ours "$file"
                    ;;
                "*.ts"|"*.tsx"|"*.js"|"*.jsx")
                    echo "    Using version from feature branch for $file"
                    git checkout --theirs "$file" || git checkout --ours "$file"
                    ;;
                *)
                    echo "    Using version from feature branch for $file"
                    git checkout --theirs "$file" || git checkout --ours "$file"
                    ;;
            esac
            
            git add "$file"
        fi
    done
    
    # Commit the resolution
    if git commit --no-edit; then
        echo "✅ Conflicts resolved successfully"
        return 0
    else
        echo "❌ Failed to commit conflict resolution"
        return 1
    fi
}

# Main merge function
merge_pr_branch() {
    local branch="$1"
    local pr_number="$2"
    
    echo "📋 Processing PR #$pr_number: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "❌ Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Fetch the branch
    echo "📥 Fetching branch $branch..."
    if ! safe_git "fetch origin $branch"; then
        echo "❌ Failed to fetch $branch"
        return 1
    fi
    
    # Attempt merge
    echo "🔄 Attempting to merge $branch into main..."
    if safe_git "merge origin/$branch --no-ff -m \"Merge PR #$pr_number: $branch into main\""; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflict detected in $branch"
        
        # Resolve conflicts
        if resolve_conflicts; then
            echo "✅ Successfully resolved conflicts and merged $branch"
            return 0
        else
            echo "❌ Failed to resolve conflicts for $branch"
            safe_git "merge --abort"
            return 1
        fi
    fi
}

# Main execution
main() {
    # Ensure we're on main
    echo "🔄 Switching to main branch..."
    safe_git "checkout main"
    
    # Pull latest changes
    echo "📥 Pulling latest changes..."
    safe_git "pull origin main"
    
    # List of PRs to merge
    declare -a prs=(
        "cursor/fix-netlify-build-and-merge-to-main-74ad:12714"
        "cursor/fix-netlify-build-and-merge-to-main-9e6a:12713"
        "cursor/fix-netlify-build-and-merge-to-main-34e4:12712"
    )
    
    local success_count=0
    local total_count=${#prs[@]}
    
    # Process each PR
    for pr_info in "${prs[@]}"; do
        IFS=':' read -r branch pr_number <<< "$pr_info"
        
        if merge_pr_branch "$branch" "$pr_number"; then
            ((success_count++))
        fi
        
        echo "---"
    done
    
    echo "🎉 Processed $success_count/$total_count PRs successfully!"
    
    # Push changes
    echo "📤 Pushing changes to main..."
    if safe_git "push origin main"; then
        echo "✅ Successfully pushed all changes to main!"
    else
        echo "❌ Failed to push changes to main"
        return 1
    fi
    
    echo "🎉 All PRs have been processed and merged!"
}

# Run main function
main "$@"