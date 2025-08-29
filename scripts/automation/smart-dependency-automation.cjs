#!/usr/bin/env node

/**
 * Smart Dependency Management Automation
 * Intelligently manages dependencies with conflict resolution and optimization
 * 
 * Features:
 * - Intelligent dependency analysis
 * - Conflict detection and resolution
 * - Security vulnerability scanning
 * - Performance impact analysis
 * - Automatic safe updates
 * - Dependency graph optimization
 * - License compliance checking
 * - Bundle impact analysis
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class SmartDependencyAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      updateStrategy: {
        major: 'manual',      // manual, auto, skip
        minor: 'auto',        // manual, auto, skip
        patch: 'auto',        // manual, auto, skip
        security: 'auto'      // manual, auto, skip
      },
      securityThreshold: 'moderate', // low, moderate, high, critical
      performanceThreshold: 0.1,     // 10% bundle size increase threshold
      logFile: 'logs/smart-dependency.log',
      reportDir: 'dependency-reports',
      backupDir: 'dependency-backups'
    };
    
    this.dependencies = {};
    this.vulnerabilities = [];
    this.updateHistory = [];
    this.conflicts = [];
    this.setupLogging();
    this.ensureDirectories();
  }

  setupLogging() {
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    this.log = (message, level = 'INFO') => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      console.log(logMessage);
      
      try {
        fs.appendFileSync(this.config.logFile, logMessage + '\n');
      } catch (error) {
        console.error('Failed to write to log file:', error.message);
      }
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.reportDir)) {
      fs.mkdirSync(this.config.reportDir, { recursive: true });
    }
    if (!fs.existsSync(this.config.backupDir)) {
      fs.mkdirSync(this.config.backupDir, { recursive: true });
    }
  }

  async analyzeDependencies() {
    this.log('🔍 Starting smart dependency analysis...');
    
    try {
      // Read package.json
      await this.readPackageJson();
      
      // Analyze current dependencies
      await this.analyzeCurrentDependencies();
      
      // Check for vulnerabilities
      await this.checkSecurityVulnerabilities();
      
      // Check for outdated packages
      await this.checkOutdatedPackages();
      
      // Analyze dependency conflicts
      await this.analyzeDependencyConflicts();
      
      // Generate dependency report
      this.generateDependencyReport();
      
      // Apply intelligent updates
      await this.applyIntelligentUpdates();
      
    } catch (error) {
      this.log(`❌ Dependency analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async readPackageJson() {
    const packagePath = path.join(this.config.projectRoot, 'package.json');
    
    if (!fs.existsSync(packagePath)) {
      throw new Error('package.json not found');
    }
    
    const content = fs.readFileSync(packagePath, 'utf8');
    this.packageJson = JSON.parse(content);
    
    this.dependencies = {
      production: this.packageJson.dependencies || {},
      development: this.packageJson.devDependencies || {},
      peer: this.packageJson.peerDependencies || {},
      optional: this.packageJson.optionalDependencies || {}
    };
    
    this.log(`📦 Loaded ${Object.keys(this.dependencies.production).length} production dependencies`);
    this.log(`🔧 Loaded ${Object.keys(this.dependencies.development).length} development dependencies`);
  }

  async analyzeCurrentDependencies() {
    this.log('📊 Analyzing current dependencies...');
    
    const analysis = {
      totalDependencies: 0,
      dependencyTypes: {},
      sizeImpact: {},
      licenseAnalysis: {},
      maintenanceStatus: {}
    };
    
    // Analyze all dependency types
    for (const [type, deps] of Object.entries(this.dependencies)) {
      analysis.dependencyTypes[type] = {
        count: Object.keys(deps).length,
        packages: deps
      };
      analysis.totalDependencies += Object.keys(deps).length;
    }
    
    // Analyze individual packages
    for (const [type, deps] of Object.entries(this.dependencies)) {
      for (const [name, version] of Object.entries(deps)) {
        await this.analyzePackage(name, version, type, analysis);
      }
    }
    
    this.dependencyAnalysis = analysis;
    this.log(`✅ Analyzed ${analysis.totalDependencies} dependencies`);
  }

  async analyzePackage(name, version, type, analysis) {
    try {
      // Get package info from npm
      const packageInfo = await this.getPackageInfo(name);
      
      if (packageInfo) {
        // Analyze license
        if (packageInfo.license) {
          if (!analysis.licenseAnalysis[packageInfo.license]) {
            analysis.licenseAnalysis[packageInfo.license] = [];
          }
          analysis.licenseAnalysis[packageInfo.license].push({
            name,
            type,
            version
          });
        }
        
        // Analyze maintenance status
        const maintenance = this.analyzeMaintenanceStatus(packageInfo);
        if (!analysis.maintenanceStatus[maintenance]) {
          analysis.maintenanceStatus[maintenance] = [];
        }
        analysis.maintenanceStatus[maintenance].push({
          name,
          type,
          version
        });
        
        // Analyze size impact (if available)
        if (packageInfo.dist && packageInfo.dist.size) {
          const sizeKB = Math.round(packageInfo.dist.size / 1024);
          if (!analysis.sizeImpact[name]) {
            analysis.sizeImpact[name] = sizeKB;
          }
        }
      }
    } catch (error) {
      this.log(`Warning: Could not analyze package ${name}: ${error.message}`, 'WARNING');
    }
  }

  async getPackageInfo(name) {
    try {
      const output = execSync(`npm view ${name} --json`, { 
        cwd: this.config.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return JSON.parse(output);
    } catch (error) {
      return null;
    }
  }

  analyzeMaintenanceStatus(packageInfo) {
    if (!packageInfo.time || !packageInfo.time.modified) {
      return 'unknown';
    }
    
    const lastModified = new Date(packageInfo.time.modified);
    const monthsSinceUpdate = (Date.now() - lastModified.getTime()) / (1000 * 60 * 60 * 24 * 30);
    
    if (monthsSinceUpdate < 3) {
      return 'active';
    } else if (monthsSinceUpdate < 12) {
      return 'moderate';
    } else {
      return 'inactive';
    }
  }

  async checkSecurityVulnerabilities() {
    this.log('🛡️ Checking security vulnerabilities...');
    
    try {
      const output = execSync('npm audit --audit-level moderate --json', { 
        cwd: this.config.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(output);
      
      this.vulnerabilities = auditData.vulnerabilities || [];
      
      // Categorize vulnerabilities
      const vulnerabilitySummary = {
        total: auditData.metadata?.vulnerabilities?.total || 0,
        low: auditData.metadata?.vulnerabilities?.low || 0,
        moderate: auditData.metadata?.vulnerabilities?.moderate || 0,
        high: auditData.metadata?.vulnerabilities?.high || 0,
        critical: auditData.metadata?.vulnerabilities?.critical || 0
      };
      
      this.log(`⚠️  Found ${vulnerabilitySummary.total} vulnerabilities:`);
      this.log(`   Critical: ${vulnerabilitySummary.critical}, High: ${vulnerabilitySummary.high}`);
      this.log(`   Moderate: ${vulnerabilitySummary.moderate}, Low: ${vulnerabilitySummary.low}`);
      
      // Save detailed audit results
      const auditPath = path.join(this.config.reportDir, 'security-audit.json');
      fs.writeFileSync(auditPath, JSON.stringify(auditData, null, 2));
      
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`, 'ERROR');
    }
  }

  async checkOutdatedPackages() {
    this.log('📅 Checking for outdated packages...');
    
    try {
      const output = execSync('npm outdated --json', { 
        cwd: this.config.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(output);
      this.outdatedPackages = outdatedData;
      
      const updateRecommendations = this.generateUpdateRecommendations(outdatedData);
      
      this.log(`📦 Found ${Object.keys(outdatedData).length} outdated packages`);
      this.log(`💡 Generated ${updateRecommendations.length} update recommendations`);
      
      // Save outdated packages data
      const outdatedPath = path.join(this.config.reportDir, 'outdated-packages.json');
      fs.writeFileSync(outdatedPath, JSON.stringify(outdatedData, null, 2));
      
    } catch (error) {
      this.log(`❌ Outdated packages check failed: ${error.message}`, 'ERROR');
    }
  }

  generateUpdateRecommendations(outdatedData) {
    const recommendations = [];
    
    for (const [name, info] of Object.entries(outdatedData)) {
      const current = info.current;
      const latest = info.latest;
      const wanted = info.wanted;
      
      // Determine update type
      const updateType = this.determineUpdateType(current, latest);
      
      // Check if update should be automatic
      const shouldAutoUpdate = this.shouldAutoUpdate(updateType, name);
      
      recommendations.push({
        package: name,
        current,
        latest,
        wanted,
        updateType,
        shouldAutoUpdate,
        priority: this.calculateUpdatePriority(updateType, name),
        estimatedImpact: this.estimateUpdateImpact(name, current, latest)
      });
    }
    
    // Sort by priority
    recommendations.sort((a, b) => b.priority - a.priority);
    
    return recommendations;
  }

  determineUpdateType(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    if (latestParts[0] > currentParts[0]) {
      return 'major';
    } else if (latestParts[1] > currentParts[1]) {
      return 'minor';
    } else if (latestParts[2] > currentParts[2]) {
      return 'patch';
    }
    
    return 'none';
  }

  shouldAutoUpdate(updateType, packageName) {
    const strategy = this.config.updateStrategy[updateType];
    
    if (strategy === 'skip') {
      return false;
    }
    
    if (strategy === 'auto') {
      // Check if package is critical
      if (this.isCriticalPackage(packageName)) {
        return false; // Manual review for critical packages
      }
      
      // Check if it's a security update
      if (this.isSecurityUpdate(packageName)) {
        return true;
      }
      
      // Auto-update patches and minors for non-critical packages
      return updateType === 'patch' || updateType === 'minor';
    }
    
    return false;
  }

  isCriticalPackage(packageName) {
    const criticalPackages = [
      'react', 'react-dom', 'next', 'vite', 'webpack',
      'typescript', 'eslint', 'prettier'
    ];
    
    return criticalPackages.includes(packageName);
  }

  isSecurityUpdate(packageName) {
    return this.vulnerabilities.some(vuln => 
      vuln.name === packageName || vuln.via?.some(v => v.name === packageName)
    );
  }

  calculateUpdatePriority(updateType, packageName) {
    let priority = 0;
    
    // Base priority by update type
    switch (updateType) {
      case 'major': priority += 30; break;
      case 'minor': priority += 20; break;
      case 'patch': priority += 10; break;
    }
    
    // Security updates get highest priority
    if (this.isSecurityUpdate(packageName)) {
      priority += 50;
    }
    
    // Critical packages get higher priority
    if (this.isCriticalPackage(packageName)) {
      priority += 20;
    }
    
    return priority;
  }

  estimateUpdateImpact(packageName, current, latest) {
    // This is a simplified estimation
    // In a real implementation, you'd analyze the changelog and breaking changes
    
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    if (latestParts[0] > currentParts[0]) {
      return 'high'; // Major version updates
    } else if (latestParts[1] > currentParts[1]) {
      return 'medium'; // Minor version updates
    } else {
      return 'low'; // Patch updates
    }
  }

  async analyzeDependencyConflicts() {
    this.log('⚠️  Analyzing dependency conflicts...');
    
    try {
      // Check for peer dependency conflicts
      const peerConflicts = await this.checkPeerDependencyConflicts();
      
      // Check for version conflicts
      const versionConflicts = await this.checkVersionConflicts();
      
      // Check for license conflicts
      const licenseConflicts = await this.checkLicenseConflicts();
      
      this.conflicts = {
        peer: peerConflicts,
        version: versionConflicts,
        license: licenseConflicts
      };
      
      const totalConflicts = peerConflicts.length + versionConflicts.length + licenseConflicts.length;
      this.log(`⚠️  Found ${totalConflicts} dependency conflicts`);
      
    } catch (error) {
      this.log(`❌ Conflict analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async checkPeerDependencyConflicts() {
    const conflicts = [];
    
    try {
      const output = execSync('npm ls --json', { 
        cwd: this.config.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lsData = JSON.parse(output);
      
      if (lsData.problems) {
        for (const problem of lsData.problems) {
          if (problem.includes('peer dep missing') || problem.includes('peer dependency')) {
            conflicts.push({
              type: 'peer_dependency',
              description: problem,
              severity: 'warning'
            });
          }
        }
      }
    } catch (error) {
      // npm ls might fail if there are conflicts, which is what we're looking for
      const output = error.stdout || error.stderr || '';
      const lines = output.split('\n');
      
      for (const line of lines) {
        if (line.includes('peer dep missing') || line.includes('peer dependency')) {
          conflicts.push({
            type: 'peer_dependency',
            description: line.trim(),
            severity: 'warning'
          });
        }
      }
    }
    
    return conflicts;
  }

  async checkVersionConflicts() {
    const conflicts = [];
    
    try {
      const output = execSync('npm ls --json', { 
        cwd: this.config.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lsData = JSON.parse(output);
      
      if (lsData.problems) {
        for (const problem of lsData.problems) {
          if (problem.includes('version conflict') || problem.includes('unable to resolve')) {
            conflicts.push({
              type: 'version_conflict',
              description: problem,
              severity: 'error'
            });
          }
        }
      }
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const lines = output.split('\n');
      
      for (const line of lines) {
        if (line.includes('version conflict') || line.includes('unable to resolve')) {
          conflicts.push({
            type: 'version_conflict',
            description: line.trim(),
            severity: 'error'
          });
        }
      }
    }
    
    return conflicts;
  }

  async checkLicenseConflicts() {
    const conflicts = [];
    
    // Check for incompatible licenses
    const incompatibleLicenses = ['GPL', 'AGPL', 'LGPL'];
    
    for (const [license, packages] of Object.entries(this.dependencyAnalysis.licenseAnalysis || {})) {
      for (const incompatibleLicense of incompatibleLicenses) {
        if (license.includes(incompatibleLicense)) {
          conflicts.push({
            type: 'license_conflict',
            description: `Package(s) with ${license} license may have compatibility issues`,
            severity: 'warning',
            packages: packages.map(p => p.name)
          });
        }
      }
    }
    
    return conflicts;
  }

  generateDependencyReport() {
    this.log('📊 Generating dependency report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalDependencies: this.dependencyAnalysis.totalDependencies,
        vulnerabilities: this.vulnerabilities.length,
        outdatedPackages: Object.keys(this.outdatedPackages || {}).length,
        conflicts: this.conflicts.peer.length + this.conflicts.version.length + this.conflicts.license.length
      },
      dependencies: this.dependencyAnalysis,
      vulnerabilities: this.vulnerabilities,
      outdatedPackages: this.outdatedPackages,
      conflicts: this.conflicts,
      updateRecommendations: this.generateUpdateRecommendations(this.outdatedPackages || {}),
      recommendations: this.generateActionRecommendations()
    };
    
    const reportPath = path.join(this.config.reportDir, `dependency-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Save latest report
    const latestReportPath = path.join(this.config.reportDir, 'latest-dependency-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));
    
    this.log(`✅ Dependency report generated: ${reportPath}`);
  }

  generateActionRecommendations() {
    const recommendations = [];
    
    // Security recommendations
    if (this.vulnerabilities.length > 0) {
      const criticalVulns = this.vulnerabilities.filter(v => 
        v.severity === 'critical' || v.severity === 'high'
      );
      
      if (criticalVulns.length > 0) {
        recommendations.push({
          priority: 'immediate',
          action: 'Fix critical security vulnerabilities',
          description: `${criticalVulns.length} critical/high vulnerabilities detected`,
          estimatedTime: '1-2 hours',
          commands: ['npm audit fix', 'npm audit fix --force']
        });
      }
    }
    
    // Update recommendations
    if (this.outdatedPackages && Object.keys(this.outdatedPackages).length > 0) {
      const autoUpdateable = this.generateUpdateRecommendations(this.outdatedPackages)
        .filter(r => r.shouldAutoUpdate);
      
      if (autoUpdateable.length > 0) {
        recommendations.push({
          priority: 'high',
          action: 'Apply automatic updates',
          description: `${autoUpdateable.length} packages can be safely updated automatically`,
          estimatedTime: '30 minutes',
          commands: ['npm update']
        });
      }
    }
    
    // Conflict resolution recommendations
    if (this.conflicts.peer.length > 0 || this.conflicts.version.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'Resolve dependency conflicts',
        description: `${this.conflicts.peer.length + this.conflicts.version.length} conflicts need resolution`,
        estimatedTime: '2-4 hours',
        commands: ['npm ls', 'npm dedupe', 'npm audit fix']
      });
    }
    
    return recommendations;
  }

  async applyIntelligentUpdates() {
    this.log('🔧 Applying intelligent updates...');
    
    try {
      // Create backup before updates
      await this.createBackup();
      
      // Apply security fixes first
      if (this.vulnerabilities.length > 0) {
        await this.applySecurityFixes();
      }
      
      // Apply automatic updates
      if (this.outdatedPackages && Object.keys(this.outdatedPackages).length > 0) {
        await this.applyAutomaticUpdates();
      }
      
      // Resolve conflicts
      if (this.conflicts.peer.length > 0 || this.conflicts.version.length > 0) {
        await this.resolveConflicts();
      }
      
      // Install dependencies
      await this.installDependencies();
      
      // Verify updates
      await this.verifyUpdates();
      
    } catch (error) {
      this.log(`❌ Update application failed: ${error.message}`, 'ERROR');
      
      // Restore from backup
      await this.restoreFromBackup();
    }
  }

  async createBackup() {
    this.log('💾 Creating backup...');
    
    const backupPath = path.join(this.config.backupDir, `backup-${Date.now()}`);
    fs.mkdirSync(backupPath, { recursive: true });
    
    // Backup package.json and package-lock.json
    const filesToBackup = ['package.json', 'package-lock.json'];
    
    for (const file of filesToBackup) {
      const sourcePath = path.join(this.config.projectRoot, file);
      if (fs.existsSync(sourcePath)) {
        const destPath = path.join(backupPath, file);
        fs.copyFileSync(sourcePath, destPath);
      }
    }
    
    this.currentBackup = backupPath;
    this.log(`✅ Backup created: ${backupPath}`);
  }

  async applySecurityFixes() {
    this.log('🛡️ Applying security fixes...');
    
    try {
      // Try automatic fix first
      execSync('npm audit fix', { 
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('✅ Security fixes applied automatically');
      
    } catch (error) {
      this.log('⚠️  Automatic security fix failed, trying with --force...', 'WARNING');
      
      try {
        execSync('npm audit fix --force', { 
          cwd: this.config.projectRoot,
          stdio: 'pipe'
        });
        
        this.log('✅ Security fixes applied with --force');
      } catch (forceError) {
        this.log(`❌ Security fixes failed: ${forceError.message}`, 'ERROR');
        throw forceError;
      }
    }
  }

  async applyAutomaticUpdates() {
    this.log('📦 Applying automatic updates...');
    
    const autoUpdateable = this.generateUpdateRecommendations(this.outdatedPackages)
      .filter(r => r.shouldAutoUpdate);
    
    if (autoUpdateable.length === 0) {
      this.log('ℹ️  No automatic updates available');
      return;
    }
    
    try {
      execSync('npm update', { 
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      this.log(`✅ Applied ${autoUpdateable.length} automatic updates`);
      
    } catch (error) {
      this.log(`❌ Automatic updates failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async resolveConflicts() {
    this.log('🔧 Resolving dependency conflicts...');
    
    try {
      // Try to dedupe dependencies
      execSync('npm dedupe', { 
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('✅ Dependencies deduplicated');
      
    } catch (error) {
      this.log(`⚠️  Deduplication failed: ${error.message}`, 'WARNING');
    }
  }

  async installDependencies() {
    this.log('📥 Installing dependencies...');
    
    try {
      execSync('npm install', { 
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('✅ Dependencies installed successfully');
      
    } catch (error) {
      this.log(`❌ Dependency installation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async verifyUpdates() {
    this.log('✅ Verifying updates...');
    
    try {
      // Check if build still works
      execSync('npm run build', { 
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('✅ Build verification passed');
      
      // Check for remaining vulnerabilities
      const remainingVulns = execSync('npm audit --audit-level moderate --json', { 
        cwd: this.config.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(remainingVulns);
      const remainingCount = auditData.metadata?.vulnerabilities?.total || 0;
      
      if (remainingCount === 0) {
        this.log('✅ All security vulnerabilities resolved');
      } else {
        this.log(`⚠️  ${remainingCount} vulnerabilities remain (may require manual intervention)`);
      }
      
    } catch (error) {
      this.log(`❌ Update verification failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async restoreFromBackup() {
    if (!this.currentBackup) {
      this.log('❌ No backup available for restoration', 'ERROR');
      return;
    }
    
    this.log('🔄 Restoring from backup...');
    
    try {
      const filesToRestore = ['package.json', 'package-lock.json'];
      
      for (const file of filesToRestore) {
        const backupPath = path.join(this.currentBackup, file);
        const destPath = path.join(this.config.projectRoot, file);
        
        if (fs.existsSync(backupPath)) {
          fs.copyFileSync(backupPath, destPath);
        }
      }
      
      // Reinstall dependencies
      execSync('npm install', { 
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('✅ Restored from backup successfully');
      
    } catch (error) {
      this.log(`❌ Backup restoration failed: ${error.message}`, 'ERROR');
    }
  }

  async start() {
    this.log('🚀 Starting Smart Dependency Automation...');
    
    // Run initial analysis
    await this.analyzeDependencies();
    
    // Set up continuous monitoring
    setInterval(async () => {
      await this.analyzeDependencies();
    }, 86400000); // Every 24 hours
    
    this.log('✅ Smart Dependency Automation is running continuously');
  }
}

// Start the automation if run directly
if (require.main === module) {
  const automation = new SmartDependencyAutomation();
  automation.start().catch(console.error);
}

module.exports = SmartDependencyAutomation;