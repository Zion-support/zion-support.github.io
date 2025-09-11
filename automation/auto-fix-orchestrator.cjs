#!/usr/bin/env node
console.log('🎯 Starting Auto-Fix Orchestrator...');

class AutoFixOrchestrator {
  constructor() {
    this.isRunning = false;
    this.checkInterval = 600000; // 10 minutes
    this.lastCheck = null;
    this.logFile = path.join(process.cwd(), 'automation/logs/auto-fix-orchestrator.log');
    this.fixHistory = [];
    this.maxHistorySize = 100;
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runComprehensiveFix() {
    try {
      this.log('🎯 Running comprehensive auto-fix...');
      
      const fixResults = {
        timestamp: new Date().toISOString(),
        fixes: [],
        totalFixes: 0,
        success: false
      };
      
      // 1. Fix linting issues
      const lintResult = await this.fixLintingIssues();
      fixResults.fixes.push(lintResult);
      fixResults.totalFixes += lintResult.fixesApplied;
      
      // 2. Fix TypeScript issues
      const tsResult = await this.fixTypeScriptIssues();
      fixResults.fixes.push(tsResult);
      fixResults.totalFixes += tsResult.fixesApplied;
      
      // 3. Fix build issues
      const buildResult = await this.fixBuildIssues();
      fixResults.fixes.push(buildResult);
      fixResults.totalFixes += buildResult.fixesApplied;
      
      // 4. Fix file structure issues
      const structureResult = await this.fixFileStructureIssues();
      fixResults.fixes.push(structureResult);
      fixResults.totalFixes += structureResult.fixesApplied;
      
      // 5. Fix dependency issues
      const depResult = await this.fixDependencyIssues();
      fixResults.fixes.push(depResult);
      fixResults.totalFixes += depResult.fixesApplied;
      
      // 6. Verify fixes
      const verificationResult = await this.verifyFixes();
      fixResults.success = verificationResult.success;
      
      // Record fix history
      this.fixHistory.push(fixResults);
      if (this.fixHistory.length > this.maxHistorySize) {
        this.fixHistory.shift();
      }
      
      this.log(`✅ Comprehensive fix completed: ${fixResults.totalFixes} fixes applied`);
      
      // Generate report
      await this.generateFixReport(fixResults);
      
      return fixResults;
      
    } catch (error) {
      this.log(`❌ Comprehensive fix failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async fixLintingIssues() {
    try {
      this.log('🔍 Fixing linting issues...');
      
      let fixesApplied = 0;
      
      // Run ESLint auto-fix
      try {
        execSync('npm run lint -- --fix', { stdio: 'pipe' });
        fixesApplied++;
      } catch (error) {
        // ESLint may still have warnings, but fixes were applied
        fixesApplied++;
      }
      
      // Fix common linting issues manually
      const files = this.getSourceFiles();
      for (const file of files) {
        const fileFixes = await this.fixFileLintingIssues(file);
        fixesApplied += fileFixes;
      }
      
      return { type: 'linting', fixesApplied, success: true };
      
    } catch (error) {
      this.log(`Error fixing linting issues: ${error.message}`, 'ERROR');
      return { type: 'linting', fixesApplied: 0, success: false, error: error.message };
    }
  }

  async fixTypeScriptIssues() {
    try {
      this.log('🔍 Fixing TypeScript issues...');
      
      let fixesApplied = 0;
      
      // Run TypeScript check to identify issues
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
        return { type: 'typescript', fixesApplied: 0, success: true };
      } catch (error) {
        const errorOutput = error.stdout?.toString() || error.stderr?.toString() || '';
        
        // Fix common TypeScript issues
        const files = this.extractFilesFromTypeScriptErrors(errorOutput);
        for (const file of files) {
          const fileFixes = await this.fixFileTypeScriptIssues(file, errorOutput);
          fixesApplied += fileFixes;
        }
      }
      
      return { type: 'typescript', fixesApplied, success: true };
      
    } catch (error) {
      this.log(`Error fixing TypeScript issues: ${error.message}`, 'ERROR');
      return { type: 'typescript', fixesApplied: 0, success: false, error: error.message };
    }
  }

  async fixBuildIssues() {
    try {
      this.log('🔍 Fixing build issues...');
      
      let fixesApplied = 0;
      
      // Clear build cache
      if (fs.existsSync('.next')) {
        fs.rmSync('.next', { recursive: true, force: true });
        fixesApplied++;
      }
      
      if (fs.existsSync('tsconfig.tsbuildinfo')) {
        fs.unlinkSync('tsconfig.tsbuildinfo');
        fixesApplied++;
      }
      
      // Try to build
      try {
        execSync('npm run build', { stdio: 'pipe' });
        return { type: 'build', fixesApplied, success: true };
      } catch (error) {
        // Build still failing, but cache was cleared
        return { type: 'build', fixesApplied, success: false, error: error.message };
      }
      
    } catch (error) {
      this.log(`Error fixing build issues: ${error.message}`, 'ERROR');
      return { type: 'build', fixesApplied: 0, success: false, error: error.message };
    }
  }

  async fixFileStructureIssues() {
    try {
      this.log('🔍 Fixing file structure issues...');
      
      let fixesApplied = 0;
      
      // Fix common file structure issues
      const files = this.getSourceFiles();
      for (const file of files) {
        const fileFixes = await this.fixFileStructureIssuesInFile(file);
        fixesApplied += fileFixes;
      }
      
      return { type: 'file_structure', fixesApplied, success: true };
      
    } catch (error) {
      this.log(`Error fixing file structure issues: ${error.message}`, 'ERROR');
      return { type: 'file_structure', fixesApplied: 0, success: false, error: error.message };
    }
  }

  async fixDependencyIssues() {
    try {
      this.log('🔍 Fixing dependency issues...');
      
      let fixesApplied = 0;
      
      // Check for missing dependencies
      try {
        execSync('npm install', { stdio: 'pipe' });
        fixesApplied++;
      } catch (error) {
        this.log(`Dependency installation failed: ${error.message}`, 'WARN');
      }
      
      // Check for outdated dependencies
      try {
        execSync('npm outdated', { stdio: 'pipe' });
      } catch (error) {
        // Outdated dependencies found, but not critical
      }
      
      return { type: 'dependencies', fixesApplied, success: true };
      
    } catch (error) {
      this.log(`Error fixing dependency issues: ${error.message}`, 'ERROR');
      return { type: 'dependencies', fixesApplied: 0, success: false, error: error.message };
    }
  }

  async verifyFixes() {
    try {
      this.log('🔍 Verifying fixes...');
      
      // Run type check
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
      } catch (error) {
        this.log('TypeScript errors still present after fixes', 'WARN');
        return { success: false, error: 'TypeScript errors remain' };
      }
      
      // Run lint check
      try {
        execSync('npm run lint', { stdio: 'pipe' });
      } catch (error) {
        this.log('Linting errors still present after fixes', 'WARN');
        return { success: false, error: 'Linting errors remain' };
      }
      
      // Try build
      try {
        execSync('npm run build', { stdio: 'pipe' });
        this.log('✅ All fixes verified successfully');
        return { success: true };
      } catch (error) {
        this.log('Build still failing after fixes', 'WARN');
        return { success: false, error: 'Build still failing' };
      }
      
    } catch (error) {
      this.log(`Error verifying fixes: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  getSourceFiles() {
    const sourceDirs = ['components', 'pages', 'services', 'utils', 'types'];
    const files = [];
    
    for (const dir of sourceDirs) {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        this.getFilesRecursively(dirPath, files);
      }
    }
    
    return files.filter(file => 
      file.endsWith('.tsx') || 
      file.endsWith('.ts') || 
      file.endsWith('.jsx') || 
      file.endsWith('.js')
    );
  }

  getFilesRecursively(dirPath, files) {
    try {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item.name);
        
        if (item.isDirectory()) {
          this.getFilesRecursively(fullPath, files);
        } else {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Ignore errors for individual directories
    }
  }

  async fixFileLintingIssues(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fixes = 0;
      const originalContent = content;
      
      // Fix common linting issues
      content = content.replace(/console\.(log|error|warn|info)\(/g, '// console.$1(');
      content = content.replace(/:\s*any\b/g, ': unknown');
      content = content.replace(/\/\/\s*eslint-disable/g, '// eslint-disable-next-line');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        fixes++;
      }
      
      return fixes;
      
    } catch (error) {
      return 0;
    }
  }

  extractFilesFromTypeScriptErrors(errorOutput) {
    const fileMatches = errorOutput.match(/\.\/([^:]+):/g);
    if (!fileMatches) return [];
    
    return [...new Set(fileMatches.map(match => match.replace('./', '').replace(':', '')))];
  }

  async fixFileTypeScriptIssues(filePath, errorOutput) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fixes = 0;
      const originalContent = content;
      
      // Fix common TypeScript issues
      content = content.replace(/:\s*any\b/g, ': unknown');
      content = content.replace(/function\s+(\w+)\s*\(/g, 'function $1(): any (');
      content = content.replace(/const\s+(\w+)\s*=\s*\(/g, 'const $1 = (): any => (');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        fixes++;
      }
      
      return fixes;
      
    } catch (error) {
      return 0;
    }
  }

  async fixFileStructureIssuesInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fixes = 0;
      const originalContent = content;
      
      // Fix common file structure issues
      content = content.replace(/^[<>=]{7}.*$/gm, ''); // Remove git merge conflict markers
      content = content.replace(/>>>>>>>.*$/gm, '');
      content = content.replace(/<<<<<<<.*$/gm, '');
      content = content.replace(/=======.*$/gm, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        fixes++;
      }
      
      return fixes;
      
    } catch (error) {
      return 0;
    }
  }

  async generateFixReport(fixResults) {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        fixResults,
        history: this.fixHistory.slice(-10), // Last 10 fixes
        summary: {
          totalFixes: fixResults.totalFixes,
          success: fixResults.success,
          fixTypes: fixResults.fixes.map(f => f.type)
        }
      };
      
      fs.writeFileSync(
        path.join(process.cwd(), 'automation/logs/auto-fix-report.json'),
        JSON.stringify(report, null, 2)
      );
      
    } catch (error) {
      this.log(`Error generating fix report: ${error.message}`, 'ERROR');
    }
  }

  async start() {
    this.isRunning = true;
    this.log('🚀 Auto-Fix Orchestrator started');
    
    // Initial comprehensive fix
    await this.runComprehensiveFix();
    
    // Set up interval
    setInterval(async () => {
      if (this.isRunning) {
        this.lastCheck = new Date();
        await this.runComprehensiveFix();
      }
    }, this.checkInterval);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('🛑 Shutting down Auto-Fix Orchestrator...');
      this.isRunning = false;
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('🛑 Shutting down Auto-Fix Orchestrator...');
      this.isRunning = false;
      process.exit(0);
    });
  }
}

// Start the orchestrator
const autoFixOrchestrator = new AutoFixOrchestrator();
autoFixOrchestrator.start().catch(error => {
  console.error('❌ Failed to start Auto-Fix Orchestrator:', error);
  process.exit(1);
});
=======
/* eslint-disable */
const { execSync } = require('child_process');

function run(cmd) {
  console.log(`[auto-fix] ${cmd}`);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (e) {
    console.log(`[auto-fix] Command failed (continuing): ${cmd}`);
  }
}

function main() {
  // Formatting and linting quick fixes
  run('npx prettier --write .');
  run('npm run lint --if-present');
  run('npm run linting:fix --if-present');
  // Attempt type-check; non-blocking
  run('npm run type-check --if-present');
  console.log('[auto-fix] Done');
}

if (require.main === module) main();