#!/bin/bash

# Automated PR merger script
GITHUB_TOKEN="ghs_mVwAd3X7sGrxLk26IqwlW3En74KQgQ1MJu5r"
REPO_OWNER="Zion-Holdings"
REPO_NAME="zion.app"

echo "🚀 Starting automated PR merge process..."

# Get list of open PRs
echo "📋 Fetching open PRs..."
PRS=$(curl -s -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/pulls?state=open")

# Extract PR numbers and check if they're not drafts
echo "$PRS" | jq -r '.[] | select(.draft == false) | "\(.number) \(.head.ref)"' | while read pr_number branch_name; do
  if [ -n "$pr_number" ] && [ -n "$branch_name" ]; then
    echo "📋 Processing PR #$pr_number (branch: $branch_name)"
    
    # Try to merge via API first
    echo "  🔄 Attempting API merge..."
    merge_result=$(curl -s -X PUT \
      -H "Accept: application/vnd.github.v3+json" \
      -H "Authorization: token $GITHUB_TOKEN" \
      -d '{"commit_title":"Merge PR '$pr_number'","merge_method":"merge"}' \
      "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/pulls/$pr_number/merge")
    
    # Check if merge was successful
    if echo "$merge_result" | jq -e '.merged' > /dev/null 2>&1; then
      echo "  ✅ Successfully merged PR #$pr_number via API"
    else
      echo "  ⚠️  API merge failed, trying local merge..."
      
      # Try local merge
      if git fetch origin "$branch_name" 2>/dev/null; then
        if git merge "origin/$branch_name" --no-edit 2>/dev/null; then
          echo "  ✅ Successfully merged PR #$pr_number locally"
        else
          echo "  ❌ Failed to merge PR #$pr_number locally (conflicts)"
          git merge --abort 2>/dev/null
        fi
      else
        echo "  ❌ Failed to fetch branch $branch_name"
      fi
    fi
    
    echo ""
  fi
done

# Push any changes
echo "🚀 Pushing changes to main branch..."
if git push origin main; then
  echo "✅ Successfully pushed changes"
else
  echo "❌ Failed to push changes"
fi

echo "📊 Merge process completed"