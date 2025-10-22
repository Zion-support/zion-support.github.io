#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix duplicate description issues
function fixDuplicateDescriptions(content) {
  let fixed = content;
  
  // Fix malformed features array with duplicate content - more comprehensive patterns
  fixed = fixed.replace(/\s*description:\s*'[^']*?'\s*}\s*}\s*];/g, '}\n  ];');
  fixed = fixed.replace(/\s*description:\s*'[^']*?'\s*}\s*}\s*];/g, '}\n  ];');
  fixed = fixed.replace(/\s*description:\s*'[^']*?'\s*}\s*}\s*];/g, '}\n  ];');
  fixed = fixed.replace(/\s*description:\s*'[^']*?'\s*}\s*}\s*];/g, '}\n  ];');
  fixed = fixed.replace(/\s*description:\s*'[^']*?'\s*}\s*}\s*];/g, '}\n  ];');
  
  return fixed;
}

// Main function to process all files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process`);
  
  for (const file of files) {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');
      const fixedContent = fixDuplicateDescriptions(originalContent);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log('Duplicate description fixing completed');
}

main().catch(console.error);