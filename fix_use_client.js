#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all files with 'use client' directive
const filesWithUseClient = execSync('grep -r "\'use client\'" app/ --include="*.tsx" --include="*.ts" -l', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && file.trim());

console.log(`Found ${filesWithUseClient.length} files with 'use client' directive`);

function fixUseClient(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Find 'use client' line
    let useClientIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === "'use client'") {
        useClientIndex = i;
        break;
      }
    }
    
    if (useClientIndex === -1) return true; // No 'use client' found
    
    // Check if it's already at the top
    if (useClientIndex === 0) return true; // Already at top
    
    // Remove the 'use client' line
    lines.splice(useClientIndex, 1);
    
    // Add it at the top
    lines.unshift("'use client';");
    
    content = lines.join('\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let fixedCount = 0;
let errorCount = 0;

filesWithUseClient.forEach(file => {
  if (fixUseClient(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\nFix complete:`);
console.log(`✓ Successfully fixed: ${fixedCount} files`);
console.log(`✗ Errors: ${errorCount} files`);