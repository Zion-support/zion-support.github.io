#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix specific parsing errors
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing comma after last array item
    content = content.replace(/(\s+)([^,;]+);\s*\]/g, '$1$2\n  ]');
    
    // Fix missing comma in object properties
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix malformed JSX elements
    content = content.replace(/<(\w+)\s*([^>]*?)>\s*<\/\1>/g, '<$1 $2 />');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*\n\s*return\s*\(/g, '$1;\n  return (');
    content = content.replace(/(\w+)\s*\n\s*const\s+/g, '$1;\nconst ');
    
    // Fix malformed array declarations
    content = content.replace(/(\w+)\s*=\s*\[([\s\S]*?)\n\s*\]\s*\n\s*\]/g, '$1 = [$2\n];');
    
    // Fix missing closing brackets
    content = content.replace(/(\w+)\s*\n\s*\]/g, '$1\n  ]');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n+/g, '\n\n');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Fixing remaining parsing errors...');
  
  // List of files that still have parsing errors
  const problemFiles = [
    '/workspace/app/ai-agricultural-intelligence-pro/page.tsx',
    '/workspace/app/ai-analytics/page.tsx',
    '/workspace/app/ai-api-management/page.tsx',
    '/workspace/app/ai-api-manager/page.tsx',
    '/workspace/app/ai-automation/page.tsx',
    '/workspace/app/ai-autonomous-systems/page.tsx',
    '/workspace/app/ai-blockchain-analytics/page.tsx',
    '/workspace/app/ai-blockchain-solutions/page.tsx',
    '/workspace/app/ai-business-intelligence/page.tsx',
    '/workspace/app/ai-climate-solutions-pro/page.tsx',
    '/workspace/app/ai-cloud-infrastructure/page.tsx',
    '/workspace/app/ai-code-assistant/page.tsx',
    '/workspace/app/ai-code-generation/page.tsx'
  ];
  
  let fixedCount = 0;
  
  problemFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`Fixing: ${file}`);
      if (fixRemainingErrors(file)) {
        console.log(`  ✓ Fixed`);
        fixedCount++;
      } else {
        console.log(`  ✓ No changes needed`);
      }
    }
  });
  
  console.log(`\nFixed ${fixedCount} files.`);
}

main();