#!/usr/bin/env node

/**
 * Intelligent Automation Dashboard
 * Unified interface for monitoring and controlling all PM2 automations
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const http = require('http');
const url = require('url');

class IntelligentAutomationDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'automation-dashboard.log');
    this.dashboardConfig = path.join(this.projectRoot, 'logs', 'dashboard-config.json');
    this.ensureLogsDirectory();
    this.port = process.env.DASHBOARD_PORT || 3001;
    this.automations = this.loadAutomationConfig();
    this.server = null;
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadAutomationConfig() {
    return {
      'ai-code-quality-analyzer': {
        name: 'AI Code Quality Analyzer',
        description: 'Intelligently analyzes code quality and suggests improvements',
        category: 'Quality',
        priority: 'HIGH',
        status: 'stopped',
        lastRun: null,
        nextRun: null,
        health: 'unknown',
        metrics: {}
      },
      'smart-performance-monitor': {
        name: 'Smart Performance Monitor',
        description: 'Monitors and optimizes application performance',
        category: 'Performance',
        priority: 'HIGH',
        status: 'stopped',
        lastRun: null,
        nextRun: null,
        health: 'unknown',
        metrics: {}
      },
      'intelligent-error-predictor': {
        name: 'Intelligent Error Predictor',
        description: 'Predicts and prevents errors before they occur',
        category: 'Reliability',
        priority: 'CRITICAL',
        status: 'stopped',
        lastRun: null,
        nextRun: null,
        health: 'unknown',
        metrics: {}
      },
      'smart-build-optimizer': {
        name: 'Smart Build Optimizer',
        description: 'Optimizes build configurations for better performance',
        category: 'Build',
        priority: 'MEDIUM',
        status: 'stopped',
        lastRun: null,
        nextRun: null,
        health: 'unknown',
        metrics: {}
      },
      'intelligent-test-analyzer': {
        name: 'Intelligent Test Analyzer',
        description: 'Analyzes test coverage and suggests improvements',
        category: 'Testing',
        priority: 'MEDIUM',
        status: 'stopped',
        lastRun: null,
        nextRun: null,
        health: 'unknown',
        metrics: {}
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async startDashboard() {
    this.log('🚀 Starting Intelligent Automation Dashboard...');
    
    try {
      // Initialize dashboard
      await this.initializeDashboard();
      
      // Start HTTP server
      this.server = http.createServer((req, res) => {
        this.handleRequest(req, res);
      });
      
      this.server.listen(this.port, () => {
        this.log(`✅ Dashboard started on port ${this.port}`);
        this.log(`🌐 Access dashboard at: http://localhost:${this.port}`);
      });
      
      // Start monitoring loop
      this.startMonitoring();
      
    } catch (error) {
      this.log(`❌ Dashboard failed to start: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async initializeDashboard() {
    this.log('🔧 Initializing dashboard...');
    
    try {
      // Check PM2 status
      await this.checkPM2Status();
      
      // Load automation status
      await this.loadAutomationStatus();
      
      // Generate initial dashboard data
      await this.generateDashboardData();
      
      this.log('✅ Dashboard initialization complete');
      
    } catch (error) {
      this.log(`❌ Dashboard initialization failed: ${error.message}`, 'ERROR');
    }
  }

  async checkPM2Status() {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);
      
      // Update automation status based on PM2 processes
      for (const [name, automation] of Object.entries(this.automations)) {
        const pm2Process = processes.find(p => p.name === name);
        if (pm2Process) {
          automation.status = pm2Process.pm2_env.status;
          automation.health = this.determineHealth(pm2Process);
          automation.metrics = this.extractMetrics(pm2Process);
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Failed to check PM2 status: ${error.message}`, 'WARN');
    }
  }

  determineHealth(process) {
    if (process.pm2_env.status === 'online' && process.monit.memory < 90) {
      return 'healthy';
    } else if (process.pm2_env.status === 'online') {
      return 'warning';
    } else {
      return 'unhealthy';
    }
  }

  extractMetrics(process) {
    return {
      memory: process.monit.memory || 0,
      cpu: process.monit.cpu || 0,
      uptime: process.pm2_env.pm_uptime || 0,
      restarts: process.pm2_env.restart_time || 0
    };
  }

  async loadAutomationStatus() {
    for (const [name, automation] of Object.entries(this.automations)) {
      try {
        // Load last run information from log files
        const logFile = path.join(this.projectRoot, 'logs', `${name}.log`);
        if (fs.existsSync(logFile)) {
          const stats = fs.statSync(logFile);
          automation.lastRun = stats.mtime;
          
          // Calculate next run based on automation interval
          const interval = this.getAutomationInterval(name);
          if (interval) {
            automation.nextRun = new Date(stats.mtime.getTime() + interval);
          }
        }
      } catch (error) {
        this.log(`⚠️ Failed to load status for ${name}: ${error.message}`, 'WARN');
      }
    }
  }

  getAutomationInterval(name) {
    const intervals = {
      'ai-code-quality-analyzer': 30 * 60 * 1000, // 30 minutes
      'smart-performance-monitor': 60 * 60 * 1000, // 1 hour
      'intelligent-error-predictor': 30 * 60 * 1000, // 30 minutes
      'smart-build-optimizer': 2 * 60 * 60 * 1000, // 2 hours
      'intelligent-test-analyzer': 60 * 60 * 1000 // 1 hour
    };
    
    return intervals[name] || null;
  }

  async generateDashboardData() {
    try {
      const dashboardData = {
        timestamp: new Date().toISOString(),
        summary: this.generateSummary(),
        automations: this.automations,
        recommendations: await this.generateRecommendations(),
        system: this.getSystemInfo()
      };
      
      // Save dashboard data
      fs.writeFileSync(this.dashboardConfig, JSON.stringify(dashboardData, null, 2));
      
    } catch (error) {
      this.log(`❌ Failed to generate dashboard data: ${error.message}`, 'ERROR');
    }
  }

  generateSummary() {
    const total = Object.keys(this.automations).length;
    const running = Object.values(this.automations).filter(a => a.status === 'online').length;
    const healthy = Object.values(this.automations).filter(a => a.health === 'healthy').length;
    const critical = Object.values(this.automations).filter(a => a.priority === 'CRITICAL').length;
    
    return {
      total,
      running,
      stopped: total - running,
      healthy,
      warning: Object.values(this.automations).filter(a => a.health === 'warning').length,
      unhealthy: Object.values(this.automations).filter(a => a.health === 'unhealthy').length,
      critical
    };
  }

  async generateRecommendations() {
    const recommendations = [];
    
    try {
      // Check for stopped critical automations
      const stoppedCritical = Object.values(this.automations).filter(a => 
        a.priority === 'CRITICAL' && a.status !== 'online'
      );
      
      if (stoppedCritical.length > 0) {
        recommendations.push({
          priority: 'CRITICAL',
          title: 'Critical Automations Stopped',
          description: `${stoppedCritical.length} critical automations are not running`,
          action: 'Start critical automations immediately',
          automations: stoppedCritical.map(a => a.name)
        });
      }
      
      // Check for unhealthy automations
      const unhealthy = Object.values(this.automations).filter(a => a.health === 'unhealthy');
      if (unhealthy.length > 0) {
        recommendations.push({
          priority: 'HIGH',
          title: 'Unhealthy Automations Detected',
          description: `${unhealthy.length} automations are in unhealthy state`,
          action: 'Investigate and restart unhealthy automations',
          automations: unhealthy.map(a => a.name)
        });
      }
      
      // Check for overdue automations
      const now = new Date();
      const overdue = Object.values(this.automations).filter(a => 
        a.nextRun && a.nextRun < now
      );
      
      if (overdue.length > 0) {
        recommendations.push({
          priority: 'MEDIUM',
          title: 'Overdue Automations',
          description: `${overdue.length} automations are overdue for execution`,
          action: 'Check automation schedules and logs',
          automations: overdue.map(a => a.name)
        });
      }
      
    } catch (error) {
      this.log(`❌ Failed to generate recommendations: ${error.message}`, 'ERROR');
    }
    
    return recommendations;
  }

  getSystemInfo() {
    return {
      platform: process.platform,
      nodeVersion: process.version,
      memory: process.memoryUsage(),
      uptime: process.uptime(),
      pid: process.pid
    };
  }

  startMonitoring() {
    // Monitor automations every 30 seconds
    setInterval(async () => {
      try {
        await this.checkPM2Status();
        await this.generateDashboardData();
      } catch (error) {
        this.log(`❌ Monitoring cycle failed: ${error.message}`, 'ERROR');
      }
    }, 30000);
  }

  handleRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }
    
    try {
      if (path === '/' && method === 'GET') {
        this.serveDashboard(res);
      } else if (path === '/api/status' && method === 'GET') {
        this.serveStatusAPI(res);
      } else if (path === '/api/automations' && method === 'GET') {
        this.serveAutomationsAPI(res);
      } else if (path === '/api/automations' && method === 'POST') {
        this.handleAutomationAction(req, res);
      } else if (path === '/api/recommendations' && method === 'GET') {
        this.serveRecommendationsAPI(res);
      } else if (path === '/api/logs' && method === 'GET') {
        this.serveLogsAPI(res, parsedUrl.query);
      } else {
        this.serve404(res);
      }
    } catch (error) {
      this.serveError(res, error);
    }
  }

  serveDashboard(res) {
    const html = this.generateDashboardHTML();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  generateDashboardHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intelligent Automation Dashboard</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { background: #fff; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .header h1 { color: #333; margin-bottom: 10px; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 20px; }
        .summary-card { background: #fff; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .summary-card h3 { color: #666; font-size: 14px; margin-bottom: 10px; }
        .summary-card .value { font-size: 24px; font-weight: bold; color: #333; }
        .automations { background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .automation-item { padding: 20px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
        .automation-item:last-child { border-bottom: none; }
        .automation-info h3 { color: #333; margin-bottom: 5px; }
        .automation-info p { color: #666; font-size: 14px; }
        .automation-status { display: flex; align-items: center; gap: 10px; }
        .status-badge { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 500; }
        .status-online { background: #d4edda; color: #155724; }
        .status-stopped { background: #f8d7da; color: #721c24; }
        .health-healthy { background: #d1ecf1; color: #0c5460; }
        .health-warning { background: #fff3cd; color: #856404; }
        .health-unhealthy { background: #f8d7da; color: #721c24; }
        .btn { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; }
        .btn-primary { background: #007bff; color: #fff; }
        .btn-danger { background: #dc3545; color: #fff; }
        .btn:hover { opacity: 0.8; }
        .recommendations { background: #fff; border-radius: 8px; padding: 20px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .recommendation { padding: 15px; border-left: 4px solid #007bff; background: #f8f9fa; margin-bottom: 15px; border-radius: 0 4px 4px 0; }
        .recommendation:last-child { margin-bottom: 0; }
        .recommendation h4 { color: #333; margin-bottom: 5px; }
        .recommendation p { color: #666; font-size: 14px; }
        .priority-critical { border-left-color: #dc3545; }
        .priority-high { border-left-color: #fd7e14; }
        .priority-medium { border-left-color: #ffc107; }
        .refresh-btn { position: fixed; bottom: 20px; right: 20px; background: #28a745; color: #fff; border: none; border-radius: 50%; width: 60px; height: 60px; font-size: 24px; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
        .refresh-btn:hover { background: #218838; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🤖 Intelligent Automation Dashboard</h1>
            <p>Monitor and control all PM2 automation processes</p>
        </div>
        
        <div class="summary" id="summary">
            <!-- Summary cards will be populated by JavaScript -->
        </div>
        
        <div class="automations" id="automations">
            <!-- Automation items will be populated by JavaScript -->
        </div>
        
        <div class="recommendations" id="recommendations">
            <h2>💡 Recommendations</h2>
            <div id="recommendations-list">
                <!-- Recommendations will be populated by JavaScript -->
            </div>
        </div>
    </div>
    
    <button class="refresh-btn" onclick="refreshDashboard()" title="Refresh Dashboard">🔄</button>
    
    <script>
        async function loadDashboard() {
            try {
                const [statusResponse, recommendationsResponse] = await Promise.all([
                    fetch('/api/status'),
                    fetch('/api/recommendations')
                ]);
                
                const status = await statusResponse.json();
                const recommendations = await recommendationsResponse.json();
                
                updateSummary(status.summary);
                updateAutomations(status.automations);
                updateRecommendations(recommendations);
            } catch (error) {
                console.error('Failed to load dashboard:', error);
            }
        }
        
        function updateSummary(summary) {
            const summaryEl = document.getElementById('summary');
            summaryEl.innerHTML = \`
                <div class="summary-card">
                    <h3>Total Automations</h3>
                    <div class="value">\${summary.total}</div>
                </div>
                <div class="summary-card">
                    <h3>Running</h3>
                    <div class="value">\${summary.running}</div>
                </div>
                <div class="summary-card">
                    <h3>Healthy</h3>
                    <div class="value">\${summary.healthy}</div>
                </div>
                <div class="summary-card">
                    <h3>Critical</h3>
                    <div class="value">\${summary.critical}</div>
                </div>
            \`;
        }
        
        function updateAutomations(automations) {
            const automationsEl = document.getElementById('automations');
            automationsEl.innerHTML = '<h2 style="padding: 20px; margin: 0; border-bottom: 1px solid #eee;">🚀 Automation Status</h2>';
            
            Object.entries(automations).forEach(([name, automation]) => {
                const item = document.createElement('div');
                item.className = 'automation-item';
                item.innerHTML = \`
                    <div class="automation-info">
                        <h3>\${automation.name}</h3>
                        <p>\${automation.description}</p>
                        <small>Category: \${automation.category} | Priority: \${automation.priority}</small>
                    </div>
                    <div class="automation-status">
                        <span class="status-badge status-\${automation.status}">\${automation.status}</span>
                        <span class="status-badge health-\${automation.health}">\${automation.health}</span>
                        <button class="btn btn-primary" onclick="controlAutomation('\${name}', '\${automation.status === 'online' ? 'stop' : 'start'}')">
                            \${automation.status === 'online' ? 'Stop' : 'Start'}
                        </button>
                    </div>
                \`;
                automationsEl.appendChild(item);
            });
        }
        
        function updateRecommendations(recommendations) {
            const recommendationsEl = document.getElementById('recommendations-list');
            if (recommendations.length === 0) {
                recommendationsEl.innerHTML = '<p style="color: #666; text-align: center;">No recommendations at this time.</p>';
                return;
            }
            
            recommendationsEl.innerHTML = recommendations.map(rec => \`
                <div class="recommendation priority-\${rec.priority.toLowerCase()}">
                    <h4>\${rec.title}</h4>
                    <p>\${rec.description}</p>
                    <p><strong>Action:</strong> \${rec.action}</p>
                </div>
            \`).join('');
        }
        
        async function controlAutomation(name, action) {
            try {
                const response = await fetch('/api/automations', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, action })
                });
                
                if (response.ok) {
                    loadDashboard(); // Refresh dashboard
                } else {
                    alert('Failed to control automation');
                }
            } catch (error) {
                console.error('Failed to control automation:', error);
                alert('Failed to control automation');
            }
        }
        
        function refreshDashboard() {
            loadDashboard();
        }
        
        // Load dashboard on page load
        loadDashboard();
        
        // Auto-refresh every 30 seconds
        setInterval(loadDashboard, 30000);
    </script>
</body>
</html>`;
  }

  serveStatusAPI(res) {
    const status = {
      timestamp: new Date().toISOString(),
      summary: this.generateSummary(),
      automations: this.automations
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(status, null, 2));
  }

  serveAutomationsAPI(res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(this.automations, null, 2));
  }

  async handleAutomationAction(req, res) {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', async () => {
      try {
        const { name, action } = JSON.parse(body);
        
        if (!name || !action) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing name or action' }));
          return;
        }
        
        const result = await this.executeAutomationAction(name, action);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
        
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }

  async executeAutomationAction(name, action) {
    try {
      switch (action) {
        case 'start':
          execSync(`pm2 start ecosystem.config.cjs --only ${name}`, { stdio: 'pipe' });
          this.log(`✅ Started automation: ${name}`);
          return { success: true, message: `Started ${name}` };
          
        case 'stop':
          execSync(`pm2 stop ${name}`, { stdio: 'pipe' });
          this.log(`🛑 Stopped automation: ${name}`);
          return { success: true, message: `Stopped ${name}` };
          
        case 'restart':
          execSync(`pm2 restart ${name}`, { stdio: 'pipe' });
          this.log(`🔄 Restarted automation: ${name}`);
          return { success: true, message: `Restarted ${name}` };
          
        case 'delete':
          execSync(`pm2 delete ${name}`, { stdio: 'pipe' });
          this.log(`🗑️ Deleted automation: ${name}`);
          return { success: true, message: `Deleted ${name}` };
          
        default:
          return { success: false, message: `Unknown action: ${action}` };
      }
    } catch (error) {
      this.log(`❌ Failed to ${action} automation ${name}: ${error.message}`, 'ERROR');
      return { success: false, message: error.message };
    }
  }

  serveRecommendationsAPI(res) {
    this.generateRecommendations().then(recommendations => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(recommendations, null, 2));
    });
  }

  serveLogsAPI(res, query) {
    try {
      const { automation, lines = 100 } = query;
      
      if (!automation) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing automation parameter' }));
        return;
      }
      
      const logFile = path.join(this.projectRoot, 'logs', `${automation}.log`);
      
      if (!fs.existsSync(logFile)) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Log file not found' }));
        return;
      }
      
      const content = fs.readFileSync(logFile, 'utf8');
      const logLines = content.split('\n').slice(-parseInt(lines));
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ logs: logLines }, null, 2));
      
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  }

  serve404(res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }

  serveError(res, error) {
    this.log(`❌ Dashboard error: ${error.message}`, 'ERROR');
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: error.message }));
  }

  async stopDashboard() {
    this.log('🛑 Stopping Intelligent Automation Dashboard...');
    
    if (this.server) {
      this.server.close();
      this.log('✅ Dashboard stopped');
    }
  }

  async run() {
    try {
      await this.startDashboard();
      
      // Keep the process running
      process.on('SIGINT', async () => {
        this.log('Received SIGINT, shutting down...');
        await this.stopDashboard();
        process.exit(0);
      });
      
      process.on('SIGTERM', async () => {
        this.log('Received SIGTERM, shutting down...');
        await this.stopDashboard();
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`❌ Dashboard failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const dashboard = new IntelligentAutomationDashboard();
  dashboard.run().catch(console.error);
}

module.exports = IntelligentAutomationDashboard;