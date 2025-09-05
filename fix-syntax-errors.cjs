const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxFixer {
  constructor() {
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

      // Fix common syntax errors
      content = this.fixCommonErrors(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  fixCommonErrors(content) {
    // Fix trailing commas in function parameters
    content = content.replace(/,\s*\)/g, ')');

    // Fix trailing commas in object properties
    content = content.replace(/,\s*}/g, '}');

    // Fix trailing commas in array elements
    content = content.replace(/,\s*]/g, ']');

    // Fix semicolons instead of commas in object literals
    content = content.replace(/;\s*}/g, '}');

    // Fix semicolons instead of commas in arrays
    content = content.replace(/;\s*]/g, ']');

    // Fix HTML entities in JSX
    content = content.replace(/&amp;apos;/g, "'");
    content = content.replace(/&amp;lt;/g, '<');
    content = content.replace(/&amp;gt;/g, '>');
    content = content.replace(/&amp;quot;/g, '"');

    // Fix quoted property names in object literals
    content = content.replace(/"([a-zA-Z_$][a-zA-Z0-9_$]*)"\s*:/g, '$1:');

    // Fix function parameter syntax
    content = content.replace(
      /\(\s*"([^"]+)"\s*:\s*([^,)]+)\s*\)/g,
      '($1: $2)'
    );

    // Fix return statements
    content = content.replace(/return\s+([^;]+);/g, 'return $1;');

    return content;
  }

  async findAndFixFiles(dir = '.') {
    const files = this.getTypeScriptFiles(dir);

    this.log(`🔍 Found ${files.length} TypeScript files to check`);

    for (const file of files) {
      this.fixFile(file);
    }

    this.log(`✅ Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} files had errors`);

    return {
      fixed: this.fixedFiles.length,
      errors: this.errors.length,
      files: this.fixedFiles,
    };
  }

  getTypeScriptFiles(dir) {
    const files = [];

    function walkDir(currentPath) {
      const items = fs.readdirSync(currentPath);

      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);

        if (
          stat.isDirectory() &&
          !item.startsWith('.') &&
          item !== 'node_modules'
        ) {
          walkDir(fullPath);
        } else if (
          stat.isFile() &&
          (item.endsWith('.ts') || item.endsWith('.tsx'))
        ) {
          files.push(fullPath);
        }
      }
    }

    walkDir(dir);
    return files;
  }
}

// Run the fixer
const fixer = new SyntaxFixer();
fixer
  .findAndFixFiles()
  .then(result => {
    console.log('\n📊 Summary:');
    console.log(`- Files fixed: ${result.fixed}`);
    console.log(`- Files with errors: ${result.errors}`);

    if (result.files.length > 0) {
      console.log('\n✅ Fixed files:');
      result.files.forEach(file => console.log(`  - ${file}`));
    }

    process.exit(result.errors > 0 ? 1 : 0);
  })
  .catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
