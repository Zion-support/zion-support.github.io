const fs = require('fs');
const path = require('path');
;
function fixSyntaxErrors(filePath) {;
  try {;
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
=======
    let content = fs.readFileSync(filePath,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    let modified = false;
    // Fix common syntax errors;
<<<<<<< HEAD
    // Fix unnecessary escape characters;
    content = content.replace(/\\:/g, ':');
    content = content.replace(/\\,/g, ',');
    content = content.replace(/\\;/g, ';');
    content = content.replace(/\\}/g, '}');
    content = content.replace(/\\{/g, '{');
    content = content.replace(/\\\[/g, '[');']
    content = content.replace(/\\\]/g, ']');
    content = content.replace(/\\\(/g, '(');
    content = content.replace(/\\\)/g, ')');
    // Fix missing semicolons at end of statements;
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    // Fix missing commas in objects;
    content = content.replace(/(\w+):\s*([^,}]+)\s*}/g, '$1:$2,}');
    // Fix missing closing braces;
    // Fix malformed CSS in JSX;
    content = content.replace(/@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, );
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const glob = require("glob");class SyntaxErrorFixer { constructor() { this.projectRoot = process.cwd(); this.fixedFiles = []; this.errors = []} log(message) { console.log(`[${new Date().toISOString()}] ${message}`)} getAllFiles(dir, extensions) { let files = []; const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } return files} fixImportStatements(content) { / Fix malformed import statements" content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]\s*import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]/g, " "import { $1 } from \"$2\"\nimport { $3 } from \"$4\""); / Fix missing semicolons after imports"" content = content.replace(/import\s*{[^}]+}\s*from\s*[""][^""]+[""](?!\s*;)/g, "$&;"); return content} fixStringConcatenation(content) { / Fix malformed string concatenation with semicolons"" content = content.replace(/[""]\s*;\s*[""]/g, "");"" content = content.replace(/[""]\s*;\s*([^""]*)\s*[""]/g, "$1"); / Fix array syntax issues"" content = content.replace(/\[\s*[""]\s*;\s*([^""]*)\s*[""]\s*\]/g, "[\"$1\"]");"" content = content.replace(/\[\s*[""]\s*([^""]*)\s*;\s*[""]\s*\]/g, "[\"$1\"]"); return content} fixObjectSyntax(content) { / Fix object property syntax"" content = content.replace(/{\s*[""]\s*;\s*([^""]*)\s*[""]\s*:/g, "{ \"$1\":");"" content = content.replace(/:\s*[""]\s*;\s*([^""]*)\s*[""]\s*,/g, ": \"$1\",");"" content = content.replace(/:\s*[""]\s*;\s*([^""]*)\s*[""]\s*}/g, ": \"$1\" }"); return content} fixJSXSyntax(content) { / Fix JSX attribute syntax"" content = content.replace(/className\s*=\s*[""]\s*;\s*([^""]*)\s*[""]/g, "className=\"$1\"");"" content = content.replace(/href\s*=\s*[""]\s*;\s*([^""]*)\s*[""]/g, "href=\"$1\"");"" content = content.replace(/title\s*=\s*[""]\s*;\s*([^""]*)\s*[""]/g, "title=\"$1\""); return content} / Fix malformed CSS in JSX"" content = content.replace(/@media\(prefers-reduced-motion: \s*reduc\s*e\)\s*\{[^}]*\}/g, ""); for (let i = 0; i < lines.length; i++) { let line = lines[i]; / Check for unterminated strings" const singleQuotes = (line.match(/"/g) | []).length;" const doubleQuotes = (line.match(/"/g) | []).length; " if (singleQuotes % 2 !== 0 && !line.includes("/")) { / Try to fix unterminated single quotes"" if (line.includes(""") && !line.endsWith(""")) {"" line = line + """} } " if (doubleQuotes % 2 !== 0 && !line.includes("/")) { / Try to fix unterminated double quotes"" if (line.includes(""") && !line.endsWith(""")) {"" line = line + """} } fixedLines.push(line)} " return fixedLines.join("\n")} fixFile(filePath) { try {"` this.log(`Fixing: ${filePath}`); " let content = fs.readFileSync(filePath, "utf8"); const originalContent = content; / Apply all fixes content = this.fixImportStatements(content); content = this.fixStringConcatenation(content); content = this.fixObjectSyntax(content); content = this.fixJSXSyntax(content); content = this.fixUnterminatedStrings(content); / Additional cleanup" content = content.replace(/\s*;\s*;\s*/g, ";");" content = content.replace(/,\s*,\s*/g, ",");" content = content.replace(/\s*;\s*$/gm, ";"); if (content !== originalContent) {" fs.writeFileSync(filePath, content, "utf8"); this.fixedFiles.push(filePath);"` this.log(` Fixed: ${filePath}`); return true} return false} catch (error) {" this.errors.push({ file: filePath, error: error.message });` this.log(` Error fixing ${filePath}: ${error.message}`); return false} } / Fix malformed object destructuring content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*useAuth\(\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(\[\]\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(true\);\s*const\s+navigate\s*=\s*useNavigate\(\);\s*useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[user\]\);\s*const\s+handleRequestHire\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*return\s*\(<div[^>]*>([^<]*)<\/div>\);\s*}/g, (match, user, savedTalents, isLoading, content) => { fixes++;` return `const { ${user} } = useAuth(); const [${savedTalents}] = useState([]); const [${isLoading}] = useState(true); const navigate = useNavigate(); " const srcDir = path.join(this.projectRoot, "src"); if (!fs.existsSync(srcDir)) {" this.log(" src directory not found"); return} " const files = this.getAllFiles(srcDir, [".tsx", ".ts", ".jsx", ".js"]);"` this.log(`Found ${files.length} files to check"); let fixedCount = 0; for (const file of files) { if (this.fixFile(file)) { fixedCount++} } " this.log(" Fixed ${fixedCount} files");" this.log(" ${this.errors.length} errors encountered"); / Generate report const report = {" timestamp: new Date().toISOString()," totalFiles: files.length," fixedFiles: fixedCount," errors: this.errors," fixedFileList: this.fixedFiles }; fs.writeFileSync(" path.join(this.projectRoot, "syntax-fix-report.json"), JSON.stringify(report, null, 2) ); " this.log(" Report saved to syntax-fix-report.json")}}/ Function to process a single filefunction processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8");" const { content: fixedContent, fixes } = fixSyntaxErrors(content, filePath); if (fixes > 0) {" fs.writeFileSync(filePath, fixedContent, "utf8");" console.log(" Fixed ${fixes} issues in ${filePath}"); return fixes; } return 0; } catch (error) {" console.error(" Error processing ${filePath}:", error.message); return 0; }}/ Main executionasync function main() {" const patterns = ["src*.tsx"," "src*.ts"," "src*.jsx"," "src*.js"," "app*.tsx"," "app*.ts"," "pages*.tsx"," "pages*.ts"," "pages*.jsx"," "pages*.js" ]; let totalFixes = 0; let filesProcessed = 0; for (const pattern of patterns) {"" const files = glob.sync(pattern, { ignore: ["node_modules/**", ".next/**", "dist/**"] }); for (const file of files) { if (fs.existsSync(file)) { const fixes = processFile(file); totalFixes += fixes; filesProcessed++; } } }" console.log("\n Summary: ");" console.log(" Files processed: ${filesProcessed}");" console.log(" Total fixes applied: ${totalFixes}"); if (totalFixes > 0) {" console.log("\n Syntax error fixing completed!"); } else {"` console.log("\n No syntax errors found to fix.`); }}main().catch(console.error);""`"`"
</div>"
    content = content.replace(/export\s+const\s+SEO:\s*Reac\s+t\.FC<[^>]+>\s*=\s*\(/g, 'export const SEO: React.FC<SEOProps> = (');

=======
;
    // Fix unnecessary escape characters;
    content = content.replace(/\\:/g, : );
    content = content.replace(/\\,/g,,);
    content = content.replace(/\\;/g,;);
    content = content.replace(/\\}/g, });
    content = content.replace(/\\{/g,{);
    content = content.replace(/\\\[/g,[);]
    content = content.replace(/\\\]/g, ]);
    content = content.replace(/\\\(/g,(');
    content = content.replace(/\\\)/g,));
;
    // Fix missing semicolons at end of statements;
    content = content.replace(/([^;}])\s*$/gm,$1;);
;
    // Fix missing commas in objects;
    content = content.replace(/(\w+):\s*([^}]+)\s*}/g,$1:$2});
