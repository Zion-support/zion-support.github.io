#!/bin/bash

# Script to merge all open PRs into main branch
echo "🔍 Checking open PRs and merging them..."

# Get the list of open PRs
OPEN_PRS=$(curl -s -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open | grep -o '"number": [0-9]*' | grep -o '[0-9]*')

echo "Found open PRs: $OPEN_PRS"

# Merge each PR
for pr_number in $OPEN_PRS; do
    echo "🔄 Processing PR #$pr_number..."
    
    # Get PR details
    PR_DETAILS=$(curl -s -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number)
    PR_TITLE=$(echo "$PR_DETAILS" | grep -o '"title": "[^"]*"' | cut -d'"' -f4)
    PR_HEAD_REF=$(echo "$PR_DETAILS" | grep -o '"head": {"ref": "[^"]*"' | cut -d'"' -f6)
    
    echo "  Title: $PR_TITLE"
    echo "  Branch: $PR_HEAD_REF"
    
    # Check if PR is mergeable
    MERGEABLE=$(echo "$PR_DETAILS" | grep -o '"mergeable": [^,]*' | cut -d' ' -f2)
    
    if [ "$MERGEABLE" = "true" ]; then
        echo "  ✅ PR is mergeable, attempting to merge..."
        
        # Merge the PR
        MERGE_RESPONSE=$(curl -s -X PUT \
            -H "Accept: application/vnd.github.v3+json" \
            -H "Content-Type: application/json" \
            -d '{
                "commit_title": "Merge PR #'$pr_number': '$PR_TITLE'",
                "commit_message": "Automated merge of PR #'$pr_number'",
                "merge_method": "merge"
            }' \
            https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number/merge)
        
        # Check if merge was successful
        if echo "$MERGE_RESPONSE" | grep -q '"merged": true'; then
            echo "  ✅ Successfully merged PR #$pr_number"
        else
            echo "  ❌ Failed to merge PR #$pr_number"
            echo "  Response: $MERGE_RESPONSE"
        fi
    else
        echo "  ⚠️  PR is not mergeable (may have conflicts)"
        
        # Try to merge anyway (sometimes the API shows false but it's actually mergeable)
        echo "  🔄 Attempting merge anyway..."
        MERGE_RESPONSE=$(curl -s -X PUT \
            -H "Accept: application/vnd.github.v3+json" \
            -H "Content-Type: application/json" \
            -d '{
                "commit_title": "Merge PR #'$pr_number': '$PR_TITLE'",
                "commit_message": "Automated merge of PR #'$pr_number'",
                "merge_method": "merge"
            }' \
            https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number/merge)
        
        if echo "$MERGE_RESPONSE" | grep -q '"merged": true'; then
            echo "  ✅ Successfully merged PR #$pr_number"
        else
            echo "  ❌ Failed to merge PR #$pr_number"
            echo "  Response: $MERGE_RESPONSE"
        fi
    fi
    
    echo ""
done

echo "🎉 Finished processing all open PRs!"