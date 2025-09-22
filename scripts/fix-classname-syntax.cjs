<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/fix-classname-syntax.cjs


=======
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/fix-classname-syntax.cjs
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');
class ClassNameSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixes = [];
    this.errors = [];
  }
  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
  }
  fixClassNameSyntax(content) {
    // Fix className syntax errors like "md": text-6xl -> md:text-6xl
    const classNameRegex = /className="([^"]*)"([^"]*)"([^"]*)"/g;
    let fixed = content.replace(classNameRegex, (match, before, quoted, after) => {
      const fixedQuoted = quoted.replace(/"([a-z]+)":/g, '$1:');
      return `className="${before}"${fixedQuoted}"${after}"`;
    });
    // Fix more complex className patterns
    const complexClassNameRegex = /className="([^"]*)"([a-z]+)": ([^"]*)"([^"]*)"/g;
    fixed = fixed.replace(complexClassNameRegex, (match, before, breakpoint, classes, after) => {
      return `className="${before}${breakpoint}:${classes}${after}"`;
    });
    // Fix hover and other pseudo-class syntax
    const pseudoClassRegex = /"hover":/g;
    fixed = fixed.replace(pseudoClassRegex, 'hover:');
    const pseudoClassRegex2 = /"focus":/g;
    fixed = fixed.replace(pseudoClassRegex2, 'focus:');
    const pseudoClassRegex3 = /"active":/g;
    fixed = fixed.replace(pseudoClassRegex3, 'active:');
    return fixed;
  }
  async processFile(filePath) {
    try {
      this.log(`Processing ${filePath}...`);
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = this.fixClassNameSyntax(content);
      if (content !== fixed) {
        fs.writeFileSync(filePath, fixed);
        this.fixes.push(`Fixed className syntax in ${path.relative(this.projectRoot, filePath)}`);
        this.log(`✅ Fixed className syntax in ${filePath}`);
      }
    } catch (error) {
      this.errors.push(`Error processing ${filePath}: ${error.message}`);
      this.log(`❌ Error processing ${filePath}: ${error.message}`, 'ERROR');
    }
  }
  async run() {
    this.log('🔧 Starting className syntax fixing...');
    // Find all TypeScript and JavaScript files
    const patterns = [
      'pages/**/*.{ts,tsx,js,jsx}',
      'components/**/*.{ts,tsx,js,jsx}',
      'lib/**/*.{ts,tsx,js,jsx}',
      'hooks/**/*.{ts,tsx,js,jsx}'
    ];
    const files = [];
    for (const pattern of patterns) {
      const matches = glob.sync(pattern, { cwd: this.projectRoot });
      files.push(...matches);
    }
    this.log(`Found ${files.length} files to process`);
    for (const file of files) {
      const fullPath = path.join(this.projectRoot, file);
      if (fs.existsSync(fullPath)) {
        await this.processFile(fullPath);
      }
    }
    this.log('\n📊 ClassName Syntax Fixing Report');
    this.log('====');
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/fix-classname-syntax.cjs

=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/fix-classname-syntax.cjs
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    this.log(`Fixes Applied: ${this.fixes.length}`);

=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    this.log(`Errors Found: ${this.errors.length}`);
    if (this.fixes.length > 0) {
      this.log('\n✅ Fixes Applied:');
      this.fixes.forEach((fix, index) => {`;
        this.log(`  ${index + 1}. ${fix}`);
      });
    }
    if (this.errors.length > 0) {
      this.log('\n❌ Errors:');
      this.errors.forEach((error, index) => {`;
        this.log(`  ${index + 1}. ${error}`);
    this.log('\n🎉 ClassName syntax fixing completed!');

// Run the fixer;
const fixer = new ClassNameSyntaxFixer();
fixer.run().catch(console.error);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/fix-classname-syntax.cjs

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
=======
=======
=======
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const glob = require("glob");class ClassNameSyntaxFixer { constructor() { this.projectRoot = process.cwd(); this.fixes = []; this.errors = []; }" log(message, type = "INFO") { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] [${type}] ${message}`); } fixClassNameSyntax(content) { / Fix className syntax errors like md: text-6xl -> md:text-6xl" const classNameRegex = /className="([^"]*)"([^"]*)"([^"]*)"/g; let fixed = content.replace(classNameRegex, (match, before, quoted, after) => {"" const fixedQuoted = quoted.replace(/"([a-z]+)":/g, "$1:");"` return `className="${before}"${fixedQuoted}"${after}"`; }); / Fix more complex className patterns" const complexClassNameRegex = /className="([^"]*)"([a-z]+)": ([^"]*)"([^"]*)"/g; fixed = fixed.replace(complexClassNameRegex, (match, before, breakpoint, classes, after) => {"` return `className="${before}${breakpoint}:${classes}${after}"`; }); / Fix hover and other pseudo-class syntax" const pseudoClassRegex = /hover:/g;" fixed = fixed.replace(pseudoClassRegex, "hover:");" const pseudoClassRegex2 = /focus:/g;" fixed = fixed.replace(pseudoClassRegex2, "focus:");" const pseudoClassRegex3 = /active:/g;" fixed = fixed.replace(pseudoClassRegex3, "active:"); return fixed; } async processFile(filePath) { try {` this.log(`Processing ${filePath}.`);" const content = fs.readFileSync(filePath, "utf8"); const fixed = this.fixClassNameSyntax(content); if (content !== fixed) { fs.writeFileSync(filePath, fixed);` this.fixes.push(`Fixed className syntax in ${path.relative(this.projectRoot, filePath)}`);` this.log(` Fixed className syntax in ${filePath}`); } } catch (error) {` this.errors.push(`Error processing ${filePath}: ${error.message}`);"` this.log(` Error processing ${filePath}: ${error.message}`, "ERROR"); } } async run() {" this.log(" Starting className syntax fixing."); / Find all TypeScript and JavaScript files const patterns = [" "pages*.{ts,tsx,js,jsx}"," "components*.{ts,tsx,js,jsx}"," "lib*.{ts,tsx,js,jsx}"," "hooks*.{ts,tsx,js,jsx}" ]; const files = []; for (const pattern of patterns) { const matches = glob.sync(pattern, { cwd: this.projectRoot }); files.push(.matches); }` this.log(`Found ${files.length} files to process`); for (const file of files) { const fullPath = path.join(this.projectRoot, file); if (fs.existsSync(fullPath)) { await this.processFile(fullPath); } }" this.log("\n ClassName Syntax Fixing Report");" this.log("====");` this.log(`Fixes Applied: ${this.fixes.length}`);` this.log(`Errors Found: ${this.errors.length}`); if (this.fixes.length > 0) {" this.log("\n Fixes Applied:"); this.fixes.forEach((fix, index) => {` this.log(` ${index + 1}. ${fix}`); }); } if (this.errors.length > 0) {" this.log("\n Errors:"); this.errors.forEach((error, index) => {` this.log(` ${index + 1}. ${error}`); }); }" this.log("\n ClassName syntax fixing completed!"); }}/ Run the fixerconst fixer = new ClassNameSyntaxFixer();fixer.run().catch(console.error);""`"`
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/fix-classname-syntax.cjs
=======

