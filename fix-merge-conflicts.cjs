#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'separator';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      } else if (inConflict && conflictType === 'head') {
        fixedLines.push(line);
      }
    }
    
    // Join lines and clean up
    content = fixedLines.join('\n');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove any remaining orphaned markers
    content = content.replace(/^<<<<<<<|^=======|^>>>>>>>.*$/gm, '');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    modified = true;
    
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return modified;
    
  } catch (error) {
    console.error(`Error fixing merge conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all files
function main() {
  const projectRoot = process.cwd();
  const filesToProcess = [
    'App.tsx',
    'SidebarNavigation.tsx',
    'app/components/FuturisticCard.tsx',
    'app/components/FuturisticButton.tsx',
    'app/cloud-infrastructure/page.tsx',
    'app/network-infrastructure/page.tsx',
    'app/components/AccessibilityEnhancer.tsx',
    'app/components/PerformanceMonitor.tsx',
    'app/components/ResponsiveContainer.tsx',
    'app/components/SEOEnhancer.tsx',
    'app/components/EnhancedSEO.tsx',
    'app/components/AdvancedPerformanceMonitor.tsx',
    'app/contexts/AnalyticsContext.tsx',
    'app/types/next.d.ts'
  ];
  
  let totalFixed = 0;
  
  filesToProcess.forEach(file => {
    const filePath = path.join(projectRoot, file);
    if (fs.existsSync(filePath)) {
      if (fixMergeConflicts(filePath)) {
        totalFixed++;
      }
    }
  });
  
  console.log(`\nFixed merge conflicts in ${totalFixed} files.`);
}

if (require.main === module) {
  main();
}

module.exports = { fixMergeConflicts };