import fs from 'fs';
import path from 'path';

function removeConsoleLogs() {
  const distDir = path.join(process.cwd(), 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('Dist directory not found');
    return;
  }

  function processFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Remove console.log statements
      content = content.replace(/console\.log\([^)]*\);?/g, '');
      content = content.replace(/console\.warn\([^)]*\);?/g, '');
      content = content.replace(/console\.error\([^)]*\);?/g, '');
      content = content.replace(/console\.info\([^)]*\);?/g, '');
      content = content.replace(/console\.debug\([^)]*\);?/g, '');
      
      // Clean up multiple empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Removed console logs from: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.ts')) {
        processFile(filePath);
      }
    });
  }

  walkDir(distDir);
  console.log('Console log removal completed!');
}

removeConsoleLogs();