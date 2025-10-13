#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with merge conflicts
const filesWithConflicts = [
  'app/cloud-infrastructure/page.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/SEOEnhancer.tsx',
  'app/contact/page.tsx',
  'app/contexts/AnalyticsContext.tsx',
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx'
];

function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolved = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<') || line.startsWith('=======') || line.startsWith('>>>>>>>')) {
      // Skip all conflict markers until we find the end
      while (i < lines.length && (lines[i].startsWith('<<<<<<<') || lines[i].startsWith('=======') || lines[i].startsWith('>>>>>>>'))) {
        i++;
      }
    } else {
      resolved.push(line);
      i++;
    }
  }
  
  return resolved.join('\n');
}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const resolved = resolveMergeConflicts(content);
    
    if (content !== resolved) {
      fs.writeFileSync(filePath, resolved);
      console.log(`Fixed merge conflicts in: ${filePath}`);
    } else {
      console.log(`No conflicts found in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting merge conflict resolution...');
filesWithConflicts.forEach(fixFile);
console.log('Merge conflict resolution completed!');