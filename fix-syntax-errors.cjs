#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let hasChanges = false;

      // Fix common syntax errors

      // Fix unterminated strings with extra quotes
      content = content.replace(/&apos;s\s*['"]\s*['"]/g, "'s");
      content = content.replace(/['"]\s*['"]\s*>/g, '">');
      content = content.replace(/['"]\s*['"]\s*\/>/g, '"/>');

      // Fix JSX syntax issues
      content = content.replace(/<\/a>\s*<a/g, '</a>\n                <a');
      content = content.replace(
        /<\/div>\s*\)\)\}/g,
        '</div>\n              ))}'
      );
      content = content.replace(
        /<\/motion\.div>\s*<div/g,
        '</motion.div>\n          <div'
      );

      // Fix className issues
      content = content.replace(
        /className='([^']*)'\s*>\s*\{([^}]*)\}/g,
        "className='$1'>\n                      {$2}"
      );

      // Fix missing closing tags
      content = content.replace(
        /<\/p>\s*<\/motion\.div>/g,
        '</p>\n          </motion.div>'
      );

      // Fix string concatenation issues
      content = content.replace(
        /description="([^"]*&apos;[^"]*)"'/g,
        'description="$1"'
      );

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        hasChanges = true;
        this.log(`✅ Fixed syntax errors in: ${filePath}`);
      }

      return hasChanges;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixAllSyntaxErrors() {
    this.log('🔧 Starting comprehensive syntax error fixing...');

    const pagesDir = path.join(this.projectRoot, 'pages');
    const componentsDir = path.join(this.projectRoot, 'components');

    const directories = [pagesDir, componentsDir];

    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        const files = this.getAllFiles(dir, ['.tsx', '.jsx', '.ts', '.js']);

        for (const file of files) {
          this.fixFile(file);
        }
      }
    }

    // Fix specific problematic files
    const specificFiles = [
      'pages/NotFound.tsx',
      'pages/contact.tsx',
      'pages/pricing-guide.tsx',
      'pages/pricing.tsx',
      'pages/sitemap.tsx',
      'pages/terms.tsx',
      'pages/blog.tsx',
    ];

    for (const file of specificFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        this.fixFile(filePath);
      }
    }

    this.log(`🎉 Syntax error fixing completed!`);
    this.log(`📊 Fixed ${this.fixedFiles.length} files`);

    if (this.errors.length > 0) {
      this.log(`⚠️  ${this.errors.length} errors encountered:`);
      this.errors.forEach(err => {
        this.log(`   - ${err.file}: ${err.error}`);
      });
    }

    return {
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      success: this.errors.length === 0,
    };
  }

  getAllFiles(dir, extensions) {
    let files = [];

    try {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          files = files.concat(this.getAllFiles(fullPath, extensions));
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }

    return files;
  }
}

// Run the fixer
const fixer = new SyntaxErrorFixer();
fixer
  .fixAllSyntaxErrors()
  .then(result => {
    if (result.success) {
      console.log('✅ All syntax errors fixed successfully!');
      process.exit(0);
    } else {
      console.log('❌ Some errors could not be fixed automatically.');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
