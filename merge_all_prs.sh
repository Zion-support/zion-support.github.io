#!/bin/bash

TOKEN="ghs_iI0OzYYFiL6Tvp2m7AFAFAAtnbwrsz2D51F3"
REPO="Zion-Holdings/zion.app"

echo "===== Merging Open PRs ====="
echo ""

# Get list of open PRs
PR_NUMBERS=$(curl -s -H "Authorization: token $TOKEN" \
  "https://api.github.com/repos/$REPO/pulls?state=open&per_page=100" | \
  python3 -c "import sys, json; data = json.load(sys.stdin); print(' '.join(str(pr['number']) for pr in data))")

echo "Open PRs: $PR_NUMBERS"
echo ""

for PR_NUM in $PR_NUMBERS; do
  echo "Processing PR #$PR_NUM..."
  
  # Get PR details
  PR_DATA=$(curl -s -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/$REPO/pulls/$PR_NUM")
  
  MERGEABLE=$(echo "$PR_DATA" | python3 -c "import sys, json; pr = json.load(sys.stdin); print(pr.get('mergeable', 'null'))")
  STATE=$(echo "$PR_DATA" | python3 -c "import sys, json; pr = json.load(sys.stdin); print(pr.get('mergeable_state', 'unknown'))")
  BRANCH=$(echo "$PR_DATA" | python3 -c "import sys, json; pr = json.load(sys.stdin); print(pr['head']['ref'])")
  
  echo "  Branch: $BRANCH"
  echo "  Mergeable: $MERGEABLE"
  echo "  State: $STATE"
  
  # Try to merge if clean
  if [ "$MERGEABLE" = "True" ]; then
    echo "  Attempting to merge..."
    MERGE_RESULT=$(curl -s -X PUT -H "Authorization: token $TOKEN" \
      -H "Content-Type: application/json" \
      -d '{"commit_title":"Auto-merge PR #'$PR_NUM'","commit_message":"Automated merge of PR #'$PR_NUM'","merge_method":"merge"}' \
      "https://api.github.com/repos/$REPO/pulls/$PR_NUM/merge")
    
    MERGED=$(echo "$MERGE_RESULT" | python3 -c "import sys, json; result = json.load(sys.stdin); print(result.get('merged', False))")
    
    if [ "$MERGED" = "True" ]; then
      echo "  ✓ Successfully merged PR #$PR_NUM"
    else
      echo "  ✗ Failed to merge PR #$PR_NUM"
      echo "  Response: $MERGE_RESULT"
    fi
  elif [ "$MERGEABLE" = "False" ]; then
    echo "  ⚠ PR has conflicts, attempting local merge..."
    
    # Fetch the branch
    git fetch origin "$BRANCH" 2>&1
    
    # Try to merge locally
    git merge "origin/$BRANCH" --no-edit 2>&1
    
    if [ $? -eq 0 ]; then
      echo "  ✓ Local merge successful, pushing to main..."
      git push origin main 2>&1
      
      # Close the PR
      curl -s -X PATCH -H "Authorization: token $TOKEN" \
        -H "Content-Type: application/json" \
        -d '{"state":"closed"}' \
        "https://api.github.com/repos/$REPO/pulls/$PR_NUM" > /dev/null
      echo "  ✓ Closed PR #$PR_NUM"
    else
      echo "  ✗ Local merge failed with conflicts"
      # Abort the merge
      git merge --abort 2>&1
    fi
  else
    echo "  ⚠ Skipping - mergeable status unknown"
  fi
  
  echo ""
done

echo "===== Merge process completed ====="
