#!/usr/bin/env bash
# Pin Hermes cron jobs that fail with: HTTP 400: local is not a valid model ID
# Run on the Termux/Hermes host that owns the jobs (hermes CLI required).
set -euo pipefail

PROVIDER="${HERMES_PROVIDER:-nous}"
MODEL="${HERMES_MODEL:-stepfun/step-3.7-flash:free}"

if ! command -v hermes >/dev/null 2>&1; then
  echo "hermes CLI not found on this host. Install/login on Termux, then re-run."
  echo "Manual equivalent:"
  echo "  hermes cron edit <job_id> --provider ${PROVIDER} --model ${MODEL}"
  exit 1
fi

ids=(
  fb3d274edc27
  e3c19238fdbc
  f684cb1dd80f
  6251974df2e8
  9979b4b8453c
)

fail=0
for id in "${ids[@]}"; do
  echo "Pinning $id -> ${PROVIDER}/${MODEL}"
  if ! hermes cron edit "$id" --provider "$PROVIDER" --model "$MODEL"; then
    echo "FAILED $id"
    fail=1
  fi
done

exit "$fail"
