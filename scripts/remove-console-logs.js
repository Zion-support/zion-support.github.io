import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');

function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove console.log statements
    content = content.replace(/console\.log\([^)]*\);?/g, '');
    content = content.replace(/console\.warn\([^)]*\);?/g, '');
    content = content.replace(/console\.error\([^)]*\);?/g, '');
    content = content.replace(/console\.debug\([^)]*\);?/g, '');
    content = content.replace(/console\.info\([^)]*\);?/g, '');
    
    // Remove empty lines
    content = content.replace(/^\s*[\r\n]/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Removed console logs from ${path.basename(filePath)}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.js')) {
      removeConsoleLogs(filePath);
    }
  });
}

console.log('Starting console log removal...');
processDirectory(distDir);
console.log('Console log removal completed!');
