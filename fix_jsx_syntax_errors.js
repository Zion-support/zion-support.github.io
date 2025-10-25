const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix malformed JSX fragments and return statements
  // Pattern: return ( followed by <> without proper JSX structure
  fixed = fixed.replace(/return\s*\(\s*<>\s*$/gm, 'return (\n    <>\n');
  
  // Fix missing opening tags in JSX
  fixed = fixed.replace(/<>\s*<SEOHead/g, '<>\n      <SEOHead');
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className\s*=\s*\"([^"]*)\"\s*>/g, 'className="$1">');
  
  // Fix any remaining malformed JSX patterns
  fixed = fixed.replace(/<>\s*$/gm, '<>\n');
  
  return fixed;
}

// Function to process all TSX files
function processAllTSXFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      processAllTSXFiles(fullPath);
    } else if (file.name.endsWith('.tsx')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const fixed = fixJSXSyntax(content);
        
        if (content !== fixed) {
          fs.writeFileSync(fullPath, fixed);
          console.log(`Fixed JSX syntax in: ${fullPath}`);
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Process the app directory
processAllTSXFiles('./app');
console.log('JSX syntax fixing completed!');