#!/usr/bin/env node

const express = require('express');
const { execSync } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const WebSocket = require('ws');

class IntelligentMonitoringDashboard {
  constructor() {
    this.app = express();
    this.port = process.env.DASHBOARD_PORT || 3001;
    this.wss = null;
    this.clients = new Set();
    this.metrics = {
      system: {},
      processes: [],
      deployments: [],
      alerts: [],
      performance: {}
    };
    this.isRunning = false;
  }

  async start() {
    console.log('📊 Intelligent Monitoring Dashboard starting...');
    this.isRunning = true;
    
    try {
      await this.initialize();
      this.setupRoutes();
      this.setupWebSocket();
      this.startMetricsCollection();
      this.startServer();
      console.log('✅ Intelligent Monitoring Dashboard started successfully');
    } catch (error) {
      console.error('❌ Failed to start Monitoring Dashboard:', error);
    }
  }

  async initialize() {
    // Create necessary directories
    await fs.mkdir('./logs', { recursive: true });
    await fs.mkdir('./dashboard', { recursive: true });
    
    // Generate dashboard HTML
    await this.generateDashboardHTML();
    
    console.log('📁 Monitoring Dashboard initialized');
  }

  setupRoutes() {
    // Serve static files
    this.app.use('/static', express.static('./dashboard'));
    
    // API routes
    this.app.get('/api/health', (req, res) => {
      res.json({ status: 'healthy', timestamp: new Date().toISOString() });
    });
    
    this.app.get('/api/metrics', (req, res) => {
      res.json(this.metrics);
    });
    
    this.app.get('/api/processes', async (req, res) => {
      try {
        const processes = await this.getProcessMetrics();
        res.json(processes);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    this.app.get('/api/deployments', async (req, res) => {
      try {
        const deployments = await this.getDeploymentHistory();
        res.json(deployments);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    this.app.get('/api/alerts', async (req, res) => {
      try {
        const alerts = await this.getAlerts();
        res.json(alerts);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    this.app.get('/api/performance', async (req, res) => {
      try {
        const performance = await this.getPerformanceMetrics();
        res.json(performance);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    // Main dashboard route
    this.app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../dashboard/index.html'));
    });
  }

  setupWebSocket() {
    this.wss = new WebSocket.Server({ port: 8080 });
    
    this.wss.on('connection', (ws) => {
      console.log('📡 New WebSocket connection established');
      this.clients.add(ws);
      
      ws.on('close', () => {
        console.log('📡 WebSocket connection closed');
        this.clients.delete(ws);
      });
      
      ws.on('error', (error) => {
        console.error('WebSocket error:', error);
        this.clients.delete(ws);
      });
    });
  }

  startMetricsCollection() {
    // Collect metrics every 5 seconds
    setInterval(async () => {
      if (!this.isRunning) {
        return;
      }
      
      try {
        await this.collectMetrics();
        this.broadcastMetrics();
      } catch (error) {
        console.error('Error collecting metrics:', error);
      }
    }, 5000);
  }

  async collectMetrics() {
    // System metrics
    this.metrics.system = await this.getSystemMetrics();
    
    // Process metrics
    this.metrics.processes = await this.getProcessMetrics();
    
    // Performance metrics
    this.metrics.performance = await this.getPerformanceMetrics();
    
    // Alerts
    this.metrics.alerts = await this.getAlerts();
  }

  async getSystemMetrics() {
    try {
      const os = require('os');
      
      return {
        platform: os.platform(),
        arch: os.arch(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        usedMemory: os.totalmem() - os.freemem(),
        memoryUsage: ((os.totalmem() - os.freemem()) / os.totalmem()) * 100,
        cpus: os.cpus().length,
        loadAverage: os.loadavg(),
        uptime: os.uptime(),
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error getting system metrics:', error);
      return {};
    }
  }

  async getProcessMetrics() {
    try {
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);
      
      return processes.map(proc => ({
        name: proc.name,
        pid: proc.pid,
        status: proc.pm2_env.status,
        cpu: proc.monit.cpu,
        memory: proc.monit.memory,
        uptime: proc.pm2_env.pm_uptime,
        restarts: proc.pm2_env.restart_time,
        instances: proc.pm2_env.instances,
        exec_mode: proc.pm2_env.exec_mode
      }));
    } catch (error) {
      console.error('Error getting process metrics:', error);
      return [];
    }
  }

  async getPerformanceMetrics() {
    try {
      const performance = {
        timestamp: new Date().toISOString(),
        memory: process.memoryUsage(),
        cpu: process.cpuUsage(),
        uptime: process.uptime()
      };
      
      return performance;
    } catch (error) {
      console.error('Error getting performance metrics:', error);
      return {};
    }
  }

  async getDeploymentHistory() {
    try {
      const filename = './logs/deployment-history.json';
      const data = await fs.readFile(filename, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  async getAlerts() {
    try {
      const alerts = [];
      
      // Get health alerts
      const healthAlertsFile = './logs/health-alerts-' + new Date().toISOString().split('T')[0] + '.json';
      try {
        const healthAlerts = await fs.readFile(healthAlertsFile, 'utf8');
        alerts.push(...JSON.parse(healthAlerts));
      } catch (error) {
        // File doesn't exist
      }
      
      // Get deployment alerts
      const deploymentAlertsFile = './logs/deployment-alerts-' + new Date().toISOString().split('T')[0] + '.json';
      try {
        const deploymentAlerts = await fs.readFile(deploymentAlertsFile, 'utf8');
        alerts.push(...JSON.parse(deploymentAlerts));
      } catch (error) {
        // File doesn't exist
      }
      
      return alerts.slice(-50); // Last 50 alerts
    } catch (error) {
      console.error('Error getting alerts:', error);
      return [];
    }
  }

  broadcastMetrics() {
    if (this.clients.size === 0) {
      return;
    }
    
    const message = JSON.stringify({
      type: 'metrics',
      data: this.metrics,
      timestamp: new Date().toISOString()
    });
    
    this.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }

  async generateDashboardHTML() {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intelligent Monitoring Dashboard</title>
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
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .card h3 {
            color: #4a5568;
            margin-bottom: 15px;
            font-size: 1.3rem;
        }
        
        .metric {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .metric:last-child {
            border-bottom: none;
        }
        
        .metric-label {
            font-weight: 500;
            color: #2d3748;
        }
        
        .metric-value {
            font-weight: 600;
            color: #4a5568;
        }
        
        .status {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 600;
            text-transform: uppercase;
        }
        
        .status.online {
            background: #c6f6d5;
            color: #22543d;
        }
        
        .status.errored {
            background: #fed7d7;
            color: #742a2a;
        }
        
        .status.stopped {
            background: #f7fafc;
            color: #4a5568;
        }
        
        .chart-container {
            height: 200px;
            background: #f7fafc;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #718096;
        }
        
        .alerts-container {
            max-height: 300px;
            overflow-y: auto;
        }
        
        .alert {
            padding: 10px;
            margin: 5px 0;
            border-radius: 6px;
            border-left: 4px solid #e53e3e;
            background: #fed7d7;
            color: #742a2a;
        }
        
        .alert.warning {
            border-left-color: #ed8936;
            background: #fbd38d;
            color: #7b341e;
        }
        
        .alert.info {
            border-left-color: #3182ce;
            background: #bee3f8;
            color: #2c5282;
        }
        
        .refresh-indicator {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.9);
            padding: 10px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            color: #4a5568;
        }
        
        .loading {
            text-align: center;
            padding: 40px;
            color: #718096;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🤖 Intelligent Monitoring Dashboard</h1>
            <p>Real-time system monitoring and automation status</p>
        </div>
        
        <div class="refresh-indicator" id="refreshIndicator">
            🔄 Connecting...
        </div>
        
        <div class="dashboard-grid">
            <!-- System Overview -->
            <div class="card">
                <h3>🖥️ System Overview</h3>
                <div id="systemMetrics">
                    <div class="loading">Loading system metrics...</div>
                </div>
            </div>
            
            <!-- Process Status -->
            <div class="card">
                <h3>⚙️ Process Status</h3>
                <div id="processMetrics">
                    <div class="loading">Loading process metrics...</div>
                </div>
            </div>
            
            <!-- Performance Metrics -->
            <div class="card">
                <h3>📊 Performance</h3>
                <div id="performanceMetrics">
                    <div class="loading">Loading performance metrics...</div>
                </div>
            </div>
            
            <!-- Recent Alerts -->
            <div class="card">
                <h3>🚨 Recent Alerts</h3>
                <div class="alerts-container" id="alertsContainer">
                    <div class="loading">Loading alerts...</div>
                </div>
            </div>
            
            <!-- Deployment Status -->
            <div class="card">
                <h3>🚀 Deployments</h3>
                <div id="deploymentMetrics">
                    <div class="loading">Loading deployment metrics...</div>
                </div>
            </div>
            
            <!-- Resource Usage -->
            <div class="card">
                <h3>💾 Resource Usage</h3>
                <div class="chart-container">
                    <div>Resource usage chart would go here</div>
                </div>
            </div>
        </div>
    </div>

    <script>
        let ws;
        let reconnectInterval;
        
        function connectWebSocket() {
            ws = new WebSocket('ws://localhost:8080');
            
            ws.onopen = function() {
                console.log('WebSocket connected');
                document.getElementById('refreshIndicator').textContent = '🟢 Connected';
                clearInterval(reconnectInterval);
            };
            
            ws.onmessage = function(event) {
                const data = JSON.parse(event.data);
                if (data.type === 'metrics') {
                    updateDashboard(data.data);
                }
            };
            
            ws.onclose = function() {
                console.log('WebSocket disconnected');
                document.getElementById('refreshIndicator').textContent = '🔴 Disconnected';
                reconnectInterval = setInterval(connectWebSocket, 5000);
            };
            
            ws.onerror = function(error) {
                console.error('WebSocket error:', error);
            };
        }
        
        function updateDashboard(metrics) {
            updateSystemMetrics(metrics.system);
            updateProcessMetrics(metrics.processes);
            updatePerformanceMetrics(metrics.performance);
            updateAlerts(metrics.alerts);
        }
        
        function updateSystemMetrics(system) {
            if (!system) return;
            
            const container = document.getElementById('systemMetrics');
            container.innerHTML = \`
                <div class="metric">
                    <span class="metric-label">Platform</span>
                    <span class="metric-value">\${system.platform || 'N/A'}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Architecture</span>
                    <span class="metric-value">\${system.arch || 'N/A'}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Memory Usage</span>
                    <span class="metric-value">\${system.memoryUsage ? system.memoryUsage.toFixed(1) + '%' : 'N/A'}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">CPU Cores</span>
                    <span class="metric-value">\${system.cpus || 'N/A'}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Uptime</span>
                    <span class="metric-value">\${system.uptime ? formatUptime(system.uptime) : 'N/A'}</span>
                </div>
            \`;
        }
        
        function updateProcessMetrics(processes) {
            if (!processes || processes.length === 0) return;
            
            const container = document.getElementById('processMetrics');
            container.innerHTML = processes.map(proc => \`
                <div class="metric">
                    <span class="metric-label">\${proc.name}</span>
                    <span class="status \${proc.status}">\${proc.status}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">CPU</span>
                    <span class="metric-value">\${proc.cpu ? proc.cpu.toFixed(1) + '%' : 'N/A'}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Memory</span>
                    <span class="metric-value">\${proc.memory ? formatBytes(proc.memory) : 'N/A'}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Restarts</span>
                    <span class="metric-value">\${proc.restarts || 0}</span>
                </div>
            \`).join('');
        }
        
        function updatePerformanceMetrics(performance) {
            if (!performance) return;
            
            const container = document.getElementById('performanceMetrics');
            container.innerHTML = \`
                <div class="metric">
                    <span class="metric-label">Memory (RSS)</span>
                    <span class="metric-value">\${performance.memory ? formatBytes(performance.memory.rss) : 'N/A'}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Heap Used</span>
                    <span class="metric-value">\${performance.memory ? formatBytes(performance.memory.heapUsed) : 'N/A'}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Uptime</span>
                    <span class="metric-value">\${performance.uptime ? formatUptime(performance.uptime) : 'N/A'}</span>
                </div>
            \`;
        }
        
        function updateAlerts(alerts) {
            if (!alerts || alerts.length === 0) {
                document.getElementById('alertsContainer').innerHTML = '<div class="loading">No recent alerts</div>';
                return;
            }
            
            const container = document.getElementById('alertsContainer');
            container.innerHTML = alerts.slice(-10).map(alert => \`
                <div class="alert \${alert.severity || 'info'}">
                    <strong>\${alert.type || 'Alert'}</strong><br>
                    <small>\${new Date(alert.timestamp).toLocaleString()}</small>
                </div>
            \`).join('');
        }
        
        function formatBytes(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }
        
        function formatUptime(seconds) {
            const days = Math.floor(seconds / 86400);
            const hours = Math.floor((seconds % 86400) / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            return \`\${days}d \${hours}h \${minutes}m\`;
        }
        
        // Initialize dashboard
        connectWebSocket();
        
        // Load initial data
        fetch('/api/metrics')
            .then(response => response.json())
            .then(data => updateDashboard(data))
            .catch(error => console.error('Error loading initial data:', error));
    </script>
</body>
</html>
    `;
    
    await fs.writeFile('./dashboard/index.html', html);
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.log(`📊 Monitoring Dashboard running on http://localhost:${this.port}`);
    });
  }
}

// Start the Intelligent Monitoring Dashboard
const dashboard = new IntelligentMonitoringDashboard();
dashboard.start().catch(console.error);

module.exports = IntelligentMonitoringDashboard;