import fs from 'fs';
import { glob } from 'glob';

// Function to fix specific duplicate issues in page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate imports at the beginning
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    let inImportBlock = true;
    
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
    
    // Fix duplicate default exports at the end
    const finalContent = newLines.join('\n');
    const exportDefaultRegex = /export default [^;]+;\s*\n\s*export default [^;]+;/g;
    const singleExportDefault = finalContent.replace(exportDefaultRegex, (match) => {
      const lines = match.split('\n');
      return lines[0]; // Keep only the first export default
    });
    
    if (finalContent !== singleExportDefault) {
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, singleExportDefault);
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
  // Find all page files that likely have the duplicate issues
  const files = await glob('app/**/page.tsx');

  console.log(`Found ${files.length} page files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixPageFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);