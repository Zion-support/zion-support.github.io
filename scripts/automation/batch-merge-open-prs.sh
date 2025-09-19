#!/bin/bash
set -euo pipefail

echo "🚀 Batch merge open PRs (origin/pr/*) into main"

MAX=${1:-20}

git checkout main >/dev/null 2>&1 || git checkout -b main
git fetch origin main:origin/main
git reset --hard origin/main

mapfile -t PRS < <(git for-each-ref --format='%(refname:short)' refs/remotes/origin/pr/ | sed 's#refs/remotes/origin/##' | head -n "$MAX")

echo "Found ${#PRS[@]} PR refs to attempt: ${PRS[*]}"

for prref in "${PRS[@]}"; do
  echo "\n=== Processing $prref ==="
  if git merge --no-ff -m "Merge $prref into main" "$prref"; then
    echo "Merged $prref"
    continue
  fi

  echo "Conflicts in $prref, attempting auto-resolution..."
  conflicted=$(git diff --name-only --diff-filter=U || true)
  if [ -n "$conflicted" ]; then
    for f in $conflicted; do
      case "$f" in
        package.json|package-lock.json|pnpm-lock.yaml|yarn.lock|netlify.toml|tsconfig.json|next.config.*)
          git checkout --ours -- "$f" || true
          ;;
        *)
          git checkout --theirs -- "$f" || git checkout --ours -- "$f" || true
          ;;
      esac
      git add -- "$f" || true
    done
    if git commit -m "Resolve conflicts for $prref"; then
      echo "Resolved and merged $prref"
    else
      echo "Failed to commit resolved merge for $prref; aborting merge"
      git merge --abort || true
    fi
  else
    echo "No conflicted files detected; aborting merge"
    git merge --abort || true
  fi
done

echo "Pushing main"
git push origin main
echo "Done"

