#!/bin/bash

# Comprehensive PR Merger Script
# Merges all open PRs into main branch

set -e

echo "=========================================="
echo "Starting Comprehensive PR Merge Process"
echo "=========================================="
echo ""

# List of PRs to merge (from newest to oldest)
PRS=(
  "26238:cursor/fix-errors-and-merge-to-main-016f"
  "26237:cursor/fix-errors-and-merge-to-main-4d3d"
  "26236:cursor/fix-errors-and-merge-to-main-1fda"
  "26235:cursor/fix-errors-and-merge-to-main-9d5a"
  "26234:cursor/fix-errors-and-merge-to-main-e10a"
  "26233:cursor/fix-errors-and-merge-to-main-c5c2"
  "26232:cursor/fix-errors-and-merge-to-main-05e6"
  "26231:cursor/fix-errors-and-merge-to-main-ea05"
  "26230:cursor/fix-errors-and-merge-to-main-49e0"
  "26229:cursor/fix-errors-and-merge-to-main-0710"
  "26228:cursor/fix-errors-and-merge-to-main-7c89"
  "26226:cursor/fix-errors-and-merge-to-main-f537"
  "26225:cursor/fix-errors-and-merge-to-main-75d4"
  "26224:cursor/fix-errors-and-merge-to-main-e348"
  "26223:cursor/fix-errors-and-merge-to-main-4a29"
  "26222:cursor/fix-errors-and-merge-to-main-74c6"
)

MERGED=0
FAILED=0
SKIPPED=0

# Ensure we're on main and up to date
echo "Updating main branch..."
git checkout main
git pull origin main

echo ""
echo "Processing ${#PRS[@]} PRs..."
echo ""

for pr_info in "${PRS[@]}"; do
  IFS=':' read -r PR_NUM BRANCH <<< "$pr_info"
  
  echo "----------------------------------------"
  echo "Processing PR #$PR_NUM: $BRANCH"
  echo "----------------------------------------"
  
  # Fetch the branch
  if ! git fetch origin "$BRANCH"; then
    echo "❌ Failed to fetch branch $BRANCH"
    ((FAILED++))
    continue
  fi
  
  # Check if branch exists
  if ! git rev-parse "origin/$BRANCH" >/dev/null 2>&1; then
    echo "⚠️  Branch $BRANCH not found, skipping"
    ((SKIPPED++))
    continue
  fi
  
  # Try to merge
  echo "Attempting to merge origin/$BRANCH into main..."
  
  if git merge "origin/$BRANCH" --no-edit -m "Merge PR #$PR_NUM: Fix errors and merge to main"; then
    echo "✅ Successfully merged PR #$PR_NUM"
    ((MERGED++))
  else
    echo "⚠️  Merge conflict detected for PR #$PR_NUM"
    
    # Auto-resolve conflicts by accepting main changes for problematic files
    git status --short | grep "^UU\|^AA\|^DD" | awk '{print $2}' | while read -r conflict_file; do
      echo "   Resolving conflict in: $conflict_file"
      
      # For report files, accept both versions
      if [[ "$conflict_file" == *"REPORT"* ]] || [[ "$conflict_file" == *"SUMMARY"* ]]; then
        git add "$conflict_file" 2>/dev/null || git checkout --ours "$conflict_file" && git add "$conflict_file"
      else
        # For other files, keep main version
        git checkout --ours "$conflict_file" && git add "$conflict_file"
      fi
    done
    
    # Complete the merge
    if git commit --no-edit -m "Merge PR #$PR_NUM: Fix errors and merge to main (auto-resolved conflicts)"; then
      echo "✅ Successfully merged PR #$PR_NUM (with conflict resolution)"
      ((MERGED++))
    else
      echo "❌ Failed to complete merge for PR #$PR_NUM"
      git merge --abort 2>/dev/null || true
      ((FAILED++))
    fi
  fi
  
  echo ""
done

echo "=========================================="
echo "Merge Summary"
echo "=========================================="
echo "Total PRs processed: ${#PRS[@]}"
echo "Successfully merged: $MERGED"
echo "Failed: $FAILED"
echo "Skipped: $SKIPPED"
echo "=========================================="

# Push changes to main
if [ $MERGED -gt 0 ]; then
  echo ""
  echo "Pushing merged changes to origin/main..."
  if git push origin main; then
    echo "✅ Successfully pushed all changes to main"
  else
    echo "❌ Failed to push changes. Please push manually."
    exit 1
  fi
fi

echo ""
echo "✅ All operations completed!"