const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Common fixes for syntax errors
const fixes = [
  // Fix unescaped entities
  {
    pattern: /'/g,
    replacement: '&apos;',
    description: 'Fix unescaped apostrophes'
  },
  // Fix merge conflict markers
  {
    pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g,
    replacement: '',
    description: 'Remove merge conflict markers'
  },
  // Fix common JSX syntax issues
  {
    pattern: /(\w+)\s*=\s*{([^}]*?)}\s*>/g,
    replacement: '$1={$2}>',
    description: 'Fix JSX attribute spacing'
  },
  // Fix missing semicolons in imports
  {
    pattern: /import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*(?!;)/g,
    replacement: 'import $1 from \'$2\';',
    description: 'Add missing semicolons to imports'
  },
  // Fix common parsing errors
  {
    pattern: /(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g,
    replacement: '$1 = () => {',
    description: 'Fix arrow function syntax'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`Applied fix: ${fix.description} to ${filePath}`);
      }
    });
    
    // Additional specific fixes
    // Fix common JSX closing tag issues
    if (content.includes('</div>') && !content.includes('<div')) {
      content = content.replace(/<\/div>/g, '');
    }
    
    // Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fixFile(filePath);
    }
  });
}

console.log('Starting syntax error fixes...');
walkDirectory('./app');
walkDirectory('./src');
console.log('Syntax error fixes completed!');
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-75df
