<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
// Function to fix any types
function fixAnyTypes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace Record<string, any> with Record<string, unknown>
    const recordAnyRegex = /Record<string, any>/g;
    if (recordAnyRegex.test(content)) {
      content = content.replace(recordAnyRegex, 'Record<string, unknown>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed any types in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Get all page.tsx files
function getAllPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const pageFiles = getAllPageFiles(appDir);

console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixAnyTypes(file)) {
    fixedCount++;
  }
}

console.log(`Fixed any types in ${fixedCount} files`);
=======
#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { glob } from "glob";

console.log("🔧 Fixing any types in page components...");

async function fixAnyTypes() {
  // Find all page.tsx files
  const pageFiles = await glob("app/**/page.tsx");

  let fixedFiles = 0;

  for (const filePath of pageFiles) {
    try {
      let content = fs.readFileSync(filePath, "utf8");
      let modified = false;

      // Fix common any type issues
      if (content.includes("any")) {
        // Replace any with proper types
        content = content.replace(/:\s*any\b/g, ": unknown");
        content = content.replace(/as\s+any\b/g, "as unknown");
        content = content.replace(/Array<any>/g, "Array<unknown>");
        content = content.replace(/Record<string,\s*any>/g, "Record<string, unknown>");
        content = content.replace(/Promise<any>/g, "Promise<unknown>");
        
        // Fix specific patterns
        content = content.replace(/const\s+(\w+)\s*:\s*any\s*=/g, "const $1: unknown =");
        content = content.replace(/let\s+(\w+)\s*:\s*any\s*=/g, "let $1: unknown =");
        content = content.replace(/var\s+(\w+)\s*:\s*any\s*=/g, "var $1: unknown =");
        
        // Fix function parameters
        content = content.replace(/\(\s*(\w+)\s*:\s*any\s*\)/g, "($1: unknown)");
        content = content.replace(/\(\s*(\w+)\s*:\s*any\s*,\s*(\w+)\s*:\s*any\s*\)/g, "($1: unknown, $2: unknown)");
        
        // Fix object properties
        content = content.replace(/(\w+)\s*:\s*any\s*,/g, "$1: unknown,");
        content = content.replace(/(\w+)\s*:\s*any\s*}/g, "$1: unknown}");
        
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, content, "utf8");
        fixedFiles++;
        console.log(`✅ Fixed types in: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`\n🎉 Fixed types in ${fixedFiles} files`);
}

fixAnyTypes().catch(console.error);
>>>>>>> b61118d6144fdc99f32acbc26a83c9d4d1af6611
=======
// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix any types in function parameters
  if (content.includes('props: any')) {
    content = content.replace(/props: any/g, 'props: Record<string, unknown>');
    modified = true;
  }

  // Fix any types in function parameters with different spacing
  if (content.includes('props:any')) {
    content = content.replace(/props:any/g, 'props: Record<string, unknown>');
    modified = true;
  }

  // Fix any types in other contexts
  if (content.includes(': any')) {
    content = content.replace(/: any/g, ': unknown');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed any types: ${file}`);
  }
});

console.log('Any type fixes completed');
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
