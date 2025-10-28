import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to remove 'use client' directive from page files
function removeClientDirective(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove 'use client' directive
    content = content.replace(/^'use client';\s*\n?/gm, '');
    
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
    if (removeClientDirective(fullPath)) {
      fixedCount++;
    }
  });

  }

main().catch(console.error);