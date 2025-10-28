import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix duplicate imports and exports in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    const seenExports = new Set();
    let inImportBlock = false;
    let inExportBlock = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check if this is an import line
      if (line.startsWith('import ')) {
        if (seenImports.has(line)) {
          // Skip duplicate import
          modified = true;
          continue;
        }
        seenImports.add(line);
        inImportBlock = true;
        newLines.push(lines[i]);
      }
      // Check if this is an export line
      else if (line.startsWith('export ')) {
        if (line.includes('export default')) {
          if (seenExports.has('default')) {
            // Skip duplicate default export
            modified = true;
            continue;
          }
          seenExports.add('default');
        } else {
          const exportKey = line.replace('export ', '').split(' ')[0];
          if (seenExports.has(exportKey)) {
            // Skip duplicate named export
            modified = true;
            continue;
          }
          seenExports.add(exportKey);
        }
        inExportBlock = true;
        newLines.push(lines[i]);
      }
      // Check if we're leaving import/export blocks
      else if (line === '' && (inImportBlock || inExportBlock)) {
        inImportBlock = false;
        inExportBlock = false;
        newLines.push(lines[i]);
      }
      else {
        inImportBlock = false;
        inExportBlock = false;
        newLines.push(lines[i]);
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process files
async function main() {
  // Find all TypeScript/JavaScript files in the app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}');

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);