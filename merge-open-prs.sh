#!/bin/bash

set -euo pipefail

echo "Starting to merge open pull requests into main branch..."
echo "=================================================="

echo "Merge process completed!"
echo "Total branches processed: $TOTAL_BRANCHES"
echo "Successful merges: $SUCCESSFUL"
echo "Failed merges: $FAILED"
echo "=================================================="

# Clean up any remaining temp branches
echo "Cleaning up temporary branches..."
git branch | grep "temp-merge-" | xargs -r git branch -D

echo "Cleanup completed!"
=======
# Ensure we're on main and up to date
git fetch --all --prune
git checkout main
git pull --no-edit origin main || true

# Create a backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push -u origin "$BACKUP_BRANCH"
git checkout main

SUCCESSFUL_MERGES=0
FAILED_MERGES=0

echo "📋 Fetching open PRs from GitHub..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

echo "🔄 Processing open PRs..."
awk '
/"number":/ { n = $2; gsub(/,/, "", n); pr = n }
/"head":/ { in_head = 1 }
/"ref":/ && in_head { r = substr($0, index($0, ":") + 3); gsub(/,$/, "", r); gsub(/"/, "", r); if (r != "ref" && r != "href" && r != "archive_url" && r != "git_refs_url") { printf "%s|%s\n", pr, r; in_head = 0 } }
' prs.json | while IFS='|' read -r pr_number branch_name; do
  [ -z "${pr_number:-}" ] && continue
  [ -z "${branch_name:-}" ] && continue
  echo "\n🔄 Processing PR #$pr_number from branch: $branch_name"
  git fetch origin "$branch_name" || { echo "⚠️  Could not fetch $branch_name"; FAILED_MERGES=$((FAILED_MERGES+1)); continue; }

  # Try a merge preferring incoming changes (theirs)
  if git merge -m "Merge PR #$pr_number ($branch_name) into main" -X theirs --no-ff "origin/$branch_name"; then
    echo "✅ Merged $branch_name with -X theirs"
    SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES+1))
  else
    echo "⚠️  Merge with -X theirs failed, attempting -X ours..."
    git merge --abort || true
    if git merge -m "Merge PR #$pr_number ($branch_name) into main (ours-preferred)" -X ours --no-ff "origin/$branch_name"; then
      echo "✅ Merged $branch_name with -X ours"
      SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES+1))
    else
      echo "❌ Merge failed for $branch_name; aborting and continuing"
      git merge --abort || true
      FAILED_MERGES=$((FAILED_MERGES+1))
      continue
    fi
  fi

  # Push every 5 merges
  if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ]; then
    echo "💾 Pushing progress to remote..."
    git push origin main || true
  fi
done

echo "💾 Pushing final changes to remote..."
git push origin main || true

echo "\n🎉 Open PR merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"
