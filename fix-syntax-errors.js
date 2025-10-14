#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix concatenated imports
  content = content.replace(/import\s+[^;]+;"import\s+/g, (match) => {
    const imports = match.split('"import');
    return imports[0] + ';\nimport' + imports.slice(1).join('import');
  });

  // Fix JSX attributes with colons instead of equals
  content = content.replace(/className:\s*"/g, 'className="');
  content = content.replace(/name:\s*"/g, 'name="');
  content = content.replace(/content:\s*"/g, 'content="');
  content = content.replace(/href:\s*"/g, 'href="');
  content = content.replace(/src:\s*"/g, 'src="');
  content = content.replace(/alt:\s*"/g, 'alt="');
  content = content.replace(/type:\s*"/g, 'type="');
  content = content.replace(/id:\s*"/g, 'id="');
  content = content.replace(/value:\s*"/g, 'value="');
  content = content.replace(/placeholder:\s*"/g, 'placeholder="');
  content = content.replace(/title:\s*"/g, 'title="');
  content = content.replace(/aria-label:\s*"/g, 'aria-label="');
  content = content.replace(/role:\s*"/g, 'role="');
  content = content.replace(/data-\w+:\s*"/g, (match) => match.replace(':', '="'));

  // Fix malformed quotes and concatenated strings
  content = content.replace(/"\s*"\s*/g, '');
  content = content.replace(/"\s*;\s*"/g, ';\n');
  content = content.replace(/"\s*}\s*"/g, '}\n');
  content = content.replace(/"\s*{\s*"/g, '{\n');
  content = content.replace(/"\s*}\s*;\s*"/g, '};\n');
  content = content.replace(/"\s*return\s*"/g, 'return ');
  content = content.replace(/"\s*const\s*"/g, 'const ');
  content = content.replace(/"\s*function\s*"/g, 'function ');
  content = content.replace(/"\s*export\s*"/g, 'export ');
  content = content.replace(/"\s*import\s*"/g, 'import ');

  // Fix JSX closing tags
  content = content.replace(/"\s*<\s*\/\s*(\w+)\s*>\s*"/g, '</$1>');
  content = content.replace(/"\s*<\s*(\w+)\s*>\s*"/g, '<$1>');

  // Fix function declarations
  content = content.replace(/"\s*const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*"/g, 'const $1 = () => {\n');
  content = content.replace(/"\s*function\s+(\w+)\s*\(\s*\)\s*{\s*"/g, 'function $1() {\n');

  // Fix return statements
  content = content.replace(/"\s*return\s*\(\s*"/g, 'return (\n');
  content = content.replace(/"\s*return\s*{\s*"/g, 'return {\n');

  // Clean up extra quotes and semicolons
  content = content.replace(/;+"/g, ';');
  content = content.replace(/"+;/g, ';');
  content = content.replace(/^"+|"+$/gm, '');
  content = content.replace(/\s*"+\s*/g, ' ');

  // Fix missing closing braces and parentheses
  content = content.replace(/"\s*}\s*$/g, '}');
  content = content.replace(/"\s*\)\s*$/g, ')');

  // Clean up multiple consecutive newlines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  return content;
}

// Function to fix servicesData.ts specifically
function fixServicesData(content) {
  if (content.includes('export default function servicesData()')) {
    return `// servicesData - Basic implementation
export const servicesData = {
  services: [],
  categories: [],
  features: []
};

export default servicesData;`;
  }
  return content;
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.jsx',
    'app/**/*.js'
  ];

  let processedCount = 0;
  let errorCount = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const filePath = path.join(process.cwd(), file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Apply fixes
        content = fixSyntaxErrors(content);
        
        // Special handling for servicesData.ts
        if (file.includes('servicesData.ts')) {
          content = fixServicesData(content);
        }
        
        // Write back the fixed content
        fs.writeFileSync(filePath, content, 'utf8');
        processedCount++;
        
        console.log(`Fixed: ${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorCount++;
      }
    });
  }

  console.log(`\nProcessed ${processedCount} files`);
  if (errorCount > 0) {
    console.log(`Errors: ${errorCount} files`);
  }
}

// Run the fix
processFiles().catch(console.error);