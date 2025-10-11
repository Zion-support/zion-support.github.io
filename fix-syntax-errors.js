#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s*{\s*([^}]+);\s*}\s*from\s*['"]([^'"]+)['"]/g, (match, imports, module) => {
    // Clean up the imports by removing extra semicolons and commas
    const cleanImports = imports
      .split(',')
      .map(imp => imp.trim().replace(/;+$/, ''))
      .filter(imp => imp.length > 0)
      .join(', ');
    return `import { ${cleanImports} } from '${module}'`;
  });
  
  // Fix malformed object properties with extra semicolons and commas
  fixed = fixed.replace(/(\w+):\s*([^,}]+);\s*,/g, '$1: $2,');
  fixed = fixed.replace(/(\w+):\s*([^,}]+);\s*}/g, '$1: $2}');
  
  // Fix orphaned JSX elements that appear after export default
  const exportDefaultRegex = /export\s+default\s+\w+[\s\S]*?(?=\n\s*<\/[A-Z][a-zA-Z]*>)/;
  const orphanedElementsRegex = /export\s+default\s+\w+[\s\S]*?(\n\s*<\/[A-Z][a-zA-Z]*>[\s\S]*?)(?=\n|$)/g;
  
  // Remove orphaned JSX elements after export default
  fixed = fixed.replace(orphanedElementsRegex, (match, orphaned) => {
    return match.replace(orphaned, '');
  });
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<\/>\s*\)/g, '</>');
  fixed = fixed.replace(/<>\s*\)/g, '</>');
  
  // Fix missing closing tags in lists
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/ul>/g, '$1\n                  </ul>');
  
  // Fix malformed function calls and object definitions
  fixed = fixed.replace(/\{\s*;\s*,/g, '{');
  fixed = fixed.replace(/,\s*;\s*\}/g, '}');
  fixed = fixed.replace(/\{\s*;\s*\}/g, '{}');
  
  // Fix extra semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+);\s*,/g, '$1: $2,');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)"\s*;\s*/g, 'className="$1" ');
  
  // Fix orphaned closing tags
  const lines = fixed.split('\n');
  const cleanedLines = [];
  let inComponent = false;
  let componentDepth = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if we're in a component definition
    if (line.includes('export default') && line.includes('Page')) {
      inComponent = true;
      componentDepth = 0;
    }
    
    // Count opening and closing tags
    if (inComponent) {
      const openTags = (line.match(/<[A-Z][a-zA-Z]*[^>]*>/g) || []).length;
      const closeTags = (line.match(/<\/[A-Z][a-zA-Z]*>/g) || []).length;
      componentDepth += openTags - closeTags;
      
      // If we hit a closing tag when depth is 0, we're outside the component
      if (componentDepth <= 0 && closeTags > 0) {
        inComponent = false;
        // Skip orphaned closing tags
        if (line.trim().match(/^<\/[A-Z][a-zA-Z]*>$/)) {
          continue;
        }
      }
    }
    
    cleanedLines.push(line);
  }
  
  return cleanedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting syntax error fixes...');
  
  // Get all TypeScript/JSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);