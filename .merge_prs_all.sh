#!/usr/bin/env bash
set -euo pipefail
LOG=/workspace/merge-prs.log
exec >>"$LOG" 2>&1
 echo "[START] $(date -Iseconds) Begin PR merge sweep" 
 git checkout main
 git pull --rebase origin main
 git fetch origin "+refs/pull/*/head:refs/remotes/origin/pr/*"
 mapfile -t REFS < <(git for-each-ref --format="%(refname:short)" refs/remotes/origin/pr)
 COUNT=0
 for ref in "${REFS[@]}"; do
   pr=${ref##*/}
   echo -e "\n=== $(date -Iseconds) Merging PR #$pr ($ref) ==="
   if git merge --no-ff -X theirs "$ref" -m "Merge pull request #$pr"; then
     echo "Merged PR #$pr"
   else
     echo "Conflicts in PR #$pr, resolving with theirs..."
     git checkout --theirs . || true
     git add -A || true
     git commit -m "Merge pull request #$pr (resolved conflicts preferring PR changes)" || true
   fi
   COUNT=$((COUNT+1))
   if (( COUNT % 25 == 0 )); then
     echo "Pushing after $COUNT merges..."
     git push origin main || true
   fi
 done
 echo "Final push..."
 git push origin main || true
 echo "[END] $(date -Iseconds) Completed PR merge sweep"
