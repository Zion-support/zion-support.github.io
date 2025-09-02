#!/bin/bash

# Script to merge all open PRs into main branch
# This script will handle merge conflicts systematically

set -e

echo "Starting PR merge process..."

# Function to extract PR numbers from open_prs.json
extract_pr_numbers() {
    grep -o '"number": [0-9]*' open_prs.json | grep -o '[0-9]*' | sort -n
}

# Function to merge a single PR
merge_pr() {
    local pr_number=$1
    echo "Processing PR #$pr_number..."
    
    # Fetch the PR branch
    git fetch origin "pull/$pr_number/head:pr-$pr_number" || {
        echo "Failed to fetch PR #$pr_number, skipping..."
        return 1
    }
    
    # Checkout the PR branch
    git checkout "pr-$pr_number" || {
        echo "Failed to checkout PR #$pr_number, skipping..."
        return 1
    }
    
    # Try to merge into main
    git checkout main
    if git merge "pr-$pr_number" --no-ff -m "Merge PR #$pr_number"; then
        echo "Successfully merged PR #$pr_number"
        # Clean up the PR branch
        git branch -D "pr-$pr_number"
        return 0
    else
        echo "Merge conflict in PR #$pr_number, attempting to resolve..."
        
        # Try to resolve conflicts automatically
        if resolve_conflicts; then
            git add .
            git commit -m "Resolve merge conflicts in PR #$pr_number"
            echo "Successfully resolved conflicts for PR #$pr_number"
            git branch -D "pr-$pr_number"
            return 0
        else
            echo "Failed to resolve conflicts for PR #$pr_number, skipping..."
            git merge --abort
            git branch -D "pr-$pr_number"
            return 1
        fi
    fi
}

# Function to resolve merge conflicts
resolve_conflicts() {
    # Check for common conflict patterns and resolve them
    local resolved=false
    
    # Resolve package.json conflicts
    if [ -f "package.json" ] && grep -q "        echo "Resolving package.json conflicts..."
        # Use a simple strategy: keep the main branch version for most conflicts
        sed -i '/    fi
    
    # Resolve other common file conflicts
    for file in $(git diff --name-only --diff-filter=U); do
        if [ -f "$file" ]; then
            echo "Resolving conflicts in $file..."
            # Simple conflict resolution: keep the main branch version
            git checkout --ours "$file"
            resolved=true
        fi
    done
    
    return 0
}

# Main execution
main() {
    echo "Extracting PR numbers..."
    pr_numbers=$(extract_pr_numbers)
    
    if [ -z "$pr_numbers" ]; then
        echo "No PR numbers found in open_prs.json"
        exit 1
    fi
    
    echo "Found PRs: $pr_numbers"
    
    # Process each PR
    for pr_number in $pr_numbers; do
        echo "Processing PR #$pr_number..."
        if merge_pr "$pr_number"; then
            echo "✅ Successfully processed PR #$pr_number"
        else
            echo "❌ Failed to process PR #$pr_number"
        fi
        echo "---"
    done
    
    echo "PR merge process completed!"
    echo "Pushing changes to main branch..."
    git push origin main
}

# Run the main function
main "$@"