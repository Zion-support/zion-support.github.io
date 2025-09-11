#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SmartDependencyAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      reportDir: 'dependency-reports',
      logFile: 'logs/smart-dependency.log',
    };

    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [this.config.reportDir, 'logs'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    console.log(logMessage.trim());

    if (fs.existsSync('logs')) {
      fs.appendFileSync(this.config.logFile, logMessage);
    }
  }

  async analyzeDependencies() {
    this.log('📦 Starting Smart Dependency Analysis...');

    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalDependencies: 0,
          vulnerabilities: 0,
          outdated: 0,
          conflicts: 0,
          healthScore: 0,
        },
        details: {
          security: {},
          health: {},
          updates: {},
          conflicts: {},
        },
        suggestions: [],
        recommendations: [],
      };

      // Analyze security vulnerabilities
      await this.analyzeSecurityVulnerabilities(report);

      // Analyze dependency health
      await this.analyzeDependencyHealth(report);

      // Analyze update opportunities
      await this.analyzeUpdateOpportunities(report);

      // Analyze dependency conflicts
      await this.analyzeDependencyConflicts(report);

      // Generate intelligent suggestions
      await this.generateIntelligentSuggestions(report);

      // Generate final report
      await this.generateReport(report);

      this.log('✅ Smart Dependency Analysis completed successfully');
      return report;
    } catch (error) {
      this.log(`❌ Error during dependency analysis: ${error.message}`);
      throw error;
    }
  }

  async analyzeSecurityVulnerabilities(report) {
    this.log('🔒 Analyzing security vulnerabilities...');

    try {
      const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
      const auditData = JSON.parse(auditResult);

      const vulnerabilities = {
        total: auditData.metadata?.vulnerabilities?.total || 0,
        critical: auditData.metadata?.vulnerabilities?.critical || 0,
        high: auditData.metadata?.vulnerabilities?.high || 0,
        moderate: auditData.metadata?.vulnerabilities?.moderate || 0,
        low: auditData.metadata?.vulnerabilities?.low || 0,
      };

      report.details.security = {
        vulnerabilities,
        score: this.calculateSecurityScore(
          vulnerabilities.total,
          vulnerabilities.critical,
          vulnerabilities.high
        ),
        details: auditData.vulnerabilities || {},
      };

      report.summary.vulnerabilities = vulnerabilities.total;
    } catch (error) {
      this.log(`Warning: Could not run npm audit: ${error.message}`);
      report.details.security = { error: error.message };
    }
  }

  calculateSecurityScore(total, critical, high) {
    if (total === 0) return 100;

    let score = 100;
    score -= critical * 25;
    score -= high * 15;
    score -= Math.max(0, total - critical - high) * 5;

    return Math.max(0, Math.round(score));
  }

  async analyzeDependencyHealth(report) {
    this.log('🏥 Analyzing dependency health...');

    try {
      const outdatedResult = execSync('npm outdated --json', {
        encoding: 'utf8',
      });
      const outdatedData = JSON.parse(outdatedResult);

      const outdatedCount = Object.keys(outdatedData).length;
      const healthMetrics = {
        outdated: outdatedCount,
        majorUpdates: 0,
        minorUpdates: 0,
        patchUpdates: 0,
      };

      // Categorize updates
      Object.values(outdatedData).forEach(pkg => {
        const current = this.parseVersion(pkg.current);
        const latest = this.parseVersion(pkg.latest);

        if (latest.major > current.major) {
          healthMetrics.majorUpdates++;
        } else if (latest.minor > current.minor) {
          healthMetrics.minorUpdates++;
        } else if (latest.patch > current.patch) {
          healthMetrics.patchUpdates++;
        }
      });

      report.details.health = {
        metrics: healthMetrics,
        score: this.calculateHealthScore(outdatedCount, healthMetrics),
        outdated: outdatedData,
      };

      report.summary.outdated = outdatedCount;
    } catch (error) {
      this.log(`Warning: Could not check outdated packages: ${error.message}`);
      report.details.health = { error: error.message };
    }
  }

  calculateHealthScore(outdatedCount, healthMetrics) {
    let score = 100;

    // Deduct points for outdated packages
    score -= outdatedCount * 2;

    // Deduct more points for major updates (potential breaking changes)
    score -= healthMetrics.majorUpdates * 5;

    return Math.max(0, Math.round(score));
  }

  parseVersion(version) {
    const parts = version.split('.').map(Number);
    return {
      major: parts[0] || 0,
      minor: parts[1] || 0,
      patch: parts[2] || 0,
    };
  }

  async analyzeUpdateOpportunities(report) {
    this.log('🔄 Analyzing update opportunities...');

    try {
      const packageLock = JSON.parse(
        fs.readFileSync('package-lock.json', 'utf8')
      );
      const updateOpportunities = [];

      for (const [name, info] of Object.entries(
        packageLock.dependencies || {}
      )) {
        const opportunity = this.analyzeUpdateOpportunity(
          name,
          info.version,
          info
        );
        if (opportunity) {
          updateOpportunities.push(opportunity);
        }
      }

      report.details.updates = {
        opportunities: updateOpportunities,
        count: updateOpportunities.length,
      };
    } catch (error) {
      this.log(
        `Warning: Could not analyze update opportunities: ${error.message}`
      );
      report.details.updates = { error: error.message };
    }
  }

  analyzeUpdateOpportunity(name, currentVersion, lockInfo) {
    try {
      // This is a simplified analysis - in a real scenario you'd check npm registry
      const current = this.parseVersion(currentVersion);

      // Simulate update opportunity detection
      if (current.patch < 9) {
        return {
          name,
          currentVersion,
          type: 'patch',
          risk: 'low',
          suggestion: 'Safe to update patch version',
        };
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  async analyzeDependencyConflicts(report) {
    this.log('⚠️ Analyzing dependency conflicts...');

    try {
      const packageLock = JSON.parse(
        fs.readFileSync('package-lock.json', 'utf8')
      );
      const conflicts = [];

      // Check for peer dependency issues
      const peerDeps = this.findPeerDependencyIssues(packageLock);
      conflicts.push(...peerDeps);

      // Check for duplicate packages
      const duplicates = this.findDuplicatePackages(packageLock);
      conflicts.push(...duplicates);

      report.details.conflicts = {
        issues: conflicts,
        count: conflicts.length,
      };

      report.summary.conflicts = conflicts.length;
    } catch (error) {
      this.log(`Warning: Could not analyze conflicts: ${error.message}`);
      report.details.conflicts = { error: error.message };
    }
  }

  findPeerDependencyIssues(packageLock) {
    const issues = [];

    // Simplified peer dependency check
    if (packageLock.dependencies) {
      for (const [name, info] of Object.entries(packageLock.dependencies)) {
        if (info.peerDependencies) {
          for (const [peerName, peerVersion] of Object.entries(
            info.peerDependencies
          )) {
            if (
              !this.satisfiesVersion(
                packageLock.dependencies[peerName]?.version,
                peerVersion
              )
            ) {
              issues.push({
                type: 'peer-dependency',
                package: name,
                peer: peerName,
                required: peerVersion,
                installed:
                  packageLock.dependencies[peerName]?.version || 'missing',
                severity: 'medium',
              });
            }
          }
        }
      }
    }

    return issues;
  }

  satisfiesVersion(installed, required) {
    if (!installed || !required) return false;

    // Simplified version satisfaction check
    const installedParts = this.parseVersion(installed);
    const requiredParts = this.parseVersion(required);

    return (
      installedParts.major >= requiredParts.major &&
      installedParts.minor >= requiredParts.minor &&
      installedParts.patch >= requiredParts.patch
    );
  }

  findDuplicatePackages(packageLock) {
    const duplicates = [];
    const seen = new Set();

    if (packageLock.dependencies) {
      for (const [name, info] of Object.entries(packageLock.dependencies)) {
        const key = `${name}@${info.version}`;
        if (seen.has(key)) {
          duplicates.push({
            type: 'duplicate',
            package: name,
            version: info.version,
            severity: 'low',
            suggestion: 'Consider deduplicating packages',
          });
        }
        seen.add(key);
      }
    }

    return duplicates;
  }

  async generateIntelligentSuggestions(report) {
    this.log('🧠 Generating intelligent suggestions...');

    const suggestions = [];

    // Security-based suggestions
    if (report.details.security.vulnerabilities?.critical > 0) {
      suggestions.push({
        priority: 'CRITICAL',
        category: 'Security',
        message:
          'Critical security vulnerabilities detected. Immediate action required.',
        action: 'Run npm audit fix and review critical vulnerabilities',
        impact: 'Critical',
      });
    }

    if (report.details.security.vulnerabilities?.high > 5) {
      suggestions.push({
        priority: 'HIGH',
        category: 'Security',
        message: 'Multiple high-severity vulnerabilities detected.',
        action: 'Prioritize fixing high-severity issues',
        impact: 'High',
      });
    }

    // Health-based suggestions
    if (report.summary.outdated > 20) {
      suggestions.push({
        priority: 'MEDIUM',
        category: 'Dependencies',
        message: 'Many outdated dependencies detected.',
        action: 'Create update strategy and test thoroughly',
        impact: 'Medium',
      });
    }

    if (report.details.health.metrics?.majorUpdates > 3) {
      suggestions.push({
        priority: 'MEDIUM',
        category: 'Updates',
        message: 'Multiple major version updates available.',
        action: 'Plan major updates with breaking change analysis',
        impact: 'Medium',
      });
    }

    // Conflict-based suggestions
    if (report.summary.conflicts > 0) {
      suggestions.push({
        priority: 'LOW',
        category: 'Conflicts',
        message: 'Dependency conflicts detected.',
        action: 'Review and resolve peer dependency issues',
        impact: 'Low',
      });
    }

    report.suggestions = suggestions;
  }

  async generateReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportFile = path.join(
      this.config.reportDir,
      `smart-dependency-${timestamp}.json`
    );
    const summaryFile = path.join(
      this.config.reportDir,
      `smart-dependency-summary-${timestamp}.md`
    );

    // Save detailed JSON report
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    // Generate human-readable summary
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryFile, summary);

    this.log(`📄 Detailed report saved to: ${reportFile}`);
    this.log(`📋 Summary report saved to: ${summaryFile}`);

    // Log summary to console
    console.log('\n' + '='.repeat(60));
    console.log('📦 SMART DEPENDENCY ANALYSIS SUMMARY');
    console.log('='.repeat(60));
    console.log(`🔒 Vulnerabilities: ${report.summary.vulnerabilities}`);
    console.log(`📦 Outdated: ${report.summary.outdated}`);
    console.log(`⚠️  Conflicts: ${report.summary.conflicts}`);
    console.log(`🏥 Health Score: ${report.details.health.score || 'N/A'}`);
    console.log('='.repeat(60));
  }

  generateHumanReadableSummary(report) {
    let summary = `# Smart Dependency Analysis Report\n\n`;
    summary += `**Generated:** ${report.timestamp}\n\n`;

    summary += `## Summary\n\n`;
    summary += `- **Total Dependencies:** ${report.summary.totalDependencies}\n`;
    summary += `- **Security Vulnerabilities:** ${report.summary.vulnerabilities}\n`;
    summary += `- **Outdated Packages:** ${report.summary.outdated}\n`;
    summary += `- **Dependency Conflicts:** ${report.summary.conflicts}\n`;
    summary += `- **Health Score:** ${report.details.health.score || 'N/A'}/100\n\n`;

    if (report.suggestions.length > 0) {
      summary += `## Priority Recommendations\n\n`;
      report.suggestions.forEach(suggestion => {
        summary += `### ${suggestion.priority} Priority: ${suggestion.category}\n`;
        summary += `${suggestion.message}\n\n`;
        summary += `**Action:** ${suggestion.action}\n`;
        summary += `**Impact:** ${suggestion.impact}\n\n`;
      });
    }

    if (report.details.security.vulnerabilities) {
      summary += `## Security Status\n\n`;
      const vulns = report.details.security.vulnerabilities;
      summary += `- **Critical:** ${vulns.critical}\n`;
      summary += `- **High:** ${vulns.high}\n`;
      summary += `- **Moderate:** ${vulns.moderate}\n`;
      summary += `- **Low:** ${vulns.low}\n\n`;
    }

    return summary;
  }

  async run() {
    try {
      this.log('🚀 Starting Smart Dependency Automation...');

      const report = await this.analyzeDependencies();

      this.log('✅ Smart Dependency Automation completed successfully');
      return report;
    } catch (error) {
      this.log(`❌ Smart Dependency Automation failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new SmartDependencyAutomation();
  automation.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = SmartDependencyAutomation;
