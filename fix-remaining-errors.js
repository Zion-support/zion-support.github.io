const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix extra closing divs at the end
  const lines = fixed.split('\n');
  const lastLines = lines.slice(-10);
  let extraDivs = 0;
  
  // Count extra closing divs in the last few lines
  for (let i = lastLines.length - 1; i >= 0; i--) {
    if (lastLines[i].trim() === '</div>') {
      extraDivs++;
    } else if (lastLines[i].trim() && !lastLines[i].trim().startsWith('//')) {
      break;
    }
  }
  
  // Remove extra closing divs
  if (extraDivs > 1) {
    const extraDivsToRemove = extraDivs - 1;
    let removed = 0;
    for (let i = lines.length - 1; i >= 0 && removed < extraDivsToRemove; i--) {
      if (lines[i].trim() === '</div>') {
        lines.splice(i, 1);
        removed++;
      }
    }
    fixed = lines.join('\n');
  }
  
  // Fix missing closing fragment tags
  fixed = fixed.replace(/<\/div>\s*\)\s*$/, '</>\n  );');
  fixed = fixed.replace(/<\/div>\s*\)\s*;\s*$/, '</>\n  );');
  
  // Fix missing semicolon after return statement
  fixed = fixed.replace(/\)\s*$/, ');');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div>\s*\)\s*$/, '</>\n  );');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);