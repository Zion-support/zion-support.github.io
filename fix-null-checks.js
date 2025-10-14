import fs from 'fs';
import { glob } from 'glob';

// Find all utility files
const utilityFiles = glob.sync('app/utils/*.ts');

console.log(`Found ${utilityFiles.length} utility files to fix`);

utilityFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common null check patterns
    const patterns = [
      // Fix Object is possibly 'undefined' errors
      {
        pattern: /(\w+)\.(\w+)(\s*=\s*[^;]+;)/g,
        replacement: (match, obj, prop, rest) => {
          if (content.includes(`Object is possibly 'undefined'`)) {
            return `${obj}?.${prop}${rest}`;
          }
          return match;
        }
      },
      // Fix specific patterns
      {
        pattern: /process\.env\.(\w+)/g,
        replacement: 'process.env.$1 || ""'
      },
      {
        pattern: /window\.(\w+)/g,
        replacement: 'window?.$1'
      },
      {
        pattern: /document\.(\w+)/g,
        replacement: 'document?.$1'
      }
    ];
    
    patterns.forEach(({ pattern, replacement }) => {
      if (typeof replacement === 'function') {
        const newContent = content.replace(pattern, replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      } else {
        const newContent = content.replace(pattern, replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed null checks in ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Null check fixes completed');