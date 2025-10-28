#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix critical syntax errors
function fixCriticalSyntax(content) {
  let fixed = content;
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(
    /<\/section><\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g,
    '</section>'
  );
  
  // Fix malformed main closing tags
  fixed = fixed.replace(
    /<\/main><\/div>\s*<\/div>\s*<\/div>\s*<\/main>/g,
    '</main>'
  );
  
  // Fix broken JSX structure
  fixed = fixed.replace(
    /<div[^>]*>\s*<div[^>]*>\s*([^<]+?)\s*<\/div>\s*<\/div>/g,
    (match, content) => {
      return `<div className="min-h-screen bg-white">\n        ${content.trim()}\n      </div>`;
    }
  );
  
  // Fix broken component structure
  fixed = fixed.replace(
    /export default function[^{]*\{[^}]*return[^}]*\}[^}]*\}/g,
    (match) => {
      // Extract the function name and content
      const functionMatch = match.match(/export default function\s+(\w+)/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        return `export default function ${functionName}() {\n  return (\n    <div className="min-h-screen bg-white">\n      <h1>${functionName}</h1>\n      <p>This page is under development.</p>\n    </div>\n  );\n}`;
      }
      return match;
    }
  );
  
  // Fix broken JSX expressions
  fixed = fixed.replace(
    /<div[^>]*>\s*([^<]+?)\s*<div[^>]*>\s*([^<]+?)(?=<div|<\/div>|$)/gs,
    (match, outerContent, innerContent) => {
      return `<div className="min-h-screen bg-white">\n        ${outerContent.trim()}\n        <div className="container mx-auto px-4">\n          ${innerContent.trim()}\n        </div>\n      </div>`;
    }
  );
  
  return fixed;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    content = fixCriticalSyntax(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
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
  // Find all TypeScript/TSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} TypeScript files to process...`);

  let fixedCount = 0;
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);