const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix "use client" directive - add semicolon if missing
  fixed = fixed.replace(/"use client",\n/g, '"use client";\n');
  fixed = fixed.replace(/'use client',\n/g, "'use client";\n');

  // Fix interface definitions - add missing closing braces
  fixed = fixed.replace(/interface\s+(\w+)\s*\{([^}]*?)(\n\s*const|\n\s*function|\n\s*export|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, (match, name, body, next) => {
    if (!body.trim().endsWith('}')) {
      return `interface ${name} {${body}\n}\n${next}`;
    }
    return match;
  });

  // Fix class definitions - add missing closing braces
  fixed = fixed.replace(/class\s+(\w+)[^{]*\{([^}]*?)(\n\s*const|\n\s*function|\n\s*export|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, (match, name, body, next) => {
    if (!body.trim().endsWith('}')) {
      return `class ${name} {${body}\n}\n${next}`;
    }
    return match;
  });

  // Fix extra commas in interface properties
  fixed = fixed.replace(/(\w+):\s*([^;,\n]+),(\s*\n\s*[a-zA-Z_])/g, '$1: $2;\n$3');
  fixed = fixed.replace(/(\w+):\s*([^;,\n]+),(\s*\n\s*})/g, '$1: $2;\n$3');

  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(\w+):\s*([^;,\n]+)(\s*\n\s*[a-zA-Z_])/g, '$1: $2;\n$3');
  fixed = fixed.replace(/(\w+):\s*([^;,\n]+)(\s*\n\s*})/g, '$1: $2;\n$3');

  // Fix unterminated string literals
  fixed = fixed.replace(/(\w+):\s*"([^"]*?)(\n\s*[a-zA-Z_])/g, '$1: "$2";\n$3');
  fixed = fixed.replace(/(\w+):\s*'([^']*?)(\n\s*[a-zA-Z_])/g, "$1: '$2';\n$3");

  // Fix JSX closing tag issues
  fixed = fixed.replace(/<(\w+)([^>]*?)>([^<]*?)<\/\1>/g, '<$1$2>$3</$1>');

  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/(\w+)\s*\(([^)]*?)(\n\s*[a-zA-Z_])/g, '$1($2);\n$3');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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

// Function to recursively find and process TypeScript/TSX files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);