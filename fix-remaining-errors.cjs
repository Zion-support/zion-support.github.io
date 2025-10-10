const fs = require('fs');
const path = require('path');

// More comprehensive fixes for remaining errors
const fixes = [
  // Fix unterminated string literals
  {
    pattern: /title: '[^']*$/gm,
    replacement: (match) => match + "'"
  },
  {
    pattern: /description: '[^']*$/gm,
    replacement: (match) => match + "'"
  },
  {
    pattern: /content: '[^']*$/gm,
    replacement: (match) => match + "'"
  },
  // Fix missing closing brackets and parentheses
  {
    pattern: /(\s+)(\w+):\s*\[[^\]]*$/gm,
    replacement: (match, indent, key) => {
      // Try to close the array properly
      return match + ']';
    }
  },
  // Fix malformed JSX closing tags
  {
    pattern: /<(\w+)[^>]*>[^<]*$/gm,
    replacement: (match, tag) => {
      // This is a complex fix, let's be more specific
      return match;
    }
  },
  // Fix missing semicolons after imports
  {
    pattern: /import\s+[^;]+$/gm,
    replacement: (match) => match + ';'
  },
  // Fix malformed function declarations
  {
    pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*$/gm,
    replacement: (match, name) => {
      return match + '\n  return null;\n};';
    }
  },
  // Fix missing closing braces in objects
  {
    pattern: /\{([^}]*)$/gm,
    replacement: (match, content) => {
      if (content.trim() && !content.includes('}')) {
        return match + '}';
      }
      return match;
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has common error patterns
    const hasUnterminatedString = /'[^']*$/.test(content) || /"[^"]*$/.test(content);
    const hasMissingBrace = /\{[^}]*$/.test(content);
    const hasMissingBracket = /\[[^\]]*$/.test(content);
    
    if (hasUnterminatedString || hasMissingBrace || hasMissingBracket) {
      // Try to fix common patterns
      let lines = content.split('\n');
      let fixed = false;
      
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        // Fix unterminated strings
        if (line.match(/title:\s*'[^']*$/) || line.match(/description:\s*'[^']*$/)) {
          lines[i] = line + "'";
          fixed = true;
        }
        
        // Fix missing closing brackets
        if (line.match(/\w+:\s*\[[^\]]*$/) && !line.includes(']')) {
          lines[i] = line + ']';
          fixed = true;
        }
        
        // Fix missing closing braces
        if (line.match(/\{[^}]*$/) && !line.includes('}')) {
          lines[i] = line + '}';
          fixed = true;
        }
      }
      
      if (fixed) {
        content = lines.join('\n');
        modified = true;
      }
    }
    
    // Apply regex fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting comprehensive error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files`);