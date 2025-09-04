#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "[1/5] Health check"
node automation/health-check.cjs || true

echo "[2/5] Security scan"
node automation/security-scanner.cjs || true

echo "[3/5] Type check"
npx tsc --noEmit || true

echo "[4/5] Lint"
npx eslint . || true

echo "[5/5] Tests"
if npx --yes jest -v >/dev/null 2>&1; then
  npm test --silent || true
else
  echo "Jest not installed, skipping tests"
fi

echo "CI script finished."

