#!/usr/bin/env bash
# Cloudflare Workers Builds entry: static public/ only. Never next build.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
bash scripts/prepare-pages-out.sh
# wrangler [assets] directory is public/; keep public/ as the deploy root.
# Dual-path pages already land in public/ via git; out/ is for GitHub Pages.
echo "cf-static-build: public/ ready ($(find public -type f | wc -l) files)"
