#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Function to fix comma issues in files
function fixCommaIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix missing commas in arrays
    content = content.replace(/\]\s*\{/g, '],\n    {');
    content = content.replace(/}\s*\{/g, '},\n    {');
    
    // Fix missing commas in object properties
    content = content.replace(/benefits: \[([^\]]+)\]\s*}/g, 'benefits: [$1]\n    }');
    
    // Fix missing closing brackets
    content = content.replace(/benefits: \[([^\]]+)\]\s*$/gm, 'benefits: [$1]\n    }');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixed = true;
    }
    
    return fixed;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get files with comma issues
const files = execSync("find app -name '*.tsx' -exec grep -l 'Parsing error.*comma' {} + 2>/dev/null || true", { encoding: 'utf8' }).trim().split('\n').filter(f => f);

// Also get files that might have comma issues based on the pattern
const additionalFiles = execSync("find app -name '*.tsx' -exec grep -l 'benefits.*Benefit.*Benefit.*Benefit.*}' {} + 2>/dev/null || true", { encoding: 'utf8' }).trim().split('\n').filter(f => f);

const allFiles = [...new Set([...files, ...additionalFiles])];

console.log(`Found ${allFiles.length} files with potential comma issues`);

let fixed = 0;
let failed = 0;

allFiles.forEach(file => {
  if (fixCommaIssues(file)) {
    fixed++;
  } else {
    failed++;
  }
});

console.log(`\nFixed: ${fixed} files`);
console.log(`Failed: ${failed} files`);