import fs from 'fs';
import path from 'path';

// Function to aggressively fix JSX syntax errors
function aggressiveJSXFix(content) {
  let fixed = content;
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>([^<]*)<div/g, '<><div');
  fixed = fixed.replace(/<\/div>([^<]*)<\/>/g, '</div></>');
  
  // Fix malformed self-closing tags
  fixed = fixed.replace(/<(\w+)([^>]*)\s*\/\s*\/\s*\/>/g, '<$1$2 />');
  fixed = fixed.replace(/<(\w+)([^>]*)\s*\/\s*\/>/g, '<$1$2 />');
  
  // Fix malformed JSX where tags are nested incorrectly
  // Pattern: <h1>text<p>content</p> -> <h1>text</h1><p>content</p>
  fixed = fixed.replace(/<h1([^>]*)>([^<]*)<p([^>]*)>/g, '<h1$1>$2</h1><p$3>');
  fixed = fixed.replace(/<h2([^>]*)>([^<]*)<p([^>]*)>/g, '<h2$1>$2</h2><p$3>');
  fixed = fixed.replace(/<h3([^>]*)>([^<]*)<p([^>]*)>/g, '<h3$1>$2</h3><p$3>');
  
  // Fix malformed div patterns
  fixed = fixed.replace(/<div([^>]*)>([^<]*)<div([^>]*)>/g, '<div$1>$2</div><div$3>');
  fixed = fixed.replace(/<div([^>]*)>([^<]*)<section([^>]*)>/g, '<div$1>$2</div><section$3>');
  fixed = fixed.replace(/<section([^>]*)>([^<]*)<div([^>]*)>/g, '<section$1>$2</section><div$3>');
  
  // Fix malformed span patterns
  fixed = fixed.replace(/<span([^>]*)>([^<]*)<span([^>]*)>/g, '<span$1>$2</span><span$3>');
  
  // Fix malformed main patterns
  fixed = fixed.replace(/<main([^>]*)>([^<]*)<div([^>]*)>/g, '<main$1>$2</main><div$3>');
  
  // Fix specific component patterns
  const components = ['Award', 'Shield', 'Globe', 'Brain', 'Users', 'CheckCircle', 'Helmet', 'Cube', 'Star'];
  for (const component of components) {
    // Make sure they're self-closing
    fixed = fixed.replace(new RegExp(`<${component}([^>]*)(?<!\\/>)>`, 'g'), `<${component}$1 />`);
  }
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{([^}]*)\}\s*<(\w+)/g, '{$1}<$2');
  
  // Fix missing closing tags in specific contexts
  fixed = fixed.replace(/<div([^>]*)>([^<]*)$/gm, (match, attrs, text) => {
    if (text.trim() && !match.includes('</div>')) {
      return `<div${attrs}>${text}</div>`;
    }
    return match;
  });
  
  // Fix specific patterns in about page and similar files
  fixed = fixed.replace(/<h2([^>]*)>([^<]*)<p([^>]*)>/g, '<h2$1>$2</h2><p$3>');
  fixed = fixed.replace(/<h3([^>]*)>([^<]*)<p([^>]*)>/g, '<h3$1>$2</h3><p$3>');
  
  // Fix missing closing tags in grid layouts
  fixed = fixed.replace(/<div([^>]*grid[^>]*)>([^<]*)<div([^>]*)>/g, '<div$1>$2</div><div$3>');
  
  // Fix specific patterns in analytics dashboard
  fixed = fixed.replace(/<span([^>]*)>([^<]*)<span([^>]*)>/g, '<span$1>$2</span><span$3>');
  
  // Fix missing closing tags for sections
  fixed = fixed.replace(/<section([^>]*)>([^<]*)<div([^>]*)>/g, '<section$1>$2</section><div$3>');
  
  // Fix malformed JSX where closing tags are missing
  const commonTags = ['div', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'ul', 'ol', 'li', 'main', 'footer', 'header'];
  
  for (const tag of commonTags) {
    // Fix patterns like <div>text<div> -> <div>text</div><div>
    fixed = fixed.replace(new RegExp(`<${tag}([^>]*)>([^<]*)<${tag}([^>]*)>`, 'g'), `<${tag}$1>$2</${tag}><${tag}$3>`);
    
    // Fix patterns like <h1>text<p> -> <h1>text</h1><p>
    fixed = fixed.replace(new RegExp(`<${tag}([^>]*)>([^<]*)<p([^>]*)>`, 'g'), `<${tag}$1>$2</${tag}><p$3>`);
  }
  
  return fixed;
}

// Function to process files
function processFiles() {
  const files = fs.readdirSync('/workspace');
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join('/workspace', file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = aggressiveJSXFix(content);
        
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

// Function to process directory recursively
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
        const fixedContent = aggressiveJSXFix(content);
        
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
console.log('Starting aggressive JSX fixes...');
const fixedCount = processFiles();
console.log(`Fixed ${fixedCount} files`);