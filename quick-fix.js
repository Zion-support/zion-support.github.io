const fs = require('fs');
const path = require('path');

function quickFix(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common issues
    content = content
      // Fix HTML entities in imports
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      
      // Fix missing semicolons after "use client"
      .replace(/"use client",\s*\n/g, '"use client";\n')
      
      // Fix interface property syntax
      .replace(/(\w+):\s*(\w+);,\s*\n/g, '$1: $2;\n')
      .replace(/(\w+):\s*(\w+);\s*\n/g, '$1: $2;\n')
      
      // Fix missing semicolons in interfaces
      .replace(/(\w+)\s*:\s*(\w+)\s*\n/g, '$1: $2;\n')
      
      // Fix duplicate semicolons
      .replace(/;;/g, ';')
      
      // Fix missing commas in arrays
      .replace(/(\w+)\s*\n\s*\]/g, '$1,\n  ]')
      
      // Fix missing closing tags
      .replace(/<div([^>]*)>\s*([^<]*)\s*$/gm, '<div$1>$2</div>')
      
      // Fix JSX attribute syntax
      .replace(/className\s*=\s*"([^"]*)\s*([^"]*)"/g, 'className="$1 $2"')
      
      // Fix missing return statements
      .replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{([^}]+)\}\s*$/gm, (match, funcName, body) => {
        if (!body.trim().includes('return')) {
          return `const ${funcName} = () => {\n  return ${body.trim()};\n}`;
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
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (quickFix(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting quick fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files in app directory`);

const srcFixedCount = walkDirectory('./src');
console.log(`Fixed ${srcFixedCount} files in src directory`);

console.log('Quick fixes completed!');