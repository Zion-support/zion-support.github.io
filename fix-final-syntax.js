const fs = require('fs');
const path = require('path');

// Function to fix final syntax issues
function fixFinalSyntax(content) {
  // Remove stray single quotes on their own lines
  content = content.replace(/^\s*'\s*$/gm, '');
  
  // Fix mixed quotes in object properties
  content = content.replace(/(\w+):\s*"([^"]*)',/g, '$1: "$2",');
  content = content.replace(/(\w+):\s*'([^']*)",/g, "$1: '$2',");
  
  // Fix unterminated strings in object properties
  content = content.replace(/(\w+):\s*"([^"]*)\n/g, '$1: "$2"\n');
  content = content.replace(/(\w+):\s*'([^']*)\n/g, "$1: '$1'\n");
  
  // Fix malformed object closing
  content = content.replace(/\}\}'/g, '}});
  content = content.replace(/\}\}"/g, '}});
  
  // Fix stray quotes in JSX attributes
  content = content.replace(/className="([^"]*)"\n/g, 'className="$1"\n');
  content = content.replace(/className='([^']*)'\n/g, "className='$1'\n");
  
  // Fix unterminated strings in JSX
  content = content.replace(/className="([^"]*)\n/g, 'className="$1"\n');
  content = content.replace(/className='([^']*)\n/g, "className='$1'\n");
  
  // Fix empty lines with just quotes
  content = content.replace(/^\s*['"]\s*$/gm, '');
  
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
        
        content = fixFinalSyntax(content);
        
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
console.log('Starting final syntax fixes...');
fixFilesInDirectory('/workspace');
console.log('Final syntax fixes completed!');