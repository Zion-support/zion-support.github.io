const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix unterminated string literals
function fixUnterminatedStrings(content) {
  // Fix unterminated string literals in import statements
  content = content.replace(/import\s+[^'"]*['"]([^'"]*?)['"]\s*$/gm, (match, importPath) => {
    if (!match.endsWith(';') && !match.endsWith("'") && !match.endsWith('"')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix unterminated string literals in general
  content = content.replace(/['"]([^'"]*?)['"]\s*$/gm, (match, stringContent) => {
    if (!match.endsWith(';') && !match.endsWith("'") && !match.endsWith('"')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix specific patterns
  content = content.replace(/import\s+[^'"]*['"]([^'"]*?)['"]\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix JSX closing tags
  content = content.replace(/<([^>]+)>\s*$/gm, (match, tagName) => {
    if (!match.includes('</') && !match.includes('/>')) {
      return match + `</${tagName.split(' ')[0]}>`;
    }
    return match;
  });
  
  return content;
}

// Function to fix specific file patterns
function fixFileContent(filePath, content) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixUnterminatedStrings(fixed);
  
  // Fix specific patterns for different file types
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    // Fix JSX syntax
    fixed = fixed.replace(/<([^>]+)>\s*$/gm, (match, tagName) => {
      if (!match.includes('</') && !match.includes('/>')) {
        return match + `</${tagName.split(' ')[0]}>`;
      }
      return match;
    });
  }
  
  return fixed;
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
    const fixed = fixFileContent(filePath, content);
    
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