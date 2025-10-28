import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix import paths in a file
function fixImportPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Calculate the correct relative path based on file depth
    const relativePath = path.relative(path.dirname(filePath), '/workspace/app/components');
        const footerPath = path.join(relativePath, 'Footer').replace(/\\/g, '/');
    
    // Fix ErrorBoundary import
    content = content.replace(
      //g,
      ``
    );
    
    // Fix Footer import
    content = content.replace(
      //g,
      ``
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
        return true;
  } catch (error) {
        return false;
  }
}

// Main execution
async function main() {
  // Get all page.tsx files
  const files = await glob('app/**/page.tsx', { cwd: '/workspace' });

  
  let fixedCount = 0;
  files.forEach(file => {
    const fullPath = path.join('/workspace', file);
    if (fixImportPaths(fullPath)) {
      fixedCount++;
    }
  });

  }

main().catch(console.error);