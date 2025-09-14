#!/usr/bin/env node

/**
 * Performance Monitoring Dashboard
 * Real-time performance metrics and monitoring
 */

const express = require('express');
const os = require('os');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PERFORMANCE_PORT || 3001;

// Performance metrics collection
function getSystemMetrics() {
  return {
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: {
      used: process.memoryUsage(),
      system: {
        total: os.totalmem(),
        free: os.freemem(),
        used: os.totalmem() - os.freemem()
      }
    },
    cpu: {
      loadAverage: os.loadavg(),
      cores: os.cpus().length
    },
    disk: {
      // Basic disk usage info
      platform: os.platform(),
      arch: os.arch()
    }
  };
}

// API endpoint for metrics
app.get('/api/metrics', (req, res) => {
  try {
    const metrics = getSystemMetrics();
    res.json({
      success: true,
      data: metrics,
      meta: {
        timestamp: new Date().toISOString(),
        version: '1.0.0'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Performance dashboard HTML
const dashboardHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Tech Group - Performance Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .card { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .metric-card { background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #007bff; }
        .metric-value { font-size: 24px; font-weight: bold; color: #007bff; }
        .metric-label { color: #666; font-size: 14px; }
        .chart-container { position: relative; height: 300px; margin: 20px 0; }
        .status-healthy { color: #28a745; }
        .status-warning { color: #ffc107; }
        .status-error { color: #dc3545; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Zion Tech Group Performance Dashboard</h1>
        
        <div class="card">
            <h2>System Overview</h2>
            <div class="metrics-grid">
                <div class="metric-card">
                    <div class="metric-value" id="uptime">-</div>
                    <div class="metric-label">System Uptime</div>
                </div>
                <div class="metric-card">
                    <div class="metric-value" id="memory">-</div>
                    <div class="metric-label">Memory Usage</div>
                </div>
                <div class="metric-card">
                    <div class="metric-value" id="cpu">-</div>
                    <div class="metric-label">CPU Load</div>
                </div>
                <div class="metric-card">
                    <div class="metric-value" id="status" class="status-healthy">Healthy</div>
                    <div class="metric-label">System Status</div>
                </div>
            </div>
        </div>

        <div class="card">
            <h2>Performance Charts</h2>
            <div class="chart-container">
                <canvas id="performanceChart"></canvas>
            </div>
        </div>
    </div>

    <script>
        let performanceChart;
        let metricsHistory = [];

        async function fetchMetrics() {
            try {
                const response = await fetch('/api/metrics');
                const data = await response.json();
                
                if (data.success) {
                    updateDashboard(data.data);
                    updateChart(data.data);
                }
            } catch (error) {
                console.error('Failed to fetch metrics:', error);
                document.getElementById('status').textContent = 'Error';
                document.getElementById('status').className = 'metric-value status-error';
            }
        }

        function updateDashboard(metrics) {
            // Update uptime
            const hours = Math.floor(metrics.uptime / 3600);
            const minutes = Math.floor((metrics.uptime % 3600) / 60);
            document.getElementById('uptime').textContent = `${hours}h ${minutes}m`;

            // Update memory usage
            const memUsed = (metrics.memory.used.rss / 1024 / 1024).toFixed(1);
            const memTotal = (metrics.memory.system.total / 1024 / 1024 / 1024).toFixed(1);
            document.getElementById('memory').textContent = `${memUsed}MB / ${memTotal}GB`;

            // Update CPU load
            const cpuLoad = metrics.cpu.loadAverage[0].toFixed(2);
            document.getElementById('cpu').textContent = `${cpuLoad}`;

            // Update status
            const statusEl = document.getElementById('status');
            if (metrics.cpu.loadAverage[0] < 2 && metrics.memory.used.rss < metrics.memory.system.total * 0.8) {
                statusEl.textContent = 'Healthy';
                statusEl.className = 'metric-value status-healthy';
            } else if (metrics.cpu.loadAverage[0] < 4 && metrics.memory.used.rss < metrics.memory.system.total * 0.9) {
                statusEl.textContent = 'Warning';
                statusEl.className = 'metric-value status-warning';
            } else {
                statusEl.textContent = 'Critical';
                statusEl.className = 'metric-value status-error';
            }
        }

        function updateChart(metrics) {
            metricsHistory.push({
                timestamp: new Date(metrics.timestamp),
                memory: (metrics.memory.used.rss / 1024 / 1024).toFixed(1),
                cpu: metrics.cpu.loadAverage[0].toFixed(2)
            });

            // Keep only last 20 data points
            if (metricsHistory.length > 20) {
                metricsHistory.shift();
            }

            const ctx = document.getElementById('performanceChart').getContext('2d');
            
            if (performanceChart) {
                performanceChart.destroy();
            }

            performanceChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: metricsHistory.map(m => m.timestamp.toLocaleTimeString()),
                    datasets: [
                        {
                            label: 'Memory Usage (MB)',
                            data: metricsHistory.map(m => m.memory),
                            borderColor: 'rgb(75, 192, 192)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            tension: 0.1
                        },
                        {
                            label: 'CPU Load',
                            data: metricsHistory.map(m => m.cpu),
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            tension: 0.1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Initialize chart
        const ctx = document.getElementById('performanceChart').getContext('2d');
        performanceChart = new Chart(ctx, {
            type: 'line',
            data: { labels: [], datasets: [] },
            options: { responsive: true, maintainAspectRatio: false }
        });

        // Fetch metrics every 5 seconds
        fetchMetrics();
        setInterval(fetchMetrics, 5000);
    </script>
</body>
</html>
`;

// Serve dashboard
app.get('/', (req, res) => {
  res.send(dashboardHTML);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Performance monitoring dashboard running on port ${PORT}`);
  console.log(`📊 Dashboard available at: http://localhost:${PORT}`);
  console.log(`📈 Metrics API available at: http://localhost:${PORT}/api/metrics`);
});

module.exports = app;
