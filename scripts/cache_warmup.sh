#!/usr/bin/env bash
# cache_warmup.sh – warm frequently used endpoints
# Run after deploy or via cron to keep reverse‑proxy cache hot
LOG="$HOME/.hermes/memory/cache_warmup.log"
WARM_FILE="$HOME/.hermes/warmer/routes.txt"
mkdir -p "$(dirname "$LOG")" "$(dirname "$WARM_FILE")"
# Example routes (adjust as needed)
cat > "$WARM_FILE" <<EOF
https://example.com/api/v1/health
https://example.com/api/v1/status
EOF
while read -r URL; do
  [ -z "$URL" ] && continue
  START=$(date +%s)
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
  END=$(date +%s)
  LAT=$(($END-$START))
  echo "$(date '+%Y-%m-%d %H:%M:%S') URL=$URL STATUS=$STATUS LAT=${LAT}s" >> "$LOG"
done < "$WARM_FILE"
