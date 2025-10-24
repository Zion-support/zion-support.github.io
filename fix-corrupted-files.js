const fs = require('fs');
const path = require('path');

// Function to clean corrupted file content
function cleanFileContent(content, filePath) {
  let cleaned = content;
  
  // Remove corrupted import statements with file paths
  cleaned = cleaned.replace(/import\s+[^;]*['"][^'"]*['"][^;]*;/g, '');
  cleaned = cleaned.replace(/from\s+[^;]*['"][^'"]*['"][^;]*;/g, '');
  
  // Remove lines that contain file paths as strings
  cleaned = cleaned.split('\n').filter(line => {
    const trimmed = line.trim();
    // Skip lines that are just file paths or contain file paths as strings
    if (trimmed.includes("'") && trimmed.includes('.tsx') || 
        trimmed.includes('"') && trimmed.includes('.tsx') ||
        trimmed.includes("'") && trimmed.includes('.ts') ||
        trimmed.includes('"') && trimmed.includes('.ts')) {
      return false;
    }
    return true;
  }).join('\n');
  
  // Clean up malformed type definitions
  cleaned = cleaned.replace(/:\s*[^;]*['"][^'"]*['"][^;]*;/g, ': string;');
  cleaned = cleaned.replace(/:\s*[^;]*['"][^'"]*['"][^;]*}/g, ': string}');
  
  // Clean up malformed interface properties
  cleaned = cleaned.replace(/^\s*[a-zA-Z_][a-zA-Z0-9_]*:\s*[^;]*['"][^'"]*['"][^;]*;?\s*$/gm, '');
  
  // Remove empty lines and clean up spacing
  cleaned = cleaned.replace(/\n\s*\n\s*\n/g, '\n\n');
  cleaned = cleaned.replace(/^\s*\n/gm, '');
  
  return cleaned;
}

// Function to fix specific file types
function fixSpecificFile(content, filePath) {
  let fixed = content;
  
  if (filePath.endsWith('.tsx')) {
    // Fix React component files
    if (!fixed.includes("import React")) {
      fixed = "import React from 'react';\n" + fixed;
    }
    
    // Fix common React imports
    if (fixed.includes('Head } from') && !fixed.includes("import { Head } from 'next/head'")) {
      fixed = fixed.replace(/Head \} from[^;]*;?/g, "import { Head } from 'next/head';");
    }
    
    if (fixed.includes('Link } from') && !fixed.includes("import { Link } from 'next/link'")) {
      fixed = fixed.replace(/Link \} from[^;]*;?/g, "import { Link } from 'next/link';");
    }
    
    // Fix component structure
    if (fixed.includes('const ') && fixed.includes('= (') && !fixed.includes('export default')) {
      const componentName = fixed.match(/const\s+([A-Z][a-zA-Z0-9]*)/)?.[1];
      if (componentName) {
        fixed += `\n\nexport default ${componentName};`;
      }
    }
  }
  
  if (filePath.endsWith('.ts')) {
    // Fix TypeScript files
    if (fixed.includes('interface ') && !fixed.includes('export interface')) {
      fixed = fixed.replace(/interface\s+/g, 'export interface ');
    }
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let cleaned = cleanFileContent(content, filePath);
    cleaned = fixSpecificFile(cleaned, filePath);
    
    // Only write if content changed significantly
    if (cleaned !== content && cleaned.trim().length > 0) {
      fs.writeFileSync(filePath, cleaned);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all TypeScript/TSX files
function findTsFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting file cleanup...');

const appDir = path.join(__dirname, 'app');
const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(__dirname, 'components');

let totalFixed = 0;

// Process app directory
if (fs.existsSync(appDir)) {
  const appFiles = findTsFiles(appDir);
  console.log(`Found ${appFiles.length} files in app directory`);
  
  for (const file of appFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

// Process src directory
if (fs.existsSync(srcDir)) {
  const srcFiles = findTsFiles(srcDir);
  console.log(`Found ${srcFiles.length} files in src directory`);
  
  for (const file of srcFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

// Process components directory
if (fs.existsSync(componentsDir)) {
  const componentFiles = findTsFiles(componentsDir);
  console.log(`Found ${componentFiles.length} files in components directory`);
  
  for (const file of componentFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

console.log(`\nCleanup complete! Fixed ${totalFixed} files.`);