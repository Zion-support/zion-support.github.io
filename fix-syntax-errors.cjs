#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = 0;
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Fix common JSX syntax errors
      content = content.replace(/\s+\)\s*$/gm, '');
      content = content.replace(/\s+\)\s*</gm, '</');
      content = content.replace(/\s+\)\s*{/gm, '{');
      
      // Fix missing closing braces
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      
      if (openBraces > closeBraces) {
        const missingBraces = openBraces - closeBraces;
        content += '\n' + '}'.repeat(missingBraces);
      }

      // Fix TypeScript interface syntax errors
      if (filePath.endsWith('.ts') && content.includes('name: string')) {
        // Check if it's a broken interface
        if (!content.includes('interface') && !content.includes('type')) {
          // Wrap the properties in an interface
          const lines = content.split('\n');
          const fixedLines = [];
          let inBrokenInterface = false;
          
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            if (line.trim().match(/^\w+:\s*\w+/) && !inBrokenInterface) {
              // Start of broken interface
              fixedLines.push('interface AnalyticsData {');
              inBrokenInterface = true;
            }
            
            if (inBrokenInterface && line.trim() === '') {
              fixedLines.push('}');
              inBrokenInterface = false;
            }
            
            fixedLines.push(line);
          }
          
          if (inBrokenInterface) {
            fixedLines.push('}');
          }
          
          content = fixedLines.join('\n');
        }
      }

      // Remove trailing whitespace and fix indentation
      content = content.replace(/\s+$/gm, '');
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles++;
        this.log(`Fixed syntax errors in: ${filePath}`, 'SUCCESS');
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push(`${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixAllFiles() {
    this.log('🔍 Finding and fixing syntax errors...');
    
    const filesToFix = [
      'app/about/page.tsx',
      'app/services/ai-project-manager/page.tsx',
      'app/services/automation/page.tsx',
      'app/services/consulting/page.tsx',
      'pages/api/admin/analytics/summary.ts'
    ];

    for (const file of filesToFix) {
      this.fixFile(file);
    }

    // Also scan for other files with syntax issues
    try {
      const { execSync } = require('child_process');
      const { stdout } = execSync('find . -name "*.tsx" -o -name "*.ts" | head -20', { 
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      const allFiles = stdout.trim().split('\n').filter(f => f && !f.includes('node_modules'));
      
      for (const file of allFiles) {
        if (fs.existsSync(file)) {
          this.fixFile(file);
        }
      }
    } catch (error) {
      this.log(`Error scanning files: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting syntax error fixing...');
    
    try {
      await this.fixAllFiles();
      
      this.log('\n📊 Syntax Error Fixing Report');
      this.log('='.repeat(50));
      this.log(`Files Fixed: ${this.fixedFiles}`);
      this.log(`Errors: ${this.errors.length}`);
      
      if (this.errors.length > 0) {
        this.log('\nErrors encountered:');
        this.errors.forEach(error => this.log(`  - ${error}`, 'ERROR'));
      }
      
      this.log('\n✅ Syntax error fixing completed');
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = SyntaxErrorFixer;