#!/bin/bash

# Script to merge all cursor/fix-errors-and-merge-to-main branches into main
# This will attempt to merge each branch, resolving conflicts automatically when possible

set -e

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting merge process for all cursor branches${NC}"

# Ensure we're on main and have latest
git checkout main
git pull origin main

# Get all cursor branches
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main-" | grep -v "cbb3" | sed 's/origin\///' | sort)

total=$(echo "$branches" | wc -l)
current=0
success=0
failed=0

echo -e "${GREEN}Found $total branches to merge${NC}"

# Create log file
LOG_FILE="merge-cursor-branches-$(date +%Y%m%d-%H%M%S).log"
echo "Merge process started at $(date)" > "$LOG_FILE"

for branch in $branches; do
    current=$((current + 1))
    echo -e "\n${YELLOW}[$current/$total] Processing: $branch${NC}"
    echo "Processing: $branch" >> "$LOG_FILE"
    
    # Fetch the branch
    git fetch origin "$branch:$branch" 2>/dev/null || true
    
    # Try to merge
    if git merge "$branch" --no-edit -m "Merge $branch into main" 2>&1 | tee -a "$LOG_FILE"; then
        echo -e "${GREEN}✓ Successfully merged $branch${NC}"
        echo "SUCCESS: $branch" >> "$LOG_FILE"
        success=$((success + 1))
    else
        # Check if there are conflicts
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo -e "${RED}✗ Conflicts detected in $branch, attempting auto-resolution${NC}"
            
            # Auto-resolve conflicts by taking our version (main)
            git diff --name-only --diff-filter=U | while read file; do
                echo "  Resolving conflict in: $file"
                git checkout --ours "$file" 2>/dev/null || git checkout --theirs "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Try to complete the merge
            if git commit --no-edit -m "Merge $branch into main (conflicts auto-resolved)" 2>&1 | tee -a "$LOG_FILE"; then
                echo -e "${GREEN}✓ Merged $branch with auto-resolved conflicts${NC}"
                echo "SUCCESS (auto-resolved): $branch" >> "$LOG_FILE"
                success=$((success + 1))
            else
                echo -e "${RED}✗ Failed to merge $branch${NC}"
                echo "FAILED: $branch" >> "$LOG_FILE"
                git merge --abort 2>/dev/null || true
                failed=$((failed + 1))
            fi
        else
            echo -e "${RED}✗ Failed to merge $branch (no conflicts detected)${NC}"
            echo "FAILED (no conflicts): $branch" >> "$LOG_FILE"
            git merge --abort 2>/dev/null || true
            failed=$((failed + 1))
        fi
    fi
    
    # Clean up local branch
    git branch -D "$branch" 2>/dev/null || true
done

echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}Merge Summary:${NC}"
echo -e "${GREEN}  Total branches: $total${NC}"
echo -e "${GREEN}  Successfully merged: $success${NC}"
echo -e "${RED}  Failed: $failed${NC}"
echo -e "${GREEN}========================================${NC}"

echo "" >> "$LOG_FILE"
echo "Merge process completed at $(date)" >> "$LOG_FILE"
echo "Total: $total, Success: $success, Failed: $failed" >> "$LOG_FILE"

echo -e "\n${GREEN}Log saved to: $LOG_FILE${NC}"

# Push changes to origin/main
echo -e "\n${YELLOW}Pushing changes to origin/main...${NC}"
if git push origin main; then
    echo -e "${GREEN}✓ Successfully pushed to origin/main${NC}"
else
    echo -e "${RED}✗ Failed to push to origin/main${NC}"
    echo "Please review and push manually"
    exit 1
fi

echo -e "\n${GREEN}All done!${NC}"
