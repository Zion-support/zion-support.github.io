#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = 0;
    this.errors = [];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async findProblematicFiles() {
    this.log('🔍 Finding files with syntax issues...');
    
    const problematicFiles = [];
    const extensions = ['.tsx', '.ts', '.jsx', '.js'];
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath);
        } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (this.hasSyntaxIssues(content)) {
              problematicFiles.push(filePath);
            }
          } catch (error) {
            // File might be binary or have encoding issues
          }
        }
      }
    };
    
    walkDir(this.projectRoot);
    return problematicFiles;
  }

  hasSyntaxIssues(content) {
    // Check for common syntax issues
    const issues = [
      /import:\s*[^;]+;/g,  // Malformed imports
      /const:\s*[^=]+=/g,   // Malformed const declarations
      /interface:\s*[^{]+{/g, // Malformed interface declarations
      /from\s+'[^']*';'/g,  // Double quotes in imports
      /"[^"]*",[^"]*"/g,    // Malformed strings
      /;;+/g,               // Multiple semicolons
      /,,+/g,               // Multiple commas
      /:\s*[^=,}]+:/g,      // Malformed type annotations
    ];
    
    return issues.some(issue => issue.test(content));
  }

  fixSyntax(content) {
    let fixed = content;
    
    // Fix malformed imports
    fixed = fixed.replace(/import:\s*([^;]+);/g, 'import $1;');
    
    // Fix malformed const declarations
    fixed = fixed.replace(/const:\s*([^:]+):\s*([^=]+)\s*=\s*\(\)\s*=>\s*,{/g, 'const $1: $2 = () => {');
    fixed = fixed.replace(/const:\s*([^=]+)=/g, 'const $1 =');
    
    // Fix malformed interface declarations
    fixed = fixed.replace(/interface:\s*([^{]+){/g, 'interface $1 {');
    
    // Fix malformed imports with double quotes
    fixed = fixed.replace(/from\s+'([^']*)';'/g, "from '$1';");
    
    // Fix malformed strings
    fixed = fixed.replace(/"([^"]*),([^"]*)",/g, '"$1$2",');
    fixed = fixed.replace(/"([^"]*);([^"]*)";/g, '"$1$2";');
    
    // Fix multiple semicolons and commas
    fixed = fixed.replace(/;;+/g, ';');
    fixed = fixed.replace(/,,+/g, ',');
    
    // Fix malformed type annotations
    fixed = fixed.replace(/:\s*([^=,}]+):/g, ': $1');
    
    // Fix malformed function parameters
    fixed = fixed.replace(/\(\)\s*=>\s*,{/g, '() => {');
    
    // Fix malformed array destructuring
    fixed = fixed.replace(/const:\s*\[([^\]]+)\]/g, 'const [$1]');
    
    // Fix malformed object properties
    fixed = fixed.replace(/(\w+):\s*([^,}]+),/g, '$1: $2,');
    
    // Fix malformed quotes in strings
    fixed = fixed.replace(/"([^"]*)"([^"]*)"([^"]*)"/g, '"$1$2$3"');
    
    // Fix malformed React component declarations
    fixed = fixed.replace(/const\s+(\w+):\s*(\w+):\s*=\s*\(\)\s*=>\s*,{/g, 'const $1: $2 = () => {');
    
    // Fix malformed NextPage types
    fixed = fixed.replace(/NextPage:\s*=/g, 'NextPage =');
    
    // Fix malformed useState declarations
    fixed = fixed.replace(/const:\s*\[([^\]]+)\]/g, 'const [$1]');
    
    // Fix malformed string concatenation
    fixed = fixed.replace(/"([^"]*):([^"]*)"/g, '"$1$2"');
    
    // Fix malformed object keys
    fixed = fixed.replace(/(\w+):\s*([^,}]+);/g, '$1: $2,');
    
    // Fix malformed array elements
    fixed = fixed.replace(/\[([^\]]+);/g, '[$1,');
    
    // Fix malformed function calls
    fixed = fixed.replace(/\(([^)]+);/g, '($1,');
    
    // Fix malformed template literals
    fixed = fixed.replace(/`([^`]*):([^`]*)`/g, '`$1$2`');
    
    // Fix malformed JSX attributes
    fixed = fixed.replace(/className:\s*"([^"]*)"/g, 'className="$1"');
    
    // Fix malformed export statements
    fixed = fixed.replace(/export:\s*([^;]+);/g, 'export $1;');
    
    // Fix malformed default exports
    fixed = fixed.replace(/export:\s*default\s*([^;]+);/g, 'export default $1;');
    
    // Clean up any remaining malformed syntax
    fixed = fixed.replace(/;\s*;/g, ';');
    fixed = fixed.replace(/,\s*,/g, ',');
    fixed = fixed.replace(/\s+/g, ' ');
    
    return fixed;
  }

  async fixFile(filePath) {
    this.log(`🔧 Fixing syntax in: ${filePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Create backup
      const backupPath = `${filePath}.backup.${Date.now()}`;
      fs.writeFileSync(backupPath, content);
      
      // Fix syntax
      const fixedContent = this.fixSyntax(content);
      
      // Only write if content changed
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        this.log(`✅ Fixed syntax in: ${filePath}`);
        return { fixed: true, backup: backupPath };
      } else {
        // Remove backup if no changes
        fs.unlinkSync(backupPath);
        return { fixed: false, reason: 'No changes needed' };
      }
      
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      this.errors.push({ file: filePath, error: error.message });
      return { fixed: false, error: error.message };
    }
  }

  async fixAllFiles() {
    this.log('🚀 Starting comprehensive syntax fixing...');
    
    const problematicFiles = await this.findProblematicFiles();
    
    if (problematicFiles.length === 0) {
      this.log('✅ No files with syntax issues found');
      return { fixed: 0, errors: [] };
    }

    this.log(`📋 Found ${problematicFiles.length} files with syntax issues`);

    for (const file of problematicFiles) {
      const result = await this.fixFile(file);
      if (result.fixed) {
        this.fixedFiles++;
      }
    }

    this.log(`🎉 Fixed syntax in ${this.fixedFiles} files`);
    
    if (this.errors.length > 0) {
      this.log(`⚠️  ${this.errors.length} errors occurred:`);
      this.errors.forEach(error => {
        this.log(`   - ${error.file}: ${error.error}`);
      });
    }

    return {
      fixed: this.fixedFiles,
      errors: this.errors,
      totalFiles: problematicFiles.length
    };
  }

  async createCleanESLintConfig() {
    this.log('🔧 Creating clean ESLint configuration...');
    
    const eslintConfig = `module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    '@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn'
  },
  ignorePatterns: ['node_modules/', '.next/', 'out/']
};`;

    try {
      fs.writeFileSync('.eslintrc.js', eslintConfig);
      this.log('✅ Created clean ESLint configuration');
    } catch (error) {
      this.log(`❌ Error creating ESLint config: ${error.message}`);
    }
  }

  async run() {
    try {
      // Fix syntax issues
      const fixResult = await this.fixAllFiles();
      
      // Create clean ESLint config
      await this.createCleanESLintConfig();
      
      this.log('🎉 Comprehensive syntax fixing completed successfully');
      return fixResult;
      
    } catch (error) {
      this.log(`💥 Syntax fixing failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the syntax fixer if this file is executed directly
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run()
    .then((result) => {
      console.log('✅ Syntax fixing completed');
      console.log(`📊 Fixed ${result.fixed} files`);
      if (result.errors.length > 0) {
        console.log(`⚠️  ${result.errors.length} errors occurred`);
      }
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Syntax fixing failed:', error.message);
      process.exit(1);
    });
}

module.exports = ComprehensiveSyntaxFixer;