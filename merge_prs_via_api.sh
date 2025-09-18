#!/bin/bash

# Merge PRs via GitHub API
echo "Starting PR merge via GitHub API..."

# Function to merge a PR via API
merge_pr_via_api() {
    local pr_number=$1
    local title=$2
    
    echo "Attempting to merge PR #$pr_number: $title"
    
    # Merge the PR using GitHub API
    response=$(curl -s -X PUT \
        -H "Accept: application/vnd.github.v3+json" \
        -H "User-Agent: PR-Merge-Script" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number/merge" \
        -d "{
            \"commit_title\": \"Merge PR #$pr_number: $title\",
            \"commit_message\": \"Automated merge of PR #$pr_number\",
            \"merge_method\": \"merge\"
        }")
    
    # Check if merge was successful
    if echo "$response" | grep -q '"merged":true'; then
        echo "✅ Successfully merged PR #$pr_number"
        return 0
    elif echo "$response" | grep -q '"message".*"not mergeable"'; then
        echo "❌ PR #$pr_number is not mergeable"
        return 1
    elif echo "$response" | grep -q '"message".*"conflict"'; then
        echo "⚠️  PR #$pr_number has conflicts"
        return 1
    else
        echo "❌ Error merging PR #$pr_number: $response"
        return 1
    fi
}

# Get list of open PRs
echo "Fetching open PRs..."
prs_json=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100")

# Extract PR numbers and titles
echo "$prs_json" | grep -E '"number":|"title":' | while IFS= read -r line; do
    if echo "$line" | grep -q '"number":'; then
        pr_number=$(echo "$line" | grep -o '[0-9]\+')
    elif echo "$line" | grep -q '"title":'; then
        pr_title=$(echo "$line" | sed 's/.*"title": *"\([^"]*\)".*/\1/')
        if [ -n "$pr_number" ] && [ -n "$pr_title" ]; then
            echo "Found PR #$pr_number: $pr_title"
            merge_pr_via_api "$pr_number" "$pr_title"
            echo "---"
        fi
    fi
done

echo "PR merge process completed!"