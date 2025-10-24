const fs = require('fs');
const path = require('path');

// Function to fix critical syntax errors
function fixCriticalErrors(content) {
  let fixed = content;
  
  // Fix malformed imports - split multiple imports on same line
  fixed = fixed.replace(/import\s+([^;]+);import\s+([^;]+);/g, "import $1;\nimport $2;");
  
  // Fix malformed metadata objects
  fixed = fixed.replace(/export\s+const\s+metadata:\s*Metadata\s*=\s*\{([^}]+)\};\s*;/g, (match, content) => {
    // Clean up the metadata content
    let cleanContent = content
      .replace(/title:\s*'([^']+)',\s*;\s*description:\s*'([^']+)',\s*;\s*keywords:\s*'([^']+)',\s*;\s*openGraph:\s*\{([^}]+)\},\s*;/g, 
        "title: '$1',\n  description: '$2',\n  keywords: '$3',\n  openGraph: {\n    $4\n  },");
    return `export const metadata: Metadata = {\n  ${cleanContent}\n};`;
  });
  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+([A-Za-z]+)\s*=\s*\(\)\s*=>\s*\{([^}]+)\}/g, (match, name, body) => {
    // Clean up the function body
    let cleanBody = body
      .replace(/\{([^}]+);\s*title:\s*'([^']+)',\s*;\s*description:\s*'([^']+)',\s*;\s*icon:\s*([^,]+),;\s*color:\s*'([^']+)',;\s*\}/g, 
        "{\n      icon: $4,\n      title: '$2',\n      description: '$3',\n      color: '$5'\n    }");
    return `const ${name} = () => {\n  ${cleanBody}\n}`;
  });
  
  // Fix malformed JSX
  fixed = fixed.replace(/<div\s+className="([^"]+)"\s*;\s*([^>]+)>/g, '<div className="$1" $2>');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*;\s*<div/g, 'return (\n    <div');
  
  // Fix malformed object properties
  fixed = fixed.replace(/\{\s*icon:\s*([^,]+),;\s*title:\s*'([^']+)',\s*;\s*description:\s*'([^']+)',\s*;\s*color:\s*'([^']+)',;\s*\}/g, 
    "{\n    icon: $1,\n    title: '$2',\n    description: '$3',\n    color: '$4'\n  }");
  
  // Fix malformed array syntax
  fixed = fixed.replace(/\[\s*\{\s*([^}]+);\s*\}/g, '[\n    {\n      $1\n    }');
  
  // Fix malformed string literals
  fixed = fixed.replace(/'([^']+)',\s*;\s*([^;]+);/g, "'$1',\n    $2");
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCriticalErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      if (processFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting critical error fixes...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files.`);
