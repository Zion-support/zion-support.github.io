#!/bin/bash

# Simple script to merge PRs without jq dependency
set -e

echo "Starting to merge open PRs..."

# Get the most recent PRs (first 10)
echo "Fetching recent PRs..."
PR_DATA=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=10")

# Extract PR numbers and branch names using grep and sed
PR_NUMBERS=$(echo "$PR_DATA" | grep -o '"number":[0-9]*' | grep -o '[0-9]*')
BRANCH_NAMES=$(echo "$PR_DATA" | grep -o '"ref":"[^"]*"' | grep -o 'cursor/fix-errors-and-merge-to-main-[^"]*')

echo "Found PRs to process:"
echo "$PR_NUMBERS"

# Convert to arrays
PR_ARRAY=($PR_NUMBERS)
BRANCH_ARRAY=($BRANCH_NAMES)

count=0
success_count=0
error_count=0

# Process each PR
for i in "${!PR_ARRAY[@]}"; do
    pr_number="${PR_ARRAY[$i]}"
    branch_name="${BRANCH_ARRAY[$i]}"
    
    echo ""
    echo "Processing PR #$pr_number (branch: $branch_name)..."
    
    # Check if branch exists
    if git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
        echo "  ✓ Branch $branch_name exists"
        
        # Try to merge the branch
        if git merge "origin/$branch_name" --no-edit; then
            echo "  ✓ Successfully merged $branch_name"
            success_count=$((success_count + 1))
        else
            echo "  ✗ Failed to merge $branch_name (conflicts or other issues)"
            error_count=$((error_count + 1))
            
            # Reset merge state
            git merge --abort 2>/dev/null || true
        fi
    else
        echo "  ✗ Branch $branch_name does not exist locally"
        error_count=$((error_count + 1))
    fi
    
    count=$((count + 1))
done

echo ""
echo "Summary:"
echo "  Total processed: $count"
echo "  Successful merges: $success_count"
echo "  Errors: $error_count"

# Push changes if any were made
if [ $success_count -gt 0 ]; then
    echo ""
    echo "Pushing merged changes to main..."
    git push origin main
    echo "✓ Changes pushed to main"
fi