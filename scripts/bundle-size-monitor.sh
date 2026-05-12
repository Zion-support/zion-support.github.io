#!/usr/bin/env bash
# scripts/bundle-size-monitor.sh – reports total JS bundle size after build
# Requires npm, jq, and the built files in .next or .out (adjust paths as needed)

BUILD_DIR=".next"  # adjust for Next.js build output
LOG_FILE="$HOME/.hermes/memory/bundle-size.log"

# Ensure build exists
if [ ! -d "$BUILD_DIR" ]; then
  echo "Build directory $BUILD_DIR not found – aborting" >> "$LOG_FILE"
  exit 1
fi

# Find all JS files and sum their sizes (in bytes)
TOTAL=$(find "$BUILD_DIR" -name "*.js" -type f -exec du -b {} + | awk '{sum += $1} END {print sum}')
KB=$(awk "BEGIN {printf \"%.2f\", $TOTAL/1024}")
MB=$(awk "BEGIN {printf \"%.2f\", $TOTAL/1024/1024}")

echo "$(date '+%Y-%m-%d %H:%M:%S') Bundle size: $KB KB ($MB MB)" >> "$LOG_FILE"

# Optionally post a comment on the PR (if running in CI)
if [ -n "$GITHUB_TOKEN" ] && [ -n "$GITHUB_REPOSITORY" ]; then
  PR_NUMBER=$(jq -r .pull_request.number "$GITHUB_EVENT_PATH" 2>/dev/null || echo "")
  if [ -n "$PR_NUMBER" ]; then
    curl -s -X POST -H "Authorization: token $GITHUB_TOKEN" \
      -H "Accept: application/vnd.github.v3+json" \
      "https://api.github.com/repos/$GITHUB_REPOSITORY/issues/$PR_NUMBER/comments" \
      -d "{\"body\": \"📦 Bundle size after build: $KB KB ($MB MB)\"}"
  fi
fi
