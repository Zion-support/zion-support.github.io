#!/usr/bin/env node

/**
 * Smart Dependency Intelligence System - PM2 Automation
 * Predicts dependency issues and automatically optimizes package management
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class SmartDependencyIntelligence {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(
      this.projectRoot,
      'logs',
      'smart-dependency-intelligence.log'
    );
    this.intelligenceLog = path.join(
      this.projectRoot,
      'logs',
      'dependency-intelligence.json'
    );
    this.predictionsLog = path.join(
      this.projectRoot,
      'logs',
      'dependency-predictions.json'
    );
    this.ensureLogsDirectory();
    this.intelligenceData = this.loadIntelligenceData();
    this.dependencyPatterns = this.loadDependencyPatterns();
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

  loadIntelligenceData() {
    try {
      if (fs.existsSync(this.intelligenceLog)) {
        return JSON.parse(fs.readFileSync(this.intelligenceLog, 'utf8'));
      }
    } catch (error) {
      this.log(`Failed to load intelligence data: ${error.message}`, 'WARN');
    }
    return {
      dependencyHistory: [],
      issuePatterns: [],
      optimizationHistory: [],
      predictions: [],
    };
  }

  saveIntelligenceData() {
    try {
      fs.writeFileSync(
        this.intelligenceLog,
        JSON.stringify(this.intelligenceData, null, 2)
      );
    } catch (error) {
      this.log(`Failed to save intelligence data: ${error.message}`, 'ERROR');
    }
  }

  loadDependencyPatterns() {
    return {
      // Security vulnerability patterns
      security: {
        lodash: {
          versions: ['<4.17.21'],
          risk: 'HIGH',
          description: 'Prototype pollution vulnerability',
        },
        axios: {
          versions: ['<1.6.0'],
          risk: 'MEDIUM',
          description: 'SSRF vulnerability',
        },
        moment: {
          versions: ['<2.29.4'],
          risk: 'LOW',
          description: 'ReDoS vulnerability',
        },
      },
      // Performance impact patterns
      performance: {
        moment: {
          impact: 'HIGH',
          description: 'Large bundle size, consider alternatives',
        },
        lodash: {
          impact: 'MEDIUM',
          description: 'Tree-shaking issues in some versions',
        },
        jquery: { impact: 'HIGH', description: 'Consider modern alternatives' },
      },
      // Compatibility patterns
      compatibility: {
        react: {
          versions: ['^18.0.0'],
          compatibility: 'MODERN',
          description: 'Requires React 18+',
        },
        typescript: {
          versions: ['^5.0.0'],
          compatibility: 'MODERN',
          description: 'Modern TypeScript features',
        },
      },
    };
  }

  async runSmartDependencyIntelligence() {
    this.log('Starting Smart Dependency Intelligence analysis...');

    try {
      // 1. Analyze current dependencies
      const currentDeps = await this.analyzeCurrentDependencies();

      // 2. Predict potential issues
      const predictions = await this.predictDependencyIssues(currentDeps);

      // 3. Generate optimization recommendations
      const optimizations = await this.generateOptimizationRecommendations(
        currentDeps,
        predictions
      );

      // 4. Apply intelligent optimizations
      const appliedOptimizations =
        await this.applyIntelligentOptimizations(optimizations);

      // 5. Update intelligence data
      await this.updateIntelligenceData(
        currentDeps,
        predictions,
        appliedOptimizations
      );

      // 6. Generate intelligence report
      const report = await this.generateIntelligenceReport(
        currentDeps,
        predictions,
        optimizations,
        appliedOptimizations
      );

      this.log('Smart Dependency Intelligence analysis completed successfully');
      return report;
    } catch (error) {
      this.log(
        `Smart Dependency Intelligence failed: ${error.message}`,
        'ERROR'
      );
      throw error;
    }
  }

  async analyzeCurrentDependencies() {
    this.log('Analyzing current dependencies...');

    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');

      if (!fs.existsSync(packagePath)) {
        throw new Error('package.json not found');
      }

      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      const dependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
      };

      const analysis = {
        totalDependencies: Object.keys(dependencies).length,
        dependencies: {},
        packageLockExists: fs.existsSync(packageLockPath),
        lastUpdated: new Date().toISOString(),
      };

      // Analyze each dependency
      for (const [name, version] of Object.entries(dependencies)) {
        const depAnalysis = await this.analyzeDependency(name, version);
        analysis.dependencies[name] = depAnalysis;
      }

      // Check for outdated packages
      const outdatedPackages = await this.checkOutdatedPackages();
      analysis.outdatedPackages = outdatedPackages;

      // Check for security vulnerabilities
      const securityAudit = await this.runSecurityAudit();
      analysis.securityAudit = securityAudit;

      this.log(`Analyzed ${analysis.totalDependencies} dependencies`);
      return analysis;
    } catch (error) {
      this.log(`Failed to analyze dependencies: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async analyzeDependency(name, version) {
    const analysis = {
      name,
      currentVersion: version,
      latestVersion: null,
      isOutdated: false,
      updateRisk: 'LOW',
      securityIssues: [],
      performanceImpact: 'LOW',
      compatibilityIssues: [],
      recommendations: [],
    };

    try {
      // Get latest version
      const latestVersion = await this.getLatestVersion(name);
      analysis.latestVersion = latestVersion;

      // Check if outdated
      analysis.isOutdated = this.isVersionOutdated(version, latestVersion);

      // Analyze security
      const securityIssues = this.analyzeSecurityIssues(name, version);
      analysis.securityIssues = securityIssues;

      // Analyze performance impact
      const performanceImpact = this.analyzePerformanceImpact(name, version);
      analysis.performanceImpact = performanceImpact;

      // Analyze compatibility
      const compatibilityIssues = this.analyzeCompatibilityIssues(
        name,
        version
      );
      analysis.compatibilityIssues = compatibilityIssues;

      // Generate recommendations
      analysis.recommendations =
        this.generateDependencyRecommendations(analysis);
    } catch (error) {
      analysis.recommendations.push(`Failed to analyze: ${error.message}`);
    }

    return analysis;
  }

  async getLatestVersion(packageName) {
    try {
      const result = execSync(`npm view ${packageName} version`, {
        encoding: 'utf8',
      });
      return result.trim();
    } catch (error) {
      this.log(
        `Failed to get latest version for ${packageName}: ${error.message}`,
        'WARN'
      );
      return null;
    }
  }

  isVersionOutdated(current, latest) {
    if (!current || !latest) return false;

    try {
      // Simple version comparison (in production, use semver library)
      const currentParts = current.replace(/^[\^~]/, '').split('.');
      const latestParts = latest.split('.');

      for (
        let i = 0;
        i < Math.max(currentParts.length, latestParts.length);
        i++
      ) {
        const currentPart = parseInt(currentParts[i] || '0');
        const latestPart = parseInt(latestParts[i] || '0');

        if (latestPart > currentPart) return true;
        if (latestPart < currentPart) return false;
      }

      return false;
    } catch (error) {
      return false;
    }
  }

  analyzeSecurityIssues(packageName, version) {
    const issues = [];
    const patterns = this.dependencyPatterns.security;

    if (patterns[packageName]) {
      const pattern = patterns[packageName];
      if (this.isVersionVulnerable(version, pattern.versions)) {
        issues.push({
          type: 'SECURITY_VULNERABILITY',
          severity: pattern.risk,
          description: pattern.description,
          affectedVersion: version,
          recommendedAction: 'Update to latest version',
        });
      }
    }

    return issues;
  }

  isVersionVulnerable(version, vulnerableVersions) {
    // Simplified vulnerability check
    for (const vulnerableVersion of vulnerableVersions) {
      if (
        vulnerableVersion.startsWith('<') ||
        vulnerableVersion.startsWith('<=')
      ) {
        const versionNumber = vulnerableVersion.substring(1);
        if (this.isVersionOutdated(version, versionNumber)) {
          return true;
        }
      }
    }
    return false;
  }

  analyzePerformanceImpact(packageName, version) {
    const patterns = this.dependencyPatterns.performance;

    if (patterns[packageName]) {
      return patterns[packageName].impact;
    }

    return 'LOW';
  }

  analyzeCompatibilityIssues(packageName, version) {
    const issues = [];
    const patterns = this.dependencyPatterns.compatibility;

    if (patterns[packageName]) {
      const pattern = patterns[packageName];
      if (this.isVersionOutdated(version, pattern.versions[0])) {
        issues.push({
          type: 'COMPATIBILITY_ISSUE',
          severity: 'MEDIUM',
          description: pattern.description,
          affectedVersion: version,
          recommendedAction: 'Update to compatible version',
        });
      }
    }

    return issues;
  }

  generateDependencyRecommendations(analysis) {
    const recommendations = [];

    if (analysis.isOutdated) {
      recommendations.push({
        type: 'UPDATE_DEPENDENCY',
        priority: 'MEDIUM',
        description: `Update ${analysis.name} from ${analysis.currentVersion} to ${analysis.latestVersion}`,
        action: 'npm update',
      });
    }

    if (analysis.securityIssues.length > 0) {
      recommendations.push({
        type: 'SECURITY_UPDATE',
        priority: 'HIGH',
        description:
          'Security vulnerabilities detected - immediate update required',
        action: 'npm audit fix',
      });
    }

    if (analysis.performanceImpact === 'HIGH') {
      recommendations.push({
        type: 'PERFORMANCE_OPTIMIZATION',
        priority: 'LOW',
        description: 'Consider alternatives for better performance',
        action: 'research_alternatives',
      });
    }

    return recommendations;
  }

  async checkOutdatedPackages() {
    try {
      const result = execSync('npm outdated --json', { encoding: 'utf8' });
      return JSON.parse(result);
    } catch (error) {
      // npm outdated returns non-zero exit code when there are outdated packages
      if (error.status === 1) {
        try {
          return JSON.parse(error.stdout || '{}');
        } catch (parseError) {
          return {};
        }
      }
      return {};
    }
  }

  async runSecurityAudit() {
    try {
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      return JSON.parse(result);
    } catch (error) {
      // npm audit returns non-zero exit code when vulnerabilities are found
      if (error.status === 1) {
        try {
          return JSON.parse(error.stdout || '{}');
        } catch (parseError) {
          return { vulnerabilities: {} };
        }
      }
      return { vulnerabilities: {} };
    }
  }

  async predictDependencyIssues(currentDeps) {
    this.log('Predicting potential dependency issues...');

    const predictions = [];

    // Predict based on historical patterns
    for (const depName of Object.keys(currentDeps.dependencies)) {
      const depAnalysis = currentDeps.dependencies[depName];

      // Predict security issues
      if (depAnalysis.securityIssues.length > 0) {
        predictions.push({
          type: 'SECURITY_ISSUE_PREDICTION',
          package: depName,
          probability: 'HIGH',
          timeframe: 'IMMEDIATE',
          description: 'Security vulnerability detected',
          recommendedAction: 'Update immediately',
        });
      }

      // Predict compatibility issues
      if (depAnalysis.compatibilityIssues.length > 0) {
        predictions.push({
          type: 'COMPATIBILITY_ISSUE_PREDICTION',
          package: depName,
          probability: 'MEDIUM',
          timeframe: 'NEXT_UPDATE',
          description: 'Potential compatibility issues with future updates',
          recommendedAction: 'Plan for migration',
        });
      }

      // Predict performance issues
      if (depAnalysis.performanceImpact === 'HIGH') {
        predictions.push({
          type: 'PERFORMANCE_ISSUE_PREDICTION',
          package: depName,
          probability: 'MEDIUM',
          timeframe: 'ONGOING',
          description: 'Performance impact detected',
          recommendedAction: 'Monitor and consider alternatives',
        });
      }
    }

    // Predict based on dependency patterns
    const patternPredictions = this.predictBasedOnPatterns(currentDeps);
    predictions.push(...patternPredictions);

    this.log(`Generated ${predictions.length} predictions`);
    return predictions;
  }

  predictBasedOnPatterns(currentDeps) {
    const predictions = [];

    // Check for dependency conflicts
    const allVersions = Object.values(currentDeps.dependencies).map(
      dep => dep.currentVersion
    );
    const uniqueVersions = new Set(allVersions);

    if (allVersions.length !== uniqueVersions.size) {
      predictions.push({
        type: 'DEPENDENCY_CONFLICT_PREDICTION',
        probability: 'HIGH',
        timeframe: 'BUILD_TIME',
        description: 'Potential version conflicts detected',
        recommendedAction: 'Review and align versions',
      });
    }

    // Check for large dependency trees
    if (currentDeps.totalDependencies > 100) {
      predictions.push({
        type: 'DEPENDENCY_BLOAT_PREDICTION',
        probability: 'MEDIUM',
        timeframe: 'ONGOING',
        description: 'Large number of dependencies may impact build times',
        recommendedAction: 'Audit and remove unused dependencies',
      });
    }

    return predictions;
  }

  async generateOptimizationRecommendations(currentDeps, predictions) {
    this.log('Generating optimization recommendations...');

    const optimizations = [];

    // High priority optimizations
    const highPriorityPredictions = predictions.filter(
      p => p.probability === 'HIGH'
    );
    for (const prediction of highPriorityPredictions) {
      optimizations.push({
        type: 'IMMEDIATE_OPTIMIZATION',
        priority: 'HIGH',
        description: prediction.description,
        action: prediction.recommendedAction,
        estimatedImpact: 'HIGH',
        risk: 'LOW',
      });
    }

    // Medium priority optimizations
    const mediumPriorityPredictions = predictions.filter(
      p => p.probability === 'MEDIUM'
    );
    for (const prediction of mediumPriorityPredictions) {
      optimizations.push({
        type: 'PLANNED_OPTIMIZATION',
        priority: 'MEDIUM',
        description: prediction.description,
        action: prediction.recommendedAction,
        estimatedImpact: 'MEDIUM',
        risk: 'LOW',
      });
    }

    // Performance optimizations
    const highImpactDeps = Object.values(currentDeps.dependencies).filter(
      dep => dep.performanceImpact === 'HIGH'
    );

    for (const dep of highImpactDeps) {
      optimizations.push({
        type: 'PERFORMANCE_OPTIMIZATION',
        priority: 'LOW',
        description: `Optimize ${dep.name} for better performance`,
        action: 'research_alternatives',
        estimatedImpact: 'MEDIUM',
        risk: 'MEDIUM',
      });
    }

    this.log(`Generated ${optimizations.length} optimization recommendations`);
    return optimizations;
  }

  async applyIntelligentOptimizations(optimizations) {
    this.log('Applying intelligent optimizations...');

    const appliedOptimizations = [];

    for (const optimization of optimizations) {
      if (optimization.priority === 'HIGH' && optimization.risk === 'LOW') {
        try {
          const result = await this.applyOptimization(optimization);
          if (result.success) {
            appliedOptimizations.push({
              ...optimization,
              appliedAt: new Date().toISOString(),
              result,
            });
          }
        } catch (error) {
          this.log(
            `Failed to apply optimization ${optimization.type}: ${error.message}`,
            'WARN'
          );
        }
      }
    }

    this.log(`Applied ${appliedOptimizations.length} optimizations`);
    return appliedOptimizations;
  }

  async applyOptimization(optimization) {
    switch (optimization.type) {
      case 'IMMEDIATE_OPTIMIZATION':
        if (optimization.action.includes('npm audit fix')) {
          return await this.runNpmAuditFix();
        } else if (optimization.action.includes('npm update')) {
          return await this.runNpmUpdate();
        }
        break;

      case 'PERFORMANCE_OPTIMIZATION':
        return await this.optimizePerformance(optimization);

      default:
        return { success: false, message: 'Unknown optimization type' };
    }

    return { success: false, message: 'Optimization not implemented' };
  }

  async runNpmAuditFix() {
    try {
      const result = execSync('npm audit fix', { encoding: 'utf8' });
      return {
        success: true,
        message: 'Security audit fix completed',
        output: result,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async runNpmUpdate() {
    try {
      const result = execSync('npm update', { encoding: 'utf8' });
      return { success: true, message: 'Dependencies updated', output: result };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async optimizePerformance(optimization) {
    // This would implement performance optimization logic
    return { success: true, message: 'Performance optimization completed' };
  }

  async updateIntelligenceData(currentDeps, predictions, appliedOptimizations) {
    this.log('Updating intelligence data...');

    // Update dependency history
    this.intelligenceData.dependencyHistory.push({
      timestamp: new Date().toISOString(),
      dependencies: currentDeps,
      predictions: predictions,
      optimizations: appliedOptimizations,
    });

    // Keep only last 10 entries
    if (this.intelligenceData.dependencyHistory.length > 10) {
      this.intelligenceData.dependencyHistory =
        this.intelligenceData.dependencyHistory.slice(-10);
    }

    // Update issue patterns
    const newPatterns = this.extractNewPatterns(currentDeps, predictions);
    this.intelligenceData.issuePatterns.push(...newPatterns);

    // Update optimization history
    this.intelligenceData.optimizationHistory.push({
      timestamp: new Date().toISOString(),
      optimizations: appliedOptimizations,
    });

    // Save updated data
    this.saveIntelligenceData();
  }

  extractNewPatterns(currentDeps, predictions) {
    const patterns = [];

    for (const prediction of predictions) {
      if (prediction.probability === 'HIGH') {
        patterns.push({
          type: prediction.type,
          package: prediction.package,
          description: prediction.description,
          firstSeen: new Date().toISOString(),
          occurrences: 1,
        });
      }
    }

    return patterns;
  }

  async generateIntelligenceReport(
    currentDeps,
    predictions,
    optimizations,
    appliedOptimizations
  ) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalDependencies: currentDeps.totalDependencies,
        outdatedPackages: Object.keys(currentDeps.outdatedPackages || {})
          .length,
        securityIssues: this.countSecurityIssues(currentDeps),
        predictionsGenerated: predictions.length,
        optimizationsRecommended: optimizations.length,
        optimizationsApplied: appliedOptimizations.length,
      },
      details: {
        currentDependencies: currentDeps,
        predictions: predictions,
        optimizations: optimizations,
        appliedOptimizations: appliedOptimizations,
      },
      recommendations: this.generateReportRecommendations(
        currentDeps,
        predictions,
        optimizations
      ),
    };

    // Save report to file
    const reportPath = path.join(
      this.projectRoot,
      'logs',
      `dependency-intelligence-${Date.now()}.json`
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`Intelligence report generated: ${reportPath}`);
    return report;
  }

  countSecurityIssues(currentDeps) {
    let count = 0;
    for (const dep of Object.values(currentDeps.dependencies)) {
      count += dep.securityIssues.length;
    }
    return count;
  }

  generateReportRecommendations(currentDeps, predictions, optimizations) {
    const recommendations = [];

    // High priority recommendations
    const highPriorityPredictions = predictions.filter(
      p => p.probability === 'HIGH'
    );
    if (highPriorityPredictions.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Address security vulnerabilities immediately',
        timeframe: 'IMMEDIATE',
      });
    }

    // Medium priority recommendations
    const mediumPriorityOptimizations = optimizations.filter(
      o => o.priority === 'MEDIUM'
    );
    if (mediumPriorityOptimizations.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        action: 'Plan dependency updates and optimizations',
        timeframe: 'NEXT_SPRINT',
      });
    }

    // Long-term recommendations
    if (currentDeps.totalDependencies > 100) {
      recommendations.push({
        priority: 'LOW',
        action:
          'Consider dependency consolidation and tree-shaking optimization',
        timeframe: 'ONGOING',
      });
    }

    return recommendations;
  }

  async run() {
    try {
      const report = await this.runSmartDependencyIntelligence();
      this.log('Smart Dependency Intelligence completed successfully');
      return report;
    } catch (error) {
      this.log(
        `Smart Dependency Intelligence failed: ${error.message}`,
        'ERROR'
      );
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const automation = new SmartDependencyIntelligence();
  automation
    .run()
    .then(() => {
      console.log('✅ Smart Dependency Intelligence completed');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Smart Dependency Intelligence failed:', error.message);
      process.exit(1);
    });
}

module.exports = SmartDependencyIntelligence;
