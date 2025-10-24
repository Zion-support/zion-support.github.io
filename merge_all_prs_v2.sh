#!/bin/bash

# Script to merge all open PRs - Version 2
echo "Starting comprehensive PR merge process..."

# Get all open PRs and extract numbers properly
echo "Fetching open PRs..."
PRS_JSON=$(curl -s -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ghs_kknw2wehJ4Vp6Ssvqf246P8xvmCshd40bmZo" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open)

# Extract PR numbers using a more robust method
PR_NUMBERS=$(echo "$PRS_JSON" | grep -o '"number":[0-9]*' | sed 's/"number"://g')

echo "Found PRs: $PR_NUMBERS"

# Counter for processed PRs
processed=0
merged=0
failed=0

for pr_number in $PR_NUMBERS; do
    echo "Processing PR #$pr_number..."
    
    # First, try to convert from draft to ready if it's a draft
    echo "Checking if PR #$pr_number is a draft..."
    pr_info=$(curl -s -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ghs_kknw2wehJ4Vp6Ssvqf246P8xvmCshd40bmZo" https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number)
    draft_status=$(echo "$pr_info" | grep -o '"draft":[^,]*' | cut -d: -f2 | tr -d ' ')
    
    if [ "$draft_status" = "true" ]; then
        echo "Converting PR #$pr_number from draft to ready..."
        curl -X PATCH -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ghs_kknw2wehJ4Vp6Ssvqf246P8xvmCshd40bmZo" https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number -d '{"draft":false}' > /dev/null 2>&1
        sleep 2
    fi
    
    # Now try to merge the PR
    echo "Attempting to merge PR #$pr_number..."
    merge_result=$(curl -s -X PUT -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ghs_kknw2wehJ4Vp6Ssvqf246P8xvmCshd40bmZo" https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number/merge -d "{\"commit_title\":\"Merge PR #$pr_number: Fix errors and merge to main\",\"merge_method\":\"merge\"}")
    
    if echo "$merge_result" | grep -q '"merged":true'; then
        echo "✅ Successfully merged PR #$pr_number"
        merged=$((merged + 1))
    else
        echo "❌ Failed to merge PR #$pr_number"
        echo "Response: $merge_result"
        failed=$((failed + 1))
    fi
    
    processed=$((processed + 1))
    echo "Progress: $processed PRs processed, $merged merged, $failed failed"
    echo "---"
    
    # Small delay to avoid rate limiting
    sleep 1
done

echo "=== MERGE SUMMARY ==="
echo "Total PRs processed: $processed"
echo "Successfully merged: $merged"
echo "Failed to merge: $failed"
echo "===================="