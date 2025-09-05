#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixes = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }

  fixSyntaxErrors(content) {
    let fixed = content;

    // Fix unterminated className strings
    fixed = fixed.replace(/className="([^"]*?)\n\s*>/g, (match, className) => {
      return `className="${className.trim()}"`;
    });

    // Fix unterminated className strings with line breaks
    fixed = fixed.replace(/className="([^"]*?)\n\s*([^"]*?)>/g, (match, className1, className2) => {
      return `className="${className1.trim()} ${className2.trim()}"`;
    });

    // Fix motion props syntax errors
    fixed = fixed.replace(/whileInView={{ "opacity": 1, "y": 0 }}/g, 'whileInView={{ opacity: 1, y: 0 }}');
    fixed = fixed.replace(/whileInView={{ opacity": 1, "y": 0 }}/g, 'whileInView={{ opacity: 1, y: 0 }}');
    fixed = fixed.replace(/whileInView={{ "opacity": 1, "y": 0 }}/g, 'whileInView={{ opacity: 1, y: 0 }}');

    // Fix initial prop syntax
    fixed = fixed.replace(/initial={{ opacity: 0, y:30 }}/g, 'initial={{ opacity: 0, y: 30 }}');
    fixed = fixed.replace(/initial={{ "opacity": 0, "y": 30 }}/g, 'initial={{ opacity: 0, y: 30 }}');

    // Fix transition prop syntax
    fixed = fixed.replace(/transition={{ "duration": 0\.8, "delay": index \* 0\.1 }}/g, 'transition={{ duration: 0.8, delay: index * 0.1 }}');
    fixed = fixed.replace(/transition={{ "duration": 0\.8 }}/g, 'transition={{ duration: 0.8 }}');

    // Fix viewport prop syntax
    fixed = fixed.replace(/viewport={{ "once": true }}/g, 'viewport={{ once: true }}');

    // Fix whileHover prop syntax
    fixed = fixed.replace(/whileHover={{ "y": -5 }}/g, 'whileHover={{ y: -5 }}');

    // Fix any remaining quote issues in className
    fixed = fixed.replace(/"([a-z]+)":/g, '$1:');

    return fixed;
  }

  async processFile(filePath) {
    try {
      this.log(`Processing ${filePath}...`);
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = this.fixSyntaxErrors(content);
      
      if (content !== fixed) {
        fs.writeFileSync(filePath, fixed);
        this.fixes.push(`Fixed syntax in ${path.relative(this.projectRoot, filePath)}`);
        this.log(`✅ Fixed syntax in ${filePath}`);
      }
    } catch (error) {
      this.errors.push(`Error processing ${filePath}: ${error.message}`);
      this.log(`❌ Error processing ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🔧 Starting comprehensive syntax fixing...');
    
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

    this.log('\n📊 Comprehensive Syntax Fixing Report');
    this.log('==');
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

    this.log('\n🎉 Comprehensive syntax fixing completed!');
  }
}

// Run the fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);