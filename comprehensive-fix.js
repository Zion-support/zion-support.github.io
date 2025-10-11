#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix comprehensive syntax errors
function comprehensiveFix(content) {
  let fixed = content;
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s*{\s*([^}]+);\s*}\s*from\s*['"]([^'"]+)['"]/g, (match, imports, module) => {
    const cleanImports = imports
      .split(',')
      .map(imp => imp.trim().replace(/;+$/, ''))
      .filter(imp => imp.length > 0)
      .join(', ');
    return `import { ${cleanImports} } from '${module}'`;
  });
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+);\s*,/g, '$1: $2,');
  fixed = fixed.replace(/(\w+):\s*([^,}]+);\s*}/g, '$1: $2}');
  
  // Fix malformed function calls
  fixed = fixed.replace(/\{\s*;\s*,/g, '{');
  fixed = fixed.replace(/,\s*;\s*\}/g, '}');
  fixed = fixed.replace(/\{\s*;\s*\}/g, '{}');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*\)/g, '</>');
  fixed = fixed.replace(/<>\s*<\/>\s*\)/g, '</>');
  
  // Fix malformed list items
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/ul>/g, '$1\n                  </ul>');
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/div>/g, '$1\n                </div>');
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/section>/g, '$1\n        </section>');
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/main>/g, '$1\n      </main>');
  
  // Fix orphaned JSX elements after export default
  const lines = fixed.split('\n');
  const cleanedLines = [];
  let exportFound = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('export default')) {
      exportFound = true;
      cleanedLines.push(line);
      continue;
    }
    
    if (exportFound) {
      // Skip any JSX elements after export default
      if (line.trim().match(/^<\/?[A-Z][a-zA-Z]*[^>]*>?$/) || 
          line.trim().match(/^\s*[A-Z][a-zA-Z]*\s*$/) ||
          line.trim().match(/^\s*<\/?[a-z][a-zA-Z]*[^>]*>?\s*$/)) {
        continue;
      }
    }
    
    cleanedLines.push(line);
  }
  
  fixed = cleanedLines.join('\n');
  
  // Fix specific patterns in AI pages
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/ul>/g, '$1\n                  </ul>');
  fixed = fixed.replace(/(\s*\)\s*)\s*<\/div>/g, '$1\n                </div>');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)"\s*;\s*/g, 'className="$1" ');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = comprehensiveFix(content);
    
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
  console.log('Starting comprehensive syntax error fixes...');
  
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