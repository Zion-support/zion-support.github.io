#!/bin/bash
TOKEN="ghs_veww0g3I9h0hKVkePOT6oTt6gPUtCf1kxcZi"
REPO="Zion-Holdings/zion.app"

echo "Checking remaining open PRs..."
echo "======================================"

for PR_NUM in 25847 25845 25837 25836 25835; do
  PR_DETAIL=$(curl -s -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/$REPO/pulls/$PR_NUM")
  
  TITLE=$(echo "$PR_DETAIL" | python3 -c "import sys, json; print(json.load(sys.stdin)['title'][:60])" 2>/dev/null || echo "Unknown")
  MERGEABLE=$(echo "$PR_DETAIL" | python3 -c "import sys, json; print(json.load(sys.stdin).get('mergeable', 'Unknown'))" 2>/dev/null || echo "Unknown")
  STATE=$(echo "$PR_DETAIL" | python3 -c "import sys, json; print(json.load(sys.stdin).get('mergeable_state', 'unknown'))" 2>/dev/null || echo "unknown")
  IS_DRAFT=$(echo "$PR_DETAIL" | python3 -c "import sys, json; print(json.load(sys.stdin).get('draft', False))" 2>/dev/null || echo "False")
  
  if [ "$MERGEABLE" = "True" ]; then
    echo "✅ PR #$PR_NUM: MERGEABLE (draft: $IS_DRAFT)"
  elif [ "$MERGEABLE" = "False" ]; then
    echo "❌ PR #$PR_NUM: HAS CONFLICTS (state: $STATE)"
  else
    echo "❓ PR #$PR_NUM: UNKNOWN STATUS"
  fi
  echo "   Title: $TITLE"
  echo "--------------------------------------"
done
