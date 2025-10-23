const fs = require('fs');
const path = require('path');

function fixJSXIssues(content) {
  let fixed = content;
  
  // Fix specific patterns where JSX tags are not properly closed
  // Pattern: <h1>text\n  </ -> <h1>text</h1>
  fixed = fixed.replace(/<h1([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<h1$1>$2</h1>');
  fixed = fixed.replace(/<h2([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<h2$1>$2</h2>');
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<h3$1>$2</h3>');
  fixed = fixed.replace(/<p([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<p$1>$2</p>');
  fixed = fixed.replace(/<div([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<div$1>$2</div>');
  fixed = fixed.replace(/<span([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<span$1>$2</span>');
  fixed = fixed.replace(/<button([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<button$1>$2</button>');
  fixed = fixed.replace(/<a([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<a$1>$2</a>');
  
  // Fix patterns where JSX tags are missing closing tags entirely
  fixed = fixed.replace(/<h1([^>]*)>\s*([^<\n]+)\s*$/gm, '<h1$1>$2</h1>');
  fixed = fixed.replace(/<h2([^>]*)>\s*([^<\n]+)\s*$/gm, '<h2$1>$2</h2>');
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<\n]+)\s*$/gm, '<h3$1>$2</h3>');
  fixed = fixed.replace(/<p([^>]*)>\s*([^<\n]+)\s*$/gm, '<p$1>$2</p>');
  fixed = fixed.replace(/<div([^>]*)>\s*([^<\n]+)\s*$/gm, '<div$1>$2</div>');
  fixed = fixed.replace(/<span([^>]*)>\s*([^<\n]+)\s*$/gm, '<span$1>$2</span>');
  fixed = fixed.replace(/<button([^>]*)>\s*([^<\n]+)\s*$/gm, '<button$1>$2</button>');
  fixed = fixed.replace(/<a([^>]*)>\s*([^<\n]+)\s*$/gm, '<a$1>$2</a>');
  
  return fixed;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXIssues(content);
    if (content !== fixed) {
      console.log(`Fixing JSX issues in: ${filePath}`);
      fs.writeFileSync(filePath, fixed);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        fixedCount += walkDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting comprehensive JSX fix...');
const fixedCount = walkDirectory('app');
console.log(`Fixed JSX issues in ${fixedCount} files`);
