#!/usr/bin/env node
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
=======
import fs from 'fs;
import path from path';
import { execSync } from 'child_process;
import { fileURLToPath } from url';
>>>>>>> origin/main

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ComprehensiveSyntaxFixer {
  constructor() {
<<<<<<< HEAD
    this.projectRoot = path.join(__dirname, '..');
=======
    this.projectRoot = path.join(__dirname, '..);
>>>>>>> origin/main
    this.fixedFiles = [];
    this.errors = [];
  }

<<<<<<< HEAD
  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;

      // Fix common JSX syntax issues
      fixed = this.fixJSXSyntax(fixed);
      
      // Fix TypeScript syntax issues
      fixed = this.fixTypeScriptSyntax(fixed);
      
      // Fix array syntax issues
      fixed = this.fixArraySyntax(fixed);
      
      // Fix function definition issues
      fixed = this.fixFunctionDefinitions(fixed);

      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed);
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax in ${filePath}`, 'success');
=======
  log(message, details = null) {
    console.log(`🔧 ${message}`);
    if (details) {
      console.log(`   ${details}`);
    }
  }

  getAllFiles(dir, extensions = [.ts', '.tsx, .js', '.jsx]) {
    const files = [];
    const scanDirectory = (currentDir) => {
      if (!fs.existsSync(currentDir)) return;
      
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith(.') && item !== 'node_modules) {
          scanDirectory(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    }
    
    scanDirectory(dir);
    return files;
  }

  fixMergeConflicts(content) {
    return content
      .replace(/
      .replace(/
  }

  fixMalformedStrings(content) {
    // Fix unterminated string constants
    content = content.replace(/from "react;/g, from react";');
    content = content.replace(/from "next\/head;/g, 'from next/head";);
    content = content.replace(/from "next\/document;/g, from next/document";');
    content = content.replace(/lang="en \/>/g, 'lang=en">);
    content = content.replace(/<body \/>/g, <body>');
    content = content.replace(/<Main \/>/g, '<Main />);
    content = content.replace(/<NextScript \/>/g, <NextScript />');
    
    // Fix CSP strings
    content = content.replace(/"default-src 'self/g, default-src \'self\'");
    content = content.replace(/"script-src self' 'unsafe-eval unsafe-inline'/g, 'script-src \self\ \'unsafe-eval\' \unsafe-inline\"');
    content = content.replace(/"style-src 'self unsafe-inline'/g, 'style-src \self\ \'unsafe-inline\'");
    content = content.replace(/"img-src self' data: https:/g, 'img-src \self\ data: https:"');
    
    return content;
  }

  fixJSXSyntax(content) {
    // Fix malformed JSX
    content = content.replace(/<Html lang="en \/>/g, '<Html lang=en">);
    content = content.replace(/<Head \/>/g, <Head>');
    content = content.replace(/<body \/>/g, '<body>);
    content = content.replace(/<Main \/>/g, <Main />');
    content = content.replace(/<NextScript \/>/g, '<NextScript />);
    
    // Ensure proper JSX structure
    if (content.includes(<Html lang="en>') && !content.includes('</Html>)) {
      content = content.replace(
        /<Html lang=en">[\s\S]*?<\/body>/,
        (match) => match + \n    </Html>'
      );
    }
    
    return content;
  }

  fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;
      
      // Apply fixes
      fixed = this.fixMergeConflicts(fixed);
      fixed = this.fixMalformedStrings(fixed);
      fixed = this.fixJSXSyntax(fixed);
      
      // Clean up extra whitespace
      fixed = fixed
        .replace(/\n\s*\n\s*\n+/g, \n\n')
        .replace(/^\s*\n/gm, '\n)
        .trim();
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed);
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax in ${path.relative(this.projectRoot, filePath)}`);
>>>>>>> origin/main
        return true;
      }
      
      return false;
    } catch (error) {
<<<<<<< HEAD
      this.log(`Error fixing ${filePath}: ${error.message}`, 'error');
      this.errors.push(`${filePath}: ${error.message}`);
=======
      this.errors.push(`Failed to fix ${filePath}: ${error.message}`);
>>>>>>> origin/main
      return false;
    }
  }

