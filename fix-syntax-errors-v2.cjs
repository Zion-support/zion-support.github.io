<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");/ Function to fix common syntax errorsfunction fixSyntaxErrors(content) { / Fix the $2 issues first" content = content.replace(/\$2/g, ""); / Fix missing commas in object literals - more specific patterns" content = content.replace(/(\w+):\s*["""][^"""]*["""]\s*\n\s*(\w+):/g, (match, key1, key2) => {"" return "${key1}: "value",\n ${key2}:"}); / Fix missing commas in style objects"" content = content.replace(/(\w+):\s*["""][^"""]*["""]\s*\n\s*(\w+):/g, (match, key1, key2) => {" return `${key1}: "value",\n ${key2}:`}); / Fix missing semicolons after function declarations" content = content.replace(/(\w+)\s*\(\s*\)\s*=>\s*\{[^}]*\}\s*\n\s*return/g, "$1() => {\n / .\n };\n return"); / Fix missing closing braces" content = content.replace(/(\w+)\s*\(\s*\)\s*=>\s*\{[^}]*\}\s*$/gm, "$1() => {\n / .\n };"); return content}/ Function to process a filefunction processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8"); const fixedContent = fixSyntaxErrors(content); if (content !== fixedContent) { fs.writeFileSync(filePath, fixedContent);"` console.log(`Fixed: ${filePath}`)} } catch (error) {` console.error(`Error processing ${filePath}:`, error.message)}}/ Function to recursively find and process filesfunction processDirectory(dirPath) { const files = fs.readdirSync(dirPath); for (const file of files) { const filePath = path.join(dirPath, file); const stat = fs.statSync(filePath); " if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") {" processDirectory(filePath)} else if (file.endsWith(".tsx") | file.endsWith(".ts") | file.endsWith(".jsx") | file.endsWith(".js")) { processFile(filePath)} }}/ Start processing from the current directory"console.log("Fixing syntax errors.");"processDirectory(".");"console.log("Done!");'"`'"`
=======
const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
<<<<<<< HEAD
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      }
=======
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
    
    // Fix extra closing parentheses and braces at the end
    content = content.replace(/\s*\),\s*\}\s*$/, '');
    content = content.replace(/\s*\}\s*$/, '');
    
    // Fix malformed template literals
    content = content.replace(/toLowerCase\(\)\.replace\(/g, 'toLowerCase().replace(');
    content = content.replace(/replace\(/g, 'replace(');
    
    // Fix missing closing quotes in template literals
    content = content.replace(/`([^`]*)\s*$/gm, (match, content) => {
      if (content.includes('${') && !content.endsWith('`')) {
        return match + '`';
      }
      return match;
    }
});
    
    // Fix malformed JSX expressions
    content = content.replace(/\{([^}]*)\s*$/gm, (match, content) => {
      if (content.includes('map') && !content.includes('}')) {
        return match + '}';
      }
      return match;
    }
});
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
>>>>>>> main
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Start processing from the current directory

processDirectory('.');
=======
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
>>>>>>> main
>>>>>>> main