<<<<<<< HEAD

#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const glob = require("glob");class ClassNameSyntaxFixer { constructor() { this.projectRoot = process.cwd(); this.fixes = []; this.errors = []; }" log(message, type = "INFO") { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] [${type}] ${message}`); } fixClassNameSyntax(content) { / Fix className syntax errors like md: text-6xl -> md:text-6xl" const classNameRegex = /className="([^"]*)"([^"]*)"([^"]*)"/g; let fixed = content.replace(classNameRegex, (match, before, quoted, after) => {"" const fixedQuoted = quoted.replace(/"([a-z]+)":/g, "$1:");"` return `className="${before}"${fixedQuoted}"${after}"`; }); / Fix more complex className patterns" const complexClassNameRegex = /className="([^"]*)"([a-z]+)": ([^"]*)"([^"]*)"/g; fixed = fixed.replace(complexClassNameRegex, (match, before, breakpoint, classes, after) => {"` return `className="${before}${breakpoint}:${classes}${after}"`; }); / Fix hover and other pseudo-class syntax" const pseudoClassRegex = /hover:/g;" fixed = fixed.replace(pseudoClassRegex, "hover:");" const pseudoClassRegex2 = /focus:/g;" fixed = fixed.replace(pseudoClassRegex2, "focus:");" const pseudoClassRegex3 = /active:/g;" fixed = fixed.replace(pseudoClassRegex3, "active:"); return fixed; } async processFile(filePath) { try {` this.log(`Processing ${filePath}.`);" const content = fs.readFileSync(filePath, "utf8"); const fixed = this.fixClassNameSyntax(content); if (content !== fixed) { fs.writeFileSync(filePath, fixed);` this.fixes.push(`Fixed className syntax in ${path.relative(this.projectRoot, filePath)}`);` this.log(` Fixed className syntax in ${filePath}`); } } catch (error) {` this.errors.push(`Error processing ${filePath}: ${error.message}`);"` this.log(` Error processing ${filePath}: ${error.message}`, "ERROR"); } } async run() {" this.log(" Starting className syntax fixing."); / Find all TypeScript and JavaScript files const patterns = [" "pages*.{ts,tsx,js,jsx}"," "components*.{ts,tsx,js,jsx}"," "lib*.{ts,tsx,js,jsx}"," "hooks*.{ts,tsx,js,jsx}" ]; const files = []; for (const pattern of patterns) { const matches = glob.sync(pattern, { cwd: this.projectRoot }); files.push(.matches); }` this.log(`Found ${files.length} files to process`); for (const file of files) { const fullPath = path.join(this.projectRoot, file); if (fs.existsSync(fullPath)) { await this.processFile(fullPath); } }" this.log("\n ClassName Syntax Fixing Report");" this.log("====");` this.log(`Fixes Applied: ${this.fixes.length}`);` this.log(`Errors Found: ${this.errors.length}`); if (this.fixes.length > 0) {" this.log("\n Fixes Applied:"); this.fixes.forEach((fix, index) => {` this.log(` ${index + 1}. ${fix}`); }); } if (this.errors.length > 0) {" this.log("\n Errors:"); this.errors.forEach((error, index) => {` this.log(` ${index + 1}. ${error}`); }); }" this.log("\n ClassName syntax fixing completed!"); }}/ Run the fixerconst fixer = new ClassNameSyntaxFixer();fixer.run().catch(console.error);""`"`



>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======







>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const glob = require('glob')
<<<<<<< HEAD
=======
  log(message, type = 'INFO')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/fix-classname-syntax.cjs
=======
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      const fixedQuoted = quoted.replace(/"([a-z]+)"

      const fixedQuoted = quoted.replace(/"([a-z]+)"
<<<<<<< HEAD
=======
      const fixedQuoted = quoted.replace(/"([a-z]+)"
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
      const fixedQuoted = quoted.replace(/"([a-z]+)"
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:scripts/fix-classname-syntax.cjs
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


      const fixedQuoted = quoted.replace(/"([a-z]+)"

=======
  log(message, type = 'INFO')`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
