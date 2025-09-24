#!/usr/bin/env bash
set -euo pipefail

# Merge selected remote cursor/* branches into main with auto conflict resolution and build verification
# - Prefers incoming branch changes on conflicts (theirs)
# - If conflicts occur, auto-resolve by taking theirs for conflicted files
# - Verifies "npm run -s build" after each merge; reverts merge if build fails
# - Pushes main after each successful merge

log() { printf "[%s] %s\n" "$(date +"%Y-%m-%dT%H:%M:%S")" "$*"; }

ensure_clean() {
  if ! git diff --quiet || ! git diff --cached --quiet; then
    log "Working tree not clean; stashing changes"
    git stash push -u -m "auto-stash-before-cursor-merge" >/dev/null 2>&1 || true
  fi
}

ensure_main_up_to_date() {
  git fetch origin main:refs/remotes/origin/main
  if ! git rev-parse --verify main >/dev/null 2>&1; then
    git checkout -B main origin/main
  else
    git checkout -q main
    git pull -q --rebase origin main || true
  fi
}

merge_one_branch() {
  local branch="$1" # plain branch name like cursor/foo
  log "Processing $branch"

  # Ensure we have the latest ref locally tracking the remote branch
  git fetch -q origin "$branch:refs/heads/$branch" || { log "Fetch failed for $branch, skipping"; return 1; }

  # Skip if already merged
  if git merge-base --is-ancestor "$branch" main 2>/dev/null; then
    log "Already merged: $branch"
    return 0
  fi

  ensure_main_up_to_date

  # Try merge preferring incoming branch on conflicts
  if git merge -q --no-ff -X theirs -m "Merge $branch into main (prefer theirs)" "$branch"; then
    log "Merged cleanly: $branch"
  else
    log "Conflicts detected in $branch; attempting auto-resolution (theirs)"
    conflicted=$(git diff --name-only --diff-filter=U || true)
    if [[ -z "$conflicted" ]]; then
      git checkout --theirs . || true
      git add -A
    else
      while IFS= read -r file; do
        [[ -z "$file" ]] && continue
        if [[ -f "$file" ]]; then
          git checkout --theirs -- "$file" || git checkout --ours -- "$file" || true
          git add -- "$file"
        fi
      done <<<"$conflicted"
    fi
    if git commit -m "Auto-resolve conflicts for $branch (favor theirs)"; then
      log "Conflicts auto-resolved for $branch"
    else
      log "Failed to create merge commit for $branch; aborting"
      git merge --abort || true
      return 1
    fi
  fi

  # Build verification
  log "Running build after merging $branch"
  if npm run -s build >/dev/null 2>&1; then
    log "Build OK for $branch; pushing main"
    git push origin main
    return 0
  else
    log "Build FAILED for $branch; reverting merge"
    git reset --hard -q HEAD~1
    return 1
  fi
}

main() {
  ensure_clean
  ensure_main_up_to_date

  log "Enumerating remote cursor/* branches"
  # Limit to branches that look like conflict-resolution tasks to keep run bounded
  mapfile -t branches < <(git ls-remote --heads origin \
    | awk '{print $2}' \
    | sed 's#refs/heads/##' \
    | grep '^cursor/resolve-conflicts-and-merge-to-main-' \
    | sort -u)

  if [[ ${#branches[@]} -eq 0 ]]; then
    log "No matching cursor/* branches found"
    exit 0
  fi

  log "Found ${#branches[@]} target branches"

  success=0
  failed=0

  for br in "${branches[@]}"; do
    if merge_one_branch "$br"; then
      ((success++))
    else
      ((failed++))
    fi
  done

  log "Summary: merged=$success failed=$failed total=$((success+failed))"
}

main "$@"