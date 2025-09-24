#!/bin/bash

# Script to merge all codex branches into main
# This script will attempt to merge branches systematically and handle conflicts

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
SUCCESS_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0
TOTAL_COUNT=0

echo -e "${BLUE}Starting bulk merge of codex branches...${NC}"

# Get all codex branches
BRANCHES=$(git branch -r | grep "origin/.*-codex/" | head -50)

for branch in $BRANCHES; do
    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    echo -e "\n${YELLOW}[$TOTAL_COUNT] Attempting to merge: $branch${NC}"
    
    # Fetch the latest changes
    BRANCH_NAME=$(echo "$branch" | sed 's/origin\///')
    git fetch origin "$BRANCH_NAME"
    
    # Try to merge
    if git merge --no-edit "$branch" 2>/dev/null; then
        echo -e "${GREEN}✅ Successfully merged: $branch${NC}"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Commit the merge if needed
        if [ -n "$(git status --porcelain)" ]; then
            git add .
            git commit -m "Merge branch '$BRANCH_NAME' into main"
        fi
    else
        echo -e "${RED}❌ Merge conflict in: $branch${NC}"
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Reset to clean state
        git merge --abort 2>/dev/null || true
        git reset --hard HEAD
        
        # Log the conflicted branch
        echo "$BRANCH_NAME" >> /workspace/conflicted_branches.txt
    fi
    
    # Break after 10 merges to avoid overwhelming the system
    if [ $TOTAL_COUNT -ge 10 ]; then
        echo -e "${YELLOW}Stopping after 10 merges to assess progress...${NC}"
        break
    fi
done

echo -e "\n${BLUE}=== Merge Summary ===${NC}"
echo -e "${GREEN}Successful merges: $SUCCESS_COUNT${NC}"
echo -e "${RED}Conflicts: $CONFLICT_COUNT${NC}"
echo -e "${YELLOW}Total processed: $TOTAL_COUNT${NC}"

if [ -f /workspace/conflicted_branches.txt ]; then
    echo -e "\n${RED}Conflicted branches:${NC}"
    cat /workspace/conflicted_branches.txt
fi