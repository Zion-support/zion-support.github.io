#!/bin/bash

echo "🔍 Starting PR merge process..."

# Set up variables
GITHUB_TOKEN="ghs_2CijlF4cOrlTIwzwz3nvWrTnWL9uZC0Q24TL"
REPO="Zion-Holdings/zion.app"

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    local pr_title=$2
    
    echo "🔄 Attempting to merge PR #$pr_number: $pr_title"
    
    response=$(curl -s -X PUT \
        -H "Authorization: token $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/$REPO/pulls/$pr_number/merge" \
        -d "{\"commit_title\":\"Merge PR #$pr_number: $pr_title\",\"merge_method\":\"merge\"}")
    
    if echo "$response" | grep -q '"merged":true'; then
        echo "✅ Successfully merged PR #$pr_number"
        return 0
    else
        echo "❌ Failed to merge PR #$pr_number"
        echo "Response: $response"
        return 1
    fi
}

# Try to merge the known PRs
echo "🔄 Merging PR #12994..."
merge_pr "12994" "Fix netlify build and merge to main"

echo "🔄 Merging PR #12993..."  
merge_pr "12993" "Check, fix, push, and merge to main"

echo "🎉 PR merge process completed"