import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix metadata export issues
function fixMetadataErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has both 'use client' and metadata export
    if (content.includes("'use client'") && content.includes('export const metadata')) {
      // Remove 'use client' directive
      content = content.replace(/'use client';\n\n?/g, '');
      modified = true;
      console.log(`Removed 'use client' from ${filePath} to allow metadata export`);
    }

    // Also fix any remaining Head usage
    if (content.includes('<Head>')) {
      content = content.replace(/<Head>[\s\S]*?<\/Head>/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') && file.includes('page.tsx')) {
      if (fixMetadataErrors(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Run the fix
console.log('Starting metadata error fixes...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files`);