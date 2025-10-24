const fs = require('fs');
const path = require('path');

function fixRemainingJSX(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix specific JSX structure issues
    content = content
      // Fix self-closing divs that should contain content
      .replace(/<div([^>]*)\s*>\s*<\/div>\s*<div([^>]*)\s*>\s*([^<]+)\s*<\/div>/g, '<div$1>$3</div>')
      
      // Fix broken JSX structure where content is outside divs
      .replace(/<div([^>]*)\s*>\s*<\/div>\s*([^<]+)\s*<div([^>]*)\s*>\s*([^<]+)\s*<\/div>/g, '<div$1>$2$4</div>')
      
      // Fix missing closing tags for fragments
      .replace(/<>\s*([^<]*(?:<[^>]*>[^<]*)*?)\s*$/gm, (match, content) => {
        if (!content.includes('</>')) {
          return `<>${content}</>`;
        }
        return match;
      })
      
      // Fix trailing spaces in className attributes
      .replace(/className="([^"]*)\s+"/g, 'className="$1"')
      
      // Fix missing commas in arrays
      .replace(/(\w+)\s*\n\s*\]/g, '$1,\n  ]')
      
      // Fix missing closing brackets in arrays
      .replace(/(\w+)\s*\}\s*<\/div>\s*\]/g, '$1}\n              ]')
      
      // Fix broken array structure
      .replace(/(\w+)\s*\}\s*<\/div>\s*\]\.map/g, '$1}\n              ].map')
      
      // Fix missing closing parentheses in function calls
      .replace(/(\w+)\s*\(\s*([^)]*)\s*\n/g, '$1($2)\n')
      
      // Fix missing semicolons in JSX
      .replace(/(\w+)\s*\(\s*\)\s*=>\s*\{([^}]+)\}\s*$/gm, (match, funcName, body) => {
        if (!body.trim().includes('return')) {
          return `${funcName} = () => {\n  return ${body.trim()};\n}`;
        }
        return match;
      });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining JSX: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing remaining JSX in ${filePath}:`, error.message);
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
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixRemainingJSX(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting remaining JSX fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed remaining JSX in ${fixedCount} files in app directory`);

const srcFixedCount = walkDirectory('./src');
console.log(`Fixed remaining JSX in ${srcFixedCount} files in src directory`);

console.log('Remaining JSX fixes completed!');