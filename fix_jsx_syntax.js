const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues
function fixJSXSyntax(content) {
  // Fix self-closing divs that should be opening tags
  content = content.replace(/<div className="([^"]*)"\s*><\/div>/g, '<div className="$1">');
  
  // Fix self-closing sections that should be opening tags
  content = content.replace(/<section className="([^"]*)"\s*><\/section>/g, '<section className="$1">');
  
  // Fix self-closing buttons that should be opening tags
  content = content.replace(/<button className="([^"]*)"\s*><\/button>/g, '<button className="$1">');
  
  // Fix self-closing ul/li elements
  content = content.replace(/<ul className="([^"]*)"\s*><\/ul>/g, '<ul className="$1">');
  content = content.replace(/<li className="([^"]*)"\s*><\/li>/g, '<li className="$1">');
  
  // Fix self-closing h1, h2, h3, p elements
  content = content.replace(/<(h[1-6]|p) className="([^"]*)"\s*><\/\1>/g, '<$1 className="$2">');
  
  // Fix self-closing div elements with specific patterns
  content = content.replace(/<div className="([^"]*)"\s*><\/div>\s*{/g, '<div className="$1">{');
  
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
console.log('Fixing JSX syntax issues in components...');
const fixedCount = processDirectory(componentsDir);
console.log(`Fixed ${fixedCount} files`);
