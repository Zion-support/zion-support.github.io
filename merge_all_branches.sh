#!/bin/bash

# Comprehensive Branch Merger Script
# Merges all unmerged branches into main with automatic conflict resolution

set -e

echo "====="
echo "Comprehensive Branch Merger Script"
echo "====="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Ensure we're on main and up to date
echo "Step 1: Ensuring we're on main branch..."
git checkout main
git pull origin main

echo ""
echo "Step 2: Getting list of unmerged branches..."

# Get unmerged branches, prioritizing recent ones
UNMERGED_BRANCHES=($(git branch -r --no-merged main | grep -E "(cursor/fix-errors|add-new|ai-)" | head -20))

echo "Found ${#UNMERGED_BRANCHES[@]} branches to merge"
echo ""

MERGED=0
FAILED=0
SKIPPED=0

for branch in "${UNMERGED_BRANCHES[@]}"; do
  # Extract branch name without origin/
  BRANCH_NAME=${branch#origin/}
  
  echo "----------------------------------------"
  echo "Processing branch: $BRANCH_NAME"
  echo "----------------------------------------"
  
  # Fetch the branch
  if ! git fetch origin "$BRANCH_NAME"; then
    echo -e "${RED}❌ Failed to fetch branch $BRANCH_NAME${NC}"
    ((FAILED++))
    continue
  fi
  
  # Check if branch exists
  if ! git rev-parse "origin/$BRANCH_NAME" >/dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Branch $BRANCH_NAME not found, skipping${NC}"
    ((SKIPPED++))
    continue
  fi
  
  # Try to merge
  echo "Attempting to merge origin/$BRANCH_NAME into main..."
  
  if git merge "origin/$BRANCH_NAME" --no-edit -m "Merge $BRANCH_NAME: Fix errors and improvements"; then
    echo -e "${GREEN}✅ Successfully merged $BRANCH_NAME${NC}"
    ((MERGED++))
  else
    echo -e "${YELLOW}⚠️  Merge conflict detected for $BRANCH_NAME${NC}"
    
    # Auto-resolve conflicts
    echo "Auto-resolving conflicts..."
    
    # Get list of conflicted files
    CONFLICTED_FILES=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
    
    if [ -n "$CONFLICTED_FILES" ]; then
      echo "Conflicted files:"
      echo "$CONFLICTED_FILES"
      
      # Resolve conflicts by accepting incoming changes for most files
      echo "$CONFLICTED_FILES" | while read -r conflict_file; do
        if [ -n "$conflict_file" ]; then
          echo "   Resolving conflict in: $conflict_file"
          
          # For deleted files, remove them
          if [[ "$conflict_file" == *"deleted"* ]] || ! [ -f "$conflict_file" ]; then
            git rm "$conflict_file" 2>/dev/null || true
          else
            # For other files, accept incoming changes
            git checkout --theirs "$conflict_file" 2>/dev/null || git checkout --ours "$conflict_file" 2>/dev/null || true
            git add "$conflict_file" 2>/dev/null || true
          fi
        fi
      done
      
      # Complete the merge
      if git commit --no-edit -m "Merge $BRANCH_NAME: Fix errors and improvements (auto-resolved conflicts)"; then
        echo -e "${GREEN}✅ Successfully merged $BRANCH_NAME (with conflict resolution)${NC}"
        ((MERGED++))
      else
        echo -e "${RED}❌ Failed to complete merge for $BRANCH_NAME${NC}"
        git merge --abort 2>/dev/null || true
        ((FAILED++))
      fi
    else
      echo -e "${RED}❌ No conflicted files found, aborting merge${NC}"
      git merge --abort 2>/dev/null || true
      ((FAILED++))
    fi
  fi
  
  echo ""
done

echo ""
echo "====="
echo "Merge Summary"
echo "====="
echo "Total branches processed: ${#UNMERGED_BRANCHES[@]}"
echo -e "${GREEN}Successfully merged: $MERGED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
echo -e "${YELLOW}Skipped: $SKIPPED${NC}"
echo ""

# Push changes to main
if [ $MERGED -gt 0 ]; then
  echo ""
  echo "Pushing merged changes to origin/main..."
  if git push origin main; then
    echo -e "${GREEN}✅ Successfully pushed all changes to main${NC}"
  else
    echo -e "${RED}❌ Failed to push changes. Please push manually.${NC}"
    exit 1
  fi
fi

echo ""
echo -e "${GREEN}✅ All operations completed!${NC}"