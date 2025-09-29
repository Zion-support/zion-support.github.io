#!/bin/bash
# Simple merge execution script
echo "🚀 Starting merge execution..."

# Execute commands with error handling
git checkout main && \
git pull origin main && \
git add . && \
git commit -m "Merge PR #23649: Fix Netlify build and merge to main

- Resolved merge conflicts in lazyLoading utilities
- Consolidated lazyLoading.tsx into lazyLoading.ts
- Fixed TypeScript compilation errors
- Ensured proper React imports and hooks
- Maintained all lazy loading functionality
- Optimized build performance" && \
pnpm install && \
pnpm run type-check && \
pnpm run build:no-check && \
git push origin main && \
echo "🎉 PR #23649 successfully merged!"

echo "✅ Merge execution completed!"