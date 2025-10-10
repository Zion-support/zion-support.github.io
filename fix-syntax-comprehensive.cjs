const fs = require('fs');
const path = require('path');

// Find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.includes('node_modules') && !item.startsWith('.')) {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common patterns
    // Remove semicolons after opening braces
    content = content.replace(/\{\s*;/g, '{');
    
    // Remove semicolons before closing braces
    content = content.replace(/;\s*\}/g, '}');
    
    // Fix function declarations
    content = content.replace(/const\s+([a-zA-Z_][a-zA-Z0-9_]*):\s*React\.FC\s*=\s*\(\)\s*=>\s*{;/g, 'const $1: React.FC = () => {');
    
    // Fix object properties with semicolons
    content = content.replace(/icon:\s*([a-zA-Z_][a-zA-Z0-9_]*),;/g, 'icon: $1,');
    content = content.replace(/title:\s*'([^']*)',;/g, "title: '$1',");
    content = content.replace(/description:\s*'([^']*)',;/g, "description: '$1',");
    
    // Fix array elements
    content = content.replace(/benefits:\s*\[/g, 'benefits: [');
    content = content.replace(/'([^']*)',;/g, "'$1',");
    
    // Fix JSX attributes
    content = content.replace(/className="([^"]*)",;/g, 'className="$1"');
    content = content.replace(/size="([^"]*)",;/g, 'size="$1"');
    content = content.replace(/text="([^"]*)",;/g, 'text="$1"');
    
    // Fix return statements
    content = content.replace(/return\s*\(;/g, 'return (');
    
    // Fix JSX elements
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>,;/g, '<$1>');
    content = content.replace(/<\/([a-zA-Z][a-zA-Z0-9]*)>,;/g, '</$1>');
    
    // Remove standalone semicolons on their own lines
    content = content.replace(/^\s*;\s*$/gm, '');
    
    // Fix malformed regex patterns that got corrupted
    content = content.replace(/title:\s*'\[[^']*\]',/g, "title: '5G Network Design',");
    content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Complete 5G network design and implementation with optimal coverage and performance.',");
    
    // Clean up any remaining double semicolons
    content = content.replace(/;;+/g, ';');
    
    // Clean up any remaining semicolons before closing braces
    content = content.replace(/;\s*\}/g, '}');
    
    // Clean up any remaining semicolons after opening braces
    content = content.replace(/\{\s*;/g, '{');
    
    // Fix specific patterns for 5G implementation page
    if (filePath.includes('5g-implementation')) {
      content = content.replace(/title:\s*'\[[^']*\]',/g, "title: '5G Network Design',");
      content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Complete 5G network design and implementation with optimal coverage and performance.',");
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive syntax fixes...');

const files = findFiles('/workspace');
console.log(`Found ${files.length} files to process`);

let processedCount = 0;
let fixedCount = 0;

for (const file of files) {
  processedCount++;
  if (processedCount % 100 === 0) {
    console.log(`Processed ${processedCount}/${files.length} files...`);
  }
  
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Completed! Processed ${processedCount} files, fixed ${fixedCount} files.`);