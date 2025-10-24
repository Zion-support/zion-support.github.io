const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix "use client" directive issues
    content = content
      .replace(/"use client",\s*\n/g, '"use client";\n')
      .replace(/'use client',\s*\n/g, "'use client";\n")
      .replace(/"use client";\s*\n\s*"use client";/g, '"use client";')
      .replace(/'use client';\s*\n\s*'use client';/g, "'use client';")
      
      // Fix missing semicolons in interface properties
      .replace(/(\w+)\s*:\s*(\w+)\s*\n/g, '$1: $2;\n')
      
      // Fix object property syntax
      .replace(/(\w+):\s*(\w+)\s*,\s*\n\s*(\w+):/g, '$1: $2,\n    $3:')
      
      // Fix missing commas in object literals
      .replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:')
      
      // Fix duplicate imports
      .replace(/import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]([^'"]+)['"];\s*\n\s*import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]\2['"];/g, (match, imports1, module, imports2) => {
        const allImports = [...new Set([...imports1.split(','), ...imports2.split(',')])]
          .map(imp => imp.trim())
          .filter(imp => imp)
          .join(', ');
        return `import { ${allImports} } from '${module}';`;
      })
      
      // Fix missing semicolons in variable declarations
      .replace(/(const|let|var)\s+(\w+)\s*=\s*([^;]+)\s*\n/g, (match, declaration, varName, value) => {
        if (!value.trim().endsWith(';') && !value.trim().endsWith('}')) {
          return `${declaration} ${varName} = ${value};\n`;
        }
        return match;
      })
      
      // Fix JSX attribute syntax
      .replace(/className\s*=\s*"([^"]*)\s*([^"]*)"/g, 'className="$1 $2"')
      
      // Fix missing commas in arrays
      .replace(/(\w+)\s*\n\s*\]/g, '$1,\n  ]')
      
      // Fix missing closing parentheses
      .replace(/(\w+)\s*\(\s*([^)]*)\s*\n/g, '$1($2)\n')
      
      // Fix missing semicolons in object methods
      .replace(/(\w+)\s*\(\s*[^)]*\)\s*\{([^}]+)\}\s*\n/g, (match, methodName, body) => {
        if (!body.trim().endsWith(';')) {
          return match.replace(/\}\s*$/, '};\n');
        }
        return match;
      });
    
    if (content !== originalContent) {
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

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Start fixing
console.log('Starting syntax error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files in app directory`);

const srcFixedCount = walkDirectory('./src');
console.log(`Fixed ${srcFixedCount} files in src directory`);

console.log('Syntax error fixes completed!');