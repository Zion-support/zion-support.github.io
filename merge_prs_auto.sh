#!/usr/bin/env bash
set -euo pipefail

# Usage: ./merge_prs_auto.sh [count]
COUNT="${1:-5}"

echo "Fetching PR refs..."
git fetch origin '+refs/pull/*/head:refs/remotes/origin/pr/*' | cat

echo "Switching to main and updating..."
git checkout main
git pull --ff-only origin main

echo "Enumerating first $COUNT PRs..."
mapfile -t PRS < <(git for-each-ref --format='%(refname:short)' refs/remotes/origin/pr | sed 's#^origin/pr/##' | head -n "$COUNT")

echo "Found PRs: ${PRS[*]}"

for pr in "${PRS[@]}"; do
  echo "==== Processing PR #$pr ===="
  # Merge remote PR ref directly into main
  if git merge --no-ff "origin/pr/$pr" -m "Merge PR #$pr"; then
    echo "Merged PR $pr cleanly"
  else
    echo "Conflict on PR $pr, attempting 'theirs' strategy"
    if git merge -X theirs "origin/pr/$pr" -m "Merge PR #$pr with theirs strategy"; then
      echo "Merged PR $pr with 'theirs' strategy"
    else
      echo "Strategy failed for PR $pr, aborting merge and skipping"
      git merge --abort || true
      continue
    fi
  fi

done

echo "Pushing main..."
git push origin main

echo "Done."

