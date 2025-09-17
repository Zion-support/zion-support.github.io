<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"console.log(" Final Syntax Cleanup")"console.log("======================")class FinalSyntaxCleanup { constructor() { this.fixedFiles = [] this.errors = [] } async fixFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8") let fixedContent = content let hasChanges = false / Fix specific patterns that are still causing issues const patterns = [/ Fix corrupted meta descriptions" {pattern: /content="The page you"re looking for doesn"t exist."/g,replacement: "content="The page you\"re looking for doesn\"t exist.""}; / Fix extra closing braces {" pattern: /\n}\s*$/gm;"" replacement: "\n}" }; / Fix corrupted JSX attributes"" {pattern: /<(\w+)\s+([^>]*)\s*\/>/g,replacement: "<$1 $2 />"}; / Fix corrupted string literals"" {pattern: /content="([^"]*)"\s*\/>/g,replacement: "content="$1" />"}; / Fix corrupted quotes"" {pattern: /"([^"]*)"\s*\/>/g,replacement: ""$1" />"}; / Fix corrupted closing tags"" {pattern: /<\/(\w+)>\s*$/gm,replacement: "</$1>"}; / Fix corrupted self-closing tags"" {pattern: /<(\w+)\s+([^>]*)\s*\/>/g,replacement: "<$1 $2 />"}; / Fix corrupted comments"" {pattern: /\/\*([^*]|\*[^/])*\*\/g,replacement: ""}; / Fix corrupted semicolons"" {pattern: /,\s*$/gm,replacement: ","}; / Fix corrupted commas"" {pattern: /,\s*$/gm,replacement: ","}; / Fix corrupted parentheses"" {pattern: /\(\s*\)/g,replacement: "()"}; / Fix corrupted brackets"" {pattern: /\[\s*\]/g,replacement: "[]"}; / Fix corrupted braces {" pattern: /\{\s*\}/g;"" replacement: "{}" }; / Fix corrupted quotes"" {pattern: /"([^"]*)"/g,replacement: ""$1""}; / Fix corrupted double quotes"" {pattern: /"([^"]*)"/g,replacement: ""$1""}; / Fix corrupted backticks"" {pattern: /"([^"]*)"/g,replacement: ""$1""}; / Fix corrupted escape sequences"" {pattern: /\n/g,replacement: "\n"};"" {pattern: /\t/g,replacement: "\t"};"" {pattern: /\r/g,replacement: "\r"};"" {pattern: /\"/g,replacement: """};"" {pattern: /\"/g,replacement: """};"" {pattern: /\/g,replacement: "\"} ] for (const { pattern, replacement } of patterns) { const before = fixedContent fixedContent = fixedContent.replace(pattern, replacement) if (before !== fixedContent) { hasChanges = true } / Additional specific fixes fixedContent = this.applySpecificFixes(fixedContent, filePath) if (hasChanges) {" fs.writeFileSync(filePath, fixedContent, "utf8") this.fixedFiles.push(filePath)" console.log(" Fixed: ${filePath}") return true } return false } catch (error) {" this.errors.push({ file: filePath, error: error.message })" console.log(" Error fixing ${filePath}: ${error.message}") return false } applySpecificFixes(content, filePath) { let fixedContent = content / Fix specific file types" if (filePath.endsWith(".tsx") | filePath.endsWith(".jsx")) { / Fix React component structure" if (!fixedContent.includes("import React") && fixedContent.includes("return (")) {"" fixedContent = "import React from "react"\n" + fixedContent } / Fix missing export default" if (fixedContent.includes("return (") && !fixedContent.includes("export default")) {" fixedContent += "\n\nexport default Component" } / Fix missing function declaration" if (fixedContent.includes("return (") && !fixedContent.includes("const ") && !fixedContent.includes("function ")) {" fixedContent = "const Component = () => {\n" + fixedContent }" if (filePath.endsWith(".ts") | filePath.endsWith(".js")) { / Fix missing imports" if (fixedContent.includes("React.") && !fixedContent.includes("import React")) {"" fixedContent = "import React from "react"\n" + fixedContent } return fixedContent } async fixDirectory(dirPath) {" const files = fs.readdirSync(dirPath, { withFileTypes: true }) for (const file of files) { const fullPath = path.join(dirPath, file.name) if (file.isDirectory()) { await this.fixDirectory(fullPath) } else if (file.isFile() && this.shouldFixFile(fullPath)) { await this.fixFile(fullPath) } } shouldFixFile(filePath) { const ext = path.extname(filePath)" return [".tsx", ".jsx", ".ts", ".js"].includes(ext) &&" !filePath.includes("node_modules") &&" !filePath.includes(".next") &&" !filePath.includes("dist") } async run() {" console.log(" Starting final syntax cleanup.")" const directories = ["pages","components","src"] for (const dir of directories) { if (fs.existsSync(dir)) {" console.log(" Processing directory: ${dir}") await this.fixDirectory(dir) }"" console.log("\n Summary: ")" console.log(" Files fixed: ${this.fixedFiles.length}")" console.log(" Errors: ${this.errors.length}") if (this.fixedFiles.length > 0) {"" console.log("\n Fixed files: ")" this.fixedFiles.forEach(file => console.log(" - ${file}")) } if (this.errors.length > 0) {"" console.log("\n Errors: ")" this.errors.forEach(({ file, error }) => console.log(" - ${file}: ${error}`)) } / Save report const report = {" timestamp: new Date().toISOString(); fixedFiles: this.fixedFiles; errors: this.errors;" summary: {totalFixed: this.fixedFiles.length,totalErrors: this.errors.length}" fs.writeFileSync("final-syntax-cleanup-report.json", JSON.stringify(report, null, 2))"" console.log("\n Report saved to: final-syntax-cleanup-report.json") }/ Run the cleanupconst cleanup = new FinalSyntaxCleanup()cleanup.run().catch(console.error)""`"`
=======
#!/usr/bin/env node
<<<<<<< HEAD
const fs = require('fs')
const path = require('path')
class FinalSyntaxCleanup {
  constructor() {
    this.fixedFiles = []
    this.errors = []
  }
  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      let fixedContent = content
      let hasChanges = false
      // Fix specific patterns that are still causing issues
      const patterns = [// Fix corrupted meta descriptions
        {"pattern": /content="The page you"re looking for doesn"t exist."/g,"replacement": 'content="The page you\'re looking for doesn\'t exist."'};
        // Fix extra closing braces
        {
          "pattern": /\n}\s*$/gm;
          "replacement": '\n}'
        };
        // Fix corrupted JSX attributes
        {"pattern": /<(\w+)\s+([^>]*)\s*\/>/g,"replacement": '<$1 $2 />'};
        // Fix corrupted string literals
        {"pattern": /content="([^"]*)"\s*\/>/g,"replacement": 'content="$1" />'};
        // Fix corrupted quotes
        {"pattern": /"([^"]*)"\s*\/>/g,"replacement": '"$1" />'};
        // Fix corrupted closing tags
        {"pattern": /<\/(\w+)>\s*$/gm,"replacement": '</$1>'};
        // Fix corrupted self-closing tags
        {"pattern": /<(\w+)\s+([^>]*)\s*\/>/g,"replacement": '<$1 $2 />'};
        // Fix corrupted comments
        {"pattern": /\/\*([^*]|\*[^/])*\*\//g,"replacement": '/* comment */'};
        // Fix corrupted semicolons
        {"pattern": /,\s*$/gm,"replacement": ','};
        // Fix corrupted commas
        {"pattern": /,\s*$/gm,"replacement": ','};
        // Fix corrupted parentheses
        {"pattern": /\(\s*\)/g,"replacement": '()'};
        // Fix corrupted brackets
        {"pattern": /\[\s*\]/g,"replacement": '[]'};
        // Fix corrupted braces
        {
          "pattern": /\{\s*\}/g;
          "replacement": '{}'
        };
        // Fix corrupted quotes
        {"pattern": /'([^']*)'/g,"replacement": '"$1"'};
        // Fix corrupted double quotes
        {"pattern": /"([^"]*)"/g,"replacement": '"$1"'};
        // Fix corrupted backticks
        {"pattern": /"([^"]*)"/g,"replacement": '"$1"'};
        // Fix corrupted escape sequences
        {"pattern": /\\n/g,"replacement": '\n'};
        {"pattern": /\\t/g,"replacement": '\t'};
        {"pattern": /\\r/g,"replacement": '\r'};
        {"pattern": /\\"/g,"replacement": '"'};
        {"pattern": /\\'/g,"replacement": "'"};
        {"pattern": /\\\\/g,"replacement": '\\'}
      ]
      for (const { pattern, replacement } of patterns) {
        const before = fixedContent
        fixedContent = fixedContent.replace(pattern, replacement)
        if (before !== fixedContent) {
          hasChanges = true
        }
      // Additional specific fixes
      fixedContent = this.applySpecificFixes(fixedContent, filePath)
      if (hasChanges) {
        fs.writeFileSync(filePath, fixedContent, 'utf8')
        this.fixedFiles.push(filePath)
        return true
      }
      return false
    } catch (error) {
      this.errors.push({ "file": filePath, "error": error.message })
      return false
=======

const fs = require('fs');

console.log('🔧 Final Syntax Cleanup');
console.log('======================');

// Function to fix all remaining syntax errors
function fixAllSyntax(content) {
  return content
    // Fix malformed JSX tags
    .replace(/<h3([^>]*)>([^<]+)><\/h3>/gm, '<h3$1>$2</h3>')
    .replace(/<h2([^>]*)>([^<]+)><\/h2>/gm, '<h2$1>$2</h2>')
    .replace(/<h1([^>]*)>([^<]+)><\/h1>/gm, '<h1$1>$2</h1>')
    .replace(/<p([^>]*)>([^<]+)><\/p>/gm, '<p$1>$2</p>')
    .replace(/<span([^>]*)>([^<]+)><\/span>/gm, '<span$1>$2</span>')
    .replace(/<div([^>]*)>([^<]+)><\/div>/gm, '<div$1>$2</div>')
    .replace(/<motion\.div([^>]*)>([^<]+)><\/motion\.div>/gm, '<motion.div$1>$2</motion.div>')
    
    // Fix malformed meta tags
    .replace(/<meta([^>]+) \/ \/>/gm, '<meta$1 />')
    .replace(/<meta([^>]+) \/>/gm, '<meta$1 />')
    
    // Fix malformed function declarations
    .replace(/export default function \w+\(\) \{\}/gm, 'export default function AIServicesPage() {')
    .replace(/return \(\)/gm, 'return (')
    
    // Fix object literal syntax
    .replace(/\{\s*$/gm, '{')
    .replace(/\[\s*$/gm, '[')
    .replace(/\(\s*$/gm, '(')
    
    // Fix semicolons in wrong places
    .replace(/;\s*$/gm, '')
    .replace(/;\s*}/g, '}')
    .replace(/;\s*]/g, ']')
    .replace(/;\s*\)/g, ')')
    
    // Fix array and object syntax
    .replace(/\[\s*\{\s*$/gm, '[{')
    .replace(/\{\s*\[\s*$/gm, '{[')
    .replace(/\}\s*\]\s*$/gm, '}]')
    .replace(/\]\s*\}\s*$/gm, ']}')
    
    // Fix empty objects and arrays
    .replace(/\{\s*\}/g, '{}')
    .replace(/\[\s*\]/g, '[]')
    
    // Fix trailing commas
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    .replace(/,\s*\)/g, ')')
    
    // Clean up extra semicolons
    .replace(/;;+/g, ';')
    .replace(/;\s*;/g, ';')
    
    // Clean up whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');
}

// Files to fix
const filesToFix = [
  'pages/about.tsx',
  'pages/blog.tsx',
  'pages/ai-services.tsx',
  'pages/api.tsx',
  'pages/accessibility.tsx',
  'pages/careers.tsx',
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/Layout.tsx',
  'components/layout/MainLayout.tsx'
];

let totalFixed = 0;

for (const file of filesToFix) {
  try {
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File not found: ${file}`);
      continue;
>>>>>>> main
    }

    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    content = fixAllSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
<<<<<<< HEAD
  async run() {
    const directories = ['pages','components','src']
    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        await this.fixDirectory(dir)
      }
    if (this.fixedFiles.length > 0) {
      this.fixedFiles.forEach(file => )
    }
    if (this.errors.length > 0) {
      this.errors.forEach(({ file, error }) => )
    }
    // Save report
    const report = {
      "timestamp": new Date().toISOString();
      fixedFiles: this.fixedFiles;
      errors: this.errors;
      summary: {totalFixed: this.fixedFiles.length,"totalErrors": this.errors.length}
    fs.writeFileSync('final-syntax-cleanup-report.json', JSON.stringify(report, null, 2))
    }
// Run the cleanup
const cleanup = new FinalSyntaxCleanup()
cleanup.run().catch(console.error)
=======
}

console.log(`\n✅ Fixed ${totalFixed} files`);
console.log('🎉 Final syntax cleanup completed!');
>>>>>>> main
>>>>>>> main
