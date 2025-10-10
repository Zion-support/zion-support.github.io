#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesWithConflicts = [
  'app/ai-analytics/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-code-security-auditor/page.tsx',
  'app/ai-computer-vision/page.tsx',
  'app/ai-content-delivery-network/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-crm-assistant/page.tsx',
  'app/analytics-tools/page.tsx',
  'app/api-docs/page.tsx',
  'app/ar-vr-platform/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/blockchain/page.tsx',
  'app/blog/page.tsx',
  'app/business-apps/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-migration-services/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-services/page.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentPromotionBanner.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/DynamicContentShowcase.tsx',
  'app/consultation/page.tsx',
  'app/micro-saas/page.tsx',
  'app/partners/page.tsx',
  'app/pricing/page.tsx',
  'app/support/page.tsx',
  'app/types/next.d.ts',
  'app/utils/accessibilityEnhancer.ts'
];

function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let keepCurrent = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<<<<<<< HEAD')) {
      inConflict = true;
      keepCurrent = true;
      continue;
    }
    
    if (line.includes('=======')) {
      keepCurrent = false;
      continue;
    }
    
    if (line.includes('>>>>>>>')) {
      inConflict = false;
      keepCurrent = false;
      continue;
    }
    
    if (inConflict) {
      if (keepCurrent) {
        resolvedLines.push(line);
      }
      // Skip lines from the other branch
    } else {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

function fixFile(filePath) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }
    
    const content = fs.readFileSync(fullPath, 'utf8');
    const resolvedContent = resolveMergeConflicts(content);
    
    // Only write if content changed
    if (content !== resolvedContent) {
      fs.writeFileSync(fullPath, resolvedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    } else {
      console.log(`No conflicts found in: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting merge conflict resolution...');
let fixedCount = 0;

filesWithConflicts.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`\nCompleted! Fixed ${fixedCount} files with merge conflicts.`);