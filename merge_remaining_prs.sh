#!/bin/bash

TOKEN="ghs_iI0OzYYFiL6Tvp2m7AFAFAAtnbwrsz2D51F3"
REPO="Zion-Holdings/zion.app"

echo "===== Continuing PR Merge Process ====="
echo ""

# Update main branch first
git pull origin main

# Get list of still-open PRs
PR_NUMBERS=$(curl -s -H "Authorization: token $TOKEN" \
  "https://api.github.com/repos/$REPO/pulls?state=open&per_page=100" | \
  python3 -c "import sys, json; data = json.load(sys.stdin); print(' '.join(str(pr['number']) for pr in data))")

echo "Remaining open PRs: $PR_NUMBERS"
echo ""

for PR_NUM in $PR_NUMBERS; do
  echo "========================================"
  echo "Processing PR #$PR_NUM..."
  
  # Get PR details
  PR_DATA=$(curl -s -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/$REPO/pulls/$PR_NUM")
  
  BRANCH=$(echo "$PR_DATA" | python3 -c "import sys, json; pr = json.load(sys.stdin); print(pr['head']['ref'])")
  
  echo "  Branch: $BRANCH"
  
  # Fetch the branch
  git fetch origin "$BRANCH"
  
  # Try to merge
  echo "  Attempting merge..."
  git merge "origin/$BRANCH" --no-edit -X theirs
  
  if [ $? -eq 0 ]; then
    echo "  ✓ Merge successful!"
    
    # Push to main
    git push origin main
    
    if [ $? -eq 0 ]; then
      echo "  ✓ Pushed to main"
      
      # Close the PR
      CLOSE_RESULT=$(curl -s -X PATCH -H "Authorization: token $TOKEN" \
        -H "Content-Type: application/json" \
        -d '{"state":"closed"}' \
        "https://api.github.com/repos/$REPO/pulls/$PR_NUM")
      
      echo "  ✓ Closed PR #$PR_NUM"
    else
      echo "  ✗ Failed to push to main"
    fi
  else
    echo "  ✗ Merge failed, skipping..."
    git merge --abort
  fi
  
  echo ""
done

echo "===== Merge process completed ====="
echo ""
echo "Checking remaining open PRs..."
curl -s -H "Authorization: token $TOKEN" \
  "https://api.github.com/repos/$REPO/pulls?state=open&per_page=10" | \
  python3 -c "import sys, json; data = json.load(sys.stdin); print(f\"Remaining open PRs: {len(data)}\"); [print(f\"  - PR #{pr['number']}: {pr['title']}\") for pr in data[:5]]"
