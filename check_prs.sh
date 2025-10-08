#!/bin/bash

# Check for open PRs
echo "Fetching open PRs from GitHub..."

curl -s -H "Authorization: token ghs_ZovMJhZd6dGsgC7nYrsvbqsBs3TETQ3WaUiC" \
  "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" \
  > /tmp/open_prs.json

# Parse and display
python3 << 'EOF'
import json
import sys

try:
    with open('/tmp/open_prs.json', 'r') as f:
        prs = json.load(f)
    
    print(f"\n{'='*80}")
    print(f"TOTAL OPEN PRs: {len(prs)}")
    print(f"{'='*80}\n")
    
    if isinstance(prs, list):
        for i, pr in enumerate(prs, 1):
            print(f"{i}. PR #{pr['number']}: {pr['title']}")
            print(f"   Branch: {pr['head']['ref']}")
            print(f"   Author: {pr['user']['login']}")
            print(f"   Draft: {pr['draft']}")
            print(f"   Created: {pr['created_at']}")
            print(f"   URL: {pr['html_url']}")
            print()
        
        # Save PR numbers to file for later use
        with open('/tmp/pr_numbers.txt', 'w') as f:
            for pr in prs:
                f.write(f"{pr['number']}\n")
    else:
        print("Error: Unexpected response format")
        print(prs)
        
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
EOF
