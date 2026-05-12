#!/usr/bin/env bash
# scripts/health-check.sh – Simple HTTP health endpoint check for the app
# Returns 0 if the app responds with HTTP 200 within 5 seconds, otherwise 1

URL="${APP_URL:-http://localhost:3000/health}"  # Adjust if your app uses a different path
TIMEOUT=5

if curl -s --max-time $TIMEOUT -o /dev/null -w "%{http_code}" "$URL" | grep -q "200"; then
  echo "✅ Health check passed – $URL is reachable"
  exit 0
else
  echo "❌ Health check failed – $URL did not return 200"
  exit 1
fi
