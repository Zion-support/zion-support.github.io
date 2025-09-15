#!/bin/bash

# Script to merge all open PRs using GitHub API
echo "Starting to merge all open PRs using GitHub API..."

# List of open PRs
prs=(17442 17441 17440 17439 17437 17436 17435 17434 17433 17431 17429 17428)

# Function to merge a PR via API
merge_pr_api() {
    local pr_number=$1
    
    echo "Processing PR #$pr_number via API..."
    
    # Try to merge the PR
    response=$(curl -s -X PUT \
        -H "Accept: application/vnd.github.v3+json" \
        -H "Authorization: token $GITHUB_TOKEN" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number/merge" \
        -d '{"commit_title":"Merge PR #'$pr_number'","merge_method":"merge"}')
    
    # Check if merge was successful
    if echo "$response" | grep -q '"merged": true'; then
        echo "✅ Successfully merged PR #$pr_number"
        return 0
    elif echo "$response" | grep -q '"message": "Pull Request is not mergeable"'; then
        echo "❌ PR #$pr_number is not mergeable (conflicts)"
        return 1
    elif echo "$response" | grep -q '"message": "Pull Request is already merged"'; then
        echo "✅ PR #$pr_number is already merged"
        return 0
    else
        echo "❌ Failed to merge PR #$pr_number"
        echo "Response: $response"
        return 1
    fi
}

# Check if GitHub token is available
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ GITHUB_TOKEN environment variable is not set"
    echo "Please set your GitHub token: export GITHUB_TOKEN=your_token_here"
    exit 1
fi

# Process each PR
success_count=0
total_count=${#prs[@]}

for pr_number in "${prs[@]}"; do
    if merge_pr_api $pr_number; then
        ((success_count++))
    fi
    echo "---"
done

echo "Merge Summary:"
echo "Successfully merged: $success_count/$total_count PRs"

echo "All PRs processed!"