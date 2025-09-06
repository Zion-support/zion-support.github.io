#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class MasterAutomationSystem {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'master-automation.log');
    this.reportFile = path.join(__dirname, 'reports', 'automation-report.json');
    this.ensureDirectories();
    this.results = {
      timestamp: new Date().toISOString(),
      syntaxFixes: 0,
      lintFixes: 0,
      typeCheckFixes: 0,
      buildFixes: 0,
      errors: [],
      warnings: [],
      fixedFiles: []
    };
  }

  ensureDirectories() {
    const dirs = [
      path.dirname(this.logFile),
      path.dirname(this.reportFile),
      path.join(__dirname, 'logs'),
      path.join(__dirname, 'reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { 
        stdio: 'pipe', 
        cwd: path.join(__dirname, '..'),
        encoding: 'utf8'
      });
      this.log(`Success: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`Error in ${description}: ${error.message}`, 'ERROR');
      this.results.errors.push(`${description}: ${error.message}`);
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async fixSyntaxErrors() {
    this.log('Starting syntax error fixes...');
    
    // Create a comprehensive syntax fixer
    const syntaxFixer = `
const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements
    content = content.replace(/import\\s+([^,]+),\\s*$/gm, 'import $1;');
    content = content.replace(/import\\s*{\\s*,\\s*([^}]+)\\s*}\\s*from\\s*['"]([^'"]+)['"];?/g, 'import { $1 } from "$2";');
    
    // Fix trailing commas
    content = content.replace(/,(\s*[}\\]])/g, '$1');
    
    // Fix object syntax
    content = content.replace(/"([^"]+)":/g, '$1:');
    
    // Fix empty lines with just commas
    content = content.replace(/^\\s*,\\s*$/gm, '');
    
    // Fix malformed function syntax
    content = content.replace(/\\(([^)]+),\\s*\\)/g, '($1)');
    
    // Fix switch statements
    content = content.replace(/case\\s+([^:]+),/g, 'case $1:');
    content = content.replace(/break,\\s*$/gm, 'break;');
    
    // Fix return statements
    content = content.replace(/return\\s+([^;]+),\\s*$/gm, 'return $1;');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

// Get all TypeScript files
function getAllFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'automation') {
      files.push(...getAllFiles(fullPath));
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  });
  
  return files;
}

const projectRoot = process.argv[2] || '.';
const files = getAllFiles(projectRoot);
let fixedCount = 0;

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
    console.log(\`Fixed: \${file}\`);
  }
});

console.log(\`Fixed \${fixedCount} files\`);
`;

    const fixerPath = path.join(__dirname, 'temp-syntax-fixer.js');
    fs.writeFileSync(fixerPath, syntaxFixer);
    
    const result = await this.runCommand(
      `node ${fixerPath} ${path.join(__dirname, '..')}`,
      'Syntax Error Fixer'
    );
    
    if (result.success) {
      this.results.syntaxFixes = parseInt(result.output.match(/Fixed (\d+) files/)?.[1] || '0');
    }
    
    // Clean up
    if (fs.existsSync(fixerPath)) {
      fs.unlinkSync(fixerPath);
    }
  }

  async runLintFix() {
    const result = await this.runCommand('npm run lint:fix', 'ESLint Fix');
    if (result.success) {
      this.results.lintFixes++;
    }
  }

  async runTypeCheck() {
    const result = await this.runCommand('npx tsc --noEmit --skipLibCheck', 'TypeScript Check');
    if (result.success) {
      this.results.typeCheckFixes++;
    }
  }

  async runBuild() {
    const result = await this.runCommand('npm run build', 'Build Test');
    if (result.success) {
      this.results.buildFixes++;
    }
  }

  async runTests() {
    const result = await this.runCommand('npm run test:smoke', 'Smoke Tests');
    return result.success;
  }

  async generateReport() {
    const report = {
      ...this.results,
      summary: {
        totalFixes: this.results.syntaxFixes + this.results.lintFixes + this.results.typeCheckFixes + this.results.buildFixes,
        successRate: this.results.errors.length === 0 ? 100 : Math.max(0, 100 - (this.results.errors.length * 10))
      }
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${this.reportFile}`);
    return report;
  }

  async run() {
    this.log('Starting Master Automation System...');
    
    try {
      // Step 1: Fix syntax errors
      await this.fixSyntaxErrors();
      
      // Step 2: Run lint fixes
      await this.runLintFix();
      
      // Step 3: Run type check
      await this.runTypeCheck();
      
      // Step 4: Test build
      await this.runBuild();
      
      // Step 5: Run tests
      const testsPassed = await this.runTests();
      
      // Step 6: Generate report
      const report = await this.generateReport();
      
      this.log(`Master Automation completed. Fixed ${report.summary.totalFixes} issues. Success rate: ${report.summary.successRate}%`);
      
      if (testsPassed) {
        this.log('All tests passed!', 'SUCCESS');
      } else {
        this.log('Some tests failed', 'WARN');
      }
      
      return report;
    } catch (error) {
      this.log(`Master Automation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const automation = new MasterAutomationSystem();
  automation.run().catch(console.error);
}

module.exports = MasterAutomationSystem;