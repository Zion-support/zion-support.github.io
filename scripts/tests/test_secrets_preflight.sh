#!/usr/bin/env bash
#
# Present/absent path tests for the GitHub Actions secret preflight.
#
# Guards the fix for: "the preflight defines REQUIRED_SECRETS but never injects
# the secret into the step environment, and the script ignored REQUIRED_SECRETS".
#
# Contract:
#   * REQUIRED_SECRETS=OPENROUTER_API_KEY + value present  -> exit 0
#   * REQUIRED_SECRETS=OPENROUTER_API_KEY + value absent   -> exit 1
#   * REQUIRED_SECRETS empty (no required secrets)          -> exit 0
#   * the secret VALUE is never printed
#
# Run: bash scripts/tests/test_secrets_preflight.sh

set -uo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$REPO_ROOT" || exit 1

failures=0

run_case() {
  local label="$1" required="$2" value="$3" expected_exit="$4"
  local output exit_code leaked="no"

  if [ -n "$value" ]; then
    output="$(REQUIRED_SECRETS="$required" OPENROUTER_API_KEY="$value" npm run --silent secrets:preflight 2>&1)"
  else
    output="$(REQUIRED_SECRETS="$required" npm run --silent secrets:preflight 2>&1)"
  fi
  exit_code=$?

  if [ "$exit_code" -ne "$expected_exit" ]; then
    echo "FAIL $label: expected exit $expected_exit, got $exit_code"
    echo "     output: $output"
    failures=$((failures + 1))
    return
  fi

  # The secret value must never appear in the output.
  if [ -n "$value" ] && printf '%s' "$output" | grep -qF -- "$value"; then
    leaked="yes"
    echo "FAIL $label: secret value leaked into output"
    failures=$((failures + 1))
    return
  fi

  echo "ok   $label (exit=$exit_code, leaked=$leaked)"
}

run_case "required secret present"      "OPENROUTER_API_KEY" "test-value-not-a-real-secret" 0
run_case "required secret absent"       "OPENROUTER_API_KEY" "" 1
run_case "no required secrets"          ""                   "" 0
run_case "unknown required secret"      "SOME_OTHER_KEY"     "" 1

if [ "$failures" -ne 0 ]; then
  echo
  echo "$failures preflight test(s) failed"
  exit 1
fi

echo
echo "all preflight tests passed"
