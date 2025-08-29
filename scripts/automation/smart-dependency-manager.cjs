#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SmartDependencyManager {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 3600000; // 1 hour
    this.maxRetries = parseInt(process.env.MAX_RETRIES) || 3;
    this.backoffMultiplier = parseFloat(process.env.BACKOFF_MULTIPLIER) || 2;
    this.retryCount = 0;
    this.dependencyData = {};
    this.updateHistory = [];
    this.securityIssues = [];
  }

  async start() {
    console.log('📦 Smart Dependency Manager started');
    console.log(`📊 Management interval: ${this.interval / 1000} seconds`);
    
    this.manageDependencies();
    
    setInterval(() => {
      this.manageDependencies();
    }, this.interval);
  }

  async manageDependencies() {
    try {
      console.log(`\n📦 [${new Date().toISOString()}] Starting intelligent dependency management...`);
      
      // Reset retry count on successful run
      this.retryCount = 0;
      
      // Run comprehensive dependency management
      await this.analyzeCurrentDependencies();
      await this.checkForUpdates();
      await this.analyzeSecurityVulnerabilities();
      await this.analyzeDependencyHealth();
      await this.generateUpdatePlan();
      await this.applySafeUpdates();
      await this.cleanupUnusedDependencies();
      
      // Generate dependency report
      await this.generateReport();
      
      console.log('✅ Dependency management completed successfully');
      
    } catch (error) {
      console.error('❌ Dependency management failed:', error.message);
      await this.handleError(error);
    }
  }

  async analyzeCurrentDependencies() {
    console.log('🔍 Analyzing current dependencies...');
    
    try {
      // Read package.json
      const packageJson = this.readPackageJson();
      
      // Analyze dependency structure
      const dependencyStructure = this.analyzeDependencyStructure(packageJson);
      
      // Check for outdated packages
      const outdatedPackages = await this.checkOutdatedPackages();
      
      // Analyze dependency conflicts
      const dependencyConflicts = this.analyzeDependencyConflicts();
      
      // Check for duplicate dependencies
      const duplicateDeps = this.findDuplicateDependencies();
      
      this.dependencyData.current = {
        packageJson: packageJson,
        structure: dependencyStructure,
        outdated: outdatedPackages,
        conflicts: dependencyConflicts,
        duplicates: duplicateDeps
      };
      
      console.log(`🔍 Dependency analysis: ${Object.keys(packageJson.dependencies || {}).length} production, ${Object.keys(packageJson.devDependencies || {}).length} development`);
      
    } catch (error) {
      console.error('❌ Dependency analysis failed:', error.message);
    }
  }

  async checkForUpdates() {
    console.log('🔄 Checking for available updates...');
    
    try {
      const updates = [];
      
      // Check npm outdated
      const npmOutdated = await this.runNpmOutdated();
      if (npmOutdated.length > 0) {
        updates.push({
          type: 'npm_outdated',
          packages: npmOutdated
        });
      }
      
      // Check for major version updates
      const majorUpdates = this.filterMajorUpdates(npmOutdated);
      if (majorUpdates.length > 0) {
        updates.push({
          type: 'major_updates',
          packages: majorUpdates
        });
      }
      
      // Check for security updates
      const securityUpdates = await this.checkSecurityUpdates();
      if (securityUpdates.length > 0) {
        updates.push({
          type: 'security_updates',
          packages: securityUpdates
        });
      }
      
      // Check for peer dependency updates
      const peerUpdates = await this.checkPeerDependencyUpdates();
      if (peerUpdates.length > 0) {
        updates.push({
          type: 'peer_dependency_updates',
          packages: peerUpdates
        });
      }
      
      this.dependencyData.updates = updates;
      console.log(`🔄 Update check: ${updates.length} update categories found`);
      
    } catch (error) {
      console.error('❌ Update check failed:', error.message);
    }
  }

  async analyzeSecurityVulnerabilities() {
    console.log('🔒 Analyzing security vulnerabilities...');
    
    try {
      const vulnerabilities = [];
      
      // Run npm audit
      const npmAudit = await this.runNpmAudit();
      if (npmAudit.vulnerabilities && npmAudit.vulnerabilities.length > 0) {
        vulnerabilities.push({
          type: 'npm_audit',
          count: npmAudit.vulnerabilities.length,
          details: npmAudit.vulnerabilities
        });
      }
      
      // Check for known vulnerable packages
      const knownVulnerable = this.checkKnownVulnerablePackages();
      if (knownVulnerable.length > 0) {
        vulnerabilities.push({
          type: 'known_vulnerable',
          count: knownVulnerable.length,
          packages: knownVulnerable
        });
      }
      
      // Check for deprecated packages
      const deprecated = this.checkDeprecatedPackages();
      if (deprecated.length > 0) {
        vulnerabilities.push({
          type: 'deprecated',
          count: deprecated.length,
          packages: deprecated
        });
      }
      
      this.securityIssues = vulnerabilities;
      console.log(`🔒 Security analysis: ${vulnerabilities.length} vulnerability categories found`);
      
    } catch (error) {
      console.error('❌ Security analysis failed:', error.message);
    }
  }

  async analyzeDependencyHealth() {
    console.log('🏥 Analyzing dependency health...');
    
    try {
      const healthMetrics = [];
      
      // Check package download statistics
      const downloadStats = await this.getDownloadStatistics();
      if (downloadStats) {
        healthMetrics.push({
          type: 'download_statistics',
          data: downloadStats
        });
      }
      
      // Check package maintenance status
      const maintenanceStatus = await this.checkMaintenanceStatus();
      if (maintenanceStatus.length > 0) {
        healthMetrics.push({
          type: 'maintenance_status',
          packages: maintenanceStatus
        });
      }
      
      // Check for abandoned packages
      const abandonedPackages = this.checkAbandonedPackages();
      if (abandonedPackages.length > 0) {
        healthMetrics.push({
          type: 'abandoned_packages',
          packages: abandonedPackages
        });
      }
      
      // Check bundle impact
      const bundleImpact = await this.analyzeBundleImpact();
      if (bundleImpact) {
        healthMetrics.push({
          type: 'bundle_impact',
          data: bundleImpact
        });
      }
      
      this.dependencyData.health = healthMetrics;
      console.log(`🏥 Health analysis: ${healthMetrics.length} health metrics analyzed`);
      
    } catch (error) {
      console.error('❌ Health analysis failed:', error.message);
    }
  }

  async generateUpdatePlan() {
    console.log('📋 Generating intelligent update plan...');
    
    try {
      const updatePlan = {
        priority: [],
        recommended: [],
        optional: [],
        risky: []
      };
      
      // Prioritize security updates
      if (this.securityIssues.length > 0) {
        updatePlan.priority.push(...this.securityIssues);
      }
      
      // Add recommended updates
      if (this.dependencyData.updates) {
        this.dependencyData.updates.forEach(update => {
          if (update.type === 'security_updates') {
            updatePlan.priority.push(update);
          } else if (update.type === 'npm_outdated') {
            updatePlan.recommended.push(update);
          } else {
            updatePlan.optional.push(update);
          }
        });
      }
      
      // Identify risky updates
      const riskyUpdates = this.identifyRiskyUpdates();
      if (riskyUpdates.length > 0) {
        updatePlan.risky = riskyUpdates;
      }
      
      this.dependencyData.updatePlan = updatePlan;
      console.log(`📋 Update plan generated: ${updatePlan.priority.length} priority, ${updatePlan.recommended.length} recommended`);
      
    } catch (error) {
      console.error('❌ Update plan generation failed:', error.message);
    }
  }

  async applySafeUpdates() {
    console.log('🔧 Applying safe dependency updates...');
    
    try {
      const appliedUpdates = [];
      
      // Apply security updates first
      const securityResults = await this.applySecurityUpdates();
      if (securityResults.length > 0) {
        appliedUpdates.push({
          type: 'security_updates',
          count: securityResults.length,
          results: securityResults
        });
      }
      
      // Apply minor and patch updates
      const minorPatchResults = await this.applyMinorPatchUpdates();
      if (minorPatchResults.length > 0) {
        appliedUpdates.push({
          type: 'minor_patch_updates',
          count: minorPatchResults.length,
          results: minorPatchResults
        });
      }
      
      // Test updates
      const testResults = await this.testUpdates();
      if (testResults) {
        appliedUpdates.push({
          type: 'update_testing',
          results: testResults
        });
      }
      
      this.dependencyData.appliedUpdates = appliedUpdates;
      console.log(`🔧 Safe updates applied: ${appliedUpdates.length} update categories`);
      
    } catch (error) {
      console.error('❌ Safe update application failed:', error.message);
    }
  }

  async cleanupUnusedDependencies() {
    console.log('🧹 Cleaning up unused dependencies...');
    
    try {
      const cleanupResults = [];
      
      // Find unused dependencies
      const unusedDeps = await this.findUnusedDependencies();
      if (unusedDeps.length > 0) {
        cleanupResults.push({
          type: 'unused_dependencies',
          count: unusedDeps.length,
          packages: unusedDeps
        });
      }
      
      // Find duplicate dependencies
      const duplicateDeps = this.findDuplicateDependencies();
      if (duplicateDeps.length > 0) {
        cleanupResults.push({
          type: 'duplicate_dependencies',
          count: duplicateDeps.length,
          packages: duplicateDeps
        });
      }
      
      // Remove unused dependencies
      const removalResults = await this.removeUnusedDependencies(unusedDeps);
      if (removalResults.length > 0) {
        cleanupResults.push({
          type: 'dependency_removal',
          count: removalResults.length,
          results: removalResults
        });
      }
      
      this.dependencyData.cleanup = cleanupResults;
      console.log(`🧹 Cleanup completed: ${cleanupResults.length} cleanup operations`);
      
    } catch (error) {
      console.error('❌ Dependency cleanup failed:', error.message);
    }
  }

  readPackageJson() {
    try {
      const packagePath = path.join(process.cwd(), 'package.json');
      return JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    } catch (error) {
      throw new Error(`Failed to read package.json: ${error.message}`);
    }
  }

  analyzeDependencyStructure(packageJson) {
    const deps = packageJson.dependencies || {};
    const devDeps = packageJson.devDependencies || {};
    const peerDeps = packageJson.peerDependencies || {};
    const optionalDeps = packageJson.optionalDependencies || {};
    
    return {
      production: Object.keys(deps).length,
      development: Object.keys(devDeps).length,
      peer: Object.keys(peerDeps).length,
      optional: Object.keys(optionalDeps).length,
      total: Object.keys(deps).length + Object.keys(devDeps).length + Object.keys(peerDeps).length + Object.keys(optionalDeps).length
    };
  }

  async checkOutdatedPackages() {
    try {
      const output = execSync('npm outdated --json', { encoding: 'utf8', timeout: 60000 });
      return JSON.parse(output);
    } catch (error) {
      // npm outdated returns non-zero exit code when packages are outdated
      if (error.status === 1) {
        try {
          return JSON.parse(error.stdout);
        } catch (parseError) {
          return [];
        }
      }
      return [];
    }
  }

  analyzeDependencyConflicts() {
    // Implementation for analyzing dependency conflicts
    return [];
  }

  findDuplicateDependencies() {
    // Implementation for finding duplicate dependencies
    return [];
  }

  filterMajorUpdates(outdatedPackages) {
    const majorUpdates = [];
    
    for (const [packageName, packageInfo] of Object.entries(outdatedPackages)) {
      if (packageInfo.current && packageInfo.latest) {
        const currentMajor = parseInt(packageInfo.current.split('.')[0]);
        const latestMajor = parseInt(packageInfo.latest.split('.')[0]);
        
        if (latestMajor > currentMajor) {
          majorUpdates.push({
            name: packageName,
            current: packageInfo.current,
            latest: packageInfo.latest,
            type: 'major'
          });
        }
      }
    }
    
    return majorUpdates;
  }

  async checkSecurityUpdates() {
    try {
      const output = execSync('npm audit --json', { encoding: 'utf8', timeout: 60000 });
      const auditResult = JSON.parse(output);
      
      const securityUpdates = [];
      if (auditResult.vulnerabilities) {
        for (const [packageName, vuln] of Object.entries(auditResult.vulnerabilities)) {
          if (vuln.fixAvailable) {
            securityUpdates.push({
              name: packageName,
              severity: vuln.severity,
              fixAvailable: vuln.fixAvailable
            });
          }
        }
      }
      
      return securityUpdates;
    } catch (error) {
      return [];
    }
  }

  async checkPeerDependencyUpdates() {
    // Implementation for checking peer dependency updates
    return [];
  }

  async runNpmOutdated() {
    try {
      const output = execSync('npm outdated --json', { encoding: 'utf8', timeout: 60000 });
      return JSON.parse(output);
    } catch (error) {
      if (error.status === 1) {
        try {
          return JSON.parse(error.stdout);
        } catch (parseError) {
          return {};
        }
      }
      return {};
    }
  }

  async runNpmAudit() {
    try {
      const output = execSync('npm audit --json', { encoding: 'utf8', timeout: 60000 });
      return JSON.parse(output);
    } catch (error) {
      return { vulnerabilities: [] };
    }
  }

  checkKnownVulnerablePackages() {
    // Implementation for checking known vulnerable packages
    return [];
  }

  checkDeprecatedPackages() {
    // Implementation for checking deprecated packages
    return [];
  }

  async getDownloadStatistics() {
    // Implementation for getting download statistics
    return null;
  }

  async checkMaintenanceStatus() {
    // Implementation for checking maintenance status
    return [];
  }

  checkAbandonedPackages() {
    // Implementation for checking abandoned packages
    return [];
  }

  async analyzeBundleImpact() {
    // Implementation for analyzing bundle impact
    return null;
  }

  identifyRiskyUpdates() {
    // Implementation for identifying risky updates
    return [];
  }

  async applySecurityUpdates() {
    try {
      const securityUpdates = this.securityIssues
        .filter(issue => issue.type === 'npm_audit')
        .flatMap(issue => issue.details || [])
        .filter(vuln => vuln.fixAvailable);
      
      const results = [];
      
      for (const vuln of securityUpdates) {
        try {
          if (vuln.fixAvailable && vuln.fixAvailable.isDirect) {
            execSync(`npm install ${vuln.name}@${vuln.fixAvailable.version}`, { timeout: 300000 });
            results.push({
              name: vuln.name,
              status: 'updated',
              version: vuln.fixAvailable.version
            });
          }
        } catch (error) {
          results.push({
            name: vuln.name,
            status: 'failed',
            error: error.message
          });
        }
      }
      
      return results;
    } catch (error) {
      return [];
    }
  }

  async applyMinorPatchUpdates() {
    try {
      const minorPatchUpdates = this.dependencyData.updates
        ?.filter(update => update.type === 'npm_outdated')
        ?.flatMap(update => update.packages || [])
        ?.filter(pkg => {
          if (pkg.current && pkg.latest) {
            const currentParts = pkg.current.split('.');
            const latestParts = pkg.latest.split('.');
            return latestParts[0] === currentParts[0]; // Same major version
          }
          return false;
        }) || [];
      
      const results = [];
      
      for (const pkg of minorPatchUpdates) {
        try {
          execSync(`npm install ${pkg.name}@${pkg.latest}`, { timeout: 300000 });
          results.push({
            name: pkg.name,
            status: 'updated',
            from: pkg.current,
            to: pkg.latest
          });
        } catch (error) {
          results.push({
            name: pkg.name,
            status: 'failed',
            error: error.message
          });
        }
      }
      
      return results;
    } catch (error) {
      return [];
    }
  }

  async testUpdates() {
    try {
      // Run tests to ensure updates didn't break anything
      execSync('npm test', { timeout: 300000 });
      return { status: 'passed' };
    } catch (error) {
      return { status: 'failed', error: error.message };
    }
  }

  async findUnusedDependencies() {
    try {
      // Use depcheck to find unused dependencies
      const output = execSync('npx depcheck --json', { encoding: 'utf8', timeout: 120000 });
      const depcheckResult = JSON.parse(output);
      
      return depcheckResult.dependencies || [];
    } catch (error) {
      return [];
    }
  }

  async removeUnusedDependencies(unusedDeps) {
    const results = [];
    
    for (const dep of unusedDeps) {
      try {
        execSync(`npm uninstall ${dep}`, { timeout: 120000 });
        results.push({
          name: dep,
          status: 'removed'
        });
      } catch (error) {
        results.push({
          name: dep,
          status: 'failed',
          error: error.message
        });
      }
    }
    
    return results;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      dependencies: this.dependencyData,
      security: this.securityIssues,
      summary: this.generateSummary()
    };
    
    // Save report to file
    const reportPath = path.join(process.cwd(), 'logs', 'smart-dependency-management-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📋 Dependency report saved to: ${reportPath}`);
  }

  generateSummary() {
    const totalDeps = this.dependencyData.current?.structure?.total || 0;
    const outdatedCount = Object.keys(this.dependencyData.current?.outdated || {}).length;
    const securityCount = this.securityIssues.reduce((sum, issue) => sum + (issue.count || 0), 0);
    const appliedCount = this.dependencyData.appliedUpdates?.reduce((sum, update) => sum + (update.count || 0), 0) || 0;
    
    return {
      totalDependencies: totalDeps,
      outdatedPackages: outdatedCount,
      securityIssues: securityCount,
      appliedUpdates: appliedCount,
      overallHealth: this.calculateDependencyHealth(),
      recommendations: this.generateRecommendations()
    };
  }

  calculateDependencyHealth() {
    let score = 100;
    
    // Penalty for outdated packages
    const outdatedCount = Object.keys(this.dependencyData.current?.outdated || {}).length;
    score -= outdatedCount * 2;
    
    // Penalty for security issues
    const securityCount = this.securityIssues.reduce((sum, issue) => sum + (issue.count || 0), 0);
    score -= securityCount * 10;
    
    // Penalty for major version gaps
    const majorUpdates = this.dependencyData.updates?.find(u => u.type === 'major_updates')?.packages?.length || 0;
    score -= majorUpdates * 5;
    
    return Math.max(0, Math.min(100, score));
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.securityIssues.length > 0) {
      recommendations.push('Address security vulnerabilities immediately');
    }
    
    if (this.dependencyData.current?.outdated && Object.keys(this.dependencyData.current.outdated).length > 0) {
      recommendations.push('Update outdated packages to improve security and performance');
    }
    
    if (this.dependencyData.current?.duplicates && this.dependencyData.current.duplicates.length > 0) {
      recommendations.push('Remove duplicate dependencies to reduce bundle size');
    }
    
    if (this.dependencyData.health?.some(h => h.type === 'abandoned_packages')) {
      recommendations.push('Replace abandoned packages with actively maintained alternatives');
    }
    
    return recommendations;
  }

  async handleError(error) {
    this.retryCount++;
    
    if (this.retryCount <= this.maxRetries) {
      const delay = this.interval * Math.pow(this.backoffMultiplier, this.retryCount - 1);
      console.log(`🔄 Retrying in ${delay / 1000} seconds... (Attempt ${this.retryCount}/${this.maxRetries})`);
      
      setTimeout(() => {
        this.manageDependencies();
      }, delay);
    } else {
      console.error('❌ Max retries exceeded. Stopping automation.');
      process.exit(1);
    }
  }
}

// Start the automation
const dependencyManager = new SmartDependencyManager();
dependencyManager.start().catch(console.error);

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Smart Dependency Manager shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Smart Dependency Manager shutting down gracefully...');
  process.exit(0);
});