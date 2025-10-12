const fs = require('fs');
const path = require('path');

// Function to fix common syntax issues in page files
function fixPageSyntax(content) {
  // Fix duplicate function declarations and misplaced imports
  const lines = content.split('\n');
  const fixedLines = [];
  let imports = [];
  let inFunction = false;
  let functionName = '';
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Collect import statements
    if (line.startsWith('import ')) {
      imports.push(lines[i]);
      continue;
    }
    
    // Skip duplicate function declarations
    if (line.startsWith('export default function') && inFunction) {
      continue;
    }
    
    // Start of function
    if (line.startsWith('export default function')) {
      inFunction = true;
      functionName = line.match(/export default function (\w+)/)?.[1] || 'Page';
      fixedLines.push(lines[i]);
      continue;
    }
    
    // Count braces to track function end
    if (inFunction) {
      braceCount += (line.match(/\{/g) || []).length;
      braceCount -= (line.match(/\}/g) || []).length;
      
      if (braceCount === 0 && line === '}') {
        inFunction = false;
        fixedLines.push(lines[i]);
        continue;
      }
    }
    
    fixedLines.push(lines[i]);
  }
  
  // Reconstruct the file with imports at the top
  let result = imports.join('\n') + '\n\n';
  
  // Add the function content
  const functionStart = fixedLines.findIndex(line => line.trim().startsWith('export default function'));
  if (functionStart !== -1) {
    result += fixedLines.slice(functionStart).join('\n');
  }
  
  return result;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file needs fixing
    if (content.includes('export default function') && content.includes('import ')) {
      const fixedContent = fixPageSyntax(content);
      
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        console.log(`Fixed: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find and process all page files
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