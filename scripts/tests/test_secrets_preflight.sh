#!/usr/bin/env bash
#
# scripts/tests/test_secrets_preflight.sh
#
# Fail-closed tests for the CI "secrets preflight" contract.
#
# Workflows gate deploys on `npm run secrets:preflight`, which reads
# REQUIRED_SECRETS (comma-separated variable NAMES) and must fail when any
# listed secret is absent. These tests pin that behaviour using throwaway
# sentinel values only:
#
#   * no required secrets            -> exit 0
#   * required secret present        -> exit 0
#   * required secret missing/empty  -> exit non-zero (fail-closed)
#   * whitespace around names        -> tolerated
#   * output never contains a value  -> no secret is ever echoed
#
# Only variable NAMES and redacted diagnostics are printed. No secret value
# (real or sentinel) is ever emitted by this script.
#
# Run:  bash scripts/tests/test_secrets_preflight.sh
# Exit: 0 = contract holds; non-zero = fail-closed violation.
#
# NOTE: keep this script bash 3.2 compatible (macOS ships /bin/bash 3.2).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
cd "${REPO_ROOT}"

# Throwaway values used only to prove that values are never echoed.
readonly SENTINEL_A="zion-preflight-sentinel-A-7c1e"
readonly SENTINEL_B="zion-preflight-sentinel-B-2d9f"

fail() {
  echo "FAIL: $*" >&2
  exit 1
}

note() {
  echo "ok: $*"
}

# Redact sentinel values before any captured output is printed, so even
# diagnostics can never leak a value.
redact() {
  local text="$1"
  text="${text//${SENTINEL_A}/[REDACTED]}"
  text="${text//${SENTINEL_B}/[REDACTED]}"
  printf '%s' "${text}"
}

# --- Preconditions: fail closed if the tooling under test is unavailable ---

command -v node >/dev/null 2>&1 || fail "node not found in PATH (required to run secrets:preflight)"
command -v npm  >/dev/null 2>&1 || fail "npm not found in PATH (required to run secrets:preflight)"
[ -f "package.json" ] || fail "package.json not found at repo root (${REPO_ROOT})"
grep -Fq '"secrets:preflight"' package.json \
  || fail "package.json does not define the secrets:preflight script"

# run_preflight <required_secrets> [NAME=VALUE ...]
# Runs the real preflight in a scrubbed environment so ambient secrets cannot
# mask a "missing" case. Only PATH/HOME/TMPDIR are carried over.
run_preflight() {
  local required="$1"
  shift
  env -i \
    PATH="${PATH}" \
    HOME="${HOME:-/tmp}" \
    TMPDIR="${TMPDIR:-/tmp}" \
    REQUIRED_SECRETS="${required}" \
    "$@" \
    npm run --silent secrets:preflight
}

# run_and_capture <cmd...>: sets CAPTURED (stdout+stderr) and CAPTURED_RC.
run_and_capture() {
  set +e
  CAPTURED="$("$@" 2>&1)"
  CAPTURED_RC=$?
  set -e
}

# assert_no_leak <description>: fails if captured output contains a sentinel.
assert_no_leak() {
  local description="$1"
  local needle
  for needle in "${SENTINEL_A}" "${SENTINEL_B}"; do
    if printf '%s' "${CAPTURED}" | grep -Fq -- "${needle}"; then
      fail "${description}: output leaked a secret value"
    fi
  done
}

# assert_no_real_leak <description>: if a real secret is present in the
# ambient environment, its value must never appear in the preflight output.
# Values are only compared, never printed.
assert_no_real_leak() {
  local description="$1"
  local name val
  for name in OPENROUTER_API_KEY ANTHROPIC_API_KEY GITHUB_TOKEN; do
    val="${!name:-}"
    if [ -n "${val}" ] && printf '%s' "${CAPTURED}" | grep -Fq -- "${val}"; then
      fail "${description}: output leaked the value of ${name}"
    fi
  done
}

# --- Scenario 1: no required secrets -> success -----------------------------

run_and_capture run_preflight ""
[ "${CAPTURED_RC}" -eq 0 ] \
  || fail "no required secrets must exit 0 (got ${CAPTURED_RC}): $(redact "${CAPTURED}")"
note "no required secrets -> exit 0"

# --- Scenario 2: required secret present -> success, no value echoed --------

run_and_capture run_preflight "ZION_PREFLIGHT_TEST_A" "ZION_PREFLIGHT_TEST_A=${SENTINEL_A}"
[ "${CAPTURED_RC}" -eq 0 ] \
  || fail "present required secret must exit 0 (got ${CAPTURED_RC}): $(redact "${CAPTURED}")"
assert_no_leak "present-secret run"
assert_no_real_leak "present-secret run"
note "present required secret -> exit 0 (no value leaked)"

# --- Scenario 3: required secret missing -> fail-closed, names only ---------

run_and_capture run_preflight "ZION_PREFLIGHT_TEST_A"
[ "${CAPTURED_RC}" -ne 0 ] \
  || fail "missing required secret must exit non-zero (fail-closed)"
printf '%s' "${CAPTURED}" | grep -Fq "ZION_PREFLIGHT_TEST_A" \
  || fail "missing-secret failure must name the missing variable"
assert_no_leak "missing-secret run"
assert_no_real_leak "missing-secret run"
note "missing required secret -> exit ${CAPTURED_RC}, names only (no value leaked)"

# --- Scenario 4: empty value counts as missing -> fail-closed ----------------

run_and_capture run_preflight "ZION_PREFLIGHT_TEST_A" "ZION_PREFLIGHT_TEST_A="
[ "${CAPTURED_RC}" -ne 0 ] \
  || fail "empty secret value must count as missing (fail-closed)"
assert_no_leak "empty-secret run"
note "empty secret value -> exit ${CAPTURED_RC} (fail-closed)"

# --- Scenario 5: partially satisfied set -> fail-closed ----------------------

run_and_capture run_preflight "ZION_PREFLIGHT_TEST_A,ZION_PREFLIGHT_TEST_B" \
  "ZION_PREFLIGHT_TEST_A=${SENTINEL_A}"
[ "${CAPTURED_RC}" -ne 0 ] \
  || fail "partially satisfied required secrets must exit non-zero (fail-closed)"
assert_no_leak "partial-secret run"
note "partially satisfied required secrets -> exit ${CAPTURED_RC} (fail-closed)"

# --- Scenario 6: whitespace around names is trimmed -> success ---------------

run_and_capture run_preflight " ZION_PREFLIGHT_TEST_A , ZION_PREFLIGHT_TEST_B " \
  "ZION_PREFLIGHT_TEST_A=${SENTINEL_A}" \
  "ZION_PREFLIGHT_TEST_B=${SENTINEL_B}"
[ "${CAPTURED_RC}" -eq 0 ] \
  || fail "whitespace around REQUIRED_SECRETS entries must be trimmed (got ${CAPTURED_RC}): $(redact "${CAPTURED}")"
assert_no_leak "whitespace run"
note "whitespace in REQUIRED_SECRETS is trimmed -> exit 0"

echo "secrets preflight: all path tests passed"
