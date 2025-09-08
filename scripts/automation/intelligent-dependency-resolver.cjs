#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting Intelligent Dependency Resolver...');

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

class IntelligentDependencyResolver {
  constructor() {
    this.resolutionResults = {
      timestamp: new Date().toISOString(),
      conflicts: [],
      suggestions: [],
      updates: [],
      metrics: {}
    };
    
    this.dependencyRules = {
      security: {
        priority: 'critical',
        patterns: ['< 1.0.0', 'alpha', 'beta', 'rc', 'preview'],
        action: 'Update to stable version immediately'
      },
      compatibility: {
        priority: 'high',
        patterns: ['peer dependency', 'unmet peer dependency'],
        action: 'Resolve peer dependency conflicts'
      },
      performance: {
        priority: 'medium',
        patterns: ['outdated', 'deprecated'],
        action: 'Consider updating for performance improvements'
      }
    };
  }

  async resolveDependencies() {
    try {
      console.log('🔍 Analyzing dependency health...');
      
      // Check current dependency status
      const currentStatus = await this.checkDependencyStatus();
      
      // Analyze for conflicts and issues
      const analysis = await this.analyzeDependencies(currentStatus);
      
      // Generate resolution strategies
      const strategies = this.generateResolutionStrategies(analysis);
      
      // Apply safe resolutions
      await this.applySafeResolutions(strategies);
      
      // Generate comprehensive report
      this.generateReport(analysis, strategies);
      
      console.log('✅ Intelligent dependency resolution completed');
      
    } catch (error) {
      console.error('❌ Intelligent dependency resolution failed:', error.message);
    }
  }

  async checkDependencyStatus() {
    const status = {
      packageJson: {},
      lockFile: {},
      outdated: [],
      vulnerabilities: [],
      peerDependencies: [],
      conflicts: []
    };

    try {
      // Read package.json
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        status.packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      }

      // Read package-lock.json
      const lockFilePath = path.join(process.cwd(), 'package-lock.json');
      if (fs.existsSync(lockFilePath)) {
        status.lockFile = JSON.parse(fs.readFileSync(lockFilePath, 'utf8'));
      }

      // Check for outdated packages
      try {
        const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8', stdio: 'pipe' });
        status.outdated = JSON.parse(outdatedOutput);
      } catch (error) {
        // npm outdated returns non-zero exit code when there are outdated packages
        if (error.stdout) {
          try {
            status.outdated = JSON.parse(error.stdout);
          } catch (parseError) {
            console.log('⚠️  Could not parse outdated packages output');
          }
        }
      }

      // Check for security vulnerabilities
      try {
        const auditOutput = execSync('npm audit --json', { encoding: 'utf8', stdio: 'pipe' });
        const audit = JSON.parse(auditOutput);
        status.vulnerabilities = audit.vulnerabilities || [];
      } catch (error) {
        if (error.stdout) {
          try {
            const audit = JSON.parse(error.stdout);
            status.vulnerabilities = audit.vulnerabilities || [];
          } catch (parseError) {
            console.log('⚠️  Could not parse audit output');
          }
        }
      }

      // Check for peer dependency issues
      try {
        const lsOutput = execSync('npm ls --json', { encoding: 'utf8', stdio: 'pipe' });
        const ls = JSON.parse(lsOutput);
        status.peerDependencies = this.extractPeerDependencyIssues(ls);
      } catch (error) {
        if (error.stdout) {
          try {
            const ls = JSON.parse(error.stdout);
            status.peerDependencies = this.extractPeerDependencyIssues(ls);
          } catch (parseError) {
            console.log('⚠️  Could not parse npm ls output');
          }
        }
      }

    } catch (error) {
      console.log(`⚠️  Error checking dependency status: ${error.message}`);
    }

