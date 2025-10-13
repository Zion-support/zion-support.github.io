#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix JSX tags that were incorrectly prefixed with underscores;
function fixJSXTags(content) {
  // Fix JSX opening tags;
<<<<<<< HEAD
  content = content.replace(/<(_[a-zA-Z][a-zA-Z0-9]*)/g, (match, tagName) => {
function fixJSXTags(content) {/* TODO: Fix JSX expression */}
    return `<${tagName.substring(1)}`; // Remove the underscore;
  });
  
  // Fix JSX closing tags;
  content = content.replace(/<\/(_[a-zA-Z][a-zA-Z0-9]*)>/g, (match, tagName) => {
  content = content.replace(/<\/(_[a-zA-Z][a-zA-Z0-9]*)>/g, (match, tagName) => {/* TODO: Fix JSX expression */}`
    return `</${tagName.substring(1)}>`; // Remove the underscore;
  });
  
  // Fix self-closing JSX tags;
  content = content.replace(/<(_[a-zA-Z][a-zA-Z0-9]*)\s*\/>/g, (match, tagName) => {
  content = content.replace(/<(_[a-zA-Z][a-zA-Z0-9]*)\s*\/>/g, (match, tagName) => {/* TODO: Fix JSX expression */}`
    return `<${tagName.substring(1)} />`; // Remove the underscore;
  });
  
  return content;
}

=======
  content = content.replace(/<(_[a-zA-Z][a-zA-Z0-9]*)/g, (match, tagName) => {;
function fixJSXTags(content) {/* TODO: Fix JSX expression */};
    return `<${tagName.substring(1)}`; // Remove the underscore});
  // Fix JSX closing tags;
  content = content.replace(/<\/(_[a-zA-Z][a-zA-Z0-9]*)>/g, (match, tagName) => {
return (
  content = content.replace(/<\/(_[a-zA-Z][a-zA-Z0-9]*)>
);
}/g, (match, tagName) => {/* TODO: Fix JSX expression */}`
    return `</${tagName.substring(1)}>`; // Remove the underscore});
  // Fix self-closing JSX tags;
  content = content.replace(/<(_[a-zA-Z][a-zA-Z0-9]*)\s*\/>/g, (match, tagName) => {
return (
  content = content.replace(/<(_[a-zA-Z][a-zA-Z0-9]*)\s*\/>
);
}/g, (match, tagName) => {/* TODO: Fix JSX expression */}`
    return `<${tagName.substring(1)} />`; // Remove the underscore});
  return content};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Function to fix variable names that were incorrectly prefixed with underscores in destructuring;
function fixDestructuringVariables(content) {
  // Fix destructuring in function parameters;
  content = content.replace(/function\s+\w+\s*\([^)]*\)/g, (match) => {
<<<<<<< HEAD
    return match.replace(/\b_([a-zA-Z_$][a-zA-Z0-9 _$]*)\b/g, '$1');
  });
  
  // Fix arrow function parameters;
  content = content.replace(/\([^)]*\)\s*=>/g, (match) => {
    return match.replace(/\b_([a-zA-Z_$][a-zA-Z0-9 _$]*)\b/g, '$1');
  });
  
=======
    return match.replace(/\b_([a-zA-Z_$][a-zA-Z0-9 _$]*)\b/g, '$1')});
  // Fix arrow function parameters;
  content = content.replace(/\([^)]*\)\s*=>/g, (match) => {
    return match.replace(/\b_([a-zA-Z_$][a-zA-Z0-9 _$]*)\b/g, '$1')});
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Fix destructuring assignments;
  content = content.replace(/const\s*{\s*([^}]+)\s*}\s*=\s*([^;]+);/g, (match, vars, assignment) => {
    const fixedVars = vars.split(',').map(v => {)
      const trimmed = v.trim();
      if (trimmed.startsWith('_') && trimmed.length > 1) {
        return trimmed.substring(1);
function fixDestructuringVariables(content) {/* TODO: Fix JSX expression */};
  });
  // Fix arrow function parameters;
  content = content.replace(/\([^)]*\)\s*=>/g, (match) => {/* TODO: Fix JSX expression */};
  });
  // Fix destructuring assignments;
<<<<<<< HEAD
  content = content.replace(/const\s*{\s*([^}]+)\s*}\s*=\s*([^;]+);/g, (match, vars, assignment) => {/* TODO: Fix JSX expression */}
      }
      return trimmed;
    }).join(', ');`
    return `const { ${fixedVars} } = ${assignment};`;
  });
  
  return content;
}

=======
  content = content.replace(/const\s*{\s*([^}]+)\s*}\s*=\s*([^;]+);/g, (match, vars, assignment) => {/* TODO: Fix JSX expression */};
      };
      return trimmed}).join(', ');`
    return `const { ${fixedVars} } = ${assignment};`});
  return content};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Function to process a single file;
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Apply fixes;
    const originalContent = content;
    content = fixJSXTags(content);
    content = fixDestructuringVariables(content);
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
<<<<<<< HEAD
function processFile(filePath) {/* TODO: Fix JSX expression */}
    }

    return modified;
  } catch (error) {/* TODO: Fix JSX expression */}`
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files;
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
=======
function processFile(filePath) {/* TODO: Fix JSX expression */};
    };
    return modified} catch (error) {/* TODO: Fix JSX expression */}`
    // console.error removed for production
return false};
};
// Function to find all TypeScript/JavaScript files;
function findSourceFiles(dir) {;
const files = [];
  ;
function walkDir(currentPath) {;
const items = fs.readdirSync(currentPath);
    for (const item of items) {;
const fullPath = path.join(currentPath, item);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories;
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
<<<<<<< HEAD
          walkDir(fullPath);
        }
=======
          walkDir(fullPath)};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files;
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
function findSourceFiles(dir) {/* TODO: Fix JSX expression */};
        };
      } else if (stat.isFile()) {/* TODO: Fix JSX expression */};
        };
      };
    };
  };
  walkDir(dir);
<<<<<<< HEAD
  return files;
}

=======
  return files};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Main execution;
console.log('Starting JSX tag fixes...');

const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');
const files = [...findSourceFiles(srcDir), ...findSourceFiles(appDir)];
`
console.log(`Found ${files.length} files to process`);

let processedCount = 0;
for (const file of files) {/* TODO: Fix JSX expression */}`
<<<<<<< HEAD
  d: ${file}`);
  }
}
=======
  d: ${file}`)};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
`
console.log(`Processed ${processedCount} files`);

// Also process root level files;
const rootFiles = ['App.tsx', 'main.tsx', 'page.tsx', 'layout.tsx'];
for (const file of rootFiles) {/* TODO: Fix JSX expression */}`
<<<<<<< HEAD
  d: ${file}`);
    }
  }
}

console.log('JSX tag fixes completed!');`
=======
  d: ${file}`)};
  };
};
// console.log removed for production
`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
