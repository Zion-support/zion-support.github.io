#!/usr/bin/env node

import fs from 'fs';

const filesToFix = [
  'app/ai-mobile-builder/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/components/EnhancedSEO.tsx',
  'app/components/ErrorFallback.tsx',
  'app/components/FuturisticBackgroundEnhanced.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/SEOEnhancer.tsx',
  'app/contact/page.tsx',
  'app/contexts/AnalyticsContext.tsx',
  'app/types/next.d.ts',
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx'
];

function cleanMergeConflicts(content) {
  // Remove all merge conflict markers and keep the content after the last =======
  const lines = content.split('\n');
  const cleanedLines = [];
  let inConflict = false;
  let conflictDepth = 0;
  let lastValidContent = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      conflictDepth++;
      continue;
    }
    
    if (line.startsWith('=======')) {
      // Store content before ======= as potential valid content
      if (inConflict && conflictDepth === 1) {
        lastValidContent = [...cleanedLines];
      }
      continue;
    }
    
    if (line.startsWith('>>>>>>>')) {
      conflictDepth--;
      if (conflictDepth === 0) {
        inConflict = false;
        // Use the last valid content we found
        cleanedLines.length = 0;
        cleanedLines.push(...lastValidContent);
      }
      continue;
    }
    
    if (!inConflict) {
      cleanedLines.push(line);
    }
  }
  
  return cleanedLines.join('\n');
}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    let cleanedContent = cleanMergeConflicts(content);
    
    // Additional cleanup for common issues
    cleanedContent = cleanedContent
      // Remove duplicate imports
      .replace(/import\s+.*?;\s*\n\s*import\s+.*?;\s*\n/g, (match) => {
        const imports = match.split('\n').filter(line => line.trim().startsWith('import'));
        return [...new Set(imports)].join('\n') + '\n';
      })
      // Fix common syntax issues
      .replace(/,\s*}/g, '}')
      .replace(/,\s*]/g, ']')
      .replace(/,\s*\)/g, ')')
      // Remove empty lines at the beginning
      .replace(/^\s*\n+/, '')
      // Ensure proper ending
      .trim() + '\n';
    
    fs.writeFileSync(filePath, cleanedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting remaining error cleanup...');
filesToFix.forEach(fixFile);
console.log('Remaining error cleanup completed!');