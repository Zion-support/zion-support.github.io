const fs = require('fs');
const path = require('path');

// Function to fix common JSX errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix unclosed JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/^\s*<\/>/gm, '</>');
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<(\w+)\s*>\s*<\/\1>\s*$/gm, '');
  
  // Fix missing closing tags for common elements
  fixed = fixed.replace(/<div[^>]*>\s*$/gm, (match) => {
    if (!match.includes('</div>')) {
      return match + '\n        </div>';
    }
    return match;
  });
  
  // Fix merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n/g, '');
  
  // Fix common syntax errors
  fixed = fixed.replace(/\*\s*100\s+0\)/g, '* 1000)');
  fixed = fixed.replace(/,\s*\)/g, ')');
  fixed = fixed.replace(/,\s*}/g, '}');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

// Process the app directory
console.log('Fixing JSX errors...');
processDirectory('/workspace/app');
processDirectory('/workspace/src');
console.log('JSX error fixing complete!');