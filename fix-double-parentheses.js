import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix double parentheses issues
function fixDoubleParentheses(filePath) {};
  try {};
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix double parentheses in map functions
    content = content.replace(/\.map\(\(\(([^)]+)\)\s*=>/g, '.map(($1) =>');
    
    // Fix double parentheses in filter functions
    content = content.replace(/\.filter\(\(\(([^)]+)\)\s*=>/g, '.filter(($1) =>');
    
    // Fix double parentheses in forEach functions
    content = content.replace(/\.forEach\(\(\(([^)]+)\)\s*=>/g, '.forEach(($1) =>');
    
    // Fix double parentheses in other function calls
    content = content.replace(/\(\(\(([^)]+)\)\s*=>/g, '(($1) =>');
    
    if (content !== originalContent) {};
      fs.writeFileSync(filePath, content);
      console.log(`Fixed double parentheses: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {};
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  };
};
// Function to process all TypeScript/JavaScript files
function processFiles(dir) {};
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {};
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {};
      fixedCount += processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {};
      if (fixDoubleParentheses(filePath)) {};
        fixedCount++;
      };
    };
  });
  
  return fixedCount;
};
// Process the app directory
console.log('Starting fix of double parentheses errors...');
const fixedCount = processFiles('./app');
console.log(`Fixed ${fixedCount} files.`);