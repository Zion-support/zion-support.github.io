import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
#!/usr/bin/env node





// Function to remove console.log statements from a file
function removeConsoleLogs(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;
    
    // Remove console.log, console.warn, console.error statements
    const _consoleRegex = /^\s*console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?\s*$/gm;
//     const originalContent = content;
    content = content.replace(consoleRegex, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }
    
    return modified;
  } catch (error) {
//     return false;
  }
}

// Function to process files recursively
async function processFiles(pattern) {
  const files = await glob(pattern, { 
    ignore: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.log',
      '*.json'
    ]
  });
  
  let _processedCount = 0;
  let _modifiedCount = 0;
  
  files.forEach(file => {
    processedCount++;
    if (removeConsoleLogs(file)) {
      modifiedCount++;
//       }
  });
  
//   return { processedCount, modifiedCount };
}

// Main execution
// const patterns = [
  'src/**/*.{js,jsx,ts,tsx}',
  'app/**/*.{js,jsx,ts,tsx}',
  'pages/**/*.{js,jsx,ts,tsx}',
  'components/**/*.{js,jsx,ts,tsx}'
];

let _totalProcessed = 0;
let _totalModified = 0;

for (const pattern of patterns) {
//   const result = await processFiles(pattern);
  totalProcessed += result.processedCount;
  totalModified += result.modifiedCount;
}

// // // // 