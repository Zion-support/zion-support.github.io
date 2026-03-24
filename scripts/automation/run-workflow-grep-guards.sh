#!/usr/bin/env bash
# Shared checks for .github/workflows (used by workflow-*-guard.yml jobs).
# Usage:
#   run-workflow-grep-guards.sh           # all checks
#   run-workflow-grep-guards.sh --pin     # actions/* @v* + SHA comment + third-party @v* + docker/container/image :latest
#   run-workflow-grep-guards.sh --permissions  # invalid keys + top-level permissions: block
#   run-workflow-grep-guards.sh --push  # no raw push in YAML + concurrency + no cancel-in-progress:true on pushers
# Push helpers: scripts/automation/commit-and-push-main.sh (stage+commit+push),
#   scripts/automation/push-main-with-retry.sh (push only, one rebase retry).
#   Both deepen shallow clones before git pull --rebase (actions/checkout default depth).
# Manual CI: .github/workflows/workflow-grep-subset-dispatch.yml (grep subsets, or ruby / integrity via same dispatch);
#   .github/workflows/workflow-parse-ruby-only-dispatch.yml (Ruby parse only, no grep);
#   .github/workflows/workflow-ruby-bash-validate-dispatch.yml (full grep, no npm);
#   .github/workflows/workflow-reusable-ci-dispatch.yml (validate light + optional contracts);
#   .github/workflows/workflow-node-contracts-dispatch.yml (contracts only);
#   .github/workflows/workflow-integrity-audit-dispatch.yml (integrity auditor + artifact).
# Also always rejects pull_request_target (runs after selective flags too).
# Also rejects obvious GitHub PAT / fine-grained token strings in workflow YAML and Bearer + PAT patterns.
# Rejects ${{ secrets.GITHUB_TOKEN }} (use ${{ github.token }}).
# Rejects git merge conflict marker lines in workflow YAML.
# Verifies uses: ./relative paths point at existing files.
# Also rejects self-hosted runner labels (repo policy: GitHub-hosted only).
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

  echo "== Floating org/action@v* on non-actions/* steps =="
  if grep -RInE 'uses:[[:space:]]+[^[:space:]]+/[^@[:space:]]+@v[0-9]' "$WF" --include='*.yml' --include='*.yaml' | grep -vE 'uses:[[:space:]]+actions/'; then
    echo "::error::Pin third-party actions (github/*, etc.) to full commit SHAs with a version comment — do not use floating @v tags."
    exit 1
  fi
  echo "No floating non-actions/* version tags."

  echo "== Docker actions must not use :latest =="
  if grep -RInE 'uses:[[:space:]]+docker://[^[:space:]]+:latest' "$WF" --include='*.yml' --include='*.yaml'; then
    echo "::error::Pin docker:// actions to a digest or immutable tag (not :latest)."
    exit 1
  fi
  echo "No docker:// :latest references."

  echo "== Container/service images must not use :latest =="
  if grep -RInE '^[[:space:]]*container:[[:space:]]*[^#[:space:]]+:latest([[:space:]]|$)' "$WF" --include='*.yml' --include='*.yaml'; then
    echo "::error::Pin container: image tags to digests or fixed tags (no :latest)."
    exit 1
  fi
  if grep -RInE '^[[:space:]]*image:[[:space:]]*[^#[:space:]]+:latest([[:space:]]|$)' "$WF" --include='*.yml' --include='*.yaml'; then
    echo "::error::Pin service image: tags to digests or fixed tags (no :latest)."
    exit 1
  fi
  echo "No container/image :latest references."
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
  echo "== No raw git push origin HEAD:main in workflow YAML =="
  raw=()
  while IFS= read -r rec; do
    [[ -z "$rec" ]] && continue
    line="${rec#*:*:}"
    [[ "$line" =~ ^[[:space:]]*# ]] && continue
    raw+=("$rec")
  done < <(grep -RIn --include='*.yml' --include='*.yaml' 'git push origin HEAD:main' "$WF" 2>/dev/null || true)
  if [[ ${#raw[@]} -gt 0 ]]; then
    echo "::error::Do not invoke raw git push to main from workflow YAML; use scripts/automation/commit-and-push-main.sh or scripts/automation/push-main-with-retry.sh."
    printf '%s\n' "${raw[@]}"
    exit 1
  fi
  echo "No raw git push to main in workflow YAML."

  pushes_in_file() {
    local f="$1"
    grep -qE 'bash[[:space:]]+scripts/automation/commit-and-push-main\.sh|bash[[:space:]]+scripts/automation/push-main-with-retry\.sh' "$f"
  }

  echo "== Concurrency for workflows that push to main =="
  missing=()
  while IFS= read -r -d '' f; do
    if pushes_in_file "$f" && ! grep -q '^concurrency:' "$f"; then
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
    if ! pushes_in_file "$f"; then
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

echo "== Forbidden pull_request_target trigger =="
if grep -RInE '^[[:space:]]*pull_request_target[[:space:]]*:' "$WF" --include='*.yml' --include='*.yaml'; then
  echo "::error::Do not use pull_request_target (elevated token on fork PRs). Use pull_request with least-privilege permissions instead."
  exit 1
fi
echo "No pull_request_target trigger in workflows."

echo "== No git merge conflict markers in workflows =="
if grep -RInE '^<<<<<<<|^>>>>>>>|^=======$' "$WF" --include='*.yml' --include='*.yaml'; then
  echo "::error::Resolve merge conflict markers in workflow YAML before merging."
  exit 1
fi
echo "No merge conflict markers in workflows."

echo "== No GitHub token strings in workflow YAML =="
if grep -RInE 'github_pat_[A-Za-z0-9_]+|ghp_[A-Za-z0-9]{20,}|gho_[A-Za-z0-9]{20,}|ghu_[A-Za-z0-9]{20,}|ghs_[A-Za-z0-9]{20,}|ghr_[A-Za-z0-9]{20,}' "$WF" --include='*.yml' --include='*.yaml'; then
  echo "::error::Do not embed GitHub tokens in workflows. Use secrets.* or github.token; revoke any leaked PAT."
  exit 1
fi
echo "No obvious PAT material in workflows."

echo "== No hardcoded Authorization: Bearer PATs =="
if grep -RInE 'Bearer[[:space:]]+(github_pat_[A-Za-z0-9_]+|ghp_[A-Za-z0-9]{20,}|gho_[A-Za-z0-9]{20,}|ghu_[A-Za-z0-9]{20,}|ghs_[A-Za-z0-9]{20,}|ghr_[A-Za-z0-9]{20,})' "$WF" --include='*.yml' --include='*.yaml'; then
  echo "::error::Do not hardcode Bearer tokens in workflows; pass secrets via env (secrets.*) or github.token."
  exit 1
fi
echo "No hardcoded Bearer PAT patterns."

echo "== Prefer github.token over secrets.GITHUB_TOKEN =="
if grep -RInF '${{ secrets.GITHUB_TOKEN }}' "$WF" --include='*.yml' --include='*.yaml'; then
  echo "::error::Use github.token instead of secrets.GITHUB_TOKEN (same default token; clearer and avoids duplicate secret name)."
  exit 1
fi
echo "No legacy secrets.GITHUB_TOKEN references."

echo "== No self-hosted runners (use GitHub-hosted ubuntu-latest) =="
if grep -RIn --include='*.yml' --include='*.yaml' 'self-hosted' "$WF"; then
  echo "::error::Self-hosted runners are not allowed in this repo policy (supply-chain). Use runs-on: ubuntu-latest (or windows/macos if justified and reviewed)."
  exit 1
fi
echo "No self-hosted runner labels in workflows."

echo "== Local uses: ./ paths must exist =="
missing_local=()
while IFS= read -r -d '' f; do
  while IFS= read -r line; do
    [[ "$line" == *'${{'* ]] && continue
    [[ "$line" =~ ^[[:space:]]*# ]] && continue
    if [[ "$line" =~ uses:[[:space:]]+(\./[^[:space:]#]+) ]]; then
      rel="${BASH_REMATCH[1]#./}"
      if [[ ! -f "$ROOT/$rel" ]]; then
        missing_local+=("$f: missing file $rel")
      fi
    fi
  done < <(grep -E 'uses:[[:space:]]+\./' "$f" 2>/dev/null || true)
done < <(find "$WF" -maxdepth 1 \( -name '*.yml' -o -name '*.yaml' \) -print0)
if [ ${#missing_local[@]} -gt 0 ]; then
  echo "::error::A workflow references uses: ./... but the file is not present at repo root:"
  printf '%s\n' "${missing_local[@]}"
  exit 1
fi
echo "All local uses: ./ references resolve to files."

echo "Workflow grep guard(s) passed."
