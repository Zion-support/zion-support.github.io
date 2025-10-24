const fs = require('fs');
const path = require('path');

// Function to fix all syntax issues comprehensively
function fixAllIssues(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix broken className attributes
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([^"]*?)"/g, 'className="$1 $2"');
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([a-z][^"]*?)"/g, 'className="$1 $2"');
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([a-z])/g, 'className="$1 $2');
  
  // Fix broken meta attributes
  content = content.replace(/name="([^"]*?)\s*"\s*([^"]*?)"/g, 'name="$1" content="$2"');
  content = content.replace(/content="([^"]*?)\s*"\s*([^"]*?)"/g, 'content="$1 $2"');
  
  // Fix broken property attributes
  content = content.replace(/property="([^"]*?)\s*"\s*([^"]*?)"/g, 'property="$1" content="$2"');
  
  // Fix broken quotes in attributes
  content = content.replace(/="([^"]*?)\s*"\s*([^"]*?)"/g, '="$1 $2"');
  
  // Fix specific patterns like "mi n-h-screen" -> "min-h-screen"
  content = content.replace(/className="\s*mi\s*n\s*-h-screen/g, 'className="min-h-screen');
  content = content.replace(/className="\s*ma\s*x\s*-w-/g, 'className="max-w-');
  content = content.replace(/className="\s*te\s*xt-/g, 'className="text-');
  
  // Fix broken closing tags
  content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
  content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1>');
  content = content.replace(/<header([^>]*)>\s*$/gm, '<header$1>');
  
  // Fix extra commas in JSX
  content = content.replace(/,\s*<\/div>/g, '</div>');
  content = content.replace(/,\s*<\/section>/g, '</section>');
  content = content.replace(/,\s*<\/header>/g, '</header>');
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\/div>\s*<\/div>/g, '</div>');
  content = content.replace(/<\/div>\s*<\/div>\s*<\/div>/g, '</div>');
  
  // Fix missing closing quotes
  content = content.replace(/content="([^"]*?)\s*$/gm, 'content="$1"');
  content = content.replace(/name="([^"]*?)\s*$/gm, 'name="$1"');
  content = content.replace(/property="([^"]*?)\s*$/gm, 'property="$1"');
  
  // Fix broken className patterns
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([a-z][^"]*?)"/g, 'className="$1 $2"');
  
  // Fix any remaining semicolons in JSX attributes
  content = content.replace(/className="([^"]*?);\s*([^"]*?)"/g, 'className="$1 $2"');
  content = content.replace(/content="([^"]*?);\s*([^"]*?)"/g, 'content="$1 $2"');
  content = content.replace(/name="([^"]*?);\s*([^"]*?)"/g, 'name="$1 $2"');
  
  // Fix broken closing tags with missing quotes
  content = content.replace(/<div className="([^"]*?)\s*$/gm, '<div className="$1">');
  content = content.replace(/<h1 className="([^"]*?)\s*$/gm, '<h1 className="$1">');
  content = content.replace(/<section className="([^"]*?)\s*$/gm, '<section className="$1">');
  
  // Fix broken closing tags with missing closing bracket
  content = content.replace(/<div([^>]*?)\s*$/gm, '<div$1>');
  content = content.replace(/<h1([^>]*?)\s*$/gm, '<h1$1>');
  content = content.replace(/<section([^>]*?)\s*$/gm, '<section$1>');
  
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
        
        content = fixAllIssues(content);
        
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
console.log('Starting comprehensive fixes...');
fixFilesInDirectory('./app');
fixFilesInDirectory('./components');
fixFilesInDirectory('./src');
console.log('Comprehensive fixes completed!');