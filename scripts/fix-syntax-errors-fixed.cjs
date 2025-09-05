<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env node;const fs = require("$1");"const path = require("path");class SyntaxErrorFixer {; constructor() {; this.projectRoot = process.cwd(); this.fixedFiles = []; this.errors = [],}; log(message) {; console.log(`[${new Date().toISOString()}] ${message}`),}; fixFile(filePath) {; try {;" let content = fs.readFileSync(filePath, "utf8"); let originalContent = content; let fixed = false; / Fix unterminated strings with &apos;" content = content.replace(/&apos;s\s*""\s*$/gm, "&apos;s"");" content = content.replace(/&apos;s\s*""\s*>/gm, "&apos;s">");" content = content.replace(/&apos;s\s*""\s*,/gm, "&apos;s", "); / Fix unterminated strings with escaped quotes;" content = content.replace(/we\"ll\s*""\s*$/gm, "we\"ll"");" content = content.replace(/we\"ll\s*""\s*,/gm, "we\"ll", "); / Fix unterminated strings in general;" content = content.replace(/""\s*$/gm, """);" content = content.replace(/""\s*>/gm, "">");" content = content.replace(/""\s*,/gm, ", ");" content = content.replace(/""\s*\)/gm, "")"); if (content !== originalContent) {;" fs.writeFileSync(filePath, content, "utf8"); this.fixedFiles.push(filePath); fixed = true;` this.log(` Fixed syntax errors in ${filePath}`),}; return fixed,} catch (error) {;" this.errors.push({ file: filePath, error: error.message });` this.log(` Error fixing ${filePath}: ${error.message}`); return false,} }; fixAllFiles() {;" this.log(" Starting syntax error fixing."); const filesToFix = [;" "pages/blog.tsx"," "pages/help.tsx"," "pages/pricing-guide.tsx"," "pages/pricing.tsx"," "pages/terms.tsx"]; for (const file of filesToFix) {; const filePath = path.join(this.projectRoot, file); if (fs.existsSync(filePath)) {; this.fixFile(filePath),} else {;"` this.log(` File not found: ${filePath}`),} };` this.log(` Syntax fixing completed. Fixed ${this.fixedFiles.length} files.`); if (this.errors.length > 0) {;"` this.log(` ${this.errors.length} errors encountered: `); this.errors.forEach(err => {;` this.log(` - ${err.file}: ${err.error}`),}),}; return {;" fixedFiles: this.fixedFiles," errors: this.errors,} }};/ Run the fixer;if (require.main === module) {; const fixer = new SyntaxErrorFixer(); fixer.fixAllFiles(),};module.exports = SyntaxErrorFixer""`"`
=======
#!/usr/bin/env node;
<<<<<<< HEAD
const fs = require("$1");
const path = require("path");
class SyntaxErrorFixer {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [],}
;
  log(message) {;
    .toISOString()}] ${message}`),}
;
  fixFile(filePath) {;
    try {;
      let content = fs.readFileSync(filePath, "utf8");
      let originalContent = content;
      let fixed = false;
      // Fix unterminated strings with &apos;
      content = content.replace(/&apos;s\s*""\s*$/gm, "&apos;s"");
      content = content.replace(/&apos;s\s*""\s*>/gm, "&apos;s">");
      content = content.replace(/&apos;s\s*""\s*,/gm, "&apos;s", ");
      // Fix unterminated strings with escaped quotes;
      content = content.replace(/we\\"ll\s*""\s*$/gm, "we\\"ll"");
      content = content.replace(/we\\"ll\s*""\s*,/gm, "we\\"ll", ");
      // Fix unterminated strings in general;
      content = content.replace(/""\s*$/gm, """);
      content = content.replace(/""\s*>/gm, "">");
      content = content.replace(/""\s*,/gm, ", ");
      content = content.replace(/""\s*\)/gm, "")");
      if (content !== originalContent) {;
        fs.writeFileSync(filePath, content, "utf8");
        this.fixedFiles.push(filePath);
        fixed = true;
        this.log(`✅ Fixed syntax errors in ${filePath}`),}
;
      return fixed,} catch (error) {;
      this.errors.push({ "file": filePath, "error": error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false,}
  }
;
  fixAllFiles() {;
    this.log("🔧 Starting syntax error fixing...");
    const filesToFix = [;
      "pages/blog.tsx",
      "pages/help.tsx",
      "pages/pricing-guide.tsx",
      "pages/pricing.tsx",
      "pages/terms.tsx'];
    for (const file of filesToFix) {;
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {;
        this.fixFile(filePath),} else {;
        this.log(`⚠️ File not "found": ${filePath}`),}
    }
;
    this.log(`🎉 Syntax fixing completed. Fixed ${this.fixedFiles.length} files.`);
    if (this.errors.length > 0) {;
      this.log(`❌ ${this.errors.length} errors "encountered": `);
      this.errors.forEach(err => {;
        this.log(`   - ${err.file}: ${err.error}`),}),}
;
    return {;
      "fixedFiles": this.fixedFiles,
      "errors": this.errors,}
  }
}
;
// Run the fixer;
if (require.main === module) {;
  const fixer = new SyntaxErrorFixer();
  fixer.fixAllFiles(),}
;
module.exports = SyntaxErrorFixer
=======
const fs = require("$1")
const path = require("path")
      let content = fs.readFileSync(filePath, "utf8")
      content = content.replace(/&apos;s\s*""\s*$/gm, "&apos;s"")
      content = content.replace(/&apos;s\s*""\s*>/gm, "&apos;s">")
      content = content.replace(/&apos;s\s*""\s*,/gm, "&apos;s", ")
      content = content.replace(/we\\"ll\s*""\s*$/gm, "we\\"ll"")
      content = content.replace(/we\\"ll\s*""\s*,/gm, "we\\"ll", ")
      content = content.replace(/""\s*$/gm, """)
      content = content.replace(/""\s*>/gm, "">")
      content = content.replace(/""\s*,/gm, ", ")
      content = content.replace(/""\s*\)/gm, "")"
        fs.writeFileSync(filePath, content, "utf8")
      this.errors.push({ "file": filePath, "error"})
    this.log(" Starting syntax error fixing...")
      "pages/blog.tsx"
      "pages/help.tsx"
      "pages/pricing-guide.tsx"
      "pages/pricing.tsx"
      "
>>>>>>> main
>>>>>>> main
