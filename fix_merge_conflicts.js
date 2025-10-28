#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix merge conflict markers in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers
    const originalContent = content;
    
    // Remove <<<<<<< HEAD lines
    content = content.replace(/^<<<<<<< HEAD\s*$/gm, '');
    
    // Remove ======= lines
    content = content.replace(/^=======\s*$/gm, '');
    
    // Remove >>>>>>> branch lines
    content = content.replace(/^>>>>>>> [^\s]+\s*$/gm, '');
    
    // Remove any remaining conflict markers
    content = content.replace(/^<<<<<<< [^\s]+\s*$/gm, '');
    content = content.replace(/^>>>>>>> [^\s]+\s*$/gm, '');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove leading/trailing whitespace from lines
    content = content.split('\n').map(line => line.trimEnd()).join('\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript and TSX files
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'components/**/*.tsx',
  'components/**/*.ts'
];

async function main() {
  let totalFixed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      if (fixMergeConflicts(file)) {
        totalFixed++;
      }
    }
  }

  console.log(`\nFixed merge conflicts in ${totalFixed} files.`);

  // Additional cleanup for specific problematic files
  const problematicFiles = [
    'app/components/Navigation.tsx',
    'app/micro-saas-services/ai-content-generator/page.tsx',
    'app/micro-saas-services/ai-email-assistant/page.tsx',
    'app/micro-saas-services/ai-lead-generation/page.tsx'
  ];

  for (const file of problematicFiles) {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // Fix specific syntax issues
      content = content.replace(/<[^>]*$/gm, ''); // Remove incomplete tags
      content = content.replace(/\s*}\s*$/gm, '}'); // Fix closing braces
      
      // Remove any remaining malformed lines
      const lines = content.split('\n');
      const cleanedLines = lines.filter(line => {
        // Keep valid lines, remove malformed ones
        return !line.match(/^[<>]+$/) && 
               !line.match(/^\s*[<>]+\s*$/) &&
               line.trim() !== '';
      });
      
      fs.writeFileSync(file, cleanedLines.join('\n'), 'utf8');
      console.log(`Cleaned up: ${file}`);
    }
  }

  console.log('Merge conflict cleanup completed!');
}

main().catch(console.error);