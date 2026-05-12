#!/usr/bin/env bash
# scripts/bundle-size-monitor.sh
# Monitors JavaScript bundle size and enforces a growth budget.
# Uses trend-based evaluation: 3 consecutive >5% increases block the PR.
# State stored in .hermes/memory/ for persistence across runs.

set -euo pipefail

# Config
THRESHOLD_PERCENT="${THRESHOLD_PERCENT:-5}"  # Max allowed growth %
BASELINE_FILE="${BASELINE_FILE:-.bundle-size-baseline.json}"
REPORT_FILE="${REPORT_FILE:-bundle-analysis.json}"
SNAPSHOT_FILE="${SNAPSHOT_FILE:-.hermes/memory/bundle-size.json}"
HISTORY_FILE="${HISTORY_FILE:-.hermes/memory/bundle-history.json}"

echo "📊 Starting bundle size monitoring (threshold: ${THRESHOLD_PERCENT}%)"

# Ensure Hermes memory dir exists
mkdir -p .hermes/memory

# Step 1: Snapshot current bundle total size
if [ -f "$REPORT_FILE" ]; then
  if command -v jq &> /dev/null; then
    CURRENT_BYTES=$(jq -r '.totalBytes // .assets | map(select(.name | test("\\.js$"))) | map(.size) | add' "$REPORT_FILE" 2>/dev/null || echo "0")
  else
    CURRENT_BYTES=$(grep -o '"totalBytes":[0-9]*' "$REPORT_FILE" 2>/dev/null | head -1 | cut -d: -f2 || echo "0")
  fi
else
  echo "❌ Bundle report not found at $REPORT_FILE"
  exit 1
fi

if [ "$CURRENT_BYTES" = "0" ]; then
  echo "❌ Could not extract current bundle size"
  exit 1
fi

echo "📦 Current bundle: ${CURRENT_BYTES} bytes"

# Save snapshot for GitHub Actions
echo "{ \"size\": ${CURRENT_BYTES}, \"timestamp\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\", \"hash\": \"$(git rev-parse HEAD 2>/dev/null || echo 'unknown')\" }" > "$SNAPSHOT_FILE"

# Step 2: Compute delta from previous snapshot
PREV_BYTES=0
if [ -f "$SNAPSHOT_FILE" ] && git rev-parse HEAD >/dev/null 2>&1; then
  # We're in a git repo; use previous snapshot from history OR from last saved file
  # For GitHub Actions, the previous snapshot lives in the repo's .hermes/memory from prior commit
  if [ -f "$SNAPSHOT_FILE" ]; then
    PREV_BYTES=$(jq -r '.size' "$SNAPSHOT_FILE" 2>/dev/null || echo "0")
  fi
fi

# If prev not available, try baseline
if [ "$PREV_BYTES" = "0" ] || [ "$PREV_BYTES" = "null" ]; then
  if [ -f "$BASELINE_FILE" ] && command -v jq &> /dev/null; then
    PREV_BYTES=$(jq -r '.totalBytes // .assets | map(select(.name | test("\\.js$"))) | map(.size) | add' "$BASELINE_FILE" 2>/dev/null || echo "0")
  fi
fi

DIFF=$((CURRENT_BYTES - PREV_BYTES))
if [ "$DIFF" -lt 0 ]; then
  DIFF=0
fi

echo "📈 Delta from previous: ${DIFF} bytes"

# Step 3: Track history (write to file; GitHub Actions will commit)
# For local runs: append to history file
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  # Append a line to history JSON array (naive approach)
  if [ ! -f "$HISTORY_FILE" ]; then
    echo '{"history":[]}' > "$HISTORY_FILE"
  fi
  # Use jq to push new entry if available
  if command -v jq &> /dev/null; then
    TMP=$(mktemp)
    jq '.history += [{size: env.CURRENT_BYTES, ts: now | strftime("%Y-%m-%dT%H:%M:%SZ"), hash: env.GIT_HASH}]' \
      --argjson size "$CURRENT_BYTES" \
      --arg ts "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
      --arg hash "$(git rev-parse HEAD 2>/dev/null || echo 'local')" \
      "$HISTORY_FILE" > "$TMP" && mv "$TMP" "$HISTORY_FILE"
    # Keep last 10
    jq '.history = .history[:10]' "$HISTORY_FILE" > "$TMP" && mv "$TMP" "$HISTORY_FILE"
  fi
fi

# Step 4: Compute trend across last 3 runs (if available)
BLOCKED=false
if [ -f "$HISTORY_FILE" ] && command -v jq &> /dev/null; then
  COUNT=$(jq '.history | length' "$HISTORY_FILE")
  if [ "$COUNT" -ge 3 ]; then
    # Check if last 3 are all growing
    GROWTH_COUNT=$(jq '[.history[0:3] | .[0].size > .[1].size, .[1].size > .[2].size] | add' "$HISTORY_FILE")
    if [ "$GROWTH_COUNT" -ge 2 ]; then
      # And latest > 5% above 3rd ago
      SIZE0=$(jq -r '.history[0].size' "$HISTORY_FILE")
      SIZE2=$(jq -r '.history[2].size' "$HISTORY_FILE")
      PCT=$(awk "BEGIN {printf \"%.2f\", (($SIZE0 - $SIZE2) / $SIZE2) * 100}")
      awk "BEGIN {exit !($PCT > $THRESHOLD_PERCENT)}"
      if [ $? -eq 0 ]; then
        echo "🚨 Bundle size increased >${THRESHOLD_PERCENT}% across 3 consecutive runs (${PCT}%)"
        BLOCKED=true
      fi
    fi
  fi
fi

if [ "$BLOCKED" = true ]; then
  echo "❌ Build blocked due to bundle growth trend"
  exit 1
else
  echo "✅ Bundle within acceptable trend"
  exit 0
fi
