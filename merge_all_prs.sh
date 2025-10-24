#!/bin/bash

# Script to merge all open PRs with conflicts
echo "Starting PR merge process..."

# List of PRs with conflicts (from the earlier output)
conflicting_prs=(
    "33410:cursor/undefined-awde-task-3217"
    "33409:cursor/undefined-awde-task-f7f0"
    "33407:cursor/undefined-awde-task-1140"
    "33405:cursor/undefined-awde-task-d518"
    "33404:cursor/swdr-background-task-9835"
    "33403:cursor/undefined-awde-task-b171"
    "33402:cursor/swdr-background-task-a762"
    "33401:cursor/swdr-background-task-5bf5"
)

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    local branch_name=$2
    
    echo "Processing PR #$pr_number ($branch_name)..."
    
    # Fetch the branch
    git fetch origin "$branch_name"
    
    # Checkout the branch
    git checkout "$branch_name"
    
    # Merge with main
    if git merge main; then
        echo "Successfully merged $branch_name with main"
        
        # Force push the updated branch
        git push origin "$branch_name" --force
        
        # Switch back to main
        git checkout main
        
        # Merge the branch into main
        if git merge "$branch_name"; then
            echo "Successfully merged $branch_name into main"
            
            # Push main
            git push origin main
            
            echo "PR #$pr_number ($branch_name) processed successfully"
        else
            echo "Failed to merge $branch_name into main"
        fi
    else
        echo "Failed to merge main into $branch_name"
    fi
}

# Process each PR
for pr_info in "${conflicting_prs[@]}"; do
    IFS=':' read -r pr_number branch_name <<< "$pr_info"
    merge_pr "$pr_number" "$branch_name"
    echo "---"
done

echo "PR merge process completed!"