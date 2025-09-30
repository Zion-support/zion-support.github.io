


const fs = require('fs');
const path = require('path');
;
function fixSyntaxErrors(filePath) {;
  try {;

    let modified = false;
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

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;


    // Fix common syntax errors

    // Fix unnecessary escape characters
    // Fix common syntax errors
    // Fix unnecessary escape characters
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
    content = content.replace(/(\w+):\s*([^}]+)\s*}/g, '$1: $2}');
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
}

    // Fix missing semicolons at end of statements
    // Fix missing semicolons at end of statements
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    // Fix missing commas in objects
    content = content.replace(/(\w+):\s*([^,}]+)\s*}/g, '$1: $2,}');

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
;
    if (openBraces > closeBraces) {;}

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
    content = content.replace(/([^;}])\s*$/gm, '$1;');

    // Fix missing commas in objects
    content = content.replace(/(\w+):\s*([^}]+)\s*}/g, '$1: $2}');

    // Fix missing closing braces

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

}


}
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
}



// Function to process a single file;
function processFile(filePath) {;
  try {;"
  const content = fs.readFileSync(filePath, "utf8");"
    const { fixed, changes } = fixSyntaxErrors(content, filePath);

    if (changes > 0) {;"

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


        
    } else {
    } else {
        
        
    fixed = fixed.replace(
        /return\s*this\.props\.children;\s*\}\s*export\s*default/g,
        'return this.props.children;\n  }\n}\n\nexport default)
    );
    return fixed;
});


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
}
;
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('.');
console.log(`Fixed ${fixedCount} files`);



    // Fix missing closing parentheses;



    // Fix missing closing brackets;



  } catch (error) {`;



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

