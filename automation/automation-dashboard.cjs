#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

class AutomationDashboard {
  constructor() {
    this.port = parseInt(process.env.DASHBOARD_PORT) || 3001;
    this.updateInterval = parseInt(process.env.UPDATE_INTERVAL) || 5000; // 5 seconds
    this.realTimeMonitoring = process.env.REAL_TIME_MONITORING === 'true';
    
    this.automationStatus = new Map();
    this.performanceMetrics = new Map();
    this.aiInsights = [];
    this.logFile = path.join(__dirname, 'logs', 'automation-dashboard.log');
    this.ensureLogDirectory();
    
    this.log('🚀 Enhanced Automation Dashboard initialized');
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async startDashboard() {
    this.log(`🌐 Starting automation dashboard on port ${this.port}...`);
    
    // Initialize automation status
    await this.initializeAutomationStatus();
    
    // Start real-time monitoring
    if (this.realTimeMonitoring) {
      this.startRealTimeMonitoring();
    }
    
    // Create HTTP server
    const server = http.createServer((req, res) => {
      this.handleRequest(req, res);
    });
    
    server.listen(this.port, () => {
      this.log(`✅ Dashboard server started on http://localhost:${this.port}`);
      this.log('📊 Dashboard is now accessible in your browser');
    });
    
    // Handle server errors
    server.on('error', (error) => {
      this.log(`❌ Dashboard server error: ${error.message}`);
    });
  }

  async initializeAutomationStatus() {
    this.log('🔍 Initializing automation status...');
    
    // Define automation processes
    const processes = [
      'intelligent-orchestrator',
      'ai-code-quality',
      'smart-lint-monitor',
      'ai-security-scanner',
      'performance-optimizer',
      'seo-intelligence',
      'test-intelligence',
      'dependency-intelligence',
      'build-intelligence',
      'link-intelligence',
      'automation-dashboard'
    ];
    
    for (const processName of processes) {
      this.automationStatus.set(processName, {
        name: processName,
        status: 'unknown',
        memory: 0,
        cpu: 0,
        uptime: 0,
        lastUpdate: new Date().toISOString(),
        health: 'unknown',
        performance: 'unknown'
      });
    }
    
    this.log(`✅ Initialized ${processes.length} automation processes`);
  }

  startRealTimeMonitoring() {
    this.log('🔄 Starting real-time monitoring...');
    
    // Update status every interval
    setInterval(async () => {
      await this.updateAutomationStatus();
      await this.generateAIInsights();
      await this.updatePerformanceMetrics();
    }, this.updateInterval);
    
    this.log(`✅ Real-time monitoring started with ${this.updateInterval / 1000}s intervals`);
  }

  async updateAutomationStatus() {
    try {
      // Get PM2 status
      const pm2Status = execSync('pm2 jlist', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const processes = JSON.parse(pm2Status);
      
      for (const process of processes) {
        const processName = process.name;
        if (this.automationStatus.has(processName)) {
          const status = this.automationStatus.get(processName);
          
          status.status = process.pm2_env.status;
          status.memory = process.monit.memory;
          status.cpu = process.monit.cpu;
          status.uptime = process.pm2_env.pm_uptime;
          status.lastUpdate = new Date().toISOString();
          status.health = this.calculateProcessHealth(process);
          status.performance = this.calculateProcessPerformance(process);
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Error updating automation status: ${error.message}`);
    }
  }

  calculateProcessHealth(process) {
    const memory = process.monit.memory;
    const cpu = process.monit.cpu;
    const status = process.pm2_env.status;
    
    if (status !== 'online') return 'critical';
    if (memory > 500 * 1024 * 1024) return 'warning'; // > 500MB
    if (cpu > 80) return 'warning'; // > 80% CPU
    if (memory > 300 * 1024 * 1024) return 'attention'; // > 300MB
    if (cpu > 50) return 'attention'; // > 50% CPU
    
    return 'healthy';
  }

  calculateProcessPerformance(process) {
    const memory = process.monit.memory;
    const cpu = process.monit.cpu;
    
    const memoryScore = Math.max(0, 100 - (memory / (1024 * 1024))); // MB to score
    const cpuScore = Math.max(0, 100 - cpu);
    
    const averageScore = (memoryScore + cpuScore) / 2;
    
    if (averageScore >= 80) return 'excellent';
    if (averageScore >= 60) return 'good';
    if (averageScore >= 40) return 'fair';
    if (averageScore >= 20) return 'poor';
    return 'critical';
  }

  async generateAIInsights() {
    this.log('🧠 Generating AI insights...');
    
    this.aiInsights = [];
    
    // Analyze automation performance
    const performanceInsights = this.analyzePerformance();
    this.aiInsights.push(...performanceInsights);
    
    // Analyze automation health
    const healthInsights = this.analyzeHealth();
    this.aiInsights.push(...healthInsights);
    
    // Generate recommendations
    const recommendations = this.generateRecommendations();
    this.aiInsights.push(...recommendations);
    
    this.log(`🧠 Generated ${this.aiInsights.length} AI insights`);
  }

  analyzePerformance() {
    const insights = [];
    
    // Check for high memory usage
    for (const [name, status] of this.automationStatus) {
      if (status.memory > 400 * 1024 * 1024) { // > 400MB
        insights.push({
          type: 'performance',
          severity: 'warning',
          message: `${name} is using high memory (${Math.round(status.memory / 1024 / 1024)}MB)`,
          recommendation: 'Consider optimizing memory usage or increasing memory limits',
          process: name
        });
      }
      
      if (status.cpu > 70) { // > 70% CPU
        insights.push({
          type: 'performance',
          severity: 'warning',
          message: `${name} is using high CPU (${status.cpu.toFixed(1)}%)`,
          recommendation: 'Investigate high CPU usage and optimize if necessary',
          process: name
        });
      }
    }
    
    return insights;
  }

  analyzeHealth() {
    const insights = [];
    
    // Check for offline processes
    for (const [name, status] of this.automationStatus) {
      if (status.status !== 'online') {
        insights.push({
          type: 'health',
          severity: 'critical',
          message: `${name} is not running (status: ${status.status})`,
          recommendation: 'Restart the process and investigate the cause',
          process: name
        });
      }
      
      if (status.health === 'critical') {
        insights.push({
          type: 'health',
          severity: 'critical',
          message: `${name} has critical health issues`,
          recommendation: 'Immediate attention required - check logs and restart if necessary',
          process: name
        });
      }
    }
    
    return insights;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Overall system recommendations
    const totalProcesses = this.automationStatus.size;
    const onlineProcesses = Array.from(this.automationStatus.values()).filter(p => p.status === 'online').length;
    const onlinePercentage = (onlineProcesses / totalProcesses) * 100;
    
    if (onlinePercentage < 100) {
      recommendations.push({
        type: 'system',
        severity: 'warning',
        message: `Only ${onlinePercentage.toFixed(1)}% of automation processes are online`,
        recommendation: 'Investigate and restart offline processes',
        process: 'system'
      });
    }
    
    // Performance recommendations
    const highMemoryProcesses = Array.from(this.automationStatus.values()).filter(p => p.memory > 300 * 1024 * 1024);
    if (highMemoryProcesses.length > 0) {
      recommendations.push({
        type: 'system',
        severity: 'info',
        message: `${highMemoryProcesses.length} processes are using high memory`,
        recommendation: 'Monitor memory usage and consider optimization',
        process: 'system'
      });
    }
    
    return recommendations;
  }

  async updatePerformanceMetrics() {
    try {
      // Calculate system-wide metrics
      const totalMemory = Array.from(this.automationStatus.values())
        .reduce((sum, p) => sum + p.memory, 0);
      
      const totalCPU = Array.from(this.automationStatus.values())
        .reduce((sum, p) => sum + p.cpu, 0);
      
      const onlineProcesses = Array.from(this.automationStatus.values())
        .filter(p => p.status === 'online').length;
      
      const totalProcesses = this.automationStatus.size;
      
      this.performanceMetrics.set('system', {
        totalMemory: Math.round(totalMemory / 1024 / 1024), // MB
        totalCPU: Math.round(totalCPU * 100) / 100,
        onlineProcesses,
        totalProcesses,
        uptime: Math.min(...Array.from(this.automationStatus.values()).map(p => p.uptime)),
        lastUpdate: new Date().toISOString()
      });
      
    } catch (error) {
      this.log(`⚠️ Error updating performance metrics: ${error.message}`);
    }
  }

  handleRequest(req, res) {
    const url = req.url;
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }
    
    try {
      if (url === '/' || url === '/index.html') {
        this.serveDashboard(res);
      } else if (url === '/api/status') {
        this.serveStatusAPI(res);
      } else if (url === '/api/insights') {
        this.serveInsightsAPI(res);
      } else if (url === '/api/metrics') {
        this.serveMetricsAPI(res);
      } else if (url === '/api/health') {
        this.serveHealthAPI(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    } catch (error) {
      this.log(`❌ Error handling request: ${error.message}`);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }

  serveDashboard(res) {
    const html = this.generateDashboardHTML();
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  serveStatusAPI(res) {
    const status = {
      timestamp: new Date().toISOString(),
      processes: Object.fromEntries(this.automationStatus),
      summary: {
        total: this.automationStatus.size,
        online: Array.from(this.automationStatus.values()).filter(p => p.status === 'online').length,
        offline: Array.from(this.automationStatus.values()).filter(p => p.status !== 'online').length
      }
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(status, null, 2));
  }

  serveInsightsAPI(res) {
    const insights = {
      timestamp: new Date().toISOString(),
      insights: this.aiInsights,
      count: this.aiInsights.length
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(insights, null, 2));
  }

  serveMetricsAPI(res) {
    const metrics = {
      timestamp: new Date().toISOString(),
      system: this.performanceMetrics.get('system'),
      processes: Object.fromEntries(
        Array.from(this.automationStatus.entries()).map(([name, status]) => [
          name,
          {
            memory: Math.round(status.memory / 1024 / 1024), // MB
            cpu: status.cpu,
            performance: status.performance,
            health: status.health
          }
        ])
      )
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(metrics, null, 2));
  }

  serveHealthAPI(res) {
    const health = {
      timestamp: new Date().toISOString(),
      status: 'healthy',
      checks: {
        processes: this.checkProcessHealth(),
        memory: this.checkMemoryHealth(),
        cpu: this.checkCPUHealth()
      }
    };
    
    // Overall health status
    const criticalIssues = this.aiInsights.filter(i => i.severity === 'critical').length;
    if (criticalIssues > 0) {
      health.status = 'critical';
    } else if (this.aiInsights.filter(i => i.severity === 'warning').length > 0) {
      health.status = 'warning';
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(health, null, 2));
  }

  checkProcessHealth() {
    const onlineProcesses = Array.from(this.automationStatus.values()).filter(p => p.status === 'online').length;
    const totalProcesses = this.automationStatus.size;
    
    return {
      status: onlineProcesses === totalProcesses ? 'healthy' : 'unhealthy',
      online: onlineProcesses,
      total: totalProcesses,
      percentage: (onlineProcesses / totalProcesses) * 100
    };
  }

  checkMemoryHealth() {
    const totalMemory = Array.from(this.automationStatus.values()).reduce((sum, p) => sum + p.memory, 0);
    const memoryGB = totalMemory / 1024 / 1024 / 1024;
    
    return {
      status: memoryGB < 2 ? 'healthy' : memoryGB < 4 ? 'warning' : 'critical',
      total: Math.round(memoryGB * 100) / 100,
      unit: 'GB'
    };
  }

  checkCPUHealth() {
    const totalCPU = Array.from(this.automationStatus.values()).reduce((sum, p) => sum + p.cpu, 0);
    const averageCPU = totalCPU / this.automationStatus.size;
    
    return {
      status: averageCPU < 30 ? 'healthy' : averageCPU < 60 ? 'warning' : 'critical',
      average: Math.round(averageCPU * 100) / 100,
      unit: '%'
    };
  }

  generateDashboardHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Tech Group - AI Automation Dashboard</title>
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
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #f0f0f0;
        }
        
        .card-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #2c3e50;
        }
        
        .status-indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            display: inline-block;
        }
        
        .status-online { background: #27ae60; }
        .status-offline { background: #e74c3c; }
        .status-unknown { background: #f39c12; }
        
        .metrics {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        
        .metric {
            text-align: center;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 10px;
        }
        
        .metric-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        
        .metric-label {
            font-size: 0.9rem;
            color: #7f8c8d;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .insights-section {
            background: white;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .insights-header {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 20px;
            color: #2c3e50;
        }
        
        .insight-item {
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            border-left: 4px solid;
        }
        
        .insight-critical {
            background: #fee;
            border-left-color: #e74c3c;
        }
        
        .insight-warning {
            background: #fff3cd;
            border-left-color: #f39c12;
        }
        
        .insight-info {
            background: #d1ecf1;
            border-left-color: #17a2b8;
        }
        
        .insight-message {
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .insight-recommendation {
            font-size: 0.9rem;
            color: #666;
        }
        
        .refresh-button {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #3498db;
            color: white;
            border: none;
            padding: 15px 25px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 1rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        
        .refresh-button:hover {
            background: #2980b9;
            transform: translateY(-2px);
            box-shadow: 0 7px 20px rgba(0,0,0,0.3);
        }
        
        .loading {
            text-align: center;
            padding: 40px;
            color: #7f8c8d;
        }
        
        @media (max-width: 768px) {
            .dashboard-grid {
                grid-template-columns: 1fr;
            }
            
            .metrics {
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
            <h1>🤖 AI Automation Dashboard</h1>
            <p>Real-time monitoring and intelligent insights for Zion Tech Group automation systems</p>
        </div>
        
        <div class="dashboard-grid" id="dashboard-grid">
            <div class="loading">Loading automation status...</div>
        </div>
        
        <div class="insights-section">
            <div class="insights-header">🧠 AI Insights & Recommendations</div>
            <div id="insights-container">
                <div class="loading">Loading AI insights...</div>
            </div>
        </div>
    </div>
    
    <button class="refresh-button" onclick="refreshDashboard()">🔄 Refresh</button>
    
    <script>
        let dashboardData = {};
        let insightsData = {};
        
        async function loadDashboard() {
            try {
                const [statusResponse, insightsResponse] = await Promise.all([
                    fetch('/api/status'),
                    fetch('/api/insights')
                ]);
                
                dashboardData = await statusResponse.json();
                insightsData = await insightsResponse.json();
                
                renderDashboard();
                renderInsights();
                
            } catch (error) {
                console.error('Error loading dashboard:', error);
                document.getElementById('dashboard-grid').innerHTML = 
                    '<div class="loading">Error loading dashboard data</div>';
            }
        }
        
        function renderDashboard() {
            const grid = document.getElementById('dashboard-grid');
            grid.innerHTML = '';
            
            Object.values(dashboardData.processes).forEach(process => {
                const card = createProcessCard(process);
                grid.appendChild(card);
            });
        }
        
        function createProcessCard(process) {
            const card = document.createElement('div');
            card.className = 'card';
            
            const statusClass = process.status === 'online' ? 'status-online' : 
                              process.status === 'offline' ? 'status-offline' : 'status-unknown';
            
            card.innerHTML = \`
                <div class="card-header">
                    <div class="card-title">\${process.name}</div>
                    <div class="status-indicator \${statusClass}"></div>
                </div>
                <div class="metrics">
                    <div class="metric">
                        <div class="metric-value">\${process.status}</div>
                        <div class="metric-label">Status</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">\${Math.round(process.memory / 1024 / 1024)}MB</div>
                        <div class="metric-label">Memory</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">\${process.cpu.toFixed(1)}%</div>
                        <div class="metric-label">CPU</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">\${process.health}</div>
                        <div class="metric-label">Health</div>
                    </div>
                </div>
            \`;
            
            return card;
        }
        
        function renderInsights() {
            const container = document.getElementById('insights-container');
            
            if (insightsData.insights.length === 0) {
                container.innerHTML = '<div class="loading">No insights available</div>';
                return;
            }
            
            container.innerHTML = insightsData.insights.map(insight => \`
                <div class="insight-item insight-\${insight.severity}">
                    <div class="insight-message">\${insight.message}</div>
                    <div class="insight-recommendation">\${insight.recommendation}</div>
                </div>
            \`).join('');
        }
        
        function refreshDashboard() {
            loadDashboard();
        }
        
        // Auto-refresh every 30 seconds
        setInterval(loadDashboard, 30000);
        
        // Initial load
        loadDashboard();
    </script>
</body>
</html>`;
  }

  getStatus() {
    return {
      running: true,
      port: this.port,
      updateInterval: this.updateInterval,
      realTimeMonitoring: this.realTimeMonitoring,
      processes: this.automationStatus.size,
      insights: this.aiInsights.length,
      lastUpdate: new Date().toISOString()
    };
  }

  stop() {
    this.log('🛑 Automation Dashboard stopped');
  }
}

// CLI handling
const dashboard = new AutomationDashboard();
const command = process.argv[2];

switch (command) {
  case 'start':
    dashboard.startDashboard();
    break;
  case 'status':
    const status = dashboard.getStatus();
    console.log(JSON.stringify(status, null, 2));
    process.exit(0);
    break;
  default:
    console.log('Usage: node automation-dashboard.cjs [start|status]');
    console.log('\nCommands:');
    console.log('  start   - Start the dashboard server');
    console.log('  status  - Show dashboard status');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  dashboard.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  dashboard.stop();
  process.exit(0);
});
