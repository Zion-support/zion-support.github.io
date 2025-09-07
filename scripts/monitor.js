const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const os = require('os');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'monitor-ui')));

// Performance metrics storage
let metrics = {
  system: {},
  applications: {},
  alerts: [],
  history: []
};

// Alert thresholds
const ALERT_THRESHOLDS = {
  cpu: 80, // CPU usage percentage
  memory: 85, // Memory usage percentage
  responseTime: 2000, // Response time in ms
  errorRate: 5, // Error rate percentage
  diskUsage: 90 // Disk usage percentage
};

// Alert types
const ALERT_TYPES = {
  WARNING: 'warning',
  CRITICAL: 'critical',
  INFO: 'info'
};

// Generate system metrics
const getSystemMetrics = () => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  const memoryUsage = (usedMemory / totalMemory) * 100;
  
  const cpuUsage = os.loadavg()[0] * 100; // 1 minute average
  
  return {
    timestamp: Date.now(),
    cpu: {
      usage: Math.round(cpuUsage),
      cores: os.cpus().length,
      loadAverage: os.loadavg()
    },
    memory: {
      total: totalMemory,
      used: usedMemory,
      free: freeMemory,
      usage: Math.round(memoryUsage)
    },
    uptime: os.uptime(),
    platform: os.platform(),
    arch: os.arch(),
    hostname: os.hostname()
  };
};

// Check for alerts
const checkAlerts = (metrics) => {
  const alerts = [];
  
  // CPU alert
  if (metrics.cpu.usage > ALERT_THRESHOLDS.cpu) {
    alerts.push({
      type: metrics.cpu.usage > 95 ? ALERT_TYPES.CRITICAL : ALERT_TYPES.WARNING,
      message: `High CPU usage: ${metrics.cpu.usage}%`,
      metric: 'cpu',
      value: metrics.cpu.usage,
      threshold: ALERT_THRESHOLDS.cpu,
      timestamp: Date.now()
    });
  }
  
  // Memory alert
  if (metrics.memory.usage > ALERT_THRESHOLDS.memory) {
    alerts.push({
      type: metrics.memory.usage > 95 ? ALERT_TYPES.CRITICAL : ALERT_TYPES.WARNING,
      message: `High memory usage: ${metrics.memory.usage}%`,
      metric: 'memory',
      value: metrics.memory.usage,
      threshold: ALERT_THRESHOLDS.memory,
      timestamp: Date.now()
    });
  }
  
  return alerts;
};

// Update metrics
const updateMetrics = async () => {
  try {
    // System metrics
    const systemMetrics = getSystemMetrics();
    metrics.system = systemMetrics;
    
    // Check for alerts
    const newAlerts = checkAlerts(systemMetrics);
    if (newAlerts.length > 0) {
      metrics.alerts.push(...newAlerts);
      // Keep only last 100 alerts
      if (metrics.alerts.length > 100) {
        metrics.alerts = metrics.alerts.slice(-100);
      }
      
      // Emit alerts to connected clients
      io.emit('alerts', newAlerts);
    }
    
    // Store in history (keep last 1000 entries)
    metrics.history.push({
      timestamp: Date.now(),
      system: systemMetrics
    });
    
    if (metrics.history.length > 1000) {
      metrics.history = metrics.history.slice(-1000);
    }
    
    // Emit updated metrics to connected clients
    io.emit('metrics', metrics);
    
  } catch (error) {
    console.error('Error updating metrics:', error);
  }
};

// PM2 integration for application monitoring
const getPM2Status = async () => {
  try {
    // This would integrate with PM2 API to get process status
    // For now, we'll simulate the data
    return {
      processes: [
        {
          name: 'bolt-zion-frontend',
          status: 'online',
          pm_id: 0,
          cpu: Math.random() * 100,
          memory: Math.random() * 100,
          uptime: Date.now() - (Math.random() * 86400000),
          restart_count: Math.floor(Math.random() * 5)
        },
        {
          name: 'bolt-zion-backend',
          status: 'online',
          pm_id: 1,
          cpu: Math.random() * 100,
          memory: Math.random() * 100,
          uptime: Date.now() - (Math.random() * 86400000),
          restart_count: Math.floor(Math.random() * 5)
        }
      ]
    };
  } catch (error) {
    console.error('Error getting PM2 status:', error);
    return { processes: [] };
  }
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV
  });
});

