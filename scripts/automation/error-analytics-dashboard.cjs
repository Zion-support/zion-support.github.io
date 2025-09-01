#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ErrorAnalyticsDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.dashboardDir = path.join(this.projectRoot, 'error-dashboard');
    this.updateInterval = parseInt(process.env.DASHBOARD_UPDATE_INTERVAL) || 300000; // 5 minutes
    this.analyticsEnabled = process.env.ANALYTICS_ENABLED === 'true';
    
    // Ensure directories exist
    [this.reportsDir, this.logsDir, this.dashboardDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
    
    this.analyticsData = {
      errorTrends: [],
      fixSuccessRates: [],
      errorTypes: {},
      timeDistribution: {},
      fileDistribution: {}
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async collectErrorReports() {
    try {
      const reports = [];
      const files = fs.readdirSync(this.reportsDir);
      
      for (const file of files) {
        if (file.endsWith('.json')) {
          const filePath = path.join(this.reportsDir, file);
          const content = fs.readFileSync(filePath, 'utf8');
          const report = JSON.parse(content);
          reports.push(report);
        }
      }
      
      return reports.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    } catch (error) {
      this.log(`Error collecting reports: ${error.message}`, 'ERROR');
      return [];
    }
  }

  analyzeErrorTrends(reports) {
    const trends = [];
    const errorCounts = {};
    
    for (const report of reports) {
      const date = new Date(report.timestamp).toISOString().split('T')[0];
      
      if (!errorCounts[date]) {
        errorCounts[date] = {
          total: 0,
          typescript: 0,
          eslint: 0,
          build: 0,
          dependency: 0
        };
      }
      
      if (report.totalErrors) {
        errorCounts[date].total += report.totalErrors;
      }
      
      if (report.checks) {
        if (report.checks.TypeScript && !report.checks.TypeScript.success) {
          errorCounts[date].typescript += report.checks.TypeScript.count || 0;
        }
        if (report.checks.ESLint && !report.checks.ESLint.success) {
          errorCounts[date].eslint += report.checks.ESLint.count || 0;
        }
        if (report.checks.Build && !report.checks.Build.success) {
          errorCounts[date].build += report.checks.Build.count || 0;
        }
        if (report.checks.Dependencies && !report.checks.Dependencies.success) {
          errorCounts[date].dependency += report.checks.Dependencies.count || 0;
        }
      }
    }
    
    for (const [date, counts] of Object.entries(errorCounts)) {
      trends.push({
        date,
        ...counts
      });
    }
    
    return trends;
  }

  analyzeFixSuccessRates(reports) {
    const fixReports = reports.filter(report => 
      report.fixesApplied !== undefined || report.resolutionsApplied !== undefined
    );
    
    const successRates = [];
    
    for (const report of fixReports) {
      const totalIssues = report.initialErrors || report.initialIssues || 0;
      const fixesApplied = report.fixesApplied || report.resolutionsApplied || 0;
      const remainingIssues = report.remainingErrors || report.remainingIssues || 0;
      
      if (totalIssues > 0) {
        successRates.push({
          timestamp: report.timestamp,
          totalIssues,
          fixesApplied,
          remainingIssues,
          successRate: ((fixesApplied / totalIssues) * 100).toFixed(2),
          type: report.type || 'general'
        });
      }
    }
    
    return successRates;
  }

  analyzeErrorTypes(reports) {
    const errorTypes = {
      typescript: 0,
      eslint: 0,
      build: 0,
      dependency: 0,
      other: 0
    };
    
    for (const report of reports) {
      if (report.checks) {
        if (report.checks.TypeScript && !report.checks.TypeScript.success) {
          errorTypes.typescript += report.checks.TypeScript.count || 0;
        }
        if (report.checks.ESLint && !report.checks.ESLint.success) {
          errorTypes.eslint += report.checks.ESLint.count || 0;
        }
        if (report.checks.Build && !report.checks.Build.success) {
          errorTypes.build += report.checks.Build.count || 0;
        }
        if (report.checks.Dependencies && !report.checks.Dependencies.success) {
          errorTypes.dependency += report.checks.Dependencies.count || 0;
        }
      }
    }
    
    return errorTypes;
  }

  analyzeTimeDistribution(reports) {
    const timeDistribution = {
      '00:00-06:00': 0,
      '06:00-12:00': 0,
      '12:00-18:00': 0,
      '18:00-24:00': 0
    };
    
    for (const report of reports) {
      const hour = new Date(report.timestamp).getHours();
      
      if (hour >= 0 && hour < 6) {
        timeDistribution['00:00-06:00']++;
      } else if (hour >= 6 && hour < 12) {
        timeDistribution['06:00-12:00']++;
      } else if (hour >= 12 && hour < 18) {
        timeDistribution['12:00-18:00']++;
      } else {
        timeDistribution['18:00-24:00']++;
      }
    }
    
    return timeDistribution;
  }

  analyzeFileDistribution(reports) {
    const fileDistribution = {};
    
    for (const report of reports) {
      if (report.checks && report.checks.TypeScript && report.checks.TypeScript.errors) {
        for (const error of report.checks.TypeScript.errors) {
          if (error.file && error.file !== 'unknown') {
            const fileName = path.basename(error.file);
            fileDistribution[fileName] = (fileDistribution[fileName] || 0) + 1;
          }
        }
      }
    }
    
    // Sort by error count and take top 10
    return Object.entries(fileDistribution)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
  }

  generateDashboardHTML(analyticsData) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error Analytics Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            text-align: center;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
        }
        .stat-number {
            font-size: 2.5em;
            font-weight: bold;
            color: #667eea;
        }
        .stat-label {
            color: #666;
            margin-top: 5px;
        }
        .chart-container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .chart-title {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 15px;
            color: #333;
        }
        .last-updated {
            text-align: center;
            color: #666;
            font-size: 0.9em;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚨 Error Analytics Dashboard</h1>
            <p>Real-time insights into project error patterns and automation effectiveness</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">${analyticsData.totalErrors}</div>
                <div class="stat-label">Total Errors</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${analyticsData.fixSuccessRate}%</div>
                <div class="stat-label">Fix Success Rate</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${analyticsData.errorTypes.typescript}</div>
                <div class="stat-label">TypeScript Errors</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${analyticsData.errorTypes.eslint}</div>
                <div class="stat-label">ESLint Errors</div>
            </div>
        </div>
        
        <div class="chart-container">
            <div class="chart-title">Error Trends Over Time</div>
            <canvas id="trendsChart"></canvas>
        </div>
        
        <div class="chart-container">
            <div class="chart-title">Error Types Distribution</div>
            <canvas id="typesChart"></canvas>
        </div>
        
        <div class="chart-container">
            <div class="chart-title">Fix Success Rates</div>
            <canvas id="successChart"></canvas>
        </div>
        
        <div class="last-updated">
            Last updated: ${new Date().toLocaleString()}
        </div>
    </div>

    <script>
        // Error Trends Chart
        const trendsCtx = document.getElementById('trendsChart').getContext('2d');
        new Chart(trendsCtx, {
            type: 'line',
            data: {
                labels: ${JSON.stringify(analyticsData.errorTrends.map(t => t.date))},
                datasets: [{
                    label: 'Total Errors',
                    data: ${JSON.stringify(analyticsData.errorTrends.map(t => t.total))},
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Error Types Chart
        const typesCtx = document.getElementById('typesChart').getContext('2d');
        new Chart(typesCtx, {
            type: 'doughnut',
            data: {
                labels: ['TypeScript', 'ESLint', 'Build', 'Dependency'],
                datasets: [{
                    data: [
                        ${analyticsData.errorTypes.typescript},
                        ${analyticsData.errorTypes.eslint},
                        ${analyticsData.errorTypes.build},
                        ${analyticsData.errorTypes.dependency}
                    ],
                    backgroundColor: [
                        '#667eea',
                        '#764ba2',
                        '#f093fb',
                        '#f5576c'
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });

        // Success Rates Chart
        const successCtx = document.getElementById('successChart').getContext('2d');
        new Chart(successCtx, {
            type: 'bar',
            data: {
                labels: ${JSON.stringify(analyticsData.fixSuccessRates.map(r => r.timestamp.split('T')[0]))},
                datasets: [{
                    label: 'Success Rate (%)',
                    data: ${JSON.stringify(analyticsData.fixSuccessRates.map(r => parseFloat(r.successRate)))},
                    backgroundColor: '#667eea'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    </script>
</body>
</html>`;

    return html;
  }

  async generateAnalyticsReport() {
    this.log('Generating analytics report...');
    
    try {
      const reports = await this.collectErrorReports();
      
      if (reports.length === 0) {
        this.log('No reports found for analytics', 'INFO');
        return;
      }
      
      // Analyze data
      const errorTrends = this.analyzeErrorTrends(reports);
      const fixSuccessRates = this.analyzeFixSuccessRates(reports);
      const errorTypes = this.analyzeErrorTypes(reports);
      const timeDistribution = this.analyzeTimeDistribution(reports);
      const fileDistribution = this.analyzeFileDistribution(reports);
      
      // Calculate summary statistics
      const totalErrors = Object.values(errorTypes).reduce((sum, count) => sum + count, 0);
      const avgSuccessRate = fixSuccessRates.length > 0 
        ? fixSuccessRates.reduce((sum, rate) => sum + parseFloat(rate.successRate), 0) / fixSuccessRates.length
        : 0;
      
      const analyticsData = {
        totalErrors,
        fixSuccessRate: avgSuccessRate.toFixed(1),
        errorTypes,
        timeDistribution,
        fileDistribution,
        errorTrends,
        fixSuccessRates,
        lastUpdated: new Date().toISOString()
      };
      
      // Save analytics data
      const analyticsPath = path.join(this.dashboardDir, 'analytics-data.json');
      fs.writeFileSync(analyticsPath, JSON.stringify(analyticsData, null, 2));
      
      // Generate HTML dashboard
      const html = this.generateDashboardHTML(analyticsData);
      const dashboardPath = path.join(this.dashboardDir, 'index.html');
      fs.writeFileSync(dashboardPath, html);
      
      // Update analytics data
      this.analyticsData = analyticsData;
      
      this.log(`Analytics report generated: ${dashboardPath}`, 'INFO');
      
    } catch (error) {
      this.log(`Failed to generate analytics report: ${error.message}`, 'ERROR');
    }
  }

  async startDashboard() {
    this.log('Starting error analytics dashboard...');
    
    // Generate initial report
    await this.generateAnalyticsReport();
    
    // Set up periodic updates
    setInterval(async () => {
      try {
        await this.generateAnalyticsReport();
      } catch (error) {
        this.log(`Error in periodic analytics update: ${error.message}`, 'ERROR');
      }
    }, this.updateInterval);

    this.log(`Error analytics dashboard started. Updating every ${this.updateInterval / 1000} seconds.`);
    this.log(`Dashboard available at: ${path.join(this.dashboardDir, 'index.html')}`);
  }

  getStatus() {
    return {
      running: true,
      dashboardPath: path.join(this.dashboardDir, 'index.html'),
      updateInterval: this.updateInterval,
      analyticsEnabled: this.analyticsEnabled,
      lastUpdate: this.analyticsData.lastUpdated
    };
  }
}

// Main execution
if (require.main === module) {
  const dashboard = new ErrorAnalyticsDashboard();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    dashboard.log('Shutting down error analytics dashboard...');
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    dashboard.log('Shutting down error analytics dashboard...');
    process.exit(0);
  });

  // Start dashboard
  dashboard.startDashboard().catch(error => {
    dashboard.log(`Failed to start dashboard: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = ErrorAnalyticsDashboard;