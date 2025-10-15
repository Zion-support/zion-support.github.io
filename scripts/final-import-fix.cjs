const fs = require('fs');
const path = require('path');

// Function to fix all malformed imports in a file
function fixAllImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix various malformed import patterns
    const patterns = [
      // Fix missing semicolons at end of import lines
      { regex: /import\s*{([^}]+)}\s*from\s*'([^']+)'$/gm, replacement: "import { $1 } from '$2';" },
      { regex: /import\s+([^{}\s]+)\s*from\s*'([^']+)'$/gm, replacement: "import $1 from '$2';" },
      // Fix any remaining double quotes
      { regex: /''([^']+)''/g, replacement: "'$1'" },
      { regex: /""([^"]+)""/g, replacement: "'$1'" },
      // Fix unterminated strings
      { regex: /'([^']+)'$/gm, replacement: "'$1';" }
    ];
    
    for (const pattern of patterns) {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔧 Final import fixing...');

const appDir = path.join(__dirname, '..', 'app');
const files = findFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  try {
    fixAllImports(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`✅ Fixed imports in ${fixedCount} files`);
console.log('🎉 Final import fixing completed!');
