#!/bin/bash

# Script to merge all open PRs systematically
set -e

echo "Starting systematic merge of all open PRs..."

# Get all open PRs
PRS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | jq -r '.[] | "\(.number):\(.head.ref)"')

echo "Found PRs to process:"
echo "$PRS"

# Counter for tracking
count=0
success_count=0
error_count=0

# Process each PR
while IFS= read -r line; do
    if [ -z "$line" ]; then
        continue
    fi
    
    pr_number=$(echo "$line" | cut -d: -f1)
    branch_name=$(echo "$line" | cut -d: -f2)
    
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
    
    # Safety check - don't process too many at once
    if [ $count -ge 10 ]; then
        echo "  ⚠️  Processed 10 PRs, stopping for safety. Run again to continue."
        break
    fi
    
done <<< "$PRS"

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