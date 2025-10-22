import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to add React import to a file that needs it
function addReactImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses React but doesn't have React import
    const usesReact = content.includes("React.") || content.includes("React.FC");
    const hasReactImport = content.includes("import React");
    
    if (usesReact && !hasReactImport) {
      // Add React import at the beginning
      content = "import React from 'react';\n" + content;
      fs.writeFileSync(filePath, content);
      console.log(`Added React import to: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function fixAllReactImports(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllReactImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (addReactImport(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllReactImports(appDir);

console.log(`Added React imports to ${fixedCount} files`);