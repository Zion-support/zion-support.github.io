#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');
const http = require('http');

class HealthDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/health-dashboard.log');
    this.dashboardFile = path.join(this.projectRoot, 'logs/pm2/dashboard-data.json');
    this.port = process.env.DASHBOARD_PORT || 3001;
    this.startTime = Date.now();
    this.dashboardData = {
      timestamp: new Date().toISOString(),
      system: {},
      application: {},
      performance: {},
      alerts: [],
      uptime: 0
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = ['logs/pm2', 'logs/automation', 'logs/reports'];
    dirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async collectSystemMetrics() {
    try {
      const cpus = os.cpus();
      const totalMem = os.totalmem();
      const freeMem = os.freemem();
      const usedMem = totalMem - freeMem;

      this.dashboardData.system = {
        timestamp: new Date().toISOString(),
        cpu: {
          cores: cpus.length,
          usage: this.getCpuUsage(),
          loadAverage: os.loadavg()
        },
        memory: {
          total: totalMem,
          used: usedMem,
          free: freeMem,
          usagePercent: (usedMem / totalMem) * 100
        },
        uptime: os.uptime(),
        platform: os.platform(),
        arch: os.arch(),
        hostname: os.hostname()
      };

      this.log(`📊 System metrics collected - CPU: ${this.dashboardData.system.cpu.usage.toFixed(2)}%, Memory: ${this.dashboardData.system.memory.usagePercent.toFixed(2)}%`);
    } catch (error) {
      this.log(`❌ Error collecting system metrics: ${error.message}`, 'ERROR');
    }
  }

  getCpuUsage() {
    const cpus = os.cpus();
    let totalIdle = 0;
    let totalTick = 0;

    cpus.forEach(cpu => {
      for (const type in cpu.times) {
        totalTick += cpu.times[type];
      }
      totalIdle += cpu.times.idle;
    });

    return 100 - ~~(100 * totalIdle / totalTick);
  }

  async collectApplicationMetrics() {
    try {
      // Get PM2 processes
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);

      this.dashboardData.application = {
        timestamp: new Date().toISOString(),
        pm2Processes: processes.length,
        processes: processes.map(proc => ({
          name: proc.name,
          status: proc.pm2_env.status,
          cpu: proc.monit.cpu,
          memory: proc.monit.memory,
          uptime: proc.pm2_env.uptime,
          restarts: proc.pm2_env.restart_time,
          pid: proc.pid
        })),
        totalMemory: processes.reduce((sum, proc) => sum + proc.monit.memory, 0),
        totalCpu: processes.reduce((sum, proc) => sum + proc.monit.cpu, 0),
        onlineProcesses: processes.filter(proc => proc.pm2_env.status === 'online').length
      };

      this.log(`📱 Application metrics collected - ${processes.length} PM2 processes, ${this.dashboardData.application.onlineProcesses} online`);
    } catch (error) {
      this.log(`❌ Error collecting application metrics: ${error.message}`, 'ERROR');
    }
  }

  async collectPerformanceMetrics() {
    try {
      // Check build performance
      const buildStart = Date.now();
      let buildSuccess = false;
      let buildTime = 0;

      try {
        execSync('npm run build', { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 300000 // 5 minutes
        });
        buildSuccess = true;
        buildTime = Date.now() - buildStart;
      } catch (error) {
        this.log(`⚠️ Build failed during performance check: ${error.message}`, 'WARN');
      }

      // Check bundle size
      let bundleSize = 0;
      if (fs.existsSync('dist')) {
        bundleSize = this.calculateDirectorySize('dist');
      }

      this.dashboardData.performance = {
        timestamp: new Date().toISOString(),
        build: {
          success: buildSuccess,
          time: buildTime,
          size: bundleSize
        },
        bundle: {
          size: bundleSize,
          sizeMB: Math.round(bundleSize / (1024 * 1024) * 100) / 100
        },
        responseTime: await this.checkResponseTime()
      };

      this.log(`⚡ Performance metrics collected - Build: ${buildSuccess ? 'Success' : 'Failed'}, Time: ${buildTime}ms, Size: ${this.dashboardData.performance.bundle.sizeMB}MB`);
    } catch (error) {
      this.log(`❌ Error collecting performance metrics: ${error.message}`, 'ERROR');
    }
  }

  calculateDirectorySize(dir) {
    let size = 0;
    try {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          size += this.calculateDirectorySize(fullPath);
        } else {
          size += stat.size;
        }
      });
    } catch (error) {
      // Silent fail for inaccessible directories
    }
    return size;
  }

  async checkResponseTime() {
    try {
      const start = Date.now();
      // Try to make a request to the application
      const response = await this.makeHttpRequest('http://localhost:3000/health');
      return Date.now() - start;
    } catch (error) {
      return null; // Application not responding
    }
  }

  makeHttpRequest(url) {
    return new Promise((resolve, reject) => {
      const req = http.get(url, (res) => {
        resolve(res);
      });
      req.on('error', reject);
      req.setTimeout(5000, () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  generateAlerts() {
    const alerts = [];
    const system = this.dashboardData.system;
    const app = this.dashboardData.application;
    const perf = this.dashboardData.performance;

    // System alerts
    if (system.cpu && system.cpu.usage > 80) {
      alerts.push({
        type: 'warning',
        category: 'system',
        message: `High CPU usage: ${system.cpu.usage.toFixed(2)}%`,
        timestamp: new Date().toISOString()
      });
    }

    if (system.memory && system.memory.usagePercent > 85) {
      alerts.push({
        type: 'critical',
        category: 'system',
        message: `High memory usage: ${system.memory.usagePercent.toFixed(2)}%`,
        timestamp: new Date().toISOString()
      });
    }

    // Application alerts
    if (app.onlineProcesses < app.pm2Processes) {
      alerts.push({
        type: 'critical',
        category: 'application',
        message: `${app.pm2Processes - app.onlineProcesses} PM2 processes are offline`,
        timestamp: new Date().toISOString()
      });
    }

    if (app.totalCpu > 100) {
      alerts.push({
        type: 'warning',
        category: 'application',
        message: `High application CPU usage: ${app.totalCpu.toFixed(2)}%`,
        timestamp: new Date().toISOString()
      });
    }

    // Performance alerts
    if (perf.build && !perf.build.success) {
      alerts.push({
        type: 'error',
        category: 'performance',
        message: 'Build failed',
        timestamp: new Date().toISOString()
      });
    }

    if (perf.bundle && perf.bundle.sizeMB > 10) {
      alerts.push({
        type: 'warning',
        category: 'performance',
        message: `Large bundle size: ${perf.bundle.sizeMB}MB`,
        timestamp: new Date().toISOString()
      });
    }

    this.dashboardData.alerts = alerts;
    this.log(`🚨 Generated ${alerts.length} alerts`);
  }

  generateHTML() {
    const system = this.dashboardData.system;
    const app = this.dashboardData.application;
    const perf = this.dashboardData.performance;
    const alerts = this.dashboardData.alerts;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Dashboard</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { background: #2c3e50; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .card h3 { margin-bottom: 15px; color: #2c3e50; }
        .metric { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .metric-value { font-weight: bold; }
        .status { padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
        .status.online { background: #d4edda; color: #155724; }
        .status.offline { background: #f8d7da; color: #721c24; }
        .status.warning { background: #fff3cd; color: #856404; }
        .alert { padding: 10px; margin-bottom: 10px; border-radius: 4px; }
        .alert.critical { background: #f8d7da; color: #721c24; border-left: 4px solid #dc3545; }
        .alert.warning { background: #fff3cd; color: #856404; border-left: 4px solid #ffc107; }
        .alert.error { background: #f8d7da; color: #721c24; border-left: 4px solid #dc3545; }
        .progress-bar { width: 100%; height: 20px; background: #e9ecef; border-radius: 10px; overflow: hidden; }
        .progress-fill { height: 100%; background: #28a745; transition: width 0.3s ease; }
        .progress-fill.warning { background: #ffc107; }
        .progress-fill.danger { background: #dc3545; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Health Dashboard</h1>
            <p>Last updated: ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="grid">
            <div class="card">
                <h3>📊 System Health</h3>
                <div class="metric">
                    <span>CPU Usage:</span>
                    <span class="metric-value">${system.cpu ? system.cpu.usage.toFixed(2) : 'N/A'}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill ${system.cpu && system.cpu.usage > 80 ? 'danger' : system.cpu && system.cpu.usage > 60 ? 'warning' : ''}" 
                         style="width: ${system.cpu ? system.cpu.usage : 0}%"></div>
                </div>
                
                <div class="metric">
                    <span>Memory Usage:</span>
                    <span class="metric-value">${system.memory ? system.memory.usagePercent.toFixed(2) : 'N/A'}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill ${system.memory && system.memory.usagePercent > 85 ? 'danger' : system.memory && system.memory.usagePercent > 70 ? 'warning' : ''}" 
                         style="width: ${system.memory ? system.memory.usagePercent : 0}%"></div>
                </div>
                
                <div class="metric">
                    <span>Uptime:</span>
                    <span class="metric-value">${system.uptime ? Math.floor(system.uptime / 3600) : 0}h</span>
                </div>
                <div class="metric">
                    <span>Platform:</span>
                    <span class="metric-value">${system.platform || 'N/A'}</span>
                </div>
            </div>
            
            <div class="card">
                <h3>📱 Application Status</h3>
                <div class="metric">
                    <span>PM2 Processes:</span>
                    <span class="metric-value">${app.onlineProcesses || 0}/${app.pm2Processes || 0}</span>
                </div>
                <div class="metric">
                    <span>Total CPU:</span>
                    <span class="metric-value">${app.totalCpu ? app.totalCpu.toFixed(2) : 'N/A'}%</span>
                </div>
                <div class="metric">
                    <span>Total Memory:</span>
                    <span class="metric-value">${app.totalMemory ? Math.round(app.totalMemory / 1024 / 1024) : 'N/A'}MB</span>
                </div>
                
                ${app.processes ? app.processes.map(proc => `
                    <div class="metric">
                        <span>${proc.name}:</span>
                        <span class="status ${proc.status === 'online' ? 'online' : 'offline'}">${proc.status}</span>
                    </div>
                `).join('') : ''}
            </div>
            
            <div class="card">
                <h3>⚡ Performance</h3>
                <div class="metric">
                    <span>Build Status:</span>
                    <span class="metric-value ${perf.build && perf.build.success ? 'status online' : 'status offline'}">
                        ${perf.build && perf.build.success ? 'Success' : 'Failed'}
                    </span>
                </div>
                <div class="metric">
                    <span>Build Time:</span>
                    <span class="metric-value">${perf.build ? perf.build.time : 'N/A'}ms</span>
                </div>
                <div class="metric">
                    <span>Bundle Size:</span>
                    <span class="metric-value">${perf.bundle ? perf.bundle.sizeMB : 'N/A'}MB</span>
                </div>
                <div class="metric">
                    <span>Response Time:</span>
                    <span class="metric-value">${perf.responseTime ? perf.responseTime + 'ms' : 'N/A'}</span>
                </div>
            </div>
            
            <div class="card">
                <h3>🚨 Alerts</h3>
                ${alerts.length > 0 ? alerts.map(alert => `
                    <div class="alert ${alert.type}">
                        <strong>${alert.category.toUpperCase()}:</strong> ${alert.message}
                        <br><small>${new Date(alert.timestamp).toLocaleString()}</small>
                    </div>
                `).join('') : '<p>No alerts</p>'}
            </div>
        </div>
    </div>
    
    <script>
        // Auto-refresh every 30 seconds
        setTimeout(() => {
            location.reload();
        }, 30000);
    </script>
</body>
</html>`;
  }

  async startWebServer() {
    const server = http.createServer((req, res) => {
      if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(this.generateHTML());
      } else if (req.url === '/api/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(this.dashboardData, null, 2));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    });

    server.listen(this.port, () => {
      this.log(`🌐 Health dashboard started on http://localhost:${this.port}`);
    });

    return server;
  }

  async saveDashboardData() {
    try {
      fs.writeFileSync(this.dashboardFile, JSON.stringify(this.dashboardData, null, 2));
      this.log(`💾 Dashboard data saved: ${this.dashboardFile}`);
    } catch (error) {
      this.log(`❌ Error saving dashboard data: ${error.message}`, 'ERROR');
    }
  }

  displaySummary() {
    console.log('\n🌐 HEALTH DASHBOARD SUMMARY');
    console.log('============================');
    
    const system = this.dashboardData.system;
    const app = this.dashboardData.application;
    const perf = this.dashboardData.performance;
    const alerts = this.dashboardData.alerts;

    console.log(`🌐 Dashboard URL: http://localhost:${this.port}`);
    console.log(`📊 System Health:`);
    console.log(`   CPU: ${system.cpu ? system.cpu.usage.toFixed(2) : 'N/A'}%`);
    console.log(`   Memory: ${system.memory ? system.memory.usagePercent.toFixed(2) : 'N/A'}%`);
    console.log(`   Uptime: ${system.uptime ? Math.floor(system.uptime / 3600) : 0} hours`);
    
    console.log(`\n📱 Application Status:`);
    console.log(`   Processes: ${app.onlineProcesses || 0}/${app.pm2Processes || 0} online`);
    console.log(`   Total CPU: ${app.totalCpu ? app.totalCpu.toFixed(2) : 'N/A'}%`);
    console.log(`   Total Memory: ${app.totalMemory ? Math.round(app.totalMemory / 1024 / 1024) : 'N/A'}MB`);
    
    console.log(`\n⚡ Performance:`);
    console.log(`   Build: ${perf.build && perf.build.success ? 'Success' : 'Failed'}`);
    console.log(`   Build Time: ${perf.build ? perf.build.time : 'N/A'}ms`);
    console.log(`   Bundle Size: ${perf.bundle ? perf.bundle.sizeMB : 'N/A'}MB`);
    
    console.log(`\n🚨 Alerts: ${alerts.length}`);
    if (alerts.length > 0) {
      alerts.slice(0, 3).forEach(alert => {
        console.log(`   - [${alert.type.toUpperCase()}] ${alert.message}`);
      });
    }

    console.log(`\n📄 Dashboard data saved to: ${this.dashboardFile}`);
  }

  async run() {
    this.log('🚀 Starting Health Dashboard...');
    
    try {
      // Collect all metrics
      await this.collectSystemMetrics();
      await this.collectApplicationMetrics();
      await this.collectPerformanceMetrics();
      
      // Generate alerts
      this.generateAlerts();
      
      // Update uptime
      this.dashboardData.uptime = Date.now() - this.startTime;
      
      // Save data
      await this.saveDashboardData();
      
      // Start web server
      await this.startWebServer();
      
      // Display summary
      this.displaySummary();
      
      this.log('✅ Health Dashboard started successfully');
    } catch (error) {
      this.log(`❌ Health Dashboard failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const dashboard = new HealthDashboard();
  dashboard.run();
}

module.exports = HealthDashboard;