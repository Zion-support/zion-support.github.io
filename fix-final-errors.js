#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final TypeScript errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace("import React from 'react';\n", '');
      modified = true;
    }

    // Remove unused function declarations
    const unusedFunctions = [
      'function AboutLayout()',
      'function MedicalrecordsmanagerPage()',
      'function AianalyticsdashboardPage()',
      'function AichatbotbuilderPage()',
      'function AicontentgeneratorPage()'
    ];

    for (const func of unusedFunctions) {
      if (content.includes(func)) {
        const lines = content.split('\n');
        const newLines = [];
        let skipFunction = false;
        let braceCount = 0;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          if (line.includes(func)) {
            skipFunction = true;
            braceCount = 0;
            continue;
          }
          
          if (skipFunction) {
            if (line.includes('{')) braceCount++;
            if (line.includes('}')) braceCount--;
            if (braceCount === 0) {
              skipFunction = false;
              continue;
            }
            continue;
          }
          
          newLines.push(line);
        }
        
        content = newLines.join('\n');
        modified = true;
      }
    }

    // Fix GlobalErrorBoundary import paths
    if (content.includes("import ErrorBoundary from '../../components/GlobalErrorBoundary'")) {
      content = content.replace(
        "import ErrorBoundary from '../../components/GlobalErrorBoundary'",
        "import ErrorBoundary from '../../../components/GlobalErrorBoundary'"
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files.`);
}

main().catch(console.error);