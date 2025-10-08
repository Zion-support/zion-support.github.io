#!/usr/bin/env node

import fs from 'fs';

// List of component files that need fixing
const filesToFix = [
  '/workspace/app/components/SEOOptimizer.tsx',
  '/workspace/app/components/UltimateBusinessIntelligence2025Banner.tsx',
  '/workspace/app/components/UltimateBusinessIntelligenceShowcase2025.tsx',
  '/workspace/app/components/UnifiedContentPromotion.tsx'
];

// console.log(`Fixing ${filesToFix.length} component files`);

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing braces and semicolons
    content = content.replace(/\n\nexport default/g, '\n};\n\nexport default');
    
    // Fix any remaining syntax issues
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      // console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    // console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process all files
let fixedCount = 0;
filesToFix.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

// console.log(`\nFixed ${fixedCount} out of ${filesToFix.length} files`);