import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to remove console logs from a file
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove console.log, console.warn, console.error statements
    const consoleRegex = /console\.(log|warn|error|info|debug)\([^)]*\);?\s*/g;
    const originalContent = content;
    content = content.replace(consoleRegex, '');
    
    // Remove console statements that span multiple lines
    const multiLineConsoleRegex = /console\.(log|warn|error|info|debug)\(\s*[^)]*\s*\);?\s*/gs;
    content = content.replace(multiLineConsoleRegex, '');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Removed console logs from: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all TypeScript and JavaScript files
async function processFiles() {
  const patterns = [
    'src/**/*.ts',
    'src/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.tsx'
  ];
  
  let totalFiles = 0;
  let modifiedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/*.d.ts'
      ]
    });
    
    for (const file of files) {
      totalFiles++;
      if (removeConsoleLogs(file)) {
        modifiedFiles++;
      }
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files modified: ${modifiedFiles}`);
  console.log(`   Console logs removed: ${modifiedFiles > 0 ? 'Yes' : 'No'}`);
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🧹 Removing console logs from production build...\n');
  processFiles();
}

export { removeConsoleLogs, processFiles };