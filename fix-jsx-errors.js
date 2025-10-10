import fs from 'fs';
import path from 'path';

function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed self-closing tags with extra slashes
    content = content.replace(/<(\w+)([^>]*)\s*\/\s*\/\s*>/g, '<$1$2 />');
    
    // Fix malformed self-closing tags with spaces
    content = content.replace(/<(\w+)([^>]*)\s*\/\s*>/g, '<$1$2 />');
    
    // Fix malformed opening tags that should be self-closing
    content = content.replace(/<(\w+)([^>]*)\s*\/\s*$/gm, '<$1$2 />');
    
    // Fix malformed closing tags
    content = content.replace(/<\/(\w+)\s*\/\s*>/g, '</$1>');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<\/>/g, '<></>');
    
    // Fix malformed div tags
    content = content.replace(/<div\s+([^>]*)\s*\/\s*>/g, '<div $1 />');
    
    // Fix malformed section tags
    content = content.replace(/<section\s+([^>]*)\s*\/\s*>/g, '<section $1 />');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX errors in: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all AI page files
const aiPagesDir = '/workspace/app';
const files = fs.readdirSync(aiPagesDir)
  .filter(file => file.startsWith('ai-') && fs.statSync(path.join(aiPagesDir, file)).isDirectory())
  .map(file => path.join(aiPagesDir, file, 'page.tsx'))
  .filter(file => fs.existsSync(file));

console.log(`Fixing JSX errors in ${files.length} AI page files`);

files.forEach(fixJSXErrors);

console.log('JSX error fixing completed!');