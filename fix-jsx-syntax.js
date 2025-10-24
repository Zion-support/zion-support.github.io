const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues
function fixJsxSyntax(content) {
  // Fix malformed JSX attributes with mixed quotes
  content = content.replace(/className="([^"]*)"\n/g, 'className="$1"\n');
  content = content.replace(/className='([^']*)'\n/g, "className='$1'\n");
  
  // Fix unterminated JSX attributes
  content = content.replace(/className="([^"]*)\n/g, 'className="$1"\n');
  content = content.replace(/className='([^']*)\n/g, "className='$1'\n");
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\/h1>''\n/g, '</h1>\n');
  content = content.replace(/<\/h1>""\n/g, '</h1>\n');
  content = content.replace(/<\/div>''\n/g, '</div>\n');
  content = content.replace(/<\/div>""\n/g, '</div>\n');
  content = content.replace(/<\/p>''\n/g, '</p>\n');
  content = content.replace(/<\/p>""\n/g, '</p>\n');
  
  // Fix malformed JSX text content
  content = content.replace(/>([^<]*);''\n/g, '>$1\n');
  content = content.replace(/>([^<]*);""\n/g, '>$1\n');
  
  // Fix stray quotes in JSX
  content = content.replace(/>''\n/g, '>\n');
  content = content.replace(/>""\n/g, '>\n');
  
  // Fix malformed object properties in JSX
  content = content.replace(/(\w+):\s*"([^"]*)',/g, '$1: "$2",');
  content = content.replace(/(\w+):\s*'([^']*)",/g, "$1: '$2',");
  
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
        
        content = fixJsxSyntax(content);
        
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
console.log('Starting JSX syntax fixes...');
fixFilesInDirectory('/workspace');
console.log('JSX syntax fixes completed!');