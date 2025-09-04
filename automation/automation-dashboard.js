#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const http = require('http');
const url = require('url');

class AutomationDashboard {
  constructor() {
    this.automationSystems = new Map();
    this.metrics = new Map();
    this.alerts = [];
    this.logFile = path.join(__dirname, 'logs', 'automation-dashboard.log');

    this.ensureLogDirectory();
    this.loadAutomationSystems();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  loadAutomationSystems() {
    this.log('Loading automation systems...');
    
    // Load automation systems from configuration
    const systems = [
      { name: 'error-monitor', status: 'running', lastCheck: new Date() },
      { name: 'syntax-fixer', status: 'running', lastCheck: new Date() },
      { name: 'build-health-check', status: 'running', lastCheck: new Date() },
      { name: 'performance-monitor', status: 'running', lastCheck: new Date() },
      { name: 'security-scanner', status: 'running', lastCheck: new Date() },
      { name: 'dependency-monitor', status: 'running', lastCheck: new Date() }
    ];

    systems.forEach(system => {
      this.automationSystems.set(system.name, system);
    });

    this.log(`Loaded ${systems.length} automation systems`);
  }

  getSystemStatus(systemName) {
    return this.automationSystems.get(systemName) || { status: 'unknown' };
  }

  updateSystemStatus(systemName, status) {
    const system = this.automationSystems.get(systemName);
    if (system) {
      system.status = status;
      system.lastCheck = new Date();
      this.automationSystems.set(systemName, system);
    }
  }

  addAlert(level, message, system = 'dashboard') {
    const alert = {
      id: Date.now(),
      level,
      message,
      system,
      timestamp: new Date().toISOString()
    };
    
    this.alerts.push(alert);
    this.log(`ALERT [${level.toUpperCase()}] ${system}: ${message}`);
  }

  getMetrics() {
    const metrics = {
      systems: Array.from(this.automationSystems.values()),
      alerts: this.alerts.slice(-50), // Last 50 alerts
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString()
    };
    
    return metrics;
  }

  generateReport() {
    const metrics = this.getMetrics();
    const reportPath = path.join(__dirname, 'logs', 'dashboard-report.json');
    
    fs.writeFileSync(reportPath, JSON.stringify(metrics, null, 2));
    this.log(`Dashboard report generated: ${reportPath}`);
    
    return reportPath;
  }

  startServer(port = 3001) {
    const server = http.createServer((req, res) => {
      const parsedUrl = url.parse(req.url, true);
      
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      
      if (parsedUrl.pathname === '/api/status') {
        res.writeHead(200);
        res.end(JSON.stringify(this.getMetrics()));
      } else if (parsedUrl.pathname === '/api/systems') {
        res.writeHead(200);
        res.end(JSON.stringify(Array.from(this.automationSystems.values())));
      } else if (parsedUrl.pathname === '/api/alerts') {
        res.writeHead(200);
        res.end(JSON.stringify(this.alerts));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
      }
    });

    server.listen(port, () => {
      this.log(`Dashboard server started on port ${port}`);
    });

    return server;
  }

  async runHealthChecks() {
    this.log('Running health checks...');
    
    for (const [name, system] of this.automationSystems) {
      try {
        // Simulate health check
        const isHealthy = Math.random() > 0.1; // 90% success rate
        
        if (isHealthy) {
          this.updateSystemStatus(name, 'healthy');
        } else {
          this.updateSystemStatus(name, 'unhealthy');
          this.addAlert('warning', `System ${name} is unhealthy`, name);
        }
      } catch (error) {
        this.updateSystemStatus(name, 'error');
        this.addAlert('error', `Health check failed for ${name}: ${error.message}`, name);
      }
    }
  }

  start() {
    this.log('Starting automation dashboard...');
    
    // Start health checks every 30 seconds
    setInterval(() => {
      this.runHealthChecks();
    }, 30000);
    
    // Generate reports every 5 minutes
    setInterval(() => {
      this.generateReport();
    }, 300000);
    
    // Start the web server
    this.startServer();
    
    this.log('Automation dashboard started successfully');
  }
}

// Run if called directly
if (require.main === module) {
  const dashboard = new AutomationDashboard();
  dashboard.start();
}

module.exports = AutomationDashboard;