<<<<<<< HEAD
  fixJSXSyntax(content) {
    // Fix semicolons in JSX tags
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*);/g, '<$1');
    
    // Fix mismatched heading tags
    content = content.replace(/<h1([^>]*)>\s*([^<]+)<\/h2>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h2([^>]*)>\s*([^<]+)<\/h1>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h3([^>]*)>\s*([^<]+)<\/h1>/g, '<h3$1>$2</h3>');
    content = content.replace(/<h1([^>]*)>\s*([^<]+)<\/h3>/g, '<h3$1>$2</h3>');
    
    // Fix malformed JSX expressions
    content = content.replace(/\)<h/g, ')}\n      <h');
    
    return content;
  }

  fixTypeScriptSyntax(content) {
    // Fix missing semicolons in type definitions
    content = content.replace(/(\w+:\s*\w+)\s*}\s*(\w+:\s*\w+)/g, '$1;\n  $2');
    
    // Fix malformed function parameters
    content = content.replace(/(\w+:\s*\w+)\s*}\s*(\w+:\s*\w+)\s*}/g, '$1;\n  $2 }');
    
    return content;
  }

  fixArraySyntax(content) {
    // Fix malformed array syntax
    content = content.replace(/}\s*}\s*]/g, ']');
    content = content.replace(/}\s*[^}]\s*]/g, ']');
    
    // Fix array items with missing commas
    content = content.replace(/"([^"]+)"\s*}\s*"([^"]+)"\s*]/g, '"$1",\n                "$2"');
    
    return content;
  }

  fixFunctionDefinitions(content) {
    // Fix malformed function parameter lists
    content = content.replace(/(\w+:\s*\w+)\s*}\s*(\w+:\s*\w+)\s*}/g, '$1;\n  $2 }');
    
    // Fix missing commas in function parameters
    content = content.replace(/(\w+)\s*}\s*(\w+)/g, '$1,\n  $2');
    
    return content;
  }

  async getAllFiles() {
    const files = [];
    const extensions = ['.js', '.ts', '.tsx', '.jsx'];
    
    const scanDirectory = (dir) => {
      try {
        if (!fs.existsSync(dir)) return;
        
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        this.log(`Error scanning directory ${dir}: ${error.message}`, 'error');
      }
    };

    scanDirectory(path.join(this.projectRoot, 'app'));
    scanDirectory(path.join(this.projectRoot, 'components'));
    scanDirectory(path.join(this.projectRoot, 'pages'));
    scanDirectory(path.join(this.projectRoot, 'src'));
    
    return files;
  }

  async run() {
    this.log('Starting comprehensive syntax fixing...');
    
    const files = await this.getAllFiles();
    this.log(`Found ${files.length} files to check`);
    
    let fixedCount = 0;
    for (const file of files) {
      if (await this.fixFile(file)) {
=======
  async run() {
    this.log(Starting comprehensive syntax fixing...');
    
    // Get all source files
    const sourceFiles = this.getAllFiles(path.join(this.projectRoot, 'app));
    const pageFiles = this.getAllFiles(path.join(this.projectRoot, pages'));
    const componentFiles = this.getAllFiles(path.join(this.projectRoot, 'components));
    const allFiles = [...sourceFiles, ...pageFiles, ...componentFiles];
    
    this.log(`Found ${allFiles.length} files to check`);
    
    // Fix each file
    let fixedCount = 0;
    for (const file of allFiles) {
      if (this.fixFile(file)) {
>>>>>>> origin/main
        fixedCount++;
      }
    }
    
<<<<<<< HEAD
    this.log(`Fixed syntax in ${fixedCount} files`);
    
    if (this.errors.length > 0) {
      this.log(`Encountered ${this.errors.length} errors:`, 'error');
      this.errors.forEach(error => this.log(`  ${error}`, 'error'));
    }
    
    return this.errors.length === 0;
=======
    // Also fix specific problematic files
    const specificFiles = [
      middleware.ts',
      'pages/_document.js,
      pages/space-tech.tsx',
      'app/services/ai-content-generator/page.tsx'
    ];
    
    for (const file of specificFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        if (this.fixFile(filePath)) {
          fixedCount++;
        }
      }
    }
    
    this.log(`Fixed ${fixedCount} files`);
    
    if (this.errors.length > 0) {
      this.log(`Encountered ${this.errors.length} errors:`);
      this.errors.forEach(error => console.log(`   ❌ ${error}`));
    }
    
    return {
      success: this.errors.length === 0,
      fixedFiles: this.fixedFiles,
      errors: this.errors
    }
>>>>>>> origin/main
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new ComprehensiveSyntaxFixer();
<<<<<<< HEAD
  fixer.run().then(success => {
    process.exit(success ? 0 : 1);
=======
  fixer.run().then(result => {
    process.exit(result.success ? 0 : 1);
>>>>>>> origin/main
  });
}

export default ComprehensiveSyntaxFixer;