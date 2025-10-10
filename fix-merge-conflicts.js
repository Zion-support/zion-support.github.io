#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with merge conflicts
const filesWithConflicts = [
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
  'app/blog/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/consultation/page.tsx',
  'app/partners/page.tsx',
  'app/pricing/page.tsx',
  'app/types/next.d.ts',
  'app/utils/accessibilityEnhancer.ts',
  'src/components/PerformanceDashboard.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after =======
    content = content.replace(/\s*([\s\S]*?)
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?
    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting to fix merge conflicts...');

let fixedCount = 0;
filesWithConflicts.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log(`Fixed merge conflicts in ${fixedCount} files`);