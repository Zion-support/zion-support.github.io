#!/usr/bin/env bash
# ------------------------------------------------------------
# Security Headers Hardening
# ------------------------------------------------------------
# Ensures a Next.js middleware exists that injects common security HTTP headers.
# If the middleware file is missing or incomplete, it (re)creates it and commits the change.
# ------------------------------------------------------------
set -euo pipefail

# Project root (script location is inside "scripts" dir)
ROOT=$(cd "$(dirname "$0")/.." && pwd)
MIDDLEWARE_FILE="$ROOT/middleware.ts"

# Desired headers (multi‑line string for insertion)
read -r -d '' HEADERS <<'EOF'
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; object-src 'none';");
  return response;
}
EOF

# Helper to check if all required headers are present in the middleware
function headers_present() {
  local file=$1
  grep -q "X-Content-Type-Options" "$file" && \
  grep -q "X-Frame-Options" "$file" && \
  grep -q "Referrer-Policy" "$file" && \
  grep -q "Strict-Transport-Security" "$file" && \
  grep -q "Content-Security-Policy" "$file"
}

# Create or update the middleware file
if [[ -f "$MIDDLEWARE_FILE" ]]; then
  if headers_present "$MIDDLEWARE_FILE"; then
    echo "✅ Security headers already present – nothing to do."
    exit 0
  else
    echo "⚠️ Middleware exists but missing headers – overwriting with full security implementation."
    printf "%s" "$HEADERS" > "$MIDDLEWARE_FILE"
    git add "$MIDDLEWARE_FILE"
    git commit -m "chore: add security‑headers middleware" || true
    exit 0
  fi
else
  echo "🛠️ Creating new middleware with security headers."
  printf "%s" "$HEADERS" > "$MIDDLEWARE_FILE"
  git add "$MIDDLEWARE_FILE"
  git commit -m "chore: add security‑headers middleware" || true
  exit 0
fi
