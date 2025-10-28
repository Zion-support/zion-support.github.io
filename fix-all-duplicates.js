import fs from 'fs';
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
    let inImportBlock = true;
    let foundExportDefault = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is an import line
      if (trimmedLine.startsWith('import ')) {
        if (seenImports.has(trimmedLine)) {
          // Skip duplicate import
          modified = true;
          continue;
        }
        seenImports.add(trimmedLine);
        newLines.push(line);
      }
      // Check if this is an export default line
      else if (trimmedLine.startsWith('export default ')) {
        if (foundExportDefault) {
          // Skip duplicate export default
          modified = true;
          continue;
        }
        foundExportDefault = true;
        newLines.push(line);
      }
      // Check if we're leaving the import block (empty line or non-import)
      else if (trimmedLine === '' && inImportBlock) {
        newLines.push(line);
      }
      else if (trimmedLine !== '' && !trimmedLine.startsWith('import ') && !trimmedLine.startsWith('export ')) {
        inImportBlock = false;
        newLines.push(line);
      }
      else {
        newLines.push(line);
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