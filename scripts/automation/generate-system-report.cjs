#!/usr/bin/env node

/**
 * System Report Generator
 * Generates comprehensive system reports for the Ultimate PM2 Automation System
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

class SystemReportGenerator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'logs', 'system-report.json');
    this.htmlReportFile = path.join(this.projectRoot, 'logs', 'system-report.html');
    this.ensureLogsDirectory();
  }

  async ensureLogsDirectory() {
    try {
      await fs.mkdir(path.join(this.projectRoot, 'logs'), { recursive: true });
    } catch (error) {
      console.log('Logs directory already exists');
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
  }

  async getSystemInfo() {
    try {
      const systemInfo = {
        platform: process.platform,
        architecture: process.arch,
        nodeVersion: process.version,
        memory: process.memoryUsage(),
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
      };

      // Get additional system info
      try {
        systemInfo.cpuCount = require('os').cpus().length;
        systemInfo.totalMemory = require('os').totalmem();
        systemInfo.freeMemory = require('os').freemem();
        systemInfo.loadAverage = require('os').loadavg();
      } catch (e) {
        // OS info not available
      }

      return systemInfo;
    } catch (error) {
      this.log(`Failed to get system info: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async getPM2Status() {
    try {
      const pm2Status = execSync('pm2 jlist', { encoding: 'utf8' });
      return JSON.parse(pm2Status);
    } catch (error) {
      this.log(`Failed to get PM2 status: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async getProcessMetrics() {
    try {
      const processes = await this.getPM2Status();
      const metrics = {
        total: processes.length,
        online: processes.filter(p => p.pm2_env.status === 'online').length,
        stopped: processes.filter(p => p.pm2_env.status === 'stopped').length,
        errored: processes.filter(p => p.pm2_env.status === 'errored').length,
        processes: processes.map(p => ({
          name: p.name,
          status: p.pm2_env.status,
          cpu: p.monit.cpu,
          memory: p.monit.memory,
          uptime: p.pm2_env.uptime,
          restarts: p.pm2_env.restart_time
        }))
      };

      return metrics;
    } catch (error) {
      this.log(`Failed to get process metrics: ${error.message}`, 'ERROR');
      return { total: 0, online: 0, stopped: 0, errored: 0, processes: [] };
    }
  }

  async getLogAnalysis() {
    try {
      const logDir = path.join(this.projectRoot, 'logs');
      const logFiles = await fs.readdir(logDir);
      
      const logAnalysis = {
        totalFiles: logFiles.length,
        totalSize: 0,
        recentErrors: 0,
        recentWarnings: 0,
        files: []
      };

      for (const file of logFiles) {
        if (file.endsWith('.log')) {
          const filePath = path.join(logDir, file);
          const stats = await fs.stat(filePath);
          const content = await fs.readFile(filePath, 'utf8');
          
          const errorCount = (content.match(/ERROR/g) || []).length;
          const warningCount = (content.match(/WARN/g) || []).length;
          
          logAnalysis.totalSize += stats.size;
          logAnalysis.recentErrors += errorCount;
          logAnalysis.recentWarnings += warningCount;
          
          logAnalysis.files.push({
            name: file,
            size: stats.size,
            errors: errorCount,
            warnings: warningCount,
            lastModified: stats.mtime
          });
        }
      }

      return logAnalysis;
    } catch (error) {
      this.log(`Failed to analyze logs: ${error.message}`, 'ERROR');
      return { totalFiles: 0, totalSize: 0, recentErrors: 0, recentWarnings: 0, files: [] };
    }
  }

  async getReportData() {
    try {
      const systemInfo = await this.getSystemInfo();
      const processMetrics = await this.getProcessMetrics();
      const logAnalysis = await this.getLogAnalysis();

      return {
        timestamp: new Date().toISOString(),
        system: systemInfo,
        processes: processMetrics,
        logs: logAnalysis,
        summary: {
          overallHealth: this.calculateOverallHealth(processMetrics, logAnalysis),
          recommendations: this.generateRecommendations(processMetrics, logAnalysis)
        }
      };
    } catch (error) {
      this.log(`Failed to generate report data: ${error.message}`, 'ERROR');
      return null;
    }
  }

  calculateOverallHealth(processMetrics, logAnalysis) {
    let healthScore = 100;

    // Deduct points for stopped processes
    if (processMetrics.stopped > 0) {
      healthScore -= processMetrics.stopped * 20;
    }

    // Deduct points for errored processes
    if (processMetrics.errored > 0) {
      healthScore -= processMetrics.errored * 30;
    }

    // Deduct points for recent errors
    if (logAnalysis.recentErrors > 0) {
      healthScore -= Math.min(50, logAnalysis.recentErrors * 2);
    }

    // Deduct points for recent warnings
    if (logAnalysis.recentWarnings > 0) {
      healthScore -= Math.min(20, logAnalysis.recentWarnings);
    }

    return Math.max(0, healthScore);
  }

  generateRecommendations(processMetrics, logAnalysis) {
    const recommendations = [];

    if (processMetrics.errored > 0) {
      recommendations.push({
        priority: 'high',
        category: 'Processes',
        message: `${processMetrics.errored} processes are in error state`,
        action: 'Check process logs and restart failed processes'
      });
    }

    if (processMetrics.stopped > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'Processes',
        message: `${processMetrics.stopped} processes are stopped`,
        action: 'Restart stopped processes'
      });
    }

    if (logAnalysis.recentErrors > 10) {
      recommendations.push({
        priority: 'high',
        category: 'Logs',
        message: `${logAnalysis.recentErrors} recent errors detected`,
        action: 'Investigate error logs and fix underlying issues'
      });
    }

    if (logAnalysis.recentWarnings > 20) {
      recommendations.push({
        priority: 'medium',
        category: 'Logs',
        message: `${logAnalysis.recentWarnings} recent warnings detected`,
        action: 'Review warning logs and address potential issues'
      });
    }

    return recommendations;
  }

  async generateHTMLReport(data) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Report - ${new Date().toLocaleDateString()}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background-color: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 30px; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
        .metric { display: inline-block; margin: 10px; padding: 15px; background: #f8f9fa; border-radius: 5px; text-align: center; min-width: 120px; }
        .metric-value { font-size: 24px; font-weight: bold; color: #007bff; }
        .metric-label { font-size: 14px; color: #666; margin-top: 5px; }
        .health-score { font-size: 48px; font-weight: bold; text-align: center; margin: 20px 0; }
        .health-excellent { color: #28a745; }
        .health-good { color: #ffc107; }
        .health-poor { color: #dc3545; }
        .recommendation { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .recommendation.high { background: #f8d7da; border-color: #f5c6cb; }
        .recommendation.medium { background: #fff3cd; border-color: #ffeaa7; }
        .process-list { overflow-x: auto; }
        .process-list table { width: 100%; border-collapse: collapse; }
        .process-list th, .process-list td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        .process-list th { background-color: #f8f9fa; }
        .status-online { color: #28a745; font-weight: bold; }
        .status-stopped { color: #ffc107; font-weight: bold; }
        .status-errored { color: #dc3545; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Ultimate PM2 Automation System Report</h1>
            <p>Generated on ${new Date().toLocaleString()}</p>
        </div>

        <div class="section">
            <h2>📊 System Health</h2>
            <div class="health-score ${data.summary.overallHealth >= 80 ? 'health-excellent' : data.summary.overallHealth >= 60 ? 'health-good' : 'health-poor'}">
                ${data.summary.overallHealth}/100
            </div>
        </div>

        <div class="section">
            <h2>🔧 Process Metrics</h2>
            <div class="metric">
                <div class="metric-value">${data.processes.total}</div>
                <div class="metric-label">Total Processes</div>
            </div>
            <div class="metric">
                <div class="metric-value status-online">${data.processes.online}</div>
                <div class="metric-label">Online</div>
            </div>
            <div class="metric">
                <div class="metric-value status-stopped">${data.processes.stopped}</div>
                <div class="metric-label">Stopped</div>
            </div>
            <div class="metric">
                <div class="metric-value status-errored">${data.processes.errored}</div>
                <div class="metric-label">Errored</div>
            </div>
        </div>

        <div class="section">
            <h2>📝 Log Analysis</h2>
            <div class="metric">
                <div class="metric-value">${data.logs.totalFiles}</div>
                <div class="metric-label">Log Files</div>
            </div>
            <div class="metric">
                <div class="metric-value">${Math.round(data.logs.totalSize / 1024 / 1024)}MB</div>
                <div class="metric-label">Total Size</div>
            </div>
            <div class="metric">
                <div class="metric-value">${data.logs.recentErrors}</div>
                <div class="metric-label">Recent Errors</div>
            </div>
            <div class="metric">
                <div class="metric-value">${data.logs.recentWarnings}</div>
                <div class="metric-label">Recent Warnings</div>
            </div>
        </div>

        <div class="section">
            <h2>🔄 Process Details</h2>
            <div class="process-list">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>CPU %</th>
                            <th>Memory</th>
                            <th>Uptime</th>
                            <th>Restarts</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.processes.processes.map(p => `
                            <tr>
                                <td>${p.name}</td>
                                <td class="status-${p.status}">${p.status}</td>
                                <td>${p.cpu}%</td>
                                <td>${Math.round(p.memory / 1024 / 1024)}MB</td>
                                <td>${Math.round(p.uptime / 1000 / 60)}m</td>
                                <td>${p.restarts}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="section">
            <h2>💡 Recommendations</h2>
            ${data.summary.recommendations.map(rec => `
                <div class="recommendation ${rec.priority}">
                    <strong>${rec.category}:</strong> ${rec.message}<br>
                    <em>Action: ${rec.action}</em>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <h2>ℹ️ System Information</h2>
            <p><strong>Platform:</strong> ${data.system.platform}</p>
            <p><strong>Architecture:</strong> ${data.system.architecture}</p>
            <p><strong>Node.js Version:</strong> ${data.system.nodeVersion}</p>
            <p><strong>CPU Cores:</strong> ${data.system.cpuCount || 'N/A'}</p>
            <p><strong>Total Memory:</strong> ${data.system.totalMemory ? Math.round(data.system.totalMemory / 1024 / 1024 / 1024) + 'GB' : 'N/A'}</p>
            <p><strong>Free Memory:</strong> ${data.system.freeMemory ? Math.round(data.system.freeMemory / 1024 / 1024 / 1024) + 'GB' : 'N/A'}</p>
        </div>
    </div>
</body>
</html>
    `;

    return html;
  }

  async generateReport() {
    this.log('📊 Generating system report...');

    try {
      const data = await this.getReportData();
      
      if (!data) {
        throw new Error('Failed to generate report data');
      }

      // Generate JSON report
      await fs.writeFile(this.reportFile, JSON.stringify(data, null, 2));
      this.log(`✅ JSON report generated: ${this.reportFile}`);

      // Generate HTML report
      const htmlReport = await this.generateHTMLReport(data);
      await fs.writeFile(this.htmlReportFile, htmlReport);
      this.log(`✅ HTML report generated: ${this.htmlReportFile}`);

      // Display summary
      this.log(`📊 System Health Score: ${data.summary.overallHealth}/100`);
      this.log(`🔄 Processes: ${data.processes.online}/${data.processes.total} online`);
      this.log(`📝 Log Files: ${data.logs.totalFiles} (${Math.round(data.logs.totalSize / 1024 / 1024)}MB)`);
      this.log(`⚠️ Recent Errors: ${data.logs.recentErrors}`);
      this.log(`⚠️ Recent Warnings: ${data.logs.recentWarnings}`);

      if (data.summary.recommendations.length > 0) {
        this.log(`💡 Recommendations: ${data.summary.recommendations.length}`);
        data.summary.recommendations.forEach(rec => {
          this.log(`   - ${rec.priority.toUpperCase()}: ${rec.message}`);
        });
      }

      return data;
    } catch (error) {
      this.log(`❌ Report generation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async run() {
    this.log('🤖 Starting System Report Generator...');
    
    try {
      const report = await this.generateReport();
      this.log('🎯 System Report Generator Complete!');
      return report;
    } catch (error) {
      this.log(`❌ System report generation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the report generator
if (require.main === module) {
  const reportGenerator = new SystemReportGenerator();
  reportGenerator.run().catch(console.error);
}

module.exports = SystemReportGenerator;