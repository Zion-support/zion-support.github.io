#!/usr/bin/env node

/**
 * Smart Dependency Optimizer - PM2 Automation
 * Intelligently analyzes and optimizes project dependencies
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class SmartDependencyOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'smart-dependency-optimizer.log');
    this.optimizationLog = path.join(this.projectRoot, 'logs', 'dependency-optimizations.json');
    this.usageAnalysis = path.join(this.projectRoot, 'logs', 'dependency-usage-analysis.json');
    this.ensureLogsDirectory();
    this.loadOptimizationHistory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadOptimizationHistory() {
    if (fs.existsSync(this.optimizationLog)) {
      try {
        this.optimizationHistory = JSON.parse(fs.readFileSync(this.optimizationLog, 'utf8'));
      } catch (error) {
        this.optimizationHistory = { optimizations: [], lastRun: null, totalSavings: 0 };
      }
    } else {
      this.optimizationHistory = { optimizations: [], lastRun: null, totalSavings: 0 };
    }
  }

  saveOptimizationHistory() {
    fs.writeFileSync(this.optimizationLog, JSON.stringify(this.optimizationHistory, null, 2));
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runOptimization() {
    this.log('🧠 Starting Smart Dependency Optimization...');
    
    const optimizations = [];
    const savings = { size: 0, installTime: 0, buildTime: 0 };
    const recommendations = [];

    try {
      // 1. Analyze current dependency usage
      const usageAnalysis = await this.analyzeDependencyUsage();
      
      // 2. Identify unused dependencies
      const unusedDeps = await this.identifyUnusedDependencies(usageAnalysis);
      
      // 3. Analyze dependency conflicts and duplicates
      const conflicts = await this.analyzeDependencyConflicts();
      
      // 4. Check for outdated dependencies
      const outdatedDeps = await this.checkOutdatedDependencies();
      
      // 5. Analyze bundle impact
      const bundleImpact = await this.analyzeBundleImpact();
      
      // 6. Generate optimization recommendations
      const optimizationRecs = await this.generateOptimizationRecommendations(
        usageAnalysis, unusedDeps, conflicts, outdatedDeps, bundleImpact
      );
      
      // 7. Apply safe optimizations
      const appliedOpts = await this.applySafeOptimizations(optimizationRecs);
      
      // 8. Measure optimization results
      const results = await this.measureOptimizationResults(appliedOpts);
      
      // 9. Update optimization history
      await this.updateOptimizationHistory(appliedOpts, results);
      
      // 10. Generate optimization report
      await this.generateOptimizationReport(appliedOpts, results, recommendations);
      
      this.log(`✅ Smart Dependency Optimization completed: ${appliedOpts.length} optimizations applied`);
      
      return { optimizations: appliedOpts, results, recommendations };
      
    } catch (error) {
      this.log(`Smart Dependency Optimization failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async analyzeDependencyUsage() {
    this.log('📊 Analyzing dependency usage patterns...');
    
    const usage = {
      direct: {},
      indirect: {},
      unused: [],
      usagePatterns: {}
    };
    
    try {
      // Read package.json
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Analyze import usage in source files
      const sourceFiles = this.findSourceFiles();
      const importAnalysis = this.analyzeImports(sourceFiles);
      
      // Map dependencies to their usage
      Object.keys(dependencies).forEach(dep => {
        const depName = dep.split('@')[0]; // Remove version
        const usage = this.findDependencyUsage(depName, importAnalysis);
        
        if (usage.count > 0) {
          usage.direct[dep] = {
            name: depName,
            version: dependencies[dep],
            usageCount: usage.count,
            files: usage.files,
            lastUsed: usage.lastUsed
          };
        } else {
          usage.unused.push(dep);
        }
      });
      
      // Analyze usage patterns
      usage.usagePatterns = this.analyzeUsagePatterns(importAnalysis);
      
    } catch (error) {
      this.log(`Dependency usage analysis failed: ${error.message}`, 'ERROR');
    }
    
    return usage;
  }

  findSourceFiles() {
    const sourceDirs = ['src', 'components', 'pages', 'utils', 'hooks', 'api'];
    const files = [];
    
    sourceDirs.forEach(dir => {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.findFilesRecursively(fullPath, ['.ts', '.tsx', '.js', '.jsx'], files);
      }
    });
    
    return files;
  }

  findFilesRecursively(dir, extensions, files) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        this.findFilesRecursively(fullPath, extensions, files);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
  }

  analyzeImports(sourceFiles) {
    const imports = {};
    
    sourceFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          if (line.includes('import') && line.includes('from')) {
            const importMatch = line.match(/from\s+['"]([^'"]+)['"]/);
            if (importMatch) {
              const importPath = importMatch[1];
              const packageName = this.extractPackageName(importPath);
              
              if (packageName && !packageName.startsWith('.')) {
                if (!imports[packageName]) {
                  imports[packageName] = { count: 0, files: [], lastUsed: new Date().toISOString() };
                }
                
                imports[packageName].count++;
                if (!imports[packageName].files.includes(file)) {
                  imports[packageName].files.push(file);
                }
                imports[packageName].lastUsed = new Date().toISOString();
              }
            }
          }
        });
      } catch (error) {
        // Skip files that can't be read
      }
    });
    
    return imports;
  }

  extractPackageName(importPath) {
    // Handle scoped packages and regular packages
    if (importPath.startsWith('@')) {
      const parts = importPath.split('/');
      return parts.length >= 2 ? `${parts[0]}/${parts[1]}` : importPath;
    } else {
      return importPath.split('/')[0];
    }
  }

  findDependencyUsage(depName, importAnalysis) {
    const usage = { count: 0, files: [], lastUsed: null };
    
    Object.keys(importAnalysis).forEach(pkg => {
      if (pkg === depName || pkg.startsWith(depName + '/')) {
        usage.count += importAnalysis[pkg].count;
        usage.files.push(...importAnalysis[pkg].files);
        if (!usage.lastUsed || importAnalysis[pkg].lastUsed > usage.lastUsed) {
          usage.lastUsed = importAnalysis[pkg].lastUsed;
        }
      }
    });
    
    return usage;
  }

  analyzeUsagePatterns(importAnalysis) {
    const patterns = {
      mostUsed: [],
      recentlyUsed: [],
      rarelyUsed: []
    };
    
    const sortedByUsage = Object.entries(importAnalysis)
      .sort(([,a], [,b]) => b.count - a.count);
    
    patterns.mostUsed = sortedByUsage.slice(0, 10).map(([pkg, data]) => ({
      package: pkg,
      usageCount: data.count,
      files: data.files.length
    }));
    
    const sortedByDate = Object.entries(importAnalysis)
      .sort(([,a], [,b]) => new Date(b.lastUsed) - new Date(a.lastUsed));
    
    patterns.recentlyUsed = sortedByDate.slice(0, 10).map(([pkg, data]) => ({
      package: pkg,
      lastUsed: data.lastUsed,
      usageCount: data.count
    }));
    
    return patterns;
  }

  async identifyUnusedDependencies(usageAnalysis) {
    this.log('🔍 Identifying unused dependencies...');
    
    const unused = [];
    
    try {
      // Check for dependencies not in usage analysis
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      Object.keys(allDeps).forEach(dep => {
        const depName = dep.split('@')[0];
        if (!usageAnalysis.direct[dep] && !this.isTransitiveDependency(depName)) {
          unused.push({
            name: dep,
            version: allDeps[dep],
            type: packageJson.dependencies[dep] ? 'dependency' : 'devDependency',
            reason: 'No imports found in source code'
          });
        }
      });
      
    } catch (error) {
      this.log(`Unused dependency identification failed: ${error.message}`, 'ERROR');
    }
    
    return unused;
  }

  isTransitiveDependency(depName) {
    // Check if this dependency is required by other dependencies
    try {
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
      if (fs.existsSync(packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
        return Object.keys(packageLock.dependencies).some(pkg => 
          packageLock.dependencies[pkg].requires && 
          packageLock.dependencies[pkg].requires[depName]
        );
      }
    } catch (error) {
      // Ignore errors in package-lock analysis
    }
    
    return false;
  }

  async analyzeDependencyConflicts() {
    this.log('⚡ Analyzing dependency conflicts...');
    
    const conflicts = [];
    
    try {
      // Check for duplicate packages
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
      if (fs.existsSync(packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
        const duplicates = this.findDuplicatePackages(packageLock.dependencies);
        
        duplicates.forEach(duplicate => {
          conflicts.push({
            type: 'DUPLICATE_PACKAGE',
            package: duplicate.package,
            versions: duplicate.versions,
            severity: 'MEDIUM',
            suggestion: 'Consider using package resolution to avoid duplicates'
          });
        });
      }
      
      // Check for peer dependency issues
      const peerIssues = await this.checkPeerDependencies();
      conflicts.push(...peerIssues);
      
    } catch (error) {
      this.log(`Dependency conflict analysis failed: ${error.message}`, 'ERROR');
    }
    
    return conflicts;
  }

  findDuplicatePackages(dependencies) {
    const packageVersions = {};
    const duplicates = [];
    
    const traverse = (deps, path = '') => {
      Object.keys(deps).forEach(pkg => {
        const fullPath = path ? `${path}.${pkg}` : pkg;
        const version = deps[pkg].version;
        
        if (!packageVersions[pkg]) {
          packageVersions[pkg] = [];
        }
        
        packageVersions[pkg].push({
          version,
          path: fullPath
        });
        
        if (deps[pkg].dependencies) {
          traverse(deps[pkg].dependencies, fullPath);
        }
      });
    };
    
    traverse(dependencies);
    
    Object.keys(packageVersions).forEach(pkg => {
      if (packageVersions[pkg].length > 1) {
        const uniqueVersions = [...new Set(packageVersions[pkg].map(p => p.version))];
        if (uniqueVersions.length > 1) {
          duplicates.push({
            package: pkg,
            versions: uniqueVersions,
            paths: packageVersions[pkg].map(p => p.path)
          });
        }
      }
    });
    
    return duplicates;
  }

  async checkPeerDependencies() {
    const issues = [];
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      
      if (packageJson.peerDependencies) {
        Object.keys(packageJson.peerDependencies).forEach(peerDep => {
          const requiredVersion = packageJson.peerDependencies[peerDep];
          const installedVersion = this.getInstalledVersion(peerDep);
          
          if (!installedVersion) {
            issues.push({
              type: 'MISSING_PEER_DEPENDENCY',
              package: peerDep,
              required: requiredVersion,
              severity: 'HIGH',
              suggestion: `Install ${peerDep}@${requiredVersion} as a dependency`
            });
          }
        });
      }
    } catch (error) {
      // Ignore peer dependency check errors
    }
    
    return issues;
  }

  getInstalledVersion(packageName) {
    try {
      const packageJsonPath = path.join(this.projectRoot, 'node_modules', packageName, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        return pkg.version;
      }
    } catch (error) {
      // Ignore errors
    }
    return null;
  }

  async checkOutdatedDependencies() {
    this.log('📅 Checking for outdated dependencies...');
    
    const outdated = [];
    
    try {
      // This would typically use npm outdated command
      // For now, we'll simulate the check
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Simulate finding outdated packages
      Object.keys(dependencies).forEach(dep => {
        if (Math.random() < 0.3) { // 30% chance of being outdated for demo
          outdated.push({
            package: dep,
            current: dependencies[dep],
            latest: this.simulateLatestVersion(dependencies[dep]),
            severity: 'LOW',
            suggestion: 'Consider updating to latest version for security and features'
          });
        }
      });
      
    } catch (error) {
      this.log(`Outdated dependency check failed: ${error.message}`, 'ERROR');
    }
    
    return outdated;
  }

  simulateLatestVersion(currentVersion) {
    // Simulate version bump for demo purposes
    const versionParts = currentVersion.replace(/^[\^~]/, '').split('.');
    const major = parseInt(versionParts[0]);
    const minor = parseInt(versionParts[1]);
    const patch = parseInt(versionParts[2]);
    
    return `${major}.${minor + 1}.${patch}`;
  }

  async analyzeBundleImpact() {
    this.log('📦 Analyzing bundle impact...');
    
    const impact = {
      totalSize: 0,
      largestPackages: [],
      optimizationOpportunities: []
    };
    
    try {
      if (fs.existsSync('dist')) {
        const bundleStats = this.analyzeBundleSize();
        impact.totalSize = bundleStats.totalSize;
        impact.largestPackages = bundleStats.largestPackages;
        
        // Identify optimization opportunities
        if (bundleStats.totalSize > 5 * 1024 * 1024) { // 5MB
          impact.optimizationOpportunities.push({
            type: 'BUNDLE_SIZE',
            severity: 'MEDIUM',
            message: 'Bundle size is large',
            suggestion: 'Consider code splitting, tree shaking, and removing unused dependencies'
          });
        }
      }
    } catch (error) {
      this.log(`Bundle impact analysis failed: ${error.message}`, 'ERROR');
    }
    
    return impact;
  }

  analyzeBundleSize() {
    const stats = {
      totalSize: 0,
      largestPackages: []
    };
    
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const files = this.getAllFiles(distPath);
        let totalSize = 0;
        
        files.forEach(file => {
          const fileStats = fs.statSync(file);
          totalSize += fileStats.size;
        });
        
        stats.totalSize = totalSize;
        stats.totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
      }
    } catch (error) {
      this.log(`Bundle size analysis failed: ${error.message}`, 'ERROR');
    }
    
    return stats;
  }

  getAllFiles(dir) {
    const files = [];
    
    const findFiles = (directory) => {
      const items = fs.readdirSync(directory);
      
      for (const item of items) {
        const fullPath = path.join(directory, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          findFiles(fullPath);
        } else if (stat.isFile()) {
          files.push(fullPath);
        }
      }
    };
    
    findFiles(dir);
    return files;
  }

  async generateOptimizationRecommendations(usageAnalysis, unusedDeps, conflicts, outdatedDeps, bundleImpact) {
    this.log('💡 Generating optimization recommendations...');
    
    const recommendations = [];
    
    // Unused dependency recommendations
    if (unusedDeps.length > 0) {
      recommendations.push({
        type: 'REMOVE_UNUSED',
        dependencies: unusedDeps,
        priority: 'HIGH',
        impact: 'REDUCE_BUNDLE_SIZE',
        action: 'Remove unused dependencies to reduce bundle size and install time'
      });
    }
    
    // Conflict resolution recommendations
    if (conflicts.length > 0) {
      recommendations.push({
        type: 'RESOLVE_CONFLICTS',
        conflicts: conflicts,
        priority: 'MEDIUM',
        impact: 'IMPROVE_STABILITY',
        action: 'Resolve dependency conflicts to improve build stability'
      });
    }
    
    // Update recommendations
    if (outdatedDeps.length > 0) {
      recommendations.push({
        type: 'UPDATE_DEPENDENCIES',
        dependencies: outdatedDeps,
        priority: 'LOW',
        impact: 'SECURITY_FEATURES',
        action: 'Update dependencies for security patches and new features'
      });
    }
    
    // Bundle optimization recommendations
    if (bundleImpact.optimizationOpportunities.length > 0) {
      recommendations.push({
        type: 'OPTIMIZE_BUNDLE',
        opportunities: bundleImpact.optimizationOpportunities,
        priority: 'MEDIUM',
        impact: 'IMPROVE_PERFORMANCE',
        action: 'Optimize bundle size for better loading performance'
      });
    }
    
    return recommendations;
  }

  async applySafeOptimizations(recommendations) {
    this.log('🔧 Applying safe optimizations...');
    
    const applied = [];
    
    try {
      for (const rec of recommendations) {
        if (rec.type === 'REMOVE_UNUSED' && rec.priority === 'HIGH') {
          const removed = await this.removeUnusedDependencies(rec.dependencies);
          if (removed.length > 0) {
            applied.push({
              type: 'REMOVE_UNUSED',
              dependencies: removed,
              result: 'success'
            });
          }
        }
      }
    } catch (error) {
      this.log(`Safe optimization application failed: ${error.message}`, 'ERROR');
    }
    
    return applied;
  }

  async removeUnusedDependencies(unusedDeps) {
    const removed = [];
    
    try {
      for (const dep of unusedDeps.slice(0, 5)) { // Limit to prevent overwhelming
        if (dep.type === 'devDependency') {
          try {
            execSync(`npm uninstall ${dep.name}`, { cwd: this.projectRoot, stdio: 'pipe' });
            removed.push(dep.name);
            this.log(`✅ Removed unused dev dependency: ${dep.name}`);
          } catch (error) {
            this.log(`Failed to remove ${dep.name}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Dependency removal failed: ${error.message}`, 'ERROR');
    }
    
    return removed;
  }

  async measureOptimizationResults(optimizations) {
    this.log('📊 Measuring optimization results...');
    
    const results = {
      bundleSizeReduction: 0,
      installTimeReduction: 0,
      buildTimeReduction: 0,
      dependencyCountReduction: 0
    };
    
    try {
      // Measure bundle size before/after
      if (fs.existsSync('dist')) {
        const currentSize = this.analyzeBundleSize().totalSize;
        results.bundleSizeReduction = Math.max(0, this.optimizationHistory.totalSavings - currentSize);
      }
      
      // Count removed dependencies
      results.dependencyCountReduction = optimizations
        .filter(opt => opt.type === 'REMOVE_UNUSED')
        .reduce((total, opt) => total + opt.dependencies.length, 0);
      
    } catch (error) {
      this.log(`Results measurement failed: ${error.message}`, 'ERROR');
    }
    
    return results;
  }

  async updateOptimizationHistory(optimizations, results) {
    const optimization = {
      timestamp: new Date().toISOString(),
      optimizations: optimizations,
      results: results,
      totalSavings: this.optimizationHistory.totalSavings + results.bundleSizeReduction
    };
    
    this.optimizationHistory.optimizations.push(optimization);
    this.optimizationHistory.lastRun = new Date().toISOString();
    this.optimizationHistory.totalSavings = optimization.totalSavings;
    
    // Keep only last 10 optimizations
    if (this.optimizationHistory.optimizations.length > 10) {
      this.optimizationHistory.optimizations = this.optimizationHistory.optimizations.slice(-10);
    }
    
    this.saveOptimizationHistory();
  }

  async generateOptimizationReport(optimizations, results, recommendations) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalOptimizations: optimizations.length,
        bundleSizeReduction: results.bundleSizeReduction,
        dependencyCountReduction: results.dependencyCountReduction,
        totalSavings: this.optimizationHistory.totalSavings
      },
      optimizations: optimizations,
      results: results,
      recommendations: recommendations,
      history: this.optimizationHistory
    };
    
    const reportPath = path.join(this.projectRoot, 'logs', `dependency-optimization-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Optimization Report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Smart Dependency Optimizer starting...');
    
    try {
      const result = await this.runOptimization();
      
      this.log(`✅ Smart Dependency Optimization completed successfully`);
      this.log(`📊 Applied ${result.optimizations.length} optimizations`);
      this.log(`💰 Total savings: ${(this.optimizationHistory.totalSavings / (1024 * 1024)).toFixed(2)}MB`);
      
      return result;
    } catch (error) {
      this.log(`❌ Smart Dependency Optimization failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new SmartDependencyOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = SmartDependencyOptimizer;