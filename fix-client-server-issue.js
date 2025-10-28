import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has both 'use client' and metadata export
    if (content.includes("'use client'") && content.includes('export const metadata')) {
      // Remove the 'use client' directive
      content = content.replace(/'use client';\s*\n/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
            return true;
    }
    
    return false;
  } catch (error) {
        return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  }

main().catch(console.error);