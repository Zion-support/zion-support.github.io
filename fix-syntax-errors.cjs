const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  return content
    // Fix double semicolons and quotes
    .replace(/";";/g, '";')
    .replace(/";,/g, '";')
    .replace(/;";/g, ';')
    .replace(/;"/g, ';')
    .replace(/";/g, ';')
    // Fix unterminated strings
    .replace(/"[^"]*$/gm, (match) => {
      if (!match.endsWith('"')) {
        return match + '"';
      }
      return match;
    })
    // Fix missing closing tags
    .replace(/<([^>]+)(?<!\/)>$/gm, (match, tagName) => {
      if (!match.endsWith('/>') && !match.endsWith('</')) {
        return match + `</${tagName.split(' ')[0]}>`;
      }
      return match;
    })
    // Fix missing semicolons
    .replace(/([^;}])\n(\s*[a-zA-Z])/g, '$1;\n$2')
    // Fix missing commas in objects
    .replace(/([^,}])\n(\s*[a-zA-Z][^:]*:)/g, '$1,\n$2')
    // Fix extra semicolons at the beginning of lines
    .replace(/^\s*;\s*$/gm, '')
    // Fix extra quotes at the beginning of lines
    .replace(/^\s*"\s*$/gm, '');
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JavaScript files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const workspaceDir = process.cwd();
const files = findTsxFiles(workspaceDir);

console.log(`Found ${files.length} TypeScript/JavaScript files`);

// Process each file
files.forEach(processFile);

console.log('Syntax error fixes completed!');
