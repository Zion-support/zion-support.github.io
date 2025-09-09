#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class AutoFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'auto-fixer.log');
    this.fixesApplied = [];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage);
  }

  async fixLintErrors() {
    try {
      this.log('Attempting to fix lint errors...');
      const { stdout, stderr } = await execAsync('npm run lint:fix', { 
        cwd: this.projectRoot,
        timeout: 60000 
      });
      
      if (stderr && stderr.includes('error')) {
        this.log(`Lint fix failed: ${stderr}`);
        return { success: false, error: stderr };
      }
      
      this.log('Lint errors fixed successfully');
      this.fixesApplied.push({
        type: 'lint_fix',
        timestamp: new Date().toISOString(),
        success: true
      });
      
      return { success: true, output: stdout };
    } catch (error) {
      this.log(`Lint fix failed: ${error.message}`);
      this.fixesApplied.push({
        type: 'lint_fix',
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message
      });
      
      return { success: false, error: error.message };
    }
  }

  async fixMergeConflicts() {
    try {
      this.log('Checking for merge conflicts to fix...');
      
      // Find files with merge conflicts
      const { stdout } = await execAsync('grep -r "<<<<<<< HEAD\\|=======\\|>>>>>>> " pages/ components/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l || true', { 
        cwd: this.projectRoot 
      });
      
      if (!stdout.trim()) {
        this.log('No merge conflicts found');
        return { success: true, fixed: 0 };
      }
      
      const files = stdout.trim().split('\n');
      let fixedCount = 0;
      
      for (const file of files) {
        try {
          const filePath = path.join(this.projectRoot, file);
          let content = fs.readFileSync(filePath, 'utf8');
          
          // Simple merge conflict resolution: prefer incoming changes
          const conflictRegex = /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]*/g;
          const originalContent = content;
          
          content = content.replace(conflictRegex, (match, incomingContent) => {
            return incomingContent.trim();
          });
          
          if (content !== originalContent) {
            fs.writeFileSync(filePath, content);
            fixedCount++;
            this.log(`Fixed merge conflicts in ${file}`);
          }
        } catch (error) {
          this.log(`Failed to fix merge conflicts in ${file}: ${error.message}`);
        }
      }
      
      this.fixesApplied.push({
        type: 'merge_conflict_fix',
        timestamp: new Date().toISOString(),
        success: true,
        filesFixed: fixedCount
      });
      
      this.log(`Fixed merge conflicts in ${fixedCount} files`);
      return { success: true, fixed: fixedCount };
    } catch (error) {
      this.log(`Merge conflict fix failed: ${error.message}`);
      this.fixesApplied.push({
        type: 'merge_conflict_fix',
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message
      });
      
      return { success: false, error: error.message };
    }
  }

  async fixDependencies() {
    try {
      this.log('Checking and fixing dependencies...');
      
      // Check if node_modules exists
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        this.log('Installing missing dependencies...');
        await execAsync('npm install', { 
          cwd: this.projectRoot,
          timeout: 300000 // 5 minutes
        });
        
        this.fixesApplied.push({
          type: 'dependency_install',
          timestamp: new Date().toISOString(),
          success: true
        });
        
        this.log('Dependencies installed successfully');
        return { success: true, action: 'installed' };
      }
      
      // Check for security vulnerabilities
      const { stdout } = await execAsync('npm audit --audit-level=high', { 
        cwd: this.projectRoot,
        timeout: 60000 
      }).catch(() => ({ stdout: '' }));
      
      if (stdout.includes('found')) {
        this.log('Attempting to fix security vulnerabilities...');
        await execAsync('npm audit fix', { 
          cwd: this.projectRoot,
          timeout: 300000 // 5 minutes
        });
        
        this.fixesApplied.push({
          type: 'security_fix',
          timestamp: new Date().toISOString(),
          success: true
        });
        
        this.log('Security vulnerabilities fixed');
        return { success: true, action: 'security_fixed' };
      }
      
      this.log('Dependencies are healthy');
      return { success: true, action: 'no_action_needed' };
    } catch (error) {
      this.log(`Dependency fix failed: ${error.message}`);
      this.fixesApplied.push({
        type: 'dependency_fix',
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message
      });
      
      return { success: false, error: error.message };
    }
  }

  async fixBuildErrors() {
    try {
      this.log('Attempting to fix build errors...');
      
      // First, try to fix any obvious issues
      await this.fixMergeConflicts();
      await this.fixLintErrors();
      
      // Try building again
      const { stdout, stderr } = await execAsync('npm run build', { 
        cwd: this.projectRoot,
        timeout: 120000 
      });
      
      if (stderr && stderr.includes('Error:')) {
        this.log(`Build still failing after fixes: ${stderr}`);
        return { success: false, error: stderr };
      }
      
      this.log('Build errors fixed successfully');
      this.fixesApplied.push({
        type: 'build_fix',
        timestamp: new Date().toISOString(),
        success: true
      });
      
      return { success: true, output: stdout };
    } catch (error) {
      this.log(`Build fix failed: ${error.message}`);
      this.fixesApplied.push({
        type: 'build_fix',
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message
      });
      
      return { success: false, error: error.message };
    }
  }

  async runAutoFix() {
    this.log('Starting auto-fix cycle...');
    
    const results = {
      timestamp: new Date().toISOString(),
      fixes: []
    };
    
    // Run all fix attempts
    const fixAttempts = [
      { name: 'Dependencies', fn: () => this.fixDependencies() },
      { name: 'Merge Conflicts', fn: () => this.fixMergeConflicts() },
      { name: 'Lint Errors', fn: () => this.fixLintErrors() },
      { name: 'Build Errors', fn: () => this.fixBuildErrors() }
    ];
    
    for (const attempt of fixAttempts) {
      try {
        const result = await attempt.fn();
        results.fixes.push({
          type: attempt.name,
          ...result
        });
      } catch (error) {
        this.log(`Error in ${attempt.name} fix: ${error.message}`);
        results.fixes.push({
          type: attempt.name,
          success: false,
          error: error.message
        });
      }
    }
    
    const successCount = results.fixes.filter(f => f.success).length;
    this.log(`Auto-fix cycle completed. ${successCount}/${results.fixes.length} fixes successful`);
    
    // Save report
    const reportFile = path.join(this.projectRoot, 'auto-fixer-report.json');
    fs.writeFileSync(reportFile, JSON.stringify({
      ...results,
      summary: {
        totalFixes: results.fixes.length,
        successfulFixes: successCount,
        failedFixes: results.fixes.length - successCount,
        status: successCount === results.fixes.length ? 'all_fixed' : 'partial_fix'
      },
      fixesApplied: this.fixesApplied
    }, null, 2));
    
    return results;
  }

  async start() {
    this.log('Auto Fixer started');
    
    // Run initial fix cycle
    await this.runAutoFix();
    
    // Set up interval for continuous fixing
    setInterval(async () => {
      await this.runAutoFix();
    }, 30 * 60 * 1000); // Every 30 minutes
  }
}

// Start the auto-fixer if this script is run directly
if (require.main === module) {
  const autoFixer = new AutoFixer();
  autoFixer.start().catch(error => {
    console.error('Auto Fixer failed to start:', error);
    process.exit(1);
  });
}

module.exports = AutoFixer;