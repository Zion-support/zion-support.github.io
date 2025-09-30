#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class TestSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.testDir = path.join(this.projectRoot, '__tests__')}

  async fixAllTestFiles() {
    console.log('🔧 Starting test syntax fixes...');
    
    const testFiles = glob.sync('**/*.test.js' { cwd: this.testDir });
    
    for (const testFile of testFiles) {
      const filePath = path.join(this.testDir, testFile);
      await this.fixTestFile(filePath)}
    
    console.log('✅ Test syntax fixes completed')}

  async fixTestFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix common syntax issues
      content = this.fixSyntaxIssues(content);
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${path.relative(this.projectRoot, filePath)}`)} catch (error) {
      console.error(`❌ Failed to fix ${filePath}:`, error.message)}
  }

  fixSyntaxIssues(content) {
    // Fix missing semicolons after expect statements
    content = content.replace(/expect\([^)]+\)\.toBeInTheDocument\(\)\s*\)\s*}/g, 
      (match) => match.replace(/\)\s*}/, ');\n  }'));
    
    // Fix missing semicolons after test blocks
    content = content.replace(/}\s*\)\s*}/g, '});\n}');
    
    // Fix missing semicolons after describe blocks
    content = content.replace(/}\s*\)\s*$/g, '});');
    
    // Fix missing semicolons after test functions
    content = content.replace(/}\s*\)\s*$/gm, '});');
    
    // Fix missing semicolons after render statements
    content = content.replace(/render\(<[^>]+>\/>\);\s*$/gm, 'render(<$1 />);');
    
    // Fix missing semicolons after comments
    content = content.replace(/\/\/ [^}]+}\s*$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match.replace(/}\s*$/, ';\n  }')}
      return match});
    
    return content}
}

// Run the fixer
const fixer = new TestSyntaxFixer();
fixer.fixAllTestFiles().catch(console.error);