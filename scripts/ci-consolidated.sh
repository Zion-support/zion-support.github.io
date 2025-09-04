#!/usr/bin/env bash
set -euo pipefail

echo "[CI] Starting consolidated pipeline"
echo "[CI] 1) Lint check"
npm run lint:check

echo "[CI] 2) Type check"
npm run type-check

echo "[CI] 3) Build"
npm run build

echo "[CI] 4) Smoke tests"
npm run test:smoke

echo "[CI] 5) Aggregate health & security"
node scripts/aggregate-health-security.mjs || true

echo "[CI] Completed successfully"

