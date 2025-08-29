#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const http = require('http');
const url = require('url');

class ComprehensiveAutomationDashboard {
  constructor() {
    this.dashboardLog = path.join(__dirname, '../logs', 'automation-dashboard.log');
    this.ensureLogDirectory();
    this.port = process.env.DASHBOARD_PORT || 3001;
    this.automationSystems = new Map();
    this.realTimeMetrics = new Map();
    this.alertHistory = [];
    this.startDashboard();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.dashboardLog);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] Dashboard: ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.dashboardLog, logMessage);
  }

  startDashboard() {
    const server = http.createServer((req, res) => {
      const parsedUrl = url.parse(req.url, true);
      const pathname = parsedUrl.pathname;

      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Access-Control-Allow-Origin', '*');

      if (pathname === '/') {
        res.writeHead(200);
        res.end(this.generateDashboardHTML());
      } else if (pathname === '/api/metrics') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(this.getRealTimeMetrics()));
      } else if (pathname === '/api/processes') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(this.getPM2Processes()));
      } else if (pathname === '/api/alerts') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(this.getAlertHistory()));
      } else if (pathname === '/api/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(this.getSystemHealth()));
      } else {
        res.writeHead(404);
        res.end('Not Found');
      }
    });

    server.listen(this.port, () => {
      this.log(`🚀 Comprehensive Automation Dashboard started on port ${this.port}`);
      this.log(`📊 Access dashboard at: http://localhost:${this.port}`);
    });

    // Start real-time metrics collection
    this.startMetricsCollection();
  }

  startMetricsCollection() {
    // Collect metrics every 10 seconds
    setInterval(async () => {
      await this.collectRealTimeMetrics();
    }, 10000);

    // Update PM2 process list every 30 seconds
    setInterval(async () => {
      await this.updatePM2Processes();
    }, 30000);

    // Generate system health report every minute
    setInterval(async () => {
      await this.generateSystemHealthReport();
    }, 60000);
  }

  async collectRealTimeMetrics() {
    try {
      // Collect PM2 metrics
      const pm2Metrics = await this.collectPM2Metrics();
      
      // Collect system metrics
      const systemMetrics = await this.collectSystemMetrics();
      
      // Collect automation metrics
      const automationMetrics = await this.collectAutomationMetrics();
      
      // Store combined metrics
      this.realTimeMetrics.set('pm2', pm2Metrics);
      this.realTimeMetrics.set('system', systemMetrics);
      this.realTimeMetrics.set('automation', automationMetrics);
      
    } catch (error) {
      this.log(`Error collecting metrics: ${error.message}`);
    }
  }

  async collectPM2Metrics() {
    try {
      const pm2List = execSync('pm2 list --json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);
      
      const metrics = {
        timestamp: new Date().toISOString(),
        totalProcesses: processes.length,
        onlineProcesses: processes.filter(p => p.pm2_env.status === 'online').length,
        offlineProcesses: processes.filter(p => p.pm2_env.status !== 'online').length,
        totalMemory: 0,
        totalCpu: 0,
        processes: []
      };
      
      processes.forEach(process => {
        metrics.totalMemory += process.monit.memory || 0;
        metrics.totalCpu += process.monit.cpu || 0;
        
        metrics.processes.push({
          name: process.name,
          status: process.pm2_env.status,
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          uptime: process.pm2_env.pm_uptime,
          restarts: process.pm2_env.restart_time
        });
      });
      
      return metrics;
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async collectSystemMetrics() {
    try {
      const metrics = {
        timestamp: new Date().toISOString(),
        diskUsage: 0,
        memoryUsage: 0,
        cpuLoad: 0,
        networkConnections: 0
      };
      
      // Disk usage
      try {
        const diskUsage = execSync('df -h / | tail -1', { encoding: 'utf8' });
        const usagePercent = parseInt(diskUsage.split(/\s+/)[4].replace('%', ''));
        metrics.diskUsage = usagePercent;
      } catch (error) {
        metrics.diskUsage = 0;
      }
      
      // Memory usage
      try {
        const memoryInfo = execSync('free -m', { encoding: 'utf8' });
        const memoryLines = memoryInfo.split('\n');
        const memLine = memoryLines[1].split(/\s+/);
        const totalMem = parseInt(memLine[1]);
        const usedMem = parseInt(memLine[2]);
        metrics.memoryUsage = totalMem > 0 ? Math.round((usedMem / totalMem) * 100) : 0;
      } catch (error) {
        metrics.memoryUsage = 0;
      }
      
      // CPU load
      try {
        const cpuLoad = execSync('uptime', { encoding: 'utf8' });
        const loadMatch = cpuLoad.match(/load average: ([\d.]+)/);
        if (loadMatch) {
          metrics.cpuLoad = parseFloat(loadMatch[1]);
        }
      } catch (error) {
        metrics.cpuLoad = 0;
      }
      
      // Network connections
      try {
        const netstat = execSync('netstat -an | wc -l', { encoding: 'utf8' });
        metrics.networkConnections = parseInt(netstat.trim());
      } catch (error) {
        metrics.networkConnections = 0;
      }
      
      return metrics;
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async collectAutomationMetrics() {
    try {
      const metrics = {
        timestamp: new Date().toISOString(),
        totalAutomations: 0,
        runningAutomations: 0,
        failedAutomations: 0,
        successRate: 0,
        lastRun: null,
        automationDetails: []
      };
      
      // Read automation reports
      const reportsDir = path.join(__dirname, '../reports');
      if (fs.existsSync(reportsDir)) {
        const reportFiles = fs.readdirSync(reportsDir).filter(file => file.endsWith('.json'));
        
        metrics.totalAutomations = reportFiles.length;
        
        for (const reportFile of reportFiles) {
          try {
            const reportPath = path.join(reportsDir, reportFile);
            const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
            
            if (report.timestamp) {
              const lastRun = new Date(report.timestamp);
              if (!metrics.lastRun || lastRun > new Date(metrics.lastRun)) {
                metrics.lastRun = report.timestamp;
              }
            }
            
            // Analyze report for success/failure
            if (report.success !== undefined) {
              if (report.success) {
                metrics.runningAutomations++;
              } else {
                metrics.failedAutomations++;
              }
            }
            
            metrics.automationDetails.push({
              name: reportFile.replace('.json', ''),
              timestamp: report.timestamp,
              success: report.success,
              summary: report.summary
            });
            
          } catch (error) {
            // Skip invalid reports
          }
        }
        
        // Calculate success rate
        const totalRuns = metrics.runningAutomations + metrics.failedAutomations;
        if (totalRuns > 0) {
          metrics.successRate = Math.round((metrics.runningAutomations / totalRuns) * 100);
        }
      }
      
      return metrics;
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async updatePM2Processes() {
    try {
      const pm2List = execSync('pm2 list --json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);
      
      this.automationSystems.clear();
      
      processes.forEach(process => {
        this.automationSystems.set(process.name, {
          id: process.pm_id,
          name: process.name,
          status: process.pm2_env.status,
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          uptime: process.pm2_env.pm_uptime,
          restarts: process.pm2_env.restart_time,
          script: process.pm2_env.script,
          lastUpdate: Date.now()
        });
      });
      
    } catch (error) {
      this.log(`Error updating PM2 processes: ${error.message}`);
    }
  }

  async generateSystemHealthReport() {
    try {
      const healthReport = {
        timestamp: new Date().toISOString(),
        overallHealth: 'healthy',
        issues: [],
        recommendations: []
      };
      
      // Check PM2 health
      const pm2Metrics = this.realTimeMetrics.get('pm2');
      if (pm2Metrics && !pm2Metrics.error) {
        if (pm2Metrics.offlineProcesses > 0) {
          healthReport.overallHealth = 'warning';
          healthReport.issues.push(`${pm2Metrics.offlineProcesses} PM2 processes are offline`);
        }
        
        if (pm2Metrics.totalMemory > 1024 * 1024 * 1024) { // 1GB
          healthReport.overallHealth = 'warning';
          healthReport.issues.push('High memory usage detected');
        }
      }
      
      // Check system health
      const systemMetrics = this.realTimeMetrics.get('system');
      if (systemMetrics && !systemMetrics.error) {
        if (systemMetrics.diskUsage > 90) {
          healthReport.overallHealth = 'critical';
          healthReport.issues.push(`Disk usage is ${systemMetrics.diskUsage}% (critical)`);
        }
        
        if (systemMetrics.memoryUsage > 85) {
          healthReport.overallHealth = 'warning';
          healthReport.issues.push(`Memory usage is ${systemMetrics.memoryUsage}% (high)`);
        }
        
        if (systemMetrics.cpuLoad > 5.0) {
          healthReport.overallHealth = 'warning';
          healthReport.issues.push(`CPU load is ${systemMetrics.cpuLoad} (high)`);
        }
      }
      
      // Generate recommendations
      if (healthReport.overallHealth === 'critical') {
        healthReport.recommendations.push('Immediate action required: Check system resources and restart critical services');
      } else if (healthReport.overallHealth === 'warning') {
        healthReport.recommendations.push('Monitor system closely and consider optimization measures');
      }
      
      // Store health report
      const healthReportPath = path.join(__dirname, '../reports', 'system-health-report.json');
      const reportDir = path.dirname(healthReportPath);
      
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(healthReportPath, JSON.stringify(healthReport, null, 2));
      
    } catch (error) {
      this.log(`Error generating health report: ${error.message}`);
    }
  }

  getRealTimeMetrics() {
    return Object.fromEntries(this.realTimeMetrics);
  }

  getPM2Processes() {
    return Array.from(this.automationSystems.values());
  }

  getAlertHistory() {
    return this.alertHistory;
  }

  getSystemHealth() {
    const healthReportPath = path.join(__dirname, '../reports', 'system-health-report.json');
    
    if (fs.existsSync(healthReportPath)) {
      try {
        return JSON.parse(fs.readFileSync(healthReportPath, 'utf8'));
      } catch (error) {
        return { error: 'Failed to read health report' };
      }
    }
    
    return { error: 'Health report not found' };
  }

  generateDashboardHTML() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comprehensive Automation Dashboard</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            color: white;
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }
        
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .card {
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        
        .card h3 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 1.3rem;
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 10px;
        }
        
        .metric {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 8px;
        }
        
        .metric-label {
            font-weight: 500;
            color: #555;
        }
        
        .metric-value {
            font-weight: bold;
            color: #667eea;
        }
        
        .status-indicator {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 8px;
        }
        
        .status-online { background: #28a745; }
        .status-offline { background: #dc3545; }
        .status-warning { background: #ffc107; }
        
        .refresh-btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s ease;
            margin-bottom: 20px;
        }
        
        .refresh-btn:hover {
            background: #5a6fd8;
        }
        
        .process-list {
            max-height: 300px;
            overflow-y: auto;
        }
        
        .process-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            margin-bottom: 8px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }
        
        .process-name {
            font-weight: 500;
        }
        
        .process-status {
            display: flex;
            align-items: center;
        }
        
        .health-indicator {
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: bold;
        }
        
        .health-healthy { background: #d4edda; color: #155724; }
        .health-warning { background: #fff3cd; color: #856404; }
        .health-critical { background: #f8d7da; color: #721c24; }
        
        @media (max-width: 768px) {
            .dashboard-grid {
                grid-template-columns: 1fr;
            }
            
            .header h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Comprehensive Automation Dashboard</h1>
            <p>Real-time monitoring of PM2 processes and automation systems</p>
        </div>
        
        <button class="refresh-btn" onclick="refreshData()">🔄 Refresh Data</button>
        
        <div class="dashboard-grid">
            <div class="card">
                <h3>📊 PM2 Process Overview</h3>
                <div id="pm2-overview">
                    <div class="metric">
                        <span class="metric-label">Total Processes:</span>
                        <span class="metric-value" id="total-processes">-</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Online Processes:</span>
                        <span class="metric-value" id="online-processes">-</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Offline Processes:</span>
                        <span class="metric-value" id="offline-processes">-</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Total Memory:</span>
                        <span class="metric-value" id="total-memory">-</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Total CPU:</span>
                        <span class="metric-value" id="total-cpu">-</span>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h3>💻 System Resources</h3>
                <div id="system-resources">
                    <div class="metric">
                        <span class="metric-label">Disk Usage:</span>
                        <span class="metric-value" id="disk-usage">-</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Memory Usage:</span>
                        <span class="metric-value" id="memory-usage">-</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">CPU Load:</span>
                        <span class="metric-value" id="cpu-load">-</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Network Connections:</span>
                        <span class="metric-value" id="network-connections">-</span>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h3>🤖 Automation Systems</h3>
                <div id="automation-systems">
                    <div class="metric">
                        <span class="metric-label">Total Automations:</span>
                        <span class="metric-value" id="total-automations">-</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Running Automations:</span>
                        <span class="metric-value" id="running-automations">-</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Success Rate:</span>
                        <span class="metric-value" id="success-rate">-</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Last Run:</span>
                        <span class="metric-value" id="last-run">-</span>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h3>🏥 System Health</h3>
                <div id="system-health">
                    <div class="metric">
                        <span class="metric-label">Overall Health:</span>
                        <span class="metric-value" id="overall-health">-</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Active Issues:</span>
                        <span class="metric-value" id="active-issues">-</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <h3>📋 PM2 Process Details</h3>
            <div id="process-details" class="process-list">
                <p>Loading process details...</p>
            </div>
        </div>
    </div>

    <script>
        async function refreshData() {
            try {
                // Fetch all metrics
                const [metrics, processes, health] = await Promise.all([
                    fetch('/api/metrics').then(r => r.json()),
                    fetch('/api/processes').then(r => r.json()),
                    fetch('/api/health').then(r => r.json())
                ]);
                
                updateDashboard(metrics, processes, health);
            } catch (error) {
                console.error('Error refreshing data:', error);
            }
        }
        
        function updateDashboard(metrics, processes, health) {
            // Update PM2 overview
            if (metrics.pm2 && !metrics.pm2.error) {
                document.getElementById('total-processes').textContent = metrics.pm2.totalProcesses;
                document.getElementById('online-processes').textContent = metrics.pm2.onlineProcesses;
                document.getElementById('offline-processes').textContent = metrics.pm2.offlineProcesses;
                document.getElementById('total-memory').textContent = formatBytes(metrics.pm2.totalMemory);
                document.getElementById('total-cpu').textContent = metrics.pm2.totalCpu.toFixed(1) + '%';
            }
            
            // Update system resources
            if (metrics.system && !metrics.system.error) {
                document.getElementById('disk-usage').textContent = metrics.system.diskUsage + '%';
                document.getElementById('memory-usage').textContent = metrics.system.memoryUsage + '%';
                document.getElementById('cpu-load').textContent = metrics.system.cpuLoad.toFixed(2);
                document.getElementById('network-connections').textContent = metrics.system.networkConnections.toLocaleString();
            }
            
            // Update automation systems
            if (metrics.automation && !metrics.automation.error) {
                document.getElementById('total-automations').textContent = metrics.automation.totalAutomations;
                document.getElementById('running-automations').textContent = metrics.automation.runningAutomations;
                document.getElementById('success-rate').textContent = metrics.automation.successRate + '%';
                document.getElementById('last-run').textContent = metrics.automation.lastRun ? new Date(metrics.automation.lastRun).toLocaleString() : 'Never';
            }
            
            // Update system health
            if (health && !health.error) {
                document.getElementById('overall-health').textContent = health.overallHealth;
                document.getElementById('active-issues').textContent = health.issues.length;
                
                // Update health indicator color
                const healthElement = document.getElementById('overall-health');
                healthElement.className = 'metric-value health-' + health.overallHealth;
            }
            
            // Update process details
            updateProcessDetails(processes);
        }
        
        function updateProcessDetails(processes) {
            const container = document.getElementById('process-details');
            
            if (!processes || processes.length === 0) {
                container.innerHTML = '<p>No processes found</p>';
                return;
            }
            
            const processHTML = processes.map(process => {
                const statusClass = 'status-' + (process.status === 'online' ? 'online' : 'offline');
                const uptime = process.uptime ? formatUptime(process.uptime) : 'N/A';
                
                return \`
                    <div class="process-item">
                        <div class="process-name">\${process.name}</div>
                        <div class="process-status">
                            <span class="status-indicator \${statusClass}"></span>
                            <span>\${process.status}</span>
                            <span style="margin-left: 15px;">\${uptime}</span>
                            <span style="margin-left: 15px;">\${formatBytes(process.memory)}</span>
                            <span style="margin-left: 15px;">\${process.cpu.toFixed(1)}%</span>
                        </div>
                    </div>
                \`;
            }).join('');
            
            container.innerHTML = processHTML;
        }
        
        function formatBytes(bytes) {
            if (bytes === 0) return '0 B';
            const k = 1024;
            const sizes = ['B', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }
        
        function formatUptime(milliseconds) {
            const seconds = Math.floor(milliseconds / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            
            if (days > 0) return \`\${days}d \${hours % 24}h\`;
            if (hours > 0) return \`\${hours}h \${minutes % 60}m\`;
            if (minutes > 0) return \`\${minutes}m \${seconds % 60}s\`;
            return \`\${seconds}s\`;
        }
        
        // Initial load
        refreshData();
        
        // Auto-refresh every 30 seconds
        setInterval(refreshData, 30000);
    </script>
</body>
</html>
    `;
  }
}

// Main execution
const dashboard = new ComprehensiveAutomationDashboard();