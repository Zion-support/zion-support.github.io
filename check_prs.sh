#!/bin/bash

TOKEN="ghs_CJQi9UYjWIOVnkJQxzHpsAd6pPY1JH1W1loC"
REPO="Zion-Holdings/zion.app"

echo "Fetching open PRs..."
curl -s -H "Authorization: token $TOKEN" \
  "https://api.github.com/repos/$REPO/pulls?state=open&per_page=100" \
  > /workspace/prs.json

if [ -f /workspace/prs.json ]; then
  echo "Open PRs:"
  cat /workspace/prs.json | grep -E '"number"|"title"|"head"' | head -100
fi