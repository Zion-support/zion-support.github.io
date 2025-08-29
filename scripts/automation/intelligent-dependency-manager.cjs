#!/usr/bin/env node

/**
 * Intelligent Dependency Manager - Advanced PM2 Automation
 * 
 * Features:
 * - Smart dependency conflict resolution
 * - Automatic vulnerability scanning and fixing
 * - Dependency optimization and deduplication
 * - Intelligent version management
 * - Performance impact analysis
 * - Automatic backup and rollback
 * - Multi-package manager support
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class IntelligentDependencyManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-dependency-manager.log');
    this.dependencyCacheFile = path.join(this.projectRoot, 'logs', 'dependency-cache.json');
    this.vulnerabilityLogFile = path.join(this.projectRoot, 'logs', 'vulnerabilities.json');
    this.backupDir = path.join(this.projectRoot, 'dependency-backups');
    this.ensureLogsDirectory();
    this.ensureBackupDirectory();
    
    // Configuration
    this.config = {
      autoUpdate: true,
      vulnerabilityScanning: true,
      backupBeforeUpdate: true,
      maxBackups: 10,
      updateStrategy: 'conservative', // conservative, moderate, aggressive
      conflictResolution: true,
      performanceMonitoring: true,
      rollbackOnFailure: true
    };
    
    this.dependencyCache = new Map();
    this.vulnerabilities = [];
    this.updateHistory = [];
    this.performanceMetrics = [];
    
    this.loadDependencyCache();
    this.loadVulnerabilities();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  ensureBackupDirectory() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  loadDependencyCache() {
    try {
      if (fs.existsSync(this.dependencyCacheFile)) {
        const cacheData = JSON.parse(fs.readFileSync(this.dependencyCacheFile, 'utf8'));
        this.dependencyCache = new Map(cacheData);
      }
    } catch (error) {
      this.log(`Failed to load dependency cache: ${error.message}`, 'WARN');
    }
  }

  saveDependencyCache() {
    try {
      const cacheData = Array.from(this.dependencyCache.entries());
      fs.writeFileSync(this.dependencyCacheFile, JSON.stringify(cacheData, null, 2));
    } catch (error) {
      this.log(`Failed to save dependency cache: ${error.message}`, 'WARN');
    }
  }

  loadVulnerabilities() {
    try {
      if (fs.existsSync(this.vulnerabilityLogFile)) {
        this.vulnerabilities = JSON.parse(fs.readFileSync(this.vulnerabilityLogFile, 'utf8'));
      }
    } catch (error) {
      this.log(`Failed to load vulnerabilities: ${error.message}`, 'WARN');
    }
  }

  saveVulnerabilities() {
    try {
      fs.writeFileSync(this.vulnerabilityLogFile, JSON.stringify(this.vulnerabilities, null, 2));
    } catch (error) {
      this.log(`Failed to save vulnerabilities: ${error.message}`, 'WARN');
    }
  }

  async runIntelligentDependencyManagement() {
    this.log('Starting intelligent dependency management...');
    
    try {
      // 1. Analyze current dependency state
      const currentState = await this.analyzeDependencyState();
      
      // 2. Check for vulnerabilities
      if (this.config.vulnerabilityScanning) {
        const vulnerabilities = await this.scanForVulnerabilities();
        this.vulnerabilities = vulnerabilities;
        this.saveVulnerabilities();
      }
      
      // 3. Identify update opportunities
      const updateOpportunities = await this.identifyUpdateOpportunities(currentState);
      
      // 4. Resolve conflicts
      if (this.config.conflictResolution) {
        await this.resolveDependencyConflicts(currentState);
      }
      
      // 5. Perform intelligent updates
      if (updateOpportunities.length > 0) {
        await this.performIntelligentUpdates(updateOpportunities);
      }
      
      // 6. Optimize dependencies
      await this.optimizeDependencies();
      
      // 7. Generate dependency report
      await this.generateDependencyReport(currentState);
      
      this.log('Intelligent dependency management completed successfully');
      
    } catch (error) {
      this.log(`Dependency management failed: ${error.message}`, 'ERROR');
      await this.handleDependencyFailure(error);
    }
  }

  async analyzeDependencyState() {
    this.log('Analyzing dependency state...');
    
    const state = {
      timestamp: Date.now(),
      packageManager: await this.detectPackageManager(),
      dependencies: await this.analyzeDependencies(),
      conflicts: await this.detectConflicts(),
      outdated: await this.findOutdatedDependencies(),
      unused: await this.findUnusedDependencies(),
      performance: await this.analyzeDependencyPerformance()
    };
    
    return state;
  }

  async detectPackageManager() {
    const managers = [
      { name: 'npm', lockFile: 'package-lock.json' },
      { name: 'yarn', lockFile: 'yarn.lock' },
      { name: 'pnpm', lockFile: 'pnpm-lock.yaml' }
    ];
    
    for (const manager of managers) {
      if (fs.existsSync(path.join(this.projectRoot, manager.lockFile))) {
        return manager.name;
      }
    }
    
    return 'npm'; // Default to npm
  }

  async analyzeDependencies() {
    const packagePath = path.join(this.projectRoot, 'package.json');
    if (!fs.existsSync(packagePath)) {
      throw new Error('package.json not found');
    }
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      const dependencies = {
        production: packageJson.dependencies || {},
        development: packageJson.devDependencies || {},
        peer: packageJson.peerDependencies || {},
        optional: packageJson.optionalDependencies || {},
        total: 0
      };
      
      dependencies.total = Object.keys(dependencies.production).length + 
                         Object.keys(dependencies.development).length +
                         Object.keys(dependencies.peer).length +
                         Object.keys(dependencies.optional).length;
      
      return dependencies;
    } catch (error) {
      throw new Error(`Failed to parse package.json: ${error.message}`);
    }
  }

  async detectConflicts() {
    const conflicts = [];
    
    try {
      // Check for version conflicts in lock files
      const lockFiles = ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml'];
      
      for (const lockFile of lockFiles) {
        const lockPath = path.join(this.projectRoot, lockFile);
        if (fs.existsSync(lockPath)) {
          const conflicts = await this.analyzeLockFileConflicts(lockPath);
          conflicts.push(...conflicts);
        }
      }
      
      // Check for peer dependency conflicts
      const peerConflicts = await this.checkPeerDependencyConflicts();
      conflicts.push(...peerConflicts);
      
    } catch (error) {
      this.log(`Failed to detect conflicts: ${error.message}`, 'WARN');
    }
    
    return conflicts;
  }

  async analyzeLockFileConflicts(lockPath) {
    const conflicts = [];
    
    try {
      if (lockPath.endsWith('package-lock.json')) {
        const lockData = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
        
        // Check for duplicate packages with different versions
        const packageVersions = new Map();
        
        for (const [packageName, packageInfo] of Object.entries(lockData.dependencies || {})) {
          if (packageVersions.has(packageName)) {
            const existingVersion = packageVersions.get(packageName);
            if (existingVersion !== packageInfo.version) {
              conflicts.push({
                type: 'VERSION_CONFLICT',
                package: packageName,
                versions: [existingVersion, packageInfo.version],
                severity: 'HIGH'
              });
            }
          } else {
            packageVersions.set(packageName, packageInfo.version);
          }
        }
      }
      
    } catch (error) {
      this.log(`Failed to analyze lock file: ${error.message}`, 'WARN');
    }
    
    return conflicts;
  }

  async checkPeerDependencyConflicts() {
    const conflicts = [];
    
    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      const peerDeps = packageJson.peerDependencies || {};
      const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      for (const [peerDep, peerVersion] of Object.entries(peerDeps)) {
        if (deps[peerDep]) {
          const installedVersion = deps[peerDep];
          if (!this.satisfiesVersion(installedVersion, peerVersion)) {
            conflicts.push({
              type: 'PEER_DEPENDENCY_CONFLICT',
              package: peerDep,
              required: peerVersion,
              installed: installedVersion,
              severity: 'MEDIUM'
            });
          }
        }
      }
      
    } catch (error) {
      this.log(`Failed to check peer dependencies: ${error.message}`, 'WARN');
    }
    
    return conflicts;
  }

  satisfiesVersion(installedVersion, requiredVersion) {
    // Simple version satisfaction check
    // In a real implementation, you'd use a proper semver library
    try {
      if (requiredVersion.startsWith('^')) {
        const baseVersion = requiredVersion.substring(1);
        return installedVersion.startsWith(baseVersion.split('.')[0] + '.');
      } else if (requiredVersion.startsWith('~')) {
        const baseVersion = requiredVersion.substring(1);
        return installedVersion.startsWith(baseVersion.split('.').slice(0, 2).join('.') + '.');
      } else {
        return installedVersion === requiredVersion;
      }
    } catch (error) {
      return false;
    }
  }

  async findOutdatedDependencies() {
    const outdated = [];
    
    try {
      const result = execSync('npm outdated --json', { 
        stdio: 'pipe',
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      const outdatedData = JSON.parse(result);
      
      for (const [packageName, packageInfo] of Object.entries(outdatedData)) {
        outdated.push({
          package: packageName,
          current: packageInfo.current,
          wanted: packageInfo.wanted,
          latest: packageInfo.latest,
          location: packageInfo.location,
          severity: this.calculateUpdateSeverity(packageInfo.current, packageInfo.latest)
        });
      }
      
    } catch (error) {
      // npm outdated returns non-zero exit code when there are outdated packages
      if (error.status !== 1) {
        this.log(`Failed to check outdated dependencies: ${error.message}`, 'WARN');
      }
    }
    
    return outdated;
  }

  calculateUpdateSeverity(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    if (currentParts[0] < latestParts[0]) return 'CRITICAL'; // Major version
    if (currentParts[1] < latestParts[1]) return 'HIGH';     // Minor version
    if (currentParts[2] < latestParts[2]) return 'MEDIUM';   // Patch version
    
    return 'LOW';
  }

  async findUnusedDependencies() {
    const unused = [];
    
    try {
      // Use depcheck to find unused dependencies
      const result = execSync('npx depcheck --json', { 
        stdio: 'pipe',
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      const depcheckResult = JSON.parse(result);
      
      unused.push(...depcheckResult.dependencies.map(dep => ({
        package: dep,
        type: 'UNUSED_DEPENDENCY',
        severity: 'LOW'
      })));
      
      unused.push(...depcheckResult.devDependencies.map(dep => ({
        package: dep,
        type: 'UNUSED_DEV_DEPENDENCY',
        severity: 'LOW'
      })));
      
    } catch (error) {
      this.log(`Failed to find unused dependencies: ${error.message}`, 'WARN');
    }
    
    return unused;
  }

  async analyzeDependencyPerformance() {
    const performance = {
      installTime: 0,
      buildTime: 0,
      bundleSize: 0,
      memoryUsage: 0
    };
    
    try {
      // Measure install time
      const installStart = Date.now();
      execSync('npm install --dry-run', { stdio: 'pipe', cwd: this.projectRoot });
      performance.installTime = Date.now() - installStart;
      
      // Measure build time
      const buildStart = Date.now();
      execSync('npm run build', { stdio: 'pipe', cwd: this.projectRoot, timeout: 60000 });
      performance.buildTime = Date.now() - buildStart;
      
      // Measure bundle size
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        performance.bundleSize = this.calculateDirectorySize(distPath);
      }
      
      // Measure memory usage
      performance.memoryUsage = process.memoryUsage().heapUsed;
      
    } catch (error) {
      this.log(`Performance analysis failed: ${error.message}`, 'WARN');
    }
    
    return performance;
  }

  calculateDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item.name);
        
        if (item.isDirectory()) {
          totalSize += this.calculateDirectorySize(itemPath);
        } else if (item.isFile()) {
          totalSize += fs.statSync(itemPath).size;
        }
      }
    } catch (error) {
      this.log(`Failed to calculate directory size: ${error.message}`, 'WARN');
    }
    
    return totalSize;
  }

  async scanForVulnerabilities() {
    this.log('Scanning for vulnerabilities...');
    
    const vulnerabilities = [];
    
    try {
      // Use npm audit for vulnerability scanning
      const result = execSync('npm audit --json', { 
        stdio: 'pipe',
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      const auditResult = JSON.parse(result);
      
      for (const [packageName, packageVulns] of Object.entries(auditResult.vulnerabilities || {})) {
        for (const vuln of packageVulns.via) {
          vulnerabilities.push({
            package: packageName,
            title: vuln.title,
            severity: vuln.severity,
            cwe: vuln.cwe,
            cve: vuln.cve,
            description: vuln.description,
            recommendation: vuln.recommendation,
            timestamp: new Date().toISOString()
          });
        }
      }
      
    } catch (error) {
      // npm audit returns non-zero exit code when vulnerabilities are found
      if (error.status !== 1) {
        this.log(`Vulnerability scan failed: ${error.message}`, 'WARN');
      }
    }
    
    return vulnerabilities;
  }

  async identifyUpdateOpportunities(currentState) {
    const opportunities = [];
    
    // High severity vulnerabilities
    const criticalVulns = this.vulnerabilities.filter(v => v.severity === 'critical');
    for (const vuln of criticalVulns) {
      opportunities.push({
        type: 'SECURITY_UPDATE',
        package: vuln.package,
        reason: `Critical vulnerability: ${vuln.title}`,
        priority: 'CRITICAL',
        action: 'UPDATE'
      });
    }
    
    // Major version updates for production dependencies
    const majorUpdates = currentState.outdated.filter(dep => 
      dep.severity === 'CRITICAL' && 
      currentState.dependencies.production[dep.package]
    );
    
    for (const update of majorUpdates) {
      opportunities.push({
        type: 'MAJOR_UPDATE',
        package: update.package,
        reason: `Major version update available: ${update.current} → ${update.latest}`,
        priority: 'HIGH',
        action: 'UPDATE'
      });
    }
    
    // Minor and patch updates
    const minorUpdates = currentState.outdated.filter(dep => 
      ['HIGH', 'MEDIUM'].includes(dep.severity)
    );
    
    for (const update of minorUpdates) {
      opportunities.push({
        type: 'MINOR_UPDATE',
        package: update.package,
        reason: `Update available: ${update.current} → ${update.latest}`,
        priority: 'MEDIUM',
        action: 'UPDATE'
      });
    }
    
    // Remove unused dependencies
    for (const unused of currentState.unused) {
      opportunities.push({
        type: 'REMOVE_UNUSED',
        package: unused.package,
        reason: 'Unused dependency',
        priority: 'LOW',
        action: 'REMOVE'
      });
    }
    
    return opportunities;
  }

  async resolveDependencyConflicts(currentState) {
    this.log('Resolving dependency conflicts...');
    
    for (const conflict of currentState.conflicts) {
      try {
        switch (conflict.type) {
          case 'VERSION_CONFLICT':
            await this.resolveVersionConflict(conflict);
            break;
          case 'PEER_DEPENDENCY_CONFLICT':
            await this.resolvePeerDependencyConflict(conflict);
            break;
          default:
            this.log(`Unknown conflict type: ${conflict.type}`, 'WARN');
        }
      } catch (error) {
        this.log(`Failed to resolve conflict: ${error.message}`, 'ERROR');
      }
    }
  }

  async resolveVersionConflict(conflict) {
    this.log(`Resolving version conflict for ${conflict.package}`);
    
    try {
      // Try to resolve by updating to a compatible version
      const packagePath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Find the highest compatible version
      const versions = conflict.versions.sort();
      const targetVersion = versions[versions.length - 1];
      
      // Update package.json
      if (packageJson.dependencies?.[conflict.package]) {
        packageJson.dependencies[conflict.package] = targetVersion;
      }
      if (packageJson.devDependencies?.[conflict.package]) {
        packageJson.devDependencies[conflict.package] = targetVersion;
      }
      
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      
      // Reinstall dependencies
      execSync('npm install', { stdio: 'pipe', cwd: this.projectRoot });
      
      this.log(`Version conflict resolved for ${conflict.package}`);
      
    } catch (error) {
      this.log(`Failed to resolve version conflict: ${error.message}`, 'ERROR');
    }
  }

  async resolvePeerDependencyConflict(conflict) {
    this.log(`Resolving peer dependency conflict for ${conflict.package}`);
    
    try {
      // Install the required peer dependency version
      const installCommand = `npm install ${conflict.package}@${conflict.required}`;
      execSync(installCommand, { stdio: 'pipe', cwd: this.projectRoot });
      
      this.log(`Peer dependency conflict resolved for ${conflict.package}`);
      
    } catch (error) {
      this.log(`Failed to resolve peer dependency conflict: ${error.message}`, 'ERROR');
    }
  }

  async performIntelligentUpdates(opportunities) {
    this.log(`Performing ${opportunities.length} intelligent updates...`);
    
    // Sort opportunities by priority
    const sortedOpportunities = opportunities.sort((a, b) => {
      const priorityOrder = { 'CRITICAL': 0, 'HIGH': 1, 'MEDIUM': 2, 'LOW': 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    
    for (const opportunity of sortedOpportunities) {
      try {
        await this.performUpdate(opportunity);
      } catch (error) {
        this.log(`Failed to perform update for ${opportunity.package}: ${error.message}`, 'ERROR');
        
        if (this.config.rollbackOnFailure) {
          await this.rollbackUpdate(opportunity);
        }
      }
    }
  }

  async performUpdate(opportunity) {
    this.log(`Performing ${opportunity.action} for ${opportunity.package}: ${opportunity.reason}`);
    
    // Create backup before update
    if (this.config.backupBeforeUpdate) {
      await this.createBackup();
    }
    
    try {
      switch (opportunity.action) {
        case 'UPDATE':
          await this.updatePackage(opportunity.package);
          break;
        case 'REMOVE':
          await this.removePackage(opportunity.package);
          break;
        default:
          this.log(`Unknown action: ${opportunity.action}`, 'WARN');
      }
      
      // Update history
      this.updateHistory.push({
        timestamp: new Date().toISOString(),
        package: opportunity.package,
        action: opportunity.action,
        reason: opportunity.reason,
        success: true
      });
      
      this.log(`Successfully performed ${opportunity.action} for ${opportunity.package}`);
      
    } catch (error) {
      // Update history with failure
      this.updateHistory.push({
        timestamp: new Date().toISOString(),
        package: opportunity.package,
        action: opportunity.action,
        reason: opportunity.reason,
        success: false,
        error: error.message
      });
      
      throw error;
    }
  }

  async updatePackage(packageName) {
    try {
      // Get latest version
      const result = execSync(`npm view ${packageName} version`, { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const latestVersion = result.trim();
      
      // Update package
      const updateCommand = `npm install ${packageName}@${latestVersion}`;
      execSync(updateCommand, { stdio: 'pipe', cwd: this.projectRoot });
      
      this.log(`Updated ${packageName} to ${latestVersion}`);
      
    } catch (error) {
      throw new Error(`Failed to update ${packageName}: ${error.message}`);
    }
  }

  async removePackage(packageName) {
    try {
      const removeCommand = `npm uninstall ${packageName}`;
      execSync(removeCommand, { stdio: 'pipe', cwd: this.projectRoot });
      
      this.log(`Removed ${packageName}`);
      
    } catch (error) {
      throw new Error(`Failed to remove ${packageName}: ${error.message}`);
    }
  }

  async createBackup() {
    const backupName = `backup_${Date.now()}`;
    const backupPath = path.join(this.backupDir, backupName);
    
    try {
      fs.mkdirSync(backupPath, { recursive: true });
      
      // Copy package files
      const filesToBackup = ['package.json', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml'];
      
      for (const file of filesToBackup) {
        const sourcePath = path.join(this.projectRoot, file);
        if (fs.existsSync(sourcePath)) {
          const destPath = path.join(backupPath, file);
          fs.copyFileSync(sourcePath, destPath);
        }
      }
      
      // Clean up old backups
      await this.cleanupOldBackups();
      
      this.log(`Backup created: ${backupName}`);
      
    } catch (error) {
      this.log(`Failed to create backup: ${error.message}`, 'ERROR');
    }
  }

  async cleanupOldBackups() {
    try {
      const backups = fs.readdirSync(this.backupDir)
        .filter(item => fs.statSync(path.join(this.backupDir, item)).isDirectory())
        .sort()
        .reverse();
      
      if (backups.length > this.config.maxBackups) {
        const toRemove = backups.slice(this.config.maxBackups);
        
        for (const backup of toRemove) {
          const backupPath = path.join(this.backupDir, backup);
          fs.rmSync(backupPath, { recursive: true, force: true });
          this.log(`Removed old backup: ${backup}`);
        }
      }
      
    } catch (error) {
      this.log(`Failed to cleanup old backups: ${error.message}`, 'WARN');
    }
  }

  async rollbackUpdate(opportunity) {
    this.log(`Rolling back update for ${opportunity.package}`);
    
    try {
      // Find most recent backup
      const backups = fs.readdirSync(this.backupDir)
        .filter(item => fs.statSync(path.join(this.backupDir, item)).isDirectory())
        .sort()
        .reverse();
      
      if (backups.length > 0) {
        const latestBackup = backups[0];
        const backupPath = path.join(this.backupDir, latestBackup);
        
        // Restore package files
        const filesToRestore = ['package.json', 'package-lock.json'];
        
        for (const file of filesToRestore) {
          const sourcePath = path.join(backupPath, file);
          if (fs.existsSync(sourcePath)) {
            const destPath = path.join(this.projectRoot, file);
            fs.copyFileSync(sourcePath, destPath);
          }
        }
        
        // Reinstall dependencies
        execSync('npm install', { stdio: 'pipe', cwd: this.projectRoot });
        
        this.log(`Successfully rolled back update for ${opportunity.package}`);
      }
      
    } catch (error) {
      this.log(`Failed to rollback update: ${error.message}`, 'ERROR');
    }
  }

  async optimizeDependencies() {
    this.log('Optimizing dependencies...');
    
    try {
      // Deduplicate dependencies
      execSync('npm dedupe', { stdio: 'pipe', cwd: this.projectRoot });
      
      // Clean npm cache
      execSync('npm cache clean --force', { stdio: 'pipe' });
      
      // Prune unused packages
      execSync('npm prune', { stdio: 'pipe', cwd: this.projectRoot });
      
      this.log('Dependencies optimized successfully');
      
    } catch (error) {
      this.log(`Dependency optimization failed: ${error.message}`, 'WARN');
    }
  }

  async generateDependencyReport(currentState) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalDependencies: currentState.dependencies.total,
        vulnerabilities: this.vulnerabilities.length,
        conflicts: currentState.conflicts.length,
        outdated: currentState.outdated.length,
        unused: currentState.unused.length
      },
      vulnerabilities: this.vulnerabilities,
      conflicts: currentState.conflicts,
      outdated: currentState.outdated,
      unused: currentState.unused,
      performance: currentState.performance,
      recommendations: this.generateRecommendations(currentState)
    };
    
    const reportFile = path.join(this.projectRoot, 'logs', 'dependency-report.json');
    
    try {
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log('Dependency report generated successfully');
    } catch (error) {
      this.log(`Failed to generate dependency report: ${error.message}`, 'WARN');
    }
  }

  generateRecommendations(currentState) {
    const recommendations = [];
    
    if (this.vulnerabilities.length > 0) {
      recommendations.push('Address security vulnerabilities immediately');
    }
    
    if (currentState.conflicts.length > 0) {
      recommendations.push('Resolve dependency conflicts to prevent build issues');
    }
    
    if (currentState.outdated.length > 10) {
      recommendations.push('Consider updating dependencies in batches');
    }
    
    if (currentState.unused.length > 5) {
      recommendations.push('Remove unused dependencies to reduce bundle size');
    }
    
    if (currentState.performance.installTime > 60000) { // 1 minute
      recommendations.push('Dependency installation is slow, consider using faster package managers');
    }
    
    return recommendations;
  }

  async handleDependencyFailure(error) {
    this.log(`Handling dependency failure: ${error.message}`, 'ERROR');
    
    try {
      // Log failure details
      const failureLog = {
        timestamp: new Date().toISOString(),
        error: error.message,
        stack: error.stack,
        currentState: await this.analyzeDependencyState()
      };
      
      const failureFile = path.join(this.projectRoot, 'logs', 'dependency-failures.json');
      
      let failures = [];
      if (fs.existsSync(failureFile)) {
        failures = JSON.parse(fs.readFileSync(failureFile, 'utf8'));
      }
      
      failures.push(failureLog);
      
      // Keep only last 50 failures
      if (failures.length > 50) {
        failures = failures.slice(-50);
      }
      
      fs.writeFileSync(failureFile, JSON.stringify(failures, null, 2));
      
    } catch (logError) {
      this.log(`Failed to log dependency failure: ${logError.message}`, 'WARN');
    }
  }

  async start() {
    this.log('Starting Intelligent Dependency Manager...');
    
    // Initial dependency management
    await this.runIntelligentDependencyManagement();
    
    // Set up periodic dependency management
    setInterval(async () => {
      await this.runIntelligentDependencyManagement();
    }, 24 * 60 * 60 * 1000); // Every 24 hours
    
    this.log('Intelligent Dependency Manager started successfully');
  }

  getStats() {
    return {
      vulnerabilities: this.vulnerabilities.length,
      updateHistory: this.updateHistory.length,
      cacheSize: this.dependencyCache.size
    };
  }

  clearCache() {
    this.dependencyCache.clear();
    this.saveDependencyCache();
    this.log('Dependency cache cleared');
  }

  clearHistory() {
    this.updateHistory = [];
    this.log('Update history cleared');
  }
}

// Start the manager if run directly
if (require.main === module) {
  const manager = new IntelligentDependencyManager();
  manager.start().catch(error => {
    console.error('Failed to start Intelligent Dependency Manager:', error);
    process.exit(1);
  });
}

module.exports = IntelligentDependencyManager;