const fs = require('fs');
const path = require('path');

function fixReturnStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing space in return statements
    content = content
      // Fix return(<JSX> to return (<JSX>
      .replace(/return\(<>/g, 'return (<>')
      .replace(/return\(<div/g, 'return (<div')
      .replace(/return\(<section/g, 'return (<section')
      .replace(/return\(<main/g, 'return (<main')
      .replace(/return\(<article/g, 'return (<article')
      .replace(/return\(<header/g, 'return (<header')
      .replace(/return\(<footer/g, 'return (<footer')
      .replace(/return\(<nav/g, 'return (<nav')
      .replace(/return\(<aside/g, 'return (<aside')
      
      // Fix self-closing divs that should contain content
      .replace(/<div([^>]*)\s*>\s*<\/div>\s*<div([^>]*)\s*>\s*([^<]+)\s*<\/div>/g, '<div$1>$3</div>')
      
      // Fix broken JSX structure where content is outside divs
      .replace(/<div([^>]*)\s*>\s*<\/div>\s*([^<]+)\s*<div([^>]*)\s*>\s*([^<]+)\s*<\/div>/g, '<div$1>$2$4</div>')
      
      // Fix trailing spaces in className attributes
      .replace(/className="([^"]*)\s+"/g, 'className="$1"')
      
      // Fix missing closing tags for fragments
      .replace(/<>\s*([^<]*(?:<[^>]*>[^<]*)*?)\s*$/gm, (match, content) => {
        if (!content.includes('</>')) {
          return `<>${content}</>`;
        }
        return match;
      });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed return statements: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing return statements in ${filePath}:`, error.message);
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
      if (fixReturnStatements(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting return statement fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed return statements in ${fixedCount} files in app directory`);

const srcFixedCount = walkDirectory('./src');
console.log(`Fixed return statements in ${srcFixedCount} files in src directory`);

console.log('Return statement fixes completed!');