const fs = require('fs');
const path = require('path');

// Function to fix unterminated string literals
function fixStringLiterals(content) {
  // Fix broken className strings with semicolons
  content = content.replace(/className="([^"]*?)\s*;\s*([^"]*?)"/g, 'className="$1 $2"');
  
  // Fix broken className strings with quotes in the middle
  content = content.replace(/className="([^"]*?)\s*"\s*([^"]*?)"/g, 'className="$1 $2"');
  
  // Fix broken className strings with spaces and quotes
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([^"]*?)"/g, 'className="$1 $2"');
  
  // Fix specific patterns like " mi"n-h-screen" -> "min-h-screen"
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([a-z])/g, 'className="$1 $2');
  
  // Fix specific patterns like " ma"x-w-7xl" -> "max-w-7xl"
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([a-z])/g, 'className="$1 $2');
  
  // Fix specific patterns like " te"xt-4xl" -> "text-4xl"
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([a-z])/g, 'className="$1 $2');
  
  // Fix broken className strings that were split incorrectly
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([a-z][^"]*?)"/g, 'className="$1 $2"');
  
  // Fix any remaining unterminated strings in className
  content = content.replace(/className="([^"]*?)\s*"\s*([^"]*?)"/g, 'className="$1 $2"');
  
  // Fix broken strings in other attributes
  content = content.replace(/content="([^"]*?)\s*"\s*([^"]*?)"/g, 'content="$1 $2"');
  content = content.replace(/name="([^"]*?)\s*"\s*([^"]*?)"/g, 'name="$1 $2"');
  
  // Fix any remaining semicolons in JSX attributes
  content = content.replace(/className="([^"]*?);\s*([^"]*?)"/g, 'className="$1 $2"');
  content = content.replace(/content="([^"]*?);\s*([^"]*?)"/g, 'content="$1 $2"');
  content = content.replace(/name="([^"]*?);\s*([^"]*?)"/g, 'name="$1 $2"');
  
  return content;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixStringLiterals(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed string literals in: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Start fixing from the app directory
console.log('Starting string literal fixes...');
fixFilesInDirectory('./app');
fixFilesInDirectory('./components');
fixFilesInDirectory('./src');
console.log('String literal fixes completed!');