const fs = require('fs');
const path = require('path');

// Function to fix return syntax issues
function fixReturnSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed return statements
    if (content.includes('return(<>')) {
      content = content.replace(/return\(\<\>/g, 'return (\n    <>');
      modified = true;
    }
    
    // Fix malformed Helmet usage
    if (content.includes('<Helmet />')) {
      content = content.replace(/<Helmet \/>/g, '');
      modified = true;
    }
    
    // Fix malformed Helmet tags
    content = content.replace(/<\/Helmet><title>/g, '<title>');
    content = content.replace(/<\/Helmet>/g, '');
    
    // Fix semicolon instead of comma in arrays
    content = content.replace(
      /(\s*'[^']*')\s*;\s*\n\s*\]/g,
      '$1,\n  ]'
    );
    
    // Remove extra closing braces at the end of files
    if (content.includes('export default') && content.includes('\n\n}\n')) {
      content = content.replace(/\n\n}\s*$/, '');
      modified = true;
    }
    
    // Fix malformed features array - missing opening brace
    content = content.replace(
      /const features = \[\s*icon: (\w+),\s*title: '([^']*)',\s*description: '([^']*)',\s*\]/g,
      'const features = [\n    {\n      icon: $1,\n      title: \'$2\',\n      description: \'$3\'\n    }\n  ]'
    );
    
    // Fix malformed features array - missing opening brace for specific patterns
    content = content.replace(
      /(\s+icon: \w+,\s*title: '[^']*',\s*description: '[^']*',\s*)\]/g,
      '$1\n    }\n  ]'
    );
    
    // Fix missing opening brace in benefits array
    content = content.replace(
      /const benefits = \[\s*'([^']*)',/g,
      'const benefits = [\n    \'$1\','
    );
    
    // Fix missing closing brace in benefits array
    content = content.replace(
      /(\s*'[^']*',\s*)\];/g,
      '$1\n  ];'
    );
    
    // Fix malformed object properties
    content = content.replace(
      /(\s+icon: \w+,\s*)\n\s*title: '([^']*)',/g,
      '$1\n      title: \'$2\','
    );
    
    content = content.replace(
      /(\s+title: '[^']*',\s*)\n\s*description: '([^']*)',/g,
      '$1\n      description: \'$2\','
    );
    
    // Fix missing commas in arrays
    content = content.replace(
      /(\s+description: '[^']*')\s*\n\s*\]/g,
      '$1\n    }\n  ]'
    );
    
    // Fix duplicate closing brackets
    content = content.replace(/\}\s*\]\s*\]/g, '}\n  ]');
    
    // Remove any remaining extra closing braces
    content = content.replace(/\n\n}\s*$/, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed return syntax: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} page.tsx files to check for return syntax issues`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixReturnSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed return syntax issues in ${fixedCount} files`);