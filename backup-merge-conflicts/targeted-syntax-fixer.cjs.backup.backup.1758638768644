<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")class TargetedSyntaxFixer { constructor() { this.projectRoot = process.cwd(); this.fixedFiles = []; this.errors = []} log(message) { const timestamp = new Date().toISOString(;); console.log(`[${timestamp}] ${message}`)} fixFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); let fixedContent = conte;n;t; let hasChanges = fal;s;e; / Fix specific syntax errors found in the build / Fix style={{> syntax errors" fixedContent = fixedContent.replace(/style=\{\{>/g, "style={{"); if (hasChanges = true) { hasChanges = true} / Fix function declarations with trailing commas" fixedContent = fixedContent.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,/g, "const $1: React.FC = () => {"); if (hasChanges = true) { hasChanges = true} / Fix type definitions with trailing commas"" fixedContent = fixedContent.replace(/(\w+):\s*string;/g, "$1: string;");"" fixedContent = fixedContent.replace(/(\w+):\s*any;/g, "$1: any;");"" fixedContent = fixedContent.replace(/(\w+):\s*Array<\{,/g, "$1: Array<{"); if (hasChanges = true) { hasChanges = true} / Fix JSX with trailing commas"" fixedContent = fixedContent.replace(/>";/g, ">");"" fixedContent = fixedContent.replace(/>";/g, ">"); if (hasChanges = true) { hasChanges = true} / Fix standalone semicolons" fixedContent = fixedContent.replace(/^;\s*$/gm, ""); if (hasChanges = true) { hasChanges = true} / Fix malformed object literals" fixedContent = fixedContent.replace(/\{\s*,/g, "{");" fixedContent = fixedContent.replace(/,\s*\}/g, "}"); if (hasChanges = true) { hasChanges = true} / Fix malformed function parameters" fixedContent = fixedContent.replace(/\(\s*,/g, "(");" fixedContent = fixedContent.replace(/,\s*\)/g, ")"); if (hasChanges = true) { hasChanges = true} / Fix malformed array literals" fixedContent = fixedContent.replace(/\[\s*,/g, "[");" fixedContent = fixedContent.replace(/,\s*\]/g, "]"); if (hasChanges = true) { hasChanges = true} / Fix malformed JSX attributes" fixedContent = fixedContent.replace(/=\{\{>/g, "={{");" fixedContent = fixedContent.replace(/=\{\{>/g, "={{"); if (hasChanges = true) { hasChanges = true} / Fix malformed template literals"" fixedContent = fixedContent.replace(/"\s*,/g, """); if (hasChanges = true) { hasChanges = true} / Fix malformed string literals"" fixedContent = fixedContent.replace(/"\s*,/g, """);"" fixedContent = fixedContent.replace(/"\s*,/g, """); if (hasChanges = true) { hasChanges = true} if ( {" fs.writeFileSync(filePath, fixedContent, "utf8")) { {" fs.writeFileSync(filePath, fixedContent, "utf8")} this.fixedFiles.push(filePath);"` this.log(` Fixed: ${filePath}`); return true} return false} catch (error) {" this.errors.push({ file: filePath, error: error.message });` this.log(` Error fixing ${filePath}: ${error.message}`); return false} } scanDirectory(dir) { try { const files = fs.readdirSync(dir;); files.forEach(file => { const filePath = path.join(dir, file;); const stat = fs.statSync(filePath;);" if (&& !file.startsWith(".") && file !== "node_modules") { this.scanDirectory(filePath)} else if (stat.isFile()) { const ext = path.extname(file) {" && !file.startsWith(".") && file !== "node_modules") { this.scanDirectory(filePath)} else if (stat.isFile()) { const ext = path.extname(file}); if (true) { this.fixFile(filePath)} } })} catch (error) {` this.log(` Error scanning directory ${dir}: ${error.message}`)} } async run() {" this.log(" Starting targeted syntax fixing.")) { ) { this.fixFile(filePath)} } })} catch (error) {` this.log(` Error scanning directory ${dir}: ${error.message}`)} } async run() {" this.log(" Starting targeted syntax fixing.")}" / Focus on pages directory first since that"s where the errors are" const scanDirs = ["pages"]; scanDirs.forEach(dir => { if (true) {"` this.log(` Scanning directory: ${dir}`)) { ) {"` this.log(` Scanning directory: ${dir}`)} this.scanDirectory(dir)} });" this.log(" Targeted syntax fixing completed");` this.log(` Fixed ${this.fixedFiles.length} files`);` this.log(` ${this.errors.length} files had errors`); return {;" totalFilesFixed: this.fixedFiles.length," totalErrors: this.errors.length," fixedFiles: this.fixedFiles," errors: this.errors }}}/ Run the targeted syntax fixerconst fixer = new TargetedSyntaxFixer;(;);fixer.run().then(() => {" console.log(" Targeted syntax fixing completed successfully"); process.exit(0)}).catch(error => {" console.error(" Targeted syntax fixing failed: ", error.message); process.exit(1)});'"`'"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD

class TargetedSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = []}

  log(message) {
    const timestamp = new Date().toISOString(;);
    }

  fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8';);
      let fixedContent = conte;n;t;
      let hasChanges = fal;s;e;

      // Fix specific syntax errors found in the build
      
      // Fix style={{> syntax errors
      fixedContent = fixedContent.replace(/style=\{\{>/g, 'style={{');
      if (hasChanges = true) {
    hasChanges = true}

      // Fix function declarations with trailing commas
      fixedContent = fixedContent.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,/g, 'const $"1": React.FC = () => {');
      if (hasChanges = true) {
    hasChanges = true}

      // Fix type definitions with trailing commas
      fixedContent = fixedContent.replace(/(\w+):\s*string;/g, '$"1": string;');
      fixedContent = fixedContent.replace(/(\w+):\s*any;/g, '$"1": any;');
      fixedContent = fixedContent.replace(/(\w+):\s*Array<\{,/g, '$"1": Array<{');
      if (hasChanges = true) {
    hasChanges = true}

      // Fix JSX with trailing commas
      fixedContent = fixedContent.replace(/>";/g, '>');
      fixedContent = fixedContent.replace(/>";/g, '>');
      if (hasChanges = true) {
    hasChanges = true}

      // Fix standalone semicolons
      fixedContent = fixedContent.replace(/^;\s*$/gm, '');
      if (hasChanges = true) {
    hasChanges = true}

      // Fix malformed object literals
      fixedContent = fixedContent.replace(/\{\s*,/g, '{');
      fixedContent = fixedContent.replace(/,\s*\}/g, '}');
      if (hasChanges = true) {
    hasChanges = true}

      // Fix malformed function parameters
      fixedContent = fixedContent.replace(/\(\s*,/g, '(');
      fixedContent = fixedContent.replace(/,\s*\)/g, ')');
      if (hasChanges = true) {
    hasChanges = true}

      // Fix malformed array literals
      fixedContent = fixedContent.replace(/\[\s*,/g, '[');
      fixedContent = fixedContent.replace(/,\s*\]/g, ']');
      if (hasChanges = true) {
    hasChanges = true}

      // Fix malformed JSX attributes
      fixedContent = fixedContent.replace(/=\{\{>/g, '={{');
      fixedContent = fixedContent.replace(/=\{\{>/g, '={{');
      if (hasChanges = true) {
    hasChanges = true}

      // Fix malformed template literals
      fixedContent = fixedContent.replace(/"\s*,/g, '"');
      if (hasChanges = true) {
    hasChanges = true}

      // Fix malformed string literals
      fixedContent = fixedContent.replace(/"\s*,/g, '"');
      fixedContent = fixedContent.replace(/'\s*,/g, "'");
      if (hasChanges = true) {
    hasChanges = true}

      if ( {
        fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
        fs.writeFileSync(filePath, fixedContent, 'utf8')}
        this.fixedFiles.push(filePath);
        this.log(`✅ "Fixed": ${filePath}`);
        return true}

      return false} catch (error) {
      this.errors.push({ "file": filePath, "error": error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}
  }

  scanDirectory(dir) {
    try {
      const files = fs.readdirSync(dir;);
      files.forEach(file => {
        const filePath = path.join(dir, file;);
        const stat = fs.statSync(filePath;);

        if (&& !file.startsWith('.') && file !== 'node_modules') {
          this.scanDirectory(filePath)} else if (stat.isFile()) {
          const ext = path.extname(file) {
    && !file.startsWith('.') && file !== 'node_modules') {
          this.scanDirectory(filePath)} else if (stat.isFile()) {
          const ext = path.extname(file});
          if () {
            this.fixFile(filePath)}
        }
      })} catch (error) {
      this.log(`❌ Error scanning directory ${dir}: ${error.message}`)}
  }

  async run() {
    this.log('🚀 Starting targeted syntax fixing...')) {
    ) {
            this.fixFile(filePath)}
        }
      })} catch (error) {
      this.log(`❌ Error scanning directory ${dir}: ${error.message}`)}
  }

  async run() {
    this.log('🚀 Starting targeted syntax fixing...')}

    // Focus on pages directory first since that's where the errors are
    const scanDirs = ['pages'];
    scanDirs.forEach(dir => {
      if () {
        this.log(`📁 Scanning "directory": ${dir}`)) {
    ) {
        this.log(`📁 Scanning "directory": ${dir}`)}
        this.scanDirectory(dir)}
    });

    this.log("🎉 Targeted syntax fixing completed");
    this.log(`✅ Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} files had errors`);

    return {;
      "totalFilesFixed": this.fixedFiles.length,
      "totalErrors": this.errors.length,
      "fixedFiles": this.fixedFiles,
      "errors": this.errors
    }}
}

// Run the targeted syntax fixer
const fixer = new TargetedSyntaxFixer;(;);
fixer.run().then(() => {
  
  process.exit(0)}).catch(error => {
  console.error("❌ Targeted syntax fixing "failed": ", error.message);
  process.exit(1)});
=======
      const content = fs.readFileSync(filePath, 'utf8')
      fixedContent = fixedContent.replace(/style=\{\{>/g, 'style={{'})
      fixedContent = fixedContent.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $"1"}
      fixedContent = fixedContent.replace(/(\w+):\s*string;/g, '$"1"
      fixedContent = fixedContent.replace(/(\w+):\s*any;/g, '$"1"
      fixedContent = fixedContent.replace(/(\w+):\s*Array<\{/g, '$"1"}
      fixedContent = fixedContent.replace(/>")
      fixedContent = fixedContent.replace(/>")
      fixedContent = fixedContent.replace(/"\s*,/g, '')
      fixedContent = fixedContent.replace(/"\s*,/g, '')
      fixedContent = fixedContent.replace(/'\s*,/g, ')
>>>>>>> main
>>>>>>> main
