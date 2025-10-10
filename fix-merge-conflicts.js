#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with merge conflicts
const filesWithConflicts = [
  './src/components/PerformanceDashboard.tsx',
  './app/utils/accessibilityChecker.ts',
  './app/utils/accessibilityEnhancer.ts',
  './app/types/next.d.ts',
  './app/ai-crm-assistant/page.tsx',
  './app/ai-content-studio/page.tsx',
  './app/ai-content-writer/page.tsx',
  './app/ai-code-assistant/page.tsx',
  './app/ai-code-security-auditor/page.tsx',
  './app/ai-blockchain-solutions/page.tsx',
  './app/ai-cloud-infrastructure/page.tsx',
  './app/ai-content-generation/page.tsx',
  './app/ai-api-manager/page.tsx',
  './app/ai-computer-vision/page.tsx',
  './app/ai-analytics/page.tsx',
  './app/ai-api-management/page.tsx',
  './app/ai-blockchain-analytics/page.tsx',
  './app/ai-content-delivery-network/page.tsx',
  './app/ai-autonomous-systems/page.tsx',
  './app/ai-climate-solutions-pro/page.tsx'
];

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let inHead = false;
    let inSeparator = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '') {
        inConflict = true;
        inHead = true;
        inSeparator = false;
        continue;
      } else if (line.trim() === '') {
        inHead = false;
        inSeparator = true;
        continue;
      } else if (line.trim() === '>>>>>>>') {
        inConflict = false;
        inHead = false;
        inSeparator = false;
        continue;
      }
      
      if (inConflict) {
        if (inHead) {
          resolvedLines.push(line);
        }
        // Skip lines in the other branch (after )
      } else {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved merge conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Process all files
console.log('🔧 Resolving merge conflicts...\n');

filesWithConflicts.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    resolveMergeConflicts(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('\n✨ Merge conflict resolution complete!');