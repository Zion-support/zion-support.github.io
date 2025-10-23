const fs = require('fs');
const path = require('path');

// Function to fix remaining JSX issues
function fixRemainingIssues(content) {
  let fixedContent = content;
  
  // Fix malformed div tags like <div$1>
  fixedContent = fixedContent.replace(/<div\$1>/g, '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">');
  
  // Fix missing array brackets in JSX
  fixedContent = fixedContent.replace(
    /<div[^>]*>\s*\{\s*\{[^}]*\}/g,
    (match) => {
      return match.replace(/\{\s*\{/, '{\n              [\n                {');
    }
  );
  
  // Fix missing closing brackets for arrays
  fixedContent = fixedContent.replace(
    /\}\s*\]\.map\(/g,
    '}\n              ].map('
  );
  
  return fixedContent;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingIssues(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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
  let filesProcessed = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          filesProcessed++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return filesProcessed;
}

// Main execution
console.log('Starting to fix remaining JSX issues...');
const filesProcessed = processDirectory('/workspace');
console.log(`Processed ${filesProcessed} files.`);