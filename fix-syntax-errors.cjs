#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Fix Syntax Errors Script
 * Automatically fixes common syntax errors in the codebase
 */
class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix missing semicolons after import statements
      const importSemicolonRegex = /import\s+.*?from\s+['"][^'"]+['"],?\s*$/gm;
      const matches = content.match(importSemicolonRegex);
      if (matches) {
        content = content.replace(importSemicolonRegex, (match) => {
          if (!match.endsWith(';')) {
            modified = true;
            return match + ';';
          }
          return match;
        });
      }

      // Fix missing semicolons after const/let/var declarations
      const declarationRegex = /(const|let|var)\s+[^=]+=\s*[^;]+(?!;)\s*$/gm;
      content = content.replace(declarationRegex, (match) => {
        if (!match.endsWith(';')) {
          modified = true;
          return match + ';';
        }
        return match;
      });

      // Fix missing semicolons after require statements
      const requireRegex = /require\s*\([^)]+\)(?!;)\s*$/gm;
      content = content.replace(requireRegex, (match) => {
        if (!match.endsWith(';')) {
          modified = true;
          return match + ';';
        }
        return match;
      });

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax errors in ${filePath}`, 'SUCCESS');
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async scanAndFixDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other directories
          if (!['node_modules', '.next', 'dist', 'build', 'out', 'coverage'].includes(item)) {
            await this.scanAndFixDirectory(fullPath);
          }
        } else if (stat.isFile() && /\.(js|jsx|ts|tsx)$/.test(item)) {
          await this.fixFile(fullPath);
        }
      }
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`, 'WARNING');
    }
  }

  async run() {
    this.log('🚀 Starting Syntax Error Fixer');
    this.log('='.repeat(60));

    try {
      // Fix specific files mentioned in the build error
      const specificFiles = [
        'pages/api/admin/analytics/summary.ts',
        'pages/api/admin/kyc-queue.ts',
        'pages/api/admin/learn/course.ts',
        'pages/api/admin/moderation/flags/[id].ts',
        'pages/api/admin/moderation/flags/[id]/action.ts'
      ];

      for (const file of specificFiles) {
        await this.fixFile(file);
      }

      // Scan and fix the entire project
      await this.scanAndFixDirectory(this.projectRoot);

      this.log('\n📊 SYNTAX ERROR FIXER REPORT');
      this.log('='.repeat(60));
      this.log(`Files fixed: ${this.fixedFiles.length}`);
      this.log(`Errors encountered: ${this.errors.length}`);
      
      if (this.fixedFiles.length > 0) {
        this.log('\nFixed files:');
        this.fixedFiles.forEach(file => this.log(`  ✅ ${file}`));
      }
      
      if (this.errors.length > 0) {
        this.log('\nErrors:');
        this.errors.forEach(({ file, error }) => this.log(`  ❌ ${file}: ${error}`));
      }

      // Try building again
      this.log('\n🔨 Testing build after fixes...');
      try {
        execSync('npm run build', { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          encoding: 'utf8'
        });
        this.log('✅ Build successful after fixes!', 'SUCCESS');
      } catch (buildError) {
        this.log('❌ Build still has errors after fixes', 'ERROR');
        this.log(buildError.stdout || buildError.stderr);
      }

    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    }
  }
}

// Run the syntax error fixer
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = SyntaxErrorFixer;