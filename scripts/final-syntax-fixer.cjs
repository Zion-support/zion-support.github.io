#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")async function finalSyntaxFixer() {" console.log(" Starting Final Syntax Fixer."); const fixReport = { timestamp: new Date().toISOString()," filesProcessed: []," fixesApplied: []," errors: [] }; try { / Get all TypeScript/JavaScript files" const files = findCodeFiles(".;";); for (const file of files) { try {" const originalContent = fs.readFileSync(file, "utf8";); let content = originalConte;n;t; let fixes = [];" / Fix 1: Remove semicolons after object properties const semicolonAfterProperty = /(\w+)\s*:\s*([^}];+;);\s*([}])/g; const semicolonMatches = content.match(semicolonAfterProperty;); if ( {"" content = content.replace(semicolonAfterProperty, "$1: $2$3")) { {"" content = content.replace(semicolonAfterProperty, "$1: $2$3")} fixes.push(`Removed ${semicolonMatches.length} semicolons after object properties`)}" / Fix 2: Fix object property syntax const objectPropertySemicolon = /(\w+)\s*:\s*([^}];+;);\s*([}])/g; const objectMatches = content.match(objectPropertySemicolon;); if ( {"" content = content.replace(objectPropertySemicolon, "$1: $2$3")) { {"" content = content.replace(objectPropertySemicolon, "$1: $2$3")}` fixes.push(`Fixed ${objectMatches.length} object property syntax errors`)}" / Fix 3: Fix CSS-in-JS syntax const cssPropertySemicolon = /(\w+)\s*:\s*([^}];+;);\s*([}])/g; const cssMatches = content.match(cssPropertySemicolon;); if ( {"" content = content.replace(cssPropertySemicolon, "$1: $2$3")) { {"" content = content.replace(cssPropertySemicolon, "$1: $2$3")}` fixes.push(`Fixed ${cssMatches.length} CSS-in-JS syntax errors`)}" / Fix 4: Fix string concatenation in object properties const stringConcatSemicolon = /(\w+)\s*:\s*([^}];+;);\s*([}])/g; const stringMatches = content.match(stringConcatSemicolon;); if ( {"" content = content.replace(stringConcatSemicolon, "$1: $2$3")) { {"" content = content.replace(stringConcatSemicolon, "$1: $2$3")}` fixes.push(`Fixed ${stringMatches.length} string concatenation syntax errors`)}" / Fix 5: Fix array syntax const arraySemicolon = /\[([^\]];+;);\s*([^\]]*)\]/g; const arrayMatches = content.match(arraySemicolon;); if ( {" content = content.replace(arraySemicolon, "[$1$2]")) { {" content = content.replace(arraySemicolon, "[$1$2]")}` fixes.push(`Fixed ${arrayMatches.length} array syntax errors`)}" / Fix 6: Fix function parameters const functionParamSemicolon = /function\s+\w+\s*\(([^)];+;);\s*([^)]*)\)/g; const functionMatches = content.match(functionParamSemicolon;); if ( {" content = content.replace(functionParamSemicolon, "function $1($2)")) { {" content = content.replace(functionParamSemicolon, "function $1($2)")}` fixes.push(`Fixed ${functionMatches.length} function parameter syntax errors`)}" / Fix 7: Fix JSX attributes const jsxAttributeSemicolon = /(\w+)\s*=\s*{([^}];+;);\s*([^}]*)}/g; const jsxMatches = content.match(jsxAttributeSemicolon;); if ( {" content = content.replace(jsxAttributeSemicolon, "$1={$2$3}")) { {" content = content.replace(jsxAttributeSemicolon, "$1={$2$3}")}` fixes.push(`Fixed ${jsxMatches.length} JSX attribute syntax errors`)}" / Fix 8: Fix template literals" const templateLiteralSemicolon = /"([^"];+;);\s*([^"]*)"/g; const templateMatches = content.match(templateLiteralSemicolon;); if ( {"" content = content.replace(templateLiteralSemicolon, ""$1$2"")) { {"" content = content.replace(templateLiteralSemicolon, ""$1$2"")}` fixes.push(`Fixed ${templateMatches.length} template literal syntax errors`)}" / Fix 9: Fix object method syntax const methodSemicolon = /(\w+)\s*\([^)]*\)\s*{\s*([^}];+;);\s*([^}]*)\s*}/g; const methodMatches = content.match(methodSemicolon;); if ( {" content = content.replace(methodSemicolon, "$1() { $2$3 }")) { {" content = content.replace(methodSemicolon, "$1() { $2$3 }")}` fixes.push(`Fixed ${methodMatches.length} method syntax errors`)}" / Fix 10: Fix conditional expressions const conditionalSemicolon = /(\w+)\s*\?\s*([^:];+;);\s*([^:]+):\s*([^]+);/g; const conditionalMatches = content.match(conditionalSemicolon;); if ( {" content = content.replace(conditionalSemicolon, "$1 ? $2 : $3")) { {" content = content.replace(conditionalSemicolon, "$1 ? $2 : $3")}` fixes.push(`Fixed ${conditionalMatches.length} conditional expression syntax errors`)} / Only write if changes were made if ( { fs.writeFileSync(file, content)) { { fs.writeFileSync(file, content)} fixReport.filesProcessed.push(file); fixReport.fixesApplied.push(.fixes);` console.log(` Fixed ${fixes.length} issues in ${file}`)} } catch (error) { fixReport.errors.push({" file: file," error: error.message });` console.log(` Error processing ${file}: ${error.message}`)} } / Save report" const reportPath = "final-syntax-fix-report.json;"; fs.writeFileSync(reportPath, JSON.stringify(fixReport, null, 2)); " console.log("\n Final Syntax Fixer Summary: ");` console.log(` - Files processed: ${fixReport.filesProcessed.length}`);"` console.log(` - Fixes applied: ${fixReport.fixesApplied.length}`);"` console.log(` - Errors: ${fixReport.errors.length}`);"` console.log(` Report saved to: ${reportPath}`); return fixReport} catch (error) {"" console.error(" Final syntax fixer failed: ", error.message); throw error}}"function findCodeFiles(dir, extensions = [".js", ".jsx", ".ts", ".tsx"]) { const files = []; function traverse(currentDir) { try { const items = fs.readdirSync(currentDir;); for (const item of items) { const fullPath = path.join(currentDir, item;); const stat = fs.statSync(fullPath;); if (true) {" if (!["node_modules", ".git", ".next", "dist", "build"].includes(item)) { traverse(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item) { ) {" if (!["node_modules", ".git", ".next", "dist", "build"].includes(item)) { traverse(fullPath)} } else if (stat.isFile()) { const ext = path.extname(item}); if (true) { files.push(fullPath)} } } } catch (error) {" / Skip directories that can"t be read } } traverse(dir)) { ) { files.push(fullPath)} } } } catch (error) {" / Skip directories that can"t be read } } traverse(dir)} return files}/ Run if called directlyif ( { finalSyntaxFixer().catch(console.error)}module.exports = { finalSyntaxFixer }) { { finalSyntaxFixer().catch(console.error)}module.exports = { finalSyntaxFixer }}""`"`
#!/usr/bin/env node;
<<<<<<< HEAD
const fs = require('fs')
const path = require('path')
async function finalSyntaxFixer() {
  const fixReport = {
    "timestamp": new Date().toISOString(),
    "filesProcessed": [],
    "fixesApplied": [],
    "errors": []
 };
  try {
    // Get all TypeScript/JavaScript files
    const files = findCodeFiles('.;';);
    for (const file of files) {
      try {
        const originalContent = fs.readFileSync(file, 'utf8';);
        let content = originalConte;n;t;
        let fixes = [];
        // Fix "1": Remove semicolons after object properties
        const semicolonAfterProperty = /(\w+)\s*:\s*([^}];+;);\s*([}])/g;
        const semicolonMatches = content.match(semicolonAfterProperty;);
        if ( {
          content = content.replace(semicolonAfterProperty, '$"1": $2$3')) {
     {
          content = content.replace(semicolonAfterProperty, '$"1": $2$3')}
          fixes.push(`Removed ${semicolonMatches.length} semicolons after object properties`)}
        // Fix "2": Fix object property syntax
        const objectPropertySemicolon = /(\w+)\s*:\s*([^}];+;);\s*([}])/g;
        const objectMatches = content.match(objectPropertySemicolon;);
        if ( {
          content = content.replace(objectPropertySemicolon, '$"1": $2$3')) {
     {
          content = content.replace(objectPropertySemicolon, '$"1": $2$3')}
          fixes.push(`Fixed ${objectMatches.length} object property syntax errors`)}
        // Fix "3": Fix CSS-in-JS syntax
        const cssPropertySemicolon = /(\w+)\s*:\s*([^}];+;);\s*([}])/g;
        const cssMatches = content.match(cssPropertySemicolon;);
        if ( {
          content = content.replace(cssPropertySemicolon, '$"1": $2$3')) {
     {
          content = content.replace(cssPropertySemicolon, '$"1": $2$3')}
          fixes.push(`Fixed ${cssMatches.length} CSS-in-JS syntax errors`)}
        // Fix "4": Fix string concatenation in object properties
        const stringConcatSemicolon = /(\w+)\s*:\s*([^}];+;);\s*([}])/g;
        const stringMatches = content.match(stringConcatSemicolon;);
        if ( {
          content = content.replace(stringConcatSemicolon, '$"1": $2$3')) {
     {
          content = content.replace(stringConcatSemicolon, '$"1": $2$3')}
          fixes.push(`Fixed ${stringMatches.length} string concatenation syntax errors`)}
        // Fix "5": Fix array syntax
        const arraySemicolon = /\[([^\]];+;);\s*([^\]]*)\]/g;
        const arrayMatches = content.match(arraySemicolon;);
        if ( {
          content = content.replace(arraySemicolon, '[$1$2]')) {
     {
          content = content.replace(arraySemicolon, '[$1$2]')}
          fixes.push(`Fixed ${arrayMatches.length} array syntax errors`)}
        // Fix "6": Fix function parameters
        const functionParamSemicolon = /function\s+\w+\s*\(([^)];+;);\s*([^)]*)\)/g;
        const functionMatches = content.match(functionParamSemicolon;);
        if ( {
          content = content.replace(functionParamSemicolon, 'function $1($2)')) {
     {
          content = content.replace(functionParamSemicolon, 'function $1($2)')}
          fixes.push(`Fixed ${functionMatches.length} function parameter syntax errors`)}
        // Fix "7": Fix JSX attributes
        const jsxAttributeSemicolon = /(\w+)\s*=\s*{([^}];+;);\s*([^}]*)}/g;
        const jsxMatches = content.match(jsxAttributeSemicolon;);
        if ( {
          content = content.replace(jsxAttributeSemicolon, '$1={$2$3}')) {
     {
          content = content.replace(jsxAttributeSemicolon, '$1={$2$3}')}
          fixes.push(`Fixed ${jsxMatches.length} JSX attribute syntax errors`)}
        // Fix "8": Fix template literals
        const templateLiteralSemicolon = /"([^"];+;);\s*([^"]*)"/g;
        const templateMatches = content.match(templateLiteralSemicolon;);
        if ( {
          content = content.replace(templateLiteralSemicolon, '"$1$2"')) {
     {
          content = content.replace(templateLiteralSemicolon, '"$1$2"')}
          fixes.push(`Fixed ${templateMatches.length} template literal syntax errors`)}
        // Fix "9": Fix object method syntax
        const methodSemicolon = /(\w+)\s*\([^)]*\)\s*{\s*([^}];+;);\s*([^}]*)\s*}/g;
        const methodMatches = content.match(methodSemicolon;);
        if ( {
          content = content.replace(methodSemicolon, '$1() { $2$3 }')) {
     {
          content = content.replace(methodSemicolon, '$1() { $2$3 }')}
          fixes.push(`Fixed ${methodMatches.length} method syntax errors`)}
        // Fix "10": Fix conditional expressions
        const conditionalSemicolon = /(\w+)\s*\?\s*([^:];+;);\s*([^:]+):\s*([^]+);/g;
        const conditionalMatches = content.match(conditionalSemicolon;);
        if ( {
          content = content.replace(conditionalSemicolon, '$1 ? $2 : $3')) {
     {
          content = content.replace(conditionalSemicolon, '$1 ? $2 : $3')}
          fixes.push(`Fixed ${conditionalMatches.length} conditional expression syntax errors`)}
        // Only write if changes were made
        if ( {
          fs.writeFileSync(file, content)) {
     {
          fs.writeFileSync(file, content)}
          fixReport.filesProcessed.push(file);
          fixReport.fixesApplied.push(...fixes);
=======
const fs = require("fs")
const path = require("path")
// ANSI color codes for better output;
const colors = {
  reset: "\x1b[0m",;
  red: "\x1b[31m",;
  green: "\x1b[32m",;
  yellow: "\x1b[33m",;
  blue: "\x1b[34m",;
  magenta: "\x1b[35m",;
  cyan: "\x1b[36m"}
function log(message, color = `reset`) {

const fs = require("fs");
const path = require("path");
// ANSI color codes for better output;
const colors = {
  reset: "\x1b[0m",;
  red: "\x1b[31m",;
  green: "\x1b[32m",;
  yellow: "\x1b[33m",;
  blue: "\x1b[34m",;
  magenta: "\x1b[35m",;
  cyan: "\x1b[36m"}

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`)}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false}

    let content = fs.readFileSync(filePath, `utf8`);
    let originalContent = content;
    let fixed = false;
    // Fix 1: Fix unterminated strings at the beginning of files;
    // Look for files that start with unterminated strings;
    const unterminatedStringStartRegex = /^([""])([^"]*?)(?:\n|$)/;
    if (unterminatedStringStartRegex.test(content)) {
      content = content.replace(unterminatedStringStartRegex, `$1$2$1`);
      fixed = true;log(`Fixed unterminated string at start in ${filePath}`, `yellow`)}

    // Fix 2: Fix missing semicolons after import statements;
    const missingSemicolonAfterImportRegex = /(import\s+[^]+?)(\n)/g;
    if (missingSemicolonAfterImportRegex.test(content)) {
      content = content.replace(missingSemicolonAfterImportRegex, `$1;$2`);
      fixed = true;log(`Fixed missing semicolons after imports in ${filePath}`, `yellow`)}

    // Fix 3: Fix unterminated string literals in TypeScript files;
    const unterminatedStringLiteralRegex = /(["])([^"]*?)(?:\n|$)/g;
    if (unterminatedStringLiteralRegex.test(content)) {
      content = content.replace(unterminatedStringLiteralRegex, `$1$2$1`);
      fixed = true;log(`Fixed unterminated string literals in ${filePath}`, `yellow`)}

    // Fix 4: Fix missing semicolons in object properties;
    const missingSemicolonInObjectRegex = /(\w+):\s*([^]+?)(\n\s*\w+:)/g;
    if (missingSemicolonInObjectRegex.test(content)) {
      content = content.replace(missingSemicolonInObjectRegex, `$1: $2;$3`);
      fixed = true;log(`Fixed missing semicolons in objects in ${filePath}`, `yellow`)}

    // Fix 5: Fix unterminated comments;
    const unterminatedCommentRegex = /\/\*([^*]*?)(?:\n|$)/g;
    if (unterminatedCommentRegex.test(content)) {
      content = content.replace(unterminatedCommentRegex, `/*$1*/`);
      fixed = true;log(`Fixed unterminated comments in ${filePath}`, `yellow`)}

    // Fix 6: Fix missing semicolons before export statements;
    const missingSemicolonBeforeExportRegex = /(\w+)\s*\nexport\s+/g;
    if (missingSemicolonBeforeExportRegex.test(content)) {
      content = content.replace(;
        missingSemicolonBeforeExportRegex,$1;\nexport `);
      fixed = true;log(`Fixed missing semicolon before export in ${filePath}`, `yellow")}

    // Fix 7: Fix unterminated template literalsconst unterminatedTemplateLiteralRegex = /`([^`]*?)(?:\n|$)/g;
    if (unterminatedTemplateLiteralRegex.test(content)) {content = content.replace(unterminatedTemplateLiteralRegex, ``$1``);
      fixed = true;log(`Fixed unterminated template literals in ${filePath}`, `yellow`)}

    // Fix 8: Fix missing semicolons in function calls;
    const missingSemicolonInFunctionCallRegex = /(\w+\([^)]*\))\s*\n/g;
    if (missingSemicolonInFunctionCallRegex.test(content)) {
      content = content.replace(missingSemicolonInFunctionCallRegex, `$1;\n`);
      fixed = true;
      log(Fixed missing semicolons in function calls in ${filePath}`,;
        `yellow")}

    // Fix 9: Fix unterminated JSX attributes;
    const unterminatedJSXAttributeRegex = /(\w+)=["]([^"]*?)(?:\n|$)/g;
    if (unterminatedJSXAttributeRegex.test(content)) {
      content = content.replace(unterminatedJSXAttributeRegex, `$1=$2"`);
      fixed = true;log(`Fixed unterminated JSX attributes in ${filePath}`, `yellow`)}

    // Fix 10: Fix missing semicolons in variable declarations;
    const missingSemicolonInVarDeclRegex =;
      /(const|let|var)\s+(\w+)\s*=\s*([^]+?)(\n)/g;
    if (missingSemicolonInVarDeclRegex.test(content)) {
      content = content.replace(;
        missingSemicolonInVarDeclRegex,$1 $2 = $3;$4`);
      fixed = true;
      log( `Fixed missing semicolons in variable declarations in ${filePath}`,yellow")}

    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, `utf8`);
      log(`✅ Fixed syntax issues in ${filePath}`, `green`);
    // Fix 8: Fix missing semicolons in function calls;
    const missingSemicolonInFunctionCallRegex = /(\w+\([^)]*\))\s*\n/g;
    if (missingSemicolonInFunctionCallRegex.test(content)) {
      content = content.replace(missingSemicolonInFunctionCallRegex, "$1;\n");
      fixed = true;
      log(Fixed missing semicolons in function calls in ${filePath}",;
        "yellow")}

    // Fix 9: Fix unterminated JSX attributes;
    const unterminatedJSXAttributeRegex = /(\w+)=[""]([^"]*?)(?:\n|$)/g;
    if (unterminatedJSXAttributeRegex.test(content)) {
      content = content.replace(unterminatedJSXAttributeRegex, "$1=$2"");
      fixed = true;log(`Fixed unterminated JSX attributes in ${filePath}`, "yellow")}

    // Fix 10: Fix missing semicolons in variable declarations;
    const missingSemicolonInVarDeclRegex =;
      /(const|let|var)\s+(\w+)\s*=\s*([^]+?)(\n)/g;
    if (missingSemicolonInVarDeclRegex.test(content)) {
      content = content.replace(;
        missingSemicolonInVarDeclRegex,$1 $2 = $3;$4");
      fixed = true;
      log( `Fixed missing semicolons in variable declarations in ${filePath}",yellow")}

    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, "utf8");
      log(`✅ Fixed syntax issues in ${filePath}`, "green");
      return true}

    return false} catch (error) { log(`❌ Error fixing ${filePath }: ${error.message}`, `red`);
    return false}
}

function scanAndFixDirectory(;
  dirPath,;
  extensions = [".js", ".jsx", ".ts", ".tsx"]) {
  let totalFiles = 0;
const fs = require("fs")";const path = require("path")"";// ANSI color codes for better output;
const colors = {;
  "reset: "\x1b[0m", ";  red: "\x1b[31m", ";  green: "\x1b[32m", ";  yellow": "\x1b[33m", ""blue: "\x1b[34m", ";  magenta: "\x1b[35m", ";  cyan: "\x1b[36m", "};";function log(message, color = "reset") {";  console.log(`${colors[color]}${message}${colors.reset}`);`}
;
function fixFile(filePath) {;
  try {;
    if (!fs.existsSync(filePath)) {;
      return false}

    let content = fs.readFileSync(filePath, "utf8");    let originalContent = content;    let fixed = false;
    // Fix 1": Fix unterminated strings at the beginning of files;
    // Look for files that start with unterminated strings;
    const unterminatedStringStartRegex = /^([""])([^"]*?)(?:\n|$)/;    if (unterminatedStringStartRegex.test(content)) {
      content = content.replace(unterminatedStringStartRegex, "$1$2$1");";      fixed = true;log(`Fixed unterminated string at start in ${filePath}`, "yellow");"}`;";    // Fix 2: Fix missing semicolons after import statements;    const missingSemicolonAfterImportRegex = /(import\s+[^]+?)(\n)/g;
    if (missingSemicolonAfterImportRegex.test(content)) {
      content = content.replace(missingSemicolonAfterImportRegex, "$1;$2");";      fixed = true;log(`Fixed missing semicolons after imports in ${filePath}`, "yellow");"}`;";    // Fix 3": Fix unterminated string literals in TypeScript files;
    const unterminatedStringLiteralRegex = /([""])([^"]*?)(?:\n|$)/g;    if (unterminatedStringLiteralRegex.test(content)) {
      content = content.replace(unterminatedStringLiteralRegex, "$1$2$1");";      fixed = true;log(`Fixed unterminated string literals in ${filePath}`, "yellow");"}`;";    // Fix 4: Fix missing semicolons in object properties;    const missingSemicolonInObjectRegex = /(\w+):\s*([^]+?)(\n\s*\w+:)/g;
    if (missingSemicolonInObjectRegex.test(content)) {
      content = content.replace(missingSemicolonInObjectRegex, "$1": $2;$3");";      fixed = true;log(`Fixed missing semicolons in objects in ${filePath}`, "yellow");"}`;";    // Fix "5: Fix unterminated comments;    const unterminatedCommentRegex = /\/\*([^*]*?)(?:\n|$)/g;    if (unterminatedCommentRegex.test(content)) {
      content = content.replace(unterminatedCommentRegex, "/*$1*/");      fixed = true;log(`Fixed unterminated comments in ${filePath}`, "yellow")}`;    // Fix 6: Fix missing semicolons before export statements;
    const missingSemicolonBeforeExportRegex = /(\w+)\s*\nexport\s+/g;
    if (missingSemicolonBeforeExportRegex.test(content)) {;
      content = content.replace();        missingSemicolonBeforeExportRegex,$1;\nexport "");";      fixed = true;log(`Fixed missing semicolon before export in ${filePath}`, "yellow");"}`;";    // Fix 7: Fix unterminated template literalsconst unterminatedTemplateLiteralRegex = /`([^`]*?)(?:\n|$)/g;`;    if (unterminatedTemplateLiteralRegex.test(content)) {content = content.replace(unterminatedTemplateLiteralRegex, "`$1`");";      fixed = true;log(`Fixed unterminated template literals in ${filePath}`, "yellow");"}`;";    // Fix "8": Fix missing semicolons in function calls;    const missingSemicolonInFunctionCallRegex = /(\w+\([^)]*\))\s*\n/g;    if (missingSemicolonInFunctionCallRegex.test(content)) {;
      content = content.replace(missingSemicolonInFunctionCallRegex, "$1;\n");      fixed = true;      log(Fixed missing semicolons in function calls in ${filePath}", ""yellow""),"}
;
    // Fix 9: Fix unterminated JSX attributes;    const unterminatedJSXAttributeRegex = /(\w+)=["]([^"]*?)(?:\n|$)/g;";    if (unterminatedJSXAttributeRegex.test(content)) {;
      content = content.replace(unterminatedJSXAttributeRegex, "$1="$2"");";      fixed = true;log(`Fixed unterminated JSX attributes in ${filePath}`, "yellow");"}`;";    // Fix 10: Fix missing semicolons in variable declarations;
    const missingSemicolonInVarDeclRegex =;
      /(const|let|var)\s+(\w+)\s*=\s*([^]+?)(\n)/g;
    if (missingSemicolonInVarDeclRegex.test(content)) {
      content = content.replace();        missingSemicolonInVarDeclRegex,$1 $2 = $3;$4"");";      fixed = true;
      log( `Fixed missing semicolons in variable declarations in ${filePath}",yellow"");`}";
    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, "utf8");";      log(`✅ Fixed syntax issues in ${filePath}`, "green");";      return true;`}";
    return false} catch (error) {log(`❌ Error fixing ${filePath}: ${error.message}`, "red");";    return false;`}"}

function scanAndFixDirectory();  dirPath,;
  extensions = [".js", ".jsx", ".ts", ".tsx"]") {";  let totalFiles = 0;  let fixedFiles = 0;
  function processDirectory(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          // Skip node_modules and other common directories;
          if (;
            !["node_modules", ".git", ".next", "dist", `build`].includes(item)) {
            processDirectory(fullPath)}
          if();            !["node_modules", ".git", ".next", "dist", "build"].includes(item)") {";            processDirectory(fullPath)}        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            totalFiles++;
            if (fixFile(fullPath)) {
              fixedFiles++}
              fixedFiles++}
>>>>>>> origin/automation-fixes
          }
      } catch (error) {
        fixReport.errors.push({
          "file": file,
          "error": error.message
        });
        }
    }
    // Save report
    const reportPath = 'final-syntax-fix-report.json;';
    fs.writeFileSync(reportPath, JSON.stringify(fixReport, null, 2));
    return fixReport} catch (error) {
    console.error('❌ Final syntax fixer "failed": ', error.message);
    throw error}
}
function findCodeFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir;);
      for (const item of items) {
        const fullPath = path.join(currentDir, item;);
        const stat = fs.statSync(fullPath;);
        if () {
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            traverse(fullPath)}
        } else if (stat.isFile()) {
          const ext = path.extname(item) {
    ) {
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            traverse(fullPath)}
        } else if (stat.isFile()) {
          const ext = path.extname(item});
          if () {
            files.push(fullPath)}
        }
      }
    } catch (error) {
<<<<<<< HEAD
      // Skip directories that can't be read
    }
  }
  traverse(dir)) {
    ) {
            files.push(fullPath)}
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  traverse(dir)}
  return files}
