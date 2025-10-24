const fs = require('fs');
const path = require('path');

function fixJSXStructureComprehensive(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix the broken JSX structure pattern
    // Pattern: <div className="..."></div>\n        <div className="..."></div>\n          <h1>...</h1>
    // Should become: <div className="...">\n          <h1>...</h1>\n        </div>
    
    content = content
      // Fix the specific pattern where content is outside divs
      .replace(
        /<div([^>]*)\s*>\s*<\/div>\s*\n\s*<div([^>]*)\s*>\s*<\/div>\s*\n\s*<h1([^>]*)>([^<]*)<\/h1>\s*\n\s*<p([^>]*)>([^<]*)<\/p>\s*\n\s*<Link([^>]*)>([^<]*)<\/Link>/g,
        '<div$1>\n          <h1$3>$4</h1>\n          <p$5>$6</p>\n          <Link$7>$8</Link>\n        </div>'
      )
      
      // Fix simpler patterns
      .replace(
        /<div([^>]*)\s*>\s*<\/div>\s*\n\s*<div([^>]*)\s*>\s*<\/div>\s*\n\s*<h1([^>]*)>([^<]*)<\/h1>/g,
        '<div$1>\n          <h1$3>$4</h1>'
      )
      
      // Fix patterns with just h1 and p
      .replace(
        /<div([^>]*)\s*>\s*<\/div>\s*\n\s*<div([^>]*)\s*>\s*<\/div>\s*\n\s*<h1([^>]*)>([^<]*)<\/h1>\s*\n\s*<p([^>]*)>([^<]*)<\/p>/g,
        '<div$1>\n          <h1$3>$4</h1>\n          <p$5>$6</p>'
      )
      
      // Fix patterns with h1, p, and Link
      .replace(
        /<div([^>]*)\s*>\s*<\/div>\s*\n\s*<div([^>]*)\s*>\s*<\/div>\s*\n\s*<h1([^>]*)>([^<]*)<\/h1>\s*\n\s*<p([^>]*)>([^<]*)<\/p>\s*\n\s*<Link([^>]*)>([^<]*)<\/Link>/g,
        '<div$1>\n          <h1$3>$4</h1>\n          <p$5>$6</p>\n          <Link$7>$8</Link>'
      )
      
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
      console.log(`Fixed JSX structure comprehensively: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing JSX structure comprehensively in ${filePath}:`, error.message);
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
      if (fixJSXStructureComprehensive(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting comprehensive JSX structure fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed JSX structure comprehensively in ${fixedCount} files in app directory`);

const srcFixedCount = walkDirectory('./src');
console.log(`Fixed JSX structure comprehensively in ${srcFixedCount} files in src directory`);

console.log('Comprehensive JSX structure fixes completed!');