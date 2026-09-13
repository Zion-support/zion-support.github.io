#!/usr/bin/env bash
set -euo pipefail
mkdir -p out
cp -r public/* out/ 2>/dev/null || true
echo "Pages deployed"
