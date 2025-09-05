<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix unterminated string constants (remove extra quotes)
    content = content.replace(/from 'react';''/g, "from 'react';");
    content = content.replace(/from 'next\/link';''/g, "from 'next/link';");
    content = content.replace(/from 'next\/head';''/g, "from 'next/head';");
    content = content.replace(/from 'framer-motion';'/g, "from 'framer-motion';");
    content = content.replace(/from 'lucide-react';'/g, "from 'lucide-react';");
    
    // Fix malformed import blocks
    content = content.replace(/import \{\s*\/\/ TODO: Implement\s*\}\s*([^}]+)\s*\} from 'lucide-react';'/g, (match, imports) => {
      const cleanImports = imports
        .split(',')
        .map(imp => imp.trim())
        .filter(imp => imp && !imp.includes('//'))
        .join(',\n  ');
      return `import {\n  ${cleanImports}\n} from 'lucide-react';`;
    }
});
    
    // Fix object syntax errors (remove extra quotes and semicolons)
    content = content.replace(/"([^"]+)",""/g, '"$1"');
    content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*):\s*"([^"]+)",\s*"/g, '$1: "$2",');
    content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+);/g, '$1: $2,');
    content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+),\]/g, '$1: $2]');
    
    // Fix array syntax errors
    content = content.replace(/\[\s*"([^"]+)",""/g, '["$1"');
    content = content.replace(/"([^"]+)",""/g, '"$1"');
    content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*),\]/g, '$1]');
    
    // Fix JSX syntax errors
    content = content.replace(/<([A-Z][a-zA-Z0-9]*);/g, '<$1');
    content = content.replace(/<\/[A-Z][a-zA-Z0-9]*>"/g, '</$1>');
    content = content.replace(/className="([^"]+)""/g, 'className="$1"');
    content = content.replace(/href="([^"]+)""/g, 'href="$1"');
    content = content.replace(/title="([^"]+)""/g, 'title="$1"');
    content = content.replace(/description="([^"]+)""/g, 'description="$1"');
    
    // Fix closing tags
    content = content.replace(/<\/MainLayout>"/g, '</MainLayout>');
    content = content.replace(/<\/motion\.div>"/g, '</motion.div>');
    content = content.replace(/<\/div>"/g, '</div>');
    content = content.replace(/<\/section>"/g, '</section>');
    content = content.replace(/<\/h1>"/g, '</h1>');
    content = content.replace(/<\/h2>"/g, '</h2>');
    content = content.replace(/<\/h3>"/g, '</h3>');
    content = content.replace(/<\/p>"/g, '</p>');
    content = content.replace(/<\/span>"/g, '</span>');
    content = content.replace(/<\/a>"/g, '</a>');
    content = content.replace(/<\/Link>"/g, '</Link>');
    
    // Fix function syntax
    content = content.replace(/export default function ([A-Z][a-zA-Z0-9]*)\(\) \{"/g, 'export default function $1() {');
    content = content.replace(/return \("/g, 'return (');
    
    // Fix template literals
    content = content.replace(/\$\{([^}]+)\}\`/g, '${$1}');
    
    // Fix conditional expressions
    content = content.replace(/\?\s*'([^']+)'\s*:/g, '? "$1" :');
    content = content.replace(/\?\s*"([^"]+)"\s*:/g, '? "$1" :');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
=======
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");/ Function to fix syntax errors in a filefunction fixSyntaxErrors(filePath) { try {" let content = fs.readFileSync(filePath, "utf8"); let originalContent = content; / Fix import statements with extra semicolons and quotes" content = content.replace(/import\s+([^;]+);";";/g, "import $1;");" content = content.replace(/import\s+([^;]+);";/g, "import $1;");" content = content.replace(/from\s+[""]([^""]+)[""];";";/g, "from "$1";");"" content = content.replace(/from\s+[""]([^""]+)[""];";/g, "from "$1";"); / Fix function declarations" content = content.replace(/export\s+default\s+function\s+(\w+)\s*export\s*{\s*\w+\s*}\s*\(/g, "export default function $1("); / Fix variable declarations with extra semicolons" content = content.replace(/const\s+([^=]+)=([^;]+);";";/g, "const $1=$2;");" content = content.replace(/const\s+([^=]+)=([^;]+);";/g, "const $1=$2;");" content = content.replace(/let\s+([^=]+)=([^;]+);";";/g, "let $1=$2;");" content = content.replace(/let\s+([^=]+)=([^;]+);";/g, "let $1=$2;");" content = content.replace(/var\s+([^=]+)=([^;]+);";";/g, "var $1=$2;");" content = content.replace(/var\s+([^=]+)=([^;]+);";/g, "var $1=$2;"); / Fix useEffect and other hooks" content = content.replace(/useEffect\s*\(\s*\(\s*\)\s*=>\s*\{";/g, "useEffect(() => {");" content = content.replace(/useState\s*\(\s*([^)]+)\s*\);";";/g, "useState($1);");" content = content.replace(/useState\s*\(\s*([^)]+)\s*\);";/g, "useState($1);"); / Fix object method calls" content = content.replace(/\.([a-zA-Z_][a-zA-Z0-9_]*)\s*\(\s*\);";";/g, ".$1();");" content = content.replace(/\.([a-zA-Z_][a-zA-Z0-9_]*)\s*\(\s*\);";/g, ".$1();"); / Fix array and object syntax" content = content.replace(/\[\s*";";/g, "[");" content = content.replace(/\[\s*";/g, "[");" content = content.replace(/\]\s*";";/g, "]");" content = content.replace(/\]\s*";/g, "]");" content = content.replace(/\{\s*";";/g, "{");" content = content.replace(/\{\s*";/g, "{");" content = content.replace(/\}\s*";";/g, "}");" content = content.replace(/\}\s*";/g, "}"); / Fix string literals"" content = content.replace(/"\s*";";/g, """);"" content = content.replace(/"\s*";/g, """);"" content = content.replace(/"\s*";";";/g, """);"" content = content.replace(/"\s*";";/g, """); / Fix template literals"" content = content.replace(/"\s*";";/g, """);"" content = content.replace(/"\s*";/g, """); / Fix return statements" content = content.replace(/return\s+([^;]+);";";/g, "return $1;");" content = content.replace(/return\s+([^;]+);";/g, "return $1;"); / Fix conditional statements" content = content.replace(/if\s*\(\s*([^)]+)\s*\)\s*\{";/g, "if ($1) {");" content = content.replace(/else\s*\{";/g, "else {");" content = content.replace(/switch\s*\(\s*([^)]+)\s*\)\s*\{";/g, "switch ($1) {");"" content = content.replace(/case\s+([^:]+):";/g, "case $1: ");"" content = content.replace(/default:";/g, "default: "); / Fix try-catch blocks" content = content.replace(/try\s*\{";/g, "try {");" content = content.replace(/catch\s*\(\s*([^)]+)\s*\)\s*\{";/g, "catch ($1) {");" content = content.replace(/finally\s*\{";/g, "finally {"); / Fix arrow functions" content = content.replace(/\(\s*\)\s*=>\s*\{";/g, "() => {");" content = content.replace(/\(\s*([^)]+)\s*\)\s*=>\s*\{";/g, "($1) => {"); / Fix class definitions" content = content.replace(/class\s+(\w+)\s*\{";/g, "class $1 {");" content = content.replace(/extends\s+(\w+)\s*\{";/g, "extends $1 {"); / Fix interface definitions" content = content.replace(/interface\s+(\w+)\s*\{";/g, "interface $1 {");" content = content.replace(/type\s+(\w+)\s*=\s*\{";/g, "type $1 = {"); / Fix JSX" content = content.replace(/<\s*(\w+)\s*([^>]*)\s*>\s*";/g, "<$1$2>");" content = content.replace(/<\s*\/\s*(\w+)\s*>\s*";/g, "</$1>"); / Remove standalone semicolons and quotes" content = content.replace(/^";";?\s*$/gm, "");" content = content.replace(/^";\s*$/gm, ""); / Fix multiple consecutive semicolons" content = content.replace(/;+;+/g, ";"); / Fix multiple consecutive quotes"" content = content.replace(/[""]+[""]+/g, """); / Write the fixed content back if (content !== originalContent) {" fs.writeFileSync(filePath, content, "utf8");" console.log(`Fixed syntax errors in: ${filePath}`); return true; } return false; } catch (error) {` console.error(`Error fixing ${filePath}:`, error.message); return false; }}/ Function to recursively find and fix filesfunction fixFilesInDirectory(dirPath) { const files = fs.readdirSync(dirPath); let fixedCount = 0; for (const file of files) { const filePath = path.join(dirPath, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += fixFilesInDirectory(filePath);" } else if (file.endsWith(".js") | file.endsWith(".jsx") | file.endsWith(".ts") | file.endsWith(".tsx")) { if (fixSyntaxErrors(filePath)) { fixedCount++; } } } return fixedCount;}/ Main execution"console.log("Starting syntax error fixing.");"const fixedCount = fixFilesInDirectory("./src");`console.log(`Fixed ${fixedCount} files with syntax errors.`);""`"`
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      
      return true;
    }
    
    return false;
>>>>>>> pr-11913
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files in pages directory
function getAllPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllPageFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
<<<<<<< HEAD
const pagesDir = '/workspace/pages';
const pageFiles = getAllPageFiles(pagesDir);

console.log(`Found ${pageFiles.length} page files to check...`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${pageFiles.length} total files.`);
=======

const fixedCount = fixFilesInDirectory('./src');
>>>>>>> pr-11913
