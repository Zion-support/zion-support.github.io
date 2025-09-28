#!/bin/bash

# Simple curl-based PR merge script
TOKEN="ghs_ARoJSTvAacep8FvSbjlT0M4kz3PRL70w75Bt"
REPO="Zion-Holdings/zion.app"

echo "🚀 Starting PR merge process using curl..."

# PR 23646
echo "🔄 Merging PR #23646..."
curl -X PUT \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Content-Type: application/json" \
  -d '{"commit_title":"Merge PR #23646 - Fix Netlify build","commit_message":"Automated merge of PR #23646 to resolve Netlify build issues","merge_method":"merge"}' \
  "https://api.github.com/repos/$REPO/pulls/23646/merge"

echo ""
echo "✅ PR #23646 merge request sent"

# PR 23639
echo "🔄 Merging PR #23639..."
curl -X PUT \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Content-Type: application/json" \
  -d '{"commit_title":"Merge PR #23639 - Fix Netlify build","commit_message":"Automated merge of PR #23639 to resolve Netlify build issues","merge_method":"merge"}' \
  "https://api.github.com/repos/$REPO/pulls/23639/merge"

echo ""
echo "✅ PR #23639 merge request sent"

# PR 23635
echo "🔄 Merging PR #23635..."
curl -X PUT \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Content-Type: application/json" \
  -d '{"commit_title":"Merge PR #23635 - Fix Netlify build","commit_message":"Automated merge of PR #23635 to resolve Netlify build issues","merge_method":"merge"}' \
  "https://api.github.com/repos/$REPO/pulls/23635/merge"

echo ""
echo "✅ PR #23635 merge request sent"

echo "🎉 All PR merge requests sent!"