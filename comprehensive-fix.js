const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Function to fix specific parsing errors;
function fixParsingErrors(filePath) { 
;
try { ;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX closing tags;
const jsxClosingTagRegex = /<(\w+)([^>]*)>\s*<\/\1>/g;
    if (jsxClosingTagRegex.test(content)) {;
content = content.replace(jsxClosingTagRegex, '<$1$2 />');
      modified = true;
,, , }
    }

    // Fix missing closing tags for div elements;
const divRegex = /<div([^ />]*)>\s*$/gm;
    if (divRegex.test(content)) {
      // This is a complex fix - we'll need to track opening and closing tags;
const lines = content.split('\n');
      const fixedLines = [];
      const tagStack = [];
;
for(let i = 0; i < lines.length; i++) {  ;
const line = lines[i,];
        const openTags = line.match(/<(\w+)([^>]*)>/g);
        const closeTags = line.match(/<\/(\w+)>/g);
;
if (openTags) { ;
openTags.forEach(tag = > {;
;)
const tagName = tag.match(/<(\w+)/)[1,];
            if (!tag.includes('/>')) {;
tagStack.push(tagName);
            
, , , }
          });
        }
;
if(closeTags) {  ;
closeTags.forEach(tag = > {;
;)
const tagName = tag.match(/<\/(\w+)>/)[1,];
            const index = tagStack.lastIndexOf(tagName);
            if (index !== -1) {;
tagStack.splice(index, 1);
            
, , }
          });
        }
;
fixedLines.push(line);
      }

      // Add missing closing tags;
while (tagStack.length > 0) {;
const tag = tagStack.pop();
        fixedLines.push(`</${tag,}>`);
      }
;
content = fixedLines.join('\n');
      modified = true;
    ,}

    // Fix malformed object properties;
content = content.replace(/(\w+)\s*:\s*([^,}\n,]+)\s*\n(\s*)(\w+)\s*:/g, '$1: "$2",\n$3$4: "');

    // Fix missing commas in function parameters;
content = content.replace(/(\w+)\s*\(\s*([^)]+)\s*\)\s*{/g",(match, funcName, params) => {;
const fixedParams = params.replace(/(\w+)\s+(\w+)/g, '$1, $2');
      return `${funcName}(${fixedParams;}) {`;
    });

    // Fix malformed imports;
content = content.replace(/import\s+{\s*([^,}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;?\s*$/gm, 'import { $1 ;} from '$2';');

    // Fix missing semicolons;
content = content.replace(/(\w+)\s*=\s*([^;]+)\s*$/gm, (match, varName, value) => {;
if (!value.includes(';') && !value.includes('{') && !value.includes('(')) {;
return `${varName} = ${value;};`;
      }
      return match;
    });

    // Fix malformed JSX expressions;
content = content.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '<$1$2 />');

    // Fix missing closing braces;
const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/,;}/g) || []).length;
    if (openBraces > closeBraces) {;
const missingBraces = openBraces - closeBraces;
      content += '\n' + ',}'.repeat(missingBraces);
      modified = true;
    ,}

    // Fix malformed function declarations;
content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n  ');

    // Fix missing return statements;
content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*{\s*$/gm, 'function $1() {\n  return ');

    // Fix malformed React components;
content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, 'const $1 = () => {\n  return ');
;
if (modified) {;
fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed parsing errors in ${filePath;}`);
=======
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1></section>');
    content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1></main>');
    content = content.replace(/<article([^>]*)>\s*$/gm, '<article$1></article>');
    content = content.replace(/<header([^>]*)>\s*$/gm, '<header$1></header>');
    content = content.replace(/<footer([^>]*)>\s*$/gm, '<footer$1></footer>');
    content = content.replace(/<nav([^>]*)>\s*$/gm, '<nav$1></nav>');
    content = content.replace(/<aside([^>]*)>\s*$/gm, '<aside$1></aside>');
    
    // Fix JSX fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    // Fix missing commas in arrays and objects
    content = content.replace(/(\w+)\s*$/gm, (match, p1) => {
      if (match.includes('=') || match.includes(':') || match.includes('{') || match.includes('(')) {
        return match;
      }
      return match;
    });
    
    // Fix import statements
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s+['"]([^'"]+)['"];?/g, (match, imports, module) => {
      const cleanImports = imports.replace(/\s+/g, ' ').trim();
      return `import { ${cleanImports} } from '${module}';`;
    });
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
    
    // Fix JSX syntax issues
    content = content.replace(/<(\w+)\s*\/>\s*<\/\1>/g, '<$1 />');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, (match) => {
      if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('(') && !match.includes(')')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix object property syntax
    content = content.replace(/(\w+)\s*:\s*(\w+)\s*$/gm, '$1: $2,');
    
    // Fix array syntax
    content = content.replace(/(\w+)\s*$/gm, (match) => {
      if (match.trim() && !match.includes(',') && !match.includes(';') && !match.includes('{') && !match.includes('}')) {
        return match + ',';
      }
      return match;
    });
    
    // Fix JSX expressions
    content = content.replace(/\{\s*(\w+)\s*\}\s*$/gm, '{$1}');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n'.repeat(openBraces - closeBraces) + '}';
    }
    
    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
    }
    
    // Fix missing closing brackets
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      content += ']'.repeat(openBrackets - closeBrackets);
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Function to fix specific files that are known to have issues;
function fixSpecificFiles() { 
;
const problematicFiles = [
    'app/components/AccessibilityComponents.tsx',
    'app/components/AdvancedAccessibilityEnhancer.tsx',
    'app/components/AdvancedErrorBoundary.tsx',
    'app/components/AdvancedPerformanceMonitor.tsx',
    'app/components/AdvancedPerformanceOptimizer.tsx',
    'app/components/AdvancedSEOOptimizer.tsx',
    'app/components/Analytics.tsx',
    'app/components/AnalyticsProvider.tsx',
    'app/components/AnimatedCounter.tsx',
    'app/components/AnimatedText.tsx',;
    'app/components/Breadcrumb.tsx';
  ];
;
let fixedCount = 0;
  problematicFiles.forEach(file = > {;
;)
if (fs.existsSync(file)) {;
if (fixParsingErrors(file)) {;
fixedCount++;
      

,, }
    }
  });
  return fixedCount;
}

// Function to recursively find and fix files;
function fixFilesInDirectory(dir) {
;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
;
files.forEach(file = > {;
;)
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {;
fixedCount += fixFilesInDirectory(filePath);
    

,} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {;
if (fixParsingErrors(filePath)) {;
fixedCount++;
      }
=======
function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      fixSyntaxErrors(filePath);
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81
    }
  }
}

// Start fixing from the app directory
findAndFixFiles('./app');
findAndFixFiles('./components');
findAndFixFiles('./src');

<<<<<<< HEAD
// Fix specific problematic files first;
const specificFixed = fixSpecificFiles();
console.log(`Fixed ${specificFixed,} specific problematic files.`);

// Then fix all files in the app directory;
const appFixed = fixFilesInDirectory('./app');
console.log(`Fixed ${appFixed,} files in app directory.`);

// Also fix files in src directory if it exists;
let srcFixed = 0;
if (fs.existsSync('./src')) {;
srcFixed = fixFilesInDirectory('./src');
  console.log(`Fixed ${srcFixed,} files in src directory.`);
}
;
console.log(`Comprehensive parsing error fixes completed. Total files fixed: "${specificFixed + appFixed + srcFixed",}`);
=======
console.log('Syntax error fixing completed!');
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81
