#!/usr/bin/env bash
# Local / Hermes entrypoint for the uninterrupted SEO content loop.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
python3 tests/test_content_loop.py
python3 scripts/content_loop/run.py --limit "${1:-2}" --refresh-index
