const fs = require('fs');
const path = require('path');

// Function to fix corrupted JSX syntax
function fixJSXSyntax(content) {
  // Remove malformed JSX patterns
  let fixed = content
    // Fix return statements missing JSX syntax
    .replace(/return\(\)\s*<>/g, 'return (')
    .replace(/return\(\)\s*$/gm, 'return (')
    
    // Fix malformed JSX fragments
    .replace(/<>\s*<>\s*<title>/g, '<title>')
    .replace(/<\/title>\s*<>\s*<\/>/g, '</title>')
    .replace(/<>\s*<\/>/g, '')
    
    // Fix malformed text content
    .replace(/<\/>([^<]+)<>/g, '$1')
    .replace(/<>\s*([^<]+)\s*<\/>/g, '$1')
    
    // Fix malformed closing tags
    .replace(/<(\w+);\s*<\/\1>/g, '<$1>')
    .replace(/<(\w+);\s*$/gm, '<$1>')
    
    // Fix malformed Link components
    .replace(/<Link;\s*<\/Link>/g, '<Link')
    .replace(/<\/Link>\s*<\/Link>/g, '</Link>')
    .replace(/<Link;\s*$/gm, '<Link')
    
    // Fix malformed Layout components
    .replace(/<Layout;\s*<\/Layout>/g, '<Layout')
    .replace(/<\/Layout>\s*<\/Layout>/g, '</Layout>')
    .replace(/<Layout;\s*$/gm, '<Layout')
    
    // Fix malformed Helmet components
    .replace(/<Helmet>\s*<>\s*<\/Helmet>/g, '<Helmet>')
    .replace(/<Helmet>\s*$/gm, '<Helmet>')
    
    // Fix malformed meta tags
    .replace(/<meta name="([^"]+)",\s*content="([^"]+)"\s*\/>\s*<>\s*<\/meta>/g, '<meta name="$1" content="$2" />')
    
    // Fix malformed closing parentheses
    .replace(/\)\s*\);\s*$/gm, ');')
    .replace(/\)\s*\)\s*$/gm, ')')
    
    // Fix malformed divs and sections
    .replace(/<div className="([^"]+)"\s*>\s*<\/div>/g, '<div className="$1">')
    .replace(/<section className="([^"]+)"\s*>\s*<\/section>/g, '<section className="$1">')
    
    // Fix malformed text content in tags
    .replace(/<h1[^>]*>\s*<\/>([^<]+)<>\s*<\/h1>/g, '<h1>$1</h1>')
    .replace(/<h2[^>]*>\s*<\/>([^<]+)<>\s*<\/h2>/g, '<h2>$1</h2>')
    .replace(/<h3[^>]*>\s*<\/>([^<]+)<>\s*<\/h3>/g, '<h3>$1</h3>')
    .replace(/<p[^>]*>\s*<\/>([^<]+)<>\s*<\/p>/g, '<p>$1</p>')
    
    // Fix malformed className attributes
    .replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"')
    
    // Fix malformed closing tags
    .replace(/<(\w+)[^>]*>\s*;\s*<\/\1>/g, '<$1>')
    .replace(/<(\w+)[^>]*>\s*;\s*$/gm, '<$1>')
    
    // Clean up extra spaces and newlines
    .replace(/\s+$/gm, '')
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    
    // Fix malformed function exports
    .replace(/export default (\w+);\s*const \1: React\.FC = \(\) => \{/g, 'const $1: React.FC = () => {')
    .replace(/export default (\w+);\s*const \1: React\.FC = \(\) => \{/g, 'const $1: React.FC = () => {');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);