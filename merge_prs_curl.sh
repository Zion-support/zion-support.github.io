#!/bin/bash

# Merge all open PRs using curl and GitHub API
set -e

GITHUB_TOKEN="ghs_wpYWdr6QOJGeogZHgxhlHkPQFozQY54Sp8Cn"
REPO_OWNER="Zion-Holdings"
REPO_NAME="zion.app"

echo "🚀 Starting automated PR merge process..."
echo "⏰ Started at: $(date)"

# Function to make GitHub API requests
make_github_request() {
    local url="$1"
    local method="${2:-GET}"
    local data="$3"
    
    if [ "$method" = "PUT" ]; then
        curl -s -X PUT \
            -H "Authorization: token $GITHUB_TOKEN" \
            -H "Accept: application/vnd.github.v3+json" \
            -H "Content-Type: application/json" \
            -d "$data" \
            "$url"
    else
        curl -s \
            -H "Authorization: token $GITHUB_TOKEN" \
            -H "Accept: application/vnd.github.v3+json" \
            "$url"
    fi
}

# Get open PRs
echo "📋 Fetching open PRs..."
PRS_JSON=$(make_github_request "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/pulls?state=open&per_page=100")

# Count PRs
PR_COUNT=$(echo "$PRS_JSON" | jq length)
echo "📊 Found $PR_COUNT open PRs"

if [ "$PR_COUNT" -eq 0 ]; then
    echo "📭 No open PRs found"
    exit 0
fi

# Process each PR
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

for i in $(seq 0 $((PR_COUNT - 1))); do
    PR_NUMBER=$(echo "$PRS_JSON" | jq -r ".[$i].number")
    PR_TITLE=$(echo "$PRS_JSON" | jq -r ".[$i].title")
    PR_HEAD_REF=$(echo "$PRS_JSON" | jq -r ".[$i].head.ref")
    PR_HEAD_SHA=$(echo "$PRS_JSON" | jq -r ".[$i].head.sha")
    PR_BASE_REF=$(echo "$PRS_JSON" | jq -r ".[$i].base.ref")
    PR_BASE_SHA=$(echo "$PRS_JSON" | jq -r ".[$i].base.sha")
    
    echo ""
    echo "🔄 Processing PR #$PR_NUMBER: $PR_TITLE"
    echo "   Head: $PR_HEAD_REF (${PR_HEAD_SHA:0:8})"
    echo "   Base: $PR_BASE_REF (${PR_BASE_SHA:0:8})"
    
    # Try to merge with merge method
    MERGE_DATA=$(cat <<EOF
{
    "commit_title": "Merge PR #$PR_NUMBER: $PR_TITLE",
    "commit_message": "Automated merge of PR #$PR_NUMBER",
    "merge_method": "merge"
}
EOF
)
    
    MERGE_URL="https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/pulls/$PR_NUMBER/merge"
    MERGE_RESULT=$(make_github_request "$MERGE_URL" "PUT" "$MERGE_DATA")
    
    if echo "$MERGE_RESULT" | jq -e '.merged' > /dev/null 2>&1; then
        echo "✅ Successfully merged PR #$PR_NUMBER"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge failed for PR #$PR_NUMBER, trying squash merge..."
        
        # Try squash merge
        SQUASH_DATA=$(cat <<EOF
{
    "commit_title": "Merge PR #$PR_NUMBER: $PR_TITLE",
    "commit_message": "Automated squash merge of PR #$PR_NUMBER",
    "merge_method": "squash"
}
EOF
)
        
        SQUASH_RESULT=$(make_github_request "$MERGE_URL" "PUT" "$SQUASH_DATA")
        
        if echo "$SQUASH_RESULT" | jq -e '.merged' > /dev/null 2>&1; then
            echo "✅ Successfully squash merged PR #$PR_NUMBER"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "❌ Failed to merge PR #$PR_NUMBER"
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
    
    # Small delay to avoid rate limiting
    sleep 1
done

# Summary
echo ""
echo "🎉 PR merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   📋 Total processed: $PR_COUNT"
echo "⏰ Completed at: $(date)"
