import fs from 'fs';
import { glob } from 'glob';

// Function to fix ErrorBoundary import paths in a file
function fixErrorBoundaryPaths(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has ErrorBoundary import with wrong path
    if (content.includes('import ErrorBoundary from')) {
      let correctPath = '../components/ErrorBoundary';
      
      // Determine correct path based on file location
      if (filePath.includes('/micro-saas/')) {
        correctPath = '../../components/ErrorBoundary';
      } else if (filePath.includes('/micro-saas-services/')) {
        correctPath = '../../components/ErrorBoundary';
      } else if (filePath.includes('/it-services/')) {
        correctPath = '../../components/ErrorBoundary';
      } else if (filePath.includes('/ai-services/')) {
        correctPath = '../../components/ErrorBoundary';
      }
      
      // Replace any ErrorBoundary import with the correct path
      const updatedContent = content.replace(
        /import ErrorBoundary from ['"][^'"]*['"];/g,
        `import ErrorBoundary from '${correctPath}';`
      );
      
      if (updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`✓ Fixed ErrorBoundary path in: ${filePath}`);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting ErrorBoundary path fixes...');
  
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
      if (fixErrorBoundaryPaths(file)) {
        processedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${processedFiles} files with incorrect ErrorBoundary paths out of ${totalFiles} total files.`);
  console.log('ErrorBoundary path fixes complete!');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { fixErrorBoundaryPaths };