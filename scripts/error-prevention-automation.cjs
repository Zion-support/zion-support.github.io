#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🛡️ Error Prevention & Automation System');
console.log('Process:', process.env.PM2_PROCESS || 'unknown');

class ErrorPreventionAutomation {
  constructor() {
    this.logs = [];
    this.errors = [];
    this.fixes = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
    this.logs.push(logEntry);
  }

  async runCommand(command, description, options = {}) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd(),
        ...options
      });
      this.log(`✅ ${description} completed successfully`, 'success');
      return result;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      this.errors.push({ command, description, error: error.message });
      throw error;
    }
  }

  async checkDependencies() {
    try {
      this.log('Checking for dependency conflicts...');
      
      // Check for outdated packages
      const outdated = await this.runCommand('npm outdated --json', 'Dependency outdated check');
      
      // Check for security vulnerabilities
      const audit = await this.runCommand('npm audit --json', 'Security audit');
      
      // Check for peer dependency issues
      const peerIssues = await this.runCommand('npm ls --json', 'Peer dependency check');
      
      this.log('Dependency health check completed', 'success');
      return { outdated, audit, peerIssues };
    } catch (error) {
      this.log('Dependency check failed, will attempt fixes', 'warn');
      return null;
    }
  }

  async fixDependencies() {
    try {
      this.log('Attempting to fix dependency issues...');
      
      // Try to fix security vulnerabilities
      try {
        await this.runCommand('npm audit fix', 'Security vulnerability fix');
      } catch (error) {
        this.log('Standard audit fix failed, trying with legacy peer deps', 'warn');
        await this.runCommand('npm audit fix --legacy-peer-deps', 'Security fix with legacy peer deps');
      }
      
      // Update packages
      try {
        await this.runCommand('npm update', 'Package update');
      } catch (error) {
        this.log('Standard update failed, trying with legacy peer deps', 'warn');
        await this.runCommand('npm update --legacy-peer-deps', 'Package update with legacy peer deps');
      }
      
      this.log('Dependency fixes completed', 'success');
      this.fixes.push('dependencies');
    } catch (error) {
      this.log('Dependency fixes failed', 'error');
    }
  }

  async checkCodeQuality() {
    try {
      this.log('Running code quality checks...');
      
      // Run ESLint
      try {
        await this.runCommand('npm run lint', 'ESLint check');
      } catch (error) {
        this.log('ESLint found issues, will attempt auto-fix', 'warn');
        try {
          await this.runCommand('npm run lint -- --fix', 'ESLint auto-fix');
        } catch (fixError) {
          this.log('ESLint auto-fix failed', 'error');
        }
      }
      
      // Run TypeScript check
      try {
        await this.runCommand('npm run type-check', 'TypeScript check');
      } catch (error) {
        this.log('TypeScript check failed', 'warn');
      }
      
      // Run Prettier
      try {
        await this.runCommand('npm run format', 'Code formatting');
      } catch (error) {
        this.log('Code formatting failed', 'warn');
      }
      
      this.log('Code quality checks completed', 'success');
      return true;
    } catch (error) {
      this.log('Code quality checks failed', 'error');
      return false;
    }
  }

  async checkBuildHealth() {
    try {
      this.log('Checking build health...');
      
      // Try to build the project
      try {
        await this.runCommand('npm run build', 'Project build');
        this.log('Build successful', 'success');
        return true;
      } catch (error) {
        this.log('Build failed, attempting to identify issues', 'warn');
        
        // Check for common build issues
        await this.identifyBuildIssues();
        return false;
      }
    } catch (error) {
      this.log('Build health check failed', 'error');
      return false;
    }
  }

  async identifyBuildIssues() {
    try {
      this.log('Identifying build issues...');
      
      // Check for syntax errors in key files
      const keyFiles = [
        'next.config.js',
        'tsconfig.json',
        'package.json',
        'ecosystem.config.cjs'
      ];
      
      for (const file of keyFiles) {
        if (fs.existsSync(file)) {
          try {
            if (file.endsWith('.js') || file.endsWith('.cjs')) {
              require(path.resolve(file));
            } else if (file.endsWith('.json')) {
              JSON.parse(fs.readFileSync(file, 'utf8'));
            }
            this.log(`✅ ${file} syntax is valid`, 'success');
          } catch (error) {
            this.log(`❌ ${file} has syntax errors: ${error.message}`, 'error');
            this.errors.push({ file, error: error.message });
          }
        }
      }
      
      // Check for merge conflicts
      const filesWithConflicts = await this.findMergeConflicts();
      if (filesWithConflicts.length > 0) {
        this.log(`Found merge conflicts in: ${filesWithConflicts.join(', ')}`, 'error');
        this.errors.push({ type: 'merge_conflicts', files: filesWithConflicts });
      }
      
    } catch (error) {
      this.log('Build issue identification failed', 'error');
    }
  }

  async findMergeConflicts() {
    try {
      const result = execSync('grep -r "\s*?/g, '');
          
          // Remove conflict markers
          content = content.replace(/          
          // Write back the cleaned content
          fs.writeFileSync(file, content);
          
          this.log(`✅ Fixed merge conflicts in ${file}`, 'success');
          this.fixes.push(`merge_conflicts_${file}`);
        } catch (error) {
          this.log(`❌ Failed to fix merge conflicts in ${file}: ${error.message}`, 'error');
        }
      }
      
      return true;
    } catch (error) {
      this.log('Merge conflict fixing failed', 'error');
      return false;
    }
  }

  async runTests() {
    try {
      this.log('Running tests...');
      
      try {
        await this.runCommand('npm test', 'Test suite');
        this.log('Tests passed', 'success');
        return true;
      } catch (error) {
        this.log('Tests failed', 'warn');
        return false;
      }
    } catch (error) {
      this.log('Test execution failed', 'error');
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      process: process.env.PM2_PROCESS || 'unknown',
      summary: {
        totalChecks: this.logs.length,
        errors: this.errors.length,
        fixes: this.fixes.length,
        success: this.errors.length === 0
      },
      logs: this.logs,
      errors: this.errors,
      fixes: this.fixes,
      recommendations: this.generateRecommendations()
    };
    
    // Save report to file
    const reportFile = `error-prevention-report-${Date.now()}.json`;
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report saved to ${reportFile}`, 'info');
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.errors.length > 0) {
      recommendations.push('Review and fix identified errors manually');
    }
    
    if (this.fixes.includes('merge_conflicts')) {
      recommendations.push('Verify that merge conflict resolutions are correct');
    }
    
    if (this.fixes.includes('dependencies')) {
      recommendations.push('Test application thoroughly after dependency updates');
    }
    
    if (this.errors.some(e => e.description.includes('build'))) {
      recommendations.push('Investigate build failures and fix underlying issues');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('All systems are healthy, continue monitoring');
    }
    
    return recommendations;
  }

  async runFullAutomation() {
    try {
      this.log('Starting full error prevention automation...');
      
      // Fix merge conflicts first
      await this.fixMergeConflicts();
      
      // Check and fix dependencies
      await this.checkDependencies();
      await this.fixDependencies();
      
      // Check code quality
      await this.checkCodeQuality();
      
      // Check build health
      await this.checkBuildHealth();
      
      // Run tests
      await this.runTests();
      
      // Generate final report
      const report = await this.generateReport();
      
      this.log('Full automation completed successfully', 'success');
      return report;
      
    } catch (error) {
      this.log(`Full automation failed: ${error.message}`, 'error');
      const report = await this.generateReport();
      return report;
    }
  }
}

// Main execution
async function main() {
  const automation = new ErrorPreventionAutomation();
  
  try {
    const task = process.argv[2] || 'full';
    
    switch (task) {
      case 'full':
        await automation.runFullAutomation();
        break;
      case 'deps':
        await automation.checkDependencies();
        await automation.fixDependencies();
        break;
      case 'quality':
        await automation.checkCodeQuality();
        break;
      case 'build':
        await automation.checkBuildHealth();
        break;
      case 'tests':
        await automation.runTests();
        break;
      case 'conflicts':
        await automation.fixMergeConflicts();
        break;
      default:
        automation.log(`Unknown task: ${task}`, 'error');
        automation.log('Available tasks: full, deps, quality, build, tests, conflicts');
        break;
    }
    
    await automation.generateReport();
    process.exit(0);
    
  } catch (error) {
    automation.log(`Fatal error: ${error.message}`, 'error');
    await automation.generateReport();
    process.exit(1);
  }
}

// Handle process termination
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

// Run the main function
main().catch(error => {
  console.error(`Fatal error: ${error.message}`);
  process.exit(1);
});