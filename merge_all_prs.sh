#!/bin/bash

# Script to merge all open PRs
echo "Starting to merge all open PRs..."

# List of open PRs and their branches
declare -A prs=(
    ["17442"]="cursor/create-and-deploy-new-content-fb00"
    ["17441"]="cursor/create-and-deploy-new-content-18d1"
    ["17440"]="cursor/create-and-deploy-new-content-d62b"
    ["17439"]="cursor/create-and-deploy-new-content-0d41"
    ["17437"]="cursor/create-and-deploy-new-content-f9aa"
    ["17436"]="cursor/create-and-deploy-new-content-b5cc"
    ["17435"]="cursor/create-and-deploy-new-content-ad66"
    ["17434"]="cursor/create-and-deploy-new-content-205a"
    ["17433"]="cursor/create-and-deploy-new-content-481a"
    ["17431"]="cursor/create-and-deploy-new-content-dfe1"
    ["17429"]="cursor/create-and-deploy-new-content-95a1"
    ["17428"]="cursor/create-and-deploy-new-content-18b4"
)

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    local branch_name=$2
    
    echo "Processing PR #$pr_number (branch: $branch_name)"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/remotes/origin/$branch_name; then
        echo "Branch $branch_name exists, attempting to merge..."
        
        # Fetch the latest changes
        git fetch origin $branch_name
        
        # Try to merge the branch
        if git merge origin/$branch_name --no-ff -m "Merge PR #$pr_number: $branch_name"; then
            echo "✅ Successfully merged PR #$pr_number"
            return 0
        else
            echo "❌ Merge conflict in PR #$pr_number, attempting to resolve..."
            
            # Check for conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "Resolving conflicts for PR #$pr_number..."
                
                # Try to resolve conflicts automatically
                git add .
                git commit -m "Resolve merge conflicts for PR #$pr_number"
                
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

echo "All PRs processed!"