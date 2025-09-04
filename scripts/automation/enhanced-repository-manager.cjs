#!/usr/bin/env node

/**
 * Enhanced Repository Manager
 * Advanced git workflow automation with intelligent conflict resolution
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class EnhancedRepositoryManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'enhanced-repository-manager.log');
    this.config = this.loadConfig();
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadConfig() {
    return {
      autoMerge: true,
      requireTests: true,
      requireReviews: false,
      maxOpenPRs: 10,
      autoCleanup: true,
      mergeConflictThreshold: 3,
      qualityGates: {
        minTestCoverage: 80,
        maxComplexity: 10,
        requireLinting: true,
        requireSecurityScan: true
      }
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(logEntry.trim());
    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async executeCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, options.args || [], {
        cwd: this.projectRoot,
        stdio: options.silent ? 'pipe' : 'inherit',
        shell: true
      });

      let stdout = '';
      let stderr = '';

      if (options.silent) {
        child.stdout.on('data', (data) => {
          stdout += data.toString();
        });
        child.stderr.on('data', (data) => {
          stderr += data.toString();
        });
      }

      child.on('close', (code) => {
        if (code === 0) {
          resolve(stdout);
        } else {
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
        }
      });

      child.on('error', (error) => {
        reject(error);
      });
    });
  }

  async getCurrentBranch() {
    try {
      const result = await this.executeCommand('git', { args: ['branch', '--show-current'], silent: true });
      return result.trim();
    } catch (error) {
      this.log(`Failed to get current branch: ${error.message}`, 'error');
      return null;
    }
  }

  async getBranchInfo() {
    try {
      const branches = await this.executeCommand('git', { args: ['branch', '-r'], silent: true });
      const localBranches = await this.executeCommand('git', { args: ['branch'], silent: true });
      
      return {
        remote: branches.split('\n').filter(b => b.trim()),
        local: localBranches.split('\n').filter(b => b.trim()),
        current: await this.getCurrentBranch()
      };
    } catch (error) {
      this.log(`Failed to get branch info: ${error.message}`, 'error');
      return { remote: [], local: [], current: null };
    }
  }

  async analyzeBranchHealth(branchName) {
    try {
      const conflicts = await this.checkMergeConflicts(branchName);
      const quality = await this.assessCodeQuality(branchName);
      const testCoverage = await this.getTestCoverage(branchName);
      const security = await this.checkSecurityVulnerabilities(branchName);
      
      return {
        branch: branchName,
        conflicts: conflicts,
        quality: quality,
        testCoverage: testCoverage,
        security: security,
        healthScore: this.calculateHealthScore(conflicts, quality, testCoverage, security)
      };
    } catch (error) {
      this.log(`Failed to analyze branch health for ${branchName}: ${error.message}`, 'error');
      return { branch: branchName, healthScore: 0, error: error.message };
    }
  }

  async checkMergeConflicts(branchName) {
    try {
      await this.executeCommand('git', { args: ['checkout', 'main'], silent: true });
      await this.executeCommand('git', { args: ['pull', 'origin', 'main'], silent: true });
      
      const mergeResult = await this.executeCommand('git', { 
        args: ['merge', '--no-commit', '--no-ff', `origin/${branchName}`], 
        silent: true 
      });
      
      const status = await this.executeCommand('git', { args: ['status', '--porcelain'], silent: true });
      const hasConflicts = status.includes('UU') || status.includes('AA');
      
      await this.executeCommand('git', { args: ['merge', '--abort'], silent: true });
      await this.executeCommand('git', { args: ['checkout', branchName], silent: true });
      
      return {
        hasConflicts: hasConflicts,
        conflictFiles: hasConflicts ? this.extractConflictFiles(status) : [],
        severity: hasConflicts ? 'high' : 'none'
      };
    } catch (error) {
      await this.executeCommand('git', { args: ['merge', '--abort'], silent: true });
      await this.executeCommand('git', { args: ['checkout', branchName], silent: true });
      
      return {
        hasConflicts: true,
        conflictFiles: [],
        severity: 'high',
        error: error.message
      };
    }
  }

  extractConflictFiles(status) {
    const lines = status.split('\n').filter(line => line.trim());
    return lines
      .filter(line => line.includes('UU') || line.includes('AA'))
      .map(line => line.split(' ').pop());
  }

  async assessCodeQuality(branchName) {
    try {
      const eslintResult = await this.executeCommand('npm', { args: ['run', 'lint'], silent: true });
      const tscResult = await this.executeCommand('npx', { args: ['tsc', '--noEmit'], silent: true });
      
      return {
        eslint: this.parseESLintOutput(eslintResult),
        typescript: this.parseTypeScriptOutput(tscResult),
        overall: 'good'
      };
    } catch (error) {
      this.log(`Failed to assess code quality: ${error.message}`, 'error');
      return { overall: 'unknown', error: error.message };
    }
  }

  parseESLintOutput(output) {
    const lines = output.split('\n');
    const errors = lines.filter(line => line.includes('error')).length;
    const warnings = lines.filter(line => line.includes('warning')).length;
    
    return {
      errors: errors,
      warnings: warnings,
      total: errors + warnings,
      severity: errors > 0 ? 'high' : warnings > 0 ? 'medium' : 'low'
    };
  }

  parseTypeScriptOutput(output) {
    const lines = output.split('\n');
    const errors = lines.filter(line => line.includes('error')).length;
    
    return {
      errors: errors,
      severity: errors > 0 ? 'high' : 'low'
    };
  }

  async getTestCoverage(branchName) {
    try {
      const testResult = await this.executeCommand('npm', { args: ['run', 'test:coverage'], silent: true });
      const coverageMatch = testResult.match(/(\d+(?:\.\d+)?)%/);
      const coverage = coverageMatch ? parseFloat(coverageMatch[1]) : 0;
      
      return {
        percentage: coverage,
        status: coverage >= 80 ? 'good' : coverage >= 60 ? 'fair' : 'poor',
        threshold: 80
      };
    } catch (error) {
      this.log(`Failed to get test coverage: ${error.message}`, 'error');
      return { percentage: 0, status: 'unknown', threshold: 80 };
    }
  }

  async checkSecurityVulnerabilities(branchName) {
    try {
      const auditResult = await this.executeCommand('npm', { args: ['audit', '--json'], silent: true });
      const audit = JSON.parse(auditResult);
      
      return {
        vulnerabilities: audit.metadata.vulnerabilities,
        riskLevel: this.calculateSecurityRisk(audit.metadata.vulnerabilities),
        recommendations: this.extractSecurityRecommendations(audit)
      };
    } catch (error) {
      this.log(`Failed to check security vulnerabilities: ${error.message}`, 'error');
      return { vulnerabilities: {}, riskLevel: 'unknown', recommendations: [] };
    }
  }

  calculateSecurityRisk(vulnerabilities) {
    if (vulnerabilities.critical > 0) return 'critical';
    if (vulnerabilities.high > 0) return 'high';
    if (vulnerabilities.moderate > 0) return 'medium';
    if (vulnerabilities.low > 0) return 'low';
    return 'none';
  }

  extractSecurityRecommendations(audit) {
    const recommendations = [];
    if (audit.advisories) {
      Object.values(audit.advisories).forEach(advisory => {
        if (advisory.recommendation) {
          recommendations.push(advisory.recommendation);
        }
      });
    }
    return recommendations;
  }

  calculateHealthScore(conflicts, quality, testCoverage, security) {
    let score = 100;
    
    if (conflicts.hasConflicts) {
      score -= 30;
    }
    
    if (quality.eslint && quality.eslint.errors > 0) {
      score -= quality.eslint.errors * 2;
    }
    
    if (testCoverage.percentage < testCoverage.threshold) {
      score -= (testCoverage.threshold - testCoverage.percentage);
    }
    
    if (security.riskLevel === 'critical') score -= 25;
    else if (security.riskLevel === 'high') score -= 15;
    else if (security.riskLevel === 'medium') score -= 10;
    
    return Math.max(0, Math.min(100, score));
  }

  async intelligentMerge(branchName, strategy = 'auto') {
    try {
      this.log(`Starting intelligent merge for branch: ${branchName}`);
      
      const health = await this.analyzeBranchHealth(branchName);
      if (health.healthScore < 80) {
        throw new Error(`Branch health score too low (${health.healthScore}) for merge`);
      }
      
      await this.executeCommand('git', { args: ['checkout', 'main'], silent: true });
      await this.executeCommand('git', { args: ['pull', 'origin', 'main'], silent: true });
      
      await this.executeCommand('git', { args: ['merge', '--no-ff', `origin/${branchName}`], silent: true });
      await this.executeCommand('git', { args: ['push', 'origin', 'main'], silent: true });
      
      if (this.config.autoCleanup) {
        await this.cleanupBranch(branchName);
      }
      
      this.log(`Successfully merged ${branchName}`, 'success');
      return { success: true, strategy: strategy };
      
    } catch (error) {
      this.log(`Failed to merge branch ${branchName}: ${error.message}`, 'error');
      return { success: false, error: error.message };
    }
  }

  async cleanupBranch(branchName) {
    try {
      await this.executeCommand('git', { args: ['push', 'origin', '--delete', branchName], silent: true });
      await this.executeCommand('git', { args: ['branch', '-D', branchName], silent: true });
      this.log(`Cleaned up branch: ${branchName}`, 'info');
    } catch (error) {
      this.log(`Failed to cleanup branch ${branchName}: ${error.message}`, 'warning');
    }
  }

  async monitorRepositoryHealth() {
    try {
      this.log('Starting repository health monitoring...');
      
      const branchInfo = await this.getBranchInfo();
      const healthReport = {
        timestamp: new Date().toISOString(),
        overallHealth: 0,
        branches: [],
        recommendations: []
      };
      
      let totalHealth = 0;
      let branchCount = 0;
      
      for (const branch of branchInfo.local) {
        const cleanBranch = branch.replace('*', '').trim();
        if (cleanBranch && cleanBranch !== 'main') {
          const health = await this.analyzeBranchHealth(cleanBranch);
          healthReport.branches.push(health);
          totalHealth += health.healthScore;
          branchCount++;
        }
      }
      
      healthReport.overallHealth = branchCount > 0 ? Math.round(totalHealth / branchCount) : 100;
      healthReport.recommendations = this.generateHealthRecommendations(healthReport);
      
      const reportPath = path.join(this.projectRoot, 'logs', 'repository-health-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
      
      this.log(`Repository health monitoring completed. Overall health: ${healthReport.overallHealth}/100`, 'info');
      return healthReport;
      
    } catch (error) {
      this.log(`Failed to monitor repository health: ${error.message}`, 'error');
      return null;
    }
  }

  generateHealthRecommendations(healthReport) {
    const recommendations = [];
    
    if (healthReport.overallHealth < 70) {
      recommendations.push('🔴 Critical: Repository health is poor. Review and fix issues immediately.');
    }
    
    if (healthReport.overallHealth < 85) {
      recommendations.push('🟡 Warning: Repository health needs improvement. Address quality issues.');
    }
    
    healthReport.branches.forEach(branch => {
      if (branch.healthScore < 60) {
        recommendations.push(`⚠️ Branch ${branch.branch} has critical issues and should be fixed or deleted.`);
      }
    });
    
    if (recommendations.length === 0) {
      recommendations.push('✅ Repository is in excellent health! Keep up the good work.');
    }
    
    return recommendations;
  }

  async run() {
    try {
      this.log('Enhanced Repository Manager started');
      
      const healthReport = await this.monitorRepositoryHealth();
      
      this.log('Enhanced Repository Manager completed successfully');
      return healthReport;
      
    } catch (error) {
      this.log(`Enhanced Repository Manager failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

if (require.main === module) {
  const manager = new EnhancedRepositoryManager();
  manager.run().catch(console.error);
}

module.exports = EnhancedRepositoryManager;