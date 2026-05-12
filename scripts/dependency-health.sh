#!/usr/bin/env bash
# ------------------------------------------------------------
# Automated Dependency Health Check
# ------------------------------------------------------------
#   - Runs npm audit (security vulnerabilities)
#   - Runs npm outdated (available newer versions)
#   - Stores JSON reports in .hermes/memory
#   - Intended to be executed via GitHub Actions (weekly)
# ------------------------------------------------------------
set -euo pipefail

# Ensure output directory exists
OUT_DIR=".hermes/memory"
mkdir -p "${OUT_DIR}"

# Run npm audit and capture JSON output
echo "Running npm audit..."
npm audit --json > "${OUT_DIR}/dependency-audit.json" || {
  echo "npm audit failed (non-zero exit code) – writing empty JSON"
  echo "{}" > "${OUT_DIR}/dependency-audit.json"
}

# Run npm outdated and capture JSON output
echo "Running npm outdated..."
npm outdated --json > "${OUT_DIR}/dependency-outdated.json" || {
  echo "npm outdated failed – writing empty JSON"
  echo "{}" > "${OUT_DIR}/dependency-outdated.json"
}

# Combine into a single health report (optional)
# Note: Simple concatenation for easy consumption
cat <<EOF > "${OUT_DIR}/dependency-health-summary.txt"
=== Dependency Health Summary ===
Generated: $(date -u)

--- Security Audit (npm audit) ---
$(jq '.metadata.vulnerabilities' "${OUT_DIR}/dependency-audit.json")

--- Outdated Packages (npm outdated) ---
$(jq 'keys' "${OUT_DIR}/dependency-outdated.json" | wc -l) packages have newer versions available.
EOF

echo "Dependency health reports written to ${OUT_DIR}"