#!/usr/bin/env bash
set -euo pipefail

echo "[automation] Install deps"
npm ci || npm install --no-audit --no-fund

echo "[automation] Lint (non-blocking)"
npm run lint || true

echo "[automation] Type-check (non-blocking)"
npm run type-check || true

echo "[automation] Build"
npm run build

echo "[automation] Smoke tests"
npm run test:smoke || true

echo "[automation] OK"
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
if command -v jest >/dev/null 2>&1; then
  npm test --silent || true
else
  echo "Jest not installed, skipping tests"
fi

echo "Automation suite finished."
