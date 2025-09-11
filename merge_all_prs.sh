#!/bin/bash
set -e

echo "=== Starting PR merge process ==="

# Extract token and repo from git remote
REMOTE_URL=$(git remote get-url origin)
echo "Remote URL: $REMOTE_URL"

# Extract token and repo
TOKEN=$(echo "$REMOTE_URL" | sed -E 's#https://x-access-token:([^@]+)@github.com/.*#\1#')
REPO=$(echo "$REMOTE_URL" | sed -E 's#.*github.com/([^/]+/[^/]+).*#\1#')

echo "Repository: $REPO"
echo "Token: ${TOKEN:0:8}..."

# Function to make GitHub API calls
github_api() {
    local endpoint="$1"
    local method="${2:-GET}"
    local data="$3"
    
    curl -s -X "$method" \
        -H "Authorization: token $TOKEN" \
        -H "Accept: application/vnd.github+json" \
        -H "User-Agent: cursor-bot" \
        ${data:+-d "$data"} \
        "https://api.github.com/repos/$REPO$endpoint"
}

# List all open PRs
echo "=== Fetching open PRs ==="
PRS_JSON=$(github_api "/pulls?state=open&per_page=100")

# Extract PR numbers
PR_NUMBERS=$(echo "$PRS_JSON" | grep -o '"number":[0-9]*' | grep -o '[0-9]*' | sort -n)

if [ -z "$PR_NUMBERS" ]; then
    echo "No open PRs found"
    exit 0
fi

echo "Found PRs: $PR_NUMBERS"

# Process each PR
for PR_NUM in $PR_NUMBERS; do
    echo ""
    echo "=== Processing PR #$PR_NUM ==="
    
    # Get PR details
    PR_DETAILS=$(github_api "/pulls/$PR_NUM")
    PR_TITLE=$(echo "$PR_DETAILS" | grep -o '"title":"[^"]*"' | cut -d'"' -f4)
    PR_MERGEABLE=$(echo "$PR_DETAILS" | grep -o '"mergeable":[^,]*' | cut -d':' -f2 | tr -d ' ')
    
    echo "Title: $PR_TITLE"
    echo "Mergeable: $PR_MERGEABLE"
    
    if [ "$PR_MERGEABLE" = "false" ]; then
        echo "PR #$PR_NUM has conflicts, attempting local resolution..."
        
        # Fetch PR branch
        git fetch origin "pull/$PR_NUM/head:pr-$PR_NUM" || {
            echo "Failed to fetch PR #$PR_NUM"
            continue
        }
        
        # Checkout main and update
        git checkout main
        git pull origin main
        
        # Create merge branch
        git checkout -b "merge-pr-$PR_NUM" 2>/dev/null || git checkout "merge-pr-$PR_NUM"
        
        # Try to merge
        if git merge "pr-$PR_NUM" --no-ff --no-edit; then
            echo "✅ Successfully merged PR #$PR_NUM"
        else
            echo "Conflicts detected, trying with -X theirs strategy..."
            git merge --abort
            if git merge "pr-$PR_NUM" --no-ff --no-edit -X theirs; then
                echo "✅ Successfully merged PR #$PR_NUM with theirs strategy"
            else
                echo "❌ Failed to merge PR #$PR_NUM even with theirs strategy"
                git merge --abort
                git checkout main
                git branch -D "merge-pr-$PR_NUM" 2>/dev/null || true
                continue
            fi
        fi
        
        # Merge back to main
        git checkout main
        git merge "merge-pr-$PR_NUM" --no-ff --no-edit
        
        # Push to origin
        git push origin main
        
        # Cleanup
        git branch -D "merge-pr-$PR_NUM" 2>/dev/null || true
        git branch -D "pr-$PR_NUM" 2>/dev/null || true
        
        echo "✅ Successfully pushed merged PR #$PR_NUM to main"
        
    else
        # Try to merge via API
        echo "Attempting API merge for PR #$PR_NUM..."
        
        MERGE_RESPONSE=$(github_api "/pulls/$PR_NUM/merge" "PUT" "{\"merge_method\":\"squash\",\"commit_title\":\"chore: squash-merge PR #$PR_NUM - $PR_TITLE\"}")
        
        if echo "$MERGE_RESPONSE" | grep -q '"merged":true'; then
            echo "✅ Successfully merged PR #$PR_NUM via API"
        else
            echo "❌ Failed to merge PR #$PR_NUM via API: $MERGE_RESPONSE"
        fi
    fi
done

echo ""
echo "=== PR merge process completed ==="