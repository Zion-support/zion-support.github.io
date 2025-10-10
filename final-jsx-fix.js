import fs from 'fs';
import path from 'path';

// Function to fix the most common JSX syntax errors
function fixCommonJSXErrors(content) {
  let fixed = content;
  
  // Fix malformed self-closing tags
  fixed = fixed.replace(/<(\w+)([^>]*)\s*\/>;/g, '<$1$2 />');
  fixed = fixed.replace(/<(\w+)([^>]*)\s*\/>;<\/\1>/g, '<$1$2 />');
  
  // Fix missing closing tags for common elements
  const commonTags = ['div', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'ul', 'ol', 'li'];
  
  for (const tag of commonTags) {
    // Fix patterns like <div>text<div> -> <div>text</div><div>
    fixed = fixed.replace(new RegExp(`<${tag}([^>]*)>([^<]*)<${tag}([^>]*)>`, 'g'), `<${tag}$1>$2</${tag}><${tag}$3>`);
    
    // Fix patterns like <h1>text<p> -> <h1>text</h1><p>
    fixed = fixed.replace(new RegExp(`<${tag}([^>]*)>([^<]*)<p([^>]*)>`, 'g'), `<${tag}$1>$2</${tag}><p$3>`);
  }
  
  // Fix specific component patterns
  const components = ['Cube', 'Star', 'Award', 'Shield', 'Globe', 'Brain', 'Users', 'CheckCircle', 'Helmet'];
  for (const component of components) {
    // Make sure they're self-closing
    fixed = fixed.replace(new RegExp(`<${component}([^>]*)(?<!\\/>)>`, 'g'), `<${component}$1 />`);
  }
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{([^}]*)\}\s*<(\w+)/g, '{$1}<$2');
  
  // Fix missing closing tags in map functions
  fixed = fixed.replace(/\.map\(([^)]*)\)\s*=>\s*<(\w+)([^>]*)>([^<]*)<\/\2>/g, '.map($1) => <$2$3>$4</$2>');
  
  // Fix specific patterns in about page and similar files
  fixed = fixed.replace(/<h2([^>]*)>([^<]*)<p([^>]*)>/g, '<h2$1>$2</h2><p$3>');
  fixed = fixed.replace(/<h3([^>]*)>([^<]*)<p([^>]*)>/g, '<h3$1>$2</h3><p$3>');
  
  // Fix missing closing tags in grid layouts
  fixed = fixed.replace(/<div([^>]*grid[^>]*)>([^<]*)<div([^>]*)>/g, '<div$1>$2</div><div$3>');
  
  // Fix specific patterns in analytics dashboard
  fixed = fixed.replace(/<span([^>]*)>([^<]*)<span([^>]*)>/g, '<span$1>$2</span><span$3>');
  
  // Fix missing closing tags for sections
  fixed = fixed.replace(/<section([^>]*)>([^<]*)<div([^>]*)>/g, '<section$1>$2</section><div$3>');
  
  return fixed;
}

// Function to process files in a directory
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixCommonJSXErrors(content);
        
        if (content !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent);
          console.log(`Fixed: ${filePath}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting final JSX fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);