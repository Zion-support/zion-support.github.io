#!/usr/bin/env bash
set -euo pipefail

echo "[safe] Running non-destructive automations"

# Code quality and security checks
npm run quality:analyze || true
npm run security:audit || true

# Performance analysis (non-blocking)
npm run performance:analyze || true

# Format check and lint fix are safe
npm run format:check || true
npm run lint:fix || true

# Type-check but do not fail the pipeline here
npm run type-check || true

echo "[safe] Completed"

