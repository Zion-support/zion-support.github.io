const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix specific malformed JSX patterns
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed characters and patterns
    const patterns = [
      // Fix the specific malformed pattern with strange characters
      { 
        pattern: /,\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2' 
      },
      // Fix malformed JSX with multiple strange characters
      { 
        pattern: /,\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3' 
      },
      // Fix malformed JSX with four strange characters
      { 
        pattern: /,\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3$4' 
      },
      // Fix malformed JSX with pipe characters
      { 
        pattern: /\|\s*([^<]+?)\s*\|\s*([^<]+?)\s*\|\s*([^<]+?)\s*\|\s*([^<]+?)\s*\|\s*([^<]+?)\s*\|/g, 
        replacement: '$1$2$3$4$5' 
      },
      // Fix malformed JSX with pipe and backtick characters
      { 
        pattern: /\|\s*([^<]+?)\s*\|\s*([^<]+?)\s*\|\s*([^<]+?)\s*\|\s*([^<]+?)\s*\|\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3$4$5' 
      },
      // Fix malformed JSX with backtick characters
      { 
        pattern: /`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2' 
      },
      // Fix malformed JSX with backtick and pipe characters
      { 
        pattern: /`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3' 
      },
      // Fix malformed JSX with backtick, pipe, and other characters
      { 
        pattern: /`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3$4' 
      },
      // Fix malformed JSX with mixed characters
      { 
        pattern: /`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3$4$5' 
      },
      // Fix malformed JSX with mixed characters and pipes
      { 
        pattern: /`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3$4$5$6' 
      },
      // Fix malformed JSX with mixed characters and pipes (longer pattern)
      { 
        pattern: /`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3$4$5$6$7' 
      },
      // Fix malformed JSX with mixed characters and pipes (even longer pattern)
      { 
        pattern: /`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3$4$5$6$7$8' 
      },
      // Fix malformed JSX with mixed characters and pipes (very long pattern)
      { 
        pattern: /`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3$4$5$6$7$8$9' 
      },
      // Fix malformed JSX with mixed characters and pipes (extremely long pattern)
      { 
        pattern: /`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3$4$5$6$7$8$9$10' 
      }
    ];
    
    for (const { pattern, replacement } of patterns) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed malformed JSX: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  const originalContent = fs.readFileSync(file, 'utf8');
  fixFile(file);
  const newContent = fs.readFileSync(file, 'utf8');
  if (originalContent !== newContent) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);