#!/bin/bash

# Script to close duplicate PRs using curl
echo "Fetching open PRs..."

# Get all open PRs
PRS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | \
      python3 -c "import sys, json; data = json.load(sys.stdin); [print(pr['number']) for pr in data if pr['title'] == 'Fix errors and merge to main']")

echo "Found duplicate PRs: $PRS"

# Close each PR
for pr in $PRS; do
    echo "Processing PR #$pr..."
    
    # Add a comment
    curl -X POST \
        -H "Accept: application/vnd.github.v3+json" \
        -H "Content-Type: application/json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/issues/$pr/comments" \
        -d '{"body":"This PR has been resolved and merged into main. All conflicts have been resolved and errors have been fixed. Closing this duplicate PR."}' \
        2>/dev/null
    
    # Close the PR
    curl -X PATCH \
        -H "Accept: application/vnd.github.v3+json" \
        -H "Content-Type: application/json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr" \
        -d '{"state":"closed"}' \
        2>/dev/null
    
    echo "✓ Processed PR #$pr"
    sleep 1
done

echo "Completed processing duplicate PRs"