    return status;
  }

  extractPeerDependencyIssues(lsOutput) {
    const issues = [];
    
    const checkDependencies = (deps, path = '') => {
      if (!deps) return;
      
      Object.keys(deps).forEach(depName => {
        const dep = deps[depName];
        
        if (dep.peerMissing) {
          issues.push({
            package: depName,
            path: path,
            issue: 'Missing peer dependency',
            details: dep.peerMissing
          });
        }
        
        if (dep.peerInvalid) {
          issues.push({
            package: depName,
            path: path,
            issue: 'Invalid peer dependency version',
            details: dep.peerInvalid
          });
        }
        
        if (dep.dependencies) {
          checkDependencies(dep.dependencies, `${path} > ${depName}`);
        }
      });
    };
    
    checkDependencies(lsOutput.dependencies);
    return issues;
  }

  async analyzeDependencies(status) {
    const analysis = {
      totalDependencies: 0,
      outdatedCount: 0,
      vulnerabilityCount: 0,
      peerIssueCount: 0,
      conflicts: [],
      recommendations: []
    };

    // Count dependencies
    if (status.packageJson.dependencies) {
      analysis.totalDependencies += Object.keys(status.packageJson.dependencies).length;
    }
    if (status.packageJson.devDependencies) {
      analysis.totalDependencies += Object.keys(status.packageJson.devDependencies).length;
    }

    // Analyze outdated packages
    analysis.outdatedCount = Object.keys(status.outdated).length;
    Object.keys(status.outdated).forEach(pkgName => {
      const pkg = status.outdated[pkgName];
      analysis.conflicts.push({
        type: 'outdated',
        package: pkgName,
        current: pkg.current,
        wanted: pkg.wanted,
        latest: pkg.latest,
        priority: this.calculateUpdatePriority(pkg),
        action: this.suggestUpdateAction(pkg)
      });
    });

    // Analyze vulnerabilities
    analysis.vulnerabilityCount = status.vulnerabilities.length;
    status.vulnerabilities.forEach(vuln => {
      analysis.conflicts.push({
        type: 'vulnerability',
        package: vuln.name,
        severity: vuln.severity,
        title: vuln.title,
        description: vuln.description,
        priority: this.calculateVulnerabilityPriority(vuln),
        action: 'Update to patched version immediately'
      });
    });

    // Analyze peer dependency issues
    analysis.peerIssueCount = status.peerDependencies.length;
    status.peerDependencies.forEach(issue => {
      analysis.conflicts.push({
        type: 'peerDependency',
        package: issue.package,
        issue: issue.issue,
        details: issue.details,
        priority: 'high',
        action: 'Resolve peer dependency conflict'
      });
    });

    // Generate recommendations
    analysis.recommendations = this.generateRecommendations(analysis);
    
    return analysis;
  }

  calculateUpdatePriority(pkg) {
    const current = pkg.current;
    const latest = pkg.latest;
    
    // Check if it's a major version update
    const currentMajor = current.split('.')[0];
    const latestMajor = latest.split('.')[0];
    
    if (currentMajor !== latestMajor) {
      return 'high'; // Major version updates need careful consideration
    }
    
    // Check if it's a significant minor/patch update
    const currentMinor = current.split('.')[1] || '0';
    const latestMinor = latest.split('.')[1] || '0';
    
    if (parseInt(latestMinor) - parseInt(currentMinor) > 2) {
      return 'medium'; // Significant minor updates
    }
    
    return 'low'; // Minor updates
  }

  calculateVulnerabilityPriority(vuln) {
    const severityMap = {
      'critical': 'critical',
      'high': 'high',
      'moderate': 'medium',
      'low': 'low'
    };
    
    return severityMap[vuln.severity] || 'medium';
  }

  suggestUpdateAction(pkg) {
    if (pkg.wanted === pkg.latest) {
      return 'Update to latest version';
    } else if (pkg.wanted !== pkg.current) {
      return `Update to ${pkg.wanted} (latest available: ${pkg.latest})`;
    } else {
      return 'Already at latest version';
    }
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.vulnerabilityCount > 0) {
      recommendations.push({
        priority: 'critical',
        title: 'Security Vulnerabilities Detected',
        description: `${analysis.vulnerabilityCount} security vulnerabilities found in dependencies.`,
        actions: [
          'Run npm audit fix to automatically fix vulnerabilities',
          'Update packages with known vulnerabilities',
          'Review and test updates before deployment'
        ]
      });
    }
    
    if (analysis.peerIssueCount > 0) {
      recommendations.push({
        priority: 'high',
        title: 'Peer Dependency Issues',
        description: `${analysis.peerIssueCount} peer dependency conflicts detected.`,
        actions: [
          'Install missing peer dependencies',
          'Update peer dependency versions to compatible ranges',
          'Check package compatibility matrices'
        ]
      });
    }
    
    if (analysis.outdatedCount > 10) {
      recommendations.push({
        priority: 'medium',
        title: 'Many Outdated Dependencies',
        description: `${analysis.outdatedCount} packages are outdated.`,
        actions: [
          'Update packages in batches to avoid breaking changes',
          'Focus on security updates first',
          'Test thoroughly after updates'
        ]
      });
    }
    
    return recommendations;
  }

  generateResolutionStrategies(analysis) {
    const strategies = {
      immediate: [],
      scheduled: [],
      manual: []
    };
    
    analysis.conflicts.forEach(conflict => {
      if (conflict.priority === 'critical') {
        strategies.immediate.push(conflict);
      } else if (conflict.priority === 'high') {
        strategies.scheduled.push(conflict);
      } else {
        strategies.manual.push(conflict);
      }
    });
    
    return strategies;
  }

  async applySafeResolutions(strategies) {
    console.log('🔧 Applying safe dependency resolutions...');
    
    let resolutionsApplied = 0;
    
    // Apply immediate resolutions (security fixes)
    for (const conflict of strategies.immediate) {
      if (conflict.type === 'vulnerability') {
        try {
          console.log(`🔒 Fixing security vulnerability in ${conflict.package}...`);
          execSync(`npm audit fix --package ${conflict.package}`, { stdio: 'inherit' });
          resolutionsApplied++;
        } catch (error) {
          console.log(`⚠️  Could not automatically fix ${conflict.package}: ${error.message}`);
        }
      }
    }
    
    // Apply scheduled resolutions (non-breaking updates)
    for (const conflict of strategies.scheduled) {
      if (conflict.type === 'outdated' && conflict.priority === 'low') {
        try {
          console.log(`📦 Updating ${conflict.package} to ${conflict.wanted}...`);
          execSync(`npm install ${conflict.package}@${conflict.wanted}`, { stdio: 'inherit' });
          resolutionsApplied++;
        } catch (error) {
          console.log(`⚠️  Could not update ${conflict.package}: ${error.message}`);
        }
      }
    }
    
    if (resolutionsApplied > 0) {
      console.log(`✅ Applied ${resolutionsApplied} safe resolutions automatically`);
      
      // Regenerate lock file
      try {
        console.log('🔒 Regenerating package-lock.json...');
        execSync('npm install', { stdio: 'inherit' });
      } catch (error) {
        console.log(`⚠️  Could not regenerate lock file: ${error.message}`);
      }
    }
  }

  generateReport(analysis, strategies) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalDependencies: analysis.totalDependencies,
        totalConflicts: analysis.conflicts.length,
        criticalIssues: strategies.immediate.length,
        highPriorityIssues: strategies.scheduled.length,
        manualReviewNeeded: strategies.manual.length
      },
      analysis: analysis,
      strategies: strategies,
      recommendations: analysis.recommendations
    };

    // Save detailed report
    const reportPath = path.join(process.cwd(), 'intelligent-dependency-resolution-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Save human-readable summary
    const summaryPath = path.join(process.cwd(), 'intelligent-dependency-resolution-summary.txt');
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryPath, summary);
    
    console.log(`📊 Dependency resolution report saved to ${reportPath}`);
    console.log(`📋 Summary saved to ${summaryPath}`);
  }

  generateHumanReadableSummary(report) {
    let summary = '🔧 Intelligent Dependency Resolution Summary\n';
    summary += '==============================================\n\n';
    
    summary += `📊 Dependency Overview:\n`;
    summary += `  - Total dependencies: ${report.summary.totalDependencies}\n`;
    summary += `  - Total conflicts: ${report.summary.totalConflicts}\n`;
    summary += `  - Critical issues: ${report.summary.criticalIssues}\n`;
    summary += `  - High priority issues: ${report.summary.highPriorityIssues}\n`;
    summary += `  - Manual review needed: ${report.summary.manualReviewNeeded}\n\n`;
    
    if (report.recommendations.length > 0) {
      summary += `🚨 Priority Recommendations:\n`;
      report.recommendations.forEach((rec, index) => {
        summary += `  ${index + 1}. ${rec.title} (${rec.priority.toUpperCase()})\n`;
        summary += `     ${rec.description}\n`;
        summary += `     Actions: ${rec.actions.join(', ')}\n\n`;
      });
    }
    
    if (report.strategies.immediate.length > 0) {
      summary += `🔴 Immediate Actions Required:\n`;
      report.strategies.immediate.forEach((conflict, index) => {
        summary += `  ${index + 1}. ${conflict.package} - ${conflict.action}\n`;
        if (conflict.description) {
          summary += `     ${conflict.description}\n`;
        }
        summary += '\n';
      });
    }
    
    if (report.strategies.scheduled.length > 0) {
      summary += `🟡 Scheduled Updates:\n`;
      report.strategies.scheduled.forEach((conflict, index) => {
        summary += `  ${index + 1}. ${conflict.package} - ${conflict.action}\n`;
        summary += '\n';
      });
    }
    
    return summary;
  }
}

// Main execution
async function runIntelligentDependencyResolver() {
  try {
    console.log(`🔧 Running intelligent dependency resolver at ${new Date().toISOString()}`);
    
    const resolver = new IntelligentDependencyResolver();
    await resolver.resolveDependencies();
    
    console.log('✅ Intelligent dependency resolver completed successfully');
    
  } catch (error) {
    console.error('❌ Intelligent dependency resolver failed:', error.message);
  }
}

// Run the resolver
runIntelligentDependencyResolver();

// Set up continuous operation
setInterval(runIntelligentDependencyResolver, AUTOMATION_INTERVAL);

console.log(`🔧 Intelligent dependency resolver will run every ${AUTOMATION_INTERVAL / 1000 / 60 / 60} hours`);