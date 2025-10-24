const fs = require('fs');
const path = require('path');

// Function to fix syntax issues in page files
function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 'use client' directive placement
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      const lines = content.split('\n');
      const useClientIndex = lines.findIndex(line => line.includes("'use client'"));
      if (useClientIndex > 0) {
        const useClientLine = lines[useClientIndex];
        lines.splice(useClientIndex, 1);
        lines.unshift(useClientLine);
        content = lines.join('\n');
        modified = true;
      }
    }
    
    // Fix malformed features arrays
    if (content.includes('const features = [')) {
      // Fix missing opening brace in features array
      content = content.replace(
        /const features = \[\s*icon: (\w+),/g,
        'const features = [\n    {\n      icon: $1,'
      );
      
      // Fix missing closing brace in features array
      content = content.replace(
        /(\s+description: '[^']*',\s*)\];/g,
        '$1\n    }\n  ];'
      );
      
      // Fix malformed features array structure
      content = content.replace(
        /const features = \[\s*{\s*icon: (\w+),\s*title: '([^']*)',\s*description: '([^']*)',\s*}\s*\]/g,
        'const features = [\n    {\n      icon: $1,\n      title: \'$2\',\n      description: \'$3\'\n    }\n  ]'
      );
      
      modified = true;
    }
    
    // Fix malformed benefits arrays
    if (content.includes('const benefits = [')) {
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
      
      modified = true;
    }
    
    // Fix missing closing braces in general
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missing = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missing);
      modified = true;
    }
    
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
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax: ${filePath}`);
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

console.log(`Found ${tsxFiles.length} page.tsx files to check for syntax issues`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixSyntaxIssues(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax issues in ${fixedCount} files`);