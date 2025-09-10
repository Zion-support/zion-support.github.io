<<<<<<< HEAD
const fs = require("fs");
const path = require("path");
function fixImportsInFile(filePath) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
    // Fix concatenated imports;
    content = content.replace(;
      /import\s+([^]+);"import/g,;
      "import $1;\nimport";
    );
    content = content.replace(/import\s+([^]+);""/g, "import $1;\n");
    content = content.replace(;
      /import\s+([^]+);"interface/g,;
      "import $1;\n\ninterface";
    );
    content = content.replace(;
      /import\s+([^]+);"const/g,;
      "import $1;\n\nconst";
    );
    content = content.replace(;
      /import\s+([^]+);"export/g,;
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
      /(\w+):\s*"([^"]*)"(\w+):/g,;
      "$1: "$2",\n        $3:";
    );
    content = content.replace(;
      /(\w+):\s*"([^"]*)"(\s*})/g,;
      "$1: "$2"\n      $3";
    );
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);} catch (error) {
  console.error(`Error fixing ${filePath}:`, error.message);}
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
  const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
  walkDirectory(filePath);} else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
  fixImportsInFile(filePath);}
  }
}

// Fix components directory;
walkDirectory("./components");
console.log("Import fixing completed!")}}}}}))
=======
const fs = require('fs');
const path = require('path');

// Function to fix imports in a file
function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix @/utils/ imports
    const utilsRegex = /from '@\/utils\//g;
    if (utilsRegex.test(content)) {
      content = content.replace(utilsRegex, "from '../../../src/utils/");
      modified = true;
    }
    
    // Fix @/data/ imports
    const dataRegex = /from '@\/data\//g;
    if (dataRegex.test(content)) {
      content = content.replace(dataRegex, "from '../../../src/data/");
      modified = true;
    }
    
    // Fix @/lib/ imports
    const libRegex = /from '@\/lib\//g;
    if (libRegex.test(content)) {
      content = content.replace(libRegex, "from '../../../src/lib/");
      modified = true;
    }
    
    // Fix @/components/ imports
    const componentsRegex = /from '@\/components\//g;
    if (componentsRegex.test(content)) {
      content = content.replace(componentsRegex, "from '../../../src/components/");
      modified = true;
    }
    
    // Fix @/types/ imports
    const typesRegex = /from '@\/types\//g;
    if (typesRegex.test(content)) {
      content = content.replace(typesRegex, "from '../../../src/types/");
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all API files
const apiDir = path.join(__dirname, 'pages', 'api');
const files = [];

function walkDir(dir) {
  const filesInDir = fs.readdirSync(dir);
  for (const file of filesInDir) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      files.push(filePath);
    }
  }
}

walkDir(apiDir);

console.log(`Found ${files.length} API files to process`);

// Process each file
files.forEach(fixImportsInFile);

console.log('Import fixing complete!');
>>>>>>> pr-12866
