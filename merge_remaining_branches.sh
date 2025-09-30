#!/bin/bash
set -e

echo "=== Merging Remaining Available Branches ==="

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

# Function to merge a specific branch
merge_branch() {
    local branch_name="$1"
    
    echo "=== Processing branch $branch_name ==="
    
    # Fetch the branch
    safe_git fetch origin "$branch_name"
    
    # Merge the branch into main
    echo "Merging $branch_name into main..."
    if safe_git merge "origin/$branch_name" --no-edit; then
        echo "Successfully merged $branch_name into main"
        safe_git push origin main
        echo "✅ Branch $branch_name merged successfully"
    else
        echo "❌ Failed to merge $branch_name"
        return 1
    fi
}

# Main execution
main() {
    cd /workspace
    
    # Ensure we're on main branch
    safe_git checkout main
    safe_git pull origin main
    
    # Define the branches that still exist
    declare -a existing_branches=(
        "cursor/check-fix-push-and-merge-to-main-549e"
        "cursor/check-fix-push-and-merge-to-main-58e1"
        "cursor/create-and-deploy-new-content-08c5"
        "cursor/create-and-deploy-new-content-94f6"
        "cursor/enhance-app-with-new-services-and-futuristic-design-9756"
        "cursor/fix-netlify-build-and-merge-to-main-549e"
    )
    
    # Process each branch
    for branch_name in "${existing_branches[@]}"; do
        echo "Processing branch: $branch_name"
        
        if merge_branch "$branch_name"; then
            echo "✅ Branch $branch_name completed successfully"
        else
            echo "❌ Branch $branch_name failed, continuing with next..."
        fi
        
        echo "---"
    done
    
    # Final status check
    echo "=== Final Status Check ==="
    safe_git status
    safe_git log --oneline -5
    
    echo "=== Process Complete ==="
}

# Run main function
main "$@"