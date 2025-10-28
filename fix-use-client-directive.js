import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix "use client" directive placement
function fixUseClientDirective(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if file has "use client" directive but not at the top
  if (content.includes("'use client'") && !content.startsWith("'use client'")) {
    // Remove the "use client" directive from wherever it is
    content = content.replace(/'use client'\n?/g, '');
    
    // Add it at the very beginning
    content = "'use client'\n" + content;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

// Main function
async function main() {
  
  // Get all page files
  const pageFiles = await glob('app/**/page.tsx');

  
  let fixedCount = 0;

  // Process each file
  pageFiles.forEach(file => {
    if (fixUseClientDirective(file)) {
      fixedCount++;
          }
  });

    }

main().catch(console.error);