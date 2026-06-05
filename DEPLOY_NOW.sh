#!/usr/bin/env bash
set -euo pipefail

cd /root/.openclaw/workspace/zion-app || { echo "Missing repo"; exit 1; }

if [ -z "${GITHUB_TOKEN:-}" ]; then
  echo "Set GITHUB_TOKEN first: export GITHUB_TOKEN=ghp_..."
  exit 1
fi

git remote set-url origin "https://x-access-token:${GITHUB_TOKEN}@github.com/Zion-support/zion-support.github.io.git"
git add app/api/ai-service-router app/services/\[id\]/fallback-resolver.ts app/services/\[id\]/page.tsx app/components/AccessibilityEnhancer.tsx broken-links.json
git commit -m "feat: fallback resolver + ai-service-router + normalized link audit

- services fallback resolver from servicesData
- new AI service router API
- updated broken-links.json
- accessibility enhancer refinements
- Audit: 286 entry points, 1,054 entries audited, 263 unique routes" || true
git push origin main
git remote set-url origin https://github.com/Zion-support/zion-support.github.io.git
echo "DEPLOY_COMPLETE"
