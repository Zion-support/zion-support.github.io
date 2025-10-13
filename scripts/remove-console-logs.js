import fs from 'fs';
import { glob } from 'glob';
// #!/usr/bin/env node


// Function to remove console.log statements from a file
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log, console.warn, console.error, console.info, console.debug
    const consoleRegex = /console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?\s*/g;
    const originalContent = content;
    content = content.replace(consoleRegex, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
      console.log(`Cleaned console statements from: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript and JavaScript files
const patterns = [
  'app/**/*.{ts,tsx,js,jsx}',
  'components/**/*.{ts,tsx,js,jsx}',
  'utils/**/*.{ts,tsx,js,jsx}',
  'hooks/**/*.{ts,tsx,js,jsx}',
  '*.{ts,tsx,js,jsx}'
];

async function main() {
  let totalFiles = 0;
  let modifiedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
    
    for (const file of files) {
      totalFiles++;
      if (removeConsoleLogs(file)) {
        modifiedFiles++;
      }
    }
  }

  console.log(`\nConsole log removal complete!`);
  console.log(`Total files processed: ${totalFiles}`);
  console.log(`Files modified: ${modifiedFiles}`);
}

main().catch(console.error);