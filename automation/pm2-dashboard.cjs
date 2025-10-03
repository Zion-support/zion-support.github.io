#!/usr/bin/env node

const express = require('express');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

class PM2Dashboard {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.config = {
      logDir: './logs',
      refreshInterval: 5000, // 5 seconds
      maxLogLines: 1000,
      historySize: 100
    };
    
    this.stats = {
      processes: [],
      system: {},
      history: [],
      alerts: []
    };
    
    this.setupMiddleware();
    this.setupRoutes();
    this.setupWebSocket();
    this.startDataCollection();
  }

  setupMiddleware() {
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(express.urlencoded({ extended: true }));
    
    // CORS for development
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
  }

  setupRoutes() {
    // API Routes
    this.app.get('/api/status', (req, res) => {
      res.json(this.stats);
    });
    
    this.app.get('/api/processes', async (req, res) => {
      try {
        const processes = await this.getPM2Status();
        res.json(processes);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    this.app.get('/api/system', (req, res) => {
      res.json(this.getSystemInfo());
    });
    
    this.app.get('/api/logs/:process', (req, res) => {
      const processName = req.params.process;
      const lines = parseInt(req.query.lines) || 100;
      
      try {
        const logs = this.getProcessLogs(processName, lines);
        res.json({ logs, process: processName });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    this.app.post('/api/process/:action/:name', async (req, res) => {
      const { action, name } = req.params;
      
      try {
        const result = await this.executePM2Action(action, name);
        res.json({ success: true, result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    this.app.post('/api/environment/:env', async (req, res) => {
      const { env } = req.params;
      
      try {
        const result = await this.switchEnvironment(env);
        res.json({ success: true, result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    this.app.get('/api/health', (req, res) => {
      res.json(this.getHealthStatus());
    });
    
    this.app.get('/api/performance', (req, res) => {
      res.json(this.getPerformanceMetrics());
    });
    
    this.app.post('/api/scale/:name/:instances', async (req, res) => {
      const { name, instances } = req.params;
      
      try {
        const result = await this.scaleProcess(name, parseInt(instances));
        res.json({ success: true, result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    this.app.get('/api/automation/status', (req, res) => {
      res.json(this.getAutomationStatus());
    });
    
    this.app.post('/api/automation/:action', async (req, res) => {
      const { action } = req.params;
      
      try {
        const result = await this.executeAutomationAction(action);
        res.json({ success: true, result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    // Serve the main dashboard
    this.app.get('/', (req, res) => {
      res.send(this.getDashboardHTML());
    });
  }

  setupWebSocket() {
    // Simple SSE for real-time updates
    this.app.get('/api/events', (req, res) => {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      });
      
      const sendEvent = (data) => {
        res.write(`data: ${JSON.stringify(data)}\n\n`);
      };
      
      // Send initial data
      sendEvent({ type: 'connected', timestamp: Date.now() });
      
      // Set up periodic updates
      const interval = setInterval(() => {
        sendEvent({
          type: 'update',
          data: this.stats,
          timestamp: Date.now()
        });
      }, this.config.refreshInterval);
      
      req.on('close', () => {
        clearInterval(interval);
      });
    });
  }

  async getPM2Status() {
    try {
      const result = execSync('pm2 jlist', { encoding: 'utf8' });
      return JSON.parse(result);
    } catch (error) {
      throw new Error(`Failed to get PM2 status: ${error.message}`);
    }
  }

  getSystemInfo() {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    
    return {
      platform: os.platform(),
      arch: os.arch(),
      nodeVersion: process.version,
      uptime: os.uptime(),
      memory: {
        total: totalMem,
        used: usedMem,
        free: freeMem,
        usage: (usedMem / totalMem) * 100
      },
      cpu: {
        cores: os.cpus().length,
        loadAverage: os.loadavg()
      },
      network: this.getNetworkInfo()
    };
  }

  getNetworkInfo() {
    const interfaces = os.networkInterfaces();
    const result = {};
    
    for (const [name, nets] of Object.entries(interfaces)) {
      for (const net of nets) {
        if (net.family === 'IPv4' && !net.internal) {
          result[name] = net.address;
        }
      }
    }
    
    return result;
  }

  getProcessLogs(processName, lines) {
    try {
      const logFile = path.join(this.config.logDir, `${processName}-combined.log`);
      if (!fs.existsSync(logFile)) {
        return [];
      }
      
      const content = fs.readFileSync(logFile, 'utf8');
      const logLines = content.split('\n').filter(line => line.trim());
      
      return logLines.slice(-lines).map(line => {
        const match = line.match(/\[(.*?)\] \[(.*?)\] (.*)/);
        if (match) {
          return {
            timestamp: match[1],
            level: match[2],
            message: match[3]
          };
        }
        return { message: line };
      });
    } catch (error) {
      throw new Error(`Failed to read logs: ${error.message}`);
    }
  }

  async executePM2Action(action, name) {
    const commands = {
      start: `pm2 start ${name}`,
      stop: `pm2 stop ${name}`,
      restart: `pm2 restart ${name}`,
      reload: `pm2 reload ${name}`,
      delete: `pm2 delete ${name}`,
      logs: `pm2 logs ${name} --lines 100`,
      monit: `pm2 monit ${name}`
    };
    
    if (!commands[action]) {
      throw new Error(`Unknown action: ${action}`);
    }
    
    try {
      const result = execSync(commands[action], { encoding: 'utf8' });
      return result;
    } catch (error) {
      throw new Error(`Action failed: ${error.message}`);
    }
  }

  async switchEnvironment(env) {
    const commands = {
      dev: 'pm2 start ecosystem.config.js --only zion-frontend-dev,zion-backend-dev',
      prod: 'pm2 start ecosystem.config.js --only zion-frontend-prod,zion-backend-prod',
      hybrid: 'pm2 start ecosystem.config.js --only zion-hybrid-dev'
    };
    
    if (!commands[env]) {
      throw new Error(`Unknown environment: ${env}`);
    }
    
    try {
      // Stop all processes first
      execSync('pm2 stop all', { encoding: 'utf8' });
      
      // Start new environment
      const result = execSync(commands[env], { encoding: 'utf8' });
      return result;
    } catch (error) {
      throw new Error(`Environment switch failed: ${error.message}`);
    }
  }

  getHealthStatus() {
    const processes = this.stats.processes;
    const healthy = processes.filter(p => p.pm2_env.status === 'online').length;
    const total = processes.length;
    
    return {
      status: total === 0 ? 'unknown' : (healthy === total ? 'healthy' : 'degraded'),
      healthy,
      total,
      uptime: this.stats.system.uptime || 0,
      lastCheck: Date.now()
    };
  }

  getPerformanceMetrics() {
    const processes = this.stats.processes;
    
    return {
      totalMemory: processes.reduce((sum, p) => sum + (p.monit?.memory || 0), 0),
      totalCPU: processes.reduce((sum, p) => sum + (p.monit?.cpu || 0), 0),
      averageResponseTime: this.calculateAverageResponseTime(),
      throughput: this.calculateThroughput(),
      errorRate: this.calculateErrorRate()
    };
  }

  calculateAverageResponseTime() {
    // This would need to be implemented based on your application metrics
    return Math.random() * 100 + 50; // Placeholder
  }

  calculateThroughput() {
    // This would need to be implemented based on your application metrics
    return Math.random() * 1000 + 500; // Placeholder
  }

  calculateErrorRate() {
    // This would need to be implemented based on your application metrics
    return Math.random() * 5; // Placeholder
  }

  async scaleProcess(name, instances) {
    try {
      const result = execSync(`pm2 scale ${name} ${instances}`, { encoding: 'utf8' });
      return result;
    } catch (error) {
      throw new Error(`Scaling failed: ${error.message}`);
    }
  }

  getAutomationStatus() {
    return {
      orchestrator: this.isProcessRunning('zion-automation-orchestrator'),
      codeQuality: this.isProcessRunning('zion-code-quality-monitor'),
      performance: this.isProcessRunning('zion-performance-monitor'),
      security: this.isProcessRunning('zion-security-scanner'),
      lint: this.isProcessRunning('zion-lint-monitor')
    };
  }

  isProcessRunning(name) {
    return this.stats.processes.some(p => p.name === name && p.pm2_env.status === 'online');
  }

  async executeAutomationAction(action) {
    const commands = {
      start: 'node scripts/pm2-intelligent-manager.js start:hybrid',
      stop: 'pm2 stop zion-automation-orchestrator',
      restart: 'pm2 restart zion-automation-orchestrator',
      health: 'node scripts/pm2-intelligent-manager.js health',
      report: 'node scripts/pm2-intelligent-manager.js report'
    };
    
    if (!commands[action]) {
      throw new Error(`Unknown automation action: ${action}`);
    }
    
    try {
      const result = execSync(commands[action], { encoding: 'utf8' });
      return result;
    } catch (error) {
      throw new Error(`Automation action failed: ${error.message}`);
    }
  }

  startDataCollection() {
    setInterval(async () => {
      try {
        this.stats.processes = await this.getPM2Status();
        this.stats.system = this.getSystemInfo();
        this.stats.timestamp = Date.now();
        
        // Add to history
        this.stats.history.push({
          timestamp: Date.now(),
          processes: this.stats.processes.length,
          memory: this.stats.system.memory.usage,
          cpu: this.stats.system.cpu.loadAverage[0]
        });
        
        // Keep history size manageable
        if (this.stats.history.length > this.config.historySize) {
          this.stats.history.shift();
        }
        
        // Check for alerts
        this.checkForAlerts();
        
      } catch (error) {
        console.error('Data collection error:', error.message);
      }
    }, this.config.refreshInterval);
  }

  checkForAlerts() {
    const processes = this.stats.processes;
    const system = this.stats.system;
    
    // Check for offline processes
    const offlineProcesses = processes.filter(p => p.pm2_env.status !== 'online');
    if (offlineProcesses.length > 0) {
      this.addAlert('critical', `Offline processes detected: ${offlineProcesses.map(p => p.name).join(', ')}`);
    }
    
    // Check memory usage
    if (system.memory.usage > 80) {
      this.addAlert('warning', `High memory usage: ${system.memory.usage.toFixed(1)}%`);
    }
    
    // Check CPU load
    if (system.cpu.loadAverage[0] > 2) {
      this.addAlert('warning', `High CPU load: ${system.cpu.loadAverage[0].toFixed(2)}`);
    }
  }

  addAlert(level, message) {
    const alert = {
      id: Date.now(),
      level,
      message,
      timestamp: new Date().toISOString()
    };
    
    this.stats.alerts.unshift(alert);
    
    // Keep only recent alerts
    if (this.stats.alerts.length > 50) {
      this.stats.alerts.pop();
    }
  }

  getDashboardHTML() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PM2 Intelligent Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        .status-online { background-color: #10b981; }
        .status-stopped { background-color: #ef4444; }
        .status-error { background-color: #f59e0b; }
        .status-unknown { background-color: #6b7280; }
    </style>
</head>
<body class="bg-gray-900 text-white min-h-screen">
    <div class="container mx-auto px-4 py-8">
        <header class="mb-8">
            <h1 class="text-4xl font-bold text-center mb-2">🚀 PM2 Intelligent Dashboard</h1>
            <p class="text-center text-gray-400">Real-time monitoring and management for your Zion Tech Group application</p>
        </header>

        <!-- System Overview -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-gray-800 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-2">Processes</h3>
                <div class="text-3xl font-bold" id="process-count">-</div>
                <div class="text-sm text-gray-400" id="process-status">-</div>
            </div>
            <div class="bg-gray-800 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-2">Memory Usage</h3>
                <div class="text-3xl font-bold" id="memory-usage">-</div>
                <div class="text-sm text-gray-400" id="memory-details">-</div>
            </div>
            <div class="bg-gray-800 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-2">CPU Load</h3>
                <div class="text-3xl font-bold" id="cpu-load">-</div>
                <div class="text-sm text-gray-400" id="cpu-details">-</div>
            </div>
            <div class="bg-gray-800 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-2">Uptime</h3>
                <div class="text-3xl font-bold" id="uptime">-</div>
                <div class="text-sm text-gray-400">System uptime</div>
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 class="text-xl font-semibold mb-4">Quick Actions</h3>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
                <button onclick="switchEnvironment('dev')" class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Dev</button>
                <button onclick="switchEnvironment('prod')" class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Prod</button>
                <button onclick="switchEnvironment('hybrid')" class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded">Hybrid</button>
                <button onclick="restartAll()" class="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded">Restart All</button>
                <button onclick="reloadAll()" class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded">Reload All</button>
                <button onclick="generateReport()" class="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">Report</button>
            </div>
        </div>

        <!-- Process List -->
        <div class="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 class="text-xl font-semibold mb-4">Processes</h3>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr class="border-b border-gray-700">
                            <th class="text-left p-2">Name</th>
                            <th class="text-left p-2">Status</th>
                            <th class="text-left p-2">Instances</th>
                            <th class="text-left p-2">Memory</th>
                            <th class="text-left p-2">CPU</th>
                            <th class="text-left p-2">Uptime</th>
                            <th class="text-left p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="process-table">
                        <tr><td colspan="7" class="text-center p-4">Loading...</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Charts -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gray-800 rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-4">Resource Usage</h3>
                <canvas id="resource-chart" width="400" height="200"></canvas>
            </div>
            <div class="bg-gray-800 rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-4">Process Status</h3>
                <canvas id="status-chart" width="400" height="200"></canvas>
            </div>
        </div>

        <!-- Alerts -->
        <div class="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 class="text-xl font-semibold mb-4">Recent Alerts</h3>
            <div id="alerts-list" class="space-y-2">
                <div class="text-center text-gray-400">No alerts</div>
            </div>
        </div>

        <!-- Logs -->
        <div class="bg-gray-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-4">Live Logs</h3>
            <div class="mb-4">
                <select id="log-process" class="bg-gray-700 text-white px-3 py-2 rounded mr-2">
                    <option value="">All Processes</option>
                </select>
                <button onclick="refreshLogs()" class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Refresh</button>
            </div>
            <div id="logs-container" class="bg-gray-900 p-4 rounded h-64 overflow-y-auto font-mono text-sm">
                <div class="text-gray-400">Select a process to view logs...</div>
            </div>
        </div>
    </div>

    <script>
        let eventSource;
        let resourceChart, statusChart;
        
        // Initialize charts
        function initCharts() {
            const resourceCtx = document.getElementById('resource-chart').getContext('2d');
            resourceChart = new Chart(resourceCtx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Memory %',
                        data: [],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        tension: 0.4
                    }, {
                        label: 'CPU Load',
                        data: [],
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: '#374151' }
                        },
                        x: {
                            grid: { color: '#374151' }
                        }
                    },
                    plugins: {
                        legend: { labels: { color: '#f9fafb' } }
                    }
                }
            });

            const statusCtx = document.getElementById('status-chart').getContext('2d');
            statusChart = new Chart(statusCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Online', 'Stopped', 'Error'],
                    datasets: [{
                        data: [0, 0, 0],
                        backgroundColor: ['#10b981', '#ef4444', '#f59e0b']
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { labels: { color: '#f9fafb' } }
                    }
                }
            });
        }

        // Connect to SSE
        function connectSSE() {
            eventSource = new EventSource('/api/events');
            
            eventSource.onmessage = function(event) {
                const data = JSON.parse(event.data);
                if (data.type === 'update') {
                    updateDashboard(data.data);
                }
            };
            
            eventSource.onerror = function() {
                console.error('SSE connection failed');
                setTimeout(connectSSE, 5000);
            };
        }

        // Update dashboard
        function updateDashboard(data) {
            // Update overview cards
            document.getElementById('process-count').textContent = data.processes.length;
            document.getElementById('process-status').textContent = \`\${data.processes.filter(p => p.pm2_env.status === 'online').length} online\`;
            
            if (data.system.memory) {
                document.getElementById('memory-usage').textContent = \`\${data.system.memory.usage.toFixed(1)}%\`;
                document.getElementById('memory-details').textContent = \`\${(data.system.memory.used / 1024 / 1024 / 1024).toFixed(1)}GB / \${(data.system.memory.total / 1024 / 1024 / 1024).toFixed(1)}GB\`;
            }
            
            if (data.system.cpu) {
                document.getElementById('cpu-load').textContent = data.system.cpu.loadAverage[0].toFixed(2);
                document.getElementById('cpu-details').textContent = \`\${data.system.cpu.cores} cores\`;
            }
            
            document.getElementById('uptime').textContent = formatUptime(data.system.uptime || 0);
            
            // Update process table
            updateProcessTable(data.processes);
            
            // Update charts
            updateCharts(data);
            
            // Update alerts
            updateAlerts(data.alerts || []);
            
            // Update log process selector
            updateLogProcessSelector(data.processes);
        }

        // Update process table
        function updateProcessTable(processes) {
            const tbody = document.getElementById('process-table');
            tbody.innerHTML = '';
            
            processes.forEach(process => {
                const row = document.createElement('tr');
                row.className = 'border-b border-gray-700';
                
                const statusClass = \`status-\${process.pm2_env.status}\`;
                const memoryMB = process.monit?.memory ? (process.monit.memory / 1024 / 1024).toFixed(1) : 'N/A';
                const cpuPercent = process.monit?.cpu || 'N/A';
                const uptime = formatUptime(process.pm2_env.pm_uptime);
                
                row.innerHTML = \`
                    <td class="p-2 font-mono">\${process.name}</td>
                    <td class="p-2">
                        <span class="inline-block w-3 h-3 rounded-full \${statusClass} mr-2"></span>
                        \${process.pm2_env.status}
                    </td>
                    <td class="p-2">\${process.pm2_env.instances}</td>
                    <td class="p-2">\${memoryMB} MB</td>
                    <td class="p-2">\${cpuPercent}%</td>
                    <td class="p-2">\${uptime}</td>
                    <td class="p-2">
                        <button onclick="restartProcess('\${process.name}')" class="bg-yellow-600 hover:bg-yellow-700 px-2 py-1 rounded text-xs mr-1">Restart</button>
                        <button onclick="reloadProcess('\${process.name}')" class="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs">Reload</button>
                    </td>
                \`;
                
                tbody.appendChild(row);
            });
        }

        // Update charts
        function updateCharts(data) {
            if (data.history && data.history.length > 0) {
                const history = data.history.slice(-20); // Last 20 points
                
                resourceChart.data.labels = history.map(h => new Date(h.timestamp).toLocaleTimeString());
                resourceChart.data.datasets[0].data = history.map(h => h.memory);
                resourceChart.data.datasets[1].data = history.map(h => h.cpu);
                resourceChart.update();
            }
            
            if (data.processes) {
                const statusCounts = {
                    online: data.processes.filter(p => p.pm2_env.status === 'online').length,
                    stopped: data.processes.filter(p => p.pm2_env.status === 'stopped').length,
                    error: data.processes.filter(p => p.pm2_env.status === 'error').length
                };
                
                statusChart.data.datasets[0].data = [statusCounts.online, statusCounts.stopped, statusCounts.error];
                statusChart.update();
            }
        }

        // Update alerts
        function updateAlerts(alerts) {
            const container = document.getElementById('alerts-list');
            
            if (alerts.length === 0) {
                container.innerHTML = '<div class="text-center text-gray-400">No alerts</div>';
                return;
            }
            
            container.innerHTML = alerts.slice(0, 10).map(alert => \`
                <div class="flex items-center p-3 rounded \${alert.level === 'critical' ? 'bg-red-900' : 'bg-yellow-900'}">
                    <span class="w-2 h-2 rounded-full \${alert.level === 'critical' ? 'bg-red-400' : 'bg-yellow-400'} mr-3"></span>
                    <div>
                        <div class="font-medium">\${alert.message}</div>
                        <div class="text-sm text-gray-300">\${new Date(alert.timestamp).toLocaleString()}</div>
                    </div>
                </div>
            \`).join('');
        }

        // Update log process selector
        function updateLogProcessSelector(processes) {
            const select = document.getElementById('log-process');
            const currentValue = select.value;
            
            select.innerHTML = '<option value="">All Processes</option>';
            processes.forEach(process => {
                const option = document.createElement('option');
                option.value = process.name;
                option.textContent = process.name;
                select.appendChild(option);
            });
            
            select.value = currentValue;
        }

        // Utility functions
        function formatUptime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            return \`\${hours}h \${minutes}m\`;
        }

        // Action functions
        async function switchEnvironment(env) {
            try {
                const response = await fetch(\`/api/environment/\${env}\`, { method: 'POST' });
                const result = await response.json();
                if (result.success) {
                    alert(\`Switched to \${env} environment\`);
                }
            } catch (error) {
                alert('Failed to switch environment: ' + error.message);
            }
        }

        async function restartAll() {
            if (confirm('Are you sure you want to restart all processes?')) {
                try {
                    const response = await fetch('/api/process/restart/all', { method: 'POST' });
                    const result = await response.json();
                    if (result.success) {
                        alert('All processes restarted');
                    }
                } catch (error) {
                    alert('Failed to restart processes: ' + error.message);
                }
            }
        }

        async function reloadAll() {
            if (confirm('Are you sure you want to reload all processes?')) {
                try {
                    const response = await fetch('/api/process/reload/all', { method: 'POST' });
                    const result = await response.json();
                    if (result.success) {
                        alert('All processes reloaded');
                    }
                } catch (error) {
                    alert('Failed to reload processes: ' + error.message);
                }
            }
        }

        async function restartProcess(name) {
            try {
                const response = await fetch(\`/api/process/restart/\${name}\`, { method: 'POST' });
                const result = await response.json();
                if (result.success) {
                    alert(\`Process \${name} restarted\`);
                }
            } catch (error) {
                alert('Failed to restart process: ' + error.message);
            }
        }

        async function reloadProcess(name) {
            try {
                const response = await fetch(\`/api/process/reload/\${name}\`, { method: 'POST' });
                const result = await response.json();
                if (result.success) {
                    alert(\`Process \${name} reloaded\`);
                }
            } catch (error) {
                alert('Failed to reload process: ' + error.message);
            }
        }

        async function generateReport() {
            try {
                const response = await fetch('/api/automation/report', { method: 'POST' });
                const result = await response.json();
                if (result.success) {
                    alert('Report generated successfully');
                }
            } catch (error) {
                alert('Failed to generate report: ' + error.message);
            }
        }

        async function refreshLogs() {
            const processName = document.getElementById('log-process').value;
            const container = document.getElementById('logs-container');
            
            try {
                const response = await fetch(\`/api/logs/\${processName || 'all'}\`);
                const data = await response.json();
                
                if (data.logs && data.logs.length > 0) {
                    container.innerHTML = data.logs.map(log => \`
                        <div class="\${log.level === 'ERROR' ? 'text-red-400' : log.level === 'WARN' ? 'text-yellow-400' : 'text-gray-300'}">
                            \${log.timestamp ? \`[\${log.timestamp}]\` : ''} \${log.message}
                        </div>
                    \`).join('');
                } else {
                    container.innerHTML = '<div class="text-gray-400">No logs available</div>';
                }
            } catch (error) {
                container.innerHTML = '<div class="text-red-400">Failed to load logs</div>';
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            initCharts();
            connectSSE();
            
            // Initial data load
            fetch('/api/status')
                .then(response => response.json())
                .then(data => updateDashboard(data))
                .catch(error => console.error('Failed to load initial data:', error));
        });
    </script>
</body>
</html>
    `;
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`🚀 PM2 Dashboard started on port ${this.port}`);
      console.log(`📊 Open http://localhost:${this.port} in your browser`);
    });
  }
}

// CLI interface
async function main() {
  const dashboard = new PM2Dashboard();
  const command = process.argv[2];
  
  try {
    switch (command) {
      case 'start':
        dashboard.start();
        break;
      default:
        console.log(`
🚀 PM2 Dashboard

Usage: node pm2-dashboard.cjs <command>

Commands:
  start   Start the dashboard server

Examples:
  node pm2-dashboard.cjs start
        `);
    }
  } catch (error) {
    console.error(`Command failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = PM2Dashboard;