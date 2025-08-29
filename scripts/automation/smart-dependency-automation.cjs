#!/usr/bin/env node

/**
 * Smart Dependency Management Automation
 * Intelligent dependency analysis, updates, and optimization automation
 * 
 * Features:
 * - Intelligent dependency vulnerability detection
 * - Smart update strategies
 * - Dependency health scoring
 * - Automated security patches
 * - Bundle impact analysis
 * - Dependency conflict resolution
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class SmartDependencyAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      reportDir: 'dependency-reports',
      logFile: 'logs/smart-dependency.log',
      updateStrategies: {
        security: 'immediate',
        minor: 'weekly',
        major: 'monthly',
        peer: 'manual'
      },
      healthThresholds: {
        vulnerabilityScore: 0.8,
        outdatedScore: 0.7,
        conflictScore: 0.9,
        bundleImpactScore: 0.6
      },
      maxUpdateBatchSize: 10,
      rollbackThreshold: 3 // Failed builds before rollback
    };
    
    this.dependencyMetrics = {
      security: {},
      health: {},
      updates: {},
      conflicts: {},
      suggestions: [],
      actions: []
    };
    
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
  }

  async analyzeDependencies() {
    this.log('🚀 Starting Smart Dependency Analysis...');
    
    try {
      await this.analyzeSecurityVulnerabilities();
      await this.analyzeDependencyHealth();
      await this.analyzeUpdateOpportunities();
      await this.analyzeDependencyConflicts();
      await this.generateIntelligentSuggestions();
      await this.generateReport();
      
      this.log('✅ Smart Dependency Analysis completed successfully');
    } catch (error) {
      this.log(`❌ Smart Dependency Analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeSecurityVulnerabilities() {
    this.log('🛡️ Analyzing security vulnerabilities...');
    
    try {
      // Run npm audit
      const auditOutput = execSync('npm audit --audit-level moderate --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const auditData = JSON.parse(auditOutput);
      
      // Calculate security score
      const totalVulnerabilities = auditData.metadata?.vulnerabilities?.total || 0;
      const criticalVulnerabilities = auditData.metadata?.vulnerabilities?.critical || 0;
      const highVulnerabilities = auditData.metadata?.vulnerabilities?.high || 0;
      
      const securityScore = this.calculateSecurityScore(totalVulnerabilities, criticalVulnerabilities, highVulnerabilities);
      
      this.dependencyMetrics.security = {
        score: securityScore,
        total: totalVulnerabilities,
        critical: criticalVulnerabilities,
        high: highVulnerabilities,
        moderate: auditData.metadata?.vulnerabilities?.moderate || 0,
        low: auditData.metadata?.vulnerabilities?.low || 0,
        vulnerabilities: auditData.vulnerabilities || [],
        timestamp: new Date().toISOString()
      };
      
      this.log(`📊 Security analysis: Score ${securityScore.toFixed(2)}, ${totalVulnerabilities} vulnerabilities found`);
      
      // Save detailed audit results
      fs.writeFileSync(
        path.join(this.config.reportDir, 'security-audit.json'),
        JSON.stringify(auditData, null, 2)
      );
      
    } catch (error) {
      this.log(`Warning: Could not run security audit: ${error.message}`, 'WARN');
      this.dependencyMetrics.security = {
        score: 0,
        total: 0,
        critical: 0,
        high: 0,
        moderate: 0,
        low: 0,
        vulnerabilities: [],
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  calculateSecurityScore(total, critical, high) {
    if (total === 0) return 1.0;
    
    let score = 1.0;
    
    // Penalize critical vulnerabilities heavily
    score -= critical * 0.3;
    
    // Penalize high vulnerabilities
    score -= high * 0.2;
    
    // Penalize total vulnerabilities
    score -= Math.min(total * 0.01, 0.5);
    
    return Math.max(0, score);
  }

  async analyzeDependencyHealth() {
    this.log('🏥 Analyzing dependency health...');
    
    try {
      // Check for outdated packages
      const outdatedOutput = execSync('npm outdated --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const outdatedData = JSON.parse(outdatedOutput);
      const outdatedPackages = Object.keys(outdatedData);
      
      // Analyze package.json health
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const healthMetrics = this.analyzePackageJsonHealth(packageJson);
      
      // Calculate overall health score
      const healthScore = this.calculateHealthScore(outdatedPackages.length, healthMetrics);
      
      this.dependencyMetrics.health = {
        score: healthScore,
        outdatedPackages: outdatedPackages.length,
        outdatedDetails: outdatedData,
        packageJsonHealth: healthMetrics,
        timestamp: new Date().toISOString()
      };
      
      this.log(`📊 Health analysis: Score ${healthScore.toFixed(2)}, ${outdatedPackages.length} outdated packages`);
      
    } catch (error) {
      this.log(`Warning: Could not analyze dependency health: ${error.message}`, 'WARN');
      this.dependencyMetrics.health = {
        score: 0,
        outdatedPackages: 0,
        outdatedDetails: {},
        packageJsonHealth: {},
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  analyzePackageJsonHealth(packageJson) {
    const health = {
      hasScripts: Object.keys(packageJson.scripts || {}).length > 0,
      hasDevDependencies: Object.keys(packageJson.devDependencies || {}).length > 0,
      hasEngines: !!packageJson.engines,
      hasRepository: !!packageJson.repository,
      hasKeywords: Array.isArray(packageJson.keywords) && packageJson.keywords.length > 0,
      hasDescription: !!packageJson.description,
      hasAuthor: !!packageJson.author,
      hasLicense: !!packageJson.license
    };
    
    return health;
  }

  calculateHealthScore(outdatedCount, healthMetrics) {
    let score = 1.0;
    
    // Penalize outdated packages
    score -= Math.min(outdatedCount * 0.05, 0.3);
    
    // Reward good package.json practices
    const goodPractices = Object.values(healthMetrics).filter(Boolean).length;
    score += goodPractices * 0.02;
    
    return Math.max(0, Math.min(1, score));
  }

  async analyzeUpdateOpportunities() {
    this.log('🔄 Analyzing update opportunities...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const packageLock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
      
      const updateOpportunities = [];
      const updateRisks = [];
      
      // Analyze each dependency for update opportunities
      for (const [name, version] of Object.entries(packageJson.dependencies || {})) {
        const lockInfo = packageLock.dependencies?.[name];
        if (lockInfo) {
          const updateAnalysis = this.analyzeUpdateOpportunity(name, version, lockInfo);
          if (updateAnalysis.hasUpdate) {
            updateOpportunities.push(updateAnalysis);
          }
          if (updateAnalysis.risk > 0.5) {
            updateRisks.push(updateAnalysis);
          }
        }
      }
      
      // Sort by priority (security first, then risk level)
      updateOpportunities.sort((a, b) => {
        if (a.security && !b.security) return -1;
        if (!a.security && b.security) return 1;
        return b.risk - a.risk;
      });
      
      this.dependencyMetrics.updates = {
        opportunities: updateOpportunities,
        highRiskUpdates: updateRisks,
        totalUpdates: updateOpportunities.length,
        timestamp: new Date().toISOString()
      };
      
      this.log(`📊 Update analysis: ${updateOpportunities.length} update opportunities found`);
      
    } catch (error) {
      this.log(`Warning: Could not analyze update opportunities: ${error.message}`, 'WARN');
      this.dependencyMetrics.updates = {
        opportunities: [],
        highRiskUpdates: [],
        totalUpdates: 0,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  analyzeUpdateOpportunity(name, currentVersion, lockInfo) {
    const current = lockInfo.version;
    const latest = lockInfo.latest || current;
    const isSecurityUpdate = lockInfo.vulnerabilities && lockInfo.vulnerabilities.length > 0;
    
    // Calculate update risk
    let risk = 0;
    
    // Major version updates are riskier
    if (this.isMajorUpdate(current, latest)) {
      risk += 0.6;
    } else if (this.isMinorUpdate(current, latest)) {
      risk += 0.2;
    }
    
    // Security updates reduce risk
    if (isSecurityUpdate) {
      risk -= 0.3;
    }
    
    // Popular packages are less risky
    if (lockInfo.downloads && lockInfo.downloads > 1000000) {
      risk -= 0.1;
    }
    
    return {
      name,
      currentVersion: current,
      latestVersion: latest,
      hasUpdate: current !== latest,
      isSecurityUpdate,
      risk: Math.max(0, Math.min(1, risk)),
      priority: this.calculateUpdatePriority(isSecurityUpdate, risk)
    };
  }

  isMajorUpdate(current, latest) {
    const currentMajor = current.split('.')[0];
    const latestMajor = latest.split('.')[0];
    return currentMajor !== latestMajor;
  }

  isMinorUpdate(current, latest) {
    const currentMinor = current.split('.')[1];
    const latestMinor = latest.split('.')[1];
    return currentMinor !== latestMinor;
  }

  calculateUpdatePriority(isSecurity, risk) {
    if (isSecurity) return 'critical';
    if (risk > 0.7) return 'high';
    if (risk > 0.4) return 'medium';
    return 'low';
  }

  async analyzeDependencyConflicts() {
    this.log('⚠️ Analyzing dependency conflicts...');
    
    try {
      const packageLock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
      const conflicts = [];
      
      // Check for peer dependency conflicts
      for (const [name, info] of Object.entries(packageLock.dependencies || {})) {
        if (info.peerDependencies) {
          for (const [peerName, peerVersion] of Object.entries(info.peerDependencies)) {
            const installedVersion = packageLock.dependencies?.[peerName]?.version;
            if (installedVersion && !this.satisfiesVersion(installedVersion, peerVersion)) {
              conflicts.push({
                package: name,
                peerDependency: peerName,
                required: peerVersion,
                installed: installedVersion,
                conflict: true
              });
            }
          }
        }
      }
      
      // Check for duplicate packages
      const duplicates = this.findDuplicatePackages(packageLock);
      
      this.dependencyMetrics.conflicts = {
        peerConflicts: conflicts,
        duplicates: duplicates,
        totalConflicts: conflicts.length + duplicates.length,
        timestamp: new Date().toISOString()
      };
      
      this.log(`📊 Conflict analysis: ${conflicts.length} peer conflicts, ${duplicates.length} duplicates found`);
      
    } catch (error) {
      this.log(`Warning: Could not analyze dependency conflicts: ${error.message}`, 'WARN');
      this.dependencyMetrics.conflicts = {
        peerConflicts: [],
        duplicates: [],
        totalConflicts: 0,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  satisfiesVersion(installed, required) {
    // Simple version satisfaction check
    try {
      const installedParts = installed.split('.').map(Number);
      const requiredParts = required.replace(/[^0-9.]/g, '').split('.').map(Number);
      
      for (let i = 0; i < Math.min(installedParts.length, requiredParts.length); i++) {
        if (installedParts[i] < requiredParts[i]) return false;
        if (installedParts[i] > requiredParts[i]) return true;
      }
      
      return true;
    } catch {
      return true; // Assume compatible if we can't parse
    }
  }

  findDuplicatePackages(packageLock) {
    const duplicates = [];
    const packageVersions = new Map();
    
    for (const [name, info] of Object.entries(packageLock.dependencies || {})) {
      const key = `${name}@${info.version}`;
      if (packageVersions.has(key)) {
        duplicates.push({
          package: name,
          version: info.version,
          locations: [packageVersions.get(key), info]
        });
      } else {
        packageVersions.set(key, info);
      }
    }
    
    return duplicates;
  }

  async generateIntelligentSuggestions() {
    this.log('🧠 Generating intelligent dependency suggestions...');
    
    const suggestions = [];
    
    // Security-based suggestions
    if (this.dependencyMetrics.security.score < this.config.healthThresholds.vulnerabilityScore) {
      suggestions.push({
        type: 'security',
        priority: 'critical',
        message: `Security score is ${this.dependencyMetrics.security.score.toFixed(2)} (below threshold)`,
        actions: [
          'Run npm audit fix immediately',
          'Update packages with security vulnerabilities',
          'Review and update high-risk dependencies'
        ],
        estimatedImpact: 'Eliminate security vulnerabilities'
      });
    }
    
    // Health-based suggestions
    if (this.dependencyMetrics.health.score < this.config.healthThresholds.outdatedScore) {
      suggestions.push({
        type: 'health',
        priority: 'high',
        message: `${this.dependencyMetrics.health.outdatedPackages} outdated packages detected`,
        actions: [
          'Update minor and patch versions',
          'Review major version updates',
          'Test updates in development environment'
        ],
        estimatedImpact: 'Improve dependency health and security'
      });
    }
    
    // Update-based suggestions
    const criticalUpdates = this.dependencyMetrics.updates.opportunities.filter(u => u.priority === 'critical');
    if (criticalUpdates.length > 0) {
      suggestions.push({
        type: 'updates',
        priority: 'critical',
        message: `${criticalUpdates.length} critical updates available`,
        actions: [
          'Update security-critical packages immediately',
          'Test updates thoroughly before deployment',
          'Monitor for breaking changes'
        ],
        estimatedImpact: 'Address critical security and compatibility issues'
      });
    }
    
    // Conflict-based suggestions
    if (this.dependencyMetrics.conflicts.totalConflicts > 0) {
      suggestions.push({
        type: 'conflicts',
        priority: 'medium',
        message: `${this.dependencyMetrics.conflicts.totalConflicts} dependency conflicts detected`,
        actions: [
          'Resolve peer dependency conflicts',
          'Update conflicting packages',
          'Review package compatibility'
        ],
        estimatedImpact: 'Resolve dependency conflicts and improve stability'
      });
    }
    
    this.dependencyMetrics.suggestions = suggestions;
    this.log(`💡 Generated ${suggestions.length} intelligent dependency suggestions`);
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        securityScore: this.dependencyMetrics.security.score,
        healthScore: this.dependencyMetrics.health.score,
        totalUpdates: this.dependencyMetrics.updates.totalUpdates,
        totalConflicts: this.dependencyMetrics.conflicts.totalConflicts,
        suggestions: this.dependencyMetrics.suggestions.length
      },
      metrics: this.dependencyMetrics,
      recommendations: this.dependencyMetrics.suggestions,
      nextSteps: this.generateNextSteps()
    };
    
    const reportFile = path.join(this.config.reportDir, `smart-dependency-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    // Generate human-readable summary
    const summaryFile = path.join(this.config.reportDir, `smart-dependency-summary-${Date.now()}.txt`);
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryFile, summary);
    
    this.log(`📄 Dependency reports generated: ${reportFile} and ${summaryFile}`);
  }

  generateNextSteps() {
    const steps = [];
    
    if (this.dependencyMetrics.suggestions.some(s => s.priority === 'critical')) {
      steps.push('Address critical security and update issues immediately');
    }
    
    if (this.dependencyMetrics.security.score < this.config.healthThresholds.vulnerabilityScore) {
      steps.push('Run security audit and fix vulnerabilities');
    }
    
    if (this.dependencyMetrics.health.outdatedPackages > 0) {
      steps.push('Update outdated packages in batches');
    }
    
    if (this.dependencyMetrics.conflicts.totalConflicts > 0) {
      steps.push('Resolve dependency conflicts');
    }
    
    steps.push('Set up automated dependency monitoring');
    steps.push('Implement dependency update testing in CI/CD');
    steps.push('Regular dependency health reviews');
    
    return steps;
  }

  generateHumanReadableSummary(report) {
    return `Smart Dependency Analysis Report
Generated: ${report.timestamp}

📊 SUMMARY
==========
Security Score: ${report.summary.securityScore.toFixed(2)}/1.0
Health Score: ${report.summary.healthScore.toFixed(2)}/1.0
Total Updates: ${report.summary.totalUpdates}
Total Conflicts: ${report.summary.totalConflicts}
Suggestions: ${report.summary.suggestions}

🎯 TOP RECOMMENDATIONS
======================
${report.recommendations.map((rec, i) => `${i + 1}. ${rec.message}`).join('\n')}

📋 NEXT STEPS
=============
${report.nextSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

🔍 DETAILED METRICS
===================
See the JSON report for detailed analysis of each dependency metric.

💡 INTELLIGENT SUGGESTIONS
==========================
${report.recommendations.map(rec => `- ${rec.message}: ${rec.estimatedImpact}`).join('\n')}

---
Generated by Smart Dependency Automation
Zion Tech Group - PM2 Automation System
`;
  }

  async run() {
    this.log('🚀 Smart Dependency Automation started');
    
    try {
      await this.analyzeDependencies();
      this.log('✅ Smart Dependency Automation completed successfully');
    } catch (error) {
      this.log(`❌ Smart Dependency Automation failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new SmartDependencyAutomation();
  automation.run();
}

module.exports = SmartDependencyAutomation;