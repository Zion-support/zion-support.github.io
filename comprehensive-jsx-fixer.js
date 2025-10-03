#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX syntax errors
function fixJsxErrors(content) {
  let fixed = content;
  
  // Fix malformed quotes in attributes
  fixed = fixed.replace(/name:\s*"([^"]*)/g, 'name="$1');
  fixed = fixed.replace(/content:\s*"([^"]*)/g, 'content="$1');
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className=\s*"/g, 'className="');
  
  // Fix malformed Link components
  fixed = fixed.replace(/to:\s*"/g, 'to="');
  
  // Fix malformed closing tags with quotes
  fixed = fixed.replace(/<\/[^>]+>"/g, (match) => match.slice(0, -1));
  
  // Fix malformed self-closing tags
  fixed = fixed.replace(/\/>"/g, ' />');
  
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/<([^>]*?)\s*$/gm, (match) => {
    if (match.includes('"') && !match.includes('>')) {
      return match + '>';
    }
    return match;
  });
  
  // Fix property access syntax errors
  fixed = fixed.replace(/\.(\w+)\[(\w+)\]/g, '.$1.$2');
  
  // Fix unterminated string literals
  fixed = fixed.replace(/"([^"]*?)\n/g, '"$1"\n');
  
  // Remove duplicate imports
  const lines = fixed.split('\n');
  const seenImports = new Set();
  const filteredLines = lines.filter(line => {
    if (line.trim().startsWith('import ')) {
      if (seenImports.has(line.trim())) {
        return false;
      }
      seenImports.add(line.trim());
    }
    return true;
  });
  
  return filteredLines.join('\n');
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    console.log(`Fixing ${filePath}...`);
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJsxErrors(content);
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log(`✅ Fixed ${filePath}`);
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Find all TypeScript/TSX files with errors
async function findAndFixFiles() {
  try {
    const patterns = [
      '/workspace/src/**/*.tsx',
      '/workspace/src/**/*.ts',
      '/workspace/app/**/*.tsx',
      '/workspace/app/**/*.ts'
    ];
    
    let allFiles = [];
    for (const pattern of patterns) {
      const files = await glob(pattern);
      allFiles = allFiles.concat(files);
    }
    
    console.log(`Found ${allFiles.length} TypeScript/TSX files`);
    
    // Fix each file
    allFiles.forEach(fixFile);
    
    console.log('🎉 Comprehensive JSX error fixing completed!');
  } catch (error) {
    console.error('Error finding files:', error);
  }
}

// Run the fix
findAndFixFiles();