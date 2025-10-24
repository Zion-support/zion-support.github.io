const fs = require('fs');
const path = require('path');

// Function to fix meta tag quotes
function fixMetaQuotes(content) {
  let fixed = content;
  
  // Fix meta tag attributes with missing quotes
  // Pattern: name="robots" content="noindex -"> name="robots" content="noindex"
  fixed = fixed.replace(/name="([^"]*?) content="([^"]*?)"/g, (match, p1, p2) => {
    return `name="${p1}" content="${p2}"`;
  });
  
  // Fix property attributes with missing quotes
  fixed = fixed.replace(/property="([^"]*?) content="([^"]*?)"/g, (match, p1, p2) => {
    return `property="${p1}" content="${p2}"`;
  });
  
  // Fix description attributes with missing quotes
  fixed = fixed.replace(/name="description" content="([^"]*?)"/g, (match, p1) => {
    return `name="description" content="${p1}"`;
  });
  
  // Fix any remaining meta tag quote issues
  fixed = fixed.replace(/<meta\s+([^>]*?)>/g, (match, attrs) => {
    // Fix attributes that are missing quotes
    let fixedAttrs = attrs;
    
    // Fix name="value" content="value" patterns
    fixedAttrs = fixedAttrs.replace(/(\w+)="([^"]*?) content="([^"]*?)"/g, '$1="$2" content="$3"');
    
    // Fix property="value" content="value" patterns
    fixedAttrs = fixedAttrs.replace(/(\w+)="([^"]*?) content="([^"]*?)"/g, '$1="$2" content="$3"');
    
    return `<meta ${fixedAttrs}>`;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixMetaQuotes(content);
    
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
console.log('Starting meta quote fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);