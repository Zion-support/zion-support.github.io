#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflict markers
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD|=======|>>>>>>> [^\n]+/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix invalid identifier names (5G pages)
function fixInvalidIdentifiers(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix 5G page component names
    if (filePath.includes('5g-')) {
      // Replace invalid component names like "5GConsultingPage" with "FiveGConsultingPage"
      const pageName = path.basename(path.dirname(filePath));
      const validName = pageName.replace(/^5g-/, 'five-g-').replace(/-/g, '');
      const capitalizedName = validName.charAt(0).toUpperCase() + validName.slice(1) + 'Page';
      
      // Replace the component name
      content = content.replace(/const \d+G[A-Za-z]+Page:/g, `const ${capitalizedName}:`);
      content = content.replace(/export default \d+G[A-Za-z]+Page;/g, `export default ${capitalizedName};`);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed invalid identifiers in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
console.log('Starting lint error fixes...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  let fixed = false;
  
  // Fix merge conflicts
  if (fixMergeConflicts(file)) {
    fixed = true;
  }
  
  // Fix invalid identifiers
  if (fixInvalidIdentifiers(file)) {
    fixed = true;
  }
  
  if (fixed) {
    fixedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nFixed ${fixedCount} files, ${errorCount} errors encountered.`);

// Run lint again to check results
console.log('\nRunning lint check...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ All lint errors fixed!');
} catch (error) {
  console.log('❌ Some lint errors remain. Please check the output above.');
}