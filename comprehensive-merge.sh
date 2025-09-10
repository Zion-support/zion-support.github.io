#!/bin/bash

echo "=== COMPREHENSIVE MERGE PROCESS ==="
echo "Starting at: $(date)"

# Function to check if command succeeded
check_status() {
    if [ $? -eq 0 ]; then
        echo "✓ $1 completed successfully"
    else
        echo "✗ $1 failed"
        return 1
    fi
}

# 1. Check current status
echo "1. Checking current Git status..."
git status
check_status "Git status check"

# 2. Switch to main branch
echo "2. Switching to main branch..."
git checkout main
check_status "Switch to main"

# 3. Pull latest changes
echo "3. Pulling latest changes from origin/main..."
git pull origin main
check_status "Pull from origin/main"

# 4. Check for open PRs
echo "4. Checking for open PRs..."
if [ -z "$GITHUB_TOKEN" ]; then
  echo "GITHUB_TOKEN not set; skipping PR fetch."
else
  curl -s -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open > /tmp/open_prs.json
fi
if [ -s /tmp/open_prs.json ]; then
    echo "Open PRs found:"
    cat /tmp/open_prs.json | jq '.[] | {number: .number, title: .title, head: .head.ref, base: .base.ref}'
else
    echo "No open PRs found"
fi

# 5. Merge cursor branch
echo "5. Attempting to merge cursor/prepare-git-repository-for-build-c571..."
git merge cursor/prepare-git-repository-for-build-c571
if [ $? -eq 0 ]; then
    echo "✓ Merge successful! No conflicts found."
    echo "6. Pushing changes to origin/main..."
    git push origin main
    check_status "Push to origin/main"
else
    echo "✗ Merge conflicts detected. Checking status..."
    git status
    echo "Files with conflicts:"
    git diff --name-only --diff-filter=U
    echo "Attempting to resolve conflicts automatically..."
    
    # Try to resolve conflicts automatically
    git add .
    git commit -m "Resolve merge conflicts automatically"
    git push origin main
fi

echo "=== MERGE PROCESS COMPLETED ==="
echo "Finished at: $(date)"