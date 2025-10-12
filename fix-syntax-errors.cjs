const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix common syntax errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix function names starting with numbers
    const functionNameRegex = /export default function (\d+[A-Za-z]+)\(\)/g;
    const matches = content.match(functionNameRegex);
    if (matches) {
      matches.forEach(match => {
        const functionName = match.match(/export default function (\d+[A-Za-z]+)\(\)/)[1];
        const newFunctionName = 'A' + functionName; // Prefix with 'A' to make it valid
        content = content.replace(new RegExp(functionName, 'g'), newFunctionName);
        modified = true;
      });
    }
    
    // Fix missing opening braces in arrays
    content = content.replace(/const \w+ = \[\s*\{/g, (match) => {
      if (!match.includes('[')) {
        return match.replace('= [', '= [\n    {');
      }
      return match;
    });
    
    // Fix missing closing braces in arrays
    content = content.replace(/\}\s*\]/g, '}\n  ]');
    
    // Fix malformed JSX
    content = content.replace(/<title \/>([^<]+)<\/title>/g, '<title>$1</title>');
    
    // Fix malformed className attributes
    content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');
    
    // Fix missing quotes in className
    content = content.replace(/className=([^"'][^"'>\s]+)/g, 'className="$1"');
    
    // Fix malformed Link components
    content = content.replace(/<Link\s+to="([^"]+)"\s+className="([^"]+)"\s*>\s*([^<]+)\s*<\/Link>/g, '<Link to="$1" className="$2">$3</Link>');
    
    // Fix missing semicolons in object properties
    content = content.replace(/(\w+):\s*([^,}\n]+)\s*\n/g, '$1: $2,\n');
    
    // Fix missing commas in arrays
    content = content.replace(/(\w+):\s*([^,}\n]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*<>\s*<title\s*\/>/g, 'return (\n    <>\n      <Helmet>\n        <title>');
    
    // Fix missing closing tags
    content = content.replace(/<title>([^<]+)<\/title>\s*<\/Helmet>/g, '<title>$1</title>\n      </Helmet>');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting syntax error fixes...');

const appDir = './app';
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

// Run linting to check remaining errors
console.log('Running linting...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
} catch (error) {
  console.log('Linting completed with some remaining errors');
}