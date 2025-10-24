const fs = require('fs');
const path = require('path');

// Function to fix comprehensive JSX issues
function fixComprehensiveJSX(content) {
  let fixed = content;
  
  // Fix JSX fragments that are not properly closed
  fixed = fixed.replace(/<>\s*<Head>/g, '<>\n      <Head>');
  fixed = fixed.replace(/<\/Head>\s*<div/g, '</Head>\n      <div');
  
  // Fix broken div nesting
  fixed = fixed.replace(
    /<div([^>]*)><\/div>\s*<div([^>]*)>/g,
    '<div$1>\n        <div$2>'
  );
  
  // Fix JSX elements that are not properly nested
  fixed = fixed.replace(
    /<div([^>]*)>\s*<div([^>]*)>\s*<h1([^>]*)>([^<]+)<\/h1>/g,
    '<div$1>\n        <div$2>\n          <h1$3>$4</h1>'
  );
  
  // Fix paragraph tags that are broken
  fixed = fixed.replace(
    /<p([^>]*)><\/p>\s*([^<]+)<\/p>/g,
    '<p$1>$2</p>'
  );
  
  // Fix Link components that are not properly closed
  fixed = fixed.replace(
    /<Link\s+([^>]*)>\s*([^<]+)\s*<ArrowRight([^>]*)\s*\/>\s*<\/Link>/g,
    '<Link $1>\n            $2\n            <ArrowRight$3 />\n          </Link>'
  );
  
  // Fix Footer components
  fixed = fixed.replace(/<Footer\s*\/>/g, '<Footer />');
  
  // Fix closing tags for fragments
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/>/g, '</div>\n      </div>\n    </>');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
  
  // Fix JSX expressions that need proper structure
  fixed = fixed.replace(
    /return\s*\(\s*<>\s*([\s\S]*?)\s*<\/>\s*\)/g,
    (match, content) => {
      // Ensure proper indentation
      const lines = content.split('\n');
      const indentedLines = lines.map(line => {
        if (line.trim()) {
          return '      ' + line;
        }
        return line;
      });
      return `return (\n    <>\n${indentedLines.join('\n')}\n    </>\n  )`;
    }
  );
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixComprehensiveJSX(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed comprehensive JSX in: ${filePath}`);
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
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive JSX fix...');
const fixedCount = processDirectory('./app');
console.log(`Fixed comprehensive JSX in ${fixedCount} files`);