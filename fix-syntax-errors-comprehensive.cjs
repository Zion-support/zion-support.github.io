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
