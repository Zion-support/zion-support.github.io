#!/bin/bash

# Script to merge all open PRs into main branch
# This script will handle PRs systematically and resolve conflicts

echo "Starting PR merge process..."

# Get all open PRs using a different approach
echo "Fetching open PRs..."
PRS_JSON=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=10")

echo "Raw JSON response (first 500 chars):"
echo "$PRS_JSON" | head -c 500
echo ""

# Extract PR numbers using a more robust method
PRS=$(echo "$PRS_JSON" | grep -o '"number":[0-9]*' | sed 's/"number"://g')

echo "Extracted PR numbers: $PRS"

if [ -z "$PRS" ]; then
    echo "No open PRs found."
    exit 0
fi

# Counter for tracking
count=0
success=0
failed=0

# Process each PR
for pr in $PRS; do
    count=$((count + 1))
    echo "Processing PR #$pr ($count)..."
    
    # Get PR details
    pr_data=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr")
    head_ref=$(echo "$pr_data" | grep -o '"ref":"[^"]*"' | head -1 | cut -d'"' -f4)
    title=$(echo "$pr_data" | grep -o '"title":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    echo "  PR #$pr: $title"
    echo "  Branch: $head_ref"
    
    # For now, just show what we would do
    echo "  Would merge $head_ref into main..."
    echo "  ---"
    
    # Add a small delay to avoid rate limiting
    sleep 1
done

echo "PR merge process completed!"
echo "Total PRs processed: $count"