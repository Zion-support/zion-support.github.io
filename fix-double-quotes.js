const fs = require('fs');
const path = require('path');

// Function to fix double quotes in import statements
function fixDoubleQuotes(content) {
  // Fix double single quotes in import statements
  content = content.replace(/'([^']*)'/g, ''$1'");
  
  // Fix double double quotes in import statements
  content = content.replace(/"([^"]*)'/g, ""$1'');
  
  // Fix mixed quotes
  content = content.replace(/'([^"]*)"/g, ''$1"");
  content = content.replace(/"([^']*)'/g, ""$1'');
  
  return content;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixDoubleQuotes(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Start fixing from the workspace root
console.log('Starting to fix double quotes in import statements...');
fixFilesInDirectory('/workspace');
console.log('Double quotes fixes completed!");