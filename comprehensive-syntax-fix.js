import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax patterns that cause parsing errors
    const fixes = [
      // Fix missing semicolons after const declarations
      {
        pattern: /(const\s+\w+\s*=\s*[^;{[\n]+)(?=\n)/g,
        replacement: '$1;'
      },
      // Fix missing closing parentheses
      {
        pattern: /(\([^)]*$)/gm,
        replacement: '$1)'
      },
      // Fix missing closing brackets
      {
        pattern: /(\[[^\]]*$)/gm,
        replacement: '$1]'
      },
      // Fix JSX closing tag issues
      {
        pattern: /(<\/div>.*Expected corresponding JSX closing tag.*)/g,
        replacement: '</div>'
      },
      // Fix declaration errors
      {
        pattern: /(Declaration or statement expected)/g,
        replacement: ''
      },
      // Fix expression expected errors
      {
        pattern: /(Expression expected)/g,
        replacement: ''
      },
      // Fix missing semicolons in specific patterns
      {
        pattern: /(const\s+\w+\s*=\s*\[[^\]]*)(?=\n\s*const)/g,
        replacement: '$1];'
      },
      // Fix broken array declarations
      {
        pattern: /(const\s+\w+\s*=\s*\[[^\]]*)(?=\n\s*\))/g,
        replacement: '$1];'
      },
      // Fix broken object declarations
      {
        pattern: /(const\s+\w+\s*=\s*\{[^}]*)(?=\n\s*\))/g,
        replacement: '$1};'
      }
    ];
    
    let newContent = content;
    
    for (const fix of fixes) {
      const before = newContent;
      newContent = newContent.replace(fix.pattern, fix.replacement);
      if (newContent !== before) {
        modified = true;
      }
    }
    
    // Additional specific fixes
    const lines = newContent.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      let originalLine = line;
      
      // Skip lines with parsing error messages
      if (line.includes('Parsing error:') || 
          line.includes('Declaration or statement expected') ||
          line.includes('Expression expected') ||
          line.includes('Expected corresponding JSX closing tag')) {
        modified = true;
        continue;
      }
      
      // Fix specific patterns
      if (line.includes('const') && line.includes('=') && !line.includes(';') && 
          !line.includes('{') && !line.includes('[') && !line.includes('(') &&
          !line.includes('`') && !line.includes('"') && !line.includes("'")) {
        line = line.trim() + ';';
        modified = true;
      }
      
      // Fix broken function calls
      if (line.includes('(') && !line.includes(')') && !line.includes('//')) {
        line = line + ')';
        modified = true;
      }
      
      // Fix broken array/object literals
      if (line.includes('[') && !line.includes(']') && !line.includes('//')) {
        line = line + ']';
        modified = true;
      }
      
      if (line.includes('{') && !line.includes('}') && !line.includes('//')) {
        line = line + '}';
        modified = true;
      }
      
      if (line !== originalLine) {
        modified = true;
      }
      
      newLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== '.next') {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing files
console.log('Starting comprehensive syntax fix...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files`);