const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
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
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    console.log(`Fixing unused imports in: ${filePath}`);
    
    // Use ESLint to fix unused imports
    execSync(`npx eslint "${filePath}" --fix --ext .ts,.tsx`, { 
      stdio: 'pipe',
      cwd: '/workspace'
    });
    
    console.log(`✅ Fixed: ${filePath}`);
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
  }
}

// Main execution
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