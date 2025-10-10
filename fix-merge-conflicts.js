#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with merge conflicts
const filesWithConflicts = [
  './app/ai-analytics/page.tsx',
  './app/ai-api-management/page.tsx',
  './app/ai-api-manager/page.tsx',
  './app/ai-autonomous-systems/page.tsx',
  './app/ai-blockchain-analytics/page.tsx',
  './app/ai-blockchain-solutions/page.tsx',
  './app/ai-climate-solutions-pro/page.tsx',
  './app/ai-cloud-infrastructure/page.tsx',
  './app/ai-code-assistant/page.tsx',
  './app/ai-code-security-auditor/page.tsx',
  './app/ai-crm-assistant/page.tsx',
  './app/ai-content-generation/page.tsx',
  './app/ai-content-studio/page.tsx',
  './app/ai-content-writer/page.tsx',
  './app/ai-content-delivery-network/page.tsx',
  './app/ai-computer-vision/page.tsx',
  './app/blog/page.tsx',
  './app/careers/page.tsx',
  './app/case-studies/page.tsx',
  './app/consultation/page.tsx',
  './app/partners/page.tsx',
  './src/components/PerformanceDashboard.tsx',
  './app/utils/accessibilityChecker.ts',
  './app/utils/accessibilityEnhancer.ts',
  './app/types/next.d.ts'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after =======
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        continue;
      }
      
      if (line.startsWith('=======')) {
        keepContent = true;
        continue;
      }
      
      if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        keepContent = false;
        continue;
      }
      
      if (inConflict) {
        if (keepContent) {
          fixedLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting to fix merge conflicts...');

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fs.existsSync(file)) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files.`);