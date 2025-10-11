#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix orphaned JSX elements after export default
  const lines = fixed.split('\n');
  const cleanedLines = [];
  let inComponent = false;
  let componentDepth = 0;
  let exportLineFound = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if we hit export default
    if (line.includes('export default') && line.includes('Page')) {
      exportLineFound = true;
      inComponent = false;
      cleanedLines.push(line);
      continue;
    }
    
    // If we've found export default, skip any remaining JSX elements
    if (exportLineFound) {
      // Only keep the export line and any comments or empty lines after it
      if (line.trim() === '' || line.trim().startsWith('//') || line.trim().startsWith('/*')) {
        cleanedLines.push(line);
      } else if (line.trim().match(/^<\/[A-Z][a-zA-Z]*>$/)) {
        // Skip orphaned closing tags
        continue;
      } else if (line.trim().match(/^<[A-Z][a-zA-Z]*[^>]*>$/)) {
        // Skip orphaned opening tags
        continue;
      } else if (line.trim().match(/^\s*[A-Z][a-zA-Z]*\s*$/)) {
        // Skip orphaned component names
        continue;
      } else {
        // Keep other content after export default
        cleanedLines.push(line);
      }
      continue;
    }
    
    // Check if we're in a component definition
    if (line.includes('const') && line.includes('Page') && line.includes('=')) {
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
      }
    }
    
    cleanedLines.push(line);
  }
  
  fixed = cleanedLines.join('\n');
  
  // Fix malformed JSX fragments and closing tags
  fixed = fixed.replace(/<>\s*\)/g, '</>');
  fixed = fixed.replace(/<>\s*<\/>\s*\)/g, '</>');
  
  // Fix malformed list items
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/ul>/g, '$1\n                  </ul>');
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+);\s*,/g, '$1: $2,');
  fixed = fixed.replace(/(\w+):\s*([^,}]+);\s*}/g, '$1: $2}');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)"\s*;\s*/g, 'className="$1" ');
  
  // Fix malformed function calls
  fixed = fixed.replace(/\{\s*;\s*,/g, '{');
  fixed = fixed.replace(/,\s*;\s*\}/g, '}');
  fixed = fixed.replace(/\{\s*;\s*\}/g, '{}');
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s*{\s*([^}]+);\s*}\s*from\s*['"]([^'"]+)['"]/g, (match, imports, module) => {
    const cleanImports = imports
      .split(',')
      .map(imp => imp.trim().replace(/;+$/, ''))
      .filter(imp => imp.length > 0)
      .join(', ');
    return `import { ${cleanImports} } from '${module}'`;
  });
  
  // Fix malformed JSX structure in lists
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/ul>/g, '$1\n                  </ul>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/div>/g, '$1\n                </div>');
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/section>/g, '$1\n        </section>');
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/main>/g, '$1\n      </main>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
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
  console.log('Starting remaining syntax error fixes...');
  
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