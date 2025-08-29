#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const semver = require('semver');

console.log('📦 Starting Intelligent Dependency Manager...');

class IntelligentDependencyManager {
  constructor() {
    this.analysisResults = {
      outdated: { packages: [], recommendations: [] },
      vulnerabilities: { packages: [], severity: {}, fixes: [] },
      conflicts: { packages: [], resolutions: [] },
      unused: { packages: [], removals: [] },
      duplicates: { packages: [], consolidations: [] },
      performance: { analysis: {}, optimizations: [] }
    };
    this.reportDir = path.join(process.cwd(), 'dependency-analysis-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.packageLockPath = path.join(process.cwd(), 'package-lock.json');
    this.yarnLockPath = path.join(process.cwd(), 'yarn.lock');
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeDependencies() {
    console.log('🔍 Starting comprehensive dependency analysis...');
    
    try {
      // Analyze outdated packages
      await this.analyzeOutdatedPackages();
      
      // Analyze security vulnerabilities
      await this.analyzeSecurityVulnerabilities();
      
      // Analyze dependency conflicts
      await this.analyzeDependencyConflicts();
      
      // Analyze unused dependencies
      await this.analyzeUnusedDependencies();
      
      // Analyze duplicate dependencies
      await this.analyzeDuplicateDependencies();
      
      // Analyze performance impact
      await this.analyzePerformanceImpact();
      
      // Generate comprehensive report
      await this.generateReport();
      
      // Apply intelligent fixes
      await this.applyIntelligentFixes();
      
      console.log('✅ Dependency analysis completed successfully');
      
    } catch (error) {
      console.error('❌ Dependency analysis failed:', error.message);
      await this.saveErrorReport(error);
    }
  }

  async analyzeOutdatedPackages() {
    console.log('📅 Analyzing outdated packages...');
    
    try {
      // Check for outdated packages
      const outdatedOutput = execSync('npm outdated --json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(outdatedOutput);
      const outdatedPackages = [];
      const recommendations = [];
      
      Object.entries(outdatedData).forEach(([pkg, info]) => {
        const current = info.current;
        const latest = info.latest;
        const wanted = info.wanted;
        
        // Calculate update priority based on version difference
        let priority = 'low';
        let impact = 'minimal';
        
        if (semver.major(latest) > semver.major(current)) {
          priority = 'critical';
          impact = 'breaking changes likely';
        } else if (semver.minor(latest) > semver.minor(current)) {
          priority = 'high';
          impact = 'new features available';
        } else if (semver.patch(latest) > semver.patch(current)) {
          priority = 'medium';
          impact = 'bug fixes and patches';
        }
        
        outdatedPackages.push({
          package: pkg,
          current,
          latest,
          wanted,
          priority,
          impact,
          location: info.location
        });
        
        // Generate intelligent recommendations
        if (priority === 'critical') {
          recommendations.push({
            package: pkg,
            action: 'Review breaking changes before updating',
            risk: 'High - may require code changes',
            timeline: 'Plan for next major release cycle'
          });
        } else if (priority === 'high') {
          recommendations.push({
            package: pkg,
            action: 'Update to latest minor version',
            risk: 'Low - new features and improvements',
            timeline: 'Update within 1-2 weeks'
          });
        } else {
          recommendations.push({
            package: pkg,
            action: 'Update to latest patch version',
            risk: 'Very low - bug fixes only',
            timeline: 'Update immediately'
          });
        }
      });
      
      this.analysisResults.outdated.packages = outdatedPackages;
      this.analysisResults.outdated.recommendations = recommendations;
      
      console.log(`📊 Found ${outdatedPackages.length} outdated packages`);
      
    } catch (error) {
      console.log('⚠️ Outdated package analysis failed, continuing...');
    }
  }

  async analyzeSecurityVulnerabilities() {
    console.log('🔒 Analyzing security vulnerabilities...');
    
    try {
      // Run security audit
      const auditOutput = execSync('npm audit --json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditOutput);
      const vulnerabilities = auditData.vulnerabilities || {};
      const packages = [];
      const severity = { critical: 0, high: 0, moderate: 0, low: 0 };
      const fixes = [];
      
      Object.entries(vulnerabilities).forEach(([pkg, vuln]) => {
        packages.push({
          package: pkg,
          severity: vuln.severity,
          title: vuln.title,
          description: vuln.description,
          recommendation: vuln.recommendation,
          fixAvailable: vuln.fixAvailable,
          via: vuln.via
        });
        
        severity[vuln.severity]++;
        
        if (vuln.fixAvailable) {
          fixes.push({
            package: pkg,
            fix: vuln.fixAvailable,
            severity: vuln.severity,
            action: 'Update to fixed version'
          });
        }
      });
      
      this.analysisResults.vulnerabilities.packages = packages;
      this.analysisResults.vulnerabilities.severity = severity;
      this.analysisResults.vulnerabilities.fixes = fixes;
      
      console.log(`🔒 Found ${packages.length} vulnerabilities (${severity.critical} critical, ${severity.high} high)`);
      
    } catch (error) {
      console.log('⚠️ Security vulnerability analysis failed, continuing...');
    }
  }

  async analyzeDependencyConflicts() {
    console.log('⚔️ Analyzing dependency conflicts...');
    
    try {
      // Check for dependency conflicts
      const conflicts = [];
      const resolutions = [];
      
      if (fs.existsSync(this.packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(this.packageLockPath, 'utf8'));
        
        // Analyze dependency tree for conflicts
        const dependencyTree = this.buildDependencyTree(packageLock.dependencies);
        const conflictsFound = this.findDependencyConflicts(dependencyTree);
        
        conflictsFound.forEach(conflict => {
          conflicts.push(conflict);
          
          // Generate resolution strategies
          resolutions.push({
            conflict: conflict.description,
            packages: conflict.packages,
            resolution: this.generateConflictResolution(conflict),
            priority: conflict.severity === 'critical' ? 'high' : 'medium'
          });
        });
      }
      
      this.analysisResults.conflicts.packages = conflicts;
      this.analysisResults.conflicts.resolutions = resolutions;
      
      console.log(`⚔️ Found ${conflicts.length} dependency conflicts`);
      
    } catch (error) {
      console.log('⚠️ Dependency conflict analysis failed, continuing...');
    }
  }

  async analyzeUnusedDependencies() {
    console.log('🗑️ Analyzing unused dependencies...');
    
    try {
      // Use depcheck to find unused dependencies
      const depcheckOutput = execSync('npx depcheck --json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const depcheckData = JSON.parse(depcheckOutput);
      const unusedPackages = [];
      const removals = [];
      
      // Analyze unused dependencies
      depcheckData.dependencies.forEach(pkg => {
        unusedPackages.push({
          package: pkg,
          type: 'unused',
          impact: 'Bundle size reduction',
          risk: 'Low - safe to remove'
        });
        
        removals.push({
          package: pkg,
          action: 'Remove unused dependency',
          command: `npm uninstall ${pkg}`,
          benefit: 'Reduces bundle size and maintenance overhead'
        });
      });
      
      // Analyze unused dev dependencies
      depcheckData.devDependencies.forEach(pkg => {
        unusedPackages.push({
          package: pkg,
          type: 'unused dev dependency',
          impact: 'Development environment cleanup',
          risk: 'Low - safe to remove'
        });
        
        removals.push({
          package: pkg,
          action: 'Remove unused dev dependency',
          command: `npm uninstall --save-dev ${pkg}`,
          benefit: 'Cleaner development environment'
        });
      });
      
      this.analysisResults.unused.packages = unusedPackages;
      this.analysisResults.unused.removals = removals;
      
      console.log(`🗑️ Found ${unusedPackages.length} unused dependencies`);
      
    } catch (error) {
      console.log('⚠️ Unused dependency analysis failed, continuing...');
    }
  }

  async analyzeDuplicateDependencies() {
    console.log('🔄 Analyzing duplicate dependencies...');
    
    try {
      const duplicates = [];
      const consolidations = [];
      
      if (fs.existsSync(this.packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(this.packageLockPath, 'utf8'));
        
        // Find duplicate dependencies
        const duplicateMap = this.findDuplicateDependencies(packageLock.dependencies);
        
        Object.entries(duplicateMap).forEach(([pkg, versions]) => {
          if (versions.length > 1) {
            duplicates.push({
              package: pkg,
              versions: versions,
              impact: 'Increased bundle size and potential conflicts',
              severity: versions.length > 3 ? 'high' : 'medium'
            });
            
            consolidations.push({
              package: pkg,
              action: 'Consolidate to single version',
              targetVersion: this.selectBestVersion(versions),
              benefit: 'Reduced bundle size and improved compatibility'
            });
          }
        });
      }
      
      this.analysisResults.duplicates.packages = duplicates;
      this.analysisResults.duplicates.consolidations = consolidations;
      
      console.log(`🔄 Found ${duplicates.length} duplicate dependencies`);
      
    } catch (error) {
      console.log('⚠️ Duplicate dependency analysis failed, continuing...');
    }
  }

  async analyzePerformanceImpact() {
    console.log('⚡ Analyzing performance impact...');
    
    try {
      const analysis = {};
      const optimizations = [];
      
      // Analyze bundle size impact
      const bundleAnalysis = await this.analyzeBundleSize();
      analysis.bundleSize = bundleAnalysis;
      
      // Analyze installation time
      const installAnalysis = await this.analyzeInstallationTime();
      analysis.installation = installAnalysis;
      
      // Generate performance optimizations
      if (bundleAnalysis.largePackages.length > 0) {
        optimizations.push({
          type: 'bundle optimization',
          action: 'Replace large packages with lighter alternatives',
          packages: bundleAnalysis.largePackages,
          benefit: 'Reduced bundle size and faster loading'
        });
      }
      
      if (analysis.installation.slowPackages.length > 0) {
        optimizations.push({
          type: 'installation optimization',
          action: 'Optimize slow package installations',
          packages: analysis.installation.slowPackages,
          benefit: 'Faster CI/CD and development setup'
        });
      }
      
      this.analysisResults.performance.analysis = analysis;
      this.analysisResults.performance.optimizations = optimizations;
      
      console.log('⚡ Performance impact analysis completed');
      
    } catch (error) {
      console.log('⚠️ Performance impact analysis failed, continuing...');
    }
  }

  async analyzeBundleSize() {
    try {
      // Build project to analyze bundle size
      const buildOutput = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      // Extract bundle size information
      const bundleSizeMatch = buildOutput.match(/dist.*?(\d+\.?\d*)\s*([KMGT]?B)/);
      if (bundleSizeMatch) {
        const size = parseFloat(bundleSizeMatch[1]);
        const unit = bundleSizeMatch[2];
        
        // Identify large packages
        const largePackages = [];
        if (unit === 'MB' && size > 2) {
          largePackages.push('Consider code splitting and lazy loading');
        }
        
        return {
          size: `${size}${unit}`,
          largePackages,
          recommendations: this.generateBundleOptimizations(size, unit)
        };
      }
      
      return { size: 'Unknown', largePackages: [], recommendations: [] };
      
    } catch (error) {
      return { size: 'Build failed', largePackages: [], recommendations: [] };
    }
  }

  async analyzeInstallationTime() {
    try {
      const startTime = Date.now();
      execSync('npm install --dry-run', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      const duration = Date.now() - startTime;
      
      return {
        duration: `${duration}ms`,
        slowPackages: [],
        recommendations: duration > 10000 ? ['Consider using npm ci for faster installations'] : []
      };
      
    } catch (error) {
      return { duration: 'Unknown', slowPackages: [], recommendations: [] };
    }
  }

  buildDependencyTree(dependencies, tree = {}, depth = 0) {
    if (depth > 10) return tree; // Prevent infinite recursion
    
    Object.entries(dependencies).forEach(([pkg, info]) => {
      tree[pkg] = {
        version: info.version,
        dependencies: info.dependencies ? this.buildDependencyTree(info.dependencies, {}, depth + 1) : {},
        depth
      };
    });
    
    return tree;
  }

  findDependencyConflicts(tree) {
    const conflicts = [];
    const versionMap = {};
    
    // Build version map
    Object.entries(tree).forEach(([pkg, info]) => {
      if (!versionMap[pkg]) {
        versionMap[pkg] = [];
      }
      versionMap[pkg].push(info.version);
    });
    
    // Find conflicts
    Object.entries(versionMap).forEach(([pkg, versions]) => {
      if (versions.length > 1 && new Set(versions).size > 1) {
        conflicts.push({
          package: pkg,
          versions: versions,
          description: `Multiple versions of ${pkg} detected`,
          severity: versions.length > 2 ? 'critical' : 'medium'
        });
      }
    });
    
    return conflicts;
  }

  generateConflictResolution(conflict) {
    if (conflict.severity === 'critical') {
      return 'Use npm dedupe or manually resolve version conflicts';
    } else {
      return 'Consider updating to consistent version across all dependencies';
    }
  }

  findDuplicateDependencies(dependencies) {
    const duplicateMap = {};
    
    const traverse = (deps, path = []) => {
      Object.entries(deps).forEach(([pkg, info]) => {
        if (!duplicateMap[pkg]) {
          duplicateMap[pkg] = [];
        }
        duplicateMap[pkg].push({
          version: info.version,
          path: [...path, pkg]
        });
        
        if (info.dependencies) {
          traverse(info.dependencies, [...path, pkg]);
        }
      });
    };
    
    traverse(dependencies);
    return duplicateMap;
  }

  selectBestVersion(versions) {
    // Select the highest compatible version
    return versions.reduce((best, current) => {
      if (semver.gt(current.version, best.version)) {
        return current;
      }
      return best;
    }).version;
  }

  generateBundleOptimizations(size, unit) {
    const recommendations = [];
    
    if (unit === 'MB' && size > 2) {
      recommendations.push('Implement code splitting for route-based chunks');
      recommendations.push('Use dynamic imports for large components');
      recommendations.push('Consider replacing heavy dependencies with lighter alternatives');
    }
    
    if (unit === 'MB' && size > 1) {
      recommendations.push('Enable tree shaking for unused code elimination');
      recommendations.push('Implement lazy loading for non-critical components');
    }
    
    return recommendations;
  }

  async applyIntelligentFixes() {
    console.log('🔧 Applying intelligent dependency fixes...');
    
    try {
      // Auto-fix security vulnerabilities
      if (this.analysisResults.vulnerabilities.packages.length > 0) {
        console.log('🔧 Auto-fixing security vulnerabilities...');
        execSync('npm audit fix', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
      }
      
      // Update non-breaking dependencies
      const safeUpdates = this.analysisResults.outdated.packages.filter(pkg => 
        pkg.priority !== 'critical'
      );
      
      if (safeUpdates.length > 0) {
        console.log('🔧 Updating safe dependencies...');
        const packagesToUpdate = safeUpdates.map(pkg => pkg.package).join(' ');
        execSync(`npm update ${packagesToUpdate}`, { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
      }
      
      // Remove unused dependencies
      if (this.analysisResults.unused.packages.length > 0) {
        console.log('🔧 Removing unused dependencies...');
        const unusedPackages = this.analysisResults.unused.packages
          .filter(pkg => pkg.type === 'unused')
          .map(pkg => pkg.package)
          .join(' ');
        
        if (unusedPackages) {
          execSync(`npm uninstall ${unusedPackages}`, { 
            encoding: 'utf8',
            cwd: process.cwd(),
            stdio: 'pipe'
          });
        }
      }
      
      console.log('✅ Intelligent dependency fixes applied successfully');
      
    } catch (error) {
      console.log('⚠️ Some fixes failed, continuing...');
    }
  }

  async generateReport() {
    console.log('📊 Generating comprehensive dependency analysis report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      analysisResults: this.analysisResults,
      summary: this.generateSummary(),
      actionItems: this.generateActionItems(),
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(this.reportDir, `dependency-analysis-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-dependency-analysis.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Report saved to: ${reportPath}`);
    
    // Generate human-readable summary
    await this.generateHumanReadableSummary(report);
  }

  generateSummary() {
    const totalIssues = 
      this.analysisResults.outdated.packages.length +
      this.analysisResults.vulnerabilities.packages.length +
      this.analysisResults.conflicts.packages.length +
      this.analysisResults.unused.packages.length +
      this.analysisResults.duplicates.packages.length;
    
    return {
      totalIssues,
      criticalIssues: this.analysisResults.vulnerabilities.severity.critical || 0,
      highPriorityIssues: this.analysisResults.outdated.packages.filter(p => p.priority === 'critical').length,
      overallHealth: totalIssues === 0 ? 'Excellent' : totalIssues < 10 ? 'Good' : totalIssues < 25 ? 'Fair' : 'Poor'
    };
  }

  generateActionItems() {
    const actions = [];
    
    // Critical actions
    if (this.analysisResults.vulnerabilities.severity.critical > 0) {
      actions.push({
        priority: 'Critical',
        action: 'Fix critical security vulnerabilities immediately',
        packages: this.analysisResults.vulnerabilities.packages.filter(p => p.severity === 'critical'),
        timeline: 'Immediate'
      });
    }
    
    // High priority actions
    const highPriorityUpdates = this.analysisResults.outdated.packages.filter(p => p.priority === 'critical');
    if (highPriorityUpdates.length > 0) {
      actions.push({
        priority: 'High',
        action: 'Review and update major version updates',
        packages: highPriorityUpdates,
        timeline: 'Within 1 week'
      });
    }
    
    // Medium priority actions
    const mediumActions = [
      ...this.analysisResults.conflicts.resolutions,
      ...this.analysisResults.duplicates.consolidations
    ];
    
    if (mediumActions.length > 0) {
      actions.push({
        priority: 'Medium',
        action: 'Resolve dependency conflicts and duplicates',
        items: mediumActions,
        timeline: 'Within 2 weeks'
      });
    }
    
    // Low priority actions
    const lowPriorityActions = [
      ...this.analysisResults.unused.removals,
      ...this.analysisResults.outdated.packages.filter(p => p.priority === 'low')
    ];
    
    if (lowPriorityActions.length > 0) {
      actions.push({
        priority: 'Low',
        action: 'Clean up unused dependencies and minor updates',
        items: lowPriorityActions,
        timeline: 'When convenient'
      });
    }
    
    return actions;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Security recommendations
    if (this.analysisResults.vulnerabilities.packages.length > 0) {
      recommendations.push({
        category: 'Security',
        priority: 'High',
        action: 'Implement automated security scanning in CI/CD pipeline',
        benefit: 'Prevent vulnerable dependencies from being deployed'
      });
    }
    
    // Performance recommendations
    if (this.analysisResults.performance.optimizations.length > 0) {
      recommendations.push({
        category: 'Performance',
        priority: 'Medium',
        action: 'Regular bundle size analysis and optimization',
        benefit: 'Maintain optimal application performance'
      });
    }
    
    // Maintenance recommendations
    if (this.analysisResults.outdated.packages.length > 10) {
      recommendations.push({
        category: 'Maintenance',
        priority: 'Medium',
        action: 'Implement automated dependency update workflow',
        benefit: 'Keep dependencies current with minimal manual effort'
      });
    }
    
    return recommendations;
  }

  async generateHumanReadableSummary(report) {
    const summaryPath = path.join(this.reportDir, `dependency-analysis-summary-${Date.now()}.md`);
    
    const summary = `# Intelligent Dependency Analysis Summary

## 📊 Overall Health: ${report.summary.overallHealth}

### 📈 Summary Statistics
- **Total Issues Found:** ${report.summary.totalIssues}
- **Critical Security Issues:** ${report.summary.criticalIssues}
- **High Priority Updates:** ${report.summary.highPriorityIssues}
- **Analysis Duration:** ${report.duration}ms

## 🚨 Critical Issues

${report.actionItems.filter(action => action.priority === 'Critical').map(action => 
  `### ${action.action}
  - **Timeline:** ${action.timeline}
  - **Affected Packages:** ${action.packages.map(p => p.package).join(', ')}`
).join('\n\n')}

## 🔧 High Priority Actions

${report.actionItems.filter(action => action.priority === 'High').map(action => 
  `### ${action.action}
  - **Timeline:** ${action.timeline}
  - **Affected Packages:** ${action.packages.map(p => p.package).join(', ')}`
).join('\n\n')}

## 📦 Dependency Categories

### 🔒 Security Vulnerabilities
- **Total:** ${this.analysisResults.vulnerabilities.packages.length}
- **Critical:** ${this.analysisResults.vulnerabilities.severity.critical || 0}
- **High:** ${this.analysisResults.vulnerabilities.severity.high || 0}

### 📅 Outdated Packages
- **Total:** ${this.analysisResults.outdated.packages.length}
- **Critical Updates:** ${this.analysisResults.outdated.packages.filter(p => p.priority === 'critical').length}
- **High Priority:** ${this.analysisResults.outdated.packages.filter(p => p.priority === 'high').length}

### ⚔️ Dependency Conflicts
- **Total:** ${this.analysisResults.conflicts.packages.length}
- **Resolutions Available:** ${this.analysisResults.conflicts.resolutions.length}

### 🗑️ Unused Dependencies
- **Total:** ${this.analysisResults.unused.packages.length}
- **Removal Candidates:** ${this.analysisResults.unused.removals.length}

### 🔄 Duplicate Dependencies
- **Total:** ${this.analysisResults.duplicates.packages.length}
- **Consolidation Opportunities:** ${this.analysisResults.duplicates.consolidations.length}

## 💡 Recommendations

${report.recommendations.map(rec => 
  `### ${rec.category}: ${rec.action}
  - **Priority:** ${rec.priority}
  - **Benefit:** ${rec.benefit}`
).join('\n\n')}

## 🚀 Next Steps

1. **Immediate:** Address critical security vulnerabilities
2. **This Week:** Review and plan major version updates
3. **This Month:** Resolve dependency conflicts and duplicates
4. **Ongoing:** Regular dependency health monitoring

---

*This report was generated automatically by the Intelligent Dependency Manager*
`;

    fs.writeFileSync(summaryPath, summary);
    console.log(`📝 Human-readable summary saved to: ${summaryPath}`);
  }

  async saveErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      analysisResults: this.analysisResults
    };
    
    const errorPath = path.join(this.reportDir, `error-report-${Date.now()}.json`);
    fs.writeFileSync(errorPath, JSON.stringify(errorReport, null, 2));
    
    console.log(`❌ Error report saved to: ${errorPath}`);
  }
}

// Main execution
async function main() {
  const manager = new IntelligentDependencyManager();
  
  // Set up graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down Intelligent Dependency Manager...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down Intelligent Dependency Manager...');
    process.exit(0);
  });
  
  try {
    await manager.analyzeDependencies();
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = IntelligentDependencyManager;