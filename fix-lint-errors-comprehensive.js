#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common lint errors
function fixLintErrors(content, filePath) {
  let fixed = content;
  
  // Fix missing closing tags and parentheses
  // Pattern: Missing closing parenthesis for return statement
  if (fixed.includes('return (') && !fixed.includes(');') && fixed.includes('export default')) {
    // Find the last opening parenthesis and add closing
    const lines = fixed.split('\n');
    let parenCount = 0;
    let returnIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('return (')) {
        returnIndex = i;
        parenCount = 1;
      } else if (returnIndex !== -1) {
        parenCount += (lines[i].match(/\(/g) || []).length;
        parenCount -= (lines[i].match(/\)/g) || []).length;
        
        if (parenCount === 0 && lines[i].includes('export default')) {
          // Add missing closing parenthesis
          lines[i] = lines[i].replace('export default', ');\nexport default');
          break;
        }
      }
    }
    fixed = lines.join('\n');
  }
  
  // Fix malformed JSX - missing closing tags
  if (fixed.includes('<div') && !fixed.includes('</div>') && fixed.includes('export default')) {
    // Add missing closing div tag before export
    fixed = fixed.replace(/(\s*)(export default)/, '$1    </div>\n  );\n$2');
  }
  
  // Fix incomplete function definitions
  // Pattern: function with missing closing brace
  if (fixed.includes('export default function') && !fixed.includes('}') && fixed.includes('export default')) {
    const lines = fixed.split('\n');
    const exportIndex = lines.findIndex(line => line.includes('export default'));
    if (exportIndex > 0) {
      lines.splice(exportIndex, 0, '}');
      fixed = lines.join('\n');
    }
  }
  
  // Fix malformed array definitions
  // Pattern: arrays with missing closing brackets
  fixed = fixed.replace(/(\s*const\s+\w+\s*=\s*\[[^\]]*)(\s*export default)/, '$1  ]\n$2');
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(\s*const\s+\w+\s*=\s*\[\s*)(\s*export default)/, '$1  ];\n$2');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');
  
  // Fix missing closing parentheses in JSX
  if (fixed.includes('<Link') && !fixed.includes('</Link>') && fixed.includes('export default')) {
    fixed = fixed.replace(/(\s*)(export default)/, '$1  </Link>\n$2');
  }
  
  // Fix incomplete try-catch blocks
  if (fixed.includes('try {') && !fixed.includes('} catch') && !fixed.includes('} finally')) {
    fixed = fixed.replace(/(try\s*\{[^}]*)(\s*export default)/, '$1  } catch (error) {\n    console.error(error);\n  }\n$2');
  }
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+([^;]+);\s*$/gm, 'import $1;');
  
  // Fix missing closing braces in object literals
  if (fixed.includes('{') && !fixed.includes('}') && fixed.includes('export default')) {
    const lines = fixed.split('\n');
    const exportIndex = lines.findIndex(line => line.includes('export default'));
    if (exportIndex > 0) {
      lines.splice(exportIndex, 0, '}');
      fixed = lines.join('\n');
    }
  }
  
  return fixed;
}

// Main function
async function main() {
  try {
    console.log('Starting comprehensive lint error fixing...');
    
    // Get all TypeScript/JavaScript files
    const files = await glob('src/**/*.{ts,tsx,js,jsx}', {
      ignore: ['node_modules/**', '*.test.*', '*.spec.*']
    });
    
    console.log(`Found ${files.length} files to process...`);
    
    let fixedCount = 0;
    let errorCount = 0;
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fixed = fixLintErrors(content, file);
        
        if (content !== fixed) {
          fs.writeFileSync(file, fixed, 'utf8');
          console.log(`Fixed: ${file}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorCount++;
      }
    }
    
    console.log(`\nCompleted: ${fixedCount} files fixed, ${errorCount} errors`);
    
  } catch (error) {
    console.error('Error in main function:', error);
  }
}

main().catch(console.error);