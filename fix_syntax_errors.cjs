const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing commas before properties
    content = content.replace(/(\s+)(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, '$1$2: $3');
    
    // Fix missing commas after properties that end with quotes or numbers
    content = content.replace(/(\s+)(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, '$1$2: $3');
    
    // Fix missing commas after properties that end with arrays or objects
    content = content.replace(/(\s+)(\w+):\s*\[[^\]]*\]\s*\n\s*(\w+):/g, '$1$2: $3');
    content = content.replace(/(\s+)(\w+):\s*\{[^}]*\}\s*\n\s*(\w+):/g, '$1$2: $3');
    
    // Fix missing commas after boolean values
    content = content.replace(/(\s+)(\w+):\s*(true|false)\s*\n\s*(\w+):/g, '$1$2: $3,\n$1$4:');
    
    // Fix missing commas after string values
    content = content.replace(/(\s+)(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, '$1$2: $3,\n$1$4:');
    
    // Fix missing commas after number values
    content = content.replace(/(\s+)(\w+):\s*\d+\s*\n\s*(\w+):/g, '$1$2: $3,\n$1$4:');
    
    // Clean up any double commas
    content = content.replace(/,\s*,/g, ',');
    
    // Clean up any trailing commas before closing braces
    content = content.replace(/,(\s*[}\]])/g, '$1');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files
const { execSync } = require('child_process');
const files = execSync('find app -name "*.tsx" -o -name "*.ts" | head -20', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log('Files to fix:', files);

files.forEach(file => {
  if (file) {
    fixSyntaxErrors(file);
  }
});

console.log('Syntax error fixing complete!');