import fs from 'fs';
import path from 'path';

function fixJsxSemicolons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix semicolons in JSX tags
    content = content.replace(/<(\w+);/g, '<$1');
    content = content.replace(/<(\w+)\s+([^>]*);/g, '<$1 $2');
    
    // Fix semicolons in JSX text content
    content = content.replace(/>([^<]+);</g, '>$1<');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX semicolons: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixJsxSemicolons(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Fixing JSX semicolons...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed ${fixedCount} files with JSX semicolon issues.`);