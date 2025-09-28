#!/bin/bash

# Script to merge PRs using GitHub API
set -e

echo "🚀 Starting PR merge process using GitHub API..."

# GitHub API token
TOKEN="${GITHUB_TOKEN}"
REPO="Zion-Holdings/zion.app"

# PRs to merge (from API response)
PRS=("23646" "23639" "23635")

for pr in "${PRS[@]}"; do
    echo "🔄 Processing PR #$pr..."
    
    # First, check if PR is mergeable
    MERGEABLE=$(curl -s -H "Authorization: token $TOKEN" \
        "https://api.github.com/repos/$REPO/pulls/$pr" | \
        grep -o '"mergeable":[^,]*' | cut -d':' -f2 | tr -d '" ')
    
    echo "PR #$pr mergeable status: $MERGEABLE"
    
    if [ "$MERGEABLE" = "true" ]; then
        # Merge the PR
        echo "Merging PR #$pr..."
        RESPONSE=$(curl -s -X PUT \
            -H "Authorization: token $TOKEN" \
            -H "Accept: application/vnd.github.v3+json" \
            "https://api.github.com/repos/$REPO/pulls/$pr/merge" \
            -d '{
                "commit_title": "Merge PR #'$pr' - Fix Netlify build",
                "commit_message": "Automated merge of PR #'$pr' to resolve Netlify build issues",
                "merge_method": "merge"
            }')
        
        # Check if merge was successful
        MERGED=$(echo "$RESPONSE" | grep -o '"merged":[^,]*' | cut -d':' -f2 | tr -d '" ')
        
        if [ "$MERGED" = "true" ]; then
            echo "✅ Successfully merged PR #$pr"
        else
            echo "❌ Failed to merge PR #$pr"
            echo "Response: $RESPONSE"
        fi
    else
        echo "⚠️  PR #$pr is not mergeable, skipping..."
    fi
    
    echo ""
done

echo "🎉 PR merge process completed!"