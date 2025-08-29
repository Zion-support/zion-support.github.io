#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LintFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/lint-fixer.log');
    this.issuesFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    // Console output
    // console.log(message);

    // File output
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // console.error('Failed to write to log file:', error.message);
    }
  }

  async fixTrailingSpaces(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove trailing spaces and multiple empty lines
      let fixedContent = content
        .replace(/[ \t]+$/gm, '') // Remove trailing spaces
        .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove multiple empty lines
        .replace(/\n\s*\n\s*\n/g, '\n\n'); // Double pass to catch remaining

      if (originalContent !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.issuesFixed++;
        this.log(`Fixed trailing spaces in: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Error fixing trailing spaces in ${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixUnusedImports(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove unused React imports if no JSX
      if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx')) {
        const hasJSX = /<[A-Z][a-zA-Z]*/.test(content);
        if (!hasJSX && content.includes("import React from 'react'")) {
          let fixedContent = content.replace(/import React from ['"]react['"];?\s*\n?/g, '');
          if (originalContent !== fixedContent) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            this.issuesFixed++;
            this.log(`Removed unused React import in: ${filePath}`);
            return true;
          }
        }
      }

      return false;
    } catch (error) {
      this.log(`Error fixing unused imports in ${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixConsoleStatements(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Replace console statements with proper logging or remove them
      let fixedContent = content
        .replace(/console\.log\(/g, '// // console.log(')
        .replace(/console\.warn\(/g, '// // console.warn(')
        .replace(/console\.error\(/g, '// // console.error(')
        .replace(/console\.info\(/g, '// // console.info(')
        .replace(/console\.debug\(/g, '// // console.debug(');

      if (originalContent !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.issuesFixed++;
        this.log(`Commented console statements in: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Error fixing console statements in ${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixPreferConst(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Fix let declarations that should be const
      let fixedContent = content.replace(/let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^=]+)$/gm, (match, varName, value) => {
        // Check if the variable is never reassigned
        const reassignmentRegex = new RegExp(`${varName}\\s*=`, 'g');
        const reassignments = content.match(reassignmentRegex);
        if (!reassignments || reassignments.length <= 1) {
          return `const ${varName} = ${value}`;
        }
        return match;
      });

      if (originalContent !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.issuesFixed++;
        this.log(`Fixed prefer-const in: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Error fixing prefer-const in ${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixEmptyBlocks(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Fix empty blocks by adding comments
      let fixedContent = content.replace(/\{\s*\}/g, '{ /* empty */ }');

      if (originalContent !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.issuesFixed++;
        this.log(`Fixed empty blocks in: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Error fixing empty blocks in ${filePath}: ${error.message}`);
      return false;
    }
  }

  async processFile(filePath) {
    try {
      this.filesProcessed++;

      // Skip certain file types and directories
      if (filePath.includes('node_modules') ||
          filePath.includes('.git') ||
          filePath.includes('dist') ||
          filePath.includes('build') ||
          filePath.includes('.next') ||
          filePath.includes('coverage')) {
        return;
      }

      const ext = path.extname(filePath);
      if (!['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
        return;
      }

      let fileFixed = false;

      // Apply fixes in order of priority
      fileFixed = await this.fixTrailingSpaces(filePath) || fileFixed;
      fileFixed = await this.fixUnusedImports(filePath) || fileFixed;
      fileFixed = await this.fixConsoleStatements(filePath) || fileFixed;
      fileFixed = await this.fixPreferConst(filePath) || fileFixed;
      fileFixed = await this.fixEmptyBlocks(filePath) || fileFixed;

      if (fileFixed) {
        this.log(`File processed and fixed: ${filePath}`);
      }

    } catch (error) {
      this.log(`Error processing file ${filePath}: ${error.message}`);
    }
  }

  async walkDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          await this.walkDirectory(fullPath);
        } else if (stat.isFile()) {
          await this.processFile(fullPath);
        }
      }
    } catch (error) {
      this.log(`Error walking directory ${dir}: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Starting Lint Fixer...');
    this.log(`Project root: ${this.projectRoot}`);

    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      // Process all files
      await this.walkDirectory(this.projectRoot);

      const duration = Date.now() - this.startTime;

      this.log('\n📊 Lint Fixer Summary:');
      this.log(`Files processed: ${this.filesProcessed}`);
      this.log(`Issues fixed: ${this.issuesFixed}`);
      this.log(`Duration: ${duration}ms`);

      if (this.issuesFixed > 0) {
        this.log('✅ Lint issues have been automatically fixed!');

        // Try to commit the fixes
        try {
          execSync('git add .', { cwd: this.projectRoot, stdio: 'pipe' });
          execSync('git commit -m "🔧 Auto-fix lint issues"', { cwd: this.projectRoot, stdio: 'pipe' });
          this.log('✅ Changes committed to git');
        } catch (error) {
          this.log(`⚠️  Could not commit changes: ${error.message}`);
        }
      } else {
        this.log('✨ No lint issues found to fix!');
      }

    } catch (error) {
      this.log(`❌ Error running lint fixer: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the lint fixer
const fixer = new LintFixer();
fixer.run().catch(error => {
  // console.error('Fatal error:', error);
  process.exit(1);
});
