const fs = require('fs');
const path = require('path');

// Function to fix malformed quotes in a file
function fixMalformedQuotes(content) {
  // Fix the common pattern: 'text\";\"' -> 'text'
  content = content.replace(/'([^']*)\";\"/g, "'$1'");
  
  // Fix the pattern: \"text\"'\" -> "text"
  content = content.replace(/\"([^\"]*)\"'\"/g, '"$1"');
  
  // Fix the pattern: 'text\"' -> 'text'
  content = content.replace(/'([^']*)\"'/g, "'$1'");
  
  // Fix the pattern: \"text\" -> "text"
  content = content.replace(/\"([^\"]*)\"/g, '"$1"');
  
  // Fix JSX return statements with malformed parentheses
  content = content.replace(/return \(<div>/g, 'return (\n    <div>');
  
  // Fix import statements with semicolons
  content = content.replace(/import ([^;]+);\n;/g, 'import $1;\n');
  
  return content;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixMalformedQuotes(content);
        
        if (content !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Start fixing from the app directory
console.log('Starting syntax error fixes...');
fixFilesInDirectory('./app');
console.log('Syntax error fixes completed!');