const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
<<<<<<< HEAD
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
=======
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
>>>>>>> 3a0c14507e7fb2ceadeeae23292a951fd32ccfd0
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
<<<<<<< HEAD
    console.log(`Fixing unused imports in: ${filePath}`);
    
    // Use ESLint to fix unused imports
    execSync(`npx eslint "${filePath}" --fix --ext .ts,.tsx`, { 
      stdio: 'pipe',
      cwd: '/workspace'
    });
    
    console.log(`✅ Fixed: ${filePath}`);
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
=======
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
>>>>>>> 3a0c14507e7fb2ceadeeae23292a951fd32ccfd0
  }
}

// Main execution
<<<<<<< HEAD
console.log('🔧 Starting to fix unused imports...');

const files = getAllFiles('/workspace/app');
let fixedCount = 0;

files.forEach(file => {
  try {
    fixUnusedImports(file);
    fixedCount++;
  } catch (error) {
    console.log(`Error processing ${file}: ${error.message}`);
  }
});

console.log(`\n🎉 Fixed unused imports in ${fixedCount} files!`);
=======
console.log('Fixing unused imports...');

const files = getAllFiles('./app');
files.forEach(fixUnusedImports);

console.log('Done fixing unused imports!');
>>>>>>> 3a0c14507e7fb2ceadeeae23292a951fd32ccfd0
