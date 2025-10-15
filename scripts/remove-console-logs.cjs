const fs = require('fs');
const path = require('path');

// Simple script to remove console.log statements from built files
const removeConsoleLogs = () => {
  const distDir = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('Dist directory not found, skipping console log removal');
    return;
  }

  const processFile = (filePath) => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Remove console.log statements (basic regex)
      content = content.replace(/console\.log\([^)]*\);?/g, '');
      content = content.replace(/console\.warn\([^)]*\);?/g, '');
      content = content.replace(/console\.error\([^)]*\);?/g, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Processed: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  };

  const walkDir = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.js')) {
        processFile(filePath);
      }
    });
  };

  walkDir(distDir);
  console.log('Console logs removed from built files');
};

removeConsoleLogs();