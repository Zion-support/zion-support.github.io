const fs = require('fs');
const path = require('path');

// Function to fix semicolon errors in JSX
function fixSemicolonErrors(content) {
  let fixed = content;
  
  // Fix return statements with semicolons
  fixed = fixed.replace(/return\s*\(;/g, 'return (');
  
  // Fix JSX elements with semicolons
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*[^>]*)>;/g, '<$1>');
  fixed = fixed.replace(/<\/[^>]+>;/g, (match) => match.replace(';', ''));
  
  // Fix self-closing JSX elements with semicolons
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*[^>]*)\s*\/>;/g, '<$1 />');
  
  // Fix className attributes with semicolons
  fixed = fixed.replace(/className="([^"]*);/g, 'className="$1"');
  
  // Fix meta tags with semicolons
  fixed = fixed.replace(/<meta([^>]*)>;/g, '<meta$1>');
  fixed = fixed.replace(/<title>([^<]*)<\/title>;/g, '<title>$1</title>');
  
  // Fix div elements with semicolons
  fixed = fixed.replace(/<div([^>]*)>;/g, '<div$1>');
  fixed = fixed.replace(/<\/div>;/g, '</div>');
  
  // Fix other common JSX elements
  fixed = fixed.replace(/<(h[1-6]|p|span|a|button|section|article|header|footer|main|nav|aside)([^>]*)>;/g, '<$1$2>');
  fixed = fixed.replace(/<\/(h[1-6]|p|span|a|button|section|article|header|footer|main|nav|aside)>;/g, '</$1>');
  
  // Fix Link components
  fixed = fixed.replace(/<Link([^>]*)>;/g, '<Link$1>');
  fixed = fixed.replace(/<\/Link>;/g, '</Link>');
  
  // Fix Head components
  fixed = fixed.replace(/<Head>;/g, '<Head>');
  fixed = fixed.replace(/<\/Head>;/g, '</Head>');
  
  // Fix ArrowRight and other icon components
  fixed = fixed.replace(/<ArrowRight([^>]*)>;/g, '<ArrowRight$1 />');
  fixed = fixed.replace(/<[A-Z][a-zA-Z0-9]*([^>]*)\s*\/>;/g, (match) => match.replace(';', ''));
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSemicolonErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed semicolons in: ${filePath}`);
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
console.log('Starting semicolon error fix...');
const fixedCount = processDirectory('./app');
console.log(`Fixed semicolons in ${fixedCount} files`);