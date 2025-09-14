#!/bin/bash

echo "Starting to process all open PRs..."

# Get all open PR numbers
PR_NUMBERS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep '"number":' | sed 's/.*"number": \([0-9]*\).*/\1/' | sort -n)

echo "Found $(echo $PR_NUMBERS | wc -w) open PRs"

for pr in $PR_NUMBERS; do
    echo "Processing PR #$pr..."
    
    # Check if PR can be merged
    MERGEABLE=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr" | grep '"mergeable":' | sed 's/.*"mergeable": \([^,]*\).*/\1/')
    
    if [ "$MERGEABLE" = "true" ]; then
        echo "PR #$pr is mergeable, attempting to merge..."
        
        # Try to merge the PR
        RESPONSE=$(curl -s -X PUT \
            -H "Accept: application/vnd.github.v3+json" \
            -H "Authorization: token $GITHUB_TOKEN" \
            "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr/merge" \
            -d '{"commit_title":"Merge PR #'$pr'","commit_message":"Automated merge of PR #'$pr'","merge_method":"merge"}')
        
        if echo "$RESPONSE" | grep -q '"merged": true'; then
            echo "✅ Successfully merged PR #$pr"
        else
            echo "❌ Failed to merge PR #$pr"
            echo "Response: $RESPONSE"
        fi
    elif [ "$MERGEABLE" = "false" ]; then
        echo "⚠️  PR #$pr has conflicts, skipping..."
    else
        echo "❓ PR #$pr mergeable status unknown: $MERGEABLE"
    fi
    
    echo "---"
done

echo "Completed processing all PRs"