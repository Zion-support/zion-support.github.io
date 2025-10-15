const fs = require('fs');
const path = require('path');

// Simple script to remove console.log statements from built files
const removeConsoleLogs = () => {
  const distDir = path.join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('Dist directory not found, skipping console log removal');
    return;
  }

  const processFile = (filePath) => {
    if (fs.statSync(filePath).isDirectory()) {
      const files = fs.readdirSync(filePath);
      files.forEach(file => processFile(path.join(filePath, file)));
    } else if (filePath.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      // Remove console.log statements (basic regex)
      content = content.replace(/console\.log\([^)]*\);?\s*/g, '');
      fs.writeFileSync(filePath, content);
    }
  };

  processFile(distDir);
  console.log('Console logs removed from built files');
};

removeConsoleLogs();