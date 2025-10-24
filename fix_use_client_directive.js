const fs = require('fs');
const path = require('path');

// Function to fix "use client" directive placement
function fixUseClientDirective(content) {
  const lines = content.split('\n');
  let useClientLine = -1;
  let firstImportLine = -1;
  
  // Find "use client" line and first import line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === "'use client'" || line === '"use client"') {
      useClientLine = i;
    }
    if (line.startsWith('import ') && firstImportLine === -1) {
      firstImportLine = i;
    }
  }
  
  // If "use client" exists but is not at the top
  if (useClientLine > 0) {
    const useClientDirective = lines[useClientLine];
    
    // Remove the "use client" line from its current position
    lines.splice(useClientLine, 1);
    
    // Insert it at the very beginning
    lines.unshift(useClientDirective);
    
    return lines.join('\n');
  }
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes("'use client'") || content.includes('"use client"')) {
      console.log(`Processing: ${filePath}`);
      const fixed = fixUseClientDirective(content);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        return true;
      }
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
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        if (/\.(tsx?|jsx?)$/.test(item)) {
          if (processFile(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting "use client" directive fix...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with "use client" directive issues.`);

if (fs.existsSync('./src')) {
  const srcProcessedCount = processDirectory('./src');
  console.log(`Processed ${srcProcessedCount} files in src directory.`);
}

console.log('"use client" directive fix completed!');
