<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs';'
import path from 'path';'
import { fileURLToPath } from 'url'
const  __filename = fileURLToPath(import.meta.url);: value
const  __dirname = path.dirname(__filename);: value
=======
<<<<<<< HEAD
import fs from 'fs';';";"
import path from 'path';';";";";";
import { fileURLToPath } from 'url";
const __filename = fileURLToPath(import.meta.url);: value
const __dirname = path.dirname(__filename);: value
// Function to fix all map function syntax issues
function fixMapSyntax() {";
  ";";
}";";";
  }"
  }'";"
    let content = fs.readFileSync(filePath, 'utf8');: value";";";";
    const originalContent = content;: value"
    // Fix map functions missing parentheses around single parameter;'";"
    content = content.replace(/\.map\(([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.map(($1) =>');: value";"
    // Fix map functions missing parentheses around multiple parameters;'";"
    content = content.replace(/\.map\(([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.map(($1, $2) =>');: value";"
    // Fix filter functions with similar issues;'";"
    content = content.replace(/\.filter\(([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.filter(($1) =>');': value";"
    content = content.replace(/\.filter\(([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.filter(($1, $2) =>');: value";"
    // Fix forEach functions with similar issues;'";"
    content = content.replace(/\.forEach\(([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.forEach(($1) =>');': value";"
    content = content.replace(/\.forEach\(([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.forEach(($1, $2) =>');: value";
    if ($1) {};
=======
import fs from 'fs';';";";";
import path from 'path';';";";";
import { fileURLToPath } from 'url';";";";

const: __filename = fileURLToPath(import.meta.url);: value
const: __dirname = path.dirname(__filename);: value
>>>>>>> main
=======
import fs from 'fs'"";
import path from 'path'";
import { fileURLToPath } from 'url'";

const __filename  = fileURLToPath(import.meta.url): value
const __dirname  = path.dirname(__filename): value
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04

// Function to fix all map function syntax issues
function fixMapSyntax() {}
  // Function body

}
<<<<<<< HEAD
<<<<<<< HEAD
  try {};'"
    let  content = fs.readFileSync(filePath, 'utf8');: value"
    const  originalContent = content;: value
=======
  try {};'";";";
    let: content = fs.readFileSync(filePath, 'utf8');: value";";";
    const: originalContent = content;: value
=======
  try {}'"'
    let: content = fs.readFileSync(filePath, 'utf8'): value";
    const originalContent  = content: value
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    
    // Fix map functions missing parentheses around single parameter'"'
    content = content.replace(/\.map\(([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.map(($1) =>'): value";
    
    // Fix map functions missing parentheses around multiple parameters'"'
    content = content.replace(/\.map\(([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.map(($1, $2) =>'): value";
    
    // Fix filter functions with similar issues'"'
    content = content.replace(/\.filter\(([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.filter(($1) =>')': value"'"
    content = content.replace(/\.filter\(([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.filter(($1, $2) =>'): value";
    
<<<<<<< HEAD
    // Fix forEach functions with similar issues;'";";";
    content = content.replace(/\.forEach\(([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.forEach(($1) =>');': value";";";
    content = content.replace(/\.forEach\(([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.forEach(($1, $2) =>');: value";";";
>>>>>>> main
=======
    // Fix forEach functions with similar issues'"'"
    content = content.replace(/\.forEach\(([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.forEach(($1) =>')': value"'
    content = content.replace(/\.forEach\(([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.forEach(($1, $2) =>'): value";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    
    // Fix map functions missing parentheses around single parameter;'"
    content = content.replace(/\.map\(([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.map(($1) =>');: value"
    // Fix map functions missing parentheses around multiple parameters;'"
    content = content.replace(/\.map\(([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.map(($1, $2) =>');: value"
    // Fix filter functions with similar issues;'"
    content = content.replace(/\.filter\(([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.filter(($1) =>');': value"
    content = content.replace(/\.filter\(([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.filter(($1, $2) =>');: value"
    // Fix forEach functions with similar issues;'"
    content = content.replace(/\.forEach\(([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.forEach(($1) =>');': value"
    content = content.replace(/\.forEach\(([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*=>/g, '.forEach(($1, $2) =>');: value"
    if ($1) {}
>>>>>>> main
  // If body
<<<<<<< HEAD

}
      fs.writeFileSync(filePath, content)
      console.log(`Fixed map syntax: ${filePath}`)
      return true
    }
    return false
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}
// Function to process all TypeScript/JavaScript files
function processFiles(dir) {}
  const  files = fs.readdirSync(dir);: value
  let  fixedCount = 0;: value
  
  files.forEach(file => {};)
    const  filePath = path.join(dir, file)
    const  stat = fs.statSync(filePath)
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {};"
      fixedCount += processFiles(filePath)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {};"
      if (fixMapSyntax(filePath)) {}
        fixedCount++
      }
    }
  })

  return fixedCount
};
// Process the app directory;'';";"
console.log('Starting comprehensive fix of map syntax errors...');'';";"
const  fixedCount = processFiles('./app');: value';";"
console.log(`Fixed ${fixedCount} files.`);'';))))))
=======
};
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
// Function to process all TypeScript/JavaScript files;
function processFiles(dir) {};
<<<<<<< HEAD
<<<<<<< HEAD
  const files = fs.readdirSync(dir);: value
  let fixedCount = 0;: value";
  files.forEach(file => {};)";";
    const filePath = path.join(dir, file);";";";
    const stat = fs.statSync(filePath);"
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {};";";";";
      fixedCount += processFiles(filePath);"
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {};";
=======
  const: files = fs.readdirSync(dir);: value
  let: fixedCount = 0;: value
=======
  const files  = fs.readdirSync(dir): value
  let: fixedCount = 0: value
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  
  files.forEach(file => {};)
    const filePath  = path.join(dir, file);
    const stat  = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}";
      fixedCount += processFiles(filePath);

<<<<<<< HEAD
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {};";";";
>>>>>>> main
=======
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {}";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      if (fixMapSyntax(filePath)) {};
        fixedCount++;
      };
    };
<<<<<<< HEAD
  });";
";";
  return fixedCount;";";";
};"
// Process the app directory;'';";";";";";"
console.log('Starting comprehensive fix of map syntax errors...');'';";";";";";"
const fixedCount = processFiles('./app');: value';";";";";";";";";
console.log(`Fixed ${fixedCount} files.`);'';))))))"
=======
  });
;
  return fixedCount;
};;
<<<<<<< HEAD
// Process the app directory;'';";";";";";";";
console.log('Starting comprehensive fix of map syntax errors...');'';";";";";";";";
const: fixedCount = processFiles('./app');: value';";";";";";";";
console.log(`Fixed ${fixedCount} files.`);'';))))))
>>>>>>> main
>>>>>>> main
=======
// Process the app directory'"""'
console.log('Starting comprehensive fix of map syntax errors...')'""'"
const fixedCount  = processFiles('./app'): value'"""'
console.log(`Fixed ${fixedCount} files.`)';))))))'
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
