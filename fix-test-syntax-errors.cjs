#!/usr/bin/env node

const fs = require('fs');
const path = require('path');


/**
 * Fix syntax errors in test files
 */
class TestSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixImportSyntax(content) {
    // Fix common import syntax errors
    return content
      .replace(/import\s+([^,]+),\s*;\s*$/gm, 'import $1;')
      .replace(/import\s+([^,]+),\s*$/gm, 'import $1;')
      .replace(/from\s+['"]([^'"]+)['"],\s*;$/gm, "from '$1';")
      .replace(/from\s+['"]([^'"]+)['"],\s*$/gm, "from '$1';")
      .replace(/import\s+([^,]+),\s*;\s*$/gm, 'import $1;');
  }

  fixTestSyntax(content) {
    // Fix test syntax errors
    return content
      .replace(/test\s*\(\s*['"]([^'"]+)['"]\s*,\s*async\s*\(\s*\{\s*page\s*\}\s*\)\s*=>\s*\{\s*await:\s*/gm, "test('$1', async ({ page }) => {\n  await ")
      .replace(/await:\s*/gm, 'await ')
      .replace(/await\s+page\.goto\('\/\)'/gm, "await page.goto('/')")
      .replace(/await\s+page\.goto\('\/contact\)'/gm, "await page.goto('/contact')")
      .replace(/await\s+expect\(page\)\.toHaveTitle\(\/Zion Tech Group\/\)/gm, "await expect(page).toHaveTitle(/Zion Tech Group/)")
      .replace(/await\s+expect\(page\.locator\('h1\)\)\.toBeVisible\(\)/gm, "await expect(page.locator('h1')).toBeVisible()")
      .replace(/await\s+page\.click\('text=Services\)'/gm, "await page.click('text=Services')")
      .replace(/await\s+expect\(page\)\.toHaveURL\(\/\.\*services\/\)/gm, "await expect(page).toHaveURL(/.*services/)")
      .replace(/await\s+page\.fill\('input\[name="name\]Test User\)'/gm, "await page.fill('input[name=\"name\"]', 'Test User')")
      .replace(/await\s+page\.fill\('input\[name="email"\]test@example\.com\)'/gm, "await page.fill('input[name=\"email\"]', 'test@example.com')")
      .replace(/await\s+page\.fill\('textarea\[name=message"\]Test message\)'/gm, "await page.fill('textarea[name=\"message\"]', 'Test message')")
      .replace(/await\s+page\.click\('button\[type="submit\]\)'/gm, "await page.click('button[type=\"submit\"]')")
      .replace(/await\s+expect\(page\.locator\('\.success-message\)\)\.toBeVisible\(\)/gm, "await expect(page.locator('.success-message')).toBeVisible()");
  }

  fixFile(filePath) {
    try {
      this.log(`Fixing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix import syntax
      content = this.fixImportSyntax(content);
      
      // Fix test syntax
      content = this.fixTestSyntax(content);
      
      // Remove duplicate lines and clean up
      const lines = content.split('\n');
      const uniqueLines = [...new Set(lines)];
      content = uniqueLines.join('\n');
      
      // Clean up extra commas and semicolons
      content = content
        .replace(/,\s*;\s*$/gm, ';')
        .replace(/,\s*$/gm, ';')
        .replace(/;\s*;\s*$/gm, ';')
        .replace(/\s+$/gm, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`, 'SUCCESS');
        return true;
      } else {
        this.log(`No changes needed: ${filePath}`, 'WARNING');
        return false;
      }
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  findTestFiles() {
    const testFiles = [];
    const directories = [
      '__tests__',
      'e2e',
      'src_backup',
      'recovered-branches'
    ];

    directories.forEach(dir => {
      if (fs.existsSync(dir)) {
        this.findFilesRecursively(dir, testFiles);
      }
    });

    return testFiles;
  }

  findFilesRecursively(dir, files) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findFilesRecursively(fullPath, files);
      } else if (item.match(/\.(test|spec)\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    });
  }

  async run() {
    this.log('🔧 Starting Test Syntax Fixer');
    this.log('='.repeat(50));

    const testFiles = this.findTestFiles();
    this.log(`Found ${testFiles.length} test files`);

    let fixedCount = 0;
    for (const file of testFiles) {
      if (this.fixFile(file)) {
        fixedCount++;
      }
    }

    this.log('\n📊 Fix Summary');
    this.log('='.repeat(50));
    this.log(`Total files processed: ${testFiles.length}`);
    this.log(`Files fixed: ${fixedCount}`);
    this.log(`Errors: ${this.errors.length}`);

    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Fixed files:');
      this.fixedFiles.forEach(file => this.log(`  - ${file}`));
    }

    if (this.errors.length > 0) {
      this.log('\n❌ Errors:');
      this.errors.forEach(({ file, error }) => this.log(`  - ${file}: ${error}`));
    }

    this.log('\n🎉 Test syntax fixing completed!');
  }
}

// Run the fixer
const fixer = new TestSyntaxFixer();
fixer.run().catch(console.error);

module.exports = TestSyntaxFixer;

