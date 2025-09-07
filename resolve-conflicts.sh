#!/bin/bash

echo "Resolving merge conflicts automatically..."

# Accept our changes for key files
git checkout --ours data/comprehensive-services-2025.ts components/ComprehensiveServicesShowcase2025.tsx 2>/dev/null || true

# Accept our changes for main app files
git checkout --ours App.tsx app/layout.tsx app/page.tsx 2>/dev/null || true

# Accept our changes for package files
git checkout --ours package.json package-lock.json next.config.js 2>/dev/null || true

# Accept our changes for service pages
git checkout --ours app/services/page.tsx app/services/ai-services/page.tsx app/services/micro-saas/page.tsx 2>/dev/null || true

# Accept our changes for all service pages
git checkout --ours app/services/*/page.tsx 2>/dev/null || true

# Accept our changes for other pages
git checkout --ours app/about/page.tsx app/contact/page.tsx app/solutions/page.tsx 2>/dev/null || true

# Keep main branch versions of deleted files
git checkout --ours src/components/SEO.tsx src/components/ServiceCard.tsx src/hooks/useAuth.ts src/pages/Resources.tsx 2>/dev/null || true

# Remove build files that should be regenerated
git rm -f .next/cache/webpack/edge-server-production/0.pack .next/cache/webpack/edge-server-production/index.pack .next/cache/webpack/server-production/index.pack.old .next/server/pages-manifest.json .next/server/webpack-runtime.js .next/trace 2>/dev/null || true

# Add all resolved files
git add .

echo "Conflicts resolved. Ready to commit."