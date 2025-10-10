import fs from 'fs';
import path from 'path';

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  // Fix malformed JSX where tags are nested incorrectly
  // Pattern: <h1>text<p>content</p></h1> -> <h1>text</h1><p>content</p>
  content = content.replace(/<(\w+)([^>]*)>([^<]*)<(\w+)([^>]*)>([^<]*)<\/\4><\/\1>/g, '<$1$2>$3</$1><$4$5>$6</$4>');
  
  // Fix unclosed tags that should be self-closing
  content = content.replace(/<(\w+)([^>]*)\s*\/?>(?!\s*<\/\1>)/g, (match, tag, attrs) => {
    if (match.endsWith('/>')) return match;
    if (['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tag)) {
      return `<${tag}${attrs} />`;
    }
    return match;
  });
  
  // Fix missing closing tags for common elements
  const openTags = [];
  const lines = content.split('\n');
  const fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Fix specific patterns
    // Fix <h1>text<p> -> <h1>text</h1><p>
    line = line.replace(/<h1([^>]*)>([^<]*)<p([^>]*)>/g, '<h1$1>$2</h1><p$3>');
    line = line.replace(/<h2([^>]*)>([^<]*)<p([^>]*)>/g, '<h2$1>$2</h2><p$3>');
    line = line.replace(/<h3([^>]*)>([^<]*)<p([^>]*)>/g, '<h3$1>$2</h3><p$3>');
    
    // Fix <div>text<div> -> <div>text</div><div>
    line = line.replace(/<div([^>]*)>([^<]*)<div([^>]*)>/g, '<div$1>$2</div><div$3>');
    
    // Fix missing closing tags in specific patterns
    line = line.replace(/<(\w+)([^>]*)>([^<]*)$/g, (match, tag, attrs, text) => {
      if (!text.trim()) return match;
      return `<${tag}${attrs}>${text}</${tag}>`;
    });
    
    fixedLines.push(line);
  }
  
  return fixedLines.join('\n');
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process TSX/JSX files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting JSX syntax fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);