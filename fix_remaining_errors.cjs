const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  // Fix malformed object literals in JSX
  content = content.replace(/\{\}\];\s*\]/g, '];');
  content = content.replace(/\{\}\];\s*;\s*\]/g, '];');
  
  // Fix malformed array declarations
  content = content.replace(/}];\s*;\s*\]/g, '}];');
  content = content.replace(/}];\s*\]/g, '}];');
  
  // Fix malformed object properties in JSX
  content = content.replace(/benefits:\s*\[[^\]]*\]\},/g, '');
  content = content.replace(/description:\s*'[^']*'\}\];\s*;\s*\]/g, '}];');
  
  // Fix malformed className attributes
  content = content.replace(/className="([^"]*?)\s+([^"]*?)"/g, 'className="$1$2"');
  
  // Fix malformed closing tags
  content = content.replace(/<\/\s*>/g, '</>');
  
  // Fix malformed return statements
  content = content.replace(/return\s*\(\s*<[^>]*>\s*\)\s*<\/[^>]*>/g, (match) => {
    return match.replace(/return\s*\(\s*<([^>]*)>\s*\)\s*<\/[^>]*>/, 'return (<$1>');
  });
  
  // Fix extra commas in object literals
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/,\s*]/g, ']');
  
  // Fix malformed template literals
  content = content.replace(/`\s*}'`/g, '`}');
  content = content.replace(/`\s*}\s*`/g, '`}');
  
  // Fix malformed array elements
  content = content.replace(/];\s*;\s*\]/g, '];');
  content = content.replace(/];\s*\]/g, '];');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*?)\s+([^"]*?)"/g, 'className="$1$2"');
  
  // Fix malformed closing tags
  content = content.replace(/<\s*\/\s*>/g, '</>');
  
  // Fix malformed grid classes
  content = content.replace(/grid-cols-1\s+md:\s+grid-cols-2/g, 'grid-cols-1 md:grid-cols-2');
  
  // Fix malformed return statements with fragments
  content = content.replace(/return\s*\(\s*<[^>]*>\s*\)\s*<\/[^>]*>\s*return\s*\(/g, 'return (');
  
  // Fix malformed Helmet tags
  content = content.replace(/<Helmet\s*\/>\s*<title>/g, '<Helmet><title>');
  
  // Fix malformed array elements
  content = content.replace(/,\s*\]\s*const\s+(\w+)\s*=\s*\[/g, '];\n  const $1 = [');
  
  // Fix specific patterns found in the errors
  content = content.replace(/benefits:\s*\[[^\]]*\]\},/g, '');
  content = content.replace(/description:\s*'[^']*'\}\];\s*;\s*\]/g, '}];');
  content = content.replace(/max-w-7xlmx-auto/g, 'max-w-7xl mx-auto');
  content = content.replace(/text-centermb-16/g, 'text-center mb-16');
  content = content.replace(/text-4xlfont-bold/g, 'text-4xl font-bold');
  
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
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixRemainingErrors(content);
        
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
console.log('Starting remaining syntax error fixes...');
fixFilesInDirectory('./app');
console.log('Remaining syntax error fixes completed!');
