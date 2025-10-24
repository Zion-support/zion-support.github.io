const fs = require('fs');
const path = require('path');

// Function to fix duplicate return statements
function fixDuplicateReturns(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix duplicate return statements
    if (content.includes('  return (\n\n  return (')) {
      content = content.replace(/  return \(\n\n  return \(/g, '  return (');
      fixed = true;
    }
    
    // Fix duplicate return statements with different spacing
    if (content.includes('  return (\n  \n  return (')) {
      content = content.replace(/  return \(\n  \n  return \(/g, '  return (');
      fixed = true;
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed duplicate returns: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JavaScript files in app directory
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all files in the app directory
const appDir = './app';
const files = findFiles(appDir);

console.log(`Found ${files.length} files to fix...`);

files.forEach(fixDuplicateReturns);

console.log('Done fixing duplicate returns!');