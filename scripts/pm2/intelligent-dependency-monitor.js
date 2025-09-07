#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentDependencyMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/intelligent-dependency-monitor.log');
    this.dependencyReportFile = path.join(this.projectRoot, 'logs/pm2/intelligent-dependency-report.json');
    this.securityDataFile = path.join(this.projectRoot, 'logs/pm2/dependency-security-data.json');
    this.updateHistoryFile = path.join(this.projectRoot, 'logs/pm2/dependency-update-history.json');
    this.startTime = Date.now();
    
    this.dependencyMetrics = {
      totalDependencies: 0,
      outdatedDependencies: 0,
      securityVulnerabilities: 0,
      updateRecommendations: 0,
      lastUpdateCheck: 0,
      updateSuccessRate: 0
    };
    
    this.securityData = this.loadSecurityData();
    this.updateHistory = this.loadUpdateHistory();
    this.vulnerabilityHistory = [];
    this.dependencyTrends = {};
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // Silent fail for logging
    }
  }

  loadSecurityData() {
    try {
      if (fs.existsSync(this.securityDataFile)) {
        return JSON.parse(fs.readFileSync(this.securityDataFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load security data, starting fresh');
    }
    return {
      vulnerabilityDatabase: {},
      securityScores: {},
      lastSecurityScan: null,
      knownVulnerabilities: {},
      lastUpdated: Date.now()
    };
  }

  loadUpdateHistory() {
    try {
      if (fs.existsSync(this.updateHistoryFile)) {
        return JSON.parse(fs.readFileSync(this.updateHistoryFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load update history, starting fresh');
    }
    return {
      updateAttempts: {},
      successfulUpdates: {},
      failedUpdates: {},
      updateTimestamps: {},
      lastUpdated: Date.now()
    };
  }

  saveSecurityData() {
    try {
      this.securityData.lastUpdated = Date.now();
      fs.writeFileSync(this.securityDataFile, JSON.stringify(this.securityData, null, 2));
    } catch (error) {
      this.log('Failed to save security data');
    }
  }

  saveUpdateHistory() {
    try {
      this.updateHistory.lastUpdated = Date.now();
      fs.writeFileSync(this.updateHistoryFile, JSON.stringify(this.updateHistory, null, 2));
    } catch (error) {
      this.log('Failed to save update history');
    }
  }

  async monitorDependencies() {
    this.log('🔍 Starting Intelligent Dependency Monitoring...');
    
    try {
      // Check if package.json exists
      if (!fs.existsSync('package.json')) {
        this.log('❌ No package.json found, skipping dependency monitoring');
        return;
      }

      // Analyze current dependencies
      const dependencyAnalysis = this.analyzeDependencies();
      this.log(`📦 Found ${dependencyAnalysis.totalDependencies} dependencies`);

      // Check for outdated dependencies
      const outdatedAnalysis = await this.checkOutdatedDependencies();
      
      // Scan for security vulnerabilities
      const securityAnalysis = await this.scanSecurityVulnerabilities();
      
      // Generate update recommendations
      const updateRecommendations = this.generateUpdateRecommendations(dependencyAnalysis, outdatedAnalysis, securityAnalysis);
      
      // Perform safe updates if enabled
      if (process.env.AUTO_UPDATE_SAFE === 'true') {
        await this.performSafeUpdates(updateRecommendations);
      }
      
      // Analyze dependency trends
      this.analyzeDependencyTrends(dependencyAnalysis);
      
      // Generate comprehensive report
      await this.generateDependencyReport(dependencyAnalysis, outdatedAnalysis, securityAnalysis, updateRecommendations);
      
      this.log('✅ Intelligent Dependency Monitoring complete!');
      
    } catch (error) {
      this.log(`❌ Error during dependency monitoring: ${error.message}`);
    }
  }

  analyzeDependencies() {
    const analysis = {
      totalDependencies: 0,
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
      optionalDependencies: {},
      dependencyCategories: {},
      riskAssessment: {}
    };

    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      // Analyze production dependencies
      if (packageJson.dependencies) {
        analysis.dependencies = packageJson.dependencies;
        analysis.totalDependencies += Object.keys(packageJson.dependencies).length;
      }
      
      // Analyze dev dependencies
      if (packageJson.devDependencies) {
        analysis.devDependencies = packageJson.devDependencies;
        analysis.totalDependencies += Object.keys(packageJson.devDependencies).length;
      }
      
      // Analyze peer dependencies
      if (packageJson.peerDependencies) {
        analysis.peerDependencies = packageJson.peerDependencies;
        analysis.totalDependencies += Object.keys(packageJson.peerDependencies).length;
      }
      
      // Analyze optional dependencies
      if (packageJson.optionalDependencies) {
        analysis.optionalDependencies = packageJson.optionalDependencies;
        analysis.totalDependencies += Object.keys(packageJson.optionalDependencies).length;
      }

      // Categorize dependencies
      analysis.dependencyCategories = this.categorizeDependencies(analysis);
      
      // Assess risk levels
      analysis.riskAssessment = this.assessDependencyRisks(analysis);

    } catch (error) {
      this.log(`Failed to analyze dependencies: ${error.message}`);
    }

    return analysis;
  }

  categorizeDependencies(analysis) {
    const categories = {
      framework: [],
      ui: [],
      utilities: [],
      testing: [],
      build: [],
      security: [],
      performance: [],
      monitoring: [],
      other: []
    };

    const allDeps = {
      ...analysis.dependencies,
      ...analysis.devDependencies,
      ...analysis.peerDependencies,
      ...analysis.optionalDependencies
    };

    Object.entries(allDeps).forEach(([name, version]) => {
      if (this.isFramework(name)) {
        categories.framework.push({ name, version });
      } else if (this.isUILibrary(name)) {
        categories.ui.push({ name, version });
      } else if (this.isUtility(name)) {
        categories.utilities.push({ name, version });
      } else if (this.isTesting(name)) {
        categories.testing.push({ name, version });
      } else if (this.isBuildTool(name)) {
        categories.build.push({ name, version });
      } else if (this.isSecurity(name)) {
        categories.security.push({ name, version });
      } else if (this.isPerformance(name)) {
        categories.performance.push({ name, version });
      } else if (this.isMonitoring(name)) {
        categories.monitoring.push({ name, version });
      } else {
        categories.other.push({ name, version });
      }
    });

    return categories;
  }

  isFramework(name) {
    const frameworks = ['react', 'vue', 'angular', 'next', 'nuxt', 'svelte', 'express', 'koa', 'fastify'];
    return frameworks.some(framework => name.includes(framework));
  }

  isUILibrary(name) {
    const uiLibraries = ['@radix-ui', 'lucide', 'framer-motion', 'tailwind', 'styled-components', 'emotion'];
    return uiLibraries.some(lib => name.includes(lib));
  }

  isUtility(name) {
    const utilities = ['lodash', 'ramda', 'date-fns', 'moment', 'axios', 'fetch', 'uuid', 'nanoid'];
    return utilities.some(util => name.includes(util));
  }

  isTesting(name) {
    const testing = ['jest', 'vitest', 'cypress', 'playwright', 'testing-library', 'mocha', 'chai'];
    return testing.some(test => name.includes(test));
  }

  isBuildTool(name) {
    const buildTools = ['webpack', 'vite', 'rollup', 'esbuild', 'swc', 'babel', 'typescript'];
    return buildTools.some(tool => name.includes(tool));
  }

  isSecurity(name) {
    const security = ['helmet', 'cors', 'bcrypt', 'jsonwebtoken', 'passport', 'express-rate-limit'];
    return security.some(sec => name.includes(sec));
  }

  isPerformance(name) {
    const performance = ['compression', 'cache-manager', 'redis', 'memcached', 'pm2'];
    return performance.some(perf => name.includes(perf));
  }

  isMonitoring(name) {
    const monitoring = ['winston', 'morgan', 'pino', 'sentry', 'newrelic', 'datadog'];
    return monitoring.some(mon => name.includes(mon));
  }

  assessDependencyRisks(analysis) {
    const risks = {
      high: [],
      medium: [],
      low: []
    };

    const allDeps = {
      ...analysis.dependencies,
      ...analysis.devDependencies,
      ...analysis.peerDependencies,
      ...analysis.optionalDependencies
    };

    Object.entries(allDeps).forEach(([name, version]) => {
      const riskLevel = this.calculateRiskLevel(name, version);
      risks[riskLevel].push({ name, version, riskLevel });
    });

    return risks;
  }

  calculateRiskLevel(name, version) {
    // High risk indicators
    if (this.isKnownVulnerable(name)) return 'high';
    if (this.isDeprecated(name)) return 'high';
    if (this.isUnmaintained(name)) return 'high';
    
    // Medium risk indicators
    if (this.isOldVersion(version)) return 'medium';
    if (this.isLargePackage(name)) return 'medium';
    if (this.isTransitiveDependency(name)) return 'medium';
    
    return 'low';
  }

  isKnownVulnerable(name) {
    // Check against known vulnerable packages
    const vulnerablePackages = [
      'lodash', 'moment', 'jquery', 'express', 'mongoose', 'sequelize'
    ];
    return vulnerablePackages.some(pkg => name.includes(pkg));
  }

  isDeprecated(name) {
    // Check for deprecated packages
    const deprecatedPackages = [
      'request', 'node-uuid', 'moment', 'lodash'
    ];
    return deprecatedPackages.some(pkg => name.includes(pkg));
  }

  isUnmaintained(name) {
    // Check for potentially unmaintained packages
    const unmaintainedPackages = [
      'gulp', 'grunt', 'bower'
    ];
    return unmaintainedPackages.some(pkg => name.includes(pkg));
  }

  isOldVersion(version) {
    // Simple version age check
    if (version.startsWith('^') || version.startsWith('~')) {
      version = version.substring(1);
    }
    
    const major = parseInt(version.split('.')[0]);
    return major < 2; // Arbitrary threshold
  }

  isLargePackage(name) {
    // Check for known large packages
    const largePackages = [
      'moment', 'lodash', 'ramda', 'date-fns'
    ];
    return largePackages.some(pkg => name.includes(pkg));
  }

  isTransitiveDependency(name) {
    // This would require deeper analysis of node_modules
    // For now, return false
    return false;
  }

  async checkOutdatedDependencies() {
    const analysis = {
      outdated: [],
      majorUpdates: [],
      minorUpdates: [],
      patchUpdates: [],
      totalOutdated: 0
    };

    try {
      this.log('🔍 Checking for outdated dependencies...');
      
      // Run npm outdated command
      const outdatedOutput = execSync('npm outdated --json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 30000
      });

      const outdatedData = JSON.parse(outdatedOutput);
      
      Object.entries(outdatedData).forEach(([name, info]) => {
        const outdated = {
          name,
          current: info.current,
          wanted: info.wanted,
          latest: info.latest,
          location: info.location,
          updateType: this.determineUpdateType(info.current, info.wanted, info.latest)
        };

        analysis.outdated.push(outdated);
        analysis.totalOutdated++;

        // Categorize by update type
        if (outdated.updateType === 'major') {
          analysis.majorUpdates.push(outdated);
        } else if (outdated.updateType === 'minor') {
          analysis.minorUpdates.push(outdated);
        } else if (outdated.updateType === 'patch') {
          analysis.patchUpdates.push(outdated);
        }
      });

      this.log(`📊 Found ${analysis.totalOutdated} outdated dependencies`);
      
    } catch (error) {
      // npm outdated might fail if no outdated packages
      this.log('No outdated dependencies found or npm outdated failed');
    }

    return analysis;
  }

  determineUpdateType(current, wanted, latest) {
    const currentParts = current.split('.').map(Number);
    const wantedParts = wanted.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);

    if (latestParts[0] > currentParts[0]) return 'major';
    if (latestParts[1] > currentParts[1]) return 'minor';
    if (latestParts[2] > currentParts[2]) return 'patch';
    
    return 'none';
  }

  async scanSecurityVulnerabilities() {
    const analysis = {
      vulnerabilities: [],
      totalVulnerabilities: 0,
      criticalVulnerabilities: 0,
      highVulnerabilities: 0,
      mediumVulnerabilities: 0,
      lowVulnerabilities: 0,
      securityScore: 100
    };

    try {
      this.log('🔒 Scanning for security vulnerabilities...');
      
      // Check if npm audit is available
      try {
        const auditOutput = execSync('npm audit --json', {
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe',
          timeout: 60000
        });

        const auditData = JSON.parse(auditOutput);
        
        if (auditData.vulnerabilities) {
          Object.entries(auditData.vulnerabilities).forEach(([name, vuln]) => {
            const vulnerability = {
              name,
              severity: vuln.severity,
              title: vuln.title,
              description: vuln.description,
              recommendation: vuln.recommendation,
              via: vuln.via,
              dependencyOf: vuln.dependencyOf
            };

            analysis.vulnerabilities.push(vulnerability);
            analysis.totalVulnerabilities++;

            // Count by severity
            switch (vuln.severity.toLowerCase()) {
              case 'critical':
                analysis.criticalVulnerabilities++;
                analysis.securityScore -= 25;
                break;
              case 'high':
                analysis.highVulnerabilities++;
                analysis.securityScore -= 15;
                break;
              case 'medium':
                analysis.mediumVulnerabilities++;
                analysis.securityScore -= 10;
                break;
              case 'low':
                analysis.lowVulnerabilities++;
                analysis.securityScore -= 5;
                break;
            }
          });
        }

        this.log(`🔒 Found ${analysis.totalVulnerabilities} security vulnerabilities`);
        
      } catch (error) {
        this.log('npm audit not available or failed');
      }

      // Update security data
      this.securityData.lastSecurityScan = Date.now();
      this.securityData.knownVulnerabilities = analysis.vulnerabilities.reduce((acc, vuln) => {
        acc[vuln.name] = {
          severity: vuln.severity,
          lastSeen: Date.now(),
          count: (acc[vuln.name]?.count || 0) + 1
        };
        return acc;
      }, this.securityData.knownVulnerabilities);

      this.saveSecurityData();
      
    } catch (error) {
      this.log(`Security scan failed: ${error.message}`);
    }

    return analysis;
  }

  generateUpdateRecommendations(dependencyAnalysis, outdatedAnalysis, securityAnalysis) {
    const recommendations = {
      critical: [],
      high: [],
      medium: [],
      low: [],
      total: 0
    };

    // Security-based recommendations
    securityAnalysis.vulnerabilities.forEach(vuln => {
      if (vuln.recommendation) {
        const recommendation = {
          type: 'security',
          priority: vuln.severity.toLowerCase(),
          package: vuln.name,
          reason: `Security vulnerability: ${vuln.title}`,
          action: vuln.recommendation,
          impact: 'security'
        };

        recommendations[vuln.severity.toLowerCase()].push(recommendation);
        recommendations.total++;
      }
    });

    // Update-based recommendations
    outdatedAnalysis.outdated.forEach(dep => {
      let priority = 'low';
      let reason = '';

      if (dep.updateType === 'major') {
        priority = 'high';
        reason = 'Major version update available';
      } else if (dep.updateType === 'minor') {
        priority = 'medium';
        reason = 'Minor version update available';
      } else if (dep.updateType === 'patch') {
        priority = 'low';
        reason = 'Patch update available';
      }

      const recommendation = {
        type: 'update',
        priority,
        package: dep.name,
        reason,
        action: `Update to ${dep.latest}`,
        impact: 'functionality',
        currentVersion: dep.current,
        targetVersion: dep.latest
      };

      recommendations[priority].push(recommendation);
      recommendations.total++;
    });

    // Risk-based recommendations
    dependencyAnalysis.riskAssessment.high.forEach(dep => {
      const recommendation = {
        type: 'risk',
        priority: 'high',
        package: dep.name,
        reason: 'High-risk dependency detected',
        action: 'Review and consider alternatives',
        impact: 'security/reliability'
      };

      recommendations.high.push(recommendation);
      recommendations.total++;
    });

    return recommendations;
  }

  async performSafeUpdates(recommendations) {
    this.log('🔄 Performing safe dependency updates...');
    
    let updatesPerformed = 0;
    let updatesFailed = 0;

    // Only perform low-risk updates automatically
    const safeUpdates = recommendations.low.filter(rec => 
      rec.type === 'update' && rec.priority === 'low'
    );

    for (const update of safeUpdates) {
      try {
        this.log(`🔄 Updating ${update.package} to ${update.targetVersion}...`);
        
        // Perform the update
        execSync(`npm install ${update.package}@${update.targetVersion}`, {
          cwd: this.projectRoot,
          stdio: 'pipe',
          timeout: 60000
        });

        // Record successful update
        this.recordUpdate(update.package, 'success', update.targetVersion);
        updatesPerformed++;
        
        this.log(`✅ Successfully updated ${update.package}`);
        
      } catch (error) {
        this.log(`❌ Failed to update ${update.package}: ${error.message}`);
        
        // Record failed update
        this.recordUpdate(update.package, 'failed', update.targetVersion, error.message);
        updatesFailed++;
      }
    }

    this.log(`🔄 Safe updates complete: ${updatesPerformed} successful, ${updatesFailed} failed`);
    
    // Update metrics
    if (updatesPerformed + updatesFailed > 0) {
      this.dependencyMetrics.updateSuccessRate = updatesPerformed / (updatesPerformed + updatesFailed);
    }
  }

  recordUpdate(packageName, status, targetVersion, error = null) {
    const timestamp = Date.now();
    
    // Record update attempt
    if (!this.updateHistory.updateAttempts[packageName]) {
      this.updateHistory.updateAttempts[packageName] = [];
    }
    
    this.updateHistory.updateAttempts[packageName].push({
      timestamp,
      targetVersion,
      status,
      error
    });

    // Record successful updates
    if (status === 'success') {
      if (!this.updateHistory.successfulUpdates[packageName]) {
        this.updateHistory.successfulUpdates[packageName] = [];
      }
      
      this.updateHistory.successfulUpdates[packageName].push({
        timestamp,
        version: targetVersion
      });
    }

    // Record failed updates
    if (status === 'failed') {
      if (!this.updateHistory.failedUpdates[packageName]) {
        this.updateHistory.failedUpdates[packageName] = [];
      }
      
      this.updateHistory.failedUpdates[packageName].push({
        timestamp,
        targetVersion,
        error
      });
    }

    // Update timestamps
    this.updateHistory.updateTimestamps[packageName] = timestamp;
    
    this.saveUpdateHistory();
  }

  analyzeDependencyTrends(dependencyAnalysis) {
    // Add current analysis to trends
    const currentTrend = {
      timestamp: Date.now(),
      totalDependencies: dependencyAnalysis.totalDependencies,
      riskDistribution: {
        high: dependencyAnalysis.riskAssessment.high.length,
        medium: dependencyAnalysis.riskAssessment.medium.length,
        low: dependencyAnalysis.riskAssessment.low.length
      }
    };

    if (!this.dependencyTrends.history) {
      this.dependencyTrends.history = [];
    }

    this.dependencyTrends.history.push(currentTrend);
    
    // Keep only last 30 entries
    if (this.dependencyTrends.history.length > 30) {
      this.dependencyTrends.history = this.dependencyTrends.history.slice(-30);
    }

    // Calculate trends
    if (this.dependencyTrends.history.length > 1) {
      const recent = this.dependencyTrends.history.slice(-5);
      const older = this.dependencyTrends.history.slice(-10, -5);
      
      if (older.length > 0) {
        this.dependencyTrends.dependencyGrowth = this.calculateTrend(recent, older, 'totalDependencies');
        this.dependencyTrends.riskTrend = this.calculateRiskTrend(recent, older);
      }
    }
  }

  calculateTrend(recent, older, metric) {
    const recentAvg = recent.reduce((sum, entry) => sum + entry[metric], 0) / recent.length;
    const olderAvg = older.reduce((sum, entry) => sum + entry[metric], 0) / older.length;
    
    if (olderAvg === 0) return 'stable';
    const change = ((recentAvg - olderAvg) / olderAvg) * 100;
    
    if (change > 5) return 'increasing';
    if (change < -5) return 'decreasing';
    return 'stable';
  }

  calculateRiskTrend(recent, older) {
    const recentHighRisk = recent.reduce((sum, entry) => sum + entry.riskDistribution.high, 0) / recent.length;
    const olderHighRisk = older.reduce((sum, entry) => sum + entry.riskDistribution.high, 0) / older.length;
    
    if (olderHighRisk === 0) return 'stable';
    const change = ((recentHighRisk - olderHighRisk) / olderHighRisk) * 100;
    
    if (change > 10) return 'increasing';
    if (change < -10) return 'decreasing';
    return 'stable';
  }

  async generateDependencyReport(dependencyAnalysis, outdatedAnalysis, securityAnalysis, updateRecommendations) {
    const report = {
      timestamp: Date.now(),
      summary: {
        totalDependencies: dependencyAnalysis.totalDependencies,
        outdatedDependencies: outdatedAnalysis.totalOutdated,
        securityVulnerabilities: securityAnalysis.totalVulnerabilities,
        updateRecommendations: updateRecommendations.total,
        securityScore: securityAnalysis.securityScore
      },
      dependencyAnalysis,
      outdatedAnalysis,
      securityAnalysis,
      updateRecommendations,
      trends: this.dependencyTrends,
      history: this.updateHistory,
      recommendations: this.generateStrategicRecommendations()
    };

    try {
      fs.writeFileSync(this.dependencyReportFile, JSON.stringify(report, null, 2));
      this.log('📊 Intelligent Dependency Report generated');
    } catch (error) {
      this.log('Failed to generate dependency report');
    }
  }

  generateStrategicRecommendations() {
    const recommendations = [];

    // Security recommendations
    if (this.dependencyMetrics.securityVulnerabilities > 0) {
      recommendations.push({
        type: 'security',
        priority: 'critical',
        title: 'Security Vulnerabilities Detected',
        description: `${this.dependencyMetrics.securityVulnerabilities} security vulnerabilities found`,
        actions: [
          'Update vulnerable dependencies immediately',
          'Review security audit results',
          'Implement automated security scanning',
          'Consider dependency alternatives for high-risk packages'
        ]
      });
    }

    // Update recommendations
    if (this.dependencyMetrics.outdatedDependencies > 10) {
      recommendations.push({
        type: 'maintenance',
        priority: 'high',
        title: 'High Number of Outdated Dependencies',
        description: `${this.dependencyMetrics.outdatedDependencies} outdated dependencies detected`,
        actions: [
          'Create update schedule and strategy',
          'Prioritize security updates first',
          'Test updates in development environment',
          'Implement automated update workflows'
        ]
      });
    }

    // Risk management recommendations
    if (this.dependencyMetrics.updateSuccessRate < 0.8) {
      recommendations.push({
        type: 'process',
        priority: 'medium',
        title: 'Low Update Success Rate',
        description: `Update success rate is ${(this.dependencyMetrics.updateSuccessRate * 100).toFixed(1)}%`,
        actions: [
          'Review update process and procedures',
          'Improve testing before updates',
          'Implement rollback strategies',
          'Document update best practices'
        ]
      });
    }

    return recommendations;
  }

  async start() {
    this.log('🚀 Intelligent Dependency Monitor started');
    
    // Run initial monitoring
    await this.monitorDependencies();
    
    // Schedule periodic monitoring
    setInterval(async () => {
      await this.monitorDependencies();
    }, 24 * 60 * 60 * 1000); // Every 24 hours
  }
}

// Start the Intelligent Dependency Monitor
const monitor = new IntelligentDependencyMonitor();
monitor.start().catch(error => {
  console.error('Intelligent Dependency Monitor failed to start:', error);
  process.exit(1);
});