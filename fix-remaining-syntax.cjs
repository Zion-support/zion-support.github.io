const fs = require('fs');
const path = require('path');

// Function to fix common syntax issues
function fixSyntax(content) {
  // Fix missing closing braces and parentheses
  const lines = content.split('\n');
  const fixedLines = [];
  let braceCount = 0;
  let parenCount = 0;
  let inFunction = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    fixedLines.push(line);
    
    // Count braces and parentheses
    braceCount += (line.match(/\{/g) || []).length;
    braceCount -= (line.match(/\}/g) || []).length;
    parenCount += (line.match(/\(/g) || []).length;
    parenCount -= (line.match(/\)/g) || []).length;
    
    // Check if we're in a function
    if (line.includes('export default function')) {
      inFunction = true;
    }
    
    // If we're at the end of the file and missing closing braces/parentheses
    if (i === lines.length - 1 && inFunction) {
      // Add missing closing parenthesis for return statement
      if (parenCount > 0) {
        fixedLines.push('  );');
      }
      // Add missing closing brace for function
      if (braceCount > 0) {
        fixedLines.push('}');
      }
    }
  }
  
  return fixedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file needs fixing (has syntax errors)
    if (content.includes('export default function') && !content.trim().endsWith('}')) {
      const fixedContent = fixSyntax(content);
      
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        console.log(`Fixed: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find and process all page files with syntax errors
function processAllPageFiles() {
  const files = [];
  
  // Find all page.tsx files
  function findFiles(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        findFiles(fullPath);
      } else if (stat.isFile() && item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  findFiles('/workspace/app');
  
  console.log(`Found ${files.length} page files to process`);
  
  let processedCount = 0;
  for (const file of files) {
    processFile(file);
    processedCount++;
    
    if (processedCount % 50 === 0) {
      console.log(`Processed ${processedCount} files...`);
    }
  }
  
  console.log(`Completed processing ${processedCount} files`);
}

// Run the script
processAllPageFiles();