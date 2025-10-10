#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  // Fix missing semicolons and line breaks in function calls
  content = content.replace(/useCallback\(\(\) => \{([^}]+)\}\([^)]+\)\);/g, (match, body, deps) => {
    const cleanBody = body.replace(/;([^;]*?)([a-zA-Z])/g, ';\n    $2');
    return `useCallback(() => {\n    ${cleanBody.trim()}\n  }, [${deps}]);`;
  });
  
  // Fix missing semicolons after statements
  content = content.replace(/([^;])\}window\./g, '$1;\n    window.');
  content = content.replace(/([^;])\}document\./g, '$1;\n    document.');
  
  // Fix missing line breaks in object properties
  content = content.replace(/([^,}])\s*,\s*([a-zA-Z])/g, '$1,\n    $2');
  
  // Fix missing spaces in JSX attributes
  content = content.replace(/className="([^"]*)"([a-zA-Z])/g, 'className="$1" $2');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>([^<]*?)<>/g, '<>$1</>');
  
  // Fix missing semicolons in useEffect
  content = content.replace(/useEffect\(\(\) => \{([^}]+)\}\[\]\);/g, (match, body) => {
    const cleanBody = body.replace(/;([^;]*?)([a-zA-Z])/g, ';\n    $2');
    return `useEffect(() => {\n    ${cleanBody.trim()}\n  }, []);`;
  });
  
  // Fix missing semicolons in object literals
  content = content.replace(/([^,}])\s*,\s*([a-zA-Z])/g, '$1,\n    $2');
  
  // Fix missing line breaks in function calls
  content = content.replace(/([^;])\}window\./g, '$1;\n    window.');
  content = content.replace(/([^;])\}document\./g, '$1;\n    document.');
  
  return content;
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let processedFiles = 0;
  let errorFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      try {
        const filePath = path.join(process.cwd(), file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        const originalContent = content;
        
        // Apply fixes
        content = fixSyntaxErrors(content);
        
        // Only write if content changed
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${file}`);
          processedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${processedFiles} files`);
  if (errorFiles > 0) {
    console.log(`Errors in ${errorFiles} files`);
  }
}

// Run the script
processFiles().catch(console.error);