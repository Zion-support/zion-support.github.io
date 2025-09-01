#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Starting error analytics dashboard...');

class ErrorAnalyticsDashboard {
  constructor() {
    this.analytics = {
      totalErrors: 0,
      fixedErrors: 0,
      failedFixes: 0,
      errorTypes: {},
      fileStats: {},
      timeStats: {},
      trends: []
    };
  }

  async run() {
    try {
      console.log('🔍 Collecting error analytics data...');
      
      // Collect data from all error fixer reports
      await this.collectAnalyticsData();
      
      // Analyze trends
      await this.analyzeTrends();
      
      // Generate dashboard
      await this.generateDashboard();
      
      console.log('✅ Error analytics dashboard completed');
      
    } catch (error) {
      console.error('❌ Error analytics dashboard failed:', error.message);
    }
  }

  async collectAnalyticsData() {
    const reportFiles = [
      'enhanced-error-detection-report.json',
      'typescript-error-fixer-report.json',
      'eslint-error-fixer-report.json',
      'build-error-fixer-report.json',
      'dependency-error-fixer-report.json',
      'syntax-error-fixer-report.json',
      'error-prevention-monitor-report.json',
      'master-error-coordinator-report.json'
    ];

    for (const reportFile of reportFiles) {
      const reportPath = path.join(process.cwd(), reportFile);
      if (fs.existsSync(reportPath)) {
        try {
          const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
          this.processReport(report, reportFile);
        } catch (error) {
          console.warn(`⚠️ Could not read report: ${reportFile}`);
        }
      }
    }
  }

  processReport(report, reportFile) {
    if (report.stats) {
      this.analytics.totalErrors += report.stats.totalErrors || 0;
      this.analytics.fixedErrors += report.stats.fixedErrors || 0;
      this.analytics.failedFixes += report.stats.failedFixes || 0;
    }

    if (report.fixes) {
      report.fixes.forEach(fix => {
        // Count error types
        const errorType = fix.type || fix.error?.type || 'unknown';
        this.analytics.errorTypes[errorType] = (this.analytics.errorTypes[errorType] || 0) + 1;

        // Count file stats
        const file = fix.file || fix.error?.file || 'unknown';
        if (!this.analytics.fileStats[file]) {
          this.analytics.fileStats[file] = { errors: 0, fixes: 0 };
        }
        this.analytics.fileStats[file].errors++;
        if (fix.success !== false) {
          this.analytics.fileStats[file].fixes++;
        }
      });
    }

    // Add timestamp data
    if (report.timestamp) {
      const date = new Date(report.timestamp);
      const dateKey = date.toISOString().split('T')[0];
      if (!this.analytics.timeStats[dateKey]) {
        this.analytics.timeStats[dateKey] = { errors: 0, fixes: 0 };
      }
      this.analytics.timeStats[dateKey].errors += report.stats?.totalErrors || 0;
      this.analytics.timeStats[dateKey].fixes += report.stats?.fixedErrors || 0;
    }
  }

  async analyzeTrends() {
    console.log('📈 Analyzing error trends...');
    
    // Sort time stats by date
    const sortedDates = Object.keys(this.analytics.timeStats).sort();
    
    // Calculate trends
    for (let i = 1; i < sortedDates.length; i++) {
      const currentDate = sortedDates[i];
      const previousDate = sortedDates[i - 1];
      
      const currentStats = this.analytics.timeStats[currentDate];
      const previousStats = this.analytics.timeStats[previousDate];
      
      const errorChange = currentStats.errors - previousStats.errors;
      const fixChange = currentStats.fixes - previousStats.fixes;
      
      this.analytics.trends.push({
        date: currentDate,
        errorChange,
        fixChange,
        errorTrend: errorChange > 0 ? 'increasing' : errorChange < 0 ? 'decreasing' : 'stable',
        fixTrend: fixChange > 0 ? 'improving' : fixChange < 0 ? 'worsening' : 'stable'
      });
    }
  }

