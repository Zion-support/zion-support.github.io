#!/bin/bash

# Efficient bulk merge script for codex branches
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting bulk merge of all codex branches...${NC}"

# Get all codex branches
ALL_BRANCHES=$(git branch -r | grep "origin/.*-codex/" | wc -l)
echo -e "${YELLOW}Found $ALL_BRANCHES codex branches to merge${NC}"

# Process branches in batches of 50
BATCH_SIZE=50
PROCESSED=0
MERGED=0
UP_TO_DATE=0
CONFLICTS=0

# Create a temporary file to track progress
echo "Starting merge process at $(date)" > /workspace/merge_progress.log

# Get all codex branches
git branch -r | grep "origin/.*-codex/" | while read -r branch; do
    PROCESSED=$((PROCESSED + 1))
    
    # Extract branch name without origin/
    BRANCH_NAME=$(echo "$branch" | sed 's/origin\///')
    
    echo -e "\n${YELLOW}[$PROCESSED/$ALL_BRANCHES] Processing: $BRANCH_NAME${NC}"
    
    # Try to merge
    if git merge --no-edit "$branch" 2>/dev/null; then
        echo -e "${GREEN}✅ Merged: $BRANCH_NAME${NC}"
        MERGED=$((MERGED + 1))
        echo "MERGED: $BRANCH_NAME" >> /workspace/merge_progress.log
    else
        # Check if it's already up to date or has conflicts
        if git merge --no-edit "$branch" 2>&1 | grep -q "Already up to date"; then
            echo -e "${BLUE}📋 Already up to date: $BRANCH_NAME${NC}"
            UP_TO_DATE=$((UP_TO_DATE + 1))
            echo "UP_TO_DATE: $BRANCH_NAME" >> /workspace/merge_progress.log
        else
            echo -e "${RED}❌ Conflict: $BRANCH_NAME${NC}"
            CONFLICTS=$((CONFLICTS + 1))
            echo "CONFLICT: $BRANCH_NAME" >> /workspace/merge_progress.log
            # Reset to clean state
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Show progress every 50 branches
    if [ $((PROCESSED % 50)) -eq 0 ]; then
        echo -e "\n${BLUE}=== Progress Update ===${NC}"
        echo -e "Processed: $PROCESSED/$ALL_BRANCHES"
        echo -e "Merged: $MERGED"
        echo -e "Up to date: $UP_TO_DATE"
        echo -e "Conflicts: $CONFLICTS"
        echo -e "========================\n"
    fi
done

echo -e "\n${BLUE}=== Final Summary ===${NC}"
echo -e "Total processed: $PROCESSED"
echo -e "${GREEN}Successfully merged: $MERGED${NC}"
echo -e "${BLUE}Already up to date: $UP_TO_DATE${NC}"
echo -e "${RED}Conflicts: $CONFLICTS${NC}"

# Commit any pending changes
if [ -n "$(git status --porcelain)" ]; then
    echo -e "\n${YELLOW}Committing final changes...${NC}"
    git add .
    git commit -m "Bulk merge of codex branches - processed $PROCESSED branches"
fi

echo -e "\n${GREEN}Bulk merge completed at $(date)${NC}"