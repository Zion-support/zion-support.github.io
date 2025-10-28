import fs from 'fs';
import { glob } from 'glob';

// Function to fix duplicate imports in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    let inImportBlock = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is an import line
      if (trimmedLine.startsWith('import ')) {
        // Normalize the import line for comparison (remove extra spaces, standardize quotes)
        const normalizedImport = trimmedLine.replace(/\s+/g, ' ').replace(/'/g, '"');
        if (seenImports.has(normalizedImport)) {
          // Skip duplicate import
          modified = true;
          continue;
        }
        seenImports.add(normalizedImport);
        newLines.push(line);
      }
      // Check if we're leaving the import block (empty line or non-import)
      else if (trimmedLine === '' && inImportBlock) {
        newLines.push(line);
      }
      else if (trimmedLine !== '' && !trimmedLine.startsWith('import ')) {
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
  // Find all page files
  const files = await glob('app/**/page.tsx');

  console.log(`Found ${files.length} page files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);