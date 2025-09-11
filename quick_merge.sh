#!/bin/bash

echo "Quick PR merge started at $(date)"

# Quick merge using curl
echo "Merging PR 12994..."
curl -s -X PUT \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/12994/merge" \
  -d '{"commit_title":"Merge PR #12994","merge_method":"merge"}' > /tmp/merge_12994.json

echo "Merging PR 12993..."
curl -s -X PUT \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/12993/merge" \
  -d '{"commit_title":"Merge PR #12993","merge_method":"merge"}' > /tmp/merge_12993.json

echo "Merge results:"
echo "PR 12994:" && cat /tmp/merge_12994.json
echo "PR 12993:" && cat /tmp/merge_12993.json

echo "Quick PR merge completed at $(date)"