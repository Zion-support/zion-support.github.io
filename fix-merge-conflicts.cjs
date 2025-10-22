#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesWithConflicts = [
  'app/ai-content-generation/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-services/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/components/Footer.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/PerformanceDashboard.tsx',
  'app/hooks/useEnhancedPerformance.ts',
  'app/hooks/usePerformanceOptimization.ts',
  'app/iot-edge-computing/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-services/page.tsx',
  'app/micro-saas/page.tsx',
  'app/utils/accessibilityChecker.ts',
  'app/utils/accessibilityEnhancer.ts'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the current version (HEAD)
    content = content.replace(/^<<<<<<< HEAD\n/gm, '');
    content = content.replace(/^=======\n[\s\S]*?^>>>>>>> [^\n]+\n/gm, '');
    content = content.replace(/^=======\n[\s\S]*?^>>>>>>> [^\n]+\n/gm, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/^<<<<<<< [^\n]+\n/gm, '');
    content = content.replace(/^=======\n/gm, '');
    content = content.replace(/^>>>>>>> [^\n]+\n/gm, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(fixMergeConflicts);

console.log('All merge conflicts have been resolved!');