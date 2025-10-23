const fs = require('fs');
const path = require('path');

// Function to fix common JSX issues
function fixJSXIssues(content) {
  let fixedContent = content;
  
  // Fix self-closing div tags that should be opening tags
  fixedContent = fixedContent.replace(
    /<div className="[^"]*">\{[^}]*\.map\([^)]*\) => \(<\/div>/g,
    (match) => {
      const divMatch = match.match(/<div className="([^"]*)">/);
      if (divMatch) {
        return `<div className="${divMatch[1]}">\n              `;
      }
      return match;
    }
  );
  
  // Fix broken paragraph tags
  fixedContent = fixedContent.replace(
    /<p[^>]*>([^<]*)<\/p>\s*([^<]+)\s*<\/p>/g,
    '<p$1 $2</p>'
  );
  
  // Fix empty return statements
  fixedContent = fixedContent.replace(
    /return\s*\(\s*\n\s*\)\s*;/g,
    'return (\n    <div>\n      {/* Component content will be implemented here */}\n    </div>\n  );'
  );
  
  // Fix missing closing tags for divs
  fixedContent = fixedContent.replace(
    /<div[^>]*>\s*\{[^}]*\.map\([^)]*\) => \(\s*<div/g,
    (match) => {
      return match.replace(/<div[^>]*>/, '<div$1>\n              ');
    }
  );
  
  return fixedContent;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXIssues(content);
    
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
console.log('Starting to fix JSX issues...');
const filesProcessed = processDirectory('/workspace');
console.log(`Processed ${filesProcessed} files.`);