#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files that need fixing
const filesToFix = [
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx'
];

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the missing closing div for the grid container
    const fixedContent = content.replace(
      /(\s+<\/div>\s+<div className="text-center">)/,
      '$1        </div>\n        <div className="text-center">'
    );
    
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log(`Fixed missing div in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix each file
console.log('Fixing missing div tags...');

let successCount = 0;
for (const file of filesToFix) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (fixPageFile(fullPath)) {
      successCount++;
    }
  } else {
    console.log(`File not found: ${fullPath}`);
  }
}

console.log(`Successfully fixed ${successCount} out of ${filesToFix.length} files`);