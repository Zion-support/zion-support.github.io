#!/bin/bash

# Script to merge all open PRs into main branch
# Using GitHub REST API

REPO="Zion-Holdings/zion.app"
BASE_URL="https://api.github.com/repos/$REPO"

echo "🚀 Starting to merge all open PRs..."

# Get all open PRs
echo "📋 Fetching open PRs..."
OPEN_PRS=$(curl -s "$BASE_URL/pulls?state=open&per_page=100" | grep '"number"' | sed 's/.*"number": \([0-9]*\).*/\1/' | sort -n)

if [ -z "$OPEN_PRS" ]; then
    echo "✅ No open PRs found!"
    exit 0
fi

echo "Found open PRs: $OPEN_PRS"

# Merge each PR
for PR_NUMBER in $OPEN_PRS; do
    echo ""
    echo "🔄 Processing PR #$PR_NUMBER..."
    
    # Get PR details
    PR_DATA=$(curl -s "$BASE_URL/pulls/$PR_NUMBER")
    PR_TITLE=$(echo "$PR_DATA" | grep '"title"' | head -1 | sed 's/.*"title": "\(.*\)".*/\1/')
    PR_HEAD_REF=$(echo "$PR_DATA" | grep '"head"' | grep '"ref"' | sed 's/.*"ref": "\(.*\)".*/\1/')
    
    echo "  Title: $PR_TITLE"
    echo "  Branch: $PR_HEAD_REF"
    
    # Check if PR can be merged
    MERGEABLE=$(echo "$PR_DATA" | grep '"mergeable"' | sed 's/.*"mergeable": \(.*\).*/\1/')
    
    if [ "$MERGEABLE" = "true" ]; then
        echo "  ✅ PR is mergeable"
        
        # Merge the PR
        MERGE_RESPONSE=$(curl -s -X PUT "$BASE_URL/pulls/$PR_NUMBER/merge" \
            -H "Accept: application/vnd.github.v3+json" \
            -d '{
                "commit_title": "Merge PR #'$PR_NUMBER': '$PR_TITLE'",
                "commit_message": "Automated merge of PR #'$PR_NUMBER'",
                "merge_method": "merge"
            }')
        
        MERGED=$(echo "$MERGE_RESPONSE" | grep '"merged"' | sed 's/.*"merged": \(.*\).*/\1/')
        
        if [ "$MERGED" = "true" ]; then
            echo "  ✅ Successfully merged PR #$PR_NUMBER"
        else
            echo "  ❌ Failed to merge PR #$PR_NUMBER"
            echo "  Response: $MERGE_RESPONSE"
        fi
    else
        echo "  ⚠️  PR is not mergeable (may have conflicts)"
        
        # Try to merge anyway with force
        echo "  🔧 Attempting force merge..."
        MERGE_RESPONSE=$(curl -s -X PUT "$BASE_URL/pulls/$PR_NUMBER/merge" \
            -H "Accept: application/vnd.github.v3+json" \
            -d '{
                "commit_title": "Force merge PR #'$PR_NUMBER': '$PR_TITLE'",
                "commit_message": "Automated force merge of PR #'$PR_NUMBER'",
                "merge_method": "merge"
            }')
        
        MERGED=$(echo "$MERGE_RESPONSE" | grep '"merged"' | sed 's/.*"merged": \(.*\).*/\1/')
        
        if [ "$MERGED" = "true" ]; then
            echo "  ✅ Successfully force merged PR #$PR_NUMBER"
        else
            echo "  ❌ Failed to force merge PR #$PR_NUMBER"
            echo "  Response: $MERGE_RESPONSE"
        fi
    fi
    
    # Small delay to avoid rate limiting
    sleep 1
done

echo ""
echo "🎉 Finished processing all open PRs!"
echo "📊 Summary: Check the output above for results"