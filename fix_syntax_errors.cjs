const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix extra commas in object literals
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/,\s*]/g, ']');
  
  // Fix malformed JSX
  content = content.replace(/,\s*-\s*>\s*([^<]*?)\s*`\s*-\s*>\s*/g, '');
  content = content.replace(/,\s*-\s*>\s*([^<]*?)\s*`\s*-\s*>\s*/g, '');
  
  // Fix unterminated strings
  content = content.replace(/`\s*}'`/g, '`}');
  
  // Fix extra semicolons in JSX
  content = content.replace(/;\s*}/g, '}');
  
  // Fix malformed return statements
  content = content.replace(/return\s*\(\s*<[^>]*>\s*\)\s*<\/[^>]*>/g, (match) => {
    return match.replace(/return\s*\(\s*<([^>]*)>\s*\)\s*<\/[^>]*>/, 'return (<$1>');
  });
  
  // Fix grid classes with spaces
  content = content.replace(/grid-cols-1\s+md:\s+grid-cols-2/g, 'grid-cols-1 md:grid-cols-2');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*\)\s*<\/>/g, '<></>');
  
  return content;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixSyntaxErrors(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Start fixing from the app directory
console.log('Starting syntax error fixes...');
fixFilesInDirectory('./app');
console.log('Syntax error fixes completed!');
