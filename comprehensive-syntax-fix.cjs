<<<<<<< HEAD
#!/usr/bin/env node;
;const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
console.log('🔧 Starting comprehensive syntax fixes...');
;
// Get all TypeScript and JavaScript files;
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {;
  let files = [];
  const items = fs.readdirSync(dir);
  ;
  for (const item of items) {;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    ;
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {;
      files.push(fullPath);
    }
=======
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")/ Function to fix common syntax errorsfunction fixSyntaxErrors(content) { / Fix extra commas in JSX attributes: className="." , -> className="."" content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {" return match.replace(/,\s*$/, "")}); "" / Fix extra commas in style objects: textAlign: "center", , -> textAlign: "center","" content = content.replace(/(\w+):\s*"[^"]*",\s*,/g, "$1: \"$2\",");"" content = content.replace(/(\w+):\s*"[^"]*",\s*,/g, "$1: "$2","); " / Fix malformed JSX elements: <div><Link -> <div><Link content = content.replace(/<div[^>]*><Link/g, (match) => {" return match.replace(/<div([^>]*)><Link/, "<div$1>\n <Link")}); " / Fix extra commas in JSX closing tags: </Link> , -> </Link>" content = content.replace(/<\/Link>\s*,\s*>/g, "</Link>"); " / Fix extra commas in JSX elements: >, -> >" content = content.replace(/>\s*,\s*</g, "><"); " / Fix extra commas in JSX attributes: required , -> required" content = content.replace(/required\s*,\s*className/g, "required\n className"); " / Fix extra commas in style objects: }, , -> }," content = content.replace(/}\s*,\s*,/g, "},"); " / Fix extra commas in JSX elements: >, -> >" content = content.replace(/>\s*,\s*$/gm, ">"); return content}/ Function to process a filefunction processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); const fixedContent = fixSyntaxErrors(conten;t;); if ( {" fs.writeFileSync(filePath, fixedContent, "utf8")) { {" fs.writeFileSync(filePath, fixedContent, "utf8")}" console.log(` Fixed: ${filePath}`); return true} return false} catch (error) {` console.error(` Error processing ${filePath}:`, error.message); return false}}/ Main execution"console.log(" Starting comprehensive syntax error fixing.");"const filesToFix = ["components/ContactForm.tsx"," "pages/_app.tsx"," "pages/cloud-devops.tsx"," "pages/cybersecurity.tsx"," "pages/docs.tsx"];let totalFixed = ;0;for (const file of filesToFix) { if (true) { if (processFile(file)) { totalFixed++} }}"console.log("\n Syntax fixing complete: ")) { ) { if (processFile(file)) { totalFixed++} }}"console.log("\n Syntax fixing complete: ")}"`console.log(` - Files fixed: ${totalFixed}`);"console.log(" - Issues encountered: 0");if ( {" console.log("\n All syntax errors have been fixed!")) { {" console.log("\n All syntax errors have been fixed!")}} else {" console.log("\n No syntax errors found!")}'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix extra commas in JSX "attributes": className="..." , -> className="..."
  content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {
    return match.replace(/,\s*$/, '')});
  // Fix extra commas in style "objects": textAlign: 'center', , -> "textAlign": 'center',
  content = content.replace(/(\w+):\s*'[^']*',\s*,/g, '$"1": \'$2\',');
  content = content.replace(/(\w+):\s*"[^"]*",\s*,/g, '$"1": "$2",');
  // Fix malformed JSX "elements": <div><Link -> <div><Link
  content = content.replace(/<div[^>]*><Link/g, (match) => {
    return match.replace(/<div([^>]*)><Link/, '<div$1>\n                <Link')});
  // Fix extra commas in JSX closing "tags": </Link> , -> </Link>
  content = content.replace(/<\/Link>\s*,\s*>/g, '</Link>');
  // Fix extra commas in JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*</g, '><');
  // Fix extra commas in JSX "attributes": required , -> required
  content = content.replace(/required\s*,\s*className/g, 'required\n            className');
  // Fix extra commas in style "objects":  }, , -> },
  content = content.replace(/}\s*,\s*,/g, '},');
  // Fix extra commas in JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*$/gm, '>');
  return content}
// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const fixedContent = fixSyntaxErrors(conten;t;);
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
      fs.writeFileSync(filePath, fixedContent, 'utf8')}
      return true}
    return false} catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false}
}
// Main execution
const filesToFix = ['components/ContactForm.tsx',
  'pages/_app.tsx',
  'pages/cloud-devops.tsx',
  'pages/cybersecurity.tsx',
  'pages/docs.tsx'
];
let totalFixed = ;0;
for (const file of filesToFix) {
  if () {
    if (processFile(file)) {
      totalFixed++}
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
  }
  ;
  return files;
}
<<<<<<< HEAD
;
// Advanced syntax fixes;
function fixAdvancedSyntax(content, filePath) {;
  let fixed = content;
  ;
  // Fix import statements;
  fixed = fixed.replace(/import\s+([^,]+),\s*$/gm, 'import $1;');
  fixed = fixed.replace(/import\s+([^,]+),\s*import/gm, 'import $1;\nimport');
  ;
  // Fix object syntax;
  fixed = fixed.replace(/"([^"]+)":\s*([^,}]+);/g, '"$1":$2,');
  fixed = fixed.replace(/(\w+):\s*([^,}]+);/g, '$1:$2,');
  ;
  // Fix array syntax;
  fixed = fixed.replace(/\[([^\]]+),\]/g, '[$1]');
  ;
  // Fix function parameters;
  fixed = fixed.replace(/\(\s*([^)]+),\s*\)/g, '($1)');
  ;
  // Fix trailing commas in objects and arrays;
  fixed = fixed.replace(/,(\s*[}\]])/g, '$1');
  ;
  // Fix semicolons after commas;
  fixed = fixed.replace(/;/g, ',');
  ;
  // Fix double commas;
  fixed = fixed.replace(/,+/g, ',');
  ;
  // Fix malformed JSX;
  fixed = fixed.replace(/<(\w+)([^>]*),>/g, '<$1$2>');
  ;
  // Fix string concatenation;
  fixed = fixed.replace(/'([^']+)',\s*'([^']+)'/g, "'$1$2'");
  ;
  return fixed;
}
;
// Process files;
const files = getAllFiles(__dirname);
let fixedCount = 0;
let errorCount = 0;
;
files.forEach(file => {;
  try {;
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixAdvancedSyntax(content, file);
    ;
    if (content !== fixed) {;
      fs.writeFileSync(file, fixed);
      console.log(`✅ Fixed:${path.relative(__dirname, file)}`);
      fixedCount++;
    }
  } catch (error) {;
    console.log(`❌ Error fixing ${path.relative(__dirname, file)} ${error.message}`);
    errorCount++;
  }
});
;
console.log(`\n🎉 Comprehensive syntax fixes completed!`);
console.log(`📊 Fixed:${fixedCount} files`);
console.log(`❌ Errors:${errorCount} files`);
;
// Try to run lint fix;
try {;
  console.log('\n🔧 Running ESLint fix...');
  execSync('npm run lint:fix', { stdio:'inherit' });
  console.log('✅ ESLint fix completed');
} catch (error) {;
  console.log('⚠️ ESLint fix failed, continuing...');
}
console.log('🔧 Starting comprehensive syntax fixes...');

// Get all TypeScript and JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (
      stat.isDirectory() &&
      !item.startsWith('.') &&
      item !== 'node_modules'
=======
) {
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
    ) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}
<<<<<<< HEAD

console.log(`✅ Fixed ${fixedCount} files`);
=======
}
if ( {
  ) {
     {
  }} else {
  }
    return match.replace(/,\s*$/, '')
  // Fix extra commas in style "objects": textAlign: 'center', , -> "textAlign"
  content = content.replace(/(\w+):\s*'[^']*',\s*,/g, '$"1"
  content = content.replace(/(\w+):\s*"[^"]*",\s*,/g, '$"1": "$2"
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
