import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to remove console.log statements from a file
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log statements (but keep console.error and console.warn for debugging)
    const consoleLogRegex = /^\s*console\.log\([^)]*\);\s*$/gm;
    const consoleLogMultiLineRegex = /^\s*console\.log\(\s*[^)]*\s*\);\s*$/gm;
    
//     const originalContent = content;
    content = content.replace(consoleLogRegex, '');
    content = content.replace(consoleLogMultiLineRegex, '');
    
    if (content !== originalContent) {
      modified = true;
      fs.writeFileSync(filePath, content, 'utf8');
//       console.log(`Cleaned console.log statements from: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
//     console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all TypeScript and JavaScript files
async function processFiles() {
  const patterns = [
    'src/**/*.{ts,tsx,js,jsx}',
    'app/**/*.{ts,tsx,js,jsx}'
  ];
  
  let totalFiles = 0;
  let modifiedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/*.test.*',
        '**/*.spec.*'
      ]
    });
    
    files.forEach(file => {
      totalFiles++;
      if (removeConsoleLogs(file)) {
        modifiedFiles++;
      }
    });
  });
  
//   console.log(`\nCleanup complete!`);
//   console.log(`Total files processed: ${totalFiles}`);
//   console.log(`Files modified: ${modifiedFiles}`);
}

// Run the cleanup
// processFiles().catch(console.error);