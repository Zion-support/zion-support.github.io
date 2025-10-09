#!/usr/bin/env node

import fs from 'fs';

// Function to fix all remaining syntax errors
function fixFinalSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing brackets and commas
    const fixes = [
      // Fix missing closing bracket for arrays
      { pattern: /]\s*const\s+(\w+)\s*=\s*\[/g, replacement: '];\n\n  const $1 = [' },
      // Fix missing closing bracket for objects in arrays
      { pattern: /}\s*title:/g, replacement: '},\n    {' },
      // Fix missing closing bracket for objects
      { pattern: /}\s*const\s+(\w+)\s*=\s*\[/g, replacement: '};\n\n  const $1 = [' },
      // Fix missing closing bracket for features array
      { pattern: /}\s*const\s+applications\s*=\s*\[/g, replacement: '};\n\n  const applications = [' },
      // Fix missing closing bracket for applications array
      { pattern: /}\s*const\s+pricing\s*=\s*\[/g, replacement: '};\n\n  const pricing = [' },
      // Fix missing closing bracket for pricing array
      { pattern: /}\s*return\s*\(/g, replacement: '};\n\n  return (' },
      // Fix missing closing bracket for JSX return
      { pattern: /}\s*<div/g, replacement: '};\n\n  return (\n    <div' },
      // Fix missing closing bracket for return statement
      { pattern: /}\s*export\s+default/g, replacement: '};\n\nexport default' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed final syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files with known errors
const problemFiles = [
  '/workspace/src/about/page.tsx',
  '/workspace/src/ai-computer-vision/page.tsx',
  '/workspace/src/ai-email-marketing/page.tsx',
  '/workspace/src/ai-scheduler/page.tsx',
  '/workspace/src/ai-social-media-manager/page.tsx',
  '/workspace/src/analytics-tools/page.tsx',
  '/workspace/src/expense-tracker/page.tsx',
  '/workspace/src/smart-analytics/page.tsx',
  '/workspace/src/task-manager-pro/page.tsx'
];

console.log('🔧 Fixing final syntax errors...');

let fixedCount = 0;
for (const file of problemFiles) {
  if (fs.existsSync(file)) {
    if (fixFinalSyntax(file)) {
      fixedCount++;
    }
  }
}

console.log(`✅ Fixed final syntax in ${fixedCount} files`);