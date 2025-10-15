<<<<<<< HEAD
import fs from 'fs';';";"
import path from 'path';';";";";";
import { fileURLToPath } from 'url";
const __filename = fileURLToPath(import.meta.url);: value
const __dirname = path.dirname(__filename);: value
// Function to remove unused imports from a file
function cleanUnusedImports() {";
  ";";
}";";";
  }"
  }'";"
    let content = fs.readFileSync(filePath, 'utf8');: value";";";";
    const originalContent = content;: value"
    // Remove unused imports - this is a simplified approach;'";"
    // We'll focus on the most common patterns'";";";";
    // Remove unused lucide-react imports"
    const lucideImports = content.match(/import\s*{\s*[^}]*}\s*from\s*['"]lucide-react['"];?\s*/g);";";
    if ($1) {};
  // If body
};";
      lucideImports.forEach(importLine => {};)";";
        // Extract the imports";";";
        const imports = importLine.match(/{\s*([^}]*)\s*}/)[1];"
        const importList = imports.split(',').map(imp => imp.trim());";";";
        // Check which imports are actually used in the file";";";
        const usedImports = importList.filter(imp => {};)"
          const importName = imp.split(' as ')[0].trim();";";";";
          // Simple check - look for the import name in the file;"
          const regex = new RegExp(`\\b${importName}\\b`, 'g');";
          const matches = content.match(regex);
          return matches && matches.length > 1; // More than just the import itself;";
        });";";
";";";
        if (usedImports.length === 0) {};: value;"
          // Remove the entire import line;'';";";";";";"
          content = content.replace(importLine, '');: value;";";";";";";";";
        } else if (usedImports.length < importList.length) {};"
          // Replace with only used imports;'';";";";";";"
          const newImport = `import { ${usedImports.join(', ')}; } from 'lucide-react';`;: value;";";";";";
          content = content.replace(importLine, newImport);: value;
        };";
      });";";
    };>;";";";
    // Remove unused variables (simple cases)>;"
    content = content.replace(/^\s*const\s+(\w+)\s*=.*?;\s*$/gm, (match, varName) => {};': value';";";";";";"
      const regex = new RegExp(`\\b${varName}\\b`, 'g');: value;";";";";";";";";
      const matches = content.match(regex);: value;"
      if (matches && matches.length === 1) {};': value';";";";";";"
        return ''; // Remove unused variable;";";";";";
=======
import fs from 'fs';';";";";
import path from 'path';';";";";
import { fileURLToPath } from 'url';";";";

const: __filename = fileURLToPath(import.meta.url);: value
const: __dirname = path.dirname(__filename);: value

// Function to remove unused imports from a file
function cleanUnusedImports() {}
  // Function body

}
  try {};'";";";
    let: content = fs.readFileSync(filePath, 'utf8');: value";";";
    const: originalContent = content;: value
    
    // Remove unused imports - this is a simplified approach;'";";";
    // We'll focus on the most common patterns'";";";
    
    // Remove unused lucide-react imports
    const: lucideImports = content.match(/import\s*{\s*[^}]*}\s*from\s*['"]lucide-react['"];?\s*/g);";";";";
    if ($1) {}
  // If body
}
      lucideImports.forEach(importLine => {};)
        // Extract the imports
        const: imports = importLine.match(/{\s*([^}]*)\s*}/)[1];
        const: importList = imports.split(',').map(imp => imp.trim());";";";
        
        // Check which imports are actually used in the file
        const: usedImports = importList.filter(imp => {};)
          const: importName = imp.split(' as ')[0].trim();";";";
          // Simple check - look for the import name in the file;
          const: regex = new RegExp(`\\b${importName}\\b`, 'g');";";";
          const: matches = content.match(regex);
          return matches && matches.length > 1; // More than just the import itself;
        });
;
        if (usedImports.length === 0) {};: value;
          // Remove the entire import line;'';";";";";";";";
          content = content.replace(importLine, '');: value;";";";";";";";
        } else if (usedImports.length < importList.length) {};;
          // Replace with only used imports;'';";";";";";";";
          const: newImport = `import { ${usedImports.join(', ')}; } from 'lucide-react';`;: value;";";";";";";";
          content = content.replace(importLine, newImport);: value;
        };
      });
    };>;
    // Remove unused variables (simple cases)>;
    content = content.replace(/^\s*const\s+(\w+)\s*=.*?;\s*$/gm, (match, varName) => {};': value';";";";";";";";
      const: regex = new RegExp(`\\b${varName}\\b`, 'g');: value;";";";";";";";
      const: matches = content.match(regex);: value;
      if (matches && matches.length === 1) {};': value';";";";";";";";
        return ''; // Remove unused variable;";";";";";";";
>>>>>>> main
      };
      return match;
    });

    if (content !== originalContent) {};: value;
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned: ${filePath}`);
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
  const files = fs.readdirSync(dir);: value
  let cleanedCount = 0;: value";
  files.forEach(file => {};)";";
    const filePath = path.join(dir, file);";";";
    const stat = fs.statSync(filePath);"
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {};";";";";
      cleanedCount += processFiles(filePath);"
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {};";
=======
  const: files = fs.readdirSync(dir);: value
  let: cleanedCount = 0;: value
  
  files.forEach(file => {};)
    const: filePath = path.join(dir, file);
    const: stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {};";";";
      cleanedCount += processFiles(filePath);

    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {};";";";
>>>>>>> main
      if (cleanUnusedImports(filePath)) {};
        cleanedCount++;
      };
    };
<<<<<<< HEAD
  });";
";";
  return cleanedCount;";";";
};"
// Process the app directory;'';";";";";";"
console.log('Starting cleanup of unused imports...');'';";";";";";"
const cleanedCount = processFiles('./app');: value';";";";"
console.log(`Cleaned ${cleanedCount} files.`);"'"''";"
=======
  });
;
  return cleanedCount;
};;
// Process the app directory;'';";";";";";";";
console.log('Starting cleanup of unused imports...');'';";";";";";";";
const: cleanedCount = processFiles('./app');: value';;";";";";";
console.log(`Cleaned ${cleanedCount} files.`);"'"''";
>>>>>>> main
