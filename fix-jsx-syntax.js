import React from 'react'
#!/usr/bin/env node
<<<<<<< HEAD

import fs from 'fs';
import path from 'path';
console.log('🔧 Fixing JSX syntax and remaining parsing errors...');
// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); }
  }
  
  return files;
}

// Function to fix JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content;
  // Fix malformed JSX elements with extra slashes
  fixed = fixed.replace(/<(\w+)\s*\/\s*\/\s*\/>/g, '<$1 />');
  fixed = fixed.replace(/<(\w+)\s*\/\s*\/>/g, '<$1 />');
  // Fix duplicate imports
  fixed = fixed.replace(/import\s+React\s+from\s+['"]react['"];\s*import\s+React\s+from\s+['"]react['"];/g, 
    "import React from 'react';");
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+React\s+from\s+['"]react['"];\s*['"]use client['"];?/g, 
    "import React from 'react';\n'use client';");
  // Fix unterminated string literals
  fixed = fixed.replace(/';\s*$/gm, "';");
  fixed = fixed.replace(/";\s*$/gm, '";');
  // Fix malformed function declarations
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\.js\(\)/g, 'export default function $1()');
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\.tsx\(\)/g, 'export default function $1()');
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\.ts\(\)/g, 'export default function $1()');
  // Fix malformed JSX attributes
  fixed = fixed.replace(/(\w+):\s*['"]([^'"]*?)['"]\s*,/g, '$1: "$2",');
  // Fix unterminated object properties
  fixed = fixed.replace(/(\w+):\s*['"]([^'"]*?)['"]\s*}/g, '$1: "$2" }');
  // Fix semicolon issues in JSX
  fixed = fixed.replace(/;\s*$/gm, ';');
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
  // Fix broken JSX closing tags
  fixed = fixed.replace(/<\s*\/\s*div\s*>\s*;\s*$/gm, '</div>');
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(/g, 
    'export default function $1() {\n  return (');
  // Fix specific patterns that cause parsing errors
  fixed = fixed.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]lucide-react['"];\s*$/gm, 
    (match, imports) => {
      const cleanImports = imports.replace(/[^a-zA-Z0-9,\s]/g, '').trim();
      return `import { ${cleanImports} } from 'lucide-react';`;
    });
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/title:\s*['"]([^'"]*?)['"]\s*,/g, 'title: "$1",');
  fixed = fixed.replace(/description:\s*['"]([^'"]*?)['"]\s*,/g, 'description: "$1",');
  // Fix malformed object literals
  fixed = fixed.replace(/(\w+):\s*['"]([^'"]*?)['"]\s*}/g, '$1: "$2" }');
  // Fix broken JSX expressions
  fixed = fixed.replace(/{\s*([^}]*?)\s*}\s*$/gm, (match, content) => {
    if (content.trim() && !content.includes('{') && !content.includes('}')) {
      return `{ ${content.trim()} }`;
    }
    return match;
  });
  // Fix try-catch blocks
  fixed = fixed.replace(/try\s*{\s*([^}]*?)\s*}\s*catch\s*\(\s*error\s*\)\s*{\s*([^}]*?)\s*}/g, 
    'try {
    \n    $1\n
  } catch (error) {
    \n    $2\n
  }');
  // Fix malformed API functions
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\.js\(\)/g, 'export default function $1()');
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificPatterns(filePath, content) {
  let fixed = content;
  // Fix App.tsx specific issues
  if (filePath.includes('App.tsx')) {
    // Fix malformed JSX
    fixed = fixed.replace(/<Route\s+path="[^"]*"\s+element={<[^>]*>}\s*\/>/g, 
      (match) => {
        const pathMatch = match.match(/path="([^"]*)"/);
        const elementMatch = match.match(/element={<([^>]*)>}/);
        if (pathMatch && elementMatch) {
          return `<Route path="${pathMatch[1]}" element={<${elementMatch[1]} />} />`;
        }
        return match;
      });
  }
  
  // Fix page.tsx files
  if (filePath.includes('/page.tsx')) {
    // Fix common page structure issues
    fixed = fixed.replace(/export\s+default\s+function\s+Page\s*\(\s*\)\s*{\s*return\s*\(/g, 
      'export default function Page() {\n  return (');
    // Fix Helmet usage
    fixed = fixed.replace(/<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<\/Helmet>/g, 
      '<Helmet>\n        <title>$1</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Helmet>');
  }
  
  // Fix component files
  if (filePath.includes('/components/')) {
    // Fix malformed component exports
    fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(/g, 
      'export default function $1() {\n  return (');
    // Fix malformed JSX
    fixed = fixed.replace(/<\s*\/\s*div\s*>\s*;\s*$/gm, '</div>');
  }
  
  // Fix API files
  if (filePath.includes('/api/')) { // Fix malformed API functions
    fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\.js\(\)/g, 'export default function $1()');
    fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\.ts\(\)/g, 'export default function $1()'); }
  return fixed;
}

