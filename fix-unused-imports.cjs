const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));
      }
    } else {
      if (extensions.some(ext => file.endsWith(ext))) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Skipping ${filePath} - has merge conflicts`);
      return;
    }
    
    // Run ESLint with --fix to remove unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --ext .ts,.tsx,.js,.jsx`, { 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      console.log(`Fixed unused imports in ${filePath}`);
    } catch (error) {
      // ESLint might fail for some files, that's okay
      console.log(`Could not auto-fix ${filePath}: ${error.message}`);
    }
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
  }
}

// Main execution
console.log('Fixing unused imports...');

const files = getAllFiles('./app');
files.forEach(fixUnusedImports);

console.log('Done fixing unused imports!');