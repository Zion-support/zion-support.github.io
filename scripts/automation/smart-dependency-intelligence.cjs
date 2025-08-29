#!/usr/bin/env node

/**
 * Smart Dependency Intelligence Automation
 * Intelligently manages dependencies and suggests optimizations
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class SmartDependencyIntelligence {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'smart-dependency.log');
    this.intelligenceLog = path.join(this.projectRoot, 'logs', 'dependency-intelligence.json');
    this.analysisLog = path.join(this.projectRoot, 'logs', 'dependency-analysis.json');
    this.ensureLogsDirectory();
    this.intelligenceData = this.loadIntelligenceData();
    this.dependencyAnalysis = this.loadDependencyAnalysis();
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
      dependencies: {}, 
      patterns: {}, 
      recommendations: [],
      updateHistory: [],
      securityIssues: []
    };
  }

  loadDependencyAnalysis() {
    try {
      if (fs.existsSync(this.analysisLog)) {
        return JSON.parse(fs.readFileSync(this.analysisLog, 'utf8'));
      }
    } catch (error) {
      this.log(`Failed to load dependency analysis: ${error.message}`, 'WARN');
    }
    return { 
      analysis: [], 
      trends: {}, 
      metrics: {},
      bundleAnalysis: {}
    };
  }

  saveIntelligenceData() {
    try {
      fs.writeFileSync(this.intelligenceLog, JSON.stringify(this.intelligenceData, null, 2));
    } catch (error) {
      this.log(`Failed to save intelligence data: ${error.message}`, 'ERROR');
    }
  }

  saveDependencyAnalysis() {
    try {
      fs.writeFileSync(this.analysisLog, JSON.stringify(this.dependencyAnalysis, null, 2));
    } catch (error) {
      this.log(`Failed to save dependency analysis: ${error.message}`, 'ERROR');
    }
  }

  async analyzeDependencies() {
    try {
      this.log('🔍 Analyzing project dependencies...');
      
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
      
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json not found');
      }

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies
      };

      const analysis = {
        timestamp: new Date().toISOString(),
        totalDependencies: Object.keys(dependencies).length,
        productionDeps: Object.keys(packageJson.dependencies || {}).length,
        devDeps: Object.keys(packageJson.devDependencies || {}).length,
        dependencies: {},
        insights: [],
        recommendations: []
      };

      // Analyze each dependency
      for (const [name, version] of Object.entries(dependencies)) {
        const depAnalysis = await this.analyzeSingleDependency(name, version);
        analysis.dependencies[name] = depAnalysis;
        
        // Collect insights
        if (depAnalysis.insights) {
          analysis.insights.push(...depAnalysis.insights);
        }
        
        // Collect recommendations
        if (depAnalysis.recommendations) {
          analysis.recommendations.push(...depAnalysis.recommendations);
        }
      }

      // Analyze package-lock.json if it exists
      if (fs.existsSync(packageLockPath)) {
        const lockAnalysis = await this.analyzePackageLock(packageLockPath);
        analysis.lockAnalysis = lockAnalysis;
      }

      // Generate bundle analysis
      analysis.bundleAnalysis = await this.analyzeBundleImpact(dependencies);

      // Save analysis
      this.dependencyAnalysis.analysis.push(analysis);
      this.saveDependencyAnalysis();

      return analysis;

    } catch (error) {
      this.log(`Dependency analysis failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async analyzeSingleDependency(name, version) {
    const analysis = {
      name,
      version,
      timestamp: new Date().toISOString(),
      insights: [],
      recommendations: [],
      metrics: {}
    };

    try {
      // Check if dependency is actually used
      const usageAnalysis = await this.analyzeDependencyUsage(name);
      analysis.usage = usageAnalysis;

      // Analyze version patterns
      const versionAnalysis = this.analyzeVersionPattern(version);
      analysis.versionAnalysis = versionAnalysis;

      // Check for security vulnerabilities
      const securityAnalysis = await this.checkSecurityVulnerabilities(name, version);
      analysis.security = securityAnalysis;

      // Analyze bundle impact
      const bundleImpact = await this.analyzeDependencyBundleImpact(name);
      analysis.bundleImpact = bundleImpact;

      // Generate insights
      analysis.insights = this.generateDependencyInsights(analysis);

      // Generate recommendations
      analysis.recommendations = this.generateDependencyRecommendations(analysis);

    } catch (error) {
      this.log(`Failed to analyze dependency ${name}: ${error.message}`, 'WARN');
      analysis.error = error.message;
    }

    return analysis;
  }

  async analyzeDependencyUsage(dependencyName) {
    const usage = {
      isUsed: false,
      usageCount: 0,
      files: [],
      importPatterns: []
    };

    try {
      // Search for imports in code files
      const codeFiles = this.findCodeFiles();
      
      for (const file of codeFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for different import patterns
        const importPatterns = [
          new RegExp(`import\\s+.*?from\\s+['"]${dependencyName}['"]`, 'g'),
          new RegExp(`import\\s+['"]${dependencyName}['"]`, 'g'),
          new RegExp(`require\\s*\\(\\s*['"]${dependencyName}['"]\\s*\\)`, 'g'),
          new RegExp(`from\\s+['"]${dependencyName}['"]`, 'g')
        ];

        importPatterns.forEach(pattern => {
          const matches = content.match(pattern);
          if (matches) {
            usage.isUsed = true;
            usage.usageCount += matches.length;
            usage.files.push(file);
            usage.importPatterns.push(...matches);
          }
        });
      }

      // Check for dynamic imports
      const dynamicImportPattern = new RegExp(`import\\s*\\(\\s*['"]${dependencyName}['"]\\s*\\)`, 'g');
      codeFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const matches = content.match(dynamicImportPattern);
        if (matches) {
          usage.isUsed = true;
          usage.usageCount += matches.length;
          usage.files.push(file);
          usage.importPatterns.push(...matches);
        }
      });

    } catch (error) {
      this.log(`Failed to analyze usage for ${dependencyName}: ${error.message}`, 'WARN');
    }

    return usage;
  }

  analyzeVersionPattern(version) {
    const analysis = {
      pattern: 'unknown',
      isLatest: false,
      isStable: false,
      updateRecommendation: 'none'
    };

    // Remove range indicators
    const cleanVersion = version.replace(/[\^~><=]/g, '');
    
    // Check version pattern
    if (version.startsWith('^')) {
      analysis.pattern = 'caret';
      analysis.updateRecommendation = 'minor';
    } else if (version.startsWith('~')) {
      analysis.pattern = 'tilde';
      analysis.updateRecommendation = 'patch';
    } else if (version.startsWith('>=')) {
      analysis.pattern = 'greater-equal';
      analysis.updateRecommendation = 'major';
    } else if (version.startsWith('>')) {
      analysis.pattern = 'greater';
      analysis.updateRecommendation = 'major';
    } else if (version === '*' || version === 'latest') {
      analysis.pattern = 'latest';
      analysis.isLatest = true;
      analysis.updateRecommendation = 'none';
    } else if (!version.includes(' ')) {
      analysis.pattern = 'exact';
      analysis.updateRecommendation = 'patch';
    }

    // Check if version is stable (no alpha, beta, rc, etc.)
    analysis.isStable = !/[a-zA-Z]/.test(cleanVersion);

    return analysis;
  }

  async checkSecurityVulnerabilities(dependencyName, version) {
    const security = {
      hasVulnerabilities: false,
      vulnerabilityCount: 0,
      severity: 'none',
      details: []
    };

    try {
      // Run npm audit for the specific package
      const auditResult = execSync(`npm audit --json --audit-level=moderate`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditResult);
      
      if (auditData.vulnerabilities) {
        Object.values(auditData.vulnerabilities).forEach(vuln => {
          if (vuln.name === dependencyName || vuln.from?.includes(dependencyName)) {
            security.hasVulnerabilities = true;
            security.vulnerabilityCount++;
            
            const severity = vuln.severity || 'unknown';
            if (severity === 'high' || severity === 'critical') {
              security.severity = severity;
            }
            
            security.details.push({
              id: vuln.id,
              title: vuln.title,
              severity: vuln.severity,
              description: vuln.description,
              recommendation: vuln.recommendation
            });
          }
        });
      }

    } catch (error) {
      // npm audit might fail if there are no vulnerabilities or other issues
      this.log(`Security check for ${dependencyName} completed: ${error.message}`, 'INFO');
    }

    return security;
  }

  async analyzeDependencyBundleImpact(dependencyName) {
    const impact = {
      estimatedSize: 0,
      isTreeShakeable: false,
      bundleImpact: 'low',
      optimization: 'none'
    };

    try {
      // Check if dependency supports tree shaking
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules', dependencyName);
      if (fs.existsSync(nodeModulesPath)) {
        const packageJsonPath = path.join(nodeModulesPath, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
          const depPackageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
          
          // Check for ES modules support
          if (depPackageJson.module || depPackageJson.exports) {
            impact.isTreeShakeable = true;
            impact.optimization = 'tree-shaking';
          }
          
          // Check for side effects
          if (depPackageJson.sideEffects === false) {
            impact.optimization = 'side-effect-free';
          }
        }
      }

      // Estimate bundle size based on dependency type
      if (dependencyName.includes('ui') || dependencyName.includes('component')) {
        impact.estimatedSize = 'medium';
        impact.bundleImpact = 'medium';
      } else if (dependencyName.includes('util') || dependencyName.includes('helper')) {
        impact.estimatedSize = 'small';
        impact.bundleImpact = 'low';
      } else if (dependencyName.includes('framework') || dependencyName.includes('library')) {
        impact.estimatedSize = 'large';
        impact.bundleImpact = 'high';
      }

    } catch (error) {
      this.log(`Failed to analyze bundle impact for ${dependencyName}: ${error.message}`, 'WARN');
    }

    return impact;
  }

  async analyzePackageLock(packageLockPath) {
    const analysis = {
      lockFileSize: 0,
      dependencyCount: 0,
      duplicateDependencies: 0,
      resolutionIssues: 0
    };

    try {
      const stats = fs.statSync(packageLockPath);
      analysis.lockFileSize = stats.size;

      const lockContent = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
      
      if (lockContent.dependencies) {
        analysis.dependencyCount = Object.keys(lockContent.dependencies).length;
        
        // Check for duplicate dependencies
        const allDeps = new Set();
        const duplicates = new Set();
        
        Object.keys(lockContent.dependencies).forEach(dep => {
          if (allDeps.has(dep)) {
            duplicates.add(dep);
          } else {
            allDeps.add(dep);
          }
        });
        
        analysis.duplicateDependencies = duplicates.size;
      }

    } catch (error) {
      this.log(`Failed to analyze package-lock.json: ${error.message}`, 'WARN');
    }

    return analysis;
  }

  async analyzeBundleImpact(dependencies) {
    const bundleAnalysis = {
      totalEstimatedSize: 'unknown',
      optimizationOpportunities: [],
      criticalDependencies: [],
      removableDependencies: []
    };

    try {
      // Analyze dependencies that might be removable
      for (const [name, analysis] of Object.entries(dependencies)) {
        if (analysis.usage && !analysis.usage.isUsed) {
          bundleAnalysis.removableDependencies.push({
            name,
            reason: 'Unused dependency',
            potentialSavings: 'medium'
          });
        }
        
        if (analysis.bundleImpact && analysis.bundleImpact.bundleImpact === 'high') {
          bundleAnalysis.criticalDependencies.push({
            name,
            impact: analysis.bundleImpact.bundleImpact,
            optimization: analysis.bundleImpact.optimization
          });
        }
      }

      // Identify optimization opportunities
      bundleAnalysis.optimizationOpportunities = this.identifyBundleOptimizations(dependencies);

    } catch (error) {
      this.log(`Failed to analyze bundle impact: ${error.message}`, 'WARN');
    }

    return bundleAnalysis;
  }

  identifyBundleOptimizations(dependencies) {
    const opportunities = [];

    // Check for unused dependencies
    const unusedDeps = Object.entries(dependencies).filter(([name, analysis]) => 
      analysis.usage && !analysis.usage.isUsed
    );

    if (unusedDeps.length > 0) {
      opportunities.push({
        type: 'REMOVE_UNUSED',
        priority: 'HIGH',
        description: `Remove ${unusedDeps.length} unused dependencies`,
        potentialSavings: 'significant',
        dependencies: unusedDeps.map(([name]) => name)
      });
    }

    // Check for large dependencies that could be replaced
    const largeDeps = Object.entries(dependencies).filter(([name, analysis]) => 
      analysis.bundleImpact && analysis.bundleImpact.estimatedSize === 'large'
    );

    if (largeDeps.length > 0) {
      opportunities.push({
        type: 'OPTIMIZE_LARGE_DEPS',
        priority: 'MEDIUM',
        description: `Optimize ${largeDeps.length} large dependencies`,
        potentialSavings: 'moderate',
        dependencies: largeDeps.map(([name]) => name)
      });
    }

    // Check for security vulnerabilities
    const vulnerableDeps = Object.entries(dependencies).filter(([name, analysis]) => 
      analysis.security && analysis.security.hasVulnerabilities
    );

    if (vulnerableDeps.length > 0) {
      opportunities.push({
        type: 'SECURITY_UPDATE',
        priority: 'CRITICAL',
        description: `Update ${vulnerableDeps.length} vulnerable dependencies`,
        potentialSavings: 'security',
        dependencies: vulnerableDeps.map(([name]) => name)
      });
    }

    return opportunities;
  }

  generateDependencyInsights(analysis) {
    const insights = [];

    // Usage insights
    if (analysis.usage && !analysis.usage.isUsed) {
      insights.push({
        type: 'UNUSED_DEPENDENCY',
        message: `Dependency ${analysis.name} is not used in the codebase`,
        impact: 'Bundle size and maintenance overhead',
        action: 'Consider removing if not needed'
      });
    }

    // Version insights
    if (analysis.versionAnalysis) {
      if (analysis.versionAnalysis.pattern === 'exact') {
        insights.push({
          type: 'VERSION_LOCKING',
          message: `Dependency ${analysis.name} is locked to exact version`,
          impact: 'Security updates and bug fixes may be missed',
          action: 'Consider using semver ranges for better updates'
        });
      }
      
      if (!analysis.versionAnalysis.isStable) {
        insights.push({
          type: 'UNSTABLE_VERSION',
          message: `Dependency ${analysis.name} uses unstable version`,
          impact: 'Potential breaking changes and instability',
          action: 'Consider using stable versions in production'
        });
      }
    }

    // Security insights
    if (analysis.security && analysis.security.hasVulnerabilities) {
      insights.push({
        type: 'SECURITY_VULNERABILITY',
        message: `Dependency ${analysis.name} has security vulnerabilities`,
        impact: 'Security risk to the application',
        action: 'Update to latest secure version immediately'
      });
    }

    // Bundle insights
    if (analysis.bundleImpact) {
      if (analysis.bundleImpact.bundleImpact === 'high') {
        insights.push({
          type: 'HIGH_BUNDLE_IMPACT',
          message: `Dependency ${analysis.name} has high bundle impact`,
          impact: 'Increased bundle size and load time',
          action: 'Consider alternatives or lazy loading'
        });
      }
      
      if (!analysis.bundleImpact.isTreeShakeable) {
        insights.push({
          type: 'NO_TREE_SHAKING',
          message: `Dependency ${analysis.name} doesn't support tree shaking`,
          impact: 'Unused code may be included in bundle',
          action: 'Look for tree-shakeable alternatives'
        });
      }
    }

    return insights;
  }

  generateDependencyRecommendations(analysis) {
    const recommendations = [];

    // High priority recommendations
    if (analysis.security && analysis.security.hasVulnerabilities) {
      recommendations.push({
        type: 'SECURITY_UPDATE',
        priority: 'CRITICAL',
        message: `Update ${analysis.name} to fix security vulnerabilities`,
        action: `npm update ${analysis.name}`,
        impact: 'Security'
      });
    }

    if (analysis.usage && !analysis.usage.isUsed) {
      recommendations.push({
        type: 'REMOVE_DEPENDENCY',
        priority: 'HIGH',
        message: `Remove unused dependency ${analysis.name}`,
        action: `npm uninstall ${analysis.name}`,
        impact: 'Bundle size and maintenance'
      });
    }

    // Medium priority recommendations
    if (analysis.versionAnalysis && analysis.versionAnalysis.pattern === 'exact') {
      recommendations.push({
        type: 'VERSION_FLEXIBILITY',
        priority: 'MEDIUM',
        message: `Allow minor updates for ${analysis.name}`,
        action: `Change version to ^${analysis.version.replace(/[\^~><=]/g, '')}`,
        impact: 'Security and bug fixes'
      });
    }

    if (analysis.bundleImpact && analysis.bundleImpact.bundleImpact === 'high') {
      recommendations.push({
        type: 'BUNDLE_OPTIMIZATION',
        priority: 'MEDIUM',
        message: `Optimize bundle impact of ${analysis.name}`,
        action: 'Consider alternatives or implement lazy loading',
        impact: 'Performance'
      });
    }

    // Low priority recommendations
    if (analysis.bundleImpact && !analysis.bundleImpact.isTreeShakeable) {
      recommendations.push({
        type: 'TREE_SHAKING',
        priority: 'LOW',
        message: `Look for tree-shakeable alternative to ${analysis.name}`,
        action: 'Research modern alternatives',
        impact: 'Bundle size'
      });
    }

    return recommendations;
  }

  async generateIntelligenceReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalDependencies: 0,
          unusedDependencies: 0,
          vulnerableDependencies: 0,
          highImpactDependencies: 0,
          optimizationOpportunities: 0
        },
        topRecommendations: [],
        securitySummary: {},
        bundleOptimizations: [],
        trends: {}
      };

      // Analyze latest dependency analysis
      if (this.dependencyAnalysis.analysis.length > 0) {
        const latestAnalysis = this.dependencyAnalysis.analysis[this.dependencyAnalysis.analysis.length - 1];
        
        report.summary.totalDependencies = latestAnalysis.totalDependencies;
        
        // Count different types of dependencies
        Object.values(latestAnalysis.dependencies).forEach(dep => {
          if (dep.usage && !dep.usage.isUsed) {
            report.summary.unusedDependencies++;
          }
          
          if (dep.security && dep.security.hasVulnerabilities) {
            report.summary.vulnerableDependencies++;
          }
          
          if (dep.bundleImpact && dep.bundleImpact.bundleImpact === 'high') {
            report.summary.highImpactDependencies++;
          }
        });

        // Get top recommendations
        const allRecommendations = Object.values(latestAnalysis.dependencies)
          .flatMap(dep => dep.recommendations || [])
          .sort((a, b) => {
            const priorityOrder = { CRITICAL: 4, HIGH: 3, MEDIUM: 2, LOW: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
          });

        report.topRecommendations = allRecommendations.slice(0, 10);
        report.summary.optimizationOpportunities = allRecommendations.length;

        // Bundle optimizations
        if (latestAnalysis.bundleAnalysis) {
          report.bundleOptimizations = latestAnalysis.bundleAnalysis.optimizationOpportunities;
        }
      }

      // Security summary
      const allDeps = Object.values(this.intelligenceData.dependencies);
      report.securitySummary = {
        totalVulnerabilities: allDeps.reduce((sum, dep) => 
          sum + (dep.security?.vulnerabilityCount || 0), 0),
        criticalVulnerabilities: allDeps.filter(dep => 
          dep.security?.severity === 'critical').length,
        highVulnerabilities: allDeps.filter(dep => 
          dep.security?.severity === 'high').length
      };

      // Save report
      const reportPath = path.join(this.projectRoot, 'logs', 'dependency-intelligence-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

      this.log(`Dependency intelligence report generated: ${reportPath}`);
      return report;

    } catch (error) {
      this.log(`Failed to generate intelligence report: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async run() {
    this.log('🚀 Starting Smart Dependency Intelligence...');
    
    try {
      // Analyze dependencies
      const analysis = await this.analyzeDependencies();
      
      if (!analysis) {
        throw new Error('Dependency analysis failed');
      }

      // Update intelligence data
      this.intelligenceData.dependencies = analysis.dependencies;
      this.saveIntelligenceData();

      // Generate comprehensive report
      const report = await this.generateIntelligenceReport();
      
      this.log(`✅ Dependency intelligence completed. Analyzed ${analysis.totalDependencies} dependencies.`);
      
      if (report) {
        this.log(`📊 Report generated with ${report.summary.optimizationOpportunities} optimization opportunities.`);
        this.log(`🔒 Security: ${report.securitySummary.totalVulnerabilities} vulnerabilities found.`);
        this.log(`📦 Bundle: ${report.summary.unusedDependencies} unused dependencies identified.`);
      }

      return { success: true, analysis, report };

    } catch (error) {
      this.log(`❌ Dependency intelligence failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new SmartDependencyIntelligence();
  automation.run().then(result => {
    if (result.success) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = SmartDependencyIntelligence;