// Main function to process all files
function processFiles() {
  const files = findFiles('/workspace');
  let processedCount = 0;
  let errorCount = 0;
  console.log(`Found ${files.length} files to process...`);
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;
      // Apply fixes
      fixed = fixJSXSyntax(fixed);
      fixed = fixSpecificPatterns(filePath, fixed);
      // Only write if content changed
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        processedCount++;
        console.log(`✅ Fixed: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Files processed: ${processedCount}`);
  console.log(`   Errors encountered: ${errorCount}`);
  console.log(`   Total files checked: ${files.length}`);
}

// Run the fix
processFiles();
console.log('\n🎉 JSX syntax fixing completed!');
=======
import fs from "fs"
import path from "path"
// Function to fix JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content
  // Fix malformed JSX attributes with colons instead of equals
  fixed = fixed.replace(/name:\s*"([^"]+)"/g, 'name="$1"')
  fixed = fixed.replace(/content:\s*"([^"]+)"/g, 'content="$1"')
  fixed = fixed.replace(/className:\s*"([^"]+)"/g, 'className="$1"')
  fixed = fixed.replace(/id:\s*"([^"]+)"/g, 'id="$1"')
  fixed = fixed.replace(/type:\s*"([^"]+)"/g, 'type="$1"')
  fixed = fixed.replace(/href:\s*"([^"]+)"/g, 'href="$1"')
  fixed = fixed.replace(/src:\s*"([^"]+)"/g, 'src="$1"')
  fixed = fixed.replace(/alt:\s*"([^"]+)"/g, 'alt="$1"')
  fixed = fixed.replace(/title:\s*"([^"]+)"/g, 'title="$1"')
  fixed = fixed.replace(/value:\s*"([^"]+)"/g, 'value="$1"')
  fixed = fixed.replace(/placeholder:\s*"([^"]+)"/g, 'placeholder="$1"')
  // Fix stray quotes in JSX
  fixed = fixed.replace(/>"(\s*<)/g, ">$1")
  fixed = fixed.replace(/>"(\s*$)/gm, ">")
  fixed = fixed.replace(/"(\s*<)/g, "$1")
  fixed = fixed.replace(/"(\s*$)/gm, "")
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/\s*>/g, "")
  fixed = fixed.replace(/<\s*\/>/g, "")
  // Fix malformed self-closing tags
  fixed = fixed.replace(/<(\w+)\s*\/\s*>/g, "<$1 />")
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*:\s*"([^"]+)"\s*\}/g, '"$1"')
  // Fix malformed import statements with extra spaces
  fixed = fixed.replace(
    /import\s+{\s*(\w+)\s*}\s+from\s+"([^"]+)";/g,
    'import { $1 } from "$2";',
  )
  // Fix malformed function declarations
  fixed = fixed.replace(
    /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm,
    "const $1 = () => {\n",
  )
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*$/gm, "return (\n")
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/(\w+)>\s*"(\s*<)/g, "</$1>$2")
  // Fix malformed meta tags
  fixed = fixed.replace(
    /<meta\s+name:\s*"([^"]+)"\s+content:\s*"([^"]+)"\s*\/>/g,
    '<meta name="$1" content="$2" />',
  )
  // Fix malformed Helmet tags
  fixed = fixed.replace(/<Helmet>\s*$/gm, "<Helmet>\n")
  fixed = fixed.replace(/<\/Helmet>\s*$/gm, "\n</Helmet>")
  return fixed
}
// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const fixed = fixJSXSyntax(content)
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, "utf8")
      console.log(`Fixed: ${filePath}`)
      return true
}
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
}
// Function to recursively find and process files
function processDirectory(dirPath) {
  let filesProcessed = 0
  let filesFixed = 0
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath)
    for (const item of items) {
      const fullPath = path.join(currentPath, item)
      const stat = fs.statSync(fullPath)
      if (
        stat.isDirectory() &&
        !item.startsWith(".") &&
        item !== "node_modules"
      ) {
        walkDir(fullPath)
      } else if (
        stat.isFile() &&
        (item.endsWith(".tsx") || item.endsWith(".jsx"))
      ) {
        filesProcessed++
        if (processFile(fullPath)) {
          filesFixed++
}
}
  walkDir(dirPath)
  return { filesProcessed, filesFixed }
}
// Main execution
console.log("Starting JSX syntax fixes...")
const { filesProcessed, filesFixed } = processDirectory("./app")
console.log(
  `\nCompleted! Processed ${filesProcessed} files, fixed ${filesFixed} files.`,
)
>>>>>>> origin/main
