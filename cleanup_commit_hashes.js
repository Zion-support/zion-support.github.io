#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all files with commit hashes
const filesWithHashes = execSync('grep -l "334a97c43c32bf9e815481016c5bf31caa46a580" -r app/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

console.log(`Found ${filesWithHashes.length} files with commit hashes`);

function removeCommitHashes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove commit hashes
    const cleanedContent = content.replace(/334a97c43c32bf9e815481016c5bf31caa46a580\n?/g, '');
    
    if (content !== cleanedContent) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`✅ Cleaned commit hashes from ${filePath}`);
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.log(`❌ Error cleaning ${filePath}: ${error.message}`);
    return false;
  }
}

// Clean all files
let cleanedCount = 0;
let errorCount = 0;

filesWithHashes.forEach(file => {
  if (removeCommitHashes(file)) {
    cleanedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\nCleanup complete:`);
console.log(`✓ Successfully cleaned: ${cleanedCount} files`);
console.log(`✗ Errors: ${errorCount} files`);

// Verify no more hashes
const remainingHashes = execSync('grep -l "334a97c43c32bf9e815481016c5bf31caa46a580" -r app/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" 2>/dev/null || true', { encoding: 'utf8' })
  .trim();

if (remainingHashes) {
  console.log(`\n⚠️  Remaining hashes in:`);
  console.log(remainingHashes);
} else {
  console.log(`\n🎉 All commit hashes cleaned!`);
}
