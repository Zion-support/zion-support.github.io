#!/bin/bash

# Merge PRs using GitHub API
REPO="Zion-Holdings/zion.app"
TOKEN="ghs_5xYAiJHS9Q5fhEFaPcA5paufLXXM9J05TCUK"

echo "Merging PR #23674..."
curl -X PUT \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $TOKEN" \
  "https://api.github.com/repos/$REPO/pulls/23674/merge" \
  -d '{"commit_title":"Merge PR #23674: Parse netlify configuration file","merge_method":"merge"}'

echo "Merging PR #23673..."
curl -X PUT \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $TOKEN" \
  "https://api.github.com/repos/$REPO/pulls/23673/merge" \
  -d '{"commit_title":"Merge PR #23673: Fix Netlify build and merge to main","merge_method":"merge"}'

echo "PRs merged successfully!"