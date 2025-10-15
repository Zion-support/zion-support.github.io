const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all problematic files
const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

console.log(`Found ${files.length} files to check`);

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix remaining HTML entities in all contexts
  if (content.includes('&apos;') || content.includes('&quot;')) {
    console.log(`Fixing remaining HTML entities in ${file}`);
    
    // More comprehensive entity replacement
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    content = content.replace(/&amp;/g, '&');
    
    modified = true;
  }

  // Fix unterminated string literals by finding and fixing malformed strings
  const unterminatedStringRegex = /"[^"]*$/gm;
  if (unterminatedStringRegex.test(content)) {
    console.log(`Fixing unterminated strings in ${file}`);
    content = content.replace(/"([^"]*)$/gm, '"$1"');
    modified = true;
  }

  // Fix malformed object properties that might be causing parsing errors
  // Look for patterns like: property: "value, (missing closing quote)
  content = content.replace(/(\w+):\s*"([^"]*),(\s*[^"]*)"([^,}])/g, '$1: "$2, $3"$4');
  
  // Fix malformed array elements
  content = content.replace(/(\w+):\s*"([^"]*),(\s*[^"]*)"([^,}])/g, '$1: "$2, $3"$4');

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});

console.log('Remaining entity fixes completed');