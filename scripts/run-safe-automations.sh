#!/usr/bin/env bash
set -euo pipefail

echo "[safe] Starting safe automations"

# Create logs dir if needed
mkdir -p automation/logs || true

echo "[safe] Running automation status"
node automation/check_automation_status.cjs || true

echo "[safe] Running security audit (light)"
if npm run -s automation:security-audit; then
  echo "[safe] Security audit script completed"
else
  echo "[safe] Security audit encountered issues" >&2
fi

echo "[safe] Running health check"
if npm run -s automation:health; then
  echo "[safe] Health check completed"
else
  echo "[safe] Health check encountered issues" >&2
fi

echo "[safe] Running performance optimizer"
if npm run -s automation:performance; then
  echo "[safe] Performance optimizer completed"
else
  echo "[safe] Performance optimizer encountered issues" >&2
fi

echo "[safe] Generating README"
if npm run -s readme:generate; then
  echo "[safe] README generation completed"
else
  echo "[safe] README generation encountered issues" >&2
fi

echo "[safe] Done"

