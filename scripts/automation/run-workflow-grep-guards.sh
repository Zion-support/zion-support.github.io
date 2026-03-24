#!/usr/bin/env bash
# Shared checks for .github/workflows (used by workflow-*-guard.yml jobs).
# Usage:
#   run-workflow-grep-guards.sh           # all checks
#   run-workflow-grep-guards.sh --pin     # actions/* @v* + SHA comment
#   run-workflow-grep-guards.sh --permissions  # invalid keys + top-level permissions: block
#   run-workflow-grep-guards.sh --push  # guarded push + concurrency + no cancel-in-progress:true on pushers
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT"
WF=".github/workflows"

RUN_PIN=0
RUN_PERM=0
RUN_PUSH=0

if [[ $# -eq 0 ]]; then
  RUN_PIN=1
  RUN_PERM=1
  RUN_PUSH=1
else
  for arg in "$@"; do
    case "$arg" in
      --pin) RUN_PIN=1 ;;
      --permissions) RUN_PERM=1 ;;
      --push) RUN_PUSH=1 ;;
      -h|--help)
        echo "Usage: $0 [--pin] [--permissions] [--push]  (default: all checks)"
        exit 0
        ;;
      *)
        echo "Unknown option: $arg" >&2
        exit 2
        ;;
    esac
  done
fi

if [[ "$RUN_PIN" -eq 1 ]]; then
  echo "== Floating actions/*@v* =="
  if grep -RInE 'uses:[[:space:]]+actions/[^@[:space:]]+@v[0-9]' "$WF" --include='*.yml' --include='*.yaml'; then
    echo "::error::Pin github.com/actions/* steps to full commit SHAs with a version comment (see pin-actions-weekly / ci-cd)."
    exit 1
  fi
  echo "No floating actions/* version tags in workflows."

  echo "== SHA-pinned actions/* without inline comment =="
  if grep -RInE 'uses:[[:space:]]+actions/[^#]+@[a-f0-9]{40}[[:space:]]*$' "$WF" --include='*.yml' --include='*.yaml'; then
    echo "::error::Add an inline comment after each SHA-pinned actions/* ref (e.g. \"# v6.3.0\") so reviewers see the tag equivalent."
    exit 1
  fi
  echo "All SHA-pinned actions/* lines include a version comment."
fi

if [[ "$RUN_PERM" -eq 1 ]]; then
  echo "== Top-level permissions block =="
  missing=()
  while IFS= read -r -d '' f; do
    if ! grep -q '^permissions:' "$f"; then
      missing+=("$f")
    fi
  done < <(find "$WF" -maxdepth 1 \( -name '*.yml' -o -name '*.yaml' \) -print0)
  if [ ${#missing[@]} -gt 0 ]; then
    echo "::error::Each workflow file must declare a top-level permissions: block (not only job-level)."
    printf '%s\n' "${missing[@]}"
    exit 1
  fi
  echo "All workflow files declare top-level permissions."

  echo "== Invalid projects: write permission =="
  if grep -RIn --include='*.yml' --include='*.yaml' --regexp='^[[:space:]]+projects:[[:space:]]+write' "$WF"; then
    echo "::error::Found invalid permission key 'projects'. Use 'repository-projects'."
    exit 1
  fi
  echo "Workflow permission keys look valid."
fi

if [[ "$RUN_PUSH" -eq 1 ]]; then
  echo "== Unguarded git push origin HEAD:main =="
  hits=()
  while IFS= read -r rec; do
    [[ -n "$rec" ]] && hits+=("$rec")
  done < <(grep -RIn --include='*.yml' --include='*.yaml' 'git push origin HEAD:main' "$WF" | grep -v 'workflow-report-push-guard.yml:' || true)
  violations=()
  for rec in "${hits[@]}"; do
    line="${rec#*:*:}"
    [[ "$line" =~ ^[[:space:]]*# ]] && continue
    if [[ "$line" == *"if ! git push origin HEAD:main"* ]]; then continue; fi
    if [[ "$line" == *"if git push origin HEAD:main"* ]]; then continue; fi
    if [[ "$line" == *"||"* ]]; then continue; fi
    violations+=("$rec")
  done
  if [ ${#violations[@]} -gt 0 ]; then
    echo "::error::Unguarded push to main — use 'if ! git push …; then …', 'if git push …; then …', or append '|| …' / '(push || echo …)' fallback:"
    printf '%s\n' "${violations[@]}"
    exit 1
  fi
  echo "All workflow pushes to main are guarded."

  echo "== Concurrency for workflows that push to main =="
  missing=()
  while IFS= read -r -d '' f; do
    if grep -q 'git push origin HEAD:main' "$f" && ! grep -q '^concurrency:' "$f"; then
      missing+=("$f")
    fi
  done < <(find "$WF" -maxdepth 1 \( -name '*.yml' -o -name '*.yaml' \) -print0)
  if [ ${#missing[@]} -gt 0 ]; then
    echo "::error::Workflows that push to main must declare a top-level concurrency: block (use cancel-in-progress: false when serializing commits)."
    printf '%s\n' "${missing[@]}"
    exit 1
  fi
  echo "All push-to-main workflows declare concurrency."

  echo "== Push workflows must not use cancel-in-progress: true =="
  bad=()
  while IFS= read -r -d '' f; do
    if ! grep -q 'git push origin HEAD:main' "$f"; then
      continue
    fi
    if grep -qE '^[[:space:]]*cancel-in-progress:[[:space:]]*true[[:space:]]*$' "$f"; then
      bad+=("$f")
    fi
  done < <(find "$WF" -maxdepth 1 \( -name '*.yml' -o -name '*.yaml' \) -print0)
  if [ ${#bad[@]} -gt 0 ]; then
    echo "::error::Workflows that push to main must use cancel-in-progress: false (or omit); true can abort mid-commit."
    printf '%s\n' "${bad[@]}"
    exit 1
  fi
  echo "No push-to-main workflow uses cancel-in-progress: true."
fi

echo "Workflow grep guard(s) passed."
