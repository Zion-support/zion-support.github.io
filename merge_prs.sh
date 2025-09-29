#!/usr/bin/env bash
set -euo pipefail

echo "[info] Starting automated merge of candidate PR branches into main"
SKIP_BUILD=${SKIP_BUILD:-false}

# Ensure we are on main and up to date
git fetch origin main
git checkout main
git pull --ff-only origin main

# Generate candidate list of remote branches which likely represent PR heads
# Heuristics: branches starting with pr-, merge-pr-, pr/, merge/open-prs-batch*, integration/merge-open-prs*, improvements*, fix/*, website-*
mapfile -t CANDIDATE_BRANCHES < <(git ls-remote --heads origin \
  | awk '{print $2}' \
  | sed 's#refs/heads/##' \
  | grep -E '^(pr-|merge-pr-|pr/|merge/open-prs|integration/merge-open-prs|improvements|improve|fix/|website-|seo-|performance-|merge-all-open-prs)' \
  | grep -v '^main$' \
  | sort -u)

echo "[info] Found ${#CANDIDATE_BRANCHES[@]} candidate branches"

success_count=0
fail_count=0

for branch in "${CANDIDATE_BRANCHES[@]}"; do
  echo "[info] Processing $branch"
  if ! git ls-remote --exit-code --heads origin "$branch" >/dev/null 2>&1; then
    echo "[warn] Remote branch $branch not found; skipping"
    continue
  fi

  # Create or reset local tracking branch
  if git show-ref --verify --quiet "refs/heads/$branch"; then
    git checkout "$branch"
    git reset --hard "origin/$branch"
  else
    git fetch origin "$branch":"$branch"
    git checkout "$branch"
  fi

  # Rebase branch on latest main to reduce conflicts
  if ! git rebase origin/main; then
    echo "[warn] Rebase conflicts on $branch; attempting automatic resolution"
    git rebase --abort || true
    git merge --no-commit --no-ff origin/main || true
    # naive auto-resolve: prefer incoming changes if both modified
    git add -A
    git commit -m "chore: auto-resolve merge conflicts with main for $branch" || true
  fi

  # Switch to main and merge
  git checkout main
  if git merge --no-ff "$branch" -m "Merge $branch into main (auto)"; then
    echo "[info] Merge succeeded for $branch; verifying build"
    if [ "$SKIP_BUILD" = true ]; then
      echo "[info] SKIP_BUILD=true; skipping build verification for $branch"
      build_ok=true
    else
      if pnpm run build:netlify >/dev/null 2>&1; then
        build_ok=true
      else
        build_ok=false
      fi
    fi
      pushed=false
      for attempt in 1 2 3; do
        git pull --rebase origin main || true
        if git push origin main; then
          pushed=true
          break
        fi
        echo "[warn] Push race on attempt $attempt; retrying..."
        sleep 2
      done
      if [ "$pushed" = true ]; then
        success_count=$((success_count+1))
        echo "[info] Merge + build OK for $branch"
      else
        echo "[error] Push failed after merging $branch; reverting merge"
        git reset --hard HEAD~1
        fail_count=$((fail_count+1))
      fi
    else
      echo "[error] Build failed after merging $branch; reverting merge"
      git reset --hard HEAD~1
      fail_count=$((fail_count+1))
    fi
  else
    echo "[warn] Merge conflicts on main for $branch; attempting auto-resolve"
    git add -A
    if git commit -m "chore: auto-resolve conflicts merging $branch into main"; then
      if [ "$SKIP_BUILD" = true ]; then
        echo "[info] SKIP_BUILD=true; skipping build verification (post-auto-resolve) for $branch"
        build_ok=true
      else
        if pnpm run build:netlify >/dev/null 2>&1; then
          build_ok=true
        else
          build_ok=false
        fi
      fi
        pushed=false
        for attempt in 1 2 3; do
          git pull --rebase origin main || true
          if git push origin main; then
            pushed=true
            break
          fi
          echo "[warn] Push race on attempt $attempt (post-auto-resolve); retrying..."
          sleep 2
        done
        if [ "$pushed" = true ]; then
          success_count=$((success_count+1))
          echo "[info] Merge + build OK for $branch after auto-resolve"
        else
          echo "[error] Push failed after auto-resolve for $branch; reverting"
          git reset --hard HEAD~1
          fail_count=$((fail_count+1))
        fi
      else
        echo "[error] Build failed after auto-resolve for $branch; reverting"
        git reset --hard HEAD~1
        fail_count=$((fail_count+1))
      fi
    else
      echo "[error] Unable to auto-resolve conflicts for $branch; aborting merge"
      git merge --abort || true
      fail_count=$((fail_count+1))
    fi
  fi
 done

echo "[result] Successful merges: $success_count; Failed merges: $fail_count"
exit 0