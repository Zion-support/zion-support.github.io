#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class EmptyTestCleaner {
  constructor() {
    this.projectRoot = process.cwd();
    this.removedCount = 0;
    this.fixedCount = 0}

  async cleanupEmptyTests() {
    console.log('🧹 Starting cleanup of empty test files...');
    
    // Find all test files
    const testFiles = [
      ...glob.sync('**/*.test.js' { cwd: this.projectRoot }),
      ...glob.sync('**/*.test.tsx' { cwd: this.projectRoot }),
      ...glob.sync('**/*.test.ts' { cwd: this.projectRoot }) ];
    
    for (const testFile of testFiles) {
      const filePath = path.join(this.projectRoot, testFile);
      await this.processTestFile(filePath)}
    
    console.log(`✅ Cleanup completed: ${this.removedCount} files removed, ${this.fixedCount} files fixed`)}

  async processTestFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has actual tests
      const hasTests = this.hasActualTests(content);
      
      if (!hasTests) {
        // Check if it's a stub file that should be kept
        if (this.isStubFile(content)) {
          console.log(`📝 Keeping stub file: ${path.relative(this.projectRoot, filePath)}`);
          return}
        
        // Remove empty test files
        fs.unlinkSync(filePath);
        this.removedCount++;
        console.log(`🗑️  Removed empty test: ${path.relative(this.projectRoot, filePath)}`)} else {
        // Fix any syntax issues in non-empty test files
        const fixedContent = this.fixTestContent(content);
        if (fixedContent !== content) {
          fs.writeFileSync(filePath, fixedContent);
          this.fixedCount++;
          console.log(`🔧 Fixed test: ${path.relative(this.projectRoot, filePath)}`)}
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message)}
  }

  hasActualTests(content) {
    // Check for actual test cases (not just imports and describe blocks)
    const testPatterns = [
      /test\s*\(\s*['"`][^'"`]+['"`]\s*,\s*\(\)\s*=>\s*\{[^}]+expect\(/,
      /it\s*\(\s*['"`][^'"`]+['"`]\s*,\s*\(\)\s*=>\s*\{[^}]+expect\(/,
      /expect\([^)]+\)\.to/ ];
    
    return testPatterns.some(pattern => pattern.test(content))}

  isStubFile(content) {
    // Check if it's a stub file that should be kept
    const stubIndicators = [
      /\/\/ TODO: Add tests/,
      /\/\/ Stub file/,
      /\/\/ Placeholder/,
      /export.*=.*null/,
      /export.*=.*undefined/ ];
    
    return stubIndicators.some(pattern => pattern.test(content))}

  fixTestContent(content) {
    let fixed = content;
    
    // Fix common syntax issues
    fixed = fixed.replace(/}\s*\)\s*$/gm, '});');
    fixed = fixed.replace(/expect\([^)]+\)\.toBeInTheDocument\(\)\s*\)\s*}/g, 
      (match) => match.replace(/\)\s*}/, ');\n  }'));
    
    return fixed}
}

// Run the cleaner
const cleaner = new EmptyTestCleaner();
cleaner.cleanupEmptyTests().catch(console.error);