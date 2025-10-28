import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix duplicate imports in a file
function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let fixedLines = [];
    let seenImports = new Set();
    let inImportBlock = false;
    let importBlockEnded = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is an import line
      if (trimmedLine.startsWith('import ')) {
        if (!inImportBlock) {
          inImportBlock = true;
        }
        
        // Create a normalized version of the import for comparison
        const normalizedImport = trimmedLine.replace(/['"]/g, '"');
        
        if (!seenImports.has(normalizedImport)) {
          seenImports.add(normalizedImport);
          fixedLines.push(line);
        }
        // Skip duplicate imports
      } else {
        // If we were in an import block and now we're not, mark it as ended
        if (inImportBlock && !importBlockEnded) {
          importBlockEnded = true;
        }
        fixedLines.push(line);
      }
    }
    
    // Remove multiple default exports
    let finalContent = fixedLines.join('\n');
    const defaultExportRegex = /export default [^;]+;\s*\n\s*export default [^;]+;/g;
    finalContent = finalContent.replace(defaultExportRegex, (match) => {
      const exports = match.split('export default');
      return exports[0] + 'export default' + exports[1];
    });
    
    // Write the fixed content back
    if (content !== finalContent) {
      fs.writeFileSync(filePath, finalContent);
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
  const files = await glob('app/**/*.{ts,tsx}');

  let fixedCount = 0;
  files.forEach(file => {
    if (fixDuplicateImports(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files with duplicate imports`);
}

main().catch(console.error);