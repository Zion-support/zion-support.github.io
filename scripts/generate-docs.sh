#!/usr/bin/env bash
# ------------------------------------------------------------
# API Documentation Regenerator (Free Tool)
# ------------------------------------------------------------
# Uses widdershins to convert OpenAPI specs into static HTML.
# ------------------------------------------------------------
set -euo pipefail

# Paths that may contain OpenAPI specs
OPENAPI_PATHS=("/home/klebergarciaalcatrao/.openclaw/workspace/zion-app/api/openapi.yaml" "/home/klebergarciaalcatrao/.openclaw/workspace/zion-app/api-spec.yaml" "/home/klebergarciaalcatrao/.openclaw/workspace/zion-app/README.md")

# Variable to hold the found spec file
SPEC_FILE=""

for p in "${OPENAPI_PATHS[@]}"; do
  if [[ -f "$p" ]]; then
    SPEC_FILE="$p"
    break
  fi
done

if [[ -z "$SPEC_FILE" ]]; then
  echo "❌ No OpenAPI/YAML spec file found." 
  exit 1
fi

echo "✅ Using spec: $SPEC_FILE"

# Ensure docs/api directory exists
mkdir -p docs/api

# Convert spec to markdown first
npx widdershins "$SPEC_FILE" -o docs/api/api.md

# Convert markdown to HTML (gfm)
# We'll use pandoc if available, else simple cat
if command -v pandoc >/dev/null 2>&1; then
  pandoc docs/api/api.md -s -o docs/api/api.html
else
  # Fallback: wrap in simple HTML tags
  echo "<!DOCTYPE html>
<html><head><meta charset='utf-8'><title>API Documentation</title></head><body>
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/github-markdown-css/github-markdown.css'>
<article class='markdown-body'>
$(sed 's/\/\*.*\*\//<br>/' docs/api/api.md)
</article></body></html>" > docs/api/api.html
fi

# Clean up the intermediate markdown
rm docs/api/api.md

# Commit changes if needed
cd "$(dirname "$0")/.."
if git diff --quiet docs/api/api.html; then
  echo "✅ Documentation unchanged – no commit needed."
else
  git add