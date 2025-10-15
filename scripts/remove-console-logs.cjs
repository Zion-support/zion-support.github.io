const fs = require('fs');
const path = require('path');

// Function to remove console logs from a file
function removeConsoleLogs(content) {
  // Remove console.log, console.warn, console.error statements
  // But keep console.error in error boundaries and critical error handling
  return content
    .replace(/console\.log\([^)]*\);?\s*/g, '')
    .replace(/console\.warn\([^)]*\);?\s*/g, '')
    .replace(/console\.info\([^)]*\);?\s*/g, '')
    .replace(/console\.debug\([^)]*\);?\s*/g, '')
    .replace(/console\.trace\([^)]*\);?\s*/g, '')
    // Keep console.error in error boundaries and critical areas
    .replace(/console\.error\([^)]*\);?\s*(?<!error|Error|boundary|Boundary)/g, '');
}

// Function to process a directory recursively
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other build directories
      if (!['node_modules', 'dist', '.next', 'out', '.git'].includes(file)) {
        processDirectory(filePath);
      }
    } else if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const cleanedContent = removeConsoleLogs(content);
        
        if (content !== cleanedContent) {
          fs.writeFileSync(filePath, cleanedContent, 'utf8');
          console.log(`Cleaned console logs from: ${filePath}`);
        }
      } catch (error) {
        console.warn(`Error processing file ${filePath}:`, error.message);
      }
    }
  });
}

// Process the dist directory after build
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  console.log('Removing console logs from built files...');
  processDirectory(distPath);
  console.log('Console log removal completed');
} else {
  console.log('Dist directory not found, skipping console log removal');
}