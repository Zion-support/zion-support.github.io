const fs = require('fs');
const path = require('path');

// Remove console.log statements from built files
const removeConsoleLogs = () => {
  const distDir = path.join(process.cwd(), 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('Dist directory not found, skipping console log removal');
    return;
  }

  const files = fs.readdirSync(distDir, { recursive: true });
  
  files.forEach(file => {
    if (typeof file === 'string' && file.endsWith('.js')) {
      const filePath = path.join(distDir, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        // Remove console.log statements
        content = content.replace(/console\.log\([^)]*\);?/g, '');
        fs.writeFileSync(filePath, content);
      } catch (error) {
        console.log(`Error processing ${file}:`, error.message);
      }
    }
  });
  
  console.log('Console logs removed from built files');
};

removeConsoleLogs();