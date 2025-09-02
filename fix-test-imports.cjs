#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class TestImportFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.testDir = path.join(this.projectRoot, '__tests__');
  }

  async fixTestImports() {
    console.log('🔧 Fixing test import statements...');
    
    if (!fs.existsSync(this.testDir)) {
      console.log('No __tests__ directory found');
      return;
    }

    const testFiles = glob.sync(path.join(this.testDir, '**/*.test.js'));
    let fixedCount = 0;

    for (const file of testFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fixedContent = this.fixImportStatements(content);
        
        if (content !== fixedContent) {
          fs.writeFileSync(file, fixedContent);
          console.log(`✅ Fixed: ${path.relative(this.projectRoot, file)}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`❌ Error fixing ${file}:`, error.message);
      }
    }

    console.log(`🎉 Fixed ${fixedCount} test files`);
  }

  fixImportStatements(content) {
    // Fix invalid import statements like "import Component.test from"
    let fixed = content.replace(
      /import\s+([A-Za-z][A-Za-z0-9]*\.[A-Za-z][A-Za-z0-9]*)\s+from\s+['"]([^'"]+)['"];?/g,
      (match, componentName, importPath) => {
        // Convert "Component.test" to "ComponentTest"
        const validName = componentName.replace(/\./g, '');
        return `import ${validName} from "${importPath}";`;
      }
    );

    // Fix describe statements with invalid names
    fixed = fixed.replace(
      /describe\(['"]([A-Za-z][A-Za-z0-9]*\.[A-Za-z][A-Za-z0-9]*)['"]/g,
      (match, componentName) => {
        const validName = componentName.replace(/\./g, '');
        return `describe('${validName}'`;
      }
    );

    // Fix component references in render calls
    fixed = fixed.replace(
      /render\(<([A-Za-z][A-Za-z0-9]*\.[A-Za-z][A-Za-z0-9]*)\s*\/>/g,
      (match, componentName) => {
        const validName = componentName.replace(/\./g, '');
        return `render(<${validName} />`;
      }
    );

    // Fix test descriptions with invalid names
    fixed = fixed.replace(
      /test\(['"]([A-Za-z][A-Za-z0-9]*\.[A-Za-z][A-Za-z0-9]*[^'"]*)['"]/g,
      (match, testName) => {
        const validName = testName.replace(/\./g, '');
        return `test('${validName}'`;
      }
    );

    // Fix syntax errors in describe statements
    fixed = fixed.replace(/describe\(,\s*['"]([^'"]+)['"]/g, 'describe(\'$1\'');

    return fixed;
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new TestImportFixer();
  fixer.fixTestImports().catch(console.error);
}

module.exports = TestImportFixer;