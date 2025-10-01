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
    this.log(`Fixes Applied: ${this.fixes.length}`);
    this.log(`Errors Found: ${this.errors.length}`);
    if (this.fixes.length > 0) {
      this.log('\n✅ Fixes Applied:');
      this.fixes.forEach((fix, index) => {
        this.log(`  ${index + 1}. ${fix}`);
      });
    }
    if (this.errors.length > 0) {
      this.log('\n❌ Errors:');
      this.errors.forEach((error, index) => {
        this.log(`  ${index + 1}. ${error}`);
      });
    }
    this.log('\n🎉 ClassName syntax fixing completed!');
  }
}
// Run the fixer
const fixer = new ClassNameSyntaxFixer();
fixer.run().catch(console.error);
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const glob = require('glob')
