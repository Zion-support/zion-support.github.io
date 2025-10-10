#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with console warnings
let filesWithConsoleWarnings = [];
try {
  const result = execSync('pnpm run lint 2>&1 | grep -E "Unexpected console statement" | grep -o "/workspace/[^:]*" | sort -u', { encoding: 'utf8' });
  filesWithConsoleWarnings = result.trim().split('\n').filter(file => file.trim());
} catch (error) {
  if (error.stdout) {
    filesWithConsoleWarnings = error.stdout.trim().split('\n').filter(file => file.trim());
  }
}

console.log(`Found ${filesWithConsoleWarnings.length} files with console warnings`);

filesWithConsoleWarnings.forEach(filePath => {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace console.log with proper logging or remove them
    content = content.replace(/console\.log\([^)]*\);\s*/g, '');
    content = content.replace(/console\.error\([^)]*\);\s*/g, '');
    content = content.replace(/console\.warn\([^)]*\);\s*/g, '');
    content = content.replace(/console\.info\([^)]*\);\s*/g, '');
    
    // Remove unused variables
    content = content.replace(/const\s+__dirname\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+withSentry\s*=\s*[^;]+;\s*/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    
    console.log(`✓ Fixed: ${filePath}`);
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
});

console.log('Console warnings resolution completed!');