;
    // Fix missing closing braces;
    // Fix malformed CSS in JSX;
    content = content.replace(/@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, );
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const glob = require("glob");class SyntaxErrorFixer { constructor() { this.projectRoot = process.cwd(); this.fixedFiles = []; this.errors = []} log(message) { console.log(`[${new Date().toISOString()}] ${message})} getAllFiles(dir, extensions) { let files = []; const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } return files} fixImportStatements(content) { / Fix malformed import statements" content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*[]([^]+)[]\s*import\s*{\s*([^}]+)\s*}\s*from\s*[]([^]+)[]/g, " "import { $1 } from \"$2\"\nimport { $3 } from \"$4\); / Fix missing semicolons after imports content = content.replace(/import\s*{[^}]+}\s*from\s*[][^]+[](?!\s*;)/g, "$&;"); return content} fixStringConcatenation(content) { / Fix malformed string concatenation with semicolons content = content.replace(/[]\s*;\s*[]/g, ); content = content.replace(/[]\s*;\s*([^]*)\s*[]/g, "$1"); / Fix array syntax issues content = content.replace(/\[\s*[]\s*;\s*([^]*)\s*[]\s*\]/g, "[\"$1\"]"); content = content.replace(/\[\s*[]\s*([^]*)\s*;\s*[]\s*\]/g, "[\"$1\"]"); return content} fixObjectSyntax(content) { / Fix object property syntax content = content.replace(/{\s*[]\s*;\s*([^]*)\s*[]\s*:/g, "{ \"$1\":"); content = content.replace(/:\s*[]\s*;\s*([^]*)\s*[]\s*,/g, ": \"$1\","); content = content.replace(/:\s*[]\s*;\s*([^]*)\s*[]\s*}/g, ": \"$1\" }"); return content} fixJSXSyntax(content) { / Fix JSX attribute syntax content = content.replace(/className\s*=\s*[]\s*;\s*([^]*)\s*[]/g, "className=\"$1\); content = content.replace(/href\s*=\s*[]\s*;\s*([^]*)\s*[]/g, "href=\"$1\); content = content.replace(/title\s*=\s*[]\s*;\s*([^]*)\s*[]/g, "title=\"$1\); return content} / Fix malformed CSS in JSX content = content.replace(/@media\(prefers-reduced-motion: \s*reduc\s*e\)\s*\{[^}]*\}/g, ); for (let i = 0; i < lines.length; i++) { let line = lines[i]; / Check for unterminated strings" const singleQuotes = (line.match(/"/g) | []).length;" const doubleQuotes = (line.match(/"/g) | []).length; " if (singleQuotes % 2 !== 0 && !line.includes("/")) { / Try to fix unterminated single quotes if (line.includes(") && !line.endsWith(")) { line = line + "} } " if (doubleQuotes % 2 !== 0 && !line.includes("/")) { / Try to fix unterminated double quotes if (line.includes(") && !line.endsWith(")) { line = line + "} } fixedLines.push(line)} " return fixedLines.join("\n")} fixFile(filePath) { try {"` this.log(`Fixing: ${filePath}); " let content = fs.readFileSync(filePath, "utf8"); const originalContent = content; / Apply all fixes content = this.fixImportStatements(content); content = this.fixStringConcatenation(content); content = this.fixObjectSyntax(content); content = this.fixJSXSyntax(content); content = this.fixUnterminatedStrings(content); / Additional cleanup" content = content.replace(/\s*;\s*;\s*/g, ";");" content = content.replace(/,\s*,\s*/g, ",");" content = content.replace(/\s*;\s*$/gm, ";"); if (content !== originalContent) {" fs.writeFileSync(filePath, content, "utf8"); this.fixedFiles.push(filePath);"` this.log(` Fixed: ${filePath}); return true} return false} catch (error) {" this.errors.push({ file: filePath, error: error.message });` this.log(` Error fixing ${filePath}: ${error.message}); return false} } / Fix malformed object destructuring content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*useAuth\(\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(\[\]\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(true\);\s*const\s+navigate\s*=\s*useNavigate\(\);\s*useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[user\]\);\s*const\s+handleRequestHire\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*return\s*\(<div[^>]*>([^<]*)<\/div>\);\s*}/g, (match, user, savedTalents, isLoading, content) => { fixes++;` return `const { ${user} } = useAuth(); const [${savedTalents}] = useState([]); const [${isLoading}] = useState(true); const navigate = useNavigate(); " const srcDir = path.join(this.projectRoot, "src"); if (!fs.existsSync(srcDir)) {" this.log(" src directory not found"); return} " const files = this.getAllFiles(srcDir, [".tsx", ".ts", ".jsx", ".js"]);"` this.log(`Found ${files.length} files to check"); let fixedCount = 0; for (const file of files) { if (this.fixFile(file)) { fixedCount++} } " this.log(" Fixed ${fixedCount} files");" this.log(" ${this.errors.length} errors encountered"); / Generate report const report = {" timestamp: new Date().toISOString()," totalFiles: files.length," fixedFiles: fixedCount," errors: this.errors," fixedFileList: this.fixedFiles }; fs.writeFileSync(" path.join(this.projectRoot, "syntax-fix-report.json"), JSON.stringify(report, null, 2) ); " this.log(" Report saved to syntax-fix-report.json")}}/ Function to process a single filefunction processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8");" const { content: fixedContent, fixes } = fixSyntaxErrors(content, filePath); if (fixes > 0) {" fs.writeFileSync(filePath, fixedContent, "utf8");" console.log(" Fixed ${fixes} issues in ${filePath}"); return fixes; } return 0; } catch (error) {" console.error(" Error processing ${filePath}:", error.message); return 0; }}/ Main executionasync function main() {" const patterns = ["src*.tsx"," "src*.ts"," "src*.jsx"," "src*.js"," "app*.tsx"," "app*.ts"," "pages*.tsx"," "pages*.ts"," "pages*.jsx"," "pages*.js" ]; let totalFixes = 0; let filesProcessed = 0; for (const pattern of patterns) { const files = glob.sync(pattern, { ignore: ["node_modules/**", ".next/**", "dist/**"] }); for (const file of files) { if (fs.existsSync(file)) { const fixes = processFile(file); totalFixes += fixes; filesProcessed++; } } }" console.log("\n Summary: ");" console.log(" Files processed: ${filesProcessed}");" console.log(" Total fixes applied: ${totalFixes}"); if (totalFixes > 0) {" console.log("\n Syntax error fixing completed!"); } else {"` console.log("\n No syntax errors found to fix.`); }}main().catch(console.error);`"`"
</div>"
    content = content.replace(/export\s+const\s+SEO:\s*Reac\s+t\.FC<[^>]+>\s*=\s*\(/g,export const SEO: React.FC<SEOProps> = (');
</SEOProps>
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*useAuth\(\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(\[\]\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(true\);\s*const\s+navigate\s*=\s*useNavigate\(\);\s*useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[user\]\);\s*const\s+handleRequestHire\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*return\s*\(<div[^>]*>([^<]*)<\/div>\);\s*}/g, (match, user, savedTalents, isLoading, content) => {
</div>
        <div className="min-h-screen bg-gray-50">"
  const importSemicolonRegex = /(import\s+[^]+)(?!)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(importSemicolonRegex, (match, importPart, nextPart) => {;"
  if (!importPart.includes(";")) {;"
  changes++;"
      return importPart + ";" + nextPart;,"
}
    return match;,
});
  // Fix 2: Fix malformed import statements with missing closing brackets;"
  const malformedImportRegex = /import\s*{\s*([^}]+)\s*from\s*[]([^]+)[]\s*([^]*)/g;"
  fixed = fixed.replace(malformedImportRegex, (match, imports, module, rest) => {;"
  if (!imports.includes("}")) {;"
<<<<<<< HEAD
  changes++;"`;
      return `import { ${imports.trim()} } from "${module}";${rest}`;,"
=======
  changes++;"
      return `import { ${imports.trim()} } from "${module}";${rest};,"
}
    return match;,
});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  // Fix 3: Fix missing commas in arrays;
  const arrayCommaRegex = /(\]\s*)(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\[)/g;"
  fixed = fixed.replace(arrayCommaRegex, "$1,$2");"
  // Fix 4: Fix unterminated string literals;]"
  const unterminatedStringRegex = /([])([^]*?)(\s*export|\s*const|\s*function|\s*<|$)/g;"
  fixed = fixed.replace(unterminatedStringRegex, (match, quote, content, nextPart) => {;
  if (!content.includes(quote)) {;
  changes++;
      return quote + content + quote + nextPart;,
  // Fix 5: Fix malformed JSX syntax;
  const malformedJSXRegex = /(return\s*\(\s*)([^<]*?)(<[^>]*>)/g;
  fixed = fixed.replace(malformedJSXRegex, (match, returnPart, content, jsxPart) => {;"
<<<<<<< HEAD
  if (content.includes(""") && !content.includes(""")) {;"
      return returnPart + content.replace(/"/g, """) + jsxPart;,"
=======
  if (content.includes(") && !content.includes(")) {;"
  changes++;"
      return returnPart + content.replace(/"/g, ") + jsxPart;,"
}
    return match;,
});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  // Fix 6: Fix missing semicolons after variable declarations;
  const varSemicolonRegex = /(const|let|var)\s+[^=]+=\s*[^]+(?!)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(varSemicolonRegex, (match, declaration, nextPart) => {;"
  if (!match.includes(";")) {;"
      return match + ";" + nextPart;,"
  // Fix 7: Fix malformed function declarations;
  const malformedFunctionRegex = /export\s*{\s*function\s*}\s*export\s*default\s*function/g;"
  fixed = fixed.replace(malformedFunctionRegex, "export default function");"
  // Fix 8: Fix corrupted JSX attributes;"
  const corruptedJSXRegex = /className\s*=\s*[]([^]*?)[]\s*([^>]*?)(>|$)/g;"
  fixed = fixed.replace(corruptedJSXRegex, (match, className, rest, closing) => {;"
<<<<<<< HEAD
  if (className.includes(""") && !className.includes(""")) {;"
      return `className="${className.replace(/"/g, """)}"${rest}${closing}`;,"
=======
  if (className.includes(") && !className.includes(")) {;"
  changes++;"
      return `className="${className.replace(/"/g, ")}"${rest}${closing};,"
}
    return match;,
});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  // Fix 9: Fix missing closing brackets in object literals;
  const missingBracketRegex = /(\{[^}]*?)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(missingBracketRegex, (match, objectPart, nextPart) => {;
  const openBraces = (objectPart.match(/\{/g) || []).length;
    const closeBraces = (objectPart.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {;
      return objectPart + "}".repeat(openBraces - closeBraces) + nextPart;,"
  // Fix 10: Fix malformed array syntax;
  const malformedArrayRegex = /(\[\s*)([^\]]*?)(\s*\]\s*)(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*=)/g;"
  fixed = fixed.replace(malformedArrayRegex, "$1$2$3,$4");"
  return { fixed, changes }

// Function to process a single file;
function processFile(filePath) {;
  try {;"
  const content = fs.readFileSync(filePath, "utf8");"
    const { fixed, changes } = fixSyntaxErrors(content, filePath);
    if (changes > 0) {;"
<<<<<<< HEAD
  fs.writeFileSync(filePath, fixed, "utf8");"`;
      console.log(`Fixed ${changes} issues in ${filePath}`);
=======
  fs.writeFileSync(filePath, fixed, "utf8");"
      console.log(`Fixed ${changes} issues in ${filePath});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return changes;,
    return 0;,
} catch (error) {;`;
  console.error(`Error processing ${filePath}:`, error.message);
// Function to recursively find all TypeScript/JavaScript files;"
function findFiles(dir, extensions = [".ts", ".tsx", ".js", ".jsx"]) {;"
  let files = [];
  const items = fs.readdirSync(dir);
    for (const item of items) {;
  const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);"
      if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {;"
  files = files.concat(findFiles(fullPath, extensions));,
} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;
  files.push(fullPath);,
  console.error(`Error reading directory ${dir}:`, error.message);,
  return files;,
// Main execution;
function $1() {;"
  const srcDir = path.join(__dirname, "src");"
  const files = findFiles(srcDir);`;
  console.log(`Found ${files.length} files to process...`);
  let totalChanges = 0;
  let processedFiles = 0;
  for (const file of files) {;
  const changes = processFile(file);
    totalChanges += changes;
    if (changes > 0) {;
  processedFiles++;,
// Main execution;
async function main() {"
<<<<<<< HEAD
    const patterns = ['src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.jsx',
        'src/**/*.js',
        'app/**/*.tsx',
        'app/**/*.ts',
        'pages/**/*.tsx',
        'pages/**/*.ts',
        'pages/**/*.jsx',
        'pages/**/*.js]
=======
    const patterns = [src/**/*.tsx,src/**/*.ts,src/**/*.jsx,src/**/*.js,app/**/*.tsx,app/**/*.ts,pages/**/*.tsx,pages/**/*.ts,pages/**/*.jsx,pages/**/*.js]
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    ];
    let totalFixes = 0;
    let filesProcessed = 0;
    for (const pattern of patterns) {
<<<<<<< HEAD
        const files = glob.sync(pattern, { "ignore": ['node_modules/**', '.next/**', 'dist/**'] });
=======
        const files = glob.sync(pattern, { "ignore": [node_modules/**,.next/**,dist/**] });
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        for (const file of files) {
            if (fs.existsSync(file)) {
                const fixes = processFile(file);
                totalFixes += fixes;
                filesProcessed++;
    if (totalFixes > 0) {
    } else {
  // TODO: Implement
    fixed = fixed.replace(
        /return\s*this\.props\.children;\s*\}\s*export\s*default/g,
        'return this.props.children;\n  }\n}\n\nexport default)
    );
    return fixed;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
<<<<<<< HEAD
      content += '\n' + '}'.repeat(missingBraces);
=======
      content +=\n' + }.repeat(missingBraces);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      modified = true;

    // Fix missing closing parentheses;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;

    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
<<<<<<< HEAD
      content += ')'.repeat(missingParens);
=======
      content +=).repeat(missingParens);
      modified = true;
    }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

    // Fix missing closing brackets;
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;

    if (openBrackets > closeBrackets) {
<<<<<<< HEAD
      content += '\n}'.repeat(missingBraces);
    // Fix missing closing parentheses;
    if (openParens > closeParens) {;      const missingParens = openParens - closeParens;
=======
      const missingBraces = openBraces - closeBraces;
      content +=\n}.repeat(missingBraces);
      modified = true;
    }
;
    // Fix missing closing parentheses;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
;
    if (openParens > closeParens) {;      const missingParens = openParens - closeParens;
      content +=).repeat(missingParens);
      modified = true;
    }
;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    // Fix missing closing brackets;
    if (openBrackets > closeBrackets) {;
      const missingBrackets = openBrackets - closeBrackets;
<<<<<<< HEAD
      content += ']'.repeat(missingBrackets);
=======
      content += ].repeat(missingBrackets);
      modified = true;
    }
;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    // Fix duplicate imports;
    const importLines = content;
      .split('\n');
      .filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {;
      const nonImportLines = content;
<<<<<<< HEAD
        .filter(line => !line.trim().startsWith('import'));
      content = uniqueImports.join('\n') + '\n' + nonImportLines.join('\n');
function processDirectory(dirPath) {
=======
        .split('\n');
        .filter(line => !line.trim().startsWith('import'));
      content = uniqueImports.join('\n') +\n' + nonImportLines.join('\n');
      modified = true;
    }
function processDirectory(dirPath) {
;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    // Fix missing React import;
    if (content.includes('React') && !content.includes('import React')) {;
      content = "import React from 'react';\n" + content;"
    // Fix semicolons in object properties;"
<<<<<<< HEAD
    content = content.replace(/(\w+):\s*([^,}]+);/g, '$1:$2,');
    // Fix semicolons in array elements;
    content = content.replace(/([^,}]);/g, '$1,');
    // Fix semicolons in function parameters;    content = content.replace(/(\w+)\s*;\s*\)/g, '$1)');
    // Fix semicolons in JSX;
    content = content.replace(/<(\w+)\s*;\s*>/g, '<$1>');
    content = content.replace(/<\/(\w+)\s*;\s*>/g, '</$1>');
    if (content !== fs.readFileSync(filePath, 'utf8')) {;
      fs.writeFileSync(filePath, content, 'utf8');
=======
    content = content.replace(/(\w+):\s*([^}]+);/g,$1:$2,);
;
    // Fix semicolons in array elements;
    content = content.replace(/([^}]);/g,$1,);
;
    // Fix semicolons in function parameters;    content = content.replace(/(\w+)\s*;\s*\)/g,$1));
;
    // Fix semicolons in JSX;
    content = content.replace(/<(\w+)\s*;\s*>/g,<$1>');
    content = content.replace(/<\/(\w+)\s*;\s*>/g,</$1>');
;
    if (content !== fs.readFileSync(filePath,utf8)) {;
      fs.writeFileSync(filePath, content,utf8);
      modified = true;
    }
;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    return modified;
    console.error(`Error processing ${filePath} `, error.message);
    return false;
function processDirectory(dirPath) {;function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (;)
      stat.isDirectory() &&;
<<<<<<< HEAD
      !file.startsWith('.') &&;
      file !== 'node_modules';
=======
      !file.startsWith('.) &&;
      file !==node_modules';
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    ) {;
      fixedCount += processDirectory(filePath);
    } else if (;)
      file.endsWith('.tsx') ||;
      file.endsWith('.ts') ||;
      file.endsWith('.jsx') ||;
      file.endsWith('.js');
<<<<<<< HEAD
=======
    ) {;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      if (fixSyntaxErrors(filePath)) fixedCount++;
  return fixedCount;
<<<<<<< HEAD
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('.');`;
console.log(`Fixed ${fixedCount} files`);
=======
}
;
console.log('Starting comprehensive syntax error fixes...);
const fixedCount = processDirectory('.);
console.log(`Fixed ${fixedCount} files`);
    fixed = fixed.replace(
        /return\s*this\.props\.children;\s*\}\s*export\s*default/g,
        'return this.props.children;\n  }\n}\n\nexport default)
    );
    return fixed;
});
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content +=\n' + }.repeat(missingBraces);
      modified = true;
    }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

    // Fix missing closing parentheses;

<<<<<<< HEAD
=======
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      content +=).repeat(missingParens);
      modified = true;
    }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

    // Fix missing closing brackets;

<<<<<<< HEAD

    // Fix duplicate imports;
      .split('\n')
    if (importLines.length !== uniqueImports.length) {

    // Fix missing React import;
    if (content.includes('React') && !content.includes('import React')) {

    // Fix semicolons in object properties;"
    content = content.replace(/(\w+):\s*([^}]+);/g, '$1: $2,');
    // Fix semicolons in array elements;
    content = content.replace(/([^}]);/g, '$1,');
    // Fix semicolons in function parameters;
    content = content.replace(/(\w+)\s*;\s*\)/g, '$1)');
    // Fix semicolons in JSX;
    if (content !== fs.readFileSync(filePath, 'utf8')) {
=======
    if (openBrackets > closeBrackets) {
      const missingBrackets = openBrackets - closeBrackets;
      content += ].repeat(missingBrackets);
      modified = true;
    }

    // Fix duplicate imports;
    const importLines = content;
      .split('\n')
      .filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {
      const nonImportLines = content;
        .split('\n')
        .filter(line => !line.trim().startsWith('import'));
      content = uniqueImports.join('\n') +\n' + nonImportLines.join('\n');
      modified = true;
    }

    // Fix missing React import;
    if (content.includes('React') && !content.includes('import React')) {
      content = "import React from 'react';\n" + content;"
      modified = true;
    }

    // Fix semicolons in object properties;"
    content = content.replace(/(\w+):\s*([^}]+);/g,$1: $2,);
    // Fix semicolons in array elements;
    content = content.replace(/([^}]);/g,$1,);
    // Fix semicolons in function parameters;
    content = content.replace(/(\w+)\s*;\s*\)/g,$1));
    // Fix semicolons in JSX;
    content = content.replace(/<(\w+)\s*;\s*>/g,<$1>');
    content = content.replace(/<\/(\w+)\s*;\s*>/g,</$1>');
    if (content !== fs.readFileSync(filePath,utf8)) {
      fs.writeFileSync(filePath, content,utf8);
      modified = true;
    }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

  } catch (error) {`;



    if ()
      stat.isDirectory() &&
<<<<<<< HEAD
      !file.startsWith('.') &&
      file !== 'node_modules
    ) {
=======
      !file.startsWith('.) &&
      file !==node_modules
    ) {
      fixedCount += processDirectory(filePath);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    } else if ()
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
<<<<<<< HEAD


`;
=======
    ) {
      if (fixSyntaxErrors(filePath)) fixedCount++;
    }
  }

  return fixedCount;
}
'
console.log('Starting comprehensive syntax error fixes...);
const fixedCount = processDirectory('.);
console.log(`Fixed ${fixedCount} files`);
'
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
