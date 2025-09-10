const fs = require('fs');

// Fix all HTML entities in JavaScript/TypeScript files
function fixAllEntities(content) {
  // Fix in string literals and JSX
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&amp;/g, '&');
  
  return content;
}

// Get all TypeScript/JavaScript files
const glob = require('glob');
const files = glob.sync('**/*.{ts,tsx,js,jsx}', { 
  cwd: '/workspace',
  ignore: ['node_modules/**', 'dist/**', '.git/**', 'src.disabled/**']
});

files.forEach(file => {
  const fullPath = `/workspace/${file}`;
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    const original = content;
    content = fixAllEntities(content);
    if (content !== original) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed entities in ${file}`);
    }
  }
});

console.log('All entity fixes complete');