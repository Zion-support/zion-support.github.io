<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix all extra quotes at end of lines
    const newContent = content.replace(/"\s*$/gm, '');
    
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
=======
const fs = require('fs');
const path = require('path');

// Function to fix all quote issues
function fixAllQuotes(content) {
  let fixed = content;
  
  // Fix unterminated className attributes
  // Pattern: className="long-class-name"> -> className="long-class-name">
  fixed = fixed.replace(/className="([^"]*?)>/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `className="${p1}">`;
    }
    return match;
  });
  
  // Fix unterminated href attributes
  fixed = fixed.replace(/href="([^"]*?)>/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `href="${p1}">`;
    }
    return match;
  });
  
  // Fix unterminated src attributes
  fixed = fixed.replace(/src="([^"]*?)>/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `src="${p1}">`;
    }
    return match;
  });
  
  // Fix unterminated alt attributes
  fixed = fixed.replace(/alt="([^"]*?)>/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `alt="${p1}">`;
    }
    return match;
  });
  
  // Fix unterminated title attributes
  fixed = fixed.replace(/title="([^"]*?)>/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `title="${p1}">`;
    }
    return match;
  });
  
  // Fix unterminated id attributes
  fixed = fixed.replace(/id="([^"]*?)>/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `id="${p1}">`;
    }
    return match;
  });
  
  // Fix unterminated name attributes
  fixed = fixed.replace(/name="([^"]*?)>/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `name="${p1}">`;
    }
    return match;
  });
  
  // Fix unterminated type attributes
  fixed = fixed.replace(/type="([^"]*?)>/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `type="${p1}">`;
    }
    return match;
  });
  
  // Fix unterminated placeholder attributes
  fixed = fixed.replace(/placeholder="([^"]*?)>/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `placeholder="${p1}">`;
    }
    return match;
  });
  
  // Fix unterminated value attributes
  fixed = fixed.replace(/value="([^"]*?)>/g, (match, p1) => {
    if (!p1.includes('"')) {
      return `value="${p1}">`;
    }
    return match;
  });
  
  // Fix any remaining unterminated string literals in JSX attributes
  // This is a more general pattern that should catch most cases
  fixed = fixed.replace(/(\w+)="([^"]*?)>/g, (match, p1, p2) => {
    if (!p2.includes('"')) {
      return `${p1}="${p2}">`;
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllQuotes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
>>>>>>> origin/main
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error fixing ${filePath}:`, error.message);
=======
    console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> origin/main
    return false;
  }
}

<<<<<<< HEAD
function main() {
  console.log('Starting comprehensive quote fixes...');
  
  // Get all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let fixedCount = 0;
  let totalFiles = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Comprehensive quote fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };
=======
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
console.log('Starting comprehensive quote fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
>>>>>>> origin/main
