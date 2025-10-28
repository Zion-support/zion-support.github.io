import fs from 'fs';
import { glob } from 'glob';

// Function to fix ErrorBoundary imports in a file
function fixErrorBoundaryImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses ErrorBoundary but doesn't import it
    if (content.includes('<ErrorBoundary>') && !content.includes('import ErrorBoundary')) {
      console.log(`Fixing ErrorBoundary import in: ${filePath}`);
      
      // Determine the correct import path based on file location
      let importPath = '../components/ErrorBoundary';
      if (filePath.includes('/micro-saas-services/')) {
        importPath = '../../components/ErrorBoundary';
      } else if (filePath.includes('/it-services/')) {
        importPath = '../../components/ErrorBoundary';
      } else if (filePath.includes('/ai-services/')) {
        importPath = '../../components/ErrorBoundary';
      }
      
      // Add the import at the top after existing imports
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find the last import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i + 1;
        }
      }
      
      // Insert the ErrorBoundary import
      lines.splice(insertIndex, 0, `import ErrorBoundary from '${importPath}';`);
      
      const fixedContent = lines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed ErrorBoundary import in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting ErrorBoundary import fixes...');
  
  // Find all TypeScript and TSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFiles = 0;
  let processedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    totalFiles += files.length;
    
    for (const file of files) {
      if (fixErrorBoundaryImports(file)) {
        processedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${processedFiles} files with missing ErrorBoundary imports out of ${totalFiles} total files.`);
  console.log('ErrorBoundary import fixes complete!');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { fixErrorBoundaryImports };