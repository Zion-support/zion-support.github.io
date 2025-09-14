#!/bin/bash

# Script to merge all open PRs
echo "Starting to merge all open PRs..."

# Get all open PR numbers
PR_NUMBERS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep '"number"' | sed 's/.*"number": \([0-9]*\).*/\1/' | sort -n)

echo "Found PRs: $PR_NUMBERS"

# Merge each PR
for pr in $PR_NUMBERS; do
    echo "Merging PR #$pr..."
    
    # Try to merge the PR
    response=$(curl -s -X PUT \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr/merge" \
        -d "{\"commit_title\":\"Merge PR #$pr: Create and deploy new content\",\"merge_method\":\"merge\"}")
    
    echo "Response for PR #$pr: $response"
    
    # Check if merge was successful
    if echo "$response" | grep -q '"merged":true'; then
        echo "✅ Successfully merged PR #$pr"
    else
        echo "❌ Failed to merge PR #$pr"
        echo "Response: $response"
    fi
    
    echo "---"
done

echo "Finished merging all PRs"