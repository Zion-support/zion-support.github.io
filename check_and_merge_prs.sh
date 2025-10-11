#!/bin/bash

# Check and Merge All Open PRs Script
# This script checks GitHub for open PRs and merges them into main

set -e

echo "================================="
echo "PR Check and Merge Script"
echo "================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if we have GitHub CLI installed
if ! command -v gh &> /dev/null; then
    echo -e "${YELLOW}GitHub CLI not installed. Installing...${NC}"
    # Try to use API directly instead
    echo "Using git and curl for PR management"
fi

# Step 1: Get current status
echo "Step 1: Checking current git status..."
git status
echo ""

# Step 2: Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo -e "${GREEN}Current branch: $CURRENT_BRANCH${NC}"
echo ""

# Step 3: Fetch all remote branches
echo "Step 2: Fetching all remote branches..."
git fetch --all
echo ""

# Step 4: List all remote branches
echo "Step 3: Listing all remote branches..."
git branch -r
echo ""

# Step 5: Switch to main branch
echo "Step 4: Switching to main branch..."
if [ "$CURRENT_BRANCH" != "main" ]; then
    git checkout main
    git pull origin main
fi
echo ""

# Step 6: Check for open PRs using GitHub API
echo "Step 5: Checking for open PRs on GitHub..."
echo ""

# Try to get repo info from git remote
REPO_URL=$(git config --get remote.origin.url)
echo "Repository: $REPO_URL"
echo ""

# Extract owner and repo name from URL
if [[ $REPO_URL =~ github.com[:/]([^/]+)/([^/.]+) ]]; then
    OWNER="${BASH_REMATCH[1]}"
    REPO="${BASH_REMATCH[2]}"
    echo "Owner: $OWNER"
    echo "Repo: $REPO"
    echo ""
    
    # Check for open PRs using curl
    echo "Fetching open PRs from GitHub API..."
    curl -s "https://api.github.com/repos/$OWNER/$REPO/pulls?state=open" > /tmp/open_prs.json
    
    # Count open PRs
    PR_COUNT=$(cat /tmp/open_prs.json | grep -o '"number":' | wc -l)
    echo -e "${GREEN}Found $PR_COUNT open PR(s)${NC}"
    echo ""
    
    if [ "$PR_COUNT" -gt 0 ]; then
        echo "Open PRs:"
        cat /tmp/open_prs.json | grep -E '"number"|"title"|"head"' | head -50
        echo ""
    fi
else
    echo -e "${RED}Could not parse repository URL${NC}"
fi

# Step 7: List branches that might need merging
echo "Step 6: Listing branches that start with 'cursor/fix-errors'..."
git branch -r | grep "cursor/fix-errors" || echo "No cursor/fix-errors branches found"
echo ""

# Step 8: List all unmerged branches
echo "Step 7: Checking for unmerged branches..."
git branch -r --no-merged main 2>/dev/null || echo "Could not check unmerged branches"
echo ""

echo "================================="
echo "Manual Actions Needed:"
echo "================================="
echo "1. Review the open PRs listed above"
echo "2. For each PR, check for conflicts"
echo "3. Merge PRs using GitHub UI or:"
echo "   gh pr merge <PR_NUMBER> --merge"
echo ""
echo "Or to merge a specific branch:"
echo "   git merge origin/<branch-name>"
echo ""
echo "================================="