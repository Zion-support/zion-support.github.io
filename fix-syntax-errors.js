const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix common JSX syntax issues
  content = content.replace(/className="([^"]*?)\s+([^"]*?)"/g, 'className="$1 $2"');
  content = content.replace(/className="([^"]*?)([a-zA-Z])([a-zA-Z])/g, 'className="$1 $2$3"');
  
  // Fix missing spaces in className
  content = content.replace(/className="([^"]*?)([a-z])([A-Z])/g, 'className="$1 $2$3"');
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\/div>\s*<\/div>/g, '</div>');
  content = content.replace(/<\/div>\s*<\/div>\s*<\/div>/g, '</div>');
  
  // Fix missing closing tags
  content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
  
  // Fix extra commas in JSX
  content = content.replace(/,\s*<\/div>/g, '</div>');
  content = content.replace(/,\s*<\/section>/g, '</section>');
  content = content.replace(/,\s*<\/header>/g, '</header>');
  
  // Fix malformed function calls
  content = content.replace(/className="([^"]*?)hover:([^"]*?)"/g, 'className="$1 hover:$2"');
  
  // Fix missing spaces in template literals
  content = content.replace(/`([^`]*?)([a-zA-Z])([A-Z])/g, '`$1 $2$3');
  
  // Fix malformed arrow functions
  content = content.replace(/=>\s*{([^}]*?)\s*}/g, '=> {\n$1\n}');
  
  // Fix missing semicolons
  content = content.replace(/([a-zA-Z0-9])\s*$/gm, '$1;');
  
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
        
        content = fixSyntaxErrors(content);
        
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
console.log('Starting syntax error fixes...');
fixFilesInDirectory('./app');
fixFilesInDirectory('./components');
fixFilesInDirectory('./src');
console.log('Syntax error fixes completed!');