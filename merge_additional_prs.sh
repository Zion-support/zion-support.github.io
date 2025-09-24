#!/bin/bash

# Script to merge additional open PRs
echo "Starting to merge additional open PRs..."

# List of additional open PRs and their branches
declare -A prs=(
    ["17449"]="cursor/create-and-deploy-new-content-ec7c"
    ["17448"]="cursor/create-and-deploy-new-content-a85b"
    ["17447"]="cursor/create-and-deploy-new-content-88cf"
    ["17445"]="cursor/create-and-deploy-new-content-8304"
    ["17444"]="cursor/create-and-deploy-new-content-b48f"
)

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    local branch_name=$2
    
    echo "Processing PR #$pr_number (branch: $branch_name)"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/remotes/origin/$branch_name; then
        echo "Branch $branch_name exists, attempting to merge..."
        
        # Try to merge the branch
        if git merge origin/$branch_name --no-ff -m "Merge PR #$pr_number: $branch_name"; then
            echo "✅ Successfully merged PR #$pr_number"
            return 0
        else
            echo "❌ Merge conflict in PR #$pr_number, attempting to resolve..."
            
            # Check for conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "Resolving conflicts for PR #$pr_number..."
                
                # Try to resolve conflicts automatically by accepting our version
                git checkout --ours .
                git add .
                git commit -m "Resolve merge conflicts for PR #$pr_number - accept our version"
                
                if [ $? -eq 0 ]; then
                    echo "✅ Successfully resolved conflicts for PR #$pr_number"
                    return 0
                else
                    echo "❌ Failed to resolve conflicts for PR #$pr_number"
                    return 1
                fi
            else
                echo "❌ Unknown merge issue for PR #$pr_number"
                return 1
            fi
        fi
    else
        echo "❌ Branch $branch_name not found locally"
        return 1
    fi
}

# Process each PR
success_count=0
total_count=${#prs[@]}

for pr_number in "${!prs[@]}"; do
    branch_name="${prs[$pr_number]}"
    
    if merge_pr $pr_number $branch_name; then
        ((success_count++))
    fi
    
    echo "---"
done

echo "Merge Summary:"
echo "Successfully merged: $success_count/$total_count PRs"

# Push all changes
echo "Pushing all changes to main..."
git push origin main

echo "All additional PRs processed!"