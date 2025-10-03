#!/bin/bash
set -e

echo "=========================================="
echo "SMART PR MERGE AUTOMATION"
echo "=========================================="

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
MERGED=0
SKIPPED=0
CONFLICTS_RESOLVED=0
FAILED=0

# Ensure on main
git checkout main
git pull origin main --quiet

echo "Analyzing branches..."

# Get unique branch prefixes (excluding hash suffixes)
BRANCH_PREFIXES=$(git branch -r | grep -E "origin/(cursor|codex)" | \
    sed 's/origin\///' | \
    sed 's/-[a-f0-9]\{4\}$//' | \
    sort -u)

echo "Found $(echo "$BRANCH_PREFIXES" | wc -l) unique branch types"
echo ""

# Function to merge latest of each prefix
merge_latest_from_prefix() {
    local prefix=$1
    
    # Find the most recent branch with this prefix
    LATEST=$(git for-each-ref --sort=-committerdate refs/remotes/origin \
        --format='%(refname:short)' | \
        grep "origin/$prefix" | \
        head -1 | \
        sed 's/origin\///')
    
    if [ -z "$LATEST" ]; then
        return
    fi
    
    # Check if already merged
    if git branch --merged main -r | grep -q "origin/$LATEST"; then
        echo -e "${YELLOW}⊘${NC} Already merged: $LATEST"
        SKIPPED=$((SKIPPED + 1))
        return
    fi
    
    echo -e "\n${YELLOW}→${NC} Processing: $LATEST"
    
    # Fetch
    if ! git fetch origin "$LATEST:$LATEST" 2>/dev/null; then
        echo -e "${RED}✗${NC} Failed to fetch"
        FAILED=$((FAILED + 1))
        return
    fi
    
    # Try merge
    if git merge "$LATEST" --no-edit -m "Merge $LATEST into main" &>/dev/null; then
        echo -e "${GREEN}✓${NC} Merged successfully"
        MERGED=$((MERGED + 1))
        git branch -d "$LATEST" 2>/dev/null || true
        return
    fi
    
    # Handle conflicts
    if git status | grep -q "Unmerged paths\|both modified"; then
        echo -e "${YELLOW}⚠${NC} Resolving conflicts..."
        
        # Accept incoming for conflicts
        git status --short | grep "^UU\|^AA\|^DD\|^DU\|^UD" | awk '{print $2}' | while read file; do
            if [ -f "$file" ]; then
                git checkout --theirs "$file" 2>/dev/null || git add "$file" 2>/dev/null
            else
                git rm "$file" 2>/dev/null || git add "$file" 2>/dev/null
            fi
        done
        
        # Complete merge
        if git commit --no-edit -m "Merge $LATEST (auto-resolved)" &>/dev/null; then
            echo -e "${GREEN}✓${NC} Conflicts resolved and merged"
            CONFLICTS_RESOLVED=$((CONFLICTS_RESOLVED + 1))
            git branch -d "$LATEST" 2>/dev/null || true
        else
            git merge --abort 2>/dev/null
            echo -e "${RED}✗${NC} Could not resolve conflicts"
            FAILED=$((FAILED + 1))
        fi
    else
        git merge --abort 2>/dev/null
        echo -e "${RED}✗${NC} Merge failed"
        FAILED=$((FAILED + 1))
    fi
}

# Process top 200 unique branches
COUNT=0
MAX=200

for prefix in $BRANCH_PREFIXES; do
    COUNT=$((COUNT + 1))
    if [ $COUNT -gt $MAX ]; then
        break
    fi
    
    merge_latest_from_prefix "$prefix"
    
    # Push every 20 successful merges
    if [ $(((MERGED + CONFLICTS_RESOLVED) % 20)) -eq 0 ] && [ $((MERGED + CONFLICTS_RESOLVED)) -gt 0 ]; then
        echo -e "\n${YELLOW}⬆${NC} Pushing batch to remote..."
        git push origin main --quiet && echo -e "${GREEN}✓${NC} Pushed" || echo -e "${RED}✗${NC} Push failed"
    fi
done

# Final push
echo -e "\n${YELLOW}⬆${NC} Final push to remote..."
git push origin main && echo -e "${GREEN}✓${NC} Pushed successfully" || echo -e "${RED}✗${NC} Push failed"

# Summary
echo ""
echo "=========================================="
echo "MERGE SUMMARY"
echo "=========================================="
echo -e "${GREEN}✓${NC} Successfully merged: $MERGED"
echo -e "${GREEN}✓${NC} Conflicts resolved: $CONFLICTS_RESOLVED"
echo -e "${YELLOW}⊘${NC} Skipped (already merged): $SKIPPED"
echo -e "${RED}✗${NC} Failed: $FAILED"
echo ""
TOTAL_SUCCESS=$((MERGED + CONFLICTS_RESOLVED))
TOTAL_PROCESSED=$((COUNT))
echo "Total processed: $TOTAL_PROCESSED"
echo "Success rate: $(awk "BEGIN {printf \"%.1f\", ($TOTAL_SUCCESS / $TOTAL_PROCESSED) * 100}")%"
echo "=========================================="
