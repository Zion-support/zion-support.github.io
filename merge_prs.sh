#!/bin/bash

# Script to merge open PRs into main branch
set -e

echo "Starting PR merge process..."

# GitHub API configuration
GITHUB_TOKEN="ghs_tukMr3CyP2oHSXPRFscExJmUauEJUi4HAU1a"
REPO="Zion-Holdings/zion.app"
BASE_URL="https://api.github.com/repos/$REPO"

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    echo "Merging PR #$pr_number..."
    
    # Check if PR can be merged
    response=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
        "$BASE_URL/pulls/$pr_number")
    
    mergeable=$(echo "$response" | grep '"mergeable"' | cut -d':' -f2 | tr -d ' ,')
    draft=$(echo "$response" | grep '"draft"' | cut -d':' -f2 | tr -d ' ,')
    
    echo "PR #$pr_number - mergeable: $mergeable, draft: $draft"
    
    if [ "$mergeable" = "true" ] && [ "$draft" = "false" ]; then
        # Merge the PR
        merge_response=$(curl -s -X PUT \
            -H "Authorization: token $GITHUB_TOKEN" \
            -H "Content-Type: application/json" \
            -d '{"merge_method": "squash"}' \
            "$BASE_URL/pulls/$pr_number/merge")
        
        echo "Merge response for PR #$pr_number: $merge_response"
    else
        echo "PR #$pr_number cannot be merged or is still a draft"
    fi
}

# Merge PR #25061
merge_pr 25061

# Merge PR #25062  
merge_pr 25062

echo "PR merge process completed"