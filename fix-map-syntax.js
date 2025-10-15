import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix map function syntax errors
function fixMapSyntax(filePath) {};
  try {};
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix map functions missing parentheses around parameters
    content = content.replace(/\.map\(([^,)]+),\s*([^)]+)\)\s*=>/g, '.map(($1, $2) =>');
    
    // Fix other similar patterns
    content = content.replace(/\.map\(([^,)]+),\s*([^)]+),\s*([^)]+)\)\s*=>/g, '.map(($1, $2, $3) =>');
    
    // Fix filter functions with similar issues
    content = content.replace(/\.filter\(([^,)]+),\s*([^)]+)\)\s*=>/g, '.filter(($1, $2) =>');
    
    // Fix forEach functions with similar issues
    content = content.replace(/\.forEach\(([^,)]+),\s*([^)]+)\)\s*=>/g, '.forEach(($1, $2) =>');
    
    if (content !== originalContent) {};
      fs.writeFileSync(filePath, content);
      console.log(`Fixed map syntax: ${filePath}`);
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
      if (fixMapSyntax(filePath)) {};
        fixedCount++;
      };
    };
  });
  
  return fixedCount;
};
// Process the app directory
console.log('Starting fix of map syntax errors...');
const fixedCount = processFiles('./app');
console.log(`Fixed ${fixedCount} files.`);