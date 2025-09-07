<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
<<<<<<< HEAD


=======
const fs = require('fs');
const path = require('path');
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const fs = require('fs');
const path = require('path');
;
function fixSyntaxErrors(filePath) {;
  try {;

    let modified = false;
    // Fix common syntax errors;
<<<<<<< HEAD
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
<<<<<<< HEAD

=======
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const glob = require("glob");class SyntaxErrorFixer { constructor() { this.projectRoot = process.cwd(); this.fixedFiles = []; this.errors = []} log(message) { console.log(`[${new Date().toISOString()}] ${message}`)} getAllFiles(dir, extensions) { let files = []; const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } return files} fixImportStatements(content) { / Fix malformed import statements" content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]\s*import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]/g, " "import { $1 } from \"$2\"\nimport { $3 } from \"$4\""); / Fix missing semicolons after imports"" content = content.replace(/import\s*{[^}]+}\s*from\s*[""][^""]+[""](?!\s*;)/g, "$&;"); return content} fixStringConcatenation(content) { / Fix malformed string concatenation with semicolons"" content = content.replace(/[""]\s*;\s*[""]/g, "");"" content = content.replace(/[""]\s*;\s*([^""]*)\s*[""]/g, "$1"); / Fix array syntax issues"" content = content.replace(/\[\s*[""]\s*;\s*([^""]*)\s*[""]\s*\]/g, "[\"$1\"]");"" content = content.replace(/\[\s*[""]\s*([^""]*)\s*;\s*[""]\s*\]/g, "[\"$1\"]"); return content} fixObjectSyntax(content) { / Fix object property syntax"" content = content.replace(/{\s*[""]\s*;\s*([^""]*)\s*[""]\s*:/g, "{ \"$1\":");"" content = content.replace(/:\s*[""]\s*;\s*([^""]*)\s*[""]\s*,/g, ": \"$1\",");"" content = content.replace(/:\s*[""]\s*;\s*([^""]*)\s*[""]\s*}/g, ": \"$1\" }"); return content} fixJSXSyntax(content) { / Fix JSX attribute syntax"" content = content.replace(/className\s*=\s*[""]\s*;\s*([^""]*)\s*[""]/g, "className=\"$1\"");"" content = content.replace(/href\s*=\s*[""]\s*;\s*([^""]*)\s*[""]/g, "href=\"$1\"");"" content = content.replace(/title\s*=\s*[""]\s*;\s*([^""]*)\s*[""]/g, "title=\"$1\""); return content} / Fix malformed CSS in JSX"" content = content.replace(/@media\(prefers-reduced-motion: \s*reduc\s*e\)\s*\{[^}]*\}/g, ""); for (let i = 0; i < lines.length; i++) { let line = lines[i]; / Check for unterminated strings" const singleQuotes = (line.match(/"/g) | []).length;" const doubleQuotes = (line.match(/"/g) | []).length; " if (singleQuotes % 2 !== 0 && !line.includes("/")) { / Try to fix unterminated single quotes"" if (line.includes(""") && !line.endsWith(""")) {"" line = line + """} } " if (doubleQuotes % 2 !== 0 && !line.includes("/")) { / Try to fix unterminated double quotes"" if (line.includes(""") && !line.endsWith(""")) {"" line = line + """} } fixedLines.push(line)} " return fixedLines.join("\n")} fixFile(filePath) { try {"` this.log(`Fixing: ${filePath}`); " let content = fs.readFileSync(filePath, "utf8"); const originalContent = content; / Apply all fixes content = this.fixImportStatements(content); content = this.fixStringConcatenation(content); content = this.fixObjectSyntax(content); content = this.fixJSXSyntax(content); content = this.fixUnterminatedStrings(content); / Additional cleanup" content = content.replace(/\s*;\s*;\s*/g, ";");" content = content.replace(/,\s*,\s*/g, ",");" content = content.replace(/\s*;\s*$/gm, ";"); if (content !== originalContent) {" fs.writeFileSync(filePath, content, "utf8"); this.fixedFiles.push(filePath);"` this.log(` Fixed: ${filePath}`); return true} return false} catch (error) {" this.errors.push({ file: filePath, error: error.message });` this.log(` Error fixing ${filePath}: ${error.message}`); return false} } / Fix malformed object destructuring content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*useAuth\(\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(\[\]\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(true\);\s*const\s+navigate\s*=\s*useNavigate\(\);\s*useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[user\]\);\s*const\s+handleRequestHire\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*return\s*\(<div[^>]*>([^<]*)<\/div>\);\s*}/g, (match, user, savedTalents, isLoading, content) => { fixes++;` return `const { ${user} } = useAuth(); const [${savedTalents}] = useState([]); const [${isLoading}] = useState(true); const navigate = useNavigate(); " const srcDir = path.join(this.projectRoot, "src"); if (!fs.existsSync(srcDir)) {" this.log(" src directory not found"); return} " const files = this.getAllFiles(srcDir, [".tsx", ".ts", ".jsx", ".js"]);"` this.log(`Found ${files.length} files to check"); let fixedCount = 0; for (const file of files) { if (this.fixFile(file)) { fixedCount++} } " this.log(" Fixed ${fixedCount} files");" this.log(" ${this.errors.length} errors encountered"); / Generate report const report = {" timestamp: new Date().toISOString()," totalFiles: files.length," fixedFiles: fixedCount," errors: this.errors," fixedFileList: this.fixedFiles }; fs.writeFileSync(" path.join(this.projectRoot, "syntax-fix-report.json"), JSON.stringify(report, null, 2) ); " this.log(" Report saved to syntax-fix-report.json")}}/ Function to process a single filefunction processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8");" const { content: fixedContent, fixes } = fixSyntaxErrors(content, filePath); if (fixes > 0) {" fs.writeFileSync(filePath, fixedContent, "utf8");" console.log(" Fixed ${fixes} issues in ${filePath}"); return fixes; } return 0; } catch (error) {" console.error(" Error processing ${filePath}:", error.message); return 0; }}/ Main executionasync function main() {" const patterns = ["src*.tsx"," "src*.ts"," "src*.jsx"," "src*.js"," "app*.tsx"," "app*.ts"," "pages*.tsx"," "pages*.ts"," "pages*.jsx"," "pages*.js" ]; let totalFixes = 0; let filesProcessed = 0; for (const pattern of patterns) {"" const files = glob.sync(pattern, { ignore: ["node_modules/**", ".next/**", "dist/**"] }); for (const file of files) { if (fs.existsSync(file)) { const fixes = processFile(file); totalFixes += fixes; filesProcessed++; } } }" console.log("\n Summary: ");" console.log(" Files processed: ${filesProcessed}");" console.log(" Total fixes applied: ${totalFixes}"); if (totalFixes > 0) {" console.log("\n Syntax error fixing completed!"); } else {"` console.log("\n No syntax errors found to fix.`); }}main().catch(console.error);""`"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const glob = require('glob')
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'')]
    content = content.replace(/import\s*{[^}]+}\s*from\s*['"][^'"]+['')]
    content = content.replace(/['"]\s*;\s*['')]
    content = content.replace(/['"]\s*;\s*([^'"]*)\s*['']
    content = content.replace(/\[\s*['"]\s*;\s*([^'"]*)\s*['']
    content = content.replace(/\[\s*['"]\s*([^'"]*)\s*;\s*['']
    content = content.replace(/{\s*['"]\s*;\s*([^'"]*)\s*[''}]
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['']
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['']
    content = content.replace(/className\s*=\s*['"]\s*;\s*([^'"]*)\s*['']
    content = content.replace(/href\s*=\s*['"]\s*;\s*([^'"]*)\s*['']
    content = content.replace(/title\s*=\s*['"]\s*;\s*([^'"]*)\s*['']
    content = content.replace(/@media\(prefers-reduced-"motion")
        if (line.includes("'") && !line.endsWith(")
          line = line + "
        if (line.includes('"') && !line.endsWith('')
          line = line + ''
        const files = glob.sync(pattern, { "ignore"})
#!/usr/bin/env node
/**
 * Comprehensive Syntax Error Fixer for Zion Tech Group
 * Fixes all known syntax errors in the codebase
 */
class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = []}
console.log('🔧 Comprehensive Syntax Error Fixer');
console.log('=');
  log(message) {
    .toISOString()}] ${message}`)}
const fixes = [];
function fixFile(filePath, description, fixFunction) {
    console.log(`\n🔍 Checking: ${filePath}`);
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return;
    }
    return files}
  fixImportStatements(content) {
    // Fix malformed import statements
<<<<<<< HEAD
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g,
=======
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      'import { $1 } from \'$2\'\nimport { $3 } from \'$4\'');
    // Fix missing semicolons after imports
    content = content.replace(/import\s*{[^}]+}\s*from\s*['"][^'"]+['"](?!\s*;)/g, '$&;');
    return content}
  fixStringConcatenation(content) {
    // Fix malformed string concatenation with semicolons
    content = content.replace(/['"]\s*;\s*['"]/g, '');
    content = content.replace(/['"]\s*;\s*([^'"]*)\s*['"]/g, '$1');
    // Fix array syntax issues
    content = content.replace(/\[\s*['"]\s*;\s*([^'"]*)\s*['"]\s*\]/g, '[\'$1\']');
    content = content.replace(/\[\s*['"]\s*([^'"]*)\s*;\s*['"]\s*\]/g, '[\'$1\']');
    return content}
  fixObjectSyntax(content) {
    // Fix object property syntax
    content = content.replace(/{\s*['"]\s*;\s*([^'"]*)\s*['"]\s*:/g, '{ \'$1\':');
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*,/g, ': \'$1\',');
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*}/g, ': \'$1\' }');
    return content}
  fixJSXSyntax(content) {
    // Fix JSX attribute syntax
    content = content.replace(/className\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g, 'className=\'$1\'');
    content = content.replace(/href\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g, 'href=\'$1\'');
    content = content.replace(/title\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g, 'title=\'$1\'');
    return content}
console.log('🔧 Starting comprehensive syntax error fixing...');
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Fix common syntax errors
    // Fix unnecessary escape characters

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
    // Fix common syntax errors

    // Fix unnecessary escape characters
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Fix common syntax errors
    // Fix unnecessary escape characters
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    content = content.replace(/\\:/g, ':');
    content = content.replace(/\\,/g, ',');
    content = content.replace(/\\;/g, ';');
    content = content.replace(/\\}/g, '}');
    content = content.replace(/\\{/g, '{');
    content = content.replace(/\\\[/g, '[');
    content = content.replace(/\\\]/g, ']');
    content = content.replace(/\\\(/g, '(');
    content = content.replace(/\\\)/g, ')');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
    // Fix malformed CSS in JSX
    content = content.replace(/@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, '');
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      // Check for unterminated strings
      const singleQuotes = (line.match(/'/g) || []).length;
      const doubleQuotes = (line.match(/"/g) || []).length;
      if (singleQuotes % 2 !== 0 && !line.includes('//')) {
        // Try to fix unterminated single quotes
        if (line.includes("'") && !line.endsWith("'")) {
          line = line + "'"}
      }
      if (doubleQuotes % 2 !== 0 && !line.includes('//')) {
        // Try to fix unterminated double quotes
        if (line.includes('"') && !line.endsWith('"')) {
          line = line + '"'}
      }
      fixedLines.push(line)}
    return fixedLines.join('\n')}
  fixFile(filePath) {
    try {
      this.log(`Fixing: ${filePath}`);
      const originalContent = content;
      // Apply all fixes
      content = this.fixImportStatements(content);
      content = this.fixStringConcatenation(content);
      content = this.fixObjectSyntax(content);
      content = this.fixJSXSyntax(content);
      content = this.fixUnterminatedStrings(content);
      // Additional cleanup
      content = content.replace(/\s*;\s*;\s*/g, ';');
      content = content.replace(/,\s*,\s*/g, ',');
      content = content.replace(/\s*;\s*$/gm, ';');
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true}
      return false} catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}
  }

    // Fix malformed CSS in JSX
    content = content.replace(/@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, '');

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

    // Fix malformed CSS in JSX
    content = content.replace(/@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, '');
    
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Fix malformed function declarations
    content = content.replace(/export\s+const\s+SEO:\s*Reac\s+t\.FC<[^>]+>\s*=\s*\(/g, 'export const SEO: React.FC<SEOProps> = (');
    // Fix malformed return statements in functions
    content = content.replace(/return\s*\(\)\s*\/\*[^*]*\*\/\s*@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, 'return null;');
    // Fix missing semicolons
<<<<<<< HEAD
<<<<<<< HEAD

    // Fix missing semicolons at end of statements
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

    // Fix missing semicolons at end of statements
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    // Fix missing semicolons at end of statements
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    // Fix missing commas in objects
    content = content.replace(/(\w+):\s*([^}]+)\s*}/g, '$1: $2}');
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    // Fix missing semicolons at end of statements
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    // Fix missing commas in objects
    content = content.replace(/(\w+):\s*([^,}]+)\s*}/g, '$1: $2,}');
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Fix missing semicolons at end of statements
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    // Fix missing commas in objects
    content = content.replace(/(\w+):\s*([^,}]+)\s*}/g, '$1: $2,}');

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
;
    if (openBraces > closeBraces) {;}

=======
    // Fix malformed object destructuring
    content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*useAuth\(\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(\[\]\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(true\);\s*const\s+navigate\s*=\s*useNavigate\(\);\s*useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[user\]\);\s*const\s+handleRequestHire\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*return\s*\(<div[^>]*>([^<]*)<\/div>\);\s*}/g, (match, user, savedTalents, isLoading, content) => {
        fixes++;
        return `const { ${user} } = useAuth();
    const [${savedTalents}] = useState([]);
    const [${isLoading}] = useState(true);
    const navigate = useNavigate();
    const srcDir = path.join(this.projectRoot, 'src');
    if (!fs.existsSync(srcDir)) {
      this.log('❌ src directory not found');
      return}
    const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
    this.log(`Found ${files.length} files to check`);
    let fixedCount = 0;
    for (const file of files) {
      if (this.fixFile(file)) {
        fixedCount++}
    try {
        const originalContent = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixFunction(originalContent);
        if (originalContent !== fixedContent) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            console.log(`✅ Fixed: ${description}`);
            fixes.push({ file: filePath, description });
        } else {
            console.log(`✅ No issues found: ${description}`);
        }
    } catch (error) {
        console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    }
}
// Fix _app.tsx button syntax
fixFile('pages/_app.tsx', 'Button style syntax', (content) => {
    return content.replace(
        /style=\{\{\s*background:\s*'none',\s*border:\s*'none',\s*color:\s*'white',\s*fontSize:\s*'1\.2rem',\s*cursor:\s*'pointer',\s*padding:\s*'6px',\s*borderRadius:\s*4\s*\}\s*onClick/g,
        'style={{\n              background: \'none\', border: \'none\', color: \'white\', fontSize: \'1.2rem\',\n              cursor: \'pointer\', padding: \'6px\', borderRadius: 4\n            }}\n            onClick'
    );
});
    // Fix missing semicolons at end of statements
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    content = content.replace(/([^;}])\s*$/gm, '$1;');

    // Fix missing commas in objects
    content = content.replace(/(\w+):\s*([^}]+)\s*}/g, '$1: $2}');

    // Fix missing closing braces

<<<<<<< HEAD
=======

    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    useEffect(() => {
        const fetchSavedTalents = async () => {
            if (!user) return;
            try {
                setIsLoading(true);
                // Fetch saved talents logic here
            } catch (error) {
                console.error('Error fetching saved talents:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSavedTalents();
    }, [user]);
    const handleRequestHire = (talentId) => {
        // Handle hire request logic here
    };
    return (
        <div className="min-h-screen bg-gray-50">
            ${content}
        </div>
    );`;
    });
    return { content, fixes };
<<<<<<< HEAD

}

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
;
    if (openBraces > closeBraces) {;}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======

    content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*useAuth\(\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(\[\]\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(true\);\s*const\s+navigate\s*=\s*useNavigate\(\);\s*useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[user\]\);\s*const\s+handleRequestHire\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*return\s*\(<div[^>]*>([^<]*)<\/div>\);\s*}/g, (match, user, savedTalents, isLoading, content) => {
</div>
        <div className="min-h-screen bg-gray-50">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Function to process a single file;
function processFile(filePath) {;
  try {;"
  const content = fs.readFileSync(filePath, "utf8");"
    const { fixed, changes } = fixSyntaxErrors(content, filePath);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (changes > 0) {;"

      return changes;,
    return 0;,
} catch (error) {;`;
  console.error(`Error processing ${filePath}:`, error.message);
// Function to recursively find all TypeScript/JavaScript files;"
function findFiles(dir, extensions = [".ts", ".tsx", ".js", ".jsx"]) {;"
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
  return files;,
=======
<<<<<<< HEAD
  return files;,
=======
}
  return files;,
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

    ];
    let totalFixes = 0;
    let filesProcessed = 0;
    for (const pattern of patterns) {

        for (const file of files) {
            if (fs.existsSync(file)) {
                const fixes = processFile(file);
                totalFixes += fixes;
                filesProcessed++;
    if (totalFixes > 0) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
    } else {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
    } else {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
        
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    fixed = fixed.replace(
        /return\s*this\.props\.children;\s*\}\s*export\s*default/g,
        'return this.props.children;\n  }\n}\n\nexport default)
    );
    return fixed;
<<<<<<< HEAD
});
<<<<<<< HEAD

=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;

      modified = true;

    // Fix missing closing parentheses;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;

    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;


    // Fix missing closing brackets;
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;

    if (openBrackets > closeBrackets) {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    // Fix missing closing brackets;
    if (openBrackets > closeBrackets) {;
      const missingBrackets = openBrackets - closeBrackets;

    // Fix duplicate imports;
    const importLines = content;
      .split('\n');
      .filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {;
      const nonImportLines = content;
<<<<<<< HEAD
        .split('\n');
        .filter(line => !line.trim().startsWith('import'));
      content = uniqueImports.join('\n') + '\n' + nonImportLines.join('\n');
      modified = true;
    }
<<<<<<< HEAD
=======
function processDirectory(dirPath) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    // Fix missing React import;
    if (content.includes('React') && !content.includes('import React')) {;
      content = "import React from 'react';\n" + content;"
    // Fix semicolons in object properties;"

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

    ) {;
      fixedCount += processDirectory(filePath);
    } else if (;)
      file.endsWith('.tsx') ||;
      file.endsWith('.ts') ||;
      file.endsWith('.jsx') ||;
      file.endsWith('.js');

      if (fixSyntaxErrors(filePath)) fixedCount++;
  return fixedCount;
<<<<<<< HEAD
}
;
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('.');
console.log(`Fixed ${fixedCount} files`);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    fixed = fixed.replace(
        /return\s*this\.props\.children;\s*\}\s*export\s*default/g,
        'return this.props.children;\n  }\n}\n\nexport default'
    );
    return fixed;
});
<<<<<<< HEAD

// Fix PerformanceMonitor syntax
fixFile('components/PerformanceMonitor.tsx', 'PerformanceMonitor syntax', (content) => {
    // Replace the entire file with correct syntax
    return `import { useEffect } from 'react';
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
        }
      });
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Fallback for browsers that don't support LCP
      }
      // Monitor First Input Delay (FID)
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }
      });
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // Fallback for browsers that don't support FID
      }
      // Monitor Cumulative Layout Shift (CLS)
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('CLS:', clsValue);
      });
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support CLS
      }
      return () => {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);
  return null; // This component doesn't render anything
};
export default PerformanceMonitor;`;
});
console.log('\n📊 Fix Summary');
console.log('=');
console.log(`Total fixes applied: ${fixes.length}`);
if (fixes.length > 0) {
    console.log('\nFixed files:');
    fixes.forEach(fix => {
        console.log(`  ✅ ${fix.file}: ${fix.description}`);
    });
} else {
    console.log('\n✅ No syntax errors found - all files are clean!');
}
console.log('\n🎯 Syntax error fixing completed!');
=======
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

<<<<<<< HEAD
    // Fix missing closing brackets

    if (openBrackets > closeBrackets) {
      content += ']'.repeat(missingBrackets);
      modified = true;
    }

    // Fix duplicate imports
    const importLines = content
      .split('\n')
      .filter(line => line.trim().startsWith('import'));
    if (importLines.length !== uniqueImports.length) {
      const nonImportLines = content
        .split('\n')
        .filter(line => !line.trim().startsWith('import'));
      content = uniqueImports.join('\n') + '\n' + nonImportLines.join('\n');
      modified = true;
    }
=======
    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    // Fix missing closing parentheses;
>>>>>>> origin/chore/fix-lint-and-merge



    // Fix missing closing brackets;



  } catch (error) {`;



<<<<<<< HEAD
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (
=======
    if ()
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      stat.isDirectory() &&

    } else if ()
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')

<<<<<<< HEAD
  return fixedCount;
}

console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('.');
console.log(`Fixed ${fixedCount} files`);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
<<<<<<< HEAD
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> origin/main
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
