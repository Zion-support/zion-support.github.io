#!/bin/bash

# Script to find and merge all branches with unmerged commits

set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}Finding and merging branches with unmerged commits...${NC}"

# Get all cursor branches
all_branches=$(git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main-" | sed 's/^ *//' | head -200)

unmerged_branches=()
already_merged=0
total=0

echo -e "${YELLOW}Checking first 200 branches for unmerged commits...${NC}"

for remote_branch in $all_branches; do
    total=$((total + 1))
    branch=${remote_branch#origin/}
    
    # Check if branch has commits not in main
    if ! git merge-base --is-ancestor "$remote_branch" HEAD 2>/dev/null; then
        unmerged_branches+=("$branch")
        echo -e "${RED}❌ Found unmerged: $branch${NC}"
    else
        already_merged=$((already_merged + 1))
    fi
    
    # Progress indicator
    if [ $((total % 20)) -eq 0 ]; then
        echo -e "${YELLOW}Checked $total branches... (Unmerged: ${#unmerged_branches[@]}, Merged: $already_merged)${NC}"
    fi
done

echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}Summary:${NC}"
echo -e "${GREEN}  Total checked: $total${NC}"
echo -e "${GREEN}  Already merged: $already_merged${NC}"
echo -e "${RED}  Need merging: ${#unmerged_branches[@]}${NC}"
echo -e "${GREEN}================================${NC}"

if [ ${#unmerged_branches[@]} -eq 0 ]; then
    echo -e "${GREEN}✅ All checked branches are already merged!${NC}"
    exit 0
fi

echo ""
echo -e "${YELLOW}Merging ${#unmerged_branches[@]} branches...${NC}"

success=0
failed=0

for branch in "${unmerged_branches[@]}"; do
    echo -e "\n${YELLOW}Merging: $branch${NC}"
    
    if git merge "origin/$branch" --no-edit -m "Merge $branch into main" 2>&1; then
        echo -e "${GREEN}✅ Successfully merged $branch${NC}"
        success=$((success + 1))
    else
        # Check for conflicts
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo -e "${RED}⚠️  Conflicts detected, attempting auto-resolution...${NC}"
            
            # Auto-resolve by taking our version
            git diff --name-only --diff-filter=U | while read file; do
                echo "  Resolving: $file"
                git checkout --ours "$file" 2>/dev/null || git checkout --theirs "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            if git commit --no-edit -m "Merge $branch (conflicts auto-resolved)" 2>&1; then
                echo -e "${GREEN}✅ Merged $branch with auto-resolved conflicts${NC}"
                success=$((success + 1))
            else
                echo -e "${RED}✗ Failed to merge $branch${NC}"
                git merge --abort 2>/dev/null || true
                failed=$((failed + 1))
            fi
        else
            echo -e "${RED}✗ Failed to merge $branch${NC}"
            git merge --abort 2>/dev/null || true
            failed=$((failed + 1))
        fi
    fi
done

echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}Merge Results:${NC}"
echo -e "${GREEN}  Success: $success${NC}"
echo -e "${RED}  Failed: $failed${NC}"
echo -e "${GREEN}================================${NC}"

echo -e "\n${GREEN}Done!${NC}"
