#!/usr/bin/env bash
set -e
cd $(git rev-parse --show-toplevel)
# Run npm audit in JSON mode
npm audit --json > audit.json 2>&1 || true
# Parse audit results
VULNS=$(jq -r '.metadata.vulnerabilities.total // 0' audit.json)
if [ "$VULNS" -eq 0 ]; then
  echo "✅ No vulnerabilities found"
  exit 0
fi
echo "⚠️ Found $VULNS vulnerabilities, attempting auto-fix..."
# Try safe fixes (patch/minor only)
npm audit fix --audit-level=moderate --force > fix.log 2>&1 || true
# Check if lockfile changed
if git diff --name-only | grep -q "package-lock.json"; then
  echo "Lockfile changed, creating PR..."
  git checkout -B security-fix-branch
  git add package.json package-lock.json
  git commit -m "fix: auto-resolve dependency vulnerabilities"
  # Push and create PR via gh cli
  git push -f origin security-fix-branch
  gh pr create -B main -t "fix: resolve dependency vulnerabilities" -b "Automated fix via npm audit fix"
  echo "✅ PR created for security fixes"
else
  echo "⚠️ No lockfile changes, manual review needed"
  # Create an issue
  gh issue create -t "Manual dependency fix required" -b "npm audit found $VULNS issues but auto-fix couldn't resolve them. See audit.json for details."
fi