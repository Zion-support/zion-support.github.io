#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorPreventionDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.results = {
      systemHealth: 0,
      totalErrorsFixed: 0,
      totalFilesProcessed: 0,
      automationStatus: {},
      recommendations: [],
      success: false
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Error Prevention Dashboard: ${message}`);
  }

  async generateDashboard() {
    this.log('Generating comprehensive error prevention dashboard...');
    
    try {
      // Collect all automation reports
      const reports = await this.collectAutomationReports();
      
      // Analyze system health
      const systemHealth = await this.analyzeSystemHealth(reports);
      
      // Generate recommendations
      const recommendations = await this.generateRecommendations(reports, systemHealth);
      
      // Create dashboard data
      const dashboard = {
        timestamp: new Date().toISOString(),
        systemOverview: {
          overallHealth: systemHealth.overallScore,
          healthGrade: this.getHealthGrade(systemHealth.overallScore),
          lastUpdated: new Date().toISOString()
        },
        automationStatus: {
          totalAutomations: Object.keys(reports).length,
          activeAutomations: this.countActiveAutomations(reports),
          successfulAutomations: this.countSuccessfulAutomations(reports),
          automationHealth: this.calculateAutomationHealth(reports)
        },
        errorPreventionMetrics: {
          totalErrorsFixed: this.calculateTotalErrorsFixed(reports),
          totalFilesProcessed: this.calculateTotalFilesProcessed(reports),
          errorReductionRate: this.calculateErrorReductionRate(reports),
          preventionEfficiency: this.calculatePreventionEfficiency(reports)
        },
        detailedReports: reports,
        recommendations: recommendations,
        systemHealth: systemHealth
      };
      
      this.results.systemHealth = systemHealth.overallScore;
      this.results.totalErrorsFixed = dashboard.errorPreventionMetrics.totalErrorsFixed;
      this.results.totalFilesProcessed = dashboard.errorPreventionMetrics.totalFilesProcessed;
      this.results.automationStatus = dashboard.automationStatus;
      this.results.recommendations = recommendations;
      this.results.success = true;
      
      // Save dashboard
      await this.saveDashboard(dashboard);
      
      // Display dashboard summary
      this.displayDashboardSummary(dashboard);
      
      return dashboard;
      
    } catch (error) {
      this.log(`Dashboard generation failed: ${error.message}`);
      this.results.success = false;
      return null;
    }
  }

  async collectAutomationReports() {
    this.log('Collecting automation reports...');
    
    const reports = {};
    const reportFiles = [
      'comprehensive-error-fixer-report.json',
      'typescript-error-fixer-report.json',
      'eslint-error-fixer-report.json',
      'syntax-error-fixer-report.json',
      'build-error-fixer-report.json',
      'dependency-error-fixer-report.json',
      'code-quality-monitor-report.json',
      'error-prevention-orchestrator-report.json',
      'continuous-error-monitor-report.json'
    ];
    
    for (const reportFile of reportFiles) {
      const reportPath = path.join(this.reportsDir, reportFile);
      if (fs.existsSync(reportPath)) {
        try {
          const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
          const key = reportFile.replace('-report.json', '');
          reports[key] = report;
        } catch (error) {
          this.log(`Failed to parse report ${reportFile}: ${error.message}`);
        }
      }
    }
    
    this.log(`Collected ${Object.keys(reports).length} automation reports`);
    return reports;
  }

  async analyzeSystemHealth(reports) {
    this.log('Analyzing system health...');
    
    const health = {
      overallScore: 0,
      categories: {
        errorPrevention: 0,
        codeQuality: 0,
        automation: 0,
        dependencies: 0
      },
      details: {}
    };
    
    // Analyze error prevention health
    if (reports['comprehensive-error-fixer'] || reports['error-prevention-orchestrator']) {
      const errorFixer = reports['comprehensive-error-fixer'] || reports['error-prevention-orchestrator'];
      health.categories.errorPrevention = this.calculateErrorPreventionHealth(errorFixer);
    }
    
    // Analyze code quality health
    if (reports['code-quality-monitor']) {
      const qualityReport = reports['code-quality-monitor'];
      health.categories.codeQuality = this.calculateCodeQualityHealth(qualityReport);
    }
    
    // Analyze automation health
    health.categories.automation = this.calculateAutomationHealth(reports);
    
    // Analyze dependency health
    if (reports['dependency-error-fixer']) {
      const dependencyReport = reports['dependency-error-fixer'];
      health.categories.dependencies = this.calculateDependencyHealth(dependencyReport);
    }
    
    // Calculate overall health score
    const categoryScores = Object.values(health.categories);
    health.overallScore = Math.round(categoryScores.reduce((sum, score) => sum + score, 0) / categoryScores.length);
    
    // Add health details
    health.details = {
      errorPrevention: this.getErrorPreventionDetails(reports),
      codeQuality: this.getCodeQualityDetails(reports),
      automation: this.getAutomationDetails(reports),
      dependencies: this.getDependencyDetails(reports)
    };
    
    return health;
  }

  calculateErrorPreventionHealth(report) {
    if (!report || !report.results) return 0;
    
    const results = report.results;
    let score = 100;
    
    // Deduct points for failures
    if (!results.success) score -= 30;
    if (results.errorsFixed === 0 && results.totalErrorsFixed === 0) score -= 20;
    
    return Math.max(0, score);
  }

  calculateCodeQualityHealth(report) {
    if (!report || !report.results) return 0;
    
    const results = report.results;
    return results.qualityScore || 0;
  }

  calculateAutomationHealth(reports) {
    const totalAutomations = Object.keys(reports).length;
    if (totalAutomations === 0) return 0;
    
    const successfulAutomations = this.countSuccessfulAutomations(reports);
    return Math.round((successfulAutomations / totalAutomations) * 100);
  }

  calculateDependencyHealth(report) {
    if (!report || !report.results) return 0;
    
    const results = report.results;
    let score = 100;
    
    // Deduct points for dependency issues
    if (!results.success) score -= 40;
    if (results.dependencyIssuesFixed > 0) score -= 20;
    
    return Math.max(0, score);
  }

  getErrorPreventionDetails(reports) {
    const details = {
      totalErrorsFixed: 0,
      totalFilesProcessed: 0,
      lastRun: null,
      status: 'unknown'
    };
    
    if (reports['comprehensive-error-fixer']) {
      const report = reports['comprehensive-error-fixer'];
      details.totalErrorsFixed = report.results?.totalErrorsFixed || 0;
      details.totalFilesProcessed = report.results?.totalFilesProcessed || 0;
      details.lastRun = report.timestamp;
      details.status = report.results?.success ? 'success' : 'failed';
    }
    
    return details;
  }

  getCodeQualityDetails(reports) {
    const details = {
      qualityScore: 0,
      issuesFound: 0,
      lastRun: null,
      grade: 'unknown'
    };
    
    if (reports['code-quality-monitor']) {
      const report = reports['code-quality-monitor'];
      details.qualityScore = report.results?.qualityScore || 0;
      details.issuesFound = report.results?.issuesFound || 0;
      details.lastRun = report.timestamp;
      details.grade = this.getHealthGrade(details.qualityScore);
    }
    
    return details;
  }

  getAutomationDetails(reports) {
    const details = {
      totalAutomations: Object.keys(reports).length,
      activeAutomations: this.countActiveAutomations(reports),
      successfulAutomations: this.countSuccessfulAutomations(reports),
      lastRun: this.getLastRunTime(reports)
    };
    
    return details;
  }

  getDependencyDetails(reports) {
    const details = {
      issuesFixed: 0,
      packagesUpdated: 0,
      conflictsResolved: 0,
      lastRun: null,
      status: 'unknown'
    };
    
    if (reports['dependency-error-fixer']) {
      const report = reports['dependency-error-fixer'];
      details.issuesFixed = report.results?.dependencyIssuesFixed || 0;
      details.packagesUpdated = report.results?.packagesUpdated || 0;
      details.conflictsResolved = report.results?.conflictsResolved || 0;
      details.lastRun = report.timestamp;
      details.status = report.results?.success ? 'success' : 'failed';
    }
    
    return details;
  }

  countActiveAutomations(reports) {
    let count = 0;
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    
    for (const [key, report] of Object.entries(reports)) {
      if (report.timestamp) {
        const reportTime = new Date(report.timestamp).getTime();
        if (now - reportTime < oneHour) {
          count++;
        }
      }
    }
    
    return count;
  }

  countSuccessfulAutomations(reports) {
    let count = 0;
    
    for (const [key, report] of Object.entries(reports)) {
      if (report.results && report.results.success) {
        count++;
      }
    }
    
    return count;
  }

  getLastRunTime(reports) {
    let lastRun = null;
    
    for (const [key, report] of Object.entries(reports)) {
      if (report.timestamp) {
        const reportTime = new Date(report.timestamp);
        if (!lastRun || reportTime > lastRun) {
          lastRun = reportTime;
        }
      }
    }
    
    return lastRun ? lastRun.toISOString() : null;
  }

  calculateTotalErrorsFixed(reports) {
    let total = 0;
    
    for (const [key, report] of Object.entries(reports)) {
      if (report.results) {
        total += report.results.errorsFixed || 
                report.results.syntaxErrorsFixed || 
                report.results.buildErrorsFixed || 
                report.results.dependencyIssuesFixed || 
                report.results.totalErrorsFixed || 0;
      }
    }
    
    return total;
  }

  calculateTotalFilesProcessed(reports) {
    let total = 0;
    
    for (const [key, report] of Object.entries(reports)) {
      if (report.results) {
        total += report.results.filesProcessed || 
                report.results.totalFilesProcessed || 0;
      }
    }
    
    return total;
  }

  calculateErrorReductionRate(reports) {
    // This is a simplified calculation
    const totalErrors = this.calculateTotalErrorsFixed(reports);
    if (totalErrors === 0) return 0;
    
    // Assume some baseline error count
    const baselineErrors = 100;
    return Math.round(((baselineErrors - totalErrors) / baselineErrors) * 100);
  }

  calculatePreventionEfficiency(reports) {
    const totalErrors = this.calculateTotalErrorsFixed(reports);
    const totalFiles = this.calculateTotalFilesProcessed(reports);
    
    if (totalFiles === 0) return 0;
    
    return Math.round((totalErrors / totalFiles) * 100);
  }

  async generateRecommendations(reports, systemHealth) {
    this.log('Generating recommendations...');
    
    const recommendations = [];
    
    // Health-based recommendations
    if (systemHealth.overallScore < 70) {
      recommendations.push({
        priority: 'high',
        category: 'system',
        message: 'System health is below acceptable levels. Consider running comprehensive error prevention automation.',
        action: 'Run error prevention orchestrator'
      });
    }
    
    // Code quality recommendations
    if (systemHealth.categories.codeQuality < 80) {
      recommendations.push({
        priority: 'medium',
        category: 'quality',
        message: 'Code quality could be improved. Consider refactoring complex functions and improving documentation.',
        action: 'Run code quality monitor and address issues'
      });
    }
    
    // Dependency recommendations
    if (systemHealth.categories.dependencies < 90) {
      recommendations.push({
        priority: 'medium',
        category: 'dependencies',
        message: 'Dependency health needs attention. Consider updating packages and resolving conflicts.',
        action: 'Run dependency error fixer'
      });
    }
    
    // Automation recommendations
    if (systemHealth.categories.automation < 80) {
      recommendations.push({
        priority: 'high',
        category: 'automation',
        message: 'Automation system needs attention. Check for failed automation processes.',
        action: 'Review automation logs and restart failed processes'
      });
    }
    
    // Performance recommendations
    if (this.calculateTotalFilesProcessed(reports) > 1000) {
      recommendations.push({
        priority: 'low',
        category: 'performance',
        message: 'Large codebase detected. Consider optimizing automation processes for better performance.',
        action: 'Review automation intervals and optimize processing'
      });
    }
    
    return recommendations;
  }

  async saveDashboard(dashboard) {
    const dashboardPath = path.join(this.reportsDir, 'error-prevention-dashboard.json');
    fs.writeFileSync(dashboardPath, JSON.stringify(dashboard, null, 2));
    
    this.log(`Dashboard saved to ${dashboardPath}`);
  }

  displayDashboardSummary(dashboard) {
    console.log('\n' + '='.repeat(80));
    console.log('🚀 ERROR PREVENTION DASHBOARD SUMMARY');
    console.log('='.repeat(80));
    
    console.log(`📊 Overall System Health: ${dashboard.systemOverview.overallHealth}/100 (${dashboard.systemOverview.healthGrade})`);
    console.log(`🕒 Last Updated: ${dashboard.systemOverview.lastUpdated}`);
    
    console.log('\n🔧 AUTOMATION STATUS:');
    console.log(`   Total Automations: ${dashboard.automationStatus.totalAutomations}`);
    console.log(`   Active Automations: ${dashboard.automationStatus.activeAutomations}`);
    console.log(`   Successful Automations: ${dashboard.automationStatus.successfulAutomations}`);
    console.log(`   Automation Health: ${dashboard.automationStatus.automationHealth}%`);
    
    console.log('\n📈 ERROR PREVENTION METRICS:');
    console.log(`   Total Errors Fixed: ${dashboard.errorPreventionMetrics.totalErrorsFixed}`);
    console.log(`   Total Files Processed: ${dashboard.errorPreventionMetrics.totalFilesProcessed}`);
    console.log(`   Error Reduction Rate: ${dashboard.errorPreventionMetrics.errorReductionRate}%`);
    console.log(`   Prevention Efficiency: ${dashboard.errorPreventionMetrics.preventionEfficiency}%`);
    
    console.log('\n💡 RECOMMENDATIONS:');
    if (dashboard.recommendations.length === 0) {
      console.log('   ✅ No immediate actions required. System is healthy.');
    } else {
      dashboard.recommendations.forEach((rec, index) => {
        const priorityIcon = rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢';
        console.log(`   ${priorityIcon} ${rec.message}`);
        console.log(`      Action: ${rec.action}`);
      });
    }
    
    console.log('\n' + '='.repeat(80));
  }

  getHealthGrade(score) {
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 80) return 'A-';
    if (score >= 75) return 'B+';
    if (score >= 70) return 'B';
    if (score >= 65) return 'B-';
    if (score >= 60) return 'C+';
    if (score >= 55) return 'C';
    if (score >= 50) return 'C-';
    if (score >= 45) return 'D+';
    if (score >= 40) return 'D';
    if (score >= 35) return 'D-';
    return 'F';
  }

  async run() {
    this.log('Starting Error Prevention Dashboard...');
    
    try {
      const dashboard = await this.generateDashboard();
      
      if (dashboard) {
        this.log('Dashboard generated successfully');
        return this.results;
      } else {
        this.log('Failed to generate dashboard');
        this.results.success = false;
        return this.results;
      }
      
    } catch (error) {
      this.log(`Dashboard generation failed: ${error.message}`);
      this.results.success = false;
      return this.results;
    }
  }
  {/* Removed stray closing brace */}

// Run the dashboard if called directly
if (require.main === module) {
  const dashboard = new ErrorPreventionDashboard();
  dashboard.run().then(results => {
    process.exit(results.success ? 0 : 1);
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
  {/* Removed stray closing brace */}

module.exports = ErrorPreventionDashboard;