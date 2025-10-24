const fs = require('fs');
const path = require('path');

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix JSX structure issues
    content = content
      // Fix self-closing divs that should have content
      .replace(/<div([^>]*)\s*>\s*<\/div>/g, (match, attrs) => {
        // Only fix if it's not intentionally empty
        if (!attrs.includes('className') || attrs.includes('mb-') || attrs.includes('mt-') || attrs.includes('p-') || attrs.includes('m-')) {
          return match;
        }
        return match;
      })
      
      // Fix missing closing tags for fragments
      .replace(/<>\s*([^<]*(?:<[^>]*>[^<]*)*?)\s*$/gm, (match, content) => {
        if (!content.includes('</>')) {
          return `<>${content}</>`;
        }
        return match;
      })
      
      // Fix broken JSX structure - divs that are self-closing but should contain content
      .replace(/<div([^>]*)\s*>\s*<\/div>\s*<div([^>]*)\s*>\s*([^<]+)\s*<\/div>/g, '<div$1>$3</div>')
      
      // Fix missing closing tags for divs
      .replace(/<div([^>]*)\s*>\s*([^<]+)\s*$/gm, '<div$1>$2</div>')
      
      // Fix JSX attribute syntax issues
      .replace(/className\s*=\s*"([^"]*)\s*([^"]*)"/g, 'className="$1 $2"')
      
      // Fix missing semicolons in JSX
      .replace(/(\w+)\s*\(\s*\)\s*=>\s*\{([^}]+)\}\s*$/gm, (match, funcName, body) => {
        if (!body.trim().includes('return')) {
          return `${funcName} = () => {\n  return ${body.trim()};\n}`;
        }
        return match;
      });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX structure: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing JSX structure in ${filePath}:`, error.message);
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
      if (fixJSXStructure(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting JSX structure fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed JSX structure in ${fixedCount} files in app directory`);

const srcFixedCount = walkDirectory('./src');
console.log(`Fixed JSX structure in ${srcFixedCount} files in src directory`);

console.log('JSX structure fixes completed!');