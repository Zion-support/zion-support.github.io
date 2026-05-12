#!/usr/bin/env bash
set -euo pipefail
MESSAGE=${1:-"Eslint lint failed"}
BOT_TOKEN=${TELEGRAM_BOT_TOKEN}
CHAT_ID=${TELEGRAM_CHAT_ID}
curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" -d chat_id=${CHAT_ID} -d text="${MESSAGE}"
