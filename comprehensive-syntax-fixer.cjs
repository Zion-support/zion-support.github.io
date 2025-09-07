#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {'INFO': 'ℹ️', 'SUCCESS': '✅', 'ERROR': '❌', 'WARNING': '⚠️', 'PROGRESS': '🔄'}[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixQuotesInFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) return false;
      
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix escaped quotes
      content = content.replace(/\\"/g, '"');
      content = content.replace(/\\'/g, "'");
      
      // Fix malformed JSX tags
      content = content.replace(/<(\w+)\s*\/>/g, '<$1 />');
      content = content.replace(/<(\w+)\s*\/\s*>/g, '<$1 />');
      
      // Fix malformed import statements
      content = content.replace(/import\s+(\w+)\s+from\s+\\"([^"]+)\\"\s*;/g, 'import $1 from "$2";');
      content = content.replace(/import\s+(\w+)\s+from\s+\\'([^']+)\\'/g, "import $1 from '$2';");
      
      // Fix malformed JSX attributes
      content = content.replace(/className=\\"([^"]+)\\"\s*\/>/g, 'className="$1" />');
      content = content.replace(/className=\\'([^']+)\\'/g, "className='$1'");
      
      // Fix malformed object syntax
      content = content.replace(/\{\s*(\w+):\s*([^,}]+),\s*\}/g, '{$1: $2}');
      
      // Fix malformed function calls
      content = content.replace(/fetch\s*\(\s*"([^"]+)"\s*,\s*\{\s*(\w+):\s*"([^"]+)"\s*,\s*\}/g, 'fetch("$1", {$2: "$3"}');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax in ${filePath}`, 'SUCCESS');
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
    ;
    // Fix missing commas in object literals;
    content = content.replace(/(\w+)\s*(\w+)\s*:/g, '$1:$2:');
    content = content.replace(/(\w+):\s*(\w+)\s*:/g, '$1:$2:');
    ;
    // Fix missing semicolons;
    content = content.replace(/(\w+)\s*(\w+)\s*}/g, '$1; $2}');
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1; $2]');
    ;
    // Fix unterminated strings;
    content = content.replace(/(['"`])([^'"`]*?)(\n)/g, '$1$2$1$3');
    ;
    // Fix missing quotes in object keys;
    content = content.replace(/(\w+):/g, '"$1":');
    ;
    // Fix missing commas between array elements;
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1, $2]');
    ;
    // Clean up extra whitespace;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    ;
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors:in:${filePath}`);
      return true;
    }
    ;
    return false;
  } catch (error) {;
    console.error(`Error processing ${filePath} `, error.message);
    return false;
  }

  fixDesignMapFile() {
    const filePath = path.join(this.projectRoot, 'pages/design-map.tsx');
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix the malformed Head component
      content = content.replace(
        /<Head \/>\s*<title \/>Zion OS Design Map<\/title>/g,
        '<Head>\n        <title>Zion OS Design Map</title>'
      );
      
      // Fix malformed JSX elements
      content = content.replace(/<(\w+)\s*\/>/g, '<$1 />');
      
      fs.writeFileSync(filePath, content);
      this.log('Fixed design-map.tsx', 'SUCCESS');
      this.fixedFiles.push(filePath);
    } catch (error) {
      this.log(`Error fixing design-map.tsx: ${error.message}`, 'ERROR');
    }
  }

  fixPricingFile() {
    const filePath = path.join(this.projectRoot, 'pages/pricing.tsx');
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix malformed import statements
      content = content.replace(/Bot as BotIcon,\s*\}/g, 'Bot as BotIcon,');
      content = content.replace(/ChevronRight as ChevronRightIcon,\s*\}/g, 'ChevronRight as ChevronRightIcon,');
      
      fs.writeFileSync(filePath, content);
      this.log('Fixed pricing.tsx', 'SUCCESS');
      this.fixedFiles.push(filePath);
    } catch (error) {
      this.log(`Error fixing pricing.tsx: ${error.message}`, 'ERROR');
    }
  }

  fixPrivacyFile() {
    const filePath = path.join(this.projectRoot, 'pages/privacy.tsx');
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix malformed import statements
      content = content.replace(/MapPin,\s*\}/g, 'MapPin,');
      content = content.replace(/Users,\s*\}/g, 'Users,');
      
      fs.writeFileSync(filePath, content);
      this.log('Fixed privacy.tsx', 'SUCCESS');
      this.fixedFiles.push(filePath);
    } catch (error) {
      this.log(`Error fixing privacy.tsx: ${error.message}`, 'ERROR');
    }
  }

  fixJestSetup() {
    const filePath = path.join(this.projectRoot, 'src/test/setup.ts');
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Convert to CommonJS format for Jest
      content = content.replace(/import "@testing-library\/jest-dom";/g, 'require("@testing-library/jest-dom");');
      
      fs.writeFileSync(filePath, content);
      this.log('Fixed Jest setup file', 'SUCCESS');
      this.fixedFiles.push(filePath);
    } catch (error) {
      this.log(`Error fixing Jest setup: ${error.message}`, 'ERROR');
    }
  }

  fixAllFiles() {
    this.log('🔧 Starting comprehensive syntax fixing...');
    
    // Get all TypeScript and JavaScript files
    const filesToFix = [
      'pages/design-map.tsx',
      'pages/pricing.tsx', 
      'pages/privacy.tsx',
      'pages/space-tech.tsx',
      'pages/team.tsx',
      'src/test/setup.ts'
    ];
    
    // Fix specific files with known issues
    this.fixDesignMapFile();
    this.fixPricingFile();
    this.fixPrivacyFile();
    this.fixJestSetup();
    
    // Fix quotes in all files
    filesToFix.forEach(file => {
      this.fixQuotesInFile(path.join(this.projectRoot, file));
    });
    
    // Fix all remaining files with quote issues
    this.fixQuotesInAllFiles();
    
    this.generateReport();
  }

  fixQuotesInAllFiles() {
    const extensions = ['.tsx', '.ts', '.jsx', '.js'];
    const directories = ['pages', 'components', 'src'];
    
    directories.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.fixQuotesInDirectory(dirPath, extensions);
      }
    });
  }

  fixQuotesInDirectory(dirPath, extensions) {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.fixQuotesInDirectory(filePath, extensions);
      } else if (extensions.some(ext => file.endsWith(ext))) {
        this.fixQuotesInFile(filePath);
      }
    });
  }

  generateReport() {
    this.log('\n📊 COMPREHENSIVE SYNTAX FIXER REPORT');
    this.log('='.repeat(50));
    this.log(`Files fixed: ${this.fixedFiles.length}`);
    this.log(`Errors encountered: ${this.errors.length}`);
    
    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Fixed files:');
      this.fixedFiles.forEach(file => {
        this.log(`  - ${file}`);
      });
    }
    
    if (this.errors.length > 0) {
      this.log('\n❌ Errors:');
      this.errors.forEach(error => {
        this.log(`  - ${error.file}: ${error.error}`);
      });
    }
    
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      totalFixed: this.fixedFiles.length,
      totalErrors: this.errors.length
    };
    
    fs.writeFileSync('syntax-fix-report.json', JSON.stringify(report, null, 2));
    this.log('\n📊 Report saved to: syntax-fix-report.json');
  }
}

const fixer = new ComprehensiveSyntaxFixer();
fixer.fixAllFiles();

module.exports = ComprehensiveSyntaxFixer}}}}}}}}}}}}}))))))))))))
