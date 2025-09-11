#!/bin/bash

echo "🚀 Starting PR Resolution and Merge Process"
echo "==========================================="

# Function to run git commands with error handling
run_git() {
    local cmd="$1"
    local description="$2"
    
    echo "🔄 $description"
    if git $cmd; then
        echo "✅ $description completed"
        return 0
    else
        echo "❌ $description failed"
        return 1
    fi
}

# Function to resolve merge conflicts
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    # Strategy: Keep our changes (HEAD) for most files
    if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
        # For package files, prefer incoming changes
        git checkout --theirs "$file"
    else
        # For other files, keep our changes
        git checkout --ours "$file"
    fi
    
    git add "$file"
    echo "✅ Resolved conflicts in: $file"
}

# Main process
main() {
    # Ensure we're in the right directory
    cd /workspace || exit 1
    
    # Check if we're in a git repository
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        echo "❌ Not in a git repository"
        exit 1
    fi
    
    echo "✅ Git repository detected"
    
    # Get current branch
    current_branch=$(git branch --show-current)
    echo "📍 Current branch: $current_branch"
    
    # Switch to main branch
    if [ "$current_branch" != "main" ]; then
        run_git "checkout main" "Switching to main branch"
    fi
    
    # Pull latest changes
    run_git "pull origin main" "Pulling latest changes from main"
    
    # Get list of remote branches (excluding main)
    echo "📋 Getting remote branches..."
    remote_branches=$(git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | sed 's/origin\///' | head -20)
    
    if [ -z "$remote_branches" ]; then
        echo "✅ No remote branches to process"
        exit 0
    fi
    
    echo "Found branches to process:"
    echo "$remote_branches"
    
    merged_count=0
    conflict_count=0
    
    # Process each branch
    for branch in $remote_branches; do
        echo ""
        echo "🔄 Processing branch: $branch"
        
        # Checkout the branch
        if ! run_git "checkout $branch" "Checking out $branch"; then
            echo "⚠️  Could not checkout $branch, skipping..."
            continue
        fi
        
        # Try to merge main into the branch
        if run_git "merge main --no-ff -m 'Merge main into $branch'" "Merging main into $branch"; then
            echo "✅ Successfully merged main into $branch"
        else
            echo "⚠️  Merge conflicts detected in $branch"
            conflict_count=$((conflict_count + 1))
            
            # Get list of conflicted files
            conflict_files=$(git diff --name-only --diff-filter=U)
            
            if [ -n "$conflict_files" ]; then
                echo "🔧 Resolving conflicts in $conflict_count files..."
                
                # Resolve each conflicted file
                for file in $conflict_files; do
                    resolve_conflicts "$file"
                done
                
                # Commit the resolved conflicts
                if run_git "commit -m 'Resolve merge conflicts in $branch'" "Committing resolved conflicts"; then
                    echo "✅ Successfully resolved conflicts in $branch"
                else
                    echo "❌ Failed to commit resolved conflicts in $branch"
                    run_git "merge --abort" "Aborting merge"
                    continue
                fi
            else
                echo "❌ No conflict files found, aborting merge"
                run_git "merge --abort" "Aborting merge"
                continue
            fi
        fi
        
        # Push the updated branch
        run_git "push origin $branch" "Pushing updated $branch"
        
        # Switch back to main and merge
        run_git "checkout main" "Switching back to main"
        run_git "merge $branch --no-ff -m 'Merge $branch into main'" "Merging $branch into main"
        run_git "push origin main" "Pushing updated main"
        
        merged_count=$((merged_count + 1))
        echo "✅ Successfully merged $branch into main"
        
        # Delete the remote branch
        if run_git "push origin --delete $branch" "Deleting remote branch $branch"; then
            echo "🗑️  Deleted remote branch $branch"
        else
            echo "⚠️  Could not delete remote branch $branch"
        fi
    done
    
    echo ""
    echo "🎉 Process completed!"
    echo "✅ Successfully merged: $merged_count branches"
    echo "⚠️  Conflicts resolved: $conflict_count branches"
}

# Run the main process
main "$@"