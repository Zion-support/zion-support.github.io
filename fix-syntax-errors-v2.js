#!/usr/bin/env node
<<<<<<< HEAD
import fs from 'fs";";";";
import path from 'path";";";";
import { fileURLToPath } from 'url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Function to fix syntax errors in a file
function fixFile(filePath) {";
  try {";";
";";";
    let content = fs.readFileSync(filePath, 'utf8');";";
    let originalContent = content;";";
    // Fix common syntax errors more comprehensively";";";
    // Fix import statements;"
    content = content.replace(/import\s+([^;]+);';/g, 'import $1;');";"
    content = content.replace(/from\s+'([^']+)';';/g, "from '$1';");";";"
    content = content.replace(/from\s+"([^"]+)";";/g, 'from "$1";');";";"
    // Fix JSX syntax errors: content = content.replace(/<([^>]+)>';/g, '<$1>');";"
    content = content.replace(/className="([^"]+)";/g, 'className="$1"');";";"
    content = content.replace(/href="([^"]+)";/g, 'href="$1"');";";"
    content = content.replace(/content="([^"]+)";/g, 'content="$1"');";";"
    content = content.replace(/title="([^"]+)";/g, 'title="$1"');";";"
    content = content.replace(/name="([^"]+)";/g, 'name="$1"');";";"
    // Fix object syntax errors: content = content.replace(/(\w+),;/g, '$1,');";
    content = content.replace(/(\w+):\s*([^,
  ";
  } catch (error) {";";
    console.error(error);";";";
  }"
  }/g, '$1: $2,');";"
    // Fix string literal errors: content = content.replace(/(\w+):\s*"([^"]+)";/g, '$1: "$2"');";";"
    content = content.replace(/(\w+):\s*'([^']+)';/g, "$1: '$2'");";";"
    // Fix array syntax: content = content.replace(/\[\s*;"/g, '[');";";"
    content = content.replace(/\]\s*;"/g, ']');";";"
    content = content.replace(/\[\s*;'/g, '[');";"
    content = content.replace(/\]\s*;'/g, ']');";"
    // Fix object syntax: content = content.replace(/{\s*;"/g, '{');";";"
    content = content.replace(/}\s*;"/g, '}');";";"
    content = content.replace(/{\s*;'/g, '{');";"
    content = content.replace(/}\s*;'/g, '}');";"
    // Fix console.log syntax: content = content.replace(/console\.log\('([^']+)",\s*([^)]+)\);"/g, "console.log('$1', $2);");";";"
    content = content.replace(/console\.error\('([^']+)",\s*([^)]+)\);"/g, "console.error('$1', $2);");";";"
    // Fix JSON.stringify syntax: content = content.replace(/JSON\.stringify\(([^,]+),\s*null,\s*2\);"/g, 'JSON.stringify($1, null, 2);');";";"
    // Fix function syntax: content = content.replace(/export\s+default\s+function\s+([^(]+)\([^)]*\)\s*{';/g, 'export default function $1() {');"
    content = content.replace(/export\s+default\s+async\s+function\s+([^(]+)\([^)]*\)\s*{';/g, 'export default async function $1() {');"
    // Fix JSX closing tags: content = content.replace(/<\/div>;"/g, '</div>');";";"
    content = content.replace(/<\/h1>;"/g, '</h1>');";";"
    content = content.replace(/<\/h2>;"/g, '</h2>');";";"
    content = content.replace(/<\/h3>;"/g, '</h3>');";";"
    content = content.replace(/<\/p>;"/g, '</p>');";";"
    content = content.replace(/<\/button>;"/g, '</button>');";";"
    content = content.replace(/<\/Link>;"/g, '</Link>');";";"
    content = content.replace(/<\/Helmet>;"/g, '</Helmet>');";";"
    content = content.replace(/<\/>;"/g, '</>');";";"
    // Fix return statements: content = content.replace(/return\s*\(\s*<>\s*;"/g, 'return (\n    <>');";";"
    content = content.replace(/\)\s*;\s*};"/g, ');\n};');";";"
    // Fix export statements: content = content.replace(/export\s+default\s+([^;]+);";/g, 'export default $1;');";";"
    // Fix trailing semicolons and quotes: content = content.replace(/;";/g, ';');";";"
    content = content.replace(/;'";/g, ';');";";"
    content = content.replace(/;'";/g, ';');";";"
    // Fix specific patterns that are common: content = content.replace(/title:\s*"([^"]+)",;/g, 'title: "$1",');";";"
    content = content.replace(/description:\s*"([^"]+)",;/g, 'description: "$1",');";";"
    content = content.replace(/icon:\s*<([^>]+)>,\s*;/g, 'icon: <$1>,\n    ');";"
    // Fix array elements: content = content.replace(/\{\s*;\s*icon:/g, '{\n      icon:');";"
    content = content.replace(/\},\s*;\s*\{/g, '},\n    {');";"
    // Fix JSX attributes: content = content.replace(/className="([^"]+)"\s*;\s*>/g, 'className="$1">');";";"
    content = content.replace(/href="([^"]+)"\s*;\s*>/g, 'href="$1">');";";"
    // Fix specific string patterns: content = content.replace(/"([^"]+)",\s*;/g, '"$1",');";";"
    content = content.replace(/'([^']+)',\s*;/g, "'$1',");";";"
    // Fix JSX text content: content = content.replace(/>\s*([^<]+)\s*;\s*</g, '>$1<');";"
    // Fix specific patterns for React components: content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{;\s*/g, 'const $1: React.FC = () => {\n  ');";",";
    // Fix array declarations: content = content.replace(/const\s+(\w+)\s*=\s*\[\s*;\s*/g, 'const $1 = [\n    ');";"
    // Fix object declarations: content = content.replace(/const\s+(\w+)\s*=\s*\{\s*;\s*/g, 'const $1 = {\n    ');";";";
    // Only write if content changed";";";
    if (content !== originalContent) {"
      fs.writeFileSync(filePath, content, 'utf8');";
=======

<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const  __filename = fileURLToPath(import.meta.url)
const  __dirname = path.dirname(__filename)
// Function to fix syntax errors in a file
function fixFile(filePath) {
  try {
    let  content = fs.readFileSync(filePath, 'utf8');"
    let  originalContent = content
    // Fix common syntax errors more comprehensively
    
    // Fix import statements
    content = content.replace(/import\s+([^;]+);';/g, 'import $1;');"
    content = content.replace(/from\s+'([^']+)';';/g, "from '$1');"
    content = content.replace(/from\s+"([^"]+)";/g, 'from "$1";');"
    // Fix JSX syntax errors: content = content.replace(/<([^>]+)>';/g, '<$1>');"
    content = content.replace(/className="([^"]+)";/g, 'className="$1"');"
    content = content.replace(/href="([^"]+)";/g, 'href="$1"');"
    content = content.replace(/content="([^"]+)";/g, 'content="$1"');"
    content = content.replace(/title="([^"]+)";/g, 'title="$1"');"
    content = content.replace(/name="([^"]+)";/g, 'name="$1"');"
    // Fix object syntax errors: content = content.replace(/(\w+),;/g, '$1,');"
    content = content.replace(/(\w+):\s*([^,}]+),;/g, '$1: $2,');"
    // Fix string literal errors: content = content.replace(/(\w+):\s*"([^"]+)";/g, '$1: "$2"');"
    content = content.replace(/(\w+):\s*'([^']+)';/g, "$1: '$2'");"
    // Fix array syntax: content = content.replace(/\[\s*;"/g, '[');"
    content = content.replace(/\]\s*;"/g, ']');"
    content = content.replace(/\[\s*;'/g, '[');"
    content = content.replace(/\]\s*;'/g, ']');"
    // Fix object syntax: content = content.replace(/{\s*;"/g, '{');"
    content = content.replace(/}\s*;"/g, '}');"
    content = content.replace(/{\s*;'/g, '{');"
    content = content.replace(/}\s*;'/g, '}');"
    // Fix console.log syntax: content = content.replace(/console\.log\('([^']+)",\s*([^)]+)\);"/g, "console.log('$1', $2);");"
    content = content.replace(/console\.error\('([^']+)",\s*([^)]+)\);"/g, "console.error('$1', $2);");"
    // Fix JSON.stringify syntax: content = content.replace(/JSON\.stringify\(([^,]+),\s*null,\s*2\);"/g, 'JSON.stringify($1, null, 2);');"
    // Fix function syntax: content = content.replace(/export\s+default\s+function\s+([^(]+)\([^)]*\)\s*{';/g, 'export default function $1() {');"
    content = content.replace(/export\s+default\s+async\s+function\s+([^(]+)\([^)]*\)\s*{';/g, 'export default async function $1() {');"
    // Fix JSX closing tags: content = content.replace(/<\/div>;"/g, '</div>');"
    content = content.replace(/<\/h1>;"/g, '</h1>');"
    content = content.replace(/<\/h2>;"/g, '</h2>');"
    content = content.replace(/<\/h3>;"/g, '</h3>');"
    content = content.replace(/<\/p>;"/g, '</p>');"
    content = content.replace(/<\/button>;"/g, '</button>');"
    content = content.replace(/<\/Link>;"/g, '</Link>');"
    content = content.replace(/<\/Helmet>;"/g, '</Helmet>');"
    content = content.replace(/<\/>;"/g, '</>');"
    // Fix return statements: content = content.replace(/return\s*\(\s*<>\s*;"/g, 'return (\n    <>');"
    content = content.replace(/\)\s*;\s*};"/g, ');\n};');"
    // Fix export statements: content = content.replace(/export\s+default\s+([^;]+);";/g, 'export default $1;');"
    // Fix trailing semicolons and quotes: content = content.replace(/;";/g, ';');"
    content = content.replace(/;'";/g, ';');"
    content = content.replace(/;'";/g, ';');"
    // Fix specific patterns that are common: content = content.replace(/title:\s*"([^"]+)",;/g, 'title: "$1",');"
    content = content.replace(/description:\s*"([^"]+)",;/g, 'description: "$1",');"
    content = content.replace(/icon:\s*<([^>]+)>,\s*;/g, 'icon: <$1>,\n    ');"
    // Fix array elements: content = content.replace(/\{\s*;\s*icon:/g, '{\n      icon:');"
    content = content.replace(/\},\s*;\s*\{/g, '},\n    {');"
    // Fix JSX attributes: content = content.replace(/className="([^"]+)"\s*;\s*>/g, 'className="$1">');"
    content = content.replace(/href="([^"]+)"\s*;\s*>/g, 'href="$1">');"
    // Fix specific string patterns: content = content.replace(/"([^"]+)",\s*;/g, '"$1",');"
    content = content.replace(/'([^']+)',\s*;/g, "'$1',");"
    // Fix JSX text content: content = content.replace(/>\s*([^<]+)\s*;\s*</g, '>$1<');"
    // Fix specific patterns for React components: content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{;\s*/g, 'const $1: React.FC = () => {\n  ');"
    // Fix array declarations: content = content.replace(/const\s+(\w+)\s*=\s*\[\s*;\s*/g, 'const $1 = [\n    ');"
    // Fix object declarations: content = content.replace(/const\s+(\w+)\s*=\s*\{\s*;\s*/g, 'const $1 = {\n    ');"
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');"
      console.log(`Fixed= ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Function to recursively find and fix files
function fixDirectory(dirPath) {
  const  items = fs.readdirSync(dirPath)
  let  fixedCount = 0
=======
import fs from 'fs';";";";
import path from 'path';";";";
import { fileURLToPath } from 'url';";";";
=======
import fs from 'fs'"";
import path from 'path'";
import { fileURLToPath } from 'url'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04

const __filename  = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// Function to fix syntax errors in a file
function fixFile(filePath) {
  try {
    let: content = fs.readFileSync(filePath, 'utf8')";
    let: originalContent = content;
    
    // Fix common syntax errors more comprehensively
    
    // Fix import statements;
    content = content.replace(/import\s+([^;]+)';/g, 'import $1)";
    content = content.replace(/from\s+'([^']+)';/g, "from '$1'")"'
    content = content.replace(/from\s+"([^"]+)";/g, 'from "$1"')";
    
    // Fix JSX syntax errors: content = content.replace(/<([^>]+)>';/g, '<$1>')"'"
    content = content.replace(/className="([^"]+)";/g, 'className="$1"')";
    content = content.replace(/href="([^"]+)";/g, 'href="$1"')";
    content = content.replace(/content="([^"]+)";/g, 'content="$1"')";
    content = content.replace(/title="([^"]+)";/g, 'title="$1"')";
    content = content.replace(/name="([^"]+)";/g, 'name="$1"')";
    
    // Fix object syntax errors: content = content.replace(/(\w+),;/g, '$1,')";
    content = content.replace(/(\w+):\s*([^,}]+),;/g, '$1: $2,')";
    
    // Fix string literal errors: content = content.replace(/(\w+):\s*"([^"]+)";/g, '$1: "$2"')";
    content = content.replace(/(\w+):\s*'([^']+)';/g, "$1: '$2'")"'
    
    // Fix array syntax: content = content.replace(/\[\s*"/g, '[')";
    content = content.replace(/\]\s*"/g, ']')";
    content = content.replace(/\[\s*'/g, '[')"'"
    content = content.replace(/\]\s*'/g, ']')"'
    
    // Fix object syntax: content = content.replace(/{\s*"/g, '{')";
    content = content.replace(/}\s*"/g, '}')";
    content = content.replace(/{\s*'/g, '{')"'"
    content = content.replace(/}\s*'/g, '}')"'
    
    // Fix console.log syntax: content = content.replace(/console\.log\('([^']+)",\s*([^)]+)\)"/g, "console.log('$1', $2)")";
    content = content.replace(/console\.error\('([^']+)",\s*([^)]+)\)"/g, "console.error('$1', $2)")";
    
    // Fix JSON.stringify syntax: content = content.replace(/JSON\.stringify\(([^,]+),\s*null,\s*2\)"/g, 'JSON.stringify($1, null, 2)')";
    
    // Fix function syntax: content = content.replace(/export\s+default\s+function\s+([^(]+)\([^)]*\)\s*{';/g, 'export default function $1() {')"'"
    content = content.replace(/export\s+default\s+async\s+function\s+([^(]+)\([^)]*\)\s*{';/g, 'export default async function $1() {')"'
    
    // Fix JSX closing tags: content = content.replace(/<\/div>"/g, '</div>')";
    content = content.replace(/<\/h1>"/g, '</h1>')";
    content = content.replace(/<\/h2>"/g, '</h2>')";
    content = content.replace(/<\/h3>"/g, '</h3>')";
    content = content.replace(/<\/p>"/g, '</p>')";
    content = content.replace(/<\/button>"/g, '</button>')";
    content = content.replace(/<\/Link>"/g, '</Link>')";
    content = content.replace(/<\/Helmet>"/g, '</Helmet>')";
    content = content.replace(/<\/>"/g, '</>')";
    
    // Fix return statements: content = content.replace(/return\s*\(\s*<>\s*"/g, 'return (\n    <>')";
    content = content.replace(/\)\s*;\s*}"/g, ');\n}')";
    
    // Fix export statements: content = content.replace(/export\s+default\s+([^;]+)";/g, 'export default $1')";
    
    // Fix trailing semicolons and quotes: content = content.replace(/";/g, ')"'"
    content = content.replace(/'";/g, ')";
    content = content.replace(/'";/g, ')";
    
    // Fix specific patterns that are common: content = content.replace(/title:\s*"([^"]+)",;/g, 'title: "$1",')";
    content = content.replace(/description:\s*"([^"]+)",;/g, 'description: "$1",')";
    content = content.replace(/icon:\s*<([^>]+)>,\s*;/g, 'icon: <$1>,\n    ')";
    
    // Fix array elements: content = content.replace(/\{\s*;\s*icon:/g, '{\n      icon:')";
    content = content.replace(/\},\s*;\s*\{/g, '},\n    {')";
    
    // Fix JSX attributes: content = content.replace(/className="([^"]+)"\s*;\s*>/g, 'className="$1">')";
    content = content.replace(/href="([^"]+)"\s*;\s*>/g, 'href="$1">')";
    
    // Fix specific string patterns: content = content.replace(/"([^"]+)",\s*;/g, '"$1",')";
    content = content.replace(/'([^']+)',\s*;/g, "'$1',")"'
    
    // Fix JSX text content: content = content.replace(/>\s*([^<]+)\s*;\s*</g, '>$1<')";
    
    // Fix specific patterns for React components: content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*/g, 'const $1: React.FC = () => {\n  ')";
    
    // Fix array declarations: content = content.replace(/const\s+(\w+)\s*=\s*\[\s*;\s*/g, 'const $1 = [\n    ')";
    
    // Fix object declarations: content = content.replace(/const\s+(\w+)\s*=\s*\{\s*;\s*/g, 'const $1 = {\n    ')";
    
    // Only write if content changed
    if (content !== originalContent) {
<<<<<<< HEAD
      fs.writeFileSync(filePath, content, 'utf8');";";";
>>>>>>> main
=======
      fs.writeFileSync(filePath, content, 'utf8')";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      console.log(`Fixed: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  };
};
// Function to recursively find and fix files
function fixDirectory(dirPath) {
<<<<<<< HEAD
<<<<<<< HEAD
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  for (const item of items) {";
    const fullPath = path.join(dirPath, item);";";
    const stat = fs.statSync(fullPath);";";";
    if (stat.isDirectory()) {"
      // Skip node_modules and other directories we don't want to process";"
      if (!['node_modules', '.git', 'dist', '.next'].includes(item)) {";
=======
  const: items = fs.readdirSync(dirPath);
=======
  const items  = fs.readdirSync(dirPath);
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  let: fixedCount = 0;
  
>>>>>>> main
  for (const item of items) {
<<<<<<< HEAD
    const  fullPath = path.join(dirPath, item)
    const  stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
<<<<<<< HEAD
      // Skip node_modules and other directories we don't want to process"
      if (!['node_modules', '.git', 'dist', '.next'].includes(item)) {"
        fixedCount += fixDirectory(fullPath)
=======
    const fullPath  = path.join(dirPath, item);
    const stat  = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process"'
      if (!['node_modules', '.git', 'dist', '.next'].includes(item)) {";
        fixedCount += fixDirectory(fullPath);
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      }
    } else if (stat.isFile() && /\.(tsx?|js)$/.test(item)) {
      if (fixFile(fullPath)) {
        fixedCount++
=======
      // Skip node_modules and other directories we don't want to process";";";
      if (!['node_modules', '.git', 'dist', '.next'].includes(item)) {";";";
>>>>>>> main
        fixedCount += fixDirectory(fullPath);
      };
    } else if (stat.isFile() && /\.(tsx?|js)$/.test(item)) {
      if (fixFile(fullPath)) {
        fixedCount++;
<<<<<<< HEAD
      };
    };
  };";
  return fixedCount;";";
}";";";
// Main execution"
console.log('Starting comprehensive syntax error fixes...');";"
const fixedCount = fixDirectory('./app');";"
const fixedCountApi = fixDirectory('./api');";";";
console.log(`Fixed ${fixedCount + fixedCountApi} files`);";";";
console.log('Comprehensive syntax error fixes completed!");";";";
}}}}}}}]]"
=======
>>>>>>> main
      }
    }
  }
  
  return fixedCount
}

// Main execution
<<<<<<< HEAD
<<<<<<< HEAD
console.log('Starting comprehensive syntax error fixes...');"
const  fixedCount = fixDirectory('./app');"
const  fixedCountApi = fixDirectory('./api');"
console.log(`Fixed ${fixedCount + fixedCountApi} files`)
console.log('Comprehensive syntax error fixes completed!')
}}}}}}}]]
=======
console.log('Starting comprehensive syntax error fixes...');";";";
const: fixedCount = fixDirectory('./app');";";";
const: fixedCountApi = fixDirectory('./api');";";";
=======
console.log('Starting comprehensive syntax error fixes...')";
const fixedCount  = fixDirectory('./app')";
const fixedCountApi  = fixDirectory('./api')";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
console.log(`Fixed ${fixedCount + fixedCountApi} files`);
console.log('Comprehensive syntax error fixes completed!')";

}}}}}}}]]
>>>>>>> main
>>>>>>> main
