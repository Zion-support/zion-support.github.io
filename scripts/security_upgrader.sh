#!/usr/bin/env bash
set -e
cd "$(git rev-parse --show-toplevel)"
echo "Running npm audit..."
npm audit --json > audit.json 2>&1 || true
VULNS=$(jq -r '.metadata.vulnerabilities.total // 0' audit.json)
if [ "$VULNS" -eq 0 ]; then
  echo "✅ No vulnerabilities"
  exit 0
fi
echo "⚠️ Found $VULNS vulnerabilities, attempting fix..."
npm audit fix --audit-level=moderate 2>&1 || true
if git diff --quiet package-lock.json; then
  echo "⚠️ No lockfile change - creating issue"
  gh issue create -t "Manual security fix needed" -b "npm audit found $VULNS issues. See audit.json"
else
  BRANCH="security-fix-$(date +%s)"
  git checkout -B "$BRANCH"
  git add package.json package-lock.json audit.json
  git commit -m "fix: resolve dependency vulnerabilities"
  git push -f origin "$BRANCH"
  gh pr create -B main -t "fix: resolve dependency vulnerabilities" -b "Auto-generated security fix"
  echo "✅ PR created"
fi