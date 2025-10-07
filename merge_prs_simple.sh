#!/bin/bash

# Script to merge all open PRs (without jq dependency)
echo "Starting PR merge process..."

# Get all open PRs (simplified approach)
echo "Attempting to merge known PRs..."

# List of PRs to try merging
PRS="25319 25318 25317 25316 25315 25314 25313 25312 25311 25310 25309 25308 25307 25306 25305 25304 25303 25302 25301 25300 25299"

for pr in $PRS; do
    echo "Processing PR #$pr..."
    
    # Try to merge the PR
    echo "Attempting to merge PR #$pr..."
    MERGE_RESULT=$(curl -s -X PUT -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ghs_mELtrkg28rAihhbBZj2mtaSKH5kbGv1BBVt1" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr/merge" -d '{"commit_title":"Auto-merge PR #'$pr': Fix errors and merge to main","merge_method":"merge"}' 2>/dev/null)
    
    if echo "$MERGE_RESULT" | grep -q '"merged":true'; then
        echo "Successfully merged PR #$pr"
    elif echo "$MERGE_RESULT" | grep -q '"message"'; then
        echo "PR #$pr status: $(echo "$MERGE_RESULT" | grep -o '"message":"[^"]*"' | cut -d'"' -f4)"
    else
        echo "Unknown response for PR #$pr: $MERGE_RESULT"
    fi
    
    echo "---"
done

echo "PR merge process completed!"