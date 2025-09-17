#!/usr/bin/env bash
set -euo pipefail
OWNER=Zion-Holdings
REPO=zion.app
BRANCH_MAIN=main
log(){ echo "[merge-runner] $(date -Is) $*"; }
log "Fetching PR refs..."
git fetch origin >/dev/null 2>&1 || true
PR_REFS=$(git ls-remote --refs origin "pull/*/head" | awk "{print \$2}" | sed -E "s#refs/pull/([0-9]+)/head#\1#" )
log "Found PRs: $(echo $PR_REFS | wc -w)"
git checkout "$BRANCH_MAIN" >/dev/null 2>&1 || git checkout -b "$BRANCH_MAIN"
git pull --rebase origin "$BRANCH_MAIN" >/dev/null 2>&1 || true
for N in $PR_REFS; do
  log "Processing PR #$N"
  git fetch origin "pull/$N/head:pr-$N" >/dev/null 2>&1 || { log "Fetch failed PR #$N"; continue; }
  git checkout "pr-$N" >/dev/null 2>&1 || { log "Checkout failed PR #$N"; continue; }
  if ! git rebase "origin/$BRANCH_MAIN" >/dev/null 2>&1; then
    log "Rebase conflict on pr-$N; aborting rebase"
    git rebase --abort >/dev/null 2>&1 || true
  fi
  git checkout "$BRANCH_MAIN" >/dev/null 2>&1
  if git merge --no-ff "pr-$N" -m "Merge PR #$N via local merge" >/dev/null 2>&1; then
     log "Merged PR #$N to $BRANCH_MAIN; pushing"
     git push origin "$BRANCH_MAIN" >/dev/null 2>&1 || log "Push failed after PR #$N"
  else
     log "Merge conflict for PR #$N; skipping"
     git merge --abort >/dev/null 2>&1 || true
  fi
  git branch -D "pr-$N" >/dev/null 2>&1 || true
  git pull --rebase origin "$BRANCH_MAIN" >/dev/null 2>&1 || true
 done
log DONE
