#!/usr/bin/env node
<<<<<<< HEAD
/**
 * Syntax Fix Launcher
 * Launches syntax fixing operations
 */
=======
>>>>>>> main

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxFixLauncher {
  constructor() {
<<<<<<< HEAD
    this.logsDir = path.join(__dirname, 'logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async quickFix() {
    this.log('🔧 Running quick syntax fixes...');
    
    try {
      // Fix common merge conflict patterns
      this.fixMergeConflicts();
      
      // Fix common syntax errors
      this.fixCommonSyntaxErrors();
      
      this.log('✅ Quick syntax fixes completed');
      return { success: true };
    } catch (error) {
      this.log(`❌ Quick syntax fixes failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  fixMergeConflicts() {
    this.log('🔍 Fixing merge conflicts...');
    
    const filesToFix = [
      'eslint.config.js',
      'src/pages/Home.tsx',
      'src/pages/Contact.tsx',
      'src/pages/Services.tsx',
      'app/page.tsx',
      'app/about/page.tsx',
      'app/contact/page.tsx'
    ];

    filesToFix.forEach(file => {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          
          // Remove merge conflict markers
          content = content.replace(/<<<<<<< .*\n/g, '');
          content = content.replace(/======= .*\n/g, '');
          content = content.replace(/>>>>>>> .*\n/g, '');
          
          // Clean up extra whitespace
          content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
          
          fs.writeFileSync(filePath, content);
          this.log(`✅ Fixed merge conflicts in ${file}`);
        } catch (error) {
          this.log(`⚠️ Could not fix ${file}: ${error.message}`);
        }
      }
    });
  }

  fixCommonSyntaxErrors() {
    this.log('🔧 Fixing common syntax errors...');
    
    // Fix semicolon issues
    const jsFiles = this.findFiles('**/*.{js,jsx,ts,tsx}', ['node_modules', 'dist', 'build']);
    
    jsFiles.forEach(file => {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix missing semicolons
        if (content.includes('const ') && !content.includes(';')) {
          content = content.replace(/(const [^=]+ = [^;]+)\n/g, '$1;\n');
          modified = true;
        }
        
        // Fix duplicate imports
        content = this.removeDuplicateImports(content);
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`✅ Fixed syntax errors in ${file}`);
        }
      } catch (error) {
        // Skip files that can't be processed
      }
    });
  }

  removeDuplicateImports(content) {
    const lines = content.split('\n');
    const importLines = [];
    const nonImportLines = [];
    
    lines.forEach(line => {
      if (line.trim().startsWith('import ') || line.trim().startsWith('const ') && line.includes('require(')) {
        if (!importLines.includes(line.trim())) {
          importLines.push(line.trim());
        }
      } else {
        nonImportLines.push(line);
      }
    });
    
    return [...importLines, ...nonImportLines].join('\n');
  }

  findFiles(pattern, excludeDirs = []) {
    const files = [];
    const searchDir = process.cwd();
    
    function walkDir(dir) {
      try {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          try {
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
              if (!excludeDirs.some(exclude => fullPath.includes(exclude))) {
                walkDir(fullPath);
              }
            } else if (stat.isFile()) {
              if (item.match(/\.(js|jsx|ts|tsx)$/)) {
                files.push(fullPath);
              }
            }
          } catch (error) {
            // Skip files that can't be accessed
          }
        });
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    walkDir(searchDir);
    return files;
  }
}

// Command line interface
const args = process.argv.slice(2);
const launcher = new SyntaxFixLauncher();

if (args.includes('quick-fix')) {
  launcher.quickFix().then(result => {
    process.exit(result.success ? 0 : 1);
  });
} else {
  console.log('Usage: node syntax-fix-launcher.js quick-fix');
  process.exit(1);
}
=======
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixSyntaxErrors(content, filePath) {
    let fixed = content;
    const originalContent = content;

    // Fix duplicate export statements
    fixed = fixed.replace(/export default function (\w+)\s*export \{\1\}()/g, 'export default function $1()');
    
    // Fix unterminated string constants
    fixed = fixed.replace(/import[^;]*''';/g, (match) => {
      return match.replace(/''';/g, ';');
    });
    
    // Fix malformed imports
    fixed = fixed.replace(/import[^;]*''';/g, (match) => {
      return match.replace(/''';/g, ';');
    });
    
    // Fix duplicate semicolons
    fixed = fixed.replace(/;;+/g, ';');
    
    // Fix malformed function declarations
    fixed = fixed.replace(/export default function (\w+)\s*export \{\1\}()/g, 'export default function $1()');
    
    // Fix missing parentheses in function declarations
    fixed = fixed.replace(/export default function (\w+)\s*export \{\1\}()/g, 'export default function $1()');
    
    // Fix React import issues
    fixed = fixed.replace(/import React, \{useState\} from 'react';''';/g, "import React, {useState} from 'react';");
    
    // Fix component import issues
    fixed = fixed.replace(/import \{Button\} from '@\/components\/ui\/button';''';/g, "import {Button} from '@/components/ui/button';");
    
    // Fix Card import issues
    fixed = fixed.replace(/import \{Card, CardContent, CardDescription, CardHeader, CardTitle\} from '@\/components\/ui\/card';''';/g, 
      "import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';");
    
    // Fix Input import issues
    fixed = fixed.replace(/import \{Input\} from '@\/components\/ui\/input';''';/g, "import {Input} from '@/components/ui/input';");

    return fixed;
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = this.fixSyntaxErrors(content, filePath);
      
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
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

  async findAndFixFiles() {
    this.log('🔍 Finding files with syntax errors...');
    
    const srcDir = path.join(this.projectRoot, 'src');
    const filesToFix = [];
    
    // Find all JS/JSX/TS/TSX files
    const findFiles = (dir) => {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
          findFiles(fullPath);
        } else if (item.isFile() && /\.(js|jsx|ts|tsx)$/.test(item.name)) {
          filesToFix.push(fullPath);
        }
      }
    };
    
    findFiles(srcDir);
    
    this.log(`📁 Found ${filesToFix.length} files to check`);
    
    // Fix each file
    for (const file of filesToFix) {
      await this.fixFile(file);
    }
    
    return filesToFix.length;
  }

  async run() {
    this.log('🚀 Starting Syntax Fix Launcher');
    
    const totalFiles = await this.findAndFixFiles();
    
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'syntax-fix-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log(`🎉 Syntax Fix Complete!`);
    this.log(`📊 Fixed ${this.fixedFiles.length}/${totalFiles} files`);
    this.log(`❌ ${this.errors.length} errors encountered`);
  }
}

// Run the launcher
const launcher = new SyntaxFixLauncher();
launcher.run().catch(console.error);
>>>>>>> main
