#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

console.log('📊 Starting Monitoring Dashboard...');

class MonitoringDashboard {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'monitoring-dashboard.log');
    this.config = {
      port: parseInt(process.env.DASHBOARD_PORT) || 3001,
      realTimeUpdates: process.env.REAL_TIME_UPDATES === 'true',
    };
    this.ensureLogDirectory();
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

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Command failed: ${command} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async getSystemMetrics() {
    try {
      const cpuUsage = await this.getCPUUsage();
      const memoryUsage = await this.getMemoryUsage();
      const diskUsage = await this.getDiskUsage();
      
      return {
        cpu: cpuUsage,
        memory: memoryUsage,
        disk: diskUsage,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      this.log(`❌ Error getting system metrics: ${error.message}`);
      return null;
    }
  }

  async getCPUUsage() {
    try {
      const result = execSync("top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | awk -F'%' '{print $1}'", { encoding: 'utf8' });
      return parseFloat(result.trim()) || 0;
    } catch (error) {
      return 0;
    }
  }

  async getMemoryUsage() {
    try {
      const result = execSync("free | grep Mem | awk '{printf \"%.2f\", $3/$2 * 100.0}'", { encoding: 'utf8' });
      return parseFloat(result.trim()) || 0;
    } catch (error) {
      return 0;
    }
  }

  async getDiskUsage() {
    try {
      const result = execSync("df -h / | awk 'NR==2{print $5}' | sed 's/%//'", { encoding: 'utf8' });
      return parseFloat(result.trim()) || 0;
    } catch (error) {
      return 0;
    }
  }

  async getPM2Status() {
    try {
      const result = await this.executeCommand('pm2 jlist', { silent: true });
      if (result.success) {
        return JSON.parse(result.output);
      }
      return [];
    } catch (error) {
      this.log(`❌ Error getting PM2 status: ${error.message}`);
      return [];
    }
  }

  generateDashboardHTML(metrics, pm2Processes) {
    const processesHtml = pm2Processes.map(process => {
      const { name, status, monit } = process;
      const { cpu, memory } = monit || {};
      return `
        <div class="process-card">
          <h3>${name}</h3>
          <p>Status: <span class="status-${status}">${status}</span></p>
          <p>CPU: ${cpu || 0}%</p>
          <p>Memory: ${memory || 0}MB</p>
        </div>
      `;
    }).join('');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PM2 Monitoring Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: #2c3e50; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 20px; }
        .metric-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .metric-value { font-size: 2em; font-weight: bold; color: #3498db; }
        .processes { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .process-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .status-running { color: #27ae60; font-weight: bold; }
        .status-errored { color: #e74c3c; font-weight: bold; }
        .status-stopped { color: #95a5a6; font-weight: bold; }
        .refresh-btn { background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; }
        .refresh-btn:hover { background: #2980b9; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 PM2 Monitoring Dashboard</h1>
            <p>Real-time system and process monitoring</p>
            <button class="refresh-btn" onclick="location.reload()">🔄 Refresh</button>
        </div>
        
        <div class="metrics">
            <div class="metric-card">
                <h3>CPU Usage</h3>
                <div class="metric-value">${metrics.cpu.toFixed(1)}%</div>
            </div>
            <div class="metric-card">
                <h3>Memory Usage</h3>
                <div class="metric-value">${metrics.memory.toFixed(1)}%</div>
            </div>
            <div class="metric-card">
                <h3>Disk Usage</h3>
                <div class="metric-value">${metrics.disk.toFixed(1)}%</div>
            </div>
        </div>
        
        <div class="processes">
            <h2>PM2 Processes</h2>
            ${processesHtml}
        </div>
        
        <div style="margin-top: 20px; text-align: center; color: #7f8c8d;">
            <p>Last updated: ${metrics.timestamp}</p>
        </div>
    </div>
    
    <script>
        // Auto-refresh every 30 seconds if real-time updates are enabled
        if (${this.config.realTimeUpdates}) {
            setTimeout(() => location.reload(), 30000);
        }
    </script>
</body>
</html>
    `;
  }

  async startServer() {
    const server = http.createServer(async (req, res) => {
      if (req.url === '/') {
        try {
          const metrics = await this.getSystemMetrics();
          const pm2Processes = await this.getPM2Status();
          
          const html = this.generateDashboardHTML(metrics, pm2Processes);
          
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(html);
        } catch (error) {
          this.log(`❌ Error generating dashboard: ${error.message}`);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error generating dashboard');
        }
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
      }
    });

    server.listen(this.config.port, () => {
      this.log(`📊 Monitoring Dashboard running on port ${this.config.port}`);
      this.log(`🌐 Access at: http://localhost:${this.config.port}`);
    });
  }

  async run() {
    this.log('🚀 Monitoring Dashboard started');
    this.log(`📋 Port: ${this.config.port}`);
    this.log(`📋 Real-time updates: ${this.config.realTimeUpdates}`);
    
    await this.startServer();
  }
}

// Start the monitoring dashboard
const monitoringDashboard = new MonitoringDashboard();
monitoringDashboard.run().catch(error => {
  console.error('❌ Monitoring Dashboard failed:', error);
  process.exit(1);
});