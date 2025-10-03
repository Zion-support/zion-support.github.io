#!/bin/bash

# Script to merge open PRs
echo "Starting PR merge process..."

# Set GitHub token (if available)
if [ -z "$GITHUB_TOKEN" ]; then
    echo "Warning: GITHUB_TOKEN not set. Using public API."
fi

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    local pr_title=$2
    
    echo "Attempting to merge PR #$pr_number: $pr_title"
    
    # Try to merge using GitHub API
    response=$(curl -s -X PUT \
        -H "Accept: application/vnd.github.v3+json" \
        -H "Authorization: token $GITHUB_TOKEN" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number/merge" \
        -d '{"commit_title":"Merge PR #'$pr_number': '$pr_title'","merge_method":"merge"}')
    
    echo "Response: $response"
    
    # Check if merge was successful
    if echo "$response" | grep -q '"merged":true'; then
        echo "✅ Successfully merged PR #$pr_number"
        return 0
    else
        echo "❌ Failed to merge PR #$pr_number"
        echo "Error details: $response"
        return 1
    fi
}

# Merge PR #24750: Fix web vitals import error during build
merge_pr 24750 "Fix web vitals import error during build"

# Merge PR #24749: Fix errors and merge to main
merge_pr 24749 "Fix errors and merge to main"

echo "PR merge process completed."