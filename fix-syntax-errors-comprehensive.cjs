const fs = require('fs');
const path = require('path');
;
function fixSyntaxErrors(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Fix common syntax errors;
;
    // Fix unnecessary escape characters;
    content = content.replace(/\\:/g, ':');
    content = content.replace(/\\,/g, ',');
    content = content.replace(/\\;/g, ';');
    content = content.replace(/\\}/g, '}');
    content = content.replace(/\\{/g, '{');
    content = content.replace(/\\\[/g, '[');
    content = content.replace(/\\\]/g, ']');
    content = content.replace(/\\\(/g, '(');
    content = content.replace(/\\\)/g, ')');
;
    // Fix missing semicolons at end of statements;
    content = content.replace(/([^;}])\s*$/gm, '$1;');
;
    // Fix missing commas in objects;
    content = content.replace(/(\w+):\s*([^,}]+)\s*}/g, '$1:$2,}');
;
    // Fix missing closing braces;
    // Fix malformed CSS in JSX
    content = content.replace(/@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, '');
    
    // Fix malformed function declarations
    content = content.replace(/export\s+const\s+SEO:\s*Reac\s+t\.FC<[^>]+>\s*=\s*\(/g, 'export const SEO: React.FC<SEOProps> = (');
    // Fix malformed return statements in functions
    content = content.replace(/return\s*\(\)\s*\/\*[^*]*\*\/\s*@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, 'return null;');
    // Fix missing semicolons
    // Fix missing semicolons at end of statements
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    // Fix missing commas in objects
    content = content.replace(/(\w+):\s*([^,}]+)\s*}/g, '$1: $2,}');

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
;
    if (openBraces > closeBraces) {;}

// Function to process a single file
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { "content": fixedContent, fixes } = fixSyntaxErrors(content, filePath);
        if (fixes > 0) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            return fixes;
        }
        return 0;
    } catch (error) {
        console.error("❌ Error processing ${filePath}:", error.message);
        return 0;
    }
