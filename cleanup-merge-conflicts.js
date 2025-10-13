#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to clean merge conflicts from a file
function cleanMergeConflicts(content) {
  // Remove merge conflict markers and keep HEAD version
  let cleaned = content
    // Remove <<<<<<< HEAD lines
    .replace(/^<<<<<<< HEAD\s*\n?/gm, '')
    // Remove ======= lines
    .replace(/^=======\s*\n?/gm, '')
    // Remove >>>>>>> branch-name lines
    .replace(/^>>>>>>> [^\n]+\s*\n?/gm, '')
    // Remove any remaining conflict markers
    .replace(/^<<<<<<< [^\n]+\s*\n?/gm, '')
    .replace(/^=======\s*\n?/gm, '')
    .replace(/^>>>>>>> [^\n]+\s*\n?/gm, '');
  
  // Clean up any duplicate function declarations or exports
  cleaned = cleaned
    // Remove duplicate export default statements
    .replace(/(export default function [^{]+{[^}]*})\s*export default function/g, '$1')
    // Remove duplicate function declarations
    .replace(/(function [^{]+{[^}]*})\s*function [^{]+{/g, '$1')
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    // Remove empty lines at the end
    .replace(/\n+$/, '\n');
  
  return cleaned;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleaned = cleanMergeConflicts(content);
    
    if (content !== cleaned) {
      fs.writeFileSync(filePath, cleaned, 'utf8');
      console.log(`✅ Cleaned: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('🧹 Starting merge conflict cleanup...');
  
  // Find all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'src/**/*.{ts,tsx,js,jsx}'
  ];
  
  let totalFiles = 0;
  let cleanedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        cleanedFiles++;
      }
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files cleaned: ${cleanedFiles}`);
  console.log(`   Files unchanged: ${totalFiles - cleanedFiles}`);
  
  if (cleanedFiles > 0) {
    console.log('\n✨ Merge conflict cleanup completed!');
  } else {
    console.log('\n✨ No merge conflicts found.');
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { cleanMergeConflicts, processFile };