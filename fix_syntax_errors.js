const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common issues
    const fixes = [
      // Fix malformed JSX attributes
      { pattern: /className="([^&]+)"/g, replacement: 'className="$1"' },
      { pattern: /href="([^&]+)"/g, replacement: 'href="$1"' },
      { pattern: /src="([^&]+)"/g, replacement: 'src="$1"' },
      { pattern: /alt="([^&]+)"/g, replacement: 'alt="$1"' },
      { pattern: /title="([^&]+)"/g, replacement: 'title="$1"' },
      { pattern: /id="([^&]+)"/g, replacement: 'id="$1"' },
      { pattern: /name="([^&]+)"/g, replacement: 'name="$1"' },
      { pattern: /type="([^&]+)"/g, replacement: 'type="$1"' },
      { pattern: /value="([^&]+)"/g, replacement: 'value="$1"' },
      { pattern: /placeholder="([^&]+)"/g, replacement: 'placeholder="$1"' },
      
      // Fix malformed JSX content
      { pattern: />/g, replacement: '>' },
      { pattern: /</g, replacement: '<' },
      { pattern: /&/g, replacement: '&' },
      
      // Fix malformed quotes in strings
      { pattern: /"/g, replacement: '"' },
      { pattern: /'/g, replacement: "'" },
      
      // Fix malformed JSX closing tags
      { pattern: /<\/div>/g, replacement: '</div>' },
      { pattern: /<\/span>/g, replacement: '</span>' },
      { pattern: /<\/p>/g, replacement: '</p>' },
      { pattern: /<\/h1>/g, replacement: '</h1>' },
      { pattern: /<\/h2>/g, replacement: '</h2>' },
      { pattern: /<\/h3>/g, replacement: '</h3>' },
      { pattern: /<\/button>/g, replacement: '</button>' },
      { pattern: /<\/a>/g, replacement: '</a>' },
      { pattern: /<\/img>/g, replacement: '</img>' },
      
      // Fix malformed JSX opening tags
      { pattern: /<div/g, replacement: '<div' },
      { pattern: /<span/g, replacement: '<span' },
      { pattern: /<p/g, replacement: '<p' },
      { pattern: /<h1/g, replacement: '<h1' },
      { pattern: /<h2/g, replacement: '<h2' },
      { pattern: /<h3/g, replacement: '<h3' },
      { pattern: /<button/g, replacement: '<button' },
      { pattern: /<a/g, replacement: '<a' },
      { pattern: /<img/g, replacement: '<img' },
      
      // Fix malformed self-closing tags
      { pattern: /<br\s*\/>/g, replacement: '<br />' },
      { pattern: /<hr\s*\/>/g, replacement: '<hr />' },
      { pattern: /<input\s*\/>/g, replacement: '<input />' },
      
      // Fix malformed JSX expressions
      { pattern: /\{\s*"([^&]+)"\s*\}/g, replacement: '{"$1"}' },
      { pattern: /\{\s*<([^&]+)>\s*\}/g, replacement: '{<$1>}' },
      
      // Fix malformed imports
      { pattern: /import\s+"([^&]+)"/g, replacement: 'import "$1"' },
      { pattern: /from\s+"([^&]+)"/g, replacement: 'from "$1"' },
      
      // Fix malformed function calls
      { pattern: /console\.log\("([^&]+)"/g, replacement: 'console.log("$1"' },
      { pattern: /console\.error\("([^&]+)"/g, replacement: 'console.error("$1"' },
      { pattern: /console\.warn\("([^&]+)"/g, replacement: 'console.warn("$1"' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively fix files
function fixAllSyntaxErrors(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file === 'node_modules' || file === '.git' || file === '.next') {
        continue;
      }
      fixedCount += fixAllSyntaxErrors(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixAllSyntaxErrors('.');
console.log(`Fixed syntax errors in ${fixedCount} files.`);