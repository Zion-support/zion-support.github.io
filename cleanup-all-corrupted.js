#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

const filesToClean = [
  'app/constants/seo.ts',
  'app/contexts/AnalyticsContext.tsx',
  'app/data/services.ts',
  'app/global-error.tsx',
  'app/hooks/useAnalytics.ts',
  'app/hooks/usePerformance.ts',
  'app/not-found.tsx',
  'app/page-backup.tsx',
  'app/page-optimized.tsx',
  'app/pages/5GSolutionsPage.tsx',
  'app/pages/BlogPage.tsx',
  'app/pages/CloudSolutionsPage.tsx',
  'app/pages/CybersecurityPage.tsx',
  'app/pages/DemoPage.tsx',
  'app/pages/MicroSaaSPage.tsx',
  'app/pages/PricingPage.tsx',
  'app/pages/PrivacyPage.tsx',
  'app/pages/SolutionsPage.tsx',
  'app/pages/SupportPage.tsx',
  'app/pages/TermsPage.tsx',
  'app/pages/TutorialsPage.tsx',
  'app/service-template.tsx',
  'app/sitemap-page.tsx',
  'app/types/next.d.ts',
  'app/utils/accessibilityEnhancer.ts',
  'app/utils/analytics.ts',
  'app/utils/dynamic.tsx',
  'app/utils/errorHandler.ts',
  'app/utils/imageOptimizer.ts',
  'app/utils/messageHandler.ts',
  'app/utils/seoData.ts',
  'app/zion-ai-analytics-pro/page.tsx',
  'app/zion-ai-crm-pro/page.tsx',
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'main.tsx'
];

// Function to clean up corrupted files
function cleanupCorruptedFiles() {
  console.log('Starting cleanup of corrupted files...');
  
  filesToClean.forEach(filePath => {
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Removed: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error removing ${filePath}:`, error.message);
    }
  });
  
  console.log('Cleanup completed.');
}

// Run cleanup if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  cleanupCorruptedFiles();
}