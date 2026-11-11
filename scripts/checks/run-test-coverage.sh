#!/usr/bin/env bash
# Keep Jest failures visible while retaining every report produced before failure.
set -euo pipefail
ulimit -c 0
mkdir -p coverage
set +e
./node_modules/.bin/jest --ci --runInBand --watchAll=false \
  --coverage --coverageProvider=v8 \
  --coverageReporters=json-summary --coverageReporters=lcov --coverageReporters=text-summary \
  --coverageDirectory=coverage 2>&1 | tee coverage/jest.log
statuses=("${PIPESTATUS[@]}")
set -e
printf 'jest_exit=%s\nlog_exit=%s\n' "${statuses[0]}" "${statuses[1]}" > coverage/process-status.txt
if [ "${statuses[0]}" -ne 0 ]; then
  exit "${statuses[0]}"
fi
exit "${statuses[1]}"
