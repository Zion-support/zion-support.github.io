#!/usr/bin/env node;

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class ErrorFixer {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }
;
  ensureDirectories() {;
    if (!fs.existsSync(this.reportsDir)) {;
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }
;
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
  }
;
  async fixSyntaxErrors() {;
    this.log('🔧 Starting syntax error fixes...');
    ;
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    const scriptsDir = path.join(this.projectRoot, 'scripts');
    ;
    const directories = [srcDir, pagesDir, scriptsDir].filter(dir => fs.existsSync(dir));
    ;
    let fixedFiles = 0;
    let totalErrors = 0;
;
    for (const dir of directories) {;
      const files = this.getAllFiles(dir, ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']);
      ;
      for (const file of files) {;
        try {;
          const content = fs.readFileSync(file, 'utf8');
          const fixedContent = this.fixFileContent(content);
          ;
          if (content !== fixedContent) {;
            fs.writeFileSync(file, fixedContent);
            fixedFiles++;
            this.log(`✅ Fixed syntax errors in: ${path.relative(this.projectRoot, file)}`);
          }
        } catch (error) {;
          this.log(`❌ Error processing ${file}: ${error.message}`);
          totalErrors++;
        }
      }
    }
;
    this.log(`🎉 Fixed ${fixedFiles} files with syntax errors`);
    return { fixedFiles, totalErrors };
  }
;
  fixFileContent(content) {;
    let fixed = content;
    ;
    // Fix common syntax errors;
    fixed = fixed.replace(/console\.log\(`([^`]*)\`\);/g, 'console.log(`$1`);');
    fixed = fixed.replace(/console\.log\('([^']*)'\);/g, "console.log('$1');");
    fixed = fixed.replace(/console\.log\("([^"]*)"\);/g, 'console.log("$1");');
    ;
    // Fix template literal issues;
    fixed = fixed.replace(/`([^`]*)\`\);/g, '`$1`);');
    fixed = fixed.replace(/'([^']*)'\);/g, "'$1');");
    fixed = fixed.replace(/"([^"]*)"\);/g, '"$1");');
    ;
    // Fix missing semicolons;
    fixed = fixed.replace(/([^;}])\n/g, '$1;\n');
    ;
    // Fix extra quotes;
    fixed = fixed.replace(/'/g, "'");
    fixed = fixed.replace(/"/g, '"');
    ;
    return fixed;
  }
;
  getAllFiles(dir, extensions) {;
    const files = [];
    ;
    const scanDirectory = (currentDir) => {;
      const items = fs.readdirSync(currentDir);
      ;
      for (const item of items) {;
        const itemPath = path.join(currentDir, item);
        const stat = fs.statSync(itemPath);
        ;
        if (stat.isDirectory()) {;
          scanDirectory(itemPath);
        } else if (stat.isFile()) {;
          const ext = path.extname(item);
          if (extensions.includes(ext)) {;
            files.push(itemPath);
          }
        }
      }
    };
    ;
    scanDirectory(dir);
    return files;
  }
;
  async generateReport(results) {;
    const timestamp = new Date().toISOString();
    const report = {;
      timestamp,;
      type: 'error-fixer',;
      results: {;
        fixedFiles: results.fixedFiles,;
        totalErrors: results.totalErrors,;
        success: results.totalErrors === 0;
      }
    };
;
    const reportFile = path.join(this.reportsDir, `error-fixer-report-${timestamp.replace(/[:.]/g, '-')}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    ;
    this.log(`📊 Report generated: ${reportFile}`);
    return report;
  }
;
  async run() {;
    this.log('🚀 Starting Error Fixer Automation');
    ;
    try {;
      const results = await this.fixSyntaxErrors();
      const report = await this.generateReport(results);
      ;
      this.log('✅ Error Fixer completed successfully');
      return report;
    } catch (error) {;
      this.log(`❌ Error Fixer failed: ${error.message}`);
      throw error;
    }
  }
}
;
// Run if called directly;
if (require.main === module) {;
  const fixer = new ErrorFixer();
  fixer.run().catch(console.error);
}
;
module.exports = ErrorFixer;