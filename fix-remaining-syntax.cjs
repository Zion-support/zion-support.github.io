const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax issues
function fixRemainingSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed features array - missing opening brace
    if (content.includes('icon: Volume2,') && content.includes('title: \'Audio Accessibility\',')) {
      content = content.replace(
        /(\s+icon: Volume2,\s*title: 'Audio Accessibility',\s*description: '[^']*',\s*)\];/g,
        '$1\n    }\n  ];'
      );
      modified = true;
    }
    
    // Fix malformed features array - missing opening brace for BarChart
    if (content.includes('icon: BarChart,') && content.includes('title: \'Advanced Analytics\',')) {
      content = content.replace(
        /(\s+icon: BarChart,\s*title: 'Advanced Analytics',\s*description: '[^']*',\s*)\]/g,
        '$1\n    }\n  ]'
      );
      modified = true;
    }
    
    // Fix extra closing braces at the end of files
    if (content.includes('export default') && content.includes('\n\n}\n')) {
      content = content.replace(/\n\n}\n$/, '\n');
      modified = true;
    }
    
    // Fix missing opening brace in features array
    content = content.replace(
      /const features = \[\s*icon: (\w+),\s*title: '([^']*)',\s*description: '([^']*)',\s*\]/g,
      'const features = [\n    {\n      icon: $1,\n      title: \'$2\',\n      description: \'$3\'\n    }\n  ]'
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
    
    // Remove extra closing braces at the end
    content = content.replace(/\n\n}\s*$/, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed remaining syntax: ${filePath}`);
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

console.log(`Found ${tsxFiles.length} page.tsx files to check for remaining syntax issues`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixRemainingSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed remaining syntax issues in ${fixedCount} files`);