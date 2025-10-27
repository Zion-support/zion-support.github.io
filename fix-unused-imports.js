import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace("import React from 'react';\n", '');
      modified = true;
    }

    // Remove unused Link imports from next/link
    if (content.includes("import Link from 'next/link';") && !content.includes('<Link')) {
      content = content.replace("import Link from 'next/link';\n", '');
      modified = true;
    }

    // Remove unused ArrowRight imports from lucide-react
    if (content.includes("import { ArrowRight } from 'lucide-react';") && !content.includes('<ArrowRight')) {
      content = content.replace("import { ArrowRight } from 'lucide-react';\n", '');
      modified = true;
    }

    // Remove unused icon imports from lucide-react (for specific files)
    const iconImports = [
      'Star', 'Clock', 'Zap', 'Shield', 'Globe', 'Database', 'Users', 'Settings', 'Check'
    ];
    
    iconImports.forEach(icon => {
      const importRegex = new RegExp(`import \\{ ${icon} \\} from 'lucide-react';\\n`, 'g');
      if (content.match(importRegex) && !content.includes(`<${icon}`)) {
        content = content.replace(importRegex, '');
        modified = true;
      }
    });

    // Clean up multiple empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
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
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixUnusedImports(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed unused imports in ${fixedCount} files.`);
}

main().catch(console.error);