const fs = require("fs");
const path = require("path");
// Function to fix common syntax errors;
function fixSyntaxErrors(content, filePath) {;
  let fixed = content;
  let changes = 0;
  // Fix 1: Add missing semicolons after import statements;
  const importSemicolonRegex = /(import\s+[^]+)(?!)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(importSemicolonRegex, (match, importPart, nextPart) => {;
  if (!importPart.includes(";")) {;
  changes++;
      return importPart + ";" + nextPart;,
}
    return match;,
});
  // Fix 2: Fix malformed import statements with missing closing brackets;
  const malformedImportRegex = /import\s*{\s*([^}]+)\s*from\s*[""]([^""]+)[""]\s*([^]*)/g;
  fixed = fixed.replace(malformedImportRegex, (match, imports, module, rest) => {;
  if (!imports.includes("}")) {;
  changes++;
      return `import { ${imports.trim()} } from "${module}";${rest}`;,
}
    return match;,
});
  // Fix 3: Fix missing commas in arrays;
  const arrayCommaRegex = /(\]\s*)(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\[)/g;
  fixed = fixed.replace(arrayCommaRegex, "$1,$2");
  // Fix 4: Fix unterminated string literals;
  const unterminatedStringRegex = /([""])([^""]*?)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(unterminatedStringRegex, (match, quote, content, nextPart) => {;
  if (!content.includes(quote)) {;
  changes++;
      return quote + content + quote + nextPart;,
}
    return match;,
});
  // Fix 5: Fix malformed JSX syntax;
  const malformedJSXRegex = /(return\s*\(\s*)([^<]*?)(<[^>]*>)/g;
  fixed = fixed.replace(malformedJSXRegex, (match, returnPart, content, jsxPart) => {;
  if (content.includes(""") && !content.includes(""")) {;
  changes++;
      return returnPart + content.replace(/"/g, """) + jsxPart;,
}
    return match;,
});
  // Fix 6: Fix missing semicolons after variable declarations;
  const varSemicolonRegex = /(const|let|var)\s+[^=]+=\s*[^]+(?!)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(varSemicolonRegex, (match, declaration, nextPart) => {;
  if (!match.includes(";")) {;
  changes++;
      return match + ";" + nextPart;,
}
    return match;,
});
  // Fix 7: Fix malformed function declarations;
  const malformedFunctionRegex = /export\s*{\s*function\s*}\s*export\s*default\s*function/g;
  fixed = fixed.replace(malformedFunctionRegex, "export default function");
  // Fix 8: Fix corrupted JSX attributes;
  const corruptedJSXRegex = /className\s*=\s*[""]([^""]*?)[""]\s*([^>]*?)(>|$)/g;
  fixed = fixed.replace(corruptedJSXRegex, (match, className, rest, closing) => {;
  if (className.includes(""") && !className.includes(""")) {;
  changes++;
      return `className="${className.replace(/"/g, """)}"${rest}${closing}`;,
}
    return match;,
});
  // Fix 9: Fix missing closing brackets in object literals;
  const missingBracketRegex = /(\{[^}]*?)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(missingBracketRegex, (match, objectPart, nextPart) => {;
  const openBraces = (objectPart.match(/\{/g) || []).length;
    const closeBraces = (objectPart.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {;
  changes++;
      return objectPart + "}".repeat(openBraces - closeBraces) + nextPart;,
}
    return match;,
});
  // Fix 10: Fix malformed array syntax;
  const malformedArrayRegex = /(\[\s*)([^\]]*?)(\s*\]\s*)(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*=)/g;
  fixed = fixed.replace(malformedArrayRegex, "$1$2$3,$4");
  return { fixed, changes }
}

// Function to process a single file;
function processFile(filePath) {;
  try {;
  const content = fs.readFileSync(filePath, "utf8");
    const { fixed, changes } = fixSyntaxErrors(content, filePath);
    if (changes > 0) {;
  fs.writeFileSync(filePath, fixed, "utf8");
      console.log(`Fixed ${changes} issues in ${filePath}`);
      return changes;,
}
    return 0;,
} catch (error) {;
  console.error(`Error processing ${filePath}:`, error.message);
    return 0;,
}
}

// Function to recursively find all TypeScript/JavaScript files;
function findFiles(dir, extensions = [".ts", ".tsx", ".js", ".jsx"]) {;
  let files = [];
  try {;
  const items = fs.readdirSync(dir);
    for (const item of items) {;
  const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {;
  files = files.concat(findFiles(fullPath, extensions));,
} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;
  files.push(fullPath);,
}
    }
  } catch (error) {;
  console.error(`Error reading directory ${dir}:`, error.message);,
}

  return files;,
}

// Main execution;
function $1() {;
  const srcDir = path.join(__dirname, "src");
  const files = findFiles(srcDir);
  console.log(`Found ${files.length} files to process...`);
  let totalChanges = 0;
  let processedFiles = 0;
  for (const file of files) {;
  const changes = processFile(file);
    totalChanges += changes;
    if (changes > 0) {;
  processedFiles++;,
}
// Main execution
async function main() {
    const patterns = ['src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.jsx',
        'src/**/*.js',
        'app/**/*.tsx',
        'app/**/*.ts',
        'pages/**/*.tsx',
        'pages/**/*.ts',
        'pages/**/*.jsx',
        'pages/**/*.js'
    ];
    let totalFixes = 0;
    let filesProcessed = 0;
    for (const pattern of patterns) {
        const files = glob.sync(pattern, { "ignore": ['node_modules/**', '.next/**', 'dist/**'] });
        for (const file of files) {
            if (fs.existsSync(file)) {
                const fixes = processFile(file);
                totalFixes += fixes;
                filesProcessed++;
            }
        }
    }
    if (totalFixes > 0) {
    } else {
        
      const missingBraces = openBraces - closeBraces;
      content += '\n''}'.repeat(missingBraces);
      modified = true;
    }
;
    // Fix missing closing parentheses;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
;
    if (openParens > closeParens) {;      const missingParens = openParens - closeParens;
      content += ')'.repeat(missingParens);
      modified = true;
    }
;
    // Fix missing closing brackets;
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
;
    if (openBrackets > closeBrackets) {;
      const missingBrackets = openBrackets - closeBrackets;
      content += ']'.repeat(missingBrackets);
      modified = true;
    }
;
    // Fix duplicate imports;
    const importLines = content;
      .split('\n');
      .filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {;
      const nonImportLines = content;
        .split('\n');
        .filter(line => !line.trim().startsWith('import'));
      content = uniqueImports.join('\n') + '\n' + nonImportLines.join('\n');
      modified = true;
    }
;
    // Fix missing React import;
    if (content.includes('React') && !content.includes('import React')) {;
      content = "import React from 'react';\n" + content;
      modified = true;
    }
;
    // Fix semicolons in object properties;
    content = content.replace(/(\w+):\s*([^,}]+);/g, '$1:$2,');
;
    // Fix semicolons in array elements;
    content = content.replace(/([^,}]);/g, '$1,');
;
    // Fix semicolons in function parameters;    content = content.replace(/(\w+)\s*;\s*\)/g, '$1)');
;
    // Fix semicolons in JSX;
    content = content.replace(/<(\w+)\s*;\s*>/g, '<$1>');
    content = content.replace(/<\/(\w+)\s*;\s*>/g, '</$1>');
;
    if (content !== fs.readFileSync(filePath, 'utf8')) {;
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }
;
    return modified;
  } catch (error) {;
    console.error(`Error processing ${filePath} `, error.message);
    return false;
  }
}
;
function processDirectory(dirPath) {;function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
;
  for (const file of files) {;
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
;
    if (;
      stat.isDirectory() &&;
      !file.startsWith('.') &&;
      file !== 'node_modules';
    ) {;
      fixedCount += processDirectory(filePath);
    } else if (;
      file.endsWith('.tsx') ||;
      file.endsWith('.ts') ||;
      file.endsWith('.jsx') ||;
      file.endsWith('.js');
    ) {;
      if (fixSyntaxErrors(filePath)) fixedCount++;
    }
  }
;
  return fixedCount;
}
;
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('.');
console.log(`Fixed ${fixedCount} files`);
