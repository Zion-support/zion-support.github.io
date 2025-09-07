const fs = require('fs');
const path = require('path');


function fixAllRemaining(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove any stray commit hashes
    content = content.replace(/[a-f0-9]{40}/g, '');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/[\s\S]*?[\s\S]*?>>>>>>>/g, '');
    content = content.replace(/[\s\S]*?>>>>>>>/g, '');
    content = content.replace(/[\s\S]*?>>>>>>>/g, '');
    
    // Fix missing closing braces for function components
    if (content.includes('export default function') && !content.match(/}\s*$/)) {
      // Find the last closing div tag
      const lastDivMatch = content.match(/.*<\/div>\s*$/);
      if (lastDivMatch) {
        // Add the missing closing braces
        content = content.trim() + '\n  );\n}';
        modified = true;
      }
    }
    
    // Fix extra spaces and clean up
    content = content.replace(/\s+$/gm, ''); // Remove trailing whitespace from each line
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove multiple empty lines
    
    // Ensure file ends with single newline
    content = content.trim() + '\n';
    
    const originalContent = fs.readFileSync(filePath, 'utf8');
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;

  }
}


function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixAllRemaining(filePath)) {
        console.log(`Fixed remaining issues in: ${filePath}`);
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting comprehensive fixes...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed remaining issues in ${fixedCount} files.`);

