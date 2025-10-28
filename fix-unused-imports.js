import fs from 'fs';
import { glob } from 'glob';

// Function to remove unused imports from a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    const usedImports = new Set();
    
    // First pass: find all used imports by scanning the content
    const contentText = content.toLowerCase();
    
    // Check for common component usage patterns
    const componentPatterns = [
      'navigation',
      'footer',
      'errorboundary',
      'error boundary'
    ];
    
    for (const pattern of componentPatterns) {
      if (contentText.includes(pattern)) {
        usedImports.add(pattern);
      }
    }
    
    // Second pass: filter imports
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is an import line
      if (trimmedLine.startsWith('import ')) {
        // Extract the import name
        const importMatch = trimmedLine.match(/import\s+(\w+)\s+from/);
        if (importMatch) {
          const importName = importMatch[1].toLowerCase();
          
          // Check if this import is actually used
          if (usedImports.has(importName) || 
              contentText.includes(`<${importName}`) || 
              contentText.includes(`<${importName} `) ||
              contentText.includes(`<${importName}>`) ||
              contentText.includes(`</${importName}>`)) {
            newLines.push(line);
          } else {
            // Remove unused import
            modified = true;
            console.log(`Removing unused import: ${importName} from ${filePath}`);
          }
        } else {
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
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