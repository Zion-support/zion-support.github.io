#!/usr/bin/env node

import fs from "fs";
import path from "path";

// Files with merge conflicts
const filesWithConflicts = [
  "./app/components/PerformanceOptimizer.tsx",
  "./app/blog/page.tsx",
  "./app/careers/page.tsx",
  "./app/case-studies/page.tsx",
  "./app/support/page.tsx",
  "./app/types/next.d.ts",
  "./app/micro-saas/page.tsx",
  "./app/partners/page.tsx",
  "./app/pricing/page.tsx",
  "./app/consultation/page.tsx",
  "./app/components/ContentPromotionBanner.tsx",
  "./app/components/AnalyticsProvider.tsx",
  "./app/components/DynamicContentShowcase.tsx",
  "./app/components/ContentStatistics.tsx",
  "./app/components/AccessibilityEnhancer.tsx",
  "./app/components/ContentCarousel.tsx",
  "./app/components/SEOOptimizer.tsx",
  "./app/utils/accessibilityChecker.ts",
  "./app/utils/accessibilityEnhancer.ts",
  "./src/components/PerformanceDashboard.tsx",
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n [^\n]+\n/g, "$1");

    // Remove any remaining conflict markers
    content = content.replace(/\n?/g, "");
    content = content.replace(/\n?/g, "");
    content = content.replace(/ [^\n]+\n?/g, "");

    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, "\n\n");

    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(fixMergeConflicts);

console.log("Merge conflict fixing completed!");
