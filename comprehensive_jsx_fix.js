const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues comprehensively
function fixJSXSyntax(content) {
  // First, let's fix the basic structure issues
  
  // Fix missing closing tags for divs that should be self-closing
  content = content.replace(/<div className="([^"]*)"\s*>\s*<\/div>/g, '<div className="$1" />');
  
  // Fix missing closing tags for sections that should be self-closing
  content = content.replace(/<section className="([^"]*)"\s*>\s*<\/section>/g, '<section className="$1" />');
  
  // Fix missing closing tags for buttons that should be self-closing
  content = content.replace(/<button className="([^"]*)"\s*>\s*<\/button>/g, '<button className="$1" />');
  
  // Fix missing closing tags for ul/li elements
  content = content.replace(/<ul className="([^"]*)"\s*>\s*<\/ul>/g, '<ul className="$1" />');
  content = content.replace(/<li className="([^"]*)"\s*>\s*<\/li>/g, '<li className="$1" />');
  
  // Fix missing closing tags for h1, h2, h3, p elements
  content = content.replace(/<(h[1-6]|p) className="([^"]*)"\s*>\s*<\/\1>/g, '<$1 className="$2" />');
  
  // Now fix the structure where we have opening tags without proper closing
  // This is more complex and requires careful handling
  
  // Fix the main container div structure
  content = content.replace(
    /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">\s*{/g,
    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">\n        {'
  );
  
  // Fix section structures
  content = content.replace(
    /<section className="([^"]*)"\s*>\s*{/g,
    '<section className="$1">\n          {'
  );
  
  // Fix div structures
  content = content.replace(
    /<div className="([^"]*)"\s*>\s*{/g,
    '<div className="$1">\n            {'
  );
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXSyntax(content);
    
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

// Function to recursively find and process TSX files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Process the components directory
const componentsDir = path.join(__dirname, 'app', 'components');
console.log('Fixing JSX syntax issues comprehensively...');
const fixedCount = processDirectory(componentsDir);
console.log(`Fixed ${fixedCount} files`);
