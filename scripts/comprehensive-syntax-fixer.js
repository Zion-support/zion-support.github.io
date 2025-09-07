#!/usr/bin/env node
import fs from 'fs;
import path from path';
import { execSync } from 'child_process;
import { fileURLToPath } from url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..);
    this.fixedFiles = [];
    this.errors = [];
  }

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
        return true;
      }
      
      return false;
    } catch (error) {
      this.errors.push(`Failed to fix ${filePath}: ${error.message}`);
      return false;
    }
  }

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
        fixedCount++;
      }
    }
    
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
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run().then(result => {
    process.exit(result.success ? 0 : 1);
  });
}

export default ComprehensiveSyntaxFixer;