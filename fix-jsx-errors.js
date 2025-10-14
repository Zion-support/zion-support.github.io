#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX fragment and syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix malformed JSX fragments - look for patterns like:
  // <p className="...">text
  // ">$2</p>
  fixed = fixed.replace(/<p className="([^"]*)"[^>]*>\s*([^<]+)\s*"\$2<\/p>/g, '<p className="$1">$2</p>');
  
  // Fix malformed class names with spaces
  fixed = fixed.replace(/className="([^"]*)\s+"/g, 'className="$1"');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/\s*>\s*$/gm, '');
  
  // Fix malformed JSX structure patterns
  fixed = fixed.replace(/\s+>\s*$/gm, '>');
  
  // Fix duplicate closing divs
  const lines = fixed.split('\n');
  const fixedLines = [];
  let divCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const openDivs = (line.match(/<div/g) || []).length;
    const closeDivs = (line.match(/<\/div>/g) || []).length;
    
    divCount += openDivs - closeDivs;
    
    // Skip duplicate closing divs
    if (closeDivs > 0 && divCount < 0) {
      continue;
    }
    
    fixedLines.push(line);
  }
  
  return fixedLines.join('\n');
}

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
}

// Function to fix specific JSX syntax issues
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className="([^"]*)\s+"/g, 'className="$1"');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/\s*>\s*$/gm, '');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/\s+>\s*$/gm, '>');
  
  // Fix specific patterns found in the files
  fixed = fixed.replace(/<p className="([^"]*)"[^>]*>\s*([^<]+)\s*"\$2<\/p>/g, '<p className="$1">$2</p>');
  
  return fixed;
}

// Main function to process files
async function main() {
  console.log('Starting JSX error fixes...');
  
  // Get all TSX files in the app directory
  const files = await glob('app/**/*.tsx');
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let fixed = content;
      
      // Apply fixes
      fixed = fixMergeConflicts(fixed);
      fixed = fixJSXErrors(fixed);
      fixed = fixJSXSyntax(fixed);
      
      // Only write if content changed
      if (fixed !== content) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);