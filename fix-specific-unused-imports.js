import fs from 'fs';
import { glob } from 'glob';

// Function to remove specific unused imports from a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is an import line for specific components
      if (trimmedLine.startsWith('import ') && 
          (trimmedLine.includes('ErrorBoundary') || 
           trimmedLine.includes('Navigation') || 
           trimmedLine.includes('Footer'))) {
        
        // Check if the component is actually used in the file
        const componentName = trimmedLine.match(/import\s+(\w+)/)?.[1];
        if (componentName) {
          // Check if the component is used in JSX
          const isUsed = content.includes(`<${componentName}`) || 
                        content.includes(`<${componentName} `) ||
                        content.includes(`<${componentName}>`) ||
                        content.includes(`</${componentName}>`);
          
          if (!isUsed) {
            // Remove unused import
            modified = true;
            console.log(`Removing unused import: ${componentName} from ${filePath}`);
            continue;
          }
        }
      }
      
      newLines.push(line);
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