#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix unterminated string literals by adding quotes
  content = content.replace(/([^\\])"([^"]*?)(?=\n|$)/g, '$1"$2"');
  
  // Fix missing closing tags
  content = content.replace(/<div([^>]*)>(?!.*<\/div>)/g, (match, attrs) => {
    return match + '</div>';
  });
  
  // Fix missing semicolons
  content = content.replace(/([^;}])\n(\s*[a-zA-Z_$])/g, '$1;\n$2');
  
  // Fix unterminated template literals
  content = content.replace(/`([^`]*?)(?=\n|$)/g, '`$1`');
  
  // Fix missing commas in object literals
  content = content.replace(/([^,}])\n(\s*[a-zA-Z_$])/g, '$1,\n$2');
  
  // Fix missing closing parentheses
  content = content.replace(/\(([^)]*?)(?=\n|$)/g, '($1)');
  
  // Fix missing closing braces
  content = content.replace(/\{([^}]*?)(?=\n|$)/g, '{$1}');
  
  return content;
}

// Function to fix specific component patterns
function fixComponent(content) {
  // Fix broken component structure
  if (content.includes('const') && content.includes('React.FC') && !content.includes('export default')) {
    content = content.replace(/(const\s+\w+:\s*React\.FC[^}]+)\}/, '$1};\n\nexport default $1;');
  }
  
  // Fix missing return statements
  if (content.includes('React.FC') && !content.includes('return')) {
    content = content.replace(/(const\s+\w+:\s*React\.FC[^}]+)\}/, '$1  return (\n    <div>\n      <h1>Component</h1>\n    </div>\n  );\n}');
  }
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file is too corrupted
    if (content.length < 50) {
      console.log(`Skipping ${filePath} - too short`);
      return;
    }
    
    const originalContent = content;
    
    // Apply fixes
    content = fixSyntaxErrors(content);
    content = fixComponent(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;
for (const file of files) {
  try {
    processFile(file);
    fixedCount++;
  } catch (error) {
    console.log(`Failed to process ${file}: ${error.message}`);
  }
}

console.log(`Processed ${fixedCount} files`);
console.log('Syntax error fixes completed!');