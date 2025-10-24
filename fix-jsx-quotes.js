const fs = require('fs');
const path = require('path');

// Function to fix JSX attribute quotes
function fixJSXQuotes(content) {
  let fixed = content;
  
  // Fix unterminated string literals in className attributes
  // Pattern: className="some-class (missing closing quote)
  fixed = fixed.replace(/className="([^"]*?)(?<!")$/gm, (match, p1) => {
    return `className="${p1}`;
  });
  
  // Fix unterminated string literals in other JSX attributes
  // Pattern: attribute="value (missing closing quote)"
  fixed = fixed.replace(/(\w+)="([^"]*?)(?<!")$/gm, (match, p1, p2) => {
    return `${p1}="${p2}"`;
  });
  
  // Fix unterminated string literals in JSX attributes that span multiple lines
  // Pattern: className="multi-line-class (missing closing quote)
  fixed = fixed.replace(/className="([^"]*?)(?<!")/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `className="${p1}`;
    }
    return match;
  });
  
  // Fix other common JSX attribute patterns
  fixed = fixed.replace(/href="("[^"]*?)(?<!")/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `href="${p1}"`;
    }
    return match;
  });
  
  fixed = fixed.replace(/src="([^"]*?)(?<!")/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `src="${p1}"`;
    }
    return match;
  });
  
  fixed = fixed.replace(/alt="([^"]*?)(?<!")/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `alt="${p1}"`;
    }
    return match;
  });
  
  // Fix JSX closing tag issues
  fixed = fixed.replace(/>\s*$/gm, '>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXQuotes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
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
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .next directories
        if (item === 'node_modules' || item === '.next' || item === 'dist') {
          continue;
        }
        fixedCount += processDirectory(fullPath);
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
console.log('Starting JSX quote fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);