#!/usr/bin/env bash
set -euo pipefail
LOG_FILE="${1:-/workspace/merge_all.log}"

{
  echo "[start] $(date -Is) merge automation"
  git config core.hooksPath .git/hooks || true

  echo "[info] repo status (pre)" && git status -sb || true

  # Continue any in-progress rebase/merge without interaction
  git rebase --continue 2>/dev/null || true
  git merge --continue 2>/dev/null || true

  # Ensure we're on main and up to date
  current_branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main")
  if [[ "$current_branch" != "main" ]]; then
    git checkout main || true
  fi
  git fetch origin main:refs/remotes/origin/main || true
  git pull --rebase --autostash origin main || true

  # Merge our known content branch if it exists
  if git ls-remote --exit-code --heads origin cursor/create-and-deploy-new-content-1345 >/dev/null 2>&1; then
    echo "[merge] origin/cursor/create-and-deploy-new-content-1345 -> main"
    if ! git merge --no-ff origin/cursor/create-and-deploy-new-content-1345 -m "Merge: content updates and fixes"; then
      echo "[warn] conflict on content branch; retrying with -X theirs";
      git merge --abort || true
      if ! git merge --no-ff -X theirs origin/cursor/create-and-deploy-new-content-1345 -m "Merge (theirs): content updates and fixes"; then
        echo "[fail] content branch still conflicts, aborting and continuing";
        git merge --abort || true
      fi
    fi
    git push origin main || true
  fi

  # Run repository-provided automations if present
  if [[ -f auto_merge_prs.py ]]; then
    echo "[auto] running auto_merge_prs.py"; python3 auto_merge_prs.py || true; fi
  if [[ -f batch-merge-prs.sh ]]; then
    echo "[auto] running batch-merge-prs.sh"; bash batch-merge-prs.sh || true; fi
  if [[ -f bulk-merge-all-prs.sh ]]; then
    echo "[auto] running bulk-merge-all-prs.sh"; bash bulk-merge-all-prs.sh || true; fi

  # Sequentially attempt merges of all likely PR branches
  echo "[scan] fetching remote branches"
  git fetch --all --prune || true
  mapfile -t pr_branches < <(git ls-remote --heads origin | awk '{print $2}' | sed 's#refs/heads/##' | grep -E '^(cursor/|feature/|hotfix/|fix/|chore/|release/)' || true)

  for b in "${pr_branches[@]}"; do
    echo "[merge] attempting $b"
    git checkout main && git pull --rebase --autostash origin main || true
    if git merge --no-ff "origin/$b" -m "Merge PR branch $b into main"; then
      echo "[ok] merged $b"
      git push origin main || true
    else
      echo "[conflict] $b -> retrying with -X theirs"
      git merge --abort || true
      if git merge --no-ff -X theirs "origin/$b" -m "Merge PR branch $b into main (theirs)"; then
        echo "[ok] merged with -X theirs: $b"
        git push origin main || true
      else
        echo "[fail] still conflicts on $b, aborting and continuing"
        git merge --abort || true
      fi
    fi
  done

  echo "[done] $(date -Is) merge automation complete"
} | tee "$LOG_FILE"

