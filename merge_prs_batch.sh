#!/bin/bash

# Script to merge PRs in batches, resolving conflicts automatically
# This script processes PRs one by one and resolves conflicts by keeping main branch version

echo "Starting batch PR merge process..."

# List of PR numbers to merge (most recent first)
PR_NUMBERS=(17319 17318 17317 17316 17315 17314 17311 17309 17305 17303 17301 17299 17271 17265 17264 17263 17262 17261 17260 17259 17258 17256 17249 17248)

# Function to merge a single PR with conflict resolution
merge_pr_with_resolution() {
    local pr_number=$1
    local branch_name="pr-$pr_number"
    
    echo "Processing PR #$pr_number..."
    
    # Fetch the PR branch
    git fetch origin pull/$pr_number/head:$branch_name
    
    if [ $? -ne 0 ]; then
        echo "Failed to fetch PR #$pr_number, skipping..."
        return 1
    fi
    
    # Try to merge the PR
    echo "Attempting to merge PR #$pr_number..."
    git merge $branch_name --no-ff -m "Merge PR #$pr_number: Create and deploy new content"
    
    if [ $? -eq 0 ]; then
        echo "Successfully merged PR #$pr_number"
        git branch -d $branch_name
        return 0
    else
        echo "Merge conflict in PR #$pr_number, resolving conflicts..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts for PR #$pr_number by keeping main branch version..."
            
            # Resolve conflicts by keeping our version (main branch)
            git checkout --ours .
            git add .
            git commit -m "Merge PR #$pr_number: Resolved conflicts by keeping main branch version"
            
            if [ $? -eq 0 ]; then
                echo "Successfully resolved conflicts for PR #$pr_number"
                git branch -d $branch_name
                return 0
            else
                echo "Failed to resolve conflicts for PR #$pr_number, skipping..."
                git merge --abort
                git branch -d $branch_name
                return 1
            fi
        else
            echo "No conflicts detected, but merge failed for PR #$pr_number, skipping..."
            git merge --abort
            git branch -d $branch_name
            return 1
        fi
    fi
}

# Process each PR
successful_merges=0
failed_merges=0

for pr in "${PR_NUMBERS[@]}"; do
    echo "=== Processing PR #$pr ==="
    if merge_pr_with_resolution $pr; then
        ((successful_merges++))
        echo "✅ Successfully merged PR #$pr"
    else
        ((failed_merges++))
        echo "❌ Failed to merge PR #$pr"
    fi
    echo ""
done

echo "=== Batch merge process completed! ==="
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"

# Push all changes to main
echo "Pushing changes to main branch..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed all changes to main branch"
else
    echo "❌ Failed to push changes to main branch"
    exit 1
fi