#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BatchSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[BatchSyntaxFixer] ${message}`);
  }

  async run() {
    this.log('🔧 Starting batch syntax fixer...');
    
    try {
      const files = await this.findFiles();
      this.log(`📁 Found ${files.length} files to process`);
      
      for (const file of files) {
        await this.fixFile(file);
      }
      
      this.generateReport(files);
    } catch (error) {
      this.log(`❌ Error: ${error.message}`);
      this.errors.push(error.message);
    }
  }

  async findFiles() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    const files = [];
    
    const scanDir = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!item.startsWith('.') && item !== 'node_modules') {
            scanDir(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    };
    
    scanDir(this.projectRoot);
    return files;
  }

  async fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix common syntax issues
      content = this.fixCommonIssues(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${path.relative(this.projectRoot, filePath)}`);
      }
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      this.errors.push(`${filePath}: ${error.message}`);
    }
  }

  fixCommonIssues(content) {
    // Remove merge conflict markers
    content = content.replace(/<<<<<<<.*?=======.*?>>>>>>>.*?$/gms, '');
    content = content.replace(/^<<<<<<<.*$/gm, '');
    content = content.replace(/^=======.*$/gm, '');
    content = content.replace(/^>>>>>>>.*$/gm, '');
    
    // Fix misplaced commas
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/,\s*\)/g, ')');
    content = content.replace(/,\s*;/g, ';');
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    
    // Fix string concatenation issues
    content = content.replace(/'([^']*)\s*;\s*([^']*)'/g, "'$1$2'");
    content = content.replace(/"([^"]*)\s*;\s*([^"]*)"/g, '"$1$2"');
    
    // Fix object property issues
    content = content.replace(/{\s*'([^']*)\s*;\s*([^']*)'\s*:/g, "{'$1$2':");
    content = content.replace(/:\s*'([^']*)\s*;\s*([^']*)'\s*,/g, ":'$1$2',");
    content = content.replace(/:\s*'([^']*)\s*;\s*([^']*)'\s*}/g, ":'$1$2'}");
    
    // Fix JSX attribute issues
    content = content.replace(/className\s*=\s*'([^']*)\s*;\s*([^']*)'/g, "className='$1$2'");
    content = content.replace(/href\s*=\s*'([^']*)\s*;\s*([^']*)'/g, "href='$1$2'");
    content = content.replace(/title\s*=\s*'([^']*)\s*;\s*([^']*)'/g, "title='$1$2'");
    
    // Fix incomplete lines
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      if (line.includes('"') && !line.endsWith('"') && !line.endsWith('";')) {
        return line + '"';
      }
      if (line.includes("'") && !line.endsWith("'") && !line.endsWith("';")) {
        return line + "'";
      }
      return line;
    });
    
    return fixedLines.join('\n');
  }

  generateReport(files) {
    const report = {
      "timestamp": new Date().toISOString(),
      "totalFiles": files.length,
      "fixedFiles": this.fixedFiles.length,
      "errors": this.errors,
      "fixedFileList": this.fixedFiles
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'batch-syntax-fix-report.json'),
      JSON.stringify(report, null, 2)
    );

    this.log('📊 Report saved to batch-syntax-fix-report.json');
  }
}

// Run the fixer
const fixer = new BatchSyntaxFixer();
fixer.run().catch(console.error);