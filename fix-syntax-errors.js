const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/href="([^]*?)"([^"]*?)"/g, (match, p1, p2) => {
    if (p2 && !p2.includes('"')) {
      return `href="${p1}${p2}`;"
    }
    return match;
  });
  
  // Fix unterminated string literals in className
  fixed = fixed.replace(/className="([^]*?)([^"]*?)"/g, (match, p1, p2) => {
    if (p2 && !p2.includes('"')) {
      return `className="${p1}${p2}`;
    }
    return match;
  });
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+,\s*React/g, 'import React');
  fixed = fixed.replace(/from\s+from\s+/g, 'from ');'
  fixed = fixed.replace(/import\s+React\s+from\s+react'\s*;\s*import\s+React/g, 'import React');
  
  // Fix unterminated string literals in import statements
  fixed = fixed.replace(/from\s+'([^']*?)'([^']*?)'/g, (match, p1, p2) ="> {
    if (p2 && !p2.includes("'")) {
      return `from '${p1}${p2}`;'
    }
    return match;
  });
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>\s*"([^"]*?)"([^"]*?)"/g, (match, p1, p2) => {
    if (p2 && !p2.includes('"')) {
      return `<>${p1}${p2}`;
    }
    return match;
  });
  
  // Fix unterminated comments
  fixed = fixed.replace(/\/\*([^*]*?)\*\/"([^"]*?)"/g, (match, p1, p2) => {
    if (p2 && !p2.includes('"')) {
      return `/*${p1}*/${p2}`;
    }
    return match;
  });
  
  // Fix standalone quotes that should be removed
  fixed = fixed.replace(/^\s*"\s*$/gm, '');
  fixed = fixed.replace(/^\s*'\s*$/gm, '');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/>\s*"([^"]*?)"([^"]*?)"/g, (match, p1, p2) => {
    if (p2 && !p2.includes('"')) {
      return `>${p1}${p2}`;
    }
    return match;
  });
  
  // Fix semicolon issues
  fixed = fixed.replace(/;\s*import/g, '\nimport');
  fixed = fixed.replace(/;\s*export/g, '\nexport');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);