#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  fixSyntaxErrors(filePath) {
    try {
      if (!fs.existsSync(filePath)) return false;
      
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix common syntax errors
      content = content.replace(/^#!\/usr\/bin\/env node;/, '#!/usr/bin/env node');
      content = content.replace(/class\s+(\w+)\s*{;/, 'class $1 {');
      content = content.replace(/constructor\(\)\s*{;/, 'constructor() {');
      content = content.replace(/(\w+)\s*\([^)]*\)\s*{;/, '$1() {');
      content = content.replace(/(\w+):\s*([^,}]+),/, '$1: $2,');
      content = content.replace(/}\s*;/, '}');
      content = content.replace(/(\w+)\(\);,/, '$1();');
      content = content.replace(/,;/, ',');
      content = content.replace(/const\s+(\w+)\s*=\s*require\("([^"]+)"\)(?!;)/g, 'const $1 = require("$2");');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        console.log(`Fixed: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.errors.push(`Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  findScripts() {
    const scripts = [];
    const dirs = ['.', 'scripts', 'automation'];
    
    dirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
          if (file.endsWith('.cjs') || file.endsWith('.js')) {
            scripts.push(path.join(dirPath, file));
          }
        });
      }
    });
    return scripts;
  }

  async run() {
    console.log('Starting automation fixer...');
    
    // Fix syntax errors
    const scripts = this.findScripts();
    let fixedCount = 0;
    scripts.forEach(script => {
      if (this.fixSyntaxErrors(script)) fixedCount++;
    });
    
    console.log(`Fixed ${fixedCount} files`);
    
    // Run tests
    try {
      console.log('Running tests...');
      execSync('npm run lint', { stdio: 'inherit' });
      execSync('npm run type-check', { stdio: 'inherit' });
      execSync('npm test', { stdio: 'inherit' });
    } catch (error) {
      console.log('Some tests failed:', error.message);
    }
    
    // Build
    try {
      console.log('Building application...');
      execSync('npm run build', { stdio: 'inherit' });
      console.log('Build successful!');
    } catch (error) {
      console.log('Build failed:', error.message);
    }
    
    console.log('Automation fixer completed!');
  }
}

if (require.main === module) {
  const fixer = new AutomationFixer();
  fixer.run().catch(console.error);
}

module.exports = AutomationFixer;