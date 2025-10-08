#!/bin/bash

# Script to merge all open PRs into main
# This will attempt to merge each PR and handle conflicts

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "Starting PR merge process..."

# Array of PR numbers to merge (from GitHub API)
PRS=(26241 26240 26239 26234 26233 26232 26231 26230 26229 26228 26226 26225 26224 26223 26222)

MERGED_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0

# Ensure we're on main and up to date
git checkout main
git pull origin main

for PR_NUM in "${PRS[@]}"; do
    echo -e "\n${YELLOW}Processing PR #$PR_NUM...${NC}"
    
    # Fetch the PR branch
    PR_BRANCH="cursor/fix-errors-and-merge-to-main-$(echo $PR_NUM | tail -c 5)"
    
    # Try to find the actual branch name from remote
    ACTUAL_BRANCH=$(git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main" | grep -i "$(echo $PR_NUM | tail -c 5)" | head -1 | xargs)
    
    if [ -z "$ACTUAL_BRANCH" ]; then
        # Try to get branch name from GitHub API
        ACTUAL_BRANCH=$(curl -s -H "Authorization: token ghs_zt537J9SHK92qBViUAdhjEtLWqNYwH0po8A9" \
            "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$PR_NUM" | \
            python3 -c "import json, sys; pr=json.load(sys.stdin); print(pr['head']['ref'])" 2>/dev/null)
        
        if [ -z "$ACTUAL_BRANCH" ]; then
            echo -e "${RED}Could not find branch for PR #$PR_NUM${NC}"
            ((ERROR_COUNT++))
            continue
        fi
        ACTUAL_BRANCH="origin/$ACTUAL_BRANCH"
    fi
    
    echo "Found branch: $ACTUAL_BRANCH"
    
    # Try to merge
    if git merge --no-edit "$ACTUAL_BRANCH" 2>&1; then
        echo -e "${GREEN}✓ Successfully merged PR #$PR_NUM${NC}"
        ((MERGED_COUNT++))
    else
        # Merge conflict occurred
        echo -e "${YELLOW}⚠ Merge conflict in PR #$PR_NUM, attempting auto-resolution...${NC}"
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "Conflicted files:"
            echo "$CONFLICTED_FILES"
            
            # Try to resolve conflicts by accepting theirs for most files
            for file in $CONFLICTED_FILES; do
                # For most files, prefer incoming changes (theirs)
                git checkout --theirs "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Try to complete the merge
            if git commit --no-edit 2>&1; then
                echo -e "${GREEN}✓ Auto-resolved and merged PR #$PR_NUM${NC}"
                ((MERGED_COUNT++))
            else
                echo -e "${RED}✗ Failed to auto-resolve PR #$PR_NUM${NC}"
                git merge --abort 2>/dev/null || true
                ((CONFLICT_COUNT++))
            fi
        else
            echo -e "${RED}✗ Failed to merge PR #$PR_NUM${NC}"
            git merge --abort 2>/dev/null || true
            ((ERROR_COUNT++))
        fi
    fi
done

echo -e "\n${GREEN}═══════════════════════════════════════${NC}"
echo -e "${GREEN}Merge Summary:${NC}"
echo -e "${GREEN}  Successfully merged: $MERGED_COUNT${NC}"
echo -e "${YELLOW}  Conflicts (unresolved): $CONFLICT_COUNT${NC}"
echo -e "${RED}  Errors: $ERROR_COUNT${NC}"
echo -e "${GREEN}═══════════════════════════════════════${NC}"

# Push changes if any PRs were merged
if [ $MERGED_COUNT -gt 0 ]; then
    echo -e "\n${YELLOW}Pushing changes to main...${NC}"
    if git push origin main; then
        echo -e "${GREEN}✓ Successfully pushed changes to main${NC}"
    else
        echo -e "${RED}✗ Failed to push changes${NC}"
        exit 1
    fi
fi

echo -e "\n${GREEN}Done!${NC}"