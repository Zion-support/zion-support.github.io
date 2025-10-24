const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors
    const fixes = [
      // Fix unescaped quotes in JSX
      {
        pattern: /(\s*)([^>]*)(['"])([^'"]*)(['"])([^>]*)(\s*)/g,
        replacement: (match, before, beforeText, quote1, text, quote2, afterText, after) => {
          if (match.includes('className') || match.includes('href') || match.includes('src')) {
            return match; // Don't modify attributes
          }
          if (text.includes("'")) {
            return before + beforeText + quote1 + text.replace(/'/g, '&apos;') + quote2 + afterText + after;
          }
          return match;
        }
      },
      
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*$/gm,
        replacement: (match, word) => {
          if (word && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('=') && !match.includes('(') && !match.includes(')')) {
            return match + ';';
          }
          return match;
        }
      },
      
      // Fix broken JSX expressions
      {
        pattern: /(\{[^}]*)\s*(\w+)\s*(\})/g,
        replacement: (match, before, word, after) => {
          if (word && !word.includes('{') && !word.includes('}')) {
            return before + ' ' + word + ' ' + after;
          }
          return match;
        }
      },
      
      // Fix missing commas in objects
      {
        pattern: /(\w+)\s*(\w+)\s*(\w+)/g,
        replacement: (match, word1, word2, word3) => {
          if (word1 && word2 && word3 && !match.includes(',') && !match.includes('{') && !match.includes('}')) {
            return word1 + ', ' + word2 + ', ' + word3;
          }
          return match;
        }
      }
    ];
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Write back if modified
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

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix files in app and src directories
console.log('Starting syntax error fixes...');
let totalFixed = 0;

if (fs.existsSync('./app')) {
  totalFixed += findAndFixFiles('./app');
}

if (fs.existsSync('./src')) {
  totalFixed += findAndFixFiles('./src');
}

console.log(`Total files fixed: ${totalFixed}`);
