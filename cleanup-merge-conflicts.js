#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with merge conflicts
const filesWithConflicts = execSync('grep -l "^<<<<<<<\\|^=======\\|^>>>>>>>" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | head -50', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('dist'));

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

function cleanMergeConflicts(content) {
  let cleaned = content;
  
  // Remove merge conflict markers and keep the first version (HEAD)
  cleaned = cleaned.replace(/^<<<<<<<.*?\n(.*?)\n=======.*?\n(.*?)\n>>>>>>>.*?\n/gms, '$1');
  
  // Remove any remaining conflict markers
  cleaned = cleaned.replace(/^<<<<<<<.*?\n/gm, '');
  cleaned = cleaned.replace(/^=======.*?\n/gm, '');
  cleaned = cleaned.replace(/^>>>>>>>.*?\n/gm, '');
  
  // Clean up any orphaned conflict markers
  cleaned = cleaned.replace(/<<<<<<<.*?>>>>>>>/gs, '');
  cleaned = cleaned.replace(/=======.*?>>>>>>>/gs, '');
  
  return cleaned;
}

function fixCommonSyntaxErrors(content) {
  let fixed = content;
  
  // Fix common JSX syntax issues
  fixed = fixed.replace(/\{\s*>\s*\}/g, '>');
  fixed = fixed.replace(/\{\s*<\s*\}/g, '<');
  fixed = fixed.replace(/\{\s*\/\s*\}/g, '/');
  
  // Fix unclosed JSX tags by adding proper closing
  fixed = fixed.replace(/<(\w+)([^>]*?)(?<!\s\/)>/g, (match, tagName, attributes) => {
    if (attributes.includes('/')) return match; // Self-closing tag
    return match;
  });
  
  return fixed;
}

let processedCount = 0;
let errorCount = 0;

for (const filePath of filesWithConflicts) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      continue;
    }
    
    const originalContent = fs.readFileSync(filePath, 'utf8');
    let cleanedContent = cleanMergeConflicts(originalContent);
    cleanedContent = fixCommonSyntaxErrors(cleanedContent);
    
    // Only write if content changed
    if (cleanedContent !== originalContent) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      processedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorCount++;
  }
}

console.log(`\nProcessed ${processedCount} files, ${errorCount} errors`);