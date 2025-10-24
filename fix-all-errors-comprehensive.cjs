#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '');
}

// Function to fix common JSX parsing errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
  fixed = fixed.replace(/<section([^>]*)>\s*$/gm, '<section$1></section>');
  fixed = fixed.replace(/<Link([^>]*)>\s*$/gm, '<Link$1></Link>');
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}])\n(\s*)(export|import|const|let|var|function|class)/g, '$1;\n$2$3');
  
  // Fix missing commas in objects
  fixed = fixed.replace(/([^,}])\n(\s*)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n$2$3');
  
  // Fix missing closing braces
  fixed = fixed.replace(/([^}])\n(\s*)(export|import|const|let|var|function|class)/g, '$1}\n$2$3');
  
  // Fix empty interfaces
  fixed = fixed.replace(/interface\s+(\w+)\s*{\s*}/g, 'interface $1 {\n  [key: string]: any;\n}');
  
  return fixed;
}

// Function to fix import paths
function fixImportPaths(content) {
  return content
    .replace(/from\s+['"]@\/components\/Footer['"]/g, "from '@/components/Footer'")
    .replace(/from\s+['"]@\/components\/Header['"]/g, "from '@/components/Header'")
    .replace(/from\s+['"]@\/components\/Navigation['"]/g, "from '@/components/Navigation'");
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      content = fixMergeConflicts(content);
      modified = true;
    }
    
    // Fix JSX errors
    const originalContent = content;
    content = fixJSXErrors(content);
    if (content !== originalContent) {
      modified = true;
    }
    
    // Fix import paths
    const beforeImportFix = content;
    content = fixImportPaths(content);
    if (content !== beforeImportFix) {
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git directories
        if (item === 'node_modules' || item === '.git') {
          continue;
        }
        processedCount += processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting comprehensive error fixing...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with fixes.`);
console.log('Error fixing completed!');