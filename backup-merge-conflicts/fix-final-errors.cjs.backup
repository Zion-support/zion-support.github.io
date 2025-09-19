<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Final targeted fixes for remaining errors
const fixes = [// Fix missing semicolons in import statements
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*$/gm,
    "replacement": 'import { $1 } from \'$2\';'
  },
  
  // Fix malformed import statements
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*export\s*default\s*function/g,
    "replacement": 'import { $1 } from \'$2\';\n\nexport default function'
  },
  
  // Fix missing semicolons after import statements
  {
    "pattern": /import\s+([^]+)\s*$/gm,
    "replacement": 'import $1;'
  },
  
  // Fix unterminated string literals
  {
    "pattern": /'([^']*)\s*$/gm,
    "replacement": '\'$1\';'
  },
  
  // Fix malformed function declarations
  {
    "pattern": /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,
    "replacement": 'export default function $1() {\n  return ('
  },
  
  // Fix missing closing brackets
  {
    "pattern": /return\s*\(\s*<div[^>]*>\s*$/gm,
    "replacement": 'return (\n    <div className="min-h-screen bg-white">'
  },
  
  // Fix malformed JSX
  {
    "pattern": /<\/div>\s*;\s*$/gm,
    "replacement": '</div>\n  );\n}'
  },
  
  // Fix missing semicolons in object properties
  {
    "pattern": /(\w+):\s*'([^']*)',\s*$/gm,
    "replacement": '$1: \'$2\','
  },
  
  // Fix malformed array declarations
  {
    "pattern": /const\s+(\w+)\s*=\s*\[\s*$/gm,
    "replacement": 'const $1 = [\n    '
  },
  
  // Fix missing commas in arrays
  {
    "pattern": /'([^']*)'\s*;\s*'([^']*)'/g,
    "replacement": '\'$1\',\n    \'$2\''
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement)});
    
    // Additional cleanup
    content = content
      .replace(/;\s*;\s*/g, ';\n')
      .replace(/,\s*,\s*/g, ',\n')
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .trim();
    
    // Ensure proper file ending
    if (!content.endsWith('}') && !content.endsWith(';')) {
      content += '\n}'}
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      
      return true}
    
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir);
  return files}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = findTsxFiles(srcDir);



let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++}
});

=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");/ Final targeted fixes for remaining errorsconst fixes = [/ Fix missing semicolons in import statements {" pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*$/gm,"" replacement: "import { $1 } from \"$2\";" }, / Fix malformed import statements {"" pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*export\s*default\s*function/g,"" replacement: "import { $1 } from \"$2\";\n\nexport default function" }, / Fix missing semicolons after import statements {" pattern: /import\s+([^]+)\s*$/gm,"" replacement: "import $1;" }, / Fix unterminated string literals {"" pattern: /"([^"]*)\s*$/gm,"" replacement: "\"$1\";" }, / Fix malformed function declarations {" pattern: /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,"" replacement: "export default function $1() {\n return (" }, / Fix missing closing brackets {" pattern: /return\s*\(\s*<div[^>]*>\s*$/gm,"" replacement: "return (\n <div className="min-h-screen bg-white">" }, / Fix malformed JSX {" pattern: /<\/div>\s*;\s*$/gm,"" replacement: "</div>\n );\n}" }, / Fix missing semicolons in object properties {"" pattern: /(\w+):\s*"([^"]*)",\s*$/gm,"" replacement: "$1: \"$2\"," }, / Fix malformed array declarations {" pattern: /const\s+(\w+)\s*=\s*\[\s*$/gm,"" replacement: "const $1 = [\n " }, / Fix missing commas in arrays {"" pattern: /"([^"]*)"\s*;\s*"([^"]*)"/g,"" replacement: "\"$1\",\n \"$2\"" }];function fixFile(filePath) { try {" let content = fs.readFileSync(filePath, "utf8"); let originalContent = content; / Apply fixes fixes.forEach(fix => { content = content.replace(fix.pattern, fix.replacement)}); / Additional cleanup content = content" .replace(/;\s*;\s*/g, ";\n")" .replace(/,\s*,\s*/g, ",\n")" .replace(/\s+$/gm, "") / Remove trailing whitespace .trim(); / Ensure proper file ending" if (!content.endsWith("}") && !content.endsWith(";")) {" content += "\n}"} if (content !== originalContent) { fs.writeFileSync(filePath, content);" console.log(`Fixed: ${filePath}`); return true} return false} catch (error) {` console.error(`Error fixing ${filePath}:`, error.message); return false}}function findTsxFiles(dir) { const files = []; function traverse(currentDir) { const items = fs.readdirSync(currentDir); for (const item of items) { const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); " if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {" traverse(fullPath)} else if (item.endsWith(".tsx") | item.endsWith(".jsx")) { files.push(fullPath)} } } traverse(dir); return files}/ Main execution"const srcDir = path.join(__dirname, "src");const files = findTsxFiles(srcDir);`console.log(`Found ${files.length} files to check.`);let fixedCount = 0;files.forEach(file => { if (fixFile(file)) { fixedCount++}});`console.log(`Fixed ${fixedCount} files.`);'"`'"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    "pattern"
    "replacement"
    "pattern"
    "replacement"
    "replacement": 'return (\n    <div className="min-h-screen bg-white")
    "replacement"
    "pattern"
    "replacement"
    "replacement"
    "pattern"
    "replacement"
>>>>>>> main
>>>>>>> main
