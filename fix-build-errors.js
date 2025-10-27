import fs from 'fs';
import path from 'path';

// Function to fix map function syntax errors
function fixMapSyntax(content) {
  // Fix malformed map functions like {array.map((item, index) => ()}
  let fixedContent = content.replace(/\.map\(\([^)]+\)\s*=>\s*\(\)\s*\n/g, (match) => {
    return match.replace('()', '(');
  });
  
  return fixedContent;
}

// Function to fix 'use client' directive placement
function fixUseClientDirective(content) {
  // Move 'use client' to the top if it exists
  if (content.includes("'use client'")) {
    const lines = content.split('\n');
    const useClientIndex = lines.findIndex(line => line.includes("'use client'"));
    
    if (useClientIndex > 0) {
      // Remove 'use client' from its current position
      lines.splice(useClientIndex, 1);
      // Add it at the top
      lines.unshift("'use client'");
      return lines.join('\n');
    }
  }
  
  return content;
}

// Function to fix next.config.js
function fixNextConfig() {
  const configPath = './next.config.js';
  try {
    let content = fs.readFileSync(configPath, 'utf8');
    
    // Remove the invalid experimental option
    content = content.replace(/missingSuspenseWithCSRBailout:\s*true,?\s*/g, '');
    
    fs.writeFileSync(configPath, content, 'utf8');
    console.log('Fixed next.config.js');
    return true;
  } catch (error) {
    console.error('Error fixing next.config.js:', error.message);
    return false;
  }
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    content = fixMapSyntax(content);
    content = fixUseClientDirective(content);
    
    // Only write if content changed
    if (content !== originalContent) {
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

// Function to recursively find and process all .tsx files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Main execution
console.log('Starting to fix build errors...');

// Fix next.config.js first
fixNextConfig();

// Fix TypeScript/JSX files
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files`);