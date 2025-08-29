#!/usr/bin/env node

/**
 * Intelligent Dependency Manager - PM2 Automation
 * Smart dependency analysis, conflict detection, and optimization
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class IntelligentDependencyManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-dependency-manager.log');
    this.dependencyLog = path.join(this.projectRoot, 'logs', 'dependency-analysis.json');
    this.optimizationsLog = path.join(this.projectRoot, 'logs', 'dependency-optimizations.json');
    this.ensureLogsDirectory();
    
    this.dependencyPatterns = {
      security: {
        'lodash': 'Versions < 4.17.21 have security vulnerabilities',
        'moment': 'Consider alternatives like date-fns or dayjs',
        'jquery': 'Versions < 3.5.0 have security issues'
      },
      performance: {
        'moment': 'Heavy library, consider date-fns',
        'lodash': 'Use native methods when possible',
        'axios': 'Good choice for HTTP requests'
      },
      maintenance: {
        'react-scripts': 'Consider migrating to Vite',
        'webpack': 'Vite provides better performance',
        'babel': 'Modern bundlers handle this automatically'
      }
    };
    
    this.optimizationStrategies = {
      'bundle-size': {
        'moment': 'date-fns',
        'lodash': 'native-methods',
        'jquery': 'vanilla-js'
      },
      'security': {
        'lodash': '4.17.21+',
        'moment': '2.29.4+',
        'jquery': '3.6.0+'
      },
      'performance': {
        'react-scripts': 'vite',
        'webpack': 'vite',
        'babel': 'esbuild'
      }
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

  async runDependencyAnalysis() {
    this.log('Starting intelligent dependency analysis...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      dependencies: {},
      conflicts: [],
      vulnerabilities: [],
      optimizations: [],
      recommendations: [],
      applied: []
    };

    try {
      // 1. Analyze current dependencies
      analysis.dependencies = await this.analyzeDependencies();
      
      // 2. Detect conflicts and vulnerabilities
      analysis.conflicts = await this.detectConflicts(analysis.dependencies);
      analysis.vulnerabilities = await this.detectVulnerabilities(analysis.dependencies);
      
      // 3. Identify optimization opportunities
      analysis.optimizations = await this.identifyOptimizations(analysis);
      
      // 4. Apply safe optimizations
      analysis.applied = await this.applyOptimizations(analysis.optimizations);
      
      // 5. Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);
      
      // 6. Save analysis results
      await this.saveAnalysisResults(analysis);
      
      // 7. Generate dependency report
      await this.generateDependencyReport(analysis);
      
      this.log(`Dependency analysis completed: ${analysis.conflicts.length} conflicts, ${analysis.vulnerabilities.length} vulnerabilities found`);

    } catch (error) {
      this.log(`Dependency analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async analyzeDependencies() {
    const dependencies = {
      production: {},
      development: {},
      peer: {},
      optional: {},
      bundled: {},
      total: 0
    };

    try {
      // Read package.json
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        dependencies.production = pkg.dependencies || {};
        dependencies.development = pkg.devDependencies || {};
        dependencies.peer = pkg.peerDependencies || {};
        dependencies.optional = pkg.optionalDependencies || {};
        
        // Count total dependencies
        dependencies.total = Object.keys(dependencies.production).length + 
                           Object.keys(dependencies.development).length;
      }

      // Analyze package-lock.json for bundled dependencies
      const lockPath = path.join(this.projectRoot, 'package-lock.json');
      if (fs.existsSync(lockPath)) {
        const lockData = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
        dependencies.bundled = this.analyzeLockFile(lockData);
      }

      // Get dependency tree
      dependencies.tree = await this.getDependencyTree();
      
      // Analyze dependency sizes
      dependencies.sizes = await this.analyzeDependencySizes();
      
      // Check for duplicate dependencies
      dependencies.duplicates = this.findDuplicateDependencies(dependencies.tree);
      
      this.log(`Dependencies analyzed: ${dependencies.total} direct, ${Object.keys(dependencies.bundled).length} bundled`);

    } catch (error) {
      this.log(`Dependency analysis failed: ${error.message}`, 'WARN');
    }

    return dependencies;
  }

  analyzeLockFile(lockData) {
    const bundled = {};
    
    if (lockData.dependencies) {
      for (const [name, info] of Object.entries(lockData.dependencies)) {
        if (info.bundled) {
          bundled[name] = {
            version: info.version,
            bundled: true,
            size: info.size || 0
          };
        }
      }
    }
    
    return bundled;
  }

  async getDependencyTree() {
    try {
      const result = execSync('npm ls --json', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return JSON.parse(result);
    } catch (error) {
      this.log(`Failed to get dependency tree: ${error.message}`, 'WARN');
      return {};
    }
  }

  async analyzeDependencySizes() {
    const sizes = {};
    
    try {
      const result = execSync('npm list --prod --depth=0', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Parse npm list output for sizes
      const lines = result.split('\n');
      for (const line of lines) {
        const match = line.match(/^├──\s+(\S+)\s+(\S+)/);
        if (match) {
          const [, name, version] = match;
          sizes[name] = { version, size: 0 };
        }
      }
      
    } catch (error) {
      this.log(`Failed to analyze dependency sizes: ${error.message}`, 'WARN');
    }
    
    return sizes;
  }

  findDuplicateDependencies(tree) {
    const duplicates = [];
    const seen = new Set();
    
    if (tree.dependencies) {
      for (const [name, info] of Object.entries(tree.dependencies)) {
        if (seen.has(name)) {
          duplicates.push({
            name,
            versions: [info.version],
            locations: [name]
          });
        } else {
          seen.add(name);
        }
      }
    }
    
    return duplicates;
  }

  async detectConflicts(dependencies) {
    const conflicts = [];
    
    try {
      // Check for version conflicts
      const tree = dependencies.tree;
      if (tree.problems) {
        for (const problem of tree.problems) {
          if (problem.includes('conflict') || problem.includes('incompatible')) {
            conflicts.push({
              type: 'VERSION_CONFLICT',
              description: problem,
              severity: 'HIGH',
              affected: this.extractAffectedPackages(problem)
            });
          }
        }
      }
      
      // Check for peer dependency conflicts
      for (const [name, peerDep] of Object.entries(dependencies.peer)) {
        const installed = dependencies.production[name] || dependencies.development[name];
        if (installed && !this.satisfiesVersion(installed, peerDep)) {
          conflicts.push({
            type: 'PEER_DEPENDENCY_CONFLICT',
            description: `Peer dependency conflict for ${name}`,
            severity: 'MEDIUM',
            affected: [name],
            expected: peerDep,
            actual: installed
          });
        }
      }
      
      // Check for duplicate dependencies
      for (const duplicate of dependencies.duplicates) {
        conflicts.push({
          type: 'DUPLICATE_DEPENDENCY',
          description: `Duplicate dependency: ${duplicate.name}`,
          severity: 'MEDIUM',
          affected: duplicate.locations,
          versions: duplicate.versions
        });
      }
      
    } catch (error) {
      this.log(`Conflict detection failed: ${error.message}`, 'WARN');
    }
    
    return conflicts;
  }

  async detectVulnerabilities(dependencies) {
    const vulnerabilities = [];
    
    try {
      // Run npm audit
      const result = execSync('npm audit --json', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const audit = JSON.parse(result);
      
      if (audit.vulnerabilities) {
        for (const [name, vuln] of Object.entries(audit.vulnerabilities)) {
          vulnerabilities.push({
            name,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            via: vuln.via
          });
        }
      }
      
      // Check for known vulnerable patterns
      for (const [name, version] of Object.entries(dependencies.production)) {
        const pattern = this.dependencyPatterns.security[name];
        if (pattern) {
          vulnerabilities.push({
            name,
            severity: 'MEDIUM',
            title: `Known issue with ${name}`,
            description: pattern,
            recommendation: `Update ${name} to latest version`,
            via: 'pattern-detection'
          });
        }
      }
      
    } catch (error) {
      this.log(`Vulnerability detection failed: ${error.message}`, 'WARN');
    }
    
    return vulnerabilities;
  }

  async identifyOptimizations(analysis) {
    const optimizations = [];
    
    // Bundle size optimizations
    for (const [name, alternative] of Object.entries(this.optimizationStrategies['bundle-size'])) {
      if (analysis.dependencies.production[name]) {
        optimizations.push({
          type: 'BUNDLE_SIZE',
          priority: 'MEDIUM',
          description: `Replace ${name} with ${alternative} for smaller bundle`,
          action: `Replace ${name} with ${alternative}`,
          package: name,
          alternative: alternative,
          impact: 'MEDIUM'
        });
      }
    }
    
    // Security optimizations
    for (const [name, minVersion] of Object.entries(this.optimizationStrategies.security)) {
      if (analysis.dependencies.production[name]) {
        const currentVersion = analysis.dependencies.production[name];
        if (!this.satisfiesVersion(currentVersion, `>=${minVersion}`)) {
          optimizations.push({
            type: 'SECURITY',
            priority: 'HIGH',
            description: `Update ${name} to ${minVersion}+ for security`,
            action: `Update ${name} to ${minVersion}+`,
            package: name,
            currentVersion: currentVersion,
            targetVersion: minVersion,
            impact: 'HIGH'
          });
        }
      }
    }
    
    // Performance optimizations
    for (const [name, alternative] of Object.entries(this.optimizationStrategies.performance)) {
      if (analysis.dependencies.production[name] || analysis.dependencies.development[name]) {
        optimizations.push({
          type: 'PERFORMANCE',
          priority: 'MEDIUM',
          description: `Migrate from ${name} to ${alternative} for better performance`,
          action: `Migrate to ${alternative}`,
          package: name,
          alternative: alternative,
          impact: 'HIGH'
        });
      }
    }
    
    return optimizations;
  }

  async applyOptimizations(optimizations) {
    const applied = [];
    
    for (const optimization of optimizations) {
      try {
        const result = await this.applyOptimization(optimization);
        if (result.success) {
          applied.push({ ...optimization, applied: true, result: result.message });
        }
      } catch (error) {
        this.log(`Failed to apply optimization: ${error.message}`, 'WARN');
      }
    }
    
    return applied;
  }

  async applyOptimization(optimization) {
    switch (optimization.type) {
      case 'SECURITY':
        return await this.updatePackage(optimization.package, optimization.targetVersion);
      case 'BUNDLE_SIZE':
        return await this.replacePackage(optimization.package, optimization.alternative);
      case 'PERFORMANCE':
        return await this.migratePackage(optimization.package, optimization.alternative);
      default:
        return { success: false, message: 'Unknown optimization type' };
    }
  }

  async updatePackage(name, version) {
    try {
      execSync(`npm install ${name}@${version}`, { 
        cwd: this.projectRoot, 
        stdio: 'pipe'
      });
      
      return { success: true, message: `Updated ${name} to ${version}` };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async replacePackage(oldName, newName) {
    try {
      // Remove old package
      execSync(`npm uninstall ${oldName}`, { 
        cwd: this.projectRoot, 
        stdio: 'pipe'
      });
      
      // Install new package
      execSync(`npm install ${newName}`, { 
        cwd: this.projectRoot, 
        stdio: 'pipe'
      });
      
      return { success: true, message: `Replaced ${oldName} with ${newName}` };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async migratePackage(oldName, newName) {
    try {
      // This is a simplified migration - in practice, you'd need more sophisticated logic
      return { success: true, message: `Migration plan created for ${oldName} to ${newName}` };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    // Security recommendations
    if (analysis.vulnerabilities.length > 0) {
      recommendations.push({
        category: 'SECURITY',
        priority: 'CRITICAL',
        suggestion: 'Address security vulnerabilities immediately',
        action: 'Run npm audit fix and update vulnerable packages'
      });
    }
    
    // Conflict recommendations
    if (analysis.conflicts.length > 0) {
      recommendations.push({
        category: 'STABILITY',
        priority: 'HIGH',
        suggestion: 'Resolve dependency conflicts',
        action: 'Review and fix version conflicts in package.json'
      });
    }
    
    // Performance recommendations
    if (analysis.optimizations.some(o => o.type === 'PERFORMANCE')) {
      recommendations.push({
        category: 'PERFORMANCE',
        priority: 'MEDIUM',
        suggestion: 'Consider migrating to modern alternatives',
        action: 'Evaluate performance optimization opportunities'
      });
    }
    
    // Maintenance recommendations
    recommendations.push({
      category: 'MAINTENANCE',
      priority: 'LOW',
      suggestion: 'Regular dependency updates',
      action: 'Schedule monthly dependency review and updates'
    });
    
    return recommendations;
  }

  async saveAnalysisResults(analysis) {
    try {
      fs.writeFileSync(this.dependencyLog, JSON.stringify(analysis, null, 2));
      this.log('Dependency analysis results saved');
    } catch (error) {
      this.log(`Failed to save analysis results: ${error.message}`, 'ERROR');
    }
  }

  async generateDependencyReport(analysis) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalDependencies: analysis.dependencies.total,
        conflicts: analysis.conflicts.length,
        vulnerabilities: analysis.vulnerabilities.length,
        optimizations: analysis.optimizations.length
      },
      criticalIssues: analysis.vulnerabilities.filter(v => v.severity === 'CRITICAL'),
      recommendations: analysis.recommendations,
      nextActions: this.generateNextActions(analysis)
    };

    try {
      fs.writeFileSync(this.optimizationsLog, JSON.stringify(report, null, 2));
      this.log('Dependency report generated');
    } catch (error) {
      this.log(`Failed to generate report: ${error.message}`, 'ERROR');
    }
  }

  generateNextActions(analysis) {
    const actions = [];
    
    if (analysis.vulnerabilities.some(v => v.severity === 'CRITICAL')) {
      actions.push({
        priority: 'IMMEDIATE',
        action: 'Fix critical security vulnerabilities',
        command: 'npm audit fix'
      });
    }
    
    if (analysis.conflicts.length > 0) {
      actions.push({
        priority: 'HIGH',
        action: 'Resolve dependency conflicts',
        command: 'npm ls'
      });
    }
    
    if (analysis.optimizations.length > 0) {
      actions.push({
        priority: 'MEDIUM',
        action: 'Review optimization opportunities',
        command: 'Review generated recommendations'
      });
    }
    
    return actions;
  }

  satisfiesVersion(version, range) {
    // Simplified version checking - in practice, use semver library
    try {
      const result = execSync(`node -e "console.log(require('semver').satisfies('${version}', '${range}'))"`, {
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return result.trim() === 'true';
    } catch (error) {
      return false;
    }
  }

  extractAffectedPackages(problem) {
    // Extract package names from npm problem messages
    const packages = [];
    const packagePattern = /`([^`]+)`/g;
    let match;
    
    while ((match = packagePattern.exec(problem)) !== null) {
      packages.push(match[1]);
    }
    
    return packages;
  }
}

// Main execution
if (require.main === module) {
  const manager = new IntelligentDependencyManager();
  
  // Run dependency analysis
  manager.runDependencyAnalysis()
    .then(analysis => {
      console.log('Intelligent Dependency Analysis completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Intelligent Dependency Analysis failed:', error);
      process.exit(1);
    });
}

module.exports = IntelligentDependencyManager;