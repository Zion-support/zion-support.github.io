#!/bin/bash

# Script to merge all open PRs
set -e

echo "Starting PR merge process..."

# Get list of open PRs
echo "Fetching open PRs..."
PR_LIST=$(curl -s -H "Authorization: token ghs_4LcAR4FTBEhAiOYRnPXoSuaRLCzJ7C0MjVco" -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=50" | grep -o '"number": [0-9]*' | grep -o '[0-9]*')

echo "Found PRs: $PR_LIST"

# Process each PR
for pr_number in $PR_LIST; do
    echo "Processing PR #$pr_number..."
    
    # Get PR details
    PR_DETAILS=$(curl -s -H "Authorization: token ghs_4LcAR4FTBEhAiOYRnPXoSuaRLCzJ7C0MjVco" -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    
    # Extract title and mergeable state
    TITLE=$(echo "$PR_DETAILS" | grep -o '"title": "[^"]*"' | cut -d'"' -f4)
    MERGEABLE=$(echo "$PR_DETAILS" | grep -o '"mergeable": [^,]*' | cut -d' ' -f2)
    
    echo "PR #$pr_number: $TITLE (mergeable: $MERGEABLE)"
    
    # Try to merge if mergeable
    if [ "$MERGEABLE" = "true" ]; then
        echo "Attempting to merge PR #$pr_number..."
        MERGE_RESULT=$(curl -s -X POST -H "Authorization: token ghs_4LcAR4FTBEhAiOYRnPXoSuaRLCzJ7C0MjVco" -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number/merge" -d "{\"commit_title\":\"Merge PR #$pr_number\",\"commit_message\":\"Automated merge: $TITLE\",\"merge_method\":\"merge\"}")
        
        if echo "$MERGE_RESULT" | grep -q '"merged": true'; then
            echo "✅ Successfully merged PR #$pr_number"
        else
            echo "❌ Failed to merge PR #$pr_number"
            echo "Response: $MERGE_RESULT"
        fi
    else
        echo "⏭️  Skipping PR #$pr_number (not mergeable: $MERGEABLE)"
    fi
    
    echo "---"
    sleep 2
done

echo "PR merge process completed!"