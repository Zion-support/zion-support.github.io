#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptFixAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.fixHistory = [];
    
    // Common TypeScript syntax fixes
    this.fixPatterns = [
      // Fix 'anykeyof' -> 'keyof'
      { pattern: /anykeyof/g, replacement: 'keyof', description: 'Fix anykeyof syntax' },
      
      // Fix 'any"' -> '"'
      { pattern: /any"/g, replacement: '"', description: 'Fix any" syntax' },
      
      // Fix 'any\'' -> '\''
      { pattern: /any'/g, replacement: "'", description: "Fix any' syntax" },
      
      // Fix 'any(' -> '('
      { pattern: /any\(/g, replacement: '(', description: 'Fix any( syntax' },
      
      // Fix 'any)' -> ')'
      { pattern: /any\)/g, replacement: ')', description: 'Fix any) syntax' },
      
      // Fix 'any:' -> ':'
      { pattern: /any:/g, replacement: ':', description: 'Fix any: syntax' },
      
      // Fix 'any;' -> ';'
      { pattern: /any;/g, replacement: ';', description: 'Fix any; syntax' },
      
      // Fix 'any,' -> ','
      { pattern: /any,/g, replacement: ',', description: 'Fix any, syntax' },
      
      // Fix 'any.' -> '.'
      { pattern: /any\./g, replacement: '.', description: 'Fix any. syntax' },
      
      // Fix 'any ' -> ' '
      { pattern: /any\s/g, replacement: ' ', description: 'Fix any space syntax' },
      
      // Fix import statements
      { pattern: /from 'lucide-react\.ts';/g, replacement: "from 'lucide-react';", description: 'Fix lucide-react import' },
      { pattern: /from 'lucide-react\.ts'/g, replacement: "from 'lucide-react'", description: 'Fix lucide-react import' },
      
      // Fix JSX closing tags
      { pattern: /<\/>header>/g, replacement: '</header>', description: 'Fix malformed header closing tag' },
      { pattern: /<\/>div>/g, replacement: '</div>', description: 'Fix malformed div closing tag' },
      { pattern: /<\/>Link>/g, replacement: '</Link>', description: 'Fix malformed Link closing tag' },
      
      // Fix property syntax
      { pattern: /(\w+):\s*{;/g, replacement: '$1: {', description: 'Fix malformed property syntax' },
      
      // Fix function parameter syntax
      { pattern: /(\w+):\s*any\(/g, replacement: '$1: (', description: 'Fix function parameter syntax' },
      
      // Fix object property syntax
      { pattern: /(\w+):\s*any(\w+)/g, replacement: '$1: $2', description: 'Fix object property syntax' }
    ];
    
    this.setupDirectories();
  }

  setupDirectories() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'typescript-fix.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async scanTypeScriptFiles() {
    this.log('Scanning for TypeScript files...');
    
    const typescriptFiles = [];
    const scanDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
          typescriptFiles.push(fullPath);
        }
      }
    };

    scanDirectory(path.join(this.projectRoot, 'src'));
    scanDirectory(path.join(this.projectRoot, 'components'));
    scanDirectory(path.join(this.projectRoot, 'pages'));
    scanDirectory(path.join(this.projectRoot, 'utils'));
    scanDirectory(path.join(this.projectRoot, 'context'));
    scanDirectory(path.join(this.projectRoot, 'data'));
    scanDirectory(path.join(this.projectRoot, 'layout'));
    scanDirectory(path.join(this.projectRoot, 'legal'));
    scanDirectory(path.join(this.projectRoot, 'tests'));
    
    this.log(`Found ${typescriptFiles.length} TypeScript files`);
    return typescriptFiles;
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;
      
      // Apply all fix patterns
      for (const pattern of this.fixPatterns) {
        if (pattern.pattern.test(newContent)) {
          const beforeCount = (newContent.match(pattern.pattern) || []).length;
          newContent = newContent.replace(pattern.pattern, pattern.replacement);
          const afterCount = (newContent.match(pattern.pattern) || []).length;
          
          if (beforeCount !== afterCount) {
            modified = true;
            this.log(`Applied fix in ${path.relative(this.projectRoot, filePath)}: ${pattern.description}`);
          }
        }
      }
      
      if (modified) {
        // Create backup
        const backupPath = filePath + '.tsbackup';
        fs.copyFileSync(filePath, backupPath);
        
        // Write fixed content
        fs.writeFileSync(filePath, newContent, 'utf8');
        
        this.fixHistory.push({
          timestamp: new Date().toISOString(),
          file: path.relative(this.projectRoot, filePath),
          fixes: this.countFixes(content, newContent),
          backup: backupPath
        });
        
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing file ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  countFixes(originalContent, newContent) {
    let fixCount = 0;
    
    for (const pattern of this.fixPatterns) {
      const beforeCount = (originalContent.match(pattern.pattern) || []).length;
      const afterCount = (newContent.match(pattern.pattern) || []).length;
      fixCount += beforeCount - afterCount;
    }
    
    return fixCount;
  }

  async fixAllFiles() {
    this.log('Starting TypeScript file fixes...');
    
    const files = await this.scanTypeScriptFiles();
    let totalFixed = 0;
    let filesModified = 0;
    
    for (const file of files) {
      const fixed = await this.fixFile(file);
      if (fixed) {
        filesModified++;
        const historyEntry = this.fixHistory[this.fixHistory.length - 1];
        totalFixed += historyEntry.fixes;
      }
    }
    
    this.log(`Fixed ${totalFixed} issues in ${filesModified} files`);
    return { totalFixed, filesModified, filesProcessed: files.length };
  }

  async runTypeScriptCheck() {
    this.log('Running TypeScript compiler check...');
    
    try {
      const result = execSync('npx tsc --noEmit --pretty', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('TypeScript check passed - no type errors found');
      return { success: true, errors: [] };
    } catch (error) {
      if (error.stdout) {
        const errors = this.parseTypeScriptErrors(error.stdout);
        this.log(`TypeScript check failed with ${errors.length} errors`);
        return { success: false, errors };
      }
      return { success: false, errors: [] };
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/src\/([^:]+):(\d+):(\d+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: line.trim(),
            type: 'typescript'
          });
        }
      }
    }
    
    return errors;
  }

  generateReport(fixResults, tsCheckResults) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        filesProcessed: fixResults.filesProcessed,
        filesModified: fixResults.filesModified,
        totalFixes: fixResults.totalFixed,
        typescriptCheckPassed: tsCheckResults.success,
        remainingErrors: tsCheckResults.errors.length
      },
      fixHistory: this.fixHistory,
      remainingErrors: tsCheckResults.errors,
      recommendations: this.generateRecommendations(fixResults, tsCheckResults)
    };

    const reportPath = path.join(this.logsDir, `typescript-fix-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  generateRecommendations(fixResults, tsCheckResults) {
    const recommendations = [];
    
    if (tsCheckResults.errors.length > 0) {
      recommendations.push({
        priority: 'high',
        message: 'TypeScript compilation still has errors after fixes',
        action: 'review_remaining_errors',
        command: 'npm run type-check'
      });
    }
    
    if (fixResults.totalFixed > 0) {
      recommendations.push({
        priority: 'medium',
        message: 'Review fixed files to ensure changes are correct',
        action: 'review_fixes',
        files: this.fixHistory.map(h => h.file)
      });
    }
    
    if (fixResults.filesModified > 0) {
      recommendations.push({
        priority: 'low',
        message: 'Consider running tests to ensure fixes don\'t break functionality',
        action: 'run_tests',
        command: 'npm test'
      });
    }
    
    return recommendations;
  }

  async run() {
    this.log('Starting TypeScript Fix Automation...');
    
    try {
      // Fix all files
      const fixResults = await this.fixAllFiles();
      
      // Run TypeScript check
      const tsCheckResults = await this.runTypeScriptCheck();
      
      // Generate report
      const report = this.generateReport(fixResults, tsCheckResults);
      
      this.log('TypeScript Fix Automation completed');
      this.log(`Summary: Fixed ${fixResults.totalFixed} issues in ${fixResults.filesModified} files`);
      
      if (tsCheckResults.success) {
        this.log('✅ TypeScript compilation now passes!');
      } else {
        this.log(`⚠️  TypeScript compilation still has ${tsCheckResults.errors.length} errors`);
      }
      
      return report;
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const automation = new TypeScriptFixAutomation();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'fix':
      automation.run().then(report => {
        console.log(JSON.stringify(report, null, 2));
        process.exit(0);
      }).catch(error => {
        console.error('Error:', error.message);
        process.exit(1);
      });
      break;
      
    case 'check':
      automation.runTypeScriptCheck().then(results => {
        console.log(JSON.stringify(results, null, 2));
        process.exit(results.success ? 0 : 1);
      });
      break;
      
    case 'scan':
      automation.scanTypeScriptFiles().then(files => {
        console.log(JSON.stringify(files.map(f => path.relative(process.cwd(), f)), null, 2));
        process.exit(0);
      });
      break;
      
    default:
      console.log(`
TypeScript Fix Automation

Usage:
  node typescript-fix-automation.cjs [command]

Commands:
  fix     - Fix all TypeScript syntax errors
  check   - Run TypeScript compiler check
  scan    - Scan for TypeScript files

Examples:
  node typescript-fix-automation.cjs fix
  node typescript-fix-automation.cjs check
  node typescript-fix-automation.cjs scan
      `);
      process.exit(1);
  }
}

module.exports = TypeScriptFixAutomation;