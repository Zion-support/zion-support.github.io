#!/usr/bin/env bash
set -euo pipefail

MAX=${1:-20}

echo "Fetching PR heads..." >&2
git fetch origin "+refs/pull/*/head:refs/remotes/origin/pr/*" >/dev/null

mapfile -t PRS < <(git for-each-ref --format='%(refname:short)' refs/remotes/origin/pr/ | sort -V | tail -n "$MAX")

echo "Will attempt to merge ${#PRS[@]} PRs into main" >&2

git checkout main >/dev/null
git pull --ff-only origin main >/dev/null || true

MERGED=()
FAILED=()

for REF in "${PRS[@]}"; do
  PRNUM=${REF##*/}
  echo "\n=== Merging PR #$PRNUM ($REF) into main ===" >&2
  if ! git merge --no-ff -X theirs -m "Merge PR #$PRNUM into main (auto-resolve preferring incoming)" "$REF"; then
    echo "Conflict merging $REF; aborting merge and skipping." >&2
    git merge --abort || true
    FAILED+=("$PRNUM")
    continue
  fi
  MERGED+=("$PRNUM")
  # Push incrementally to reduce risk
  git push origin main || true
done

# Final build check
npm run build --silent >/dev/null && echo "BUILD_OK" || echo "BUILD_FAIL"

echo "MERGED: ${MERGED[*]}"; echo "FAILED: ${FAILED[*]}"
