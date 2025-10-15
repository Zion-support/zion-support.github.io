const fs = require('fs');
const path = require('path');

// Function to optimize a single file
function optimizeFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports
    const lines = content.split('\n');
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this line contains an import
      if (line.includes('import') && line.includes('from')) {
        // Extract imported names
        const importMatch = line.match(/import\s*{([^}]+)}/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImportsFromLine = [];
          
          for (const imp of imports) {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            // Check if this import is used in the file
            if (content.includes(cleanImp) && !line.includes(cleanImp + ' as')) {
              usedImportsFromLine.push(imp);
            }
          }
          
          if (usedImportsFromLine.length > 0) {
            cleanedLines.push(`import { ${usedImportsFromLine.join(', ')} } from '${line.split('from')[1].trim()}'`);
            modified = true;
          }
        } else {
          // Default import or other import types
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    // Remove console.log statements in production
    if (process.env.NODE_ENV === 'production') {
      const consoleRegex = /console\.(log|warn|info|debug)\([^)]*\);?\s*/g;
      const newContent = content.replace(consoleRegex, '');
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Write cleaned content back
    if (modified) {
      fs.writeFileSync(filePath, cleanedLines.join('\n'));
      console.log(`✅ Optimized: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
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
console.log('🚀 Starting app optimization...');

const appDir = path.join(__dirname, '..', 'app');
const files = findFiles(appDir);

let optimizedCount = 0;
for (const file of files) {
  try {
    optimizeFile(file);
    optimizedCount++;
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`✅ Optimized ${optimizedCount} files`);
console.log('🎉 App optimization completed!');
