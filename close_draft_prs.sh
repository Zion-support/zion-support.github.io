#!/bin/bash
TOKEN="ghs_JqwwXvj1vI7ZM2NtarnjaaH5u8KvtQ07d4aC"
REPO="Zion-Holdings/zion.app"

# Get all open PRs
prs=$(cat /workspace/open_prs.json | python3 -c "import json, sys; prs = json.load(sys.stdin); print(' '.join([str(pr['number']) for pr in prs]))")

echo "Closing ${prs}"
count=0
for pr_num in $prs; do
  echo "Closing PR #$pr_num..."
  curl -s -X PATCH \
    -H "Authorization: token $TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    "https://api.github.com/repos/$REPO/pulls/$pr_num" \
    -d '{"state":"closed"}' > /dev/null
  
  count=$((count + 1))
  if [ $((count % 10)) -eq 0 ]; then
    echo "Closed $count PRs so far..."
    sleep 1
  fi
done

echo "Completed closing $count draft PRs"
