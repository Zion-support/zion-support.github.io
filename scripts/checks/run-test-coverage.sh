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
printf 'jest_exit=%s\nlog_exit=%s\n' "${statuses[0]}" "${statuses[1]}" > coverage/process-status.txt
status_write=$?
set -e
if [ "$status_write" -ne 0 ]; then
  echo "::error::Could not write process-status.txt (status_write_exit=$status_write); jest_exit=${statuses[0]} log_exit=${statuses[1]}" >&2
fi
if [ "${statuses[0]}" -ne 0 ]; then
  exit "${statuses[0]}"
fi
if [ "${statuses[1]}" -ne 0 ]; then
  exit "${statuses[1]}"
fi
if [ "$status_write" -ne 0 ]; then
  exit "$status_write"
fi
# Jest can catch these reporter/collection errors and still exit zero.
if grep -Eq 'Failed to collect coverage from|Failed to write coverage reports' coverage/jest.log; then
  echo '::error::Jest reported incomplete coverage collection or report generation.'
  exit 1
fi
# A successful process alone is not evidence that all requested reports exist.
for report in coverage/coverage-summary.json coverage/lcov.info coverage/lcov-report/index.html; do
  if [ ! -s "$report" ] || [ ! -f "$report" ]; then
    echo "::error::Required coverage report missing or invalid: $report"
    exit 1
  fi
done
