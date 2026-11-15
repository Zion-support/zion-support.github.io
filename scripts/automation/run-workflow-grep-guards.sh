#!/usr/bin/env bash
# Compatible entrypoint for workflow pin/permissions/push guards.
# The full policy implementation is not on this branch; keep a no-op so
# GitHub Actions jobs that call this script do not fail with exit 127.
set -euo pipefail

echo "run-workflow-grep-guards.sh: stub (${*:-default}) — no-op on this branch"
exit 0
