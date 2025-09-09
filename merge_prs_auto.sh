#!/usr/bin/env bash
set -euo pipefail

# Requires: GITHUB_TOKEN env var with repo scope

REPO_OWNER="Zion-Holdings"
REPO_NAME="zion.app"

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "GITHUB_TOKEN is required" >&2
  exit 1
fi

echo "🔄 Fetching open PRs from GitHub API..."
prs_json=$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" -H "Accept: application/vnd.github+json" "https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100")

mapfile -t pr_numbers < <(echo "$prs_json" | grep -o '"number"[: ]*[0-9]*' | awk -F: '{print $2}' | xargs -n1)
mapfile -t head_refs < <(echo "$prs_json" | grep -o '"ref"[: ]*"[^"]\+"' | awk -F\" '{print $4}' | awk 'NR%2==1')

if [[ ${#pr_numbers[@]} -eq 0 ]]; then
  echo "✅ No open PRs found"
  exit 0
fi

echo "📋 Found ${#pr_numbers[@]} PRs"

git fetch origin
git checkout main
git pull --ff-only origin main || true

for idx in "${!pr_numbers[@]}"; do
  pr_number="${pr_numbers[$idx]}"
  head_ref="${head_refs[$idx]}"
  if [[ -z "$pr_number" || -z "$head_ref" ]]; then
    continue
  fi

  echo "\n==== Merging PR #$pr_number from $head_ref into main ===="
  git fetch origin "$head_ref" || { echo "⚠️  Failed to fetch $head_ref"; continue; }

  if git merge --no-ff --no-commit "origin/$head_ref"; then
    git commit -m "Merge PR #$pr_number ($head_ref) into main"
    git push origin main
    echo "✅ Merged PR #$pr_number"
    continue
  fi

  echo "⚠️  Conflicts detected. Attempting resolution preferring PR changes..."
  # Prefer PR changes in conflicts
  git checkout --theirs . || true
  git add -A
  if git -c core.editor=true commit -m "Resolve conflicts preferring PR changes for #$pr_number"; then
    git push origin main
    echo "✅ Merged with conflict resolution PR #$pr_number"
    continue
  else
    echo "❌ Unable to auto-resolve PR #$pr_number. Aborting merge."
    git merge --abort || true
  fi
done

echo "🎉 Done processing PRs"

