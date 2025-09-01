#!/usr/bin/env node

/**
 * Intelligent Dependency Manager - PM2 Automation
 * Automatically analyzes dependencies, detects vulnerabilities, suggests updates, and manages conflicts
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentDependencyManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(
      this.projectRoot,
      'logs',
      'intelligent-dependency-manager.log'
    );
    this.dependencyAnalysis = path.join(
      this.projectRoot,
      'logs',
      'dependency-analysis.json'
    );
    this.vulnerabilityReport = path.join(
      this.projectRoot,
      'logs',
      'vulnerability-report.json'
    );
    this.updateRecommendations = path.join(
      this.projectRoot,
      'logs',
      'update-recommendations.json'
    );
    this.ensureLogsDirectory();

    this.dependencyHistory = [];
    this.vulnerabilityHistory = [];
    this.updateHistory = [];
    this.conflictHistory = [];

    this.riskLevels = {
      LOW: { score: 1, color: '🟢', action: 'MONITOR' },
      MEDIUM: { score: 2, color: '🟡', action: 'UPDATE_SOON' },
      HIGH: { score: 3, color: '🟠', action: 'UPDATE_URGENT' },
      CRITICAL: { score: 4, color: '🔴', action: 'UPDATE_IMMEDIATE' },
    };
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;

    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async analyzeDependencies() {
    this.log('Starting comprehensive dependency analysis...');

    try {
      const analysis = {
        timestamp: new Date().toISOString(),
        packageJson: await this.analyzePackageJson(),
        lockFiles: await this.analyzeLockFiles(),
        nodeModules: await this.analyzeNodeModules(),
        vulnerabilities: await this.scanVulnerabilities(),
        conflicts: await this.detectConflicts(),
        outdated: await this.checkOutdated(),
        recommendations: [],
      };

      // Generate intelligent recommendations
      analysis.recommendations = this.generateRecommendations(analysis);

      // Save analysis
      await this.saveDependencyAnalysis(analysis);

      this.log(
        `Dependency analysis completed. Found ${analysis.vulnerabilities.length} vulnerabilities, ${analysis.conflicts.length} conflicts`
      );

      return analysis;
    } catch (error) {
      this.log(`Dependency analysis failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async analyzePackageJson() {
    this.log('Analyzing package.json...');

    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      const packageContent = fs.readFileSync(packagePath, 'utf8');
      const packageData = JSON.parse(packageContent);

      const analysis = {
        dependencies: {
          count: Object.keys(packageData.dependencies || {}).length,
          packages: packageData.dependencies || {},
          totalSize: 0,
        },
        devDependencies: {
          count: Object.keys(packageData.devDependencies || {}).length,
          packages: packageData.devDependencies || {},
          totalSize: 0,
        },
        scripts: Object.keys(packageData.scripts || {}),
        engines: packageData.engines || {},
        hasWorkspaces: !!packageData.workspaces,
        hasPrivate: !!packageData.private,
      };

      // Calculate estimated sizes
      analysis.dependencies.totalSize = this.estimateDependencySize(
        analysis.dependencies.packages
      );
      analysis.devDependencies.totalSize = this.estimateDependencySize(
        analysis.devDependencies.packages
      );

      return analysis;
    } catch (error) {
      this.log(`Package.json analysis failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async analyzeLockFiles() {
    this.log('Analyzing lock files...');

    try {
      const lockFiles = [];
      const lockFileTypes = [
        'package-lock.json',
        'yarn.lock',
        'pnpm-lock.yaml',
      ];

      for (const lockFile of lockFileTypes) {
        const lockPath = path.join(this.projectRoot, lockFile);
        if (fs.existsSync(lockPath)) {
          const stats = fs.statSync(lockPath);
          lockFiles.push({
            name: lockFile,
            size: stats.size,
            sizeKB: Math.round(stats.size / 1024),
            lastModified: stats.mtime,
            exists: true,
          });
        } else {
          lockFiles.push({
            name: lockFile,
            exists: false,
          });
        }
      }

      return lockFiles;
    } catch (error) {
      this.log(`Lock file analysis failed: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async analyzeNodeModules() {
    this.log('Analyzing node_modules...');

    try {
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');

      if (!fs.existsSync(nodeModulesPath)) {
        return { exists: false, size: 0, packageCount: 0 };
      }

      const stats = fs.statSync(nodeModulesPath);
      const packageCount = this.countPackagesInNodeModules(nodeModulesPath);

      return {
        exists: true,
        size: stats.size,
        sizeMB: Math.round(stats.size / (1024 * 1024)),
        packageCount,
        lastModified: stats.mtime,
      };
    } catch (error) {
      this.log(`Node modules analysis failed: ${error.message}`, 'ERROR');
      return { exists: false, size: 0, packageCount: 0 };
    }
  }

  async scanVulnerabilities() {
    this.log('Scanning for vulnerabilities...');

    try {
      // Run npm audit
      const auditOutput = execSync('npm audit --json', {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe',
      });

      const auditData = JSON.parse(auditOutput);
      const vulnerabilities = [];

      if (auditData.vulnerabilities) {
        for (const [packageName, vulnData] of Object.entries(
          auditData.vulnerabilities
        )) {
          for (const vuln of vulnData.via) {
            if (vuln.type === 'npm') {
              vulnerabilities.push({
                package: packageName,
                severity: vuln.severity.toUpperCase(),
                title: vuln.title,
                description: vuln.description,
                cwe: vuln.cwe,
                cve: vuln.cve,
                cvss: vuln.cvss,
                recommendation: vuln.recommendation,
                riskScore: this.calculateRiskScore(vuln.severity),
                action: this.getActionForSeverity(vuln.severity),
              });
            }
          }
        }
      }

      // Sort by risk score (highest first)
      vulnerabilities.sort((a, b) => b.riskScore - a.riskScore);

      return vulnerabilities;
    } catch (error) {
      this.log(`Vulnerability scan failed: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async detectConflicts() {
    this.log('Detecting dependency conflicts...');

    try {
      const conflicts = [];

      // Check for peer dependency conflicts
      const peerCheckOutput = execSync('npm ls --depth=0', {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe',
      });

      const lines = peerCheckOutput.split('\n');
      for (const line of lines) {
        if (
          line.includes('UNMET PEER DEPENDENCY') ||
          line.includes('npm ERR!')
        ) {
          conflicts.push({
            type: 'PEER_DEPENDENCY',
            message: line.trim(),
            severity: 'MEDIUM',
            action: 'RESOLVE_MANUALLY',
          });
        }
      }

      // Check for version conflicts
      const versionConflicts = this.detectVersionConflicts();
      conflicts.push(...versionConflicts);

      return conflicts;
    } catch (error) {
      this.log(`Conflict detection failed: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async checkOutdated() {
    this.log('Checking for outdated packages...');

    try {
      const outdatedOutput = execSync('npm outdated --json', {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe',
      });

      const outdatedData = JSON.parse(outdatedOutput);
      const outdated = [];

      for (const [packageName, packageData] of Object.entries(outdatedData)) {
        const current = packageData.current;
        const latest = packageData.latest;
        const major = packageData.latest;

        const updateType = this.determineUpdateType(current, latest, major);
        const priority = this.calculateUpdatePriority(
          updateType,
          current,
          latest
        );

        outdated.push({
          package: packageName,
          current,
          latest,
          major,
          updateType,
          priority,
          action: this.getActionForUpdateType(updateType),
        });
      }

      // Sort by priority (highest first)
      outdated.sort((a, b) => b.priority - a.priority);

      return outdated;
    } catch (error) {
      this.log(`Outdated check failed: ${error.message}`, 'ERROR');
      return [];
    }
  }

  detectVersionConflicts() {
    const conflicts = [];

    try {
      // Check package-lock.json for version conflicts
      const lockPath = path.join(this.projectRoot, 'package-lock.json');
      if (fs.existsSync(lockPath)) {
        const lockContent = fs.readFileSync(lockPath, 'utf8');
        const lockData = JSON.parse(lockContent);

        // Check for multiple versions of the same package
        const packageVersions = {};

        if (lockData.dependencies) {
          for (const [packageName, packageData] of Object.entries(
            lockData.dependencies
          )) {
            if (!packageVersions[packageName]) {
              packageVersions[packageName] = [];
            }
            packageVersions[packageName].push(packageData.version);
          }
        }

        for (const [packageName, versions] of Object.entries(packageVersions)) {
          if (versions.length > 1 && new Set(versions).size > 1) {
            conflicts.push({
              type: 'VERSION_CONFLICT',
              package: packageName,
              versions: [...new Set(versions)],
              severity: 'HIGH',
              action: 'RESOLVE_VERSIONS',
            });
          }
        }
      }
    } catch (error) {
      this.log(`Version conflict detection failed: ${error.message}`, 'WARN');
    }

    return conflicts;
  }

  determineUpdateType(current, latest, major) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    const majorParts = major.split('.').map(Number);

    if (majorParts[0] > currentParts[0]) return 'MAJOR';
    if (latestParts[1] > currentParts[1]) return 'MINOR';
    if (latestParts[2] > currentParts[2]) return 'PATCH';
    return 'NONE';
  }

  calculateUpdatePriority(updateType, current, latest) {
    const basePriority = {
      MAJOR: 100,
      MINOR: 50,
      PATCH: 25,
      NONE: 0,
    };

    let priority = basePriority[updateType];

    // Add priority based on how old the current version is
    const currentDate = new Date();
    const daysSinceUpdate = Math.floor(
      (currentDate - new Date()) / (1000 * 60 * 60 * 24)
    );
    priority += Math.abs(daysSinceUpdate) * 0.1;

    return Math.round(priority);
  }

  calculateRiskScore(severity) {
    const scores = {
      low: 1,
      moderate: 2,
      high: 3,
      critical: 4,
    };

    return scores[severity.toLowerCase()] || 0;
  }

  getActionForSeverity(severity) {
    const actions = {
      low: 'MONITOR',
      moderate: 'UPDATE_SOON',
      high: 'UPDATE_URGENT',
      critical: 'UPDATE_IMMEDIATE',
    };

    return actions[severity.toLowerCase()] || 'MONITOR';
  }

  getActionForUpdateType(updateType) {
    const actions = {
      MAJOR: 'REVIEW_AND_UPDATE',
      MINOR: 'UPDATE_SAFE',
      PATCH: 'UPDATE_AUTO',
      NONE: 'NO_ACTION',
    };

    return actions[updateType] || 'NO_ACTION';
  }

  estimateDependencySize(packages) {
    // Rough estimation based on package count
    const packageCount = Object.keys(packages).length;
    return packageCount * 1024 * 1024; // 1MB per package estimate
  }

  countPackagesInNodeModules(nodeModulesPath) {
    let count = 0;

    try {
      const items = fs.readdirSync(nodeModulesPath);
      for (const item of items) {
        const itemPath = path.join(nodeModulesPath, item);
        const stats = fs.statSync(itemPath);

        if (stats.isDirectory()) {
          // Check if it's a package (has package.json)
          const packageJsonPath = path.join(itemPath, 'package.json');
          if (fs.existsSync(packageJsonPath)) {
            count++;
          }
        }
      }
    } catch (error) {
      this.log(`Error counting packages: ${error.message}`, 'WARN');
    }

    return count;
  }

  generateRecommendations(analysis) {
    const recommendations = [];

    // Vulnerability-based recommendations
    if (analysis.vulnerabilities.length > 0) {
      const criticalVulns = analysis.vulnerabilities.filter(
        v => v.severity === 'CRITICAL'
      );
      const highVulns = analysis.vulnerabilities.filter(
        v => v.severity === 'HIGH'
      );

      if (criticalVulns.length > 0) {
        recommendations.push({
          priority: 'CRITICAL',
          type: 'SECURITY',
          message: `Immediate action required: ${criticalVulns.length} critical vulnerabilities detected`,
          action: 'UPDATE_IMMEDIATE',
          packages: criticalVulns.map(v => v.package),
        });
      }

      if (highVulns.length > 0) {
        recommendations.push({
          priority: 'HIGH',
          type: 'SECURITY',
          message: `Urgent action required: ${highVulns.length} high-severity vulnerabilities detected`,
          action: 'UPDATE_URGENT',
          packages: highVulns.map(v => v.package),
        });
      }
    }

    // Update-based recommendations
    if (analysis.outdated.length > 0) {
      const majorUpdates = analysis.outdated.filter(
        p => p.updateType === 'MAJOR'
      );
      const minorUpdates = analysis.outdated.filter(
        p => p.updateType === 'MINOR'
      );

      if (majorUpdates.length > 0) {
        recommendations.push({
          priority: 'MEDIUM',
          type: 'UPDATES',
          message: `${majorUpdates.length} major updates available. Review for breaking changes.`,
          action: 'REVIEW_AND_UPDATE',
          packages: majorUpdates.map(p => p.package),
        });
      }

      if (minorUpdates.length > 0) {
        recommendations.push({
          priority: 'LOW',
          type: 'UPDATES',
          message: `${minorUpdates.length} minor updates available. Safe to update.`,
          action: 'UPDATE_SAFE',
          packages: minorUpdates.map(p => p.package),
        });
      }
    }

    // Conflict-based recommendations
    if (analysis.conflicts.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        type: 'CONFLICTS',
        message: `${analysis.conflicts.length} dependency conflicts detected. Resolve to prevent issues.`,
        action: 'RESOLVE_CONFLICTS',
        conflicts: analysis.conflicts,
      });
    }

    return recommendations;
  }

  async saveDependencyAnalysis(analysis) {
    try {
      fs.writeFileSync(
        this.dependencyAnalysis,
        JSON.stringify(analysis, null, 2)
      );
      this.log('Dependency analysis saved');
    } catch (error) {
      this.log(`Failed to save dependency analysis: ${error.message}`, 'ERROR');
    }
  }

  async generateReport() {
    this.log('Generating dependency management report...');

    const analysis = await this.analyzeDependencies();
    if (!analysis) return null;

    const report = {
      summary: {
        totalDependencies:
          analysis.packageJson.dependencies.count +
          analysis.packageJson.devDependencies.count,
        vulnerabilities: analysis.vulnerabilities.length,
        conflicts: analysis.conflicts.length,
        outdated: analysis.outdated.length,
        riskLevel: this.calculateOverallRiskLevel(analysis),
      },
      recommendations: analysis.recommendations,
      actions: this.generateActionPlan(analysis),
    };

    return report;
  }

  calculateOverallRiskLevel(analysis) {
    let riskScore = 0;

    // Add vulnerability risk
    for (const vuln of analysis.vulnerabilities) {
      riskScore += vuln.riskScore;
    }

    // Add conflict risk
    riskScore += analysis.conflicts.length * 2;

    // Add outdated risk
    for (const pkg of analysis.outdated) {
      if (pkg.updateType === 'MAJOR') riskScore += 3;
      else if (pkg.updateType === 'MINOR') riskScore += 1;
    }

    if (riskScore >= 20) return 'CRITICAL';
    if (riskScore >= 15) return 'HIGH';
    if (riskScore >= 10) return 'MEDIUM';
    if (riskScore >= 5) return 'LOW';
    return 'SAFE';
  }

  generateActionPlan(analysis) {
    const actions = [];

    // Immediate actions
    const criticalVulns = analysis.vulnerabilities.filter(
      v => v.severity === 'CRITICAL'
    );
    if (criticalVulns.length > 0) {
      actions.push({
        priority: 'IMMEDIATE',
        action: 'npm audit fix',
        description: 'Fix critical vulnerabilities',
        packages: criticalVulns.map(v => v.package),
      });
    }

    // High priority actions
    const highVulns = analysis.vulnerabilities.filter(
      v => v.severity === 'HIGH'
    );
    if (highVulns.length > 0) {
      actions.push({
        priority: 'HIGH',
        action: 'npm audit fix',
        description: 'Fix high-severity vulnerabilities',
        packages: highVulns.map(v => v.package),
      });
    }

    // Medium priority actions
    if (analysis.outdated.filter(p => p.updateType === 'PATCH').length > 0) {
      actions.push({
        priority: 'MEDIUM',
        action: 'npm update',
        description: 'Update patch versions safely',
      });
    }

    return actions;
  }

  async run() {
    try {
      this.log('Intelligent Dependency Manager started');

      // Generate comprehensive report
      const report = await this.generateReport();

      if (report) {
        this.log(`Dependency Management Report:`);
        this.log(`  - Total Dependencies: ${report.summary.totalDependencies}`);
        this.log(`  - Vulnerabilities: ${report.summary.vulnerabilities}`);
        this.log(`  - Conflicts: ${report.summary.conflicts}`);
        this.log(`  - Outdated: ${report.summary.outdated}`);
        this.log(`  - Overall Risk: ${report.summary.riskLevel}`);

        // Display top recommendations
        const topRecommendations = report.recommendations.slice(0, 3);
        if (topRecommendations.length > 0) {
          this.log('Top Recommendations:');
          topRecommendations.forEach((rec, index) => {
            this.log(`  ${index + 1}. ${rec.message} (${rec.priority})`);
          });
        }
      }

      // Schedule next analysis
      setTimeout(() => this.run(), 7200000); // 2 hours
    } catch (error) {
      this.log(
        `Intelligent Dependency Manager failed: ${error.message}`,
        'ERROR'
      );
      setTimeout(() => this.run(), 1800000); // 30 minutes on error
    }
  }
}

// Start the Intelligent Dependency Manager
const manager = new IntelligentDependencyManager();
manager.run();
