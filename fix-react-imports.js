import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix React imports in a file
function fixReactImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if React is imported but not used
    const hasReactImport = content.includes("import React from \"react\";");
    const usesReact = content.includes("React.") || content.includes("<") || content.includes("JSX");
    
    if (hasReactImport && !usesReact) {
      // Remove the unused React import
      content = content.replace(/import React from "react";\n?/, '');
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused React import in: ${filePath}`);
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
      if (fixReactImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllReactImports(appDir);

console.log(`Fixed ${fixedCount} files with unused React imports`);