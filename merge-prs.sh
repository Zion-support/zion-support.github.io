#!/bin/bash

# Merge all PRs via GitHub API

set -e

TOKEN="ghs_AQKreA8RlgGQCNY8DMu0QdzvhW17kR0R1Mxm"
REPO="Zion-Holdings/zion.app"

# Array of PR numbers
declare -a PRS=(25821 25822 25823 25824)

echo "Starting PR merge process..."
echo ""

for pr_num in "${PRS[@]}"; do
  echo "========================================="
  echo "Merging PR #$pr_num..."
  echo "========================================="
  
  # Merge the PR
  response=$(curl -s -X PUT \
    -H "Authorization: token $TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    "https://api.github.com/repos/$REPO/pulls/$pr_num/merge" \
    -d '{
      "commit_title": "Merge PR #'$pr_num': Fix errors and merge to main",
      "commit_message": "Resolved conflicts and merged successfully",
      "merge_method": "merge"
    }')
  
  # Check if merge was successful
  if echo "$response" | grep -q '"merged": true'; then
    echo "✓ PR #$pr_num merged successfully"
    echo ""
  else
    echo "✗ Failed to merge PR #$pr_num"
    echo "Response: $response"
    echo ""
  fi
  
  # Small delay to avoid rate limiting
  sleep 2
done

echo "========================================="
echo "PR merge process complete!"
echo "========================================="
