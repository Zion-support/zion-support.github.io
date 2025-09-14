#!/bin/bash

# Script to merge all open PRs and resolve common conflicts
set -e

echo "Starting to merge all open PRs..."

# Get list of open PRs
PRS=$(curl -s -H "Authorization: token ghs_g0Vv56nHMo1l2Z6dN0k2ekvXcY7YAE1PuniG" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | python3 -c "
import json, sys
data = json.load(sys.stdin)
for pr in data:
    print(f'{pr[\"number\"]}:{pr[\"head\"][\"ref\"]}')
")

echo "Found PRs: $PRS"

# Function to resolve common conflicts
resolve_conflicts() {
    echo "Resolving conflicts..."
    
    # Resolve package.json conflicts
    if [ -f "package.json" ] && grep -q "<<<<<<< HEAD" package.json; then
        echo "Resolving package.json conflicts..."
        # Keep workbox dependencies
        sed -i '/<<<<<<< HEAD/,/>>>>>>> origin\/cursor/d' package.json
        # Ensure workbox dependencies are present
        if ! grep -q "workbox-build" package.json; then
            sed -i '/"web-vitals": "\^5\.1\.0"/a\    "workbox-build": "^7.3.0",\n    "workbox-window": "^7.3.0"' package.json
        fi
    fi
    
    # Resolve use-toast.ts conflicts
    if [ -f "src/components/ui/use-toast.ts" ] && grep -q "<<<<<<< HEAD" src/components/ui/use-toast.ts; then
        echo "Resolving use-toast.ts conflicts..."
        # Keep the more comprehensive version (the second one)
        sed -i '/<<<<<<< HEAD/,/=======/d' src/components/ui/use-toast.ts
        sed -i 's/>>>>>>> origin\/cursor.*//' src/components/ui/use-toast.ts
    fi
    
    # Resolve AuthContext.tsx conflicts
    if [ -f "src/context/auth/AuthContext.tsx" ] && grep -q "<<<<<<< HEAD" src/context/auth/AuthContext.tsx; then
        echo "Resolving AuthContext.tsx conflicts..."
        # Keep the cleaner version
        sed -i '/<<<<<<< HEAD/,/=======/d' src/context/auth/AuthContext.tsx
        sed -i 's/>>>>>>> origin\/cursor.*//' src/context/auth/AuthContext.tsx
    fi
}

# Merge each PR
for pr_info in $PRS; do
    pr_number=$(echo $pr_info | cut -d: -f1)
    branch_name=$(echo $pr_info | cut -d: -f2)
    
    echo "Merging PR #$pr_number from branch $branch_name..."
    
    # Fetch the branch
    git fetch origin "$branch_name"
    
    # Try to merge
    if git merge "origin/$branch_name" --no-ff -m "Merge PR #$pr_number: Auto-merge" 2>/dev/null; then
        echo "Successfully merged PR #$pr_number"
    else
        echo "Conflict in PR #$pr_number, resolving..."
        resolve_conflicts
        git add .
        git commit -m "Resolve conflicts for PR #$pr_number"
        echo "Resolved conflicts for PR #$pr_number"
    fi
done

echo "All PRs merged successfully!"
git log --oneline -10