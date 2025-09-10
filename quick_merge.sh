#!/bin/bash

# Quick PR merge script
set -e

echo "🚀 Starting quick PR merge process..."

# List of PR numbers to merge (from our previous check)
PRS="12888 12887 12886 12885 12884"

if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GITHUB_TOKEN is not set. Export GITHUB_TOKEN before running." >&2
  exit 1
fi

for pr in $PRS; do
    echo "🔄 Processing PR #$pr..."
    
    # Try to merge using GitHub API
    response=$(curl -s -X PUT \
        -H "Authorization: token $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr/merge" \
        -d '{"commit_title":"Merge PR #'$pr'","commit_message":"Automated merge","merge_method":"merge"}')
    
    if echo "$response" | grep -q '"merged":true'; then
        echo "✅ Successfully merged PR #$pr"
    else
        echo "❌ Failed to merge PR #$pr"
        echo "Response: $response"
    fi
    
    echo "---"
done

echo "🎉 Quick merge process completed!"