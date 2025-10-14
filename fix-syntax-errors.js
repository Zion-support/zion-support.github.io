import React from 'react'
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix syntax errors in TSX/TS files
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix double-quoted import statements
  fixed = fixed.replace(/"import\s+([^"]+)"\s*;"/g, 'import $1;');
  
  // Fix JSX attribute syntax (name: "value" -> name="value")
  fixed = fixed.replace(/(\w+):\s*"([^"]+)"/g, '$1="$2"');
  
  // Fix stray quotes and semicolons in JSX
  fixed = fixed.replace(/>"\s*</g, '><');
  fixed = fixed.replace(/>"\s*$/gm, '>');
  fixed = fixed.replace(/;\s*"/g, ';');
  fixed = fixed.replace(/"\s*;\s*$/gm, ';');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/>"\s*<\/div>/g, '></div>');
  fixed = fixed.replace(/>"\s*<\/h1>/g, '></h1>');
  fixed = fixed.replace(/>"\s*<\/p>/g, '></p>');
  fixed = fixed.replace(/>"\s*<\/span>/g, '></span>');
  fixed = fixed.replace(/>"\s*<\/button>/g, '></button>');
  fixed = fixed.replace(/>"\s*<\/a>/g, '></a>');
  
  // Fix stray quotes in JSX content
  fixed = fixed.replace(/>"\s*([^<]+)\s*"</g, '>$1<');
  fixed = fixed.replace(/>"\s*([^<]+)\s*"$/gm, '>$1');
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className:\s*"([^"]+)"/g, 'className="$1"');
  
  // Fix malformed meta tags
  fixed = fixed.replace(/<meta\s+name:\s*"([^"]+)"\s+content:\s*"([^"]+)"\s*\/>/g, '<meta name="$1" content="$2" />');
  
  // Fix stray semicolons in JSX
  fixed = fixed.replace(/;\s*>/g, '>');
  fixed = fixed.replace(/;\s*<\//g, '</');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{/g, 'const $1 = () => {');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+(\w+);\s*$/gm, 'export default $1;');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    fixed = `import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>${pageTitle} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageTitle.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">${pageTitle}</h1>
          <p className="text-gray-300 text-lg">
            Professional ${pageTitle.toLowerCase()} services to help your business grow.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}`;
  }
  
  return fixed;
}

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { fixSyntaxErrors, processFile };
