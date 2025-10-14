const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix all syntax errors
function fixAllSyntaxErrors(content) {
  // Fix unterminated string literals in import statements
  content = content.replace(/import\s+[^'"]*['"]([^'"]*?)['"]\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix unterminated string literals in general
  content = content.replace(/['"]([^'"]*?)['"]\s*$/gm, (match) => {
    if (!match.endsWith(';') && !match.endsWith("'") && !match.endsWith('"')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix object property syntax
  content = content.replace(/\{\s*'([^']*?)'\s*$/gm, (match, prop) => {
    return `{ '${prop}': `;
  });
  
  // Fix array syntax
  content = content.replace(/\[\s*'([^']*?)'\s*$/gm, (match, item) => {
    return `[ '${item}', `;
  });
  
  // Fix specific patterns like navigation arrays
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*'([^']*?)'\s*$/gm, (match, varName, item) => {
    return `const ${varName} = [ '${item}', `;
  });
  
  // Fix JSX closing tags
  content = content.replace(/<([^>]+)>\s*$/gm, (match, tagName) => {
    if (!match.includes('</') && !match.includes('/>')) {
      return match + `</${tagName.split(' ')[0]}>`;
    }
    return match;
  });
  
  // Fix specific patterns
  content = content.replace(/from\s+['"]([^'"]*?)['"]\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix array items with quotes
  content = content.replace(/\{\s*name:\s*'([^']*?)',\s*href:\s*'([^']*?)',\s*icon:\s*(\w+)\s*\},?\s*$/gm, (match, name, href, icon) => {
    return `{ name: '${name}', href: '${href}', icon: ${icon} },`;
  });
  
  return content;
}

// Get all TypeScript and JavaScript files
const files = glob.sync('**/*.{ts,tsx,js,jsx}', {
  ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
});

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);