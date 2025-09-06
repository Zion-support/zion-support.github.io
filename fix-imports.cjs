<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixImports(content) {
  // Fix import statements with missing commas
  content = content.replace(
    /import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];?/g,
    (match, imports) => {
      // Split by semicolons and fix each part
      const parts = imports.split(';').map(part => {
        // Remove any existing commas at the end and add proper commas
        return part.trim().replace(/,$/, '').split(',').map(item => item.trim()).join(', ');
      });
      
      // Join all parts with commas
      const fixedImports = parts.join(', ');
      
      // Reconstruct the import statement
      const fromPart = match.match(/from\s*['"][^'"]+['"];?/);
      return `import { ${fixedImports} } ${fromPart}`;
    }
  );
  
  return content;
=======
const fs = require("fs");
const path = require("path");
function fixImportsInFile(filePath) {;
  try {;
  let content = fs.readFileSync(filePath, "utf8");
    // Fix concatenated imports;
    content = content.replace(;
      /import\s+([^]+);"import/g,
      "import $1;\nimport";
    );
    content = content.replace(/import\s+([^]+);""/g, "import $1;\n");
    content = content.replace(;
      /import\s+([^]+);"interface/g,
      "import $1;\n\ninterface";
    );
    content = content.replace(;
      /import\s+([^]+);"const/g,
      "import $1;\n\nconst";
    );
    content = content.replace(;
      /import\s+([^]+);"export/g,
      "import $1;\n\nexport";
    );
    // Fix other common concatenation issues;
    content = content.replace(/";"interface/g, ";\n\ninterface");
    content = content.replace(/";"const/g, ";\n\nconst");
    content = content.replace(/";"export/g, ";\n\nexport");
    content = content.replace(/";"function/g, ";\n\nfunction");
    content = content.replace(/";"class/g, ";\n\nclass");
    // Fix specific syntax errors in cva calls;
    content = content.replace(/cva\(;/g, "cva(");
    content = content.replace(/variants:\s*{;
  /g, "variants: {");
    content = content.replace(/variant:\s*{;
  /g, "variant: {");
    content = content.replace(/defaultVariants:\s*{;
  /g, "defaultVariants: {");
    // Fix missing quotes and commas;
    content = content.replace(;
      /(\w+):\s*"([^"]*)"(\w+):/g,
      "$1: "$2",\n        $3:";
    );
    content = content.replace(;
      /(\w+):\s*"([^"]*)"(\s*})/g,
      "$1: "$2"\n      $3";
    );
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);,
} catch (error) {;
  console.error(`Error fixing ${filePath}:`, error.message);,
}
}

function walkDirectory(dir) {;
  const files = fs.readdirSync(dir);
  for (const file of files) {;
  const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {;
  walkDirectory(filePath);,
} else if (file.endsWith(".tsx") || file.endsWith(".ts")) {;
  fixImportsInFile(filePath);,
>>>>>>> origin/automation-fixes
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixImports(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
function main() {
  const patterns = [
    'components/**/*.tsx',
    'components/**/*.ts',
    'pages/**/*.tsx',
    'pages/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixImports };
=======
// Fix components directory;
walkDirectory("./components");
console.log("Import fixing completed!")}}}}}))
>>>>>>> origin/automation-fixes
