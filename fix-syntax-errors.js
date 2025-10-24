const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
<<<<<<< HEAD
// Common syntax fixes
const fixes = [
  // Fix missing semicolons after interface properties
  {
    pattern: /(\w+)\?\s*:\s*(\w+)\s*\n/g,
    replacement: '$1?: $2;\n'
  },
  // Fix missing semicolons after object properties
  {
    pattern: /(\w+):\s*([^,}\n]+)\s*\n/g,
    replacement: '$1: $2,\n'
  },
  // Fix missing semicolons after function declarations
  {
    pattern: /(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\}\s*\n/g,
    replacement: '$1 = ($2) => {\n$3\n};\n'
  },
  // Fix malformed JSX attributes
  {
    pattern: /(\w+)=\{([^}]+)\}/g,
    replacement: '$1={$2}'
  },
  // Fix missing closing tags
  {
    pattern: /<(\w+)([^>]*)>\s*$/gm,
    replacement: '<$1$2></$1>'
  },
  // Fix duplicate imports
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];\s*\nimport\s*{\s*([^}]+)\s*}\s*from\s*['"]\2['"];/g,
    replacement: "import { $1, $3 } from '$2';"
  },
  // Fix missing commas in arrays
  {
    pattern: /(\w+)\s*\n\s*]/g,
    replacement: '$1,\n]'
  },
  // Fix missing commas in objects
  {
    pattern: /(\w+):\s*([^,}\n]+)\s*\n\s*}/g,
    replacement: '$1: $2,\n}'
=======
// Function to fix common syntax errors in React components
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix LinkContact Us pattern
  fixed = fixed.replace(/LinkContact Us\s*>\s*\$2\s*<ArrowRight\$3 \/>\s*<\/Link>/g, 
    `Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>`);
  
  // Fix ArrowRight$ pattern
  fixed = fixed.replace(/ArrowRight\$[0-9]/g, 'ArrowRight className="w-5 h-5 ml-2"');
  
  // Fix $2, $3 patterns
  fixed = fixed.replace(/\$[0-9]/g, '');
  
  // Fix extra closing divs - remove duplicate closing divs at the end
  const lines = fixed.split('\n');
  const lastLines = lines.slice(-10);
  let extraDivs = 0;
  
  // Count extra closing divs in the last few lines
  for (let i = lastLines.length - 1; i >= 0; i--) {
    if (lastLines[i].trim() === '</div>') {
      extraDivs++;
    } else if (lastLines[i].trim() && !lastLines[i].trim().startsWith('//')) {
      break;
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-607a
  }
  
  // Remove extra closing divs
  if (extraDivs > 1) {
    const extraDivsToRemove = extraDivs - 1;
    let removed = 0;
    for (let i = lines.length - 1; i >= 0 && removed < extraDivsToRemove; i--) {
      if (lines[i].trim() === '</div>') {
        lines.splice(i, 1);
        removed++;
      }
    }
    fixed = lines.join('\n');
  }
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<>\s*<Head>/g, '<>\n      <Head>');
  fixed = fixed.replace(/<\/Head>\s*<div/g, '</Head>\n      <div');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
=======
// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
  try {
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

<<<<<<< HEAD
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
=======
    // Fix merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in ${filePath}`);
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
      modified = true;
    }

    // Fix malformed JSX closing tags
    content = content.replace(/<\/[^>]+><\/[^>]+>/g, (match) => {
      const tags = match.match(/<\/[^>]+>/g);
      return tags[tags.length - 1]; // Keep only the last closing tag
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
    });

    // Fix self-closing tags that are malformed
    content = content.replace(/<([^>]+)><\/\1>/g, '<$1 />');

    // Fix JSX expressions that need parent elements
    content = content.replace(/(\s*)<([A-Z][^>]*)\s*\/><([A-Z][^>]*)\s*\/>/g, '$1<>\n$1  <$2 />\n$1  <$3 />\n$1</>');

    // Fix missing closing tags for common elements
    content = content.replace(/<div([^>]*)>\s*<\/div>/g, '<div$1 />');
    content = content.replace(/<span([^>]*)>\s*<\/span>/g, '<span$1 />');

    // Fix malformed className attributes
    content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');

    // Fix missing semicolons in JSX
    content = content.replace(/(\w+)\s*=\s*{([^}]+)}\s*([^;])/g, '$1={$2};$3');

    // Fix unterminated strings
    content = content.replace(/(\w+)\s*=\s*"([^"]*)\s*$/gm, '$1="$2"');

    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n  ');

    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*([^,}\n]+)\s*\n(\s*)(\w+):/g, '$1: $2,\n$3$4:');

    // Fix malformed imports
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;?\s*$/gm, 'import { $1 } from "$2";');

    if (modified) {
<<<<<<< HEAD
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
=======
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
>>>>>>> cursor/fix-errors-and-merge-to-main-607a
=======
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
function walkDirectory(dir) {
=======
// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
<<<<<<< HEAD
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
=======
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

<<<<<<< HEAD
console.log('Starting syntax error fixes...');
const fixedCount = walkDirectory('./app');
=======
// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

>>>>>>> cursor/fix-errors-and-merge-to-main-607a
console.log(`Fixed ${fixedCount} files`);
=======
// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('./app');
console.log(`Fixed ${fixedCount} files with syntax errors.`);

// Also fix files in src directory if it exists
if (fs.existsSync('./src')) {
  const srcFixedCount = fixFilesInDirectory('./src');
  console.log(`Fixed ${srcFixedCount} files in src directory.`);
}

console.log('Syntax error fixes completed.');
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
