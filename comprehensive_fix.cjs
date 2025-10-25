const fs = require('fs');
const path = require('path');

// Function to fix complex syntax errors
function fixComplexSyntaxErrors(content) {
  // Fix malformed JSX with extra characters
  content = content.replace(/,\s*-\s*>\s*([^<]*?)\s*`\s*-\s*>\s*/g, '');
  content = content.replace(/,\s*-\s*>\s*([^<]*?)\s*`\s*-\s*>\s*/g, '');
  
  // Fix malformed h2 tags
  content = content.replace(/<h2 className="([^"]*?)">,<\/h2>\s*([^<]*?)\s*<\/h2>/g, '<h2 className="$1">$2</h2>');
  
  // Fix malformed p tags
  content = content.replace(/<p className="([^"]*?)">([^<]*?)<\/p>\s*<\/p>/g, '<p className="$1">$2</p>');
  
  // Fix malformed ul/li tags
  content = content.replace(/<\/ul><li>/g, '<li>');
  content = content.replace(/<li>([^<]*?)<\/li>\s*<\/ul>/g, '<li>$1</li></ul>');
  
  // Fix malformed div tags
  content = content.replace(/<\/div><div/g, '<div');
  content = content.replace(/<\/div><\/div>/g, '</div>');
  
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
  
  // Fix malformed array declarations
  content = content.replace(/];\s*];\s*];\s*\]/g, '];');
  content = content.replace(/];\s*];\s*\]/g, '];');
  
  // Fix malformed function calls
  content = content.replace(/const\s+(\w+)\s*=\s*(\w+)\.map\((\w+)\s*=>\s*\(\s*{\)/g, 'const $1 = $2.map($3 => ({');
  
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
        
        content = fixComplexSyntaxErrors(content);
        
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
console.log('Starting comprehensive syntax error fixes...');
fixFilesInDirectory('./app');
console.log('Comprehensive syntax error fixes completed!');
