#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix specific syntax errors
function fixSpecificErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix specific patterns
    const fixes = [
      // Fix malformed import statements
      { pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)';\s*}/g, replacement: "import { $1 } from '$2';" },
      // Fix missing semicolons after imports
      { pattern: /from\s*'([^']+)'\s*}\s*const/g, replacement: "from '$1';\n\nconst" },
      // Fix malformed object syntax
      { pattern: /{\s*icon:\s*(\w+),\s*}\s*title:/g, replacement: '{\n      icon: $1,\n      title:' },
      // Fix missing closing brackets
      { pattern: /}\s*const\s+(\w+)\s*=\s*\[/g, replacement: '};\n\nconst $1 = [' },
      // Fix malformed function declarations
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*const\s+(\w+)\s*=\s*\[\s*{\s*}/g, replacement: 'const $1: React.FC = () => {\n  const $2 = [\n    {' },
      // Fix missing semicolons
      { pattern: /}\s*return\s*\(/g, replacement: '};\n\n  return (' },
      // Fix malformed array syntax
      { pattern: /\[\s*{\s*}\s*icon:/g, replacement: '[\n    {\n      icon:' },
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
      console.log(`Fixed specific errors in: ${filePath}`);
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
  '/workspace/src/ai-computer-vision/page.tsx',
  '/workspace/src/ai-email-marketing/page.tsx',
  '/workspace/src/ai-scheduler/page.tsx',
  '/workspace/src/ai-social-media-manager/page.tsx',
  '/workspace/src/analytics-tools/page.tsx',
  '/workspace/src/expense-tracker/page.tsx',
  '/workspace/src/smart-analytics/page.tsx',
  '/workspace/src/task-manager-pro/page.tsx'
];

console.log('🔧 Fixing specific syntax errors...');

let fixedCount = 0;
for (const file of problemFiles) {
  if (fs.existsSync(file)) {
    if (fixSpecificErrors(file)) {
      fixedCount++;
    }
  }
}

console.log(`✅ Fixed specific errors in ${fixedCount} files`);