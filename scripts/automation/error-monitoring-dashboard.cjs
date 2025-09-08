#!/usr/bin/env node

/**
 * Error Monitoring Dashboard Automation
 * Comprehensive monitoring and reporting for all error fixing automations
 * Runs every 5 minutes as part of PM2 automation system
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class ErrorMonitoringDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async run() {
    this.log('🚀 Starting Error Monitoring Dashboard');
    
    try {
      // Step 1: Collect error statistics
      const errorStats = await this.collectErrorStatistics();
      
      // Step 2: Analyze error patterns
      const errorPatterns = await this.analyzeErrorPatterns();
      
      // Step 3: Generate comprehensive report
      await this.generateComprehensiveReport(errorStats, errorPatterns);
      
      // Step 4: Generate error fixing recommendations
      await this.generateErrorFixingRecommendations(errorStats, errorPatterns);
      
      // Step 5: Update dashboard data
      await this.updateDashboardData(errorStats, errorPatterns);
      
      this.log(`✅ Error Monitoring Dashboard completed successfully!`);
      
    } catch (error) {
      this.log(`❌ Error in Error Monitoring Dashboard: ${error.message}`, 'ERROR');
      await this.generateErrorReport(error);
    }
  }

  async collectErrorStatistics() {
    this.log('📊 Collecting error statistics...');
    
    const stats = {
      totalErrors: 0,
      errorsByType: {},
      errorsByFile: {},
      errorsBySeverity: {},
      automationPerformance: {},
      recentFixes: [],
      errorTrends: []
    };
    
    try {
      // Collect TypeScript errors
      const tsErrors = await this.getTypeScriptErrors();
      stats.totalErrors += tsErrors.length;
      stats.errorsByType['TypeScript'] = tsErrors.length;
      
      // Collect ESLint errors
      const eslintErrors = await this.getESLintErrors();
      stats.totalErrors += eslintErrors.length;
      stats.errorsByType['ESLint'] = eslintErrors.length;
      
      // Collect build errors
      const buildErrors = await this.getBuildErrors();
      stats.totalErrors += buildErrors.length;
      stats.errorsByType['Build'] = buildErrors.length;
      
      // Analyze error patterns by file
      const allErrors = [...tsErrors, ...eslintErrors, ...buildErrors];
      stats.errorsByFile = this.groupErrorsByFile(allErrors);
      
      // Analyze error severity
      stats.errorsBySeverity = this.analyzeErrorSeverity(allErrors);
      
      // Collect automation performance data
      stats.automationPerformance = await this.getAutomationPerformance();
      
      // Collect recent fixes
      stats.recentFixes = await this.getRecentFixes();
      
      // Analyze error trends
      stats.errorTrends = await this.analyzeErrorTrends();
      
    } catch (error) {
      this.log(`⚠️  Warning: Could not collect all error statistics: ${error.message}`, 'WARN');
    }
    
    return stats;
  }

  async getTypeScriptErrors() {
    try {
      const result = execSync('npm run type-check 2>&1', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      
      const output = result.toString();
      const errors = output.split('\n')
        .filter(line => line.includes('error TS'))
        .map(line => {
          const match = line.match(/error TS\d+:\s*(.+)/);
          return {
            type: 'TypeScript',
            code: line.match(/error (TS\d+):/)?.[1] || 'Unknown',
            message: match?.[1] || line,
            severity: 'error',
            file: line.match(/([^:]+):\d+:/)?.[1] || 'Unknown'
          };
        });
      
      return errors;
    } catch (error) {
      // TypeScript check failed, parse the error output
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      return output.split('\n')
        .filter(line => line.includes('error TS'))
        .map(line => {
          const match = line.match(/error TS\d+:\s*(.+)/);
          return {
            type: 'TypeScript',
            code: line.match(/error (TS\d+):/)?.[1] || 'Unknown',
            message: match?.[1] || line,
            severity: 'error',
            file: line.match(/([^:]+):\d+:/)?.[1] || 'Unknown'
          };
        });
    }
  }

  async getESLintErrors() {
    try {
      const result = execSync('npm run lint 2>&1', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      
      const output = result.toString();
      const errors = output.split('\n')
        .filter(line => line.includes('error'))
        .map(line => {
          const match = line.match(/([^:]+):(\d+):(\d+):\s*error\s+(.+)/);
          return {
            type: 'ESLint',
            code: 'ESLint',
            message: match?.[4] || line,
            severity: 'error',
            file: match?.[1] || 'Unknown',
            line: parseInt(match?.[2]) || 0,
            column: parseInt(match?.[3]) || 0
          };
        });
      
      return errors;
    } catch (error) {
      // ESLint failed, parse the error output
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      return output.split('\n')
        .filter(line => line.includes('error'))
        .map(line => {
          const match = line.match(/([^:]+):(\d+):(\d+):\s*error\s+(.+)/);
          return {
            type: 'ESLint',
            code: 'ESLint',
            message: match?.[4] || line,
            severity: 'error',
            file: match?.[1] || 'Unknown',
            line: parseInt(match?.[2]) || 0,
            column: parseInt(match?.[3]) || 0
          };
        });
    }
  }

  async getBuildErrors() {
    try {
      const result = execSync('npm run build 2>&1', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      
      const output = result.toString();
      const errors = output.split('\n')
        .filter(line => line.includes('error') || line.includes('Error'))
        .map(line => ({
          type: 'Build',
          code: 'Build',
          message: line.trim(),
          severity: 'error',
          file: 'Build Process'
        }));
      
      return errors;
    } catch (error) {
      // Build failed, parse the error output
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      return output.split('\n')
        .filter(line => line.includes('error') || line.includes('Error'))
        .map(line => ({
          type: 'Build',
          code: 'Build',
          message: line.trim(),
          severity: 'error',
          file: 'Build Process'
        }));
    }
  }

  groupErrorsByFile(errors) {
    const grouped = {};
    
    errors.forEach(error => {
      const file = error.file || 'Unknown';
      if (!grouped[file]) {
        grouped[file] = [];
      }
      grouped[file].push(error);
    });
    
    return grouped;
  }

  analyzeErrorSeverity(errors) {
    const severity = {
      error: 0,
      warning: 0,
      info: 0
    };
    
    errors.forEach(error => {
      const sev = error.severity || 'error';
      severity[sev] = (severity[sev] || 0) + 1;
    });
    
    return severity;
  }

  async getAutomationPerformance() {
    const performance = {};
    
    try {
      // Read automation report files
      const reportFiles = glob.sync('reports/*-report.json', { cwd: this.projectRoot });
      
      for (const reportFile of reportFiles) {
        try {
          const content = fs.readFileSync(path.join(this.projectRoot, reportFile), 'utf8');
          const report = JSON.parse(content);
          
          if (report.automation && report.duration) {
            performance[report.automation] = {
              lastRun: report.timestamp,
              duration: report.duration,
              status: report.status,
              fixesApplied: report.fixesApplied || 0,
              errorsFixed: report.errorsFixed || 0
            };
          }
        } catch (parseError) {
          // Skip invalid JSON files
        }
      }
    } catch (error) {
      this.log(`⚠️  Warning: Could not read automation performance data: ${error.message}`, 'WARN');
    }
    
    return performance;
  }

  async getRecentFixes() {
    const fixes = [];
    
    try {
      // Read recent automation reports
      const reportFiles = glob.sync('reports/*-report.json', { cwd: this.projectRoot });
      
      for (const reportFile of reportFiles) {
        try {
          const content = fs.readFileSync(path.join(this.projectRoot, reportFile), 'utf8');
          const report = JSON.parse(content);
          
          if (report.timestamp && report.fixesApplied > 0) {
            fixes.push({
              automation: report.automation,
              timestamp: report.timestamp,
              fixesApplied: report.fixesApplied,
              errorsFixed: report.errorsFixed
            });
          }
        } catch (parseError) {
          // Skip invalid JSON files
        }
      }
      
      // Sort by timestamp (most recent first)
      fixes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
    } catch (error) {
      this.log(`⚠️  Warning: Could not read recent fixes: ${error.message}`, 'WARN');
    }
    
    return fixes.slice(0, 10); // Return last 10 fixes
  }

  async analyzeErrorTrends() {
    const trends = [];
    
    try {
      // Read historical error data
      const reportFiles = glob.sync('reports/*-report.json', { cwd: this.projectRoot });
      const dailyStats = {};
      
      reportFiles.forEach(reportFile => {
        try {
          const content = fs.readFileSync(path.join(this.projectRoot, reportFile), 'utf8');
          const report = JSON.parse(content);
          
          if (report.timestamp) {
            const date = report.timestamp.split('T')[0];
            if (!dailyStats[date]) {
              dailyStats[date] = { errors: 0, fixes: 0 };
            }
            
            dailyStats[date].errors += report.errorsFixed || 0;
            dailyStats[date].fixes += report.fixesApplied || 0;
          }
        } catch (parseError) {
          // Skip invalid JSON files
        }
      });
      
      // Convert to trend data
      Object.entries(dailyStats).forEach(([date, stats]) => {
        trends.push({
          date,
          errors: stats.errors,
          fixes: stats.fixes,
          netChange: stats.fixes - stats.errors
        });
      });
      
      // Sort by date
      trends.sort((a, b) => new Date(a.date) - new Date(b.date));
      
    } catch (error) {
      this.log(`⚠️  Warning: Could not analyze error trends: ${error.message}`, 'WARN');
    }
    
    return trends;
  }

  async analyzeErrorPatterns() {
    const patterns = {
      commonErrors: {},
      errorHotspots: {},
      fixableErrors: [],
      persistentErrors: []
    };
    
    try {
      // Get current errors
      const tsErrors = await this.getTypeScriptErrors();
      const eslintErrors = await this.getESLintErrors();
      const allErrors = [...tsErrors, ...eslintErrors];
      
      // Analyze common error patterns
      allErrors.forEach(error => {
        const key = `${error.code}: ${error.message}`;
        patterns.commonErrors[key] = (patterns.commonErrors[key] || 0) + 1;
      });
      
      // Find error hotspots (files with many errors)
      const fileErrorCounts = {};
      allErrors.forEach(error => {
        const file = error.file;
        fileErrorCounts[file] = (fileErrorCounts[file] || 0) + 1;
      });
      
      patterns.errorHotspots = Object.entries(fileErrorCounts)
        .filter(([file, count]) => count > 5)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);
      
      // Identify fixable errors
      patterns.fixableErrors = allErrors.filter(error => 
        error.message.includes('unused') ||
        error.message.includes('duplicate') ||
        error.message.includes('missing') ||
        error.message.includes('import')
      );
      
      // Identify persistent errors (errors that appear frequently)
      patterns.persistentErrors = Object.entries(patterns.commonErrors)
        .filter(([, count]) => count > 3)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);
      
    } catch (error) {
      this.log(`⚠️  Warning: Could not analyze error patterns: ${error.message}`, 'WARN');
    }
    
    return patterns;
  }

  async generateComprehensiveReport(errorStats, errorPatterns) {
    this.log('📊 Generating comprehensive error report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: errorStats.totalErrors,
        errorsByType: errorStats.errorsByType,
        errorsBySeverity: errorStats.errorsBySeverity,
        automationStatus: Object.keys(errorStats.automationPerformance).length
      },
      detailedStats: errorStats,
      errorPatterns: errorPatterns,
      recommendations: await this.generateRecommendations(errorStats, errorPatterns)
    };
    
    const reportPath = path.join(this.reportsDir, 'comprehensive-error-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Comprehensive error report generated: ${reportPath}`);
  }

  async generateErrorFixingRecommendations(errorStats, errorPatterns) {
    this.log('💡 Generating error fixing recommendations...');
    
    const recommendations = [];
    
    // High priority recommendations
    if (errorStats.totalErrors > 100) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Run comprehensive error fixer immediately',
        reason: `Project has ${errorStats.totalErrors} errors that need immediate attention`,
        automation: 'comprehensive-error-fixer'
      });
    }
    
    // TypeScript specific recommendations
    if (errorStats.errorsByType.TypeScript > 50) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Run TypeScript error fixer',
        reason: `High number of TypeScript errors (${errorStats.errorsByType.TypeScript})`,
        automation: 'typescript-error-fixer'
      });
    }
    
    // Icon import recommendations
    if (errorPatterns.commonErrors['ESLint: Module has no exported member']) {
      recommendations.push({
        priority: 'MEDIUM',
        action: 'Run Lucide React icon fixer',
        reason: 'Multiple icon import errors detected',
        automation: 'lucide-react-icon-fixer'
      });
    }
    
    // File-specific recommendations
    errorPatterns.errorHotspots.forEach(([file, count]) => {
      if (count > 10) {
        recommendations.push({
          priority: 'MEDIUM',
          action: `Focus on fixing errors in ${file}`,
          reason: `File has ${count} errors (error hotspot)`,
          automation: 'manual-review'
        });
      }
    });
    
    const recommendationsReport = {
      timestamp: new Date().toISOString(),
      recommendations: recommendations,
      summary: `Generated ${recommendations.length} recommendations for error fixing`
    };
    
    const reportPath = path.join(this.reportsDir, 'error-fixing-recommendations.json');
    fs.writeFileSync(reportPath, JSON.stringify(recommendationsReport, null, 2));
    
    this.log(`💡 Error fixing recommendations generated: ${reportPath}`);
  }

  async updateDashboardData(errorStats, errorPatterns) {
    this.log('📈 Updating dashboard data...');
    
    const dashboardData = {
      lastUpdated: new Date().toISOString(),
      currentStatus: {
        totalErrors: errorStats.totalErrors,
        errorsByType: errorStats.errorsByType,
        errorsBySeverity: errorStats.errorsBySeverity
      },
      automationStatus: errorStats.automationPerformance,
      recentActivity: errorStats.recentFixes.slice(0, 5),
      errorTrends: errorStats.errorTrends.slice(-7), // Last 7 days
      topErrorHotspots: errorPatterns.errorHotspots.slice(0, 5),
      recommendations: await this.generateQuickRecommendations(errorStats, errorPatterns)
    };
    
    const dashboardPath = path.join(this.reportsDir, 'error-dashboard.json');
    fs.writeFileSync(dashboardPath, JSON.stringify(dashboardData, null, 2));
    
    this.log(`📈 Dashboard data updated: ${dashboardPath}`);
  }

  async generateQuickRecommendations(errorStats, errorPatterns) {
    const quickRecs = [];
    
    if (errorStats.totalErrors > 0) {
      quickRecs.push('Run error fixing automations');
    }
    
    if (errorStats.errorsByType.TypeScript > 0) {
      quickRecs.push('Focus on TypeScript errors');
    }
    
    if (errorPatterns.errorHotspots.length > 0) {
      quickRecs.push('Address error hotspots');
    }
    
    return quickRecs;
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      automation: 'Error Monitoring Dashboard',
      status: 'error',
      error: error.message,
      stack: error.stack,
      duration: Date.now() - this.startTime
    };
    
    const reportPath = path.join(this.reportsDir, 'error-monitoring-dashboard-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
    
    this.log(`❌ Error report generated: ${reportPath}`);
  }
}

// Main execution
if (require.main === module) {
  const dashboard = new ErrorMonitoringDashboard();
  dashboard.run().catch(console.error);
}

module.exports = ErrorMonitoringDashboard;