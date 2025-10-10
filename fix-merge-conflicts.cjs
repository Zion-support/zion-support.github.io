#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesWithConflicts = [
  './src/components/PerformanceDashboard.tsx',
  './app/utils/accessibilityEnhancer.ts',
  './app/types/next.d.ts',
  './app/support/page.tsx',
  './app/micro-saas/page.tsx',
  './app/partners/page.tsx',
  './app/pricing/page.tsx',
  './app/consultation/page.tsx',
  './jest.config.js',
  './app/cloud-infrastructure/page.tsx',
  './app/cloud-services/page.tsx',
  './app/cloud-security/page.tsx',
  './app/cloud-migration-services/page.tsx',
  './app/case-studies/page.tsx',
  './app/cloud-migration/page.tsx',
  './app/components/ContentPromotionBanner.tsx',
  './app/components/DynamicContentShowcase.tsx',
  './app/components/ContentStatistics.tsx',
  './app/components/ContentCarousel.tsx',
  './app/blog/page.tsx',
  './app/business-apps/page.tsx',
  './app/ar-vr-platform/page.tsx',
  './app/careers/page.tsx',
  './app/blockchain-integration-services/page.tsx',
  './app/backup-recovery/page.tsx',
  './app/blockchain/page.tsx',
  './app/analytics-tools/page.tsx',
  './app/api-docs/page.tsx',
  './app/business-intelligence/page.tsx',
  './app/ai-code-assistant/page.tsx',
  './app/ai-code-security-auditor/page.tsx',
  './app/ai-crm-assistant/page.tsx',
  './app/ai-blockchain-solutions/page.tsx',
  './app/ai-cloud-infrastructure/page.tsx',
  './app/ai-content-generation/page.tsx',
  './app/ai-api-manager/page.tsx',
  './app/ai-content-studio/page.tsx',
  './app/ai-computer-vision/page.tsx',
  './app/ai-analytics/page.tsx',
  './app/ai-api-management/page.tsx',
  './app/ai-blockchain-analytics/page.tsx',
  './app/ai-content-writer/page.tsx',
  './app/ai-content-delivery-network/page.tsx',
  './app/ai-autonomous-systems/page.tsx',
  './app/ai-climate-solutions-pro/page.tsx'
];

function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Remove merge conflict markers and keep HEAD version
    // Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    
    // Also handle cases where there might be multiple conflict markers
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
    } else {
      console.log(`No conflicts found in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log('Starting merge conflict resolution...');

filesWithConflicts.forEach(file => {
  resolveMergeConflicts(file);
});

console.log('Merge conflict resolution completed!');