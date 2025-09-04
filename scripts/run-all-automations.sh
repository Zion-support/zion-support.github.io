#!/usr/bin/env bash
set -euo pipefail

echo "Running consolidated automation suite..."

run_step() {
	local name="$1"; shift
	echo "\n=== Starting: ${name} ==="
	if "$@"; then
		echo "=== Completed: ${name} ==="
	else
		echo "=== Failed: ${name} (continuing) ===" >&2
		return 0
	fi
}

# Core health and quality checks
run_step "Health Check" npm run automation:health
run_step "Security Scan" npm run automation:security
run_step "Performance Monitor" node automation/performance-monitor.cjs
run_step "Build Monitor" node automation/build-monitor.cjs
run_step "Code Quality Monitor" node automation/code-quality-monitor.cjs

echo "\nAll automation steps attempted. See logs above for any failures."

