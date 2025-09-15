#!/bin/bash

# Merge PRs using GitHub API with curl
set -e

echo "🚀 Starting automated PR merge process using GitHub API..."

# Get list of open PRs
echo "📋 Fetching open PRs..."
pr_numbers=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" | grep '"number":' | sed 's/.*"number": \([0-9]*\).*/\1/' | sort -n)

if [ -z "$pr_numbers" ]; then
    echo "📭 No open PRs found"
    exit 0
fi

echo "📋 Found PRs: $pr_numbers"

successful_merges=0
failed_merges=0

for pr_number in $pr_numbers; do
    echo ""
    echo "🔄 Processing PR #$pr_number..."
    
    # Get PR details
    pr_data=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    pr_title=$(echo "$pr_data" | grep '"title":' | head -1 | sed 's/.*"title": "\([^"]*\)".*/\1/')
    pr_head_ref=$(echo "$pr_data" | grep '"ref":' | head -1 | sed 's/.*"ref": "\([^"]*\)".*/\1/')
    
    echo "   Title: $pr_title"
    echo "   Branch: $pr_head_ref"
    
    # Attempt to merge the PR
    echo "🔄 Attempting to merge PR #$pr_number..."
    
    merge_response=$(curl -s -X PUT \
        -H "Accept: application/vnd.github.v3+json" \
        -H "Content-Type: application/json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number/merge" \
        -d "{
            \"commit_title\": \"Merge PR #$pr_number: $pr_title\",
            \"commit_message\": \"Automated merge of PR #$pr_number - $pr_head_ref\",
            \"merge_method\": \"merge\"
        }")
    
    # Check if merge was successful
    if echo "$merge_response" | grep -q '"merged": true'; then
        echo "✅ Successfully merged PR #$pr_number"
        ((successful_merges++))
    elif echo "$merge_response" | grep -q '"message": "Pull Request is not mergeable"'; then
        echo "⚠️  PR #$pr_number is not mergeable (likely has conflicts)"
        
        # Try to close the PR instead
        echo "🔒 Attempting to close PR #$pr_number..."
        close_response=$(curl -s -X PATCH \
            -H "Accept: application/vnd.github.v3+json" \
            -H "Content-Type: application/json" \
            "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number" \
            -d "{\"state\": \"closed\"}")
        
        if echo "$close_response" | grep -q '"state": "closed"'; then
            echo "✅ Successfully closed PR #$pr_number"
        else
            echo "❌ Failed to close PR #$pr_number"
            ((failed_merges++))
        fi
    else
        echo "❌ Failed to merge PR #$pr_number"
        echo "   Response: $merge_response"
        ((failed_merges++))
    fi
    
    # Add delay to avoid rate limiting
    sleep 2
done

echo ""
echo "📊 Merge Summary:"
echo "✅ Successfully merged: $successful_merges"
echo "❌ Failed: $failed_merges"
echo "📋 Total processed: $(echo $pr_numbers | wc -w)"

echo ""
echo "🏁 PR merge process completed!"