  async generateDashboard() {
    console.log('📊 Generating analytics dashboard...');
    
    const dashboard = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: this.analytics.totalErrors,
        fixedErrors: this.analytics.fixedErrors,
        failedFixes: this.analytics.failedFixes,
        successRate: this.analytics.totalErrors > 0 ? 
          (this.analytics.fixedErrors / this.analytics.totalErrors * 100).toFixed(2) + '%' : '0%',
        failureRate: this.analytics.totalErrors > 0 ? 
          (this.analytics.failedFixes / this.analytics.totalErrors * 100).toFixed(2) + '%' : '0%'
      },
      errorTypes: this.analytics.errorTypes,
      topProblemFiles: this.getTopProblemFiles(),
      recentTrends: this.analytics.trends.slice(-7), // Last 7 days
      recommendations: this.generateRecommendations()
    };

    // Save dashboard
    const dashboardPath = path.join(process.cwd(), 'error-analytics-dashboard.json');
    fs.writeFileSync(dashboardPath, JSON.stringify(dashboard, null, 2));
    
    // Generate HTML dashboard
    const htmlDashboard = this.generateHTMLDashboard(dashboard);
    const htmlPath = path.join(process.cwd(), 'error-analytics-dashboard.html');
    fs.writeFileSync(htmlPath, htmlDashboard);
    
    console.log(`📊 Analytics dashboard saved to: ${dashboardPath}`);
    console.log(`🌐 HTML dashboard saved to: ${htmlPath}`);
    
    return dashboard;
  }

  getTopProblemFiles() {
    const fileStats = Object.entries(this.analytics.fileStats)
      .map(([file, stats]) => ({
        file,
        errors: stats.errors,
        fixes: stats.fixes,
        successRate: stats.errors > 0 ? (stats.fixes / stats.errors * 100).toFixed(2) + '%' : '0%'
      }))
      .sort((a, b) => b.errors - a.errors)
      .slice(0, 10); // Top 10 problem files
    
    return fileStats;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Analyze error types
    const errorTypeEntries = Object.entries(this.analytics.errorTypes);
    const mostCommonError = errorTypeEntries.sort((a, b) => b[1] - a[1])[0];
    
    if (mostCommonError) {
      recommendations.push(`Focus on fixing ${mostCommonError[0]} errors (${mostCommonError[1]} occurrences)`);
    }
    
    // Analyze problem files
    const topProblemFile = this.getTopProblemFiles()[0];
    if (topProblemFile && topProblemFile.errors > 5) {
      recommendations.push(`Review and refactor ${topProblemFile.file} (${topProblemFile.errors} errors)`);
    }
    
    // Analyze trends
    const recentTrends = this.analytics.trends.slice(-3);
    const increasingErrors = recentTrends.filter(t => t.errorTrend === 'increasing').length;
    
    if (increasingErrors > 1) {
      recommendations.push('Error rate is increasing - consider code review and testing improvements');
    }
    
    // General recommendations
    if (this.analytics.failedFixes > this.analytics.fixedErrors * 0.5) {
      recommendations.push('High failure rate in automatic fixes - consider manual review of complex errors');
    }
    
    if (Object.keys(this.analytics.errorTypes).length > 10) {
      recommendations.push('Many different error types detected - consider standardizing error handling patterns');
    }
    
    return recommendations;
  }

  generateHTMLDashboard(dashboard) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error Analytics Dashboard</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5em;
            font-weight: 300;
        }
        .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
        }
        .content {
            padding: 30px;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            border-left: 4px solid #667eea;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            color: #667eea;
            margin-bottom: 5px;
        }
        .stat-label {
            color: #666;
            font-size: 0.9em;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            color: #333;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .error-types {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .error-type {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            border-left: 3px solid #dc3545;
        }
        .error-type-name {
            font-weight: bold;
            color: #333;
        }
        .error-type-count {
            color: #dc3545;
            font-size: 1.2em;
        }
        .problem-files {
            background: #f8f9fa;
            border-radius: 8px;
            overflow: hidden;
        }
        .problem-file {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid #e9ecef;
        }
        .problem-file:last-child {
            border-bottom: none;
        }
        .file-name {
            font-family: monospace;
            color: #333;
        }
        .file-stats {
            display: flex;
            gap: 20px;
            color: #666;
        }
        .recommendations {
            background: #e3f2fd;
            border-radius: 8px;
            padding: 20px;
        }
        .recommendation {
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
        }
        .recommendation:before {
            content: "💡";
            position: absolute;
            left: 0;
        }
        .recommendation:last-child {
            margin-bottom: 0;
        }
        .trends {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
        }
        .trend {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            text-align: center;
        }
        .trend-date {
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
        }
        .trend-change {
            font-size: 0.9em;
        }
        .trend-increasing {
            color: #dc3545;
        }
        .trend-decreasing {
            color: #28a745;
        }
        .trend-stable {
            color: #6c757d;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Error Analytics Dashboard</h1>
            <p>Generated on ${new Date(dashboard.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="content">
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">${dashboard.summary.totalErrors}</div>
                    <div class="stat-label">Total Errors</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${dashboard.summary.fixedErrors}</div>
                    <div class="stat-label">Fixed Errors</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${dashboard.summary.successRate}</div>
                    <div class="stat-label">Success Rate</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${dashboard.summary.failureRate}</div>
                    <div class="stat-label">Failure Rate</div>
                </div>
            </div>
            
            <div class="section">
                <h2>Error Types</h2>
                <div class="error-types">
                    ${Object.entries(dashboard.errorTypes).map(([type, count]) => `
                        <div class="error-type">
                            <div class="error-type-name">${type}</div>
                            <div class="error-type-count">${count}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="section">
                <h2>Top Problem Files</h2>
                <div class="problem-files">
                    ${dashboard.topProblemFiles.map(file => `
                        <div class="problem-file">
                            <div class="file-name">${file.file}</div>
                            <div class="file-stats">
                                <span>${file.errors} errors</span>
                                <span>${file.successRate} success rate</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="section">
                <h2>Recent Trends</h2>
                <div class="trends">
                    ${dashboard.recentTrends.map(trend => `
                        <div class="trend">
                            <div class="trend-date">${trend.date}</div>
                            <div class="trend-change trend-${trend.errorTrend}">
                                ${trend.errorChange > 0 ? '+' : ''}${trend.errorChange} errors
                            </div>
                            <div class="trend-change trend-${trend.fixTrend}">
                                ${trend.fixChange > 0 ? '+' : ''}${trend.fixChange} fixes
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="section">
                <h2>Recommendations</h2>
                <div class="recommendations">
                    ${dashboard.recommendations.map(rec => `
                        <div class="recommendation">${rec}</div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
  }
}

// Main execution
async function main() {
  const dashboard = new ErrorAnalyticsDashboard();
  
  try {
    await dashboard.run();
    
    // Exit with appropriate code
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error analytics dashboard failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { ErrorAnalyticsDashboard };