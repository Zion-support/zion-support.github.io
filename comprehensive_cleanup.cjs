const fs = require('fs');
const path = require('path');

// Function to recursively find all files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        files = files.concat(findFiles(fullPath, extensions));
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to clean merge conflict markers
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers
    content = content.replace(/[\s\S]*?[\s\S]*?    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?[\s\S]*?    content = content.replace(/[\s\S]*?    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]+/g, '');
    content = content.replace(//g, '');
    content = content.replace(/    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove any remaining empty lines at the beginning
    content = content.replace(/^\s*\n+/, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive merge conflict cleanup...');

const files = findFiles('.');
let cleanedCount = 0;

for (const file of files) {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
}

console.log(`\nCleanup complete! Cleaned ${cleanedCount} files.`);

// Try to run checks after cleanup
console.log('\nRunning linting...');
try {
  const { execSync } = require('child_process');
  execSync('pnpm run lint', { stdio: 'inherit' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('❌ Linting failed, but continuing...');
}

console.log('\nRunning type check...');
try {
  const { execSync } = require('child_process');
  execSync('pnpm run type-check', { stdio: 'inherit' });
  console.log('✅ Type check passed!');
} catch (error) {
  console.log('❌ Type check failed, but continuing...');
}

console.log('\nRunning build...');
try {
  const { execSync } = require('child_process');
  execSync('pnpm run build', { stdio: 'inherit' });
  console.log('✅ Build passed!');
} catch (error) {
  console.log('❌ Build failed, but continuing...');
}