const fs = require('fs');
const path = require('path');

// Function to fix corrupted JSX syntax
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix malformed JSX tags with $2 patterns
  fixed = fixed.replace(/< className="([^"]*)"\$2><\/ className="([^"]*)"\$2>/g, '<span className="$1">');
  fixed = fixed.replace(/< className="([^"]*)"\$2>/g, '<span className="$1">');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/ className="[^"]*"\$2>/g, '</span>');
  
  // Fix unclosed tags by finding patterns and closing them properly
  const unclosedTagPatterns = [
    { open: /<h1([^>]*)>/g, close: '</h1>' },
    { open: /<h2([^>]*)>/g, close: '</h2>' },
    { open: /<h3([^>]*)>/g, close: '</h3>' },
    { open: /<button([^>]*)>/g, close: '</button>' },
    { open: /<span([^>]*)>/g, close: '</span>' },
    { open: /<p([^>]*)>/g, close: '</p>' },
    { open: /<div([^>]*)>/g, close: '</div>' }
  ];
  
  unclosedTagPatterns.forEach(pattern => {
    const matches = [...fixed.matchAll(pattern.open)];
    matches.forEach(match => {
      const fullMatch = match[0];
      const tagName = fullMatch.match(/<(\w+)/)[1];
      const tagContent = match[1] || '';
      
      // Check if this tag is properly closed
      const tagRegex = new RegExp(`<${tagName}${tagContent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}>`);
      const afterMatch = fixed.substring(match.index + fullMatch.length);
      const nextTagMatch = afterMatch.match(new RegExp(`</${tagName}>`));
      
      if (!nextTagMatch) {
        // Find the end of the content for this tag
        let depth = 1;
        let i = 0;
        let content = '';
        
        while (i < afterMatch.length && depth > 0) {
          const char = afterMatch[i];
          if (char === '<') {
            const nextChar = afterMatch[i + 1];
            if (nextChar === '/') {
              depth--;
            } else if (nextChar && nextChar.match(/[a-zA-Z]/)) {
              depth++;
            }
          }
          if (depth > 0) {
            content += char;
          }
          i++;
        }
        
        // Insert the closing tag
        const insertPos = match.index + fullMatch.length + content.length;
        fixed = fixed.substring(0, insertPos) + `</${tagName}>` + fixed.substring(insertPos);
      }
    });
  });
  
  // Fix specific patterns that are common
  fixed = fixed.replace(/<([^>]+)\$2>/g, '<$1>');
  fixed = fixed.replace(/<\/ ([^>]+)\$2>/g, '</$1>');
  
  // Fix malformed className attributes
  fixed = fixed.replace(/className="([^"]*)"\$2/g, 'className="$1"');
  
  // Fix missing closing tags for common elements
  const commonElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'span', 'p', 'div', 'section', 'article', 'header', 'footer', 'main', 'aside', 'nav'];
  
  commonElements.forEach(element => {
    const openRegex = new RegExp(`<${element}([^>]*)>`, 'g');
    const closeRegex = new RegExp(`</${element}>`, 'g');
    
    let openMatches = [...fixed.matchAll(openRegex)];
    let closeMatches = [...fixed.matchAll(closeRegex)];
    
    // If there are more opening tags than closing tags, add missing closing tags
    if (openMatches.length > closeMatches.length) {
      const missing = openMatches.length - closeMatches.length;
      for (let i = 0; i < missing; i++) {
        // Find the last opening tag without a closing tag
        const lastOpenMatch = openMatches[openMatches.length - 1 - i];
        const afterLastOpen = fixed.substring(lastOpenMatch.index + lastOpenMatch[0].length);
        const nextCloseMatch = afterLastOpen.match(new RegExp(`</${element}>`));
        
        if (!nextCloseMatch) {
          // Add closing tag at the end of the content
          const insertPos = lastOpenMatch.index + lastOpenMatch[0].length + afterLastOpen.length;
          fixed = fixed.substring(0, insertPos) + `</${element}>` + fixed.substring(insertPos);
        }
      }
    }
  });
  
  return fixed;
}

// Function to fix specific parsing errors
function fixParsingErrors(content) {
  let fixed = content;
  
  // Fix missing commas in object literals
  fixed = fixed.replace(/(\w+)\s*(\w+)\s*:/g, '$1, $2:');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*(\w+)\s*=/g, '$1; $2 =');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n  ');
  
  // Fix malformed arrow functions
  fixed = fixed.replace(/=>\s*{\s*$/gm, '=> {\n  ');
  
  return fixed;
}

// Function to remove console statements
function removeConsoleStatements(content) {
  return content.replace(/console\.(log|warn|error|info)\([^)]*\);?\s*/g, '');
}

// Function to fix prefer-const issues
function fixPreferConst(content) {
  return content.replace(/let\s+(\w+)\s*=\s*[^;]+;\s*\/\/\s*never\s+reassigned/g, (match, varName) => {
    return match.replace(/let/, 'const');
  });
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix JSX syntax
    const contentWithJSX = fixJSXSyntax(content);
    if (contentWithJSX !== content) {
      content = contentWithJSX;
      modified = true;
    }
    
    // Fix parsing errors
    const contentWithParsing = fixParsingErrors(content);
    if (contentWithParsing !== content) {
      content = contentWithParsing;
      modified = true;
    }
    
    // Remove console statements
    const contentWithoutConsole = removeConsoleStatements(content);
    if (contentWithoutConsole !== content) {
      content = contentWithoutConsole;
      modified = true;
    }
    
    // Fix prefer-const issues
    const contentWithConst = fixPreferConst(content);
    if (contentWithConst !== content) {
      content = contentWithConst;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');

let totalFixed = 0;

// Process src directory
if (fs.existsSync(srcDir)) {
  const srcFiles = findTsxFiles(srcDir);
  console.log(`Processing ${srcFiles.length} files in src directory...`);
  
  for (const file of srcFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

// Process app directory
if (fs.existsSync(appDir)) {
  const appFiles = findTsxFiles(appDir);
  console.log(`Processing ${appFiles.length} files in app directory...`);
  
  for (const file of appFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);