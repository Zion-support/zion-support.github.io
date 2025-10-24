const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix "use client" directive
    content = content.replace(/"use client",\n/g, '"use client";\n');
    content = content.replace(/'use client',\n/g, "'use client";\n');

    // Fix interface definitions with missing closing braces
    content = content.replace(/interface\s+(\w+)\s*\{([^}]*?)(\n\s*const|\n\s*function|\n\s*export|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, (match, name, body, next) => {
      if (!body.trim().endsWith('}')) {
        return `interface ${name} {${body}\n}\n${next}`;
      }
      return match;
    });

    // Fix class definitions with missing closing braces
    content = content.replace(/class\s+(\w+)[^{]*\{([^}]*?)(\n\s*const|\n\s*function|\n\s*export|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, (match, name, body, next) => {
      if (!body.trim().endsWith('}')) {
        return `class ${name} {${body}\n}\n${next}`;
      }
      return match;
    });

    // Fix extra commas in interface properties
    content = content.replace(/(\w+):\s*([^;,\n]+),(\s*\n\s*[a-zA-Z_])/g, '$1: $2;\n$3');
    content = content.replace(/(\w+):\s*([^;,\n]+),(\s*\n\s*})/g, '$1: $2;\n$3');

    // Fix missing semicolons after variable declarations
    content = content.replace(/(\w+):\s*([^;,\n]+)(\s*\n\s*[a-zA-Z_])/g, '$1: $2;\n$3');
    content = content.replace(/(\w+):\s*([^;,\n]+)(\s*\n\s*})/g, '$1: $2;\n$3');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (fixFile(fullPath)) {
          fixedCount++;
          console.log(`Fixed: ${fullPath}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

console.log('Starting syntax fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);