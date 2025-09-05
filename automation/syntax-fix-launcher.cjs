#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxFixLauncher {
  constructor() {
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