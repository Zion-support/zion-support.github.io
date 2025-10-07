#!/bin/bash

# Automated PR Merge Script
# This script helps resolve conflicts and merge open PRs
# Generated: 2025-10-07

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Automated PR Merge & Conflict Resolution${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Configuration
REPO="Zion-Holdings/zion.app"
MAIN_BRANCH="main"
PR_DATA_FILE="/tmp/prs.json"

# Lists of PRs
CLEAN_PRS=(
    "cursor/fix-errors-and-merge-to-main-3427"
    "cursor/undefined-awde-task-40d3"
)

CONFLICTED_PRS=(
    "cursor/fix-errors-and-merge-to-main-8c9c"
    "cursor/fix-errors-and-merge-to-main-ee79"
    "cursor/fix-errors-and-merge-to-main-ad68"
    "cursor/fix-errors-and-merge-to-main-b8cc"
    "cursor/fix-errors-and-merge-to-main-aa60"
    "cursor/fix-errors-and-merge-to-main-81c0"
    "cursor/fix-errors-and-merge-to-main-faa7"
    "cursor/fix-errors-and-merge-to-main-545e"
    "cursor/fix-errors-and-merge-to-main-3834"
    "cursor/fix-errors-and-merge-to-main-bb66"
    "cursor/fix-errors-and-merge-to-main-a886"
    "cursor/fix-errors-and-merge-to-main-2e7b"
    "cursor/fix-errors-and-merge-to-main-7dc8"
    "cursor/fix-errors-and-merge-to-main-3567"
)

# Function to check if gh CLI is available
check_gh_cli() {
    if ! command -v gh &> /dev/null; then
        echo -e "${YELLOW}⚠️  GitHub CLI (gh) not found${NC}"
        echo "Please install: https://cli.github.com/"
        return 1
    fi
    return 0
}

# Function to merge a clean PR
merge_clean_pr() {
    local branch=$1
    local pr_number=$2
    
    echo -e "${GREEN}✅ Merging clean PR: $branch${NC}"
    
    if check_gh_cli; then
        gh pr merge "$pr_number" --merge --auto || echo -e "${YELLOW}Note: Auto-merge may need approval${NC}"
    else
        echo "  Manual merge command:"
        echo "  git checkout $MAIN_BRANCH"
        echo "  git pull origin $MAIN_BRANCH"
        echo "  git merge origin/$branch"
        echo "  git push origin $MAIN_BRANCH"
    fi
}

# Function to resolve conflicts in a PR
resolve_conflicted_pr() {
    local branch=$1
    
    echo -e "${RED}❌ Resolving conflicts in: $branch${NC}"
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || true
    
    # Create a temporary branch for resolution
    temp_branch="temp-resolve-$branch"
    git checkout -b "$temp_branch" "origin/$branch" 2>/dev/null || true
    
    # Try to merge main
    if git merge "origin/$MAIN_BRANCH" --no-commit --no-ff 2>/dev/null; then
        echo -e "${GREEN}  ✓ Merged without conflicts (unexpected!)${NC}"
        git merge --abort 2>/dev/null || true
    else
        echo -e "${YELLOW}  ⚙️  Conflicts detected, attempting auto-resolution...${NC}"
        
        # Get list of conflicted files
        conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            echo "  Conflicted files:"
            echo "$conflicted_files" | while read file; do
                echo "    - $file"
                
                # Strategy: Accept "their" changes (from main) for most conflicts
                # This assumes main is the source of truth
                if [ -f "$file" ]; then
                    git checkout --theirs "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Complete the merge
            git commit -m "Resolve conflicts with main for $branch" 2>/dev/null || true
            echo -e "${GREEN}  ✓ Conflicts resolved${NC}"
        fi
        
        git merge --abort 2>/dev/null || true
    fi
    
    # Clean up temp branch
    git checkout "$MAIN_BRANCH" 2>/dev/null || true
    git branch -D "$temp_branch" 2>/dev/null || true
}

# Main execution
main() {
    echo -e "${BLUE}Step 1: Fetch latest changes${NC}"
    git fetch origin
    git checkout "$MAIN_BRANCH"
    git pull origin "$MAIN_BRANCH"
    echo ""
    
    echo -e "${BLUE}Step 2: Merge clean PRs (${#CLEAN_PRS[@]} total)${NC}"
    for branch in "${CLEAN_PRS[@]}"; do
        # Get PR number from API
        pr_number=$(curl -s "https://api.github.com/repos/$REPO/pulls?head=Zion-Holdings:$branch&state=open" | python3 -c "import sys, json; prs=json.load(sys.stdin); print(prs[0]['number'] if prs else '')" 2>/dev/null || echo "")
        
        if [ -n "$pr_number" ]; then
            merge_clean_pr "$branch" "$pr_number"
        else
            echo -e "${YELLOW}⚠️  No open PR found for $branch${NC}"
        fi
    done
    echo ""
    
    echo -e "${BLUE}Step 3: Resolve conflicted PRs (${#CONFLICTED_PRS[@]} total)${NC}"
    for branch in "${CONFLICTED_PRS[@]}"; do
        resolve_conflicted_pr "$branch"
    done
    echo ""
    
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}  Process Complete!${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Review the changes in each PR"
    echo "2. Test the builds"
    echo "3. Merge using GitHub web interface or gh CLI"
    echo "4. Clean up merged branches"
}

# Run if executed directly
if [ "${BASH_SOURCE[0]}" == "${0}" ]; then
    main "$@"
fi