// Metrics endpoint
app.get('/api/metrics', (req, res) => {
  res.json(metrics);
});

// Alerts endpoint
app.get('/api/alerts', (req, res) => {
  res.json(metrics.alerts);
});

// System info endpoint
app.get('/api/system', (req, res) => {
  res.json(metrics.system);
});

// Dashboard endpoint
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'monitor-ui', 'index.html'));
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected to monitoring dashboard');
  
  // Send current metrics to new client
  socket.emit('metrics', metrics);
  
  // Send current alerts to new client
  socket.emit('alerts', metrics.alerts);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected from monitoring dashboard');
  });
  
  // Handle client requests
  socket.on('getMetrics', () => {
    socket.emit('metrics', metrics);
  });
  
  socket.on('getAlerts', () => {
    socket.emit('alerts', metrics.alerts);
  });
});

// Create monitor UI directory and files
const createMonitorUI = async () => {
  const uiDir = path.join(__dirname, 'monitor-ui');
  
  try {
    await fs.mkdir(uiDir, { recursive: true });
    
    // Create HTML dashboard
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bolt Zion - System Monitor</title>
    <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f0f23; color: #fff; }
        .container { max-width: 1400px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .header h1 { color: #00ff88; font-size: 2.5em; margin-bottom: 10px; }
        .header p { color: #888; font-size: 1.1em; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .card { background: #1a1a2e; border-radius: 10px; padding: 20px; border: 1px solid #333; }
        .card h3 { color: #00ff88; margin-bottom: 15px; font-size: 1.3em; }
        .metric { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .metric .label { color: #ccc; }
        .metric .value { color: #fff; font-weight: bold; }
        .alert { padding: 10px; border-radius: 5px; margin-bottom: 10px; }
        .alert.warning { background: #ffa500; color: #000; }
        .alert.critical { background: #ff4444; color: #fff; }
        .alert.info { background: #4444ff; color: #fff; }
        .chart-container { height: 300px; margin-top: 20px; }
        .status { display: inline-block; width: 12px; height: 12px; border-radius: 50%; margin-right: 8px; }
        .status.online { background: #00ff88; }
        .status.offline { background: #ff4444; }
        .status.restarting { background: #ffa500; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Bolt Zion System Monitor</h1>
            <p>Real-time performance monitoring and health dashboard</p>
        </div>
        
        <div class="grid">
            <div class="card">
                <h3>System Overview</h3>
                <div class="metric">
                    <span class="label">CPU Usage:</span>
                    <span class="value" id="cpu-usage">--</span>
                </div>
                <div class="metric">
                    <span class="label">Memory Usage:</span>
                    <span class="value" id="memory-usage">--</span>
                </div>
                <div class="metric">
                    <span class="label">Uptime:</span>
                    <span class="value" id="uptime">--</span>
                </div>
                <div class="metric">
                    <span class="label">Platform:</span>
                    <span class="value" id="platform">--</span>
                </div>
            </div>
            
            <div class="card">
                <h3>Applications</h3>
                <div id="applications">Loading...</div>
            </div>
            
            <div class="card">
                <h3>Recent Alerts</h3>
                <div id="alerts">No alerts</div>
            </div>
        </div>
        
        <div class="card">
            <h3>Performance Trends</h3>
            <div class="chart-container">
                <canvas id="performanceChart"></canvas>
            </div>
        </div>
    </div>

    <script>
        const socket = io();
        let performanceChart;
        
        // Initialize chart
        const initChart = () => {
            const ctx = document.getElementById('performanceChart').getContext('2d');
            performanceChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'CPU Usage (%)',
                        data: [],
                        borderColor: '#00ff88',
                        backgroundColor: 'rgba(0, 255, 136, 0.1)',
                        tension: 0.4
                    }, {
                        label: 'Memory Usage (%)',
                        data: [],
                        borderColor: '#ffa500',
                        backgroundColor: 'rgba(255, 165, 0, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: { color: '#333' },
                            ticks: { color: '#ccc' }
                        },
                        x: {
                            grid: { color: '#333' },
                            ticks: { color: '#ccc' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: '#ccc' }
                        }
                    }
                }
            });
        };
        
        // Update system metrics
        const updateSystemMetrics = (system) => {
            document.getElementById('cpu-usage').textContent = system.cpu.usage + '%';
            document.getElementById('memory-usage').textContent = system.memory.usage + '%';
            document.getElementById('uptime').textContent = Math.floor(system.uptime / 3600) + 'h ' + 
                                                       Math.floor((system.uptime % 3600) / 60) + 'm';
            document.getElementById('platform').textContent = system.platform + ' (' + system.arch + ')';
        };
        
        // Update applications
        const updateApplications = (apps) => {
            const container = document.getElementById('applications');
            if (!apps || apps.length === 0) {
                container.innerHTML = 'No applications running';
                return;
            }
            
            container.innerHTML = apps.map(app => \`
                <div class="metric">
                    <span class="label">
                        <span class="status \${app.status}"></span>
                        \${app.name}
                    </span>
                    <span class="value">CPU: \${app.cpu.toFixed(1)}% | Mem: \${app.memory.toFixed(1)}%</span>
                </div>
            \`).join('');
        };
        
        // Update alerts
        const updateAlerts = (alerts) => {
            const container = document.getElementById('alerts');
            if (!alerts || alerts.length === 0) {
                container.innerHTML = 'No alerts';
                return;
            }
            
            container.innerHTML = alerts.slice(-5).map(alert => \`
                <div class="alert \${alert.type}">
                    <strong>\${alert.message}</strong><br>
                    <small>\${new Date(alert.timestamp).toLocaleTimeString()}</small>
                </div>
            \`).join('');
        };
        
        // Update performance chart
        const updateChart = (history) => {
            if (!history || history.length === 0) return;
            
            const labels = history.slice(-20).map(h => new Date(h.timestamp).toLocaleTimeString());
            const cpuData = history.slice(-20).map(h => h.system.cpu.usage);
            const memoryData = history.slice(-20).map(h => h.system.memory.usage);
            
            performanceChart.data.labels = labels;
            performanceChart.data.datasets[0].data = cpuData;
            performanceChart.data.datasets[1].data = memoryData;
            performanceChart.update();
        };
        
        // Socket event handlers
        socket.on('metrics', (data) => {
            if (data.system) updateSystemMetrics(data.system);
            if (data.history) updateChart(data.history);
        });
        
        socket.on('alerts', (alerts) => {
            updateAlerts(alerts);
        });
        
        // Initialize dashboard
        document.addEventListener('DOMContentLoaded', () => {
            initChart();
            
            // Request initial data
            socket.emit('getMetrics');
            socket.emit('getAlerts');
        });
        
        // Refresh data every 5 seconds
        setInterval(() => {
            socket.emit('getMetrics');
        }, 5000);
    </script>
</body>
</html>`;
    
    await fs.writeFile(path.join(uiDir, 'index.html'), htmlContent);
    console.log('Monitor UI created successfully');
    
  } catch (error) {
    console.error('Error creating monitor UI:', error);
  }
};

// Start monitoring
const startMonitoring = async () => {
  try {
    // Create monitor UI
    await createMonitorUI();
    
    // Start metrics collection
    setInterval(updateMetrics, 5000); // Update every 5 seconds
    
    // Start server
    server.listen(PORT, () => {
      console.log(`[MONITOR] Monitoring dashboard running on port ${PORT}`);
      console.log(`[MONITOR] Dashboard URL: http://localhost:${PORT}/dashboard`);
      console.log(`[MONITOR] Health check: http://localhost:${PORT}/health`);
      console.log(`[MONITOR] Metrics API: http://localhost:${PORT}/api/metrics`);
    });
    
  } catch (error) {
    console.error('Error starting monitoring:', error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('[MONITOR] Received SIGTERM, shutting down gracefully...');
  server.close(() => {
    console.log('[MONITOR] Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('[MONITOR] Received SIGINT, shutting down gracefully...');
  server.close(() => {
    console.log('[MONITOR] Server closed');
    process.exit(0);
  });
});

// Start the monitoring system
startMonitoring();