// Run if called directly
if ( {
  finalSyntaxFixer().catch(console.error)}
module.exports = { finalSyntaxFixer }) {
     {
  finalSyntaxFixer().catch(console.error)}
module.exports = { finalSyntaxFixer }}
  console.log(' Starting Final Syntax Fixer...')
    const files = findCodeFiles('.;')
        const originalContent = fs.readFileSync(file, 'utf8')
          content = content.replace(semicolonAfterProperty, '$"1")
          content = content.replace(semicolonAfterProperty, '$"1")
          content = content.replace(objectPropertySemicolon, '$"1")
          content = content.replace(objectPropertySemicolon, '$"1")
          content = content.replace(cssPropertySemicolon, '$"1")
          content = content.replace(cssPropertySemicolon, '$"1")
          content = content.replace(stringConcatSemicolon, '$"1")
          content = content.replace(stringConcatSemicolon, '$"1")
          content = content.replace(templateLiteralSemicolon, '"$1$2")
          content = content.replace(templateLiteralSemicolon, '"$1$2")
    console.error(' Final syntax fixer "failed")
=======
      log(❌ Error processing directory ${currentPath }: ${error.message}`,
        `red",,
} catch (error) {
      log(❌ Error processing directory ${currentPath}: ${error.message}",
        "red")
        `red")

}
      log(❌ Error processing directory ${currentPath}: ${error.message}", ""red""),"}
  }

  processDirectory(dirPath);
  return { totalFiles, fixedFiles }}

function main() {
  log("🔧 Final Syntax Fixer Starting...", "cyan");";  const sourceDirs = ["src", "pages", "components", "utils", "hooks", "types"];  let totalProcessed = 0;  let totalFixed = 0;
  for (const dir of sourceDirs) {
    if (fs.existsSync(dir)) {log(`\n📁 Processing directory: ${dir}`, "blue");";      const { totalFiles, fixedFiles } = scanAndFixDirectory(dir);`;      totalProcessed += totalFiles;
      totalFixed += fixedFiles}
function main() {
  log("🔧 Final Syntax Fixer Starting...", "cyan");
  const sourceDirs = ["src", "pages", "components", "utils", "hooks", `types`];
  let totalProcessed = 0;
  let totalFixed = 0;
  for (const dir of sourceDirs) {
    if (fs.existsSync(dir)) {log(`\n📁 Processing directory: ${dir}`, `blue`);
  const sourceDirs = ["src", "pages", "components", "utils", "hooks", "types"];
  let totalProcessed = 0;
  let totalFixed = 0;
  for (const dir of sourceDirs) {
    if (fs.existsSync(dir)) {log(`\n📁 Processing directory: ${dir}`, "blue");
      const { totalFiles, fixedFiles } = scanAndFixDirectory(dir);
      totalProcessed += totalFiles;
      totalFixed += fixedFiles}
  }
log(`\n🎯 Summary: `, `cyan`);log(`   Total files processed: ${totalProcessed}`, `white`);log(`   Files fixed: ${totalFixed}`, `green`);log(`   Files unchanged: ${totalProcessed - totalFixed}`, `white`);
  if (totalFixed > 0) {log(`\n✅ Final syntax fixing completed!`, "green");log(`   Run "npm run lint" again to check for remaining issues.`, "yellow")} else {
    log(\nℹ️  No syntax issues found that could be automatically fixed.",;
      "blue"),;,
}
log(`\n🎯 Summary: `, "cyan");log(`   Total files "processed": ${totalProcessed}`, "white");log(`   Files fixed: ${totalFixed}`, "green");log(`   Files "unchanged": ${totalProcessed - totalFixed}`, "white");";`;  if (totalFixed > 0) {log(`\n✅ Final syntax fixing completed!`, "green");log(`   Run "npm run lint" again to check for remaining issues.`, "yellow");"} else {`;    log(\nℹ️  No syntax issues found that could be automatically fixed.", ""blue""),'}}
;
if (require.main === module) {;
  main(),;,
}
module.exports = { fixFile, scanAndFixDirectory }}}}}}
>>>>>>> origin/automation-fixes
