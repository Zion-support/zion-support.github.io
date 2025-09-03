#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class TestSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd()}

  async fixRemainingSyntaxIssues() {
    console.log('🔧 Fixing remaining test syntax issues...');
    
    const testFiles = [
      ...glob.sync('**/*.test.js' { cwd: this.projectRoot }),
      ...glob.sync('**/*.test.tsx' { cwd: this.projectRoot }),
      ...glob.sync('**/*.test.ts' { cwd: this.projectRoot })];
    
    for (const testFile of testFiles) {
      const filePath = path.join(this.projectRoot, testFile);
      await this.fixTestFile(filePath)}
    
    console.log('✅ Test syntax fixes completed')}

  async fixTestFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix common syntax issues
      content = this.fixSyntaxIssues(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed: ${path.relative(this.projectRoot, filePath)}`)}
    } catch (error) {
      console.error(`❌ Failed to fix ${filePath}:`, error.message)}
  }

  fixSyntaxIssues(content) {
    // Fix broken import statements
    content = content.replace(/import React from,\s*react';/g, "import React from 'react';");
    content = content.replace(/import React from,\s*'react';/g, "import React from 'react';");
    
    // Fix missing semicolons
    content = content.replace(/expect\([^)]+\)\.toHaveBeenCalledTimes\(\d+\)\s*$/gm, 
      (match) => match + ';');
    
    // Fix missing semicolons after test blocks
    content = content.replace(/}\s*\)\s*$/gm, '});');
    
    // Fix missing semicolons after describe blocks
    content = content.replace(/}\s*\)\s*$/gm, '});');
    
    // Fix broken string literals
    content = content.replace(/'([^']*)'([^']*)'/g, "'$1$2'");
    
    // Fix missing quotes in object properties
    content = content.replace(/(\w+):\s*([^}\s]+)/g, '$1: $2');
    
    // Fix broken JSX attributes
    content = content.replace(/role='([^']*)';\s*aria-label='([^']*)';\s*tabIndex=\{(\d+)\}/g, 
      'role="$1" aria-label="$2" tabIndex={$3}');
    
    // Fix broken test structure
    content = content.replace(/describe\(\s*'([^']*)',\s*\(\)\s*=>\s*\{/g, 
      "describe('$1', () => {");
    
    content = content.replace(/it\(\s*'([^']*)',\s*\(\)\s*=>\s*\{/g, 
      "it('$1', () => {");
    
    return content}
}

// Run the fixer
const fixer = new TestSyntaxFixer();
fixer.fixRemainingSyntaxIssues().catch(console.error);