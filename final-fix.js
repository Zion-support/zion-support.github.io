const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax issues
function fixAllRemainingIssues(content) {
  // Fix malformed meta attributes
  content = content.replace(/name="([^"]*?)\s*content=\s*content=\s*([^"]*?)\s*\/>/g, 'name="$1" content="$2" />');
  content = content.replace(/property="([^"]*?)\s*content=\s*content=\s*([^"]*?)\s*\/>/g, 'property="$1" content="$2" />');
  
  // Fix malformed className attributes
  content = content.replace(/className=\s*mi\s*n\s*-h-screen/g, 'className="min-h-screen');
  content = content.replace(/className=\s*ma\s*x\s*-w-/g, 'className="max-w-');
  content = content.replace(/className=\s*te\s*xt-/g, 'className="text-');
  
  // Fix missing quotes around className values
  content = content.replace(/className=\s*([^"][^>]*?)\s*>/g, 'className="$1">');
  
  // Fix broken closing tags
  content = content.replace(/<div([^>]*?)\s*>/g, '<div$1>');
  content = content.replace(/<h1([^>]*?)\s*>/g, '<h1$1>');
  content = content.replace(/<section([^>]*?)\s*>/g, '<section$1>');
  
  // Fix any remaining broken attributes
  content = content.replace(/content=\s*content=\s*/g, 'content=');
  content = content.replace(/name=\s*content=\s*/g, 'name=');
  content = content.replace(/property=\s*content=\s*/g, 'property=');
  
  // Fix malformed closing tags
  content = content.replace(/<div className="([^"]*?)\s*$/gm, '<div className="$1">');
  content = content.replace(/<h1 className="([^"]*?)\s*$/gm, '<h1 className="$1">');
  content = content.replace(/<section className="([^"]*?)\s*$/gm, '<section className="$1">');
  
  // Fix any remaining broken className patterns
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([a-z][^"]*?)"/g, 'className="$1 $2"');
  
  // Fix broken closing tags with missing quotes
  content = content.replace(/<div className=([^>]*?)\s*>/g, '<div className="$1">');
  content = content.replace(/<h1 className=([^>]*?)\s*>/g, '<h1 className="$1">');
  content = content.replace(/<section className=([^>]*?)\s*>/g, '<section className="$1">');
  
  // Fix any remaining broken attributes
  content = content.replace(/content=\s*([^"]*?)\s*\/>/g, 'content="$1" />');
  content = content.replace(/name=\s*([^"]*?)\s*\/>/g, 'name="$1" />');
  content = content.replace(/property=\s*([^"]*?)\s*\/>/g, 'property="$1" />');
  
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
        
        content = fixAllRemainingIssues(content);
        
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

// Start fixing from the app directory
console.log('Starting final fixes...');
fixFilesInDirectory('./app');
fixFilesInDirectory('./components');
fixFilesInDirectory('./src');
console.log('Final fixes completed!');