<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class QuickSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedCount = 0}

  log(message) {
    .toISOString()}] ${message}`)}

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix the most common issues
      
      // 1. Fix malformed imports - split concatenated imports
      content = content.replace(
        /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g,
        'import { $1 } from \'$2\';\nimport { $3 } from \'$4\';'
      );
      
      // 2. Add missing semicolons after imports
      content = content.replace(/import\s*{[^}]+}\s*from\s*['"][^'"]+['"](?!\s*;)/g, '$&;');
      
      // 3. Fix string concatenation issues
      content = content.replace(/['"]\s*;\s*['"]/g, '');
      content = content.replace(/['"]\s*;\s*([^'"]*)\s*['"]/g, '$1');
      
      // 4. Fix array syntax
      content = content.replace(/\[\s*['"]\s*;\s*([^'"]*)\s*['"]\s*\]/g, '[\'$1\']');
      content = content.replace(/\[\s*['"]\s*([^'"]*)\s*;\s*['"]\s*\]/g, '[\'$1\']');
      
      // 5. Fix object syntax
      content = content.replace(/{\s*['"]\s*;\s*([^'"]*)\s*['"]\s*:/g, '{ \'$1\':');
      content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*,/g, ': \'$1\',');
      content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*}/g, ': \'$1\' }');
      
      // 6. Fix JSX attributes
      content = content.replace(/className\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g, 'className=\'$1\'');
      content = content.replace(/href\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g, 'href=\'$1\'');
      
      // 7. Clean up multiple semicolons
      content = content.replace(/\s*;\s*;\s*/g, ';');
      content = content.replace(/,\s*,\s*/g, ',');
      
      // 8. Fix unterminated strings (basic fix)
      const lines = content.split('\n');
      const fixedLines = lines.map(line => {
        if (line.includes("'") && (line.match(/'/g) || []).length % 2 !== 0 && !line.endsWith("'")) {
          return line + "'"}
        if (line.includes('"') && (line.match(/"/g) || []).length % 2 !== 0 && !line.endsWith('"')) {
          return line + '"'}
        return line});
      content = fixedLines.join('\n');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedCount++;
        this.log(`✅ "Fixed": ${path.relative(this.projectRoot, filePath)}`);
        return true}
      
      return false} catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}
  }

  getAllFiles(dir, extensions) {
    let files = [];
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath)}
      }
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return files}

  async run() {
    this.log('🔧 Starting Quick Syntax Fix');
    
    const srcDir = path.join(this.projectRoot, 'src');
    if (!fs.existsSync(srcDir)) {
      this.log('❌ src directory not found');
      return}
    
    const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
    this.log(`Found ${files.length} files to check`);
    
    // Process files in batches to avoid timeout
    const batchSize = 50;
    for (let i = 0; i < files.length; i += batchSize) {
      const batch = files.slice(i, i + batchSize);
      this.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(files.length/batchSize)}`);
      
      for (const file of batch) {
        this.fixFile(file)}
    }
    
    this.log(`🎉 Fixed ${this.fixedCount} files`)}
}

// Run the fixer
const fixer = new QuickSyntaxFixer();
fixer.run().catch(console.error);
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");class QuickSyntaxFixer { constructor() { this.projectRoot = process.cwd(); this.fixedCount = 0} log(message) { console.log(`[${new Date().toISOString()}] ${message}`)} fixFile(filePath) { try {" let content = fs.readFileSync(filePath, "utf8"); const originalContent = content; / Fix the most common issues / 1. Fix malformed imports - split concatenated imports content = content.replace(" /import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]\s*import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]/g," "import { $1 } from \"$2\";\nimport { $3 } from \"$4\";" ); / 2. Add missing semicolons after imports"" content = content.replace(/import\s*{[^}]+}\s*from\s*[""][^""]+[""](?!\s*;)/g, "$&;"); / 3. Fix string concatenation issues"" content = content.replace(/[""]\s*;\s*[""]/g, "");"" content = content.replace(/[""]\s*;\s*([^""]*)\s*[""]/g, "$1"); / 4. Fix array syntax"" content = content.replace(/\[\s*[""]\s*;\s*([^""]*)\s*[""]\s*\]/g, "[\"$1\"]");"" content = content.replace(/\[\s*[""]\s*([^""]*)\s*;\s*[""]\s*\]/g, "[\"$1\"]"); / 5. Fix object syntax"" content = content.replace(/{\s*[""]\s*;\s*([^""]*)\s*[""]\s*:/g, "{ \"$1\":");"" content = content.replace(/:\s*[""]\s*;\s*([^""]*)\s*[""]\s*,/g, ": \"$1\",");"" content = content.replace(/:\s*[""]\s*;\s*([^""]*)\s*[""]\s*}/g, ": \"$1\" }"); / 6. Fix JSX attributes"" content = content.replace(/className\s*=\s*[""]\s*;\s*([^""]*)\s*[""]/g, "className=\"$1\"");"" content = content.replace(/href\s*=\s*[""]\s*;\s*([^""]*)\s*[""]/g, "href=\"$1\""); / 7. Clean up multiple semicolons" content = content.replace(/\s*;\s*;\s*/g, ";");" content = content.replace(/,\s*,\s*/g, ","); / 8. Fix unterminated strings (basic fix)" const lines = content.split("\n"); const fixedLines = lines.map(line => {"" if (line.includes(""") && (line.match(/"/g) | []).length % 2 !== 0 && !line.endsWith(""")) {"" return line + """}"" if (line.includes(""") && (line.match(/"/g) | []).length % 2 !== 0 && !line.endsWith(""")) {"" return line + """} return line});" content = fixedLines.join("\n"); if (content !== originalContent) {" fs.writeFileSync(filePath, content, "utf8"); this.fixedCount++;"` this.log(` Fixed: ${path.relative(this.projectRoot, filePath)}`); return true} return false} catch (error) {` this.log(` Error fixing ${filePath}: ${error.message}`); return false} } getAllFiles(dir, extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) {" / Skip directories that can"t be read } return files} async run() {" this.log(" Starting Quick Syntax Fix"); " const srcDir = path.join(this.projectRoot, "src"); if (!fs.existsSync(srcDir)) {" this.log(" src directory not found"); return} " const files = this.getAllFiles(srcDir, [".tsx", ".ts", ".jsx", ".js"]);` this.log(`Found ${files.length} files to check`); / Process files in batches to avoid timeout const batchSize = 50; for (let i = 0; i < files.length; i += batchSize) { const batch = files.slice(i, i + batchSize);` this.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(files.length/batchSize)}`); for (const file of batch) { this.fixFile(file)} } ` this.log(` Fixed ${this.fixedCount} files`)}}/ Run the fixerconst fixer = new QuickSyntaxFixer();fixer.run().catch(console.error);'"`'"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
      let content = fs.readFileSync(filePath, 'utf8')
        /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'')]
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
        if (line.includes("'") && (line.match(/'/g) || []).length % 2 !== 0 && !line.endsWith(')
          return line + "
        if (line.includes('"') && (line.match(/"/g) || []).length % 2 !== 0 && !line.endsWith('')
          return line + ''
>>>>>>> main
>>>>>>> main
