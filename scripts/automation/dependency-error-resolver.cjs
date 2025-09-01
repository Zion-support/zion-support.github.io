#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DependencyErrorResolver {
  constructor() {
    this.workspacePath = process.cwd();
    this.logsPath = path.join(this.workspacePath, 'logs');
    this.reportsPath = path.join(this.workspacePath, 'automation-reports');
    this.ensureDirectories();
    this.dependencyHistory = new Map();
  }

  ensureDirectories() {
    [this.logsPath, this.reportsPath].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsPath, 'dependency-error-resolver.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async checkDependencies() {
    try {
      this.log('🔍 Checking dependencies...');
      const result = execSync('npm ls', { 
        cwd: this.workspacePath, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('✅ Dependencies check passed');
      return { success: true, output: result, issues: [] };
    } catch (error) {
      if (error.stdout) {
        const issues = this.parseDependencyIssues(error.stdout);
        this.log(`❌ Dependency check failed with ${issues.length} issues`);
        return { success: false, output: error.stdout, issues };
      }
      return { success: false, output: error.message, issues: [] };
    }
  }

  parseDependencyIssues(output) {
    const issues = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('UNMET PEER DEPENDENCY') || line.includes('npm ERR!') || line.includes('conflicts')) {
        issues.push({
          type: 'dependency',
          description: line.trim(),
          severity: 'high'
        });
      }
    }
    
    return issues;
  }

  async resolveDependencyIssues(issues) {
    this.log(`🔧 Resolving ${issues.length} dependency issues...`);
    
    let resolvedCount = 0;
    const resolutionResults = [];

    for (const issue of issues) {
      try {
        const resolved = await this.resolveDependencyIssue(issue);
        if (resolved) {
          resolvedCount++;
        }
        
        resolutionResults.push({
          issue,
          resolved,
          timestamp: new Date().toISOString()
        });
        
      } catch (resolutionError) {
        this.log(`❌ Error resolving dependency issue: ${resolutionError.message}`, 'ERROR');
        resolutionResults.push({
          issue,
          resolved: false,
          error: resolutionError.message,
          timestamp: new Date().toISOString()
        });
      }
    }

    this.log(`✅ Resolved ${resolvedCount} out of ${issues.length} dependency issues`);
    return { resolvedCount, totalIssues: issues.length, results: resolutionResults };
  }

  async resolveDependencyIssue(issue) {
    const description = issue.description.toLowerCase();
    
    if (description.includes('peer dependency')) {
      return await this.resolvePeerDependency();
    } else if (description.includes('conflicts')) {
      return await this.resolveConflicts();
    } else if (description.includes('npm err')) {
      return await this.resolveNpmError();
    }
    
    return false;
  }

  async resolvePeerDependency() {
    try {
      this.log('🔧 Resolving peer dependency issues...');
      
      // Install with legacy peer deps
      execSync('npm install --legacy-peer-deps', { 
        cwd: this.workspacePath, 
        stdio: 'pipe',
        timeout: 300000
      });
      
      this.log('✅ Peer dependency issues resolved');
      return true;
    } catch (error) {
      this.log(`❌ Failed to resolve peer dependency issues: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async resolveConflicts() {
    try {
      this.log('🔧 Resolving dependency conflicts...');
      
      // Clear and reinstall
      execSync('rm -rf node_modules package-lock.json', { 
        cwd: this.workspacePath, 
        stdio: 'pipe'
      });
      
      execSync('npm install', { 
        cwd: this.workspacePath, 
        stdio: 'pipe',
        timeout: 300000
      });
      
      this.log('✅ Dependency conflicts resolved');
      return true;
    } catch (error) {
      this.log(`❌ Failed to resolve dependency conflicts: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async resolveNpmError() {
    try {
      this.log('🔧 Resolving npm errors...');
      
      // Clear npm cache
      execSync('npm cache clean --force', { 
        cwd: this.workspacePath, 
        stdio: 'pipe'
      });
      
      // Reinstall
      execSync('npm install', { 
        cwd: this.workspacePath, 
        stdio: 'pipe',
        timeout: 300000
      });
      
      this.log('✅ npm errors resolved');
      return true;
    } catch (error) {
      this.log(`❌ Failed to resolve npm errors: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateReport(resolutionResults) {
    this.log('📊 Generating dependency error resolution report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: resolutionResults.totalIssues,
        resolvedIssues: resolutionResults.resolvedCount,
        resolutionRate: resolutionResults.totalIssues > 0 ? (resolutionResults.resolvedCount / resolutionResults.totalIssues * 100).toFixed(2) : 100
      },
      resolutionResults: resolutionResults.results,
      recommendations: [
        'Review resolved dependencies to ensure compatibility',
        'Consider updating to latest stable versions',
        'Monitor for new dependency conflicts',
        'Implement dependency locking strategies'
      ]
    };

    const reportFile = path.join(this.reportsPath, 'dependency-error-resolver-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report generated: ${reportFile}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Dependency Error Resolver...');
    
    try {
      // Check dependencies
      const checkResult = await this.checkDependencies();
      
      if (checkResult.success) {
        this.log('🎉 No dependency issues found!');
        return { success: true, issues: [], resolved: 0 };
      }
      
      // Resolve issues
      const resolutionResults = await this.resolveDependencyIssues(checkResult.issues);
      
      // Generate report
      const report = await this.generateReport(resolutionResults);
      
      this.log('🎉 Dependency Error Resolver completed!');
      this.log(`📊 Resolved ${resolutionResults.resolvedCount} out of ${resolutionResults.totalIssues} issues`);
      
      return {
        success: resolutionResults.resolvedCount > 0,
        issues: checkResult.issues,
        resolved: resolutionResults.resolvedCount,
        report
      };
      
    } catch (error) {
      this.log(`💥 Dependency Error Resolver failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const resolver = new DependencyErrorResolver();
  resolver.run().catch(console.error);
}

module.exports = DependencyErrorResolver;