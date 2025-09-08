#!/bin/bash

# Script to merge all open PRs into main branch
# This script will attempt to merge PRs and resolve conflicts

set -e

GITHUB_TOKEN="${GITHUB_TOKEN}"
REPO="Zion-Holdings/zion.app"
API_BASE="https://api.github.com/repos/$REPO"

if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ GITHUB_TOKEN environment variable is required"
    exit 1
fi

echo "Starting PR merge process..."

# Get list of open PRs
echo "Fetching open PRs..."
PR_LIST=$(curl -s -H "Authorization: token $GITHUB_TOKEN" "$API_BASE/pulls?state=open&per_page=100" | grep -o '"number":[0-9]*' | grep -o '[0-9]*')

# Convert to array
PR_ARRAY=($PR_LIST)

echo "Found ${#PR_ARRAY[@]} open PRs"

# Process each PR
for pr_number in "${PR_ARRAY[@]}"; do
    echo "Processing PR #$pr_number..."
    
    # Get PR details
    PR_DETAILS=$(curl -s -H "Authorization: token $GITHUB_TOKEN" "$API_BASE/pulls/$pr_number")
    PR_TITLE=$(echo "$PR_DETAILS" | grep -o '"title":"[^"]*"' | cut -d'"' -f4)
    PR_HEAD_REF=$(echo "$PR_DETAILS" | grep -o '"ref":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    echo "  Title: $PR_TITLE"
    echo "  Branch: $PR_HEAD_REF"
    
    # Check if PR can be merged
    MERGEABLE=$(echo "$PR_DETAILS" | grep -o '"mergeable":[^,]*' | cut -d':' -f2 | tr -d ' ')
    
    if [ "$MERGEABLE" = "true" ]; then
        echo "  PR is mergeable, attempting merge..."
        
        # Attempt to merge
        MERGE_RESPONSE=$(curl -s -X PUT -H "Authorization: token $GITHUB_TOKEN" \
            -H "Accept: application/vnd.github.v3+json" \
            "$API_BASE/pulls/$pr_number/merge" \
            -d "{\"commit_title\":\"Merge PR #$pr_number: $PR_TITLE\",\"merge_method\":\"merge\"}")
        
        MERGE_SUCCESS=$(echo "$MERGE_RESPONSE" | grep -o '"merged":[^,]*' | cut -d':' -f2 | tr -d ' ')
        
        if [ "$MERGE_SUCCESS" = "true" ]; then
            echo "  ✅ Successfully merged PR #$pr_number"
        else
            echo "  ❌ Failed to merge PR #$pr_number"
            echo "  Response: $MERGE_RESPONSE"
        fi
    else
        echo "  ⚠️  PR has conflicts or is not mergeable, attempting to resolve..."
        
        # Try to fetch and merge locally
        echo "  Fetching branch: $PR_HEAD_REF"
        git fetch origin "$PR_HEAD_REF:$PR_HEAD_REF" || echo "  Failed to fetch branch"
        
        # Try to merge locally
        if git merge "origin/$PR_HEAD_REF" --no-ff -m "Merge PR #$pr_number: $PR_TITLE" 2>/dev/null; then
            echo "  ✅ Successfully merged locally, pushing to main..."
            git push origin main
        else
            echo "  ❌ Could not merge locally, conflicts need manual resolution"
            # Try to resolve conflicts automatically
            git status --porcelain | grep "^UU" | while read file; do
                echo "  Resolving conflicts in: $file"
                # Use git checkout --theirs for automatic resolution
                git checkout --theirs "${file#UU }" 2>/dev/null || true
            done
            
            if git add . && git commit -m "Resolve conflicts for PR #$pr_number: $PR_TITLE"; then
                echo "  ✅ Resolved conflicts and merged locally"
                git push origin main
            else
                echo "  ❌ Could not resolve conflicts automatically"
            fi
        fi
    fi
    
    echo "  ---"
done

echo "PR merge process completed!"