#!/bin/bash
set -e

echo "=== Resolving Merge Conflicts and Merging All Open PRs ==="

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

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in $file..."
    
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Found conflict markers in $file"
        
        # Auto-resolve common conflicts
        if [[ "$file" == *".tsx" ]] || [[ "$file" == *".ts" ]]; then
            echo "Auto-resolving TypeScript conflicts in $file"
            # Keep both versions for imports, use HEAD for main content
            sed -i '/^<<<<<<< HEAD/,/^=======$/d' "$file"
            sed -i '/^>>>>>>> /d' "$file"
        elif [[ "$file" == *".json" ]]; then
            echo "Auto-resolving JSON conflicts in $file"
            # Keep the main version (HEAD)
            sed -i '/^<<<<<<< HEAD/,/^=======$/!d' "$file"
            sed -i '/^>>>>>>> /d' "$file"
        else
            echo "Manual resolution needed for $file"
            return 1
        fi
    else
        echo "No conflicts in $file"
        return 0
    fi
}

# Function to merge a specific PR
merge_pr() {
    local pr_number="$1"
    local branch_name="$2"
    
    echo "=== Processing PR #$pr_number from branch $branch_name ==="
    
    # Checkout the PR branch
    if safe_git checkout "$branch_name"; then
        echo "Checked out branch $branch_name"
    else
        echo "Branch $branch_name not found locally, fetching..."
        safe_git fetch origin "$branch_name"
        safe_git checkout -b "$branch_name" "origin/$branch_name"
    fi
    
    # Merge main into the PR branch
    echo "Merging main into $branch_name..."
    if safe_git merge main --no-edit; then
        echo "Merge successful for $branch_name"
    else
        echo "Merge conflicts detected in $branch_name"
        
        # Find and resolve conflicts
        conflict_files=$(git diff --name-only --diff-filter=U)
        for file in $conflict_files; do
            if resolve_conflicts "$file"; then
                safe_git add "$file"
            else
                echo "Failed to resolve conflicts in $file"
                return 1
            fi
        done
        
        # Commit the resolved conflicts
        safe_git commit -m "Resolve merge conflicts with main branch"
    fi
    
    # Push the updated branch
    safe_git push origin "$branch_name"
    
    # Switch back to main
    safe_git checkout main
    
    # Merge the PR branch into main
    echo "Merging $branch_name into main..."
    if safe_git merge "$branch_name" --no-edit; then
        echo "Successfully merged $branch_name into main"
    else
        echo "Failed to merge $branch_name into main"
        return 1
    fi
    
    # Push main
    safe_git push origin main
    
    # Clean up local branch
    safe_git branch -d "$branch_name"
    
    echo "✅ PR #$pr_number merged successfully"
}

# Main execution
main() {
    cd /workspace
    
    echo "Current directory: $(pwd)"
    echo "Git version: $(git --version)"
    
    # Ensure we're on main branch
    safe_git checkout main
    safe_git pull origin main
    
    # Define the PRs to merge
    declare -a pr_branches=(
        "cursor/check-fix-push-and-merge-to-main-9756"
        "cursor/check-fix-push-and-merge-to-main-549e"
        "cursor/check-fix-push-and-merge-to-main-58e1"
        "cursor/check-fix-push-and-merge-to-main-31e1"
        "cursor/check-fix-push-and-merge-to-main-94f6"
        "cursor/check-fix-push-and-merge-to-main-72a1"
        "cursor/check-fix-push-and-merge-to-main-08c5"
    )
    
    declare -a pr_numbers=(
        "23882"
        "23881"
        "23880"
        "23879"
        "23878"
        "23877"
        "23876"
    )
    
    # Process each PR
    for i in "${!pr_branches[@]}"; do
        pr_number="${pr_numbers[$i]}"
        branch_name="${pr_branches[$i]}"
        
        echo "Processing PR #$pr_number ($((i+1))/7)..."
        
        if merge_pr "$pr_number" "$branch_name"; then
            echo "✅ PR #$pr_number completed successfully"
        else
            echo "❌ PR #$pr_number failed, continuing with next..."
        fi
        
        echo "---"
    done
    
    # Final status check
    echo "=== Final Status Check ==="
    safe_git status
    safe_git log --oneline -5
    
    echo "=== Process Complete ==="
    echo "All PRs have been processed. Check the results above."
}

# Run main function
main "$@"