#!/bin/bash

echo "🚀 Starting simple PR merge process..."

# Get the most recent non-draft PRs and try to merge them
PR_NUMBERS=(17249 17248 17247 17246 17242 17241 17240 17239)

for pr_number in "${PR_NUMBERS[@]}"; do
  echo "📋 Processing PR #$pr_number"
  
  # Try to merge via API
  echo "  🔄 Attempting API merge..."
  response=$(curl -s -X PUT \
    -H "Accept: application/vnd.github.v3+json" \
    -H "Authorization: token ghs_mVwAd3X7sGrxLk26IqwlW3En74KQgQ1MJu5r" \
    -d '{"commit_title":"Merge PR '$pr_number'","merge_method":"merge"}' \
    "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number/merge")
  
  # Check if merge was successful
  if echo "$response" | grep -q '"merged":true'; then
    echo "  ✅ Successfully merged PR #$pr_number"
  else
    echo "  ❌ Failed to merge PR #$pr_number"
    echo "  Response: $response"
  fi
  
  echo ""
done

# Push any changes
echo "🚀 Pushing changes to main branch..."
git push origin main

echo "📊 Merge process completed"