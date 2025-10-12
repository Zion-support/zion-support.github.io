#!/bin/bash

# Complete the merge and push changes

echo "Adding resolved files to staging..."
git add app/App.tsx
git add app/components/InteractiveAIROICalculator.tsx
git add app/enterprise/page.tsx
git add src/hooks/usePerformance.ts
git add tsconfig.json

# Add all other modified files
git add adv_seo_backup.txt
git add app/components/AdvancedSEOOptimizer.tsx
git add app/components/ErrorBoundary.tsx
git add app/components/PerformanceDashboard.tsx
git add app/hooks/useEnhancedPerformance.ts
git add app/utils/accessibilityEnhancer.ts
git add app/utils/logger.ts
git add app/utils/performanceMonitor.ts
git add app/utils/seoOptimizer.ts
git add app/utils/testRunner.tsx
git add comprehensive_typescript_fixer.py
git add fix_all_typescript_errors.sh
git add fix_seo_optimizer.py
git add src/content/october-2025-cutting-edge-innovations.ts
git add src/hooks/useBannerRotation.tsx
git add src/monitoring.ts

echo "Committing merge..."
git commit -m "Merge PR #25994: Resolve conflicts and fix errors

- Resolved conflicts in app/App.tsx by combining comprehensive monitoring with accessibility features
- Resolved conflicts in app/components/InteractiveAIROICalculator.tsx  
- Resolved conflicts in app/enterprise/page.tsx
- Resolved conflicts in src/hooks/usePerformance.ts
- Resolved conflicts in tsconfig.json by merging exclusion lists
- Added comprehensive error handling and performance monitoring
- Improved SEO optimization and accessibility enhancements"

echo "Merge completed successfully!"
echo ""
echo "Checking status..."
git status

echo ""
echo "Recent commits:"
git log --oneline -5

echo ""
echo "To push changes, run: git push origin HEAD"