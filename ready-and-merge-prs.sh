#!/bin/bash

# Mark PRs as ready and merge them

set -e

TOKEN="ghs_AQKreA8RlgGQCNY8DMu0QdzvhW17kR0R1Mxm"
REPO="Zion-Holdings/zion.app"

# Array of PR numbers
declare -a PRS=(25821 25822 25823 25824)

echo "Processing PRs: marking as ready and merging..."
echo ""

for pr_num in "${PRS[@]}"; do
  echo "========================================="
  echo "Processing PR #$pr_num..."
  echo "========================================="
  
  # Get the PR node ID for GraphQL
  pr_data=$(curl -s -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/$REPO/pulls/$pr_num")
  
  node_id=$(echo "$pr_data" | python3 -c "import sys, json; print(json.load(sys.stdin).get('node_id', ''))")
  
  if [ -z "$node_id" ]; then
    echo "✗ Could not get node_id for PR #$pr_num"
    continue
  fi
  
  # Mark PR as ready for review using GraphQL
  echo "Marking PR #$pr_num as ready for review..."
  ready_response=$(curl -s -X POST \
    -H "Authorization: bearer $TOKEN" \
    -H "Content-Type: application/json" \
    "https://api.github.com/graphql" \
    -d '{
      "query": "mutation { markPullRequestReadyForReview(input: {pullRequestId: \"'$node_id'\"}) { pullRequest { isDraft } } }"
    }')
  
  echo "Response: $ready_response"
  
  # Wait a moment for the state to update
  sleep 3
  
  # Now try to merge
  echo "Attempting to merge PR #$pr_num..."
  merge_response=$(curl -s -X PUT \
    -H "Authorization: token $TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    "https://api.github.com/repos/$REPO/pulls/$pr_num/merge" \
    -d '{
      "commit_title": "Merge PR #'$pr_num': Fix errors and merge to main",
      "commit_message": "Resolved conflicts and merged successfully",
      "merge_method": "merge"
    }')
  
  # Check if merge was successful
  if echo "$merge_response" | grep -q '"merged": true'; then
    echo "✓ PR #$pr_num merged successfully"
  else
    echo "✗ Failed to merge PR #$pr_num"
    echo "Response: $merge_response"
  fi
  
  echo ""
  sleep 2
done

echo "========================================="
echo "Process complete!"
echo "========================================="
