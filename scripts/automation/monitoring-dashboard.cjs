#!/usr/bin/env node/usr/bin/env nodeconst express = require("express");"const pm2 = require("pm2");"const fs = require("fs");"const path = require("path");class MonitoringDashboard { constructor() { this.app = express(); this.port = process.env.DASHBOARD_PORT | 3001; this.projectRoot = process.cwd(); this.setupRoutes(); } setupRoutes() { this.app.use(express.json());" this.app.use(express.static("public")); / Health check endpoint" this.app.get("/api/health", (req, res) => { res.json({" status: "healthy"," timestamp: new Date().toISOString()," uptime: process.uptime() }); }); / PM2 processes endpoint" this.app.get("/api/processes", (req, res) => { pm2.list((err, processes) => { if (err) {" res.status(500).json({ error: err.message }); return; } res.json(processes); }); }); / System metrics endpoint" this.app.get("/api/metrics", (req, res) => { const metrics = {" memory: process.memoryUsage()," cpu: process.cpuUsage()," uptime: process.uptime()," timestamp: new Date().toISOString() }; res.json(metrics); }); / Dashboard HTML" this.app.get("/", (req, res) => {" const dashboardHTML = "<!DOCTYPE html>"<html lang="en"><head>" <meta charset="UTF-8">" <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>PM2 Monitoring Dashboard</title> <style>" body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }" .container { max-width: 1200px; margin: 0 auto; }" .header { background: #2c3e50; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }" .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }" .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }" .status { padding: 4px 8px; border-radius: 4px; color: white; font-size: 12px; }" .status.online { background: #27ae60; }" .status.offline { background: #e74c3c; }" .status.stopping { background: #f39c12; }" .metric { display: flex; justify-content: space-between; margin: 10px 0; }" .refresh-btn { background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; } </style></head><body>" <div class="container">" <div class="header"> <h1> PM2 Monitoring Dashboard</h1> <p>Real-time monitoring of your PM2 processes and system health</p>" <button class="refresh-btn" onclick="refreshData()">Refresh</button> </div> " <div class="grid">" <div class="card"> <h3> System Health</h3>" <div id="system-health">Loading.</div> </div> " <div class="card"> <h3> PM2 Processes</h3>" <div id="processes">Loading.</div> </div> " <div class="card"> <h3> System Metrics</h3>" <div id="metrics">Loading.</div> </div> </div> </div> <script> async function fetchData(url) { try { const response = await fetch(url); return await response.json(); } catch (error) {"" console.error("Error fetching data: ", error); return null; } } async function updateSystemHealth() {" const health = await fetchData("/api/health"); if (health) {"" document.getElementById("system-health").innerHTML = "" <div class="metric">" <span>Status: </span>" <span class="status online">${health.status}</span> </div>" <div class="metric">" <span>Uptime: </span> <span>${Math.floor(health.uptime / 3600)}h ${Math.floor((health.uptime % 3600) / 60)}m</span> </div>" <div class="metric">" <span>Last Update: </span> <span>${new Date(health.timestamp).toLocaleString()}</span> </div>" "; } } async function updateProcesses() {" const processes = await fetchData("/api/processes"); if (processes) {" const processesHTML = processes.map(proc => "" <div class="metric"> <span>${proc.name}</span>" <span class="status ${proc.pm2_env.status}">${proc.pm2_env.status}</span> </div>"" ").join("");" document.getElementById("processes").innerHTML = processesHTML | "<p>No processes running</p>"; } } async function updateMetrics() {" const metrics = await fetchData("/api/metrics"); if (metrics) {"" document.getElementById("metrics").innerHTML = "" <div class="metric">" <span>Memory Usage: </span> <span>${Math.round(metrics.memory.heapUsed / 1024 / 1024)} MB</span> </div>" <div class="metric">" <span>CPU Usage: </span> <span>${Math.round(metrics.cpu.user / 1000000)}%</span> </div>" <div class="metric">" <span>Uptime: </span> <span>${Math.floor(metrics.uptime / 3600)}h ${Math.floor((metrics.uptime % 3600) / 60)}m</span> </div>" "; } } async function refreshData() { await Promise.all([updateSystemHealth(), updateProcesses(), updateMetrics() ]); } / Initial load and refresh every 5 seconds refreshData(); setInterval(refreshData, 5000); </script></body></html>" "; res.send(dashboardHTML); }); } start() { this.app.listen(this.port, () => {" console.log(` Monitoring dashboard running on http: /localhost:${this.port}`); }); }}/ Start the dashboardconst dashboard = new MonitoringDashboard();dashboard.start();""`"`
#!/usr/bin/env node;
/**
 * Advanced Monitoring Dashboard;
 * Real-time monitoring of PM2 processes and system health;
 */
const express = require('express');
const pm2 = require('pm2');
const fs = require('fs');
const path = require('path');
class MonitoringDashboard {
    constructor() {
        this.app = express();
        this.port = process.env.DASHBOARD_PORT || 3001;
        this.projectRoot = process.cwd();
        this.setupRoutes();
    }
    setupRoutes() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
        // Health check endpoint
        this.app.get('/api/health', (req, res) => {
            res.json({
                "status": 'healthy',
                "timestamp": new Date().toISOString(),
                "uptime": process.uptime()
            });
        });
        // PM2 processes endpoint
        this.app.get('/api/processes', (req, res) => {
            pm2.list((err, processes) => {
                if (err) {
                    res.status(500).json({ "error": err.message });
                    return;
                }
                res.json(processes);
            });
        });
        // System metrics endpoint
        this.app.get('/api/metrics', (req, res) => {
            const metrics = {
                "memory": process.memoryUsage(),
                "cpu": process.cpuUsage(),
                "uptime": process.uptime(),
                "timestamp": new Date().toISOString()
            };
            res.json(metrics);
        });
        // Dashboard HTML
        this.app.get('/', (req, res) => {
            const dashboardHTML = "
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PM2 Monitoring Dashboard</title>
    <style>
        body { font-"family": Arial, sans-serif; "margin": 0; padding: 20px; background: #f5f5f5; }
        .container { max-"width": 1200px; margin: 0 auto; }
        .header { "background": #2c3e50; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .grid { "display": grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); "gap": 20px; }
        .card { "background": white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .status { "padding": 4px 8px; border-radius: 4px; color: white; font-size: 12px; }
        .status.online { "background": #27ae60; }
        .status.offline { "background": #e74c3c; }
        .status.stopping { "background": #f39c12; }
        .metric { "display": flex; justify-content: space-between; margin: 10px 0; }
        .refresh-btn { "background": #3498db; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 PM2 Monitoring Dashboard</h1>
            <p>Real-time monitoring of your PM2 processes and system health</p>
            <button class="refresh-btn" onclick="refreshData()">Refresh</button>
        </div>
        <div class="grid">
            <div class="card">
                <h3>📊 System Health</h3>
                <div id="system-health">Loading...</div>
            </div>
            <div class="card">
                <h3>⚡ PM2 Processes</h3>
                <div id="processes">Loading...</div>
            </div>
            <div class="card">
                <h3>📈 System Metrics</h3>
                <div id="metrics">Loading...</div>
            </div>
        </div>
    </div>
    <script>
        async function fetchData(url) {
            try {
                const response = await fetch(url);
                return await response.json();
            } catch (error) {
                console.error('Error fetching "data": ', error);
                return null;
            }
        }
        async function updateSystemHealth() {
            const health = await fetchData('/api/health');
            if (health) {
                document.getElementById('system-health').innerHTML = "
                    <div class="metric">
                        <span>"Status": </span>
                        <span class="status online">${health.status}</span>
                    </div>
                    <div class="metric">
                        <span>"Uptime": </span>
                        <span>${Math.floor(health.uptime / 3600)}h ${Math.floor((health.uptime % 3600) / 60)}m</span>
                    </div>
                    <div class="metric">
                        <span>Last "Update": </span>
                        <span>${new Date(health.timestamp).toLocaleString()}</span>
                    </div>
                ";
            }
        }
        async function updateProcesses() {
            const processes = await fetchData('/api/processes');
            if (processes) {
                const processesHTML = processes.map(proc => "
                    <div class="metric">
                        <span>${proc.name}</span>
                        <span class="status ${proc.pm2_env.status}">${proc.pm2_env.status}</span>
                    </div>
                ").join('');
                document.getElementById('processes').innerHTML = processesHTML || '<p>No processes running</p>';
            }
        }
        async function updateMetrics() {
            const metrics = await fetchData('/api/metrics');
            if (metrics) {
                document.getElementById('metrics').innerHTML = "
                    <div class="metric">
                        <span>Memory "Usage": </span>
                        <span>${Math.round(metrics.memory.heapUsed / 1024 / 1024)} MB</span>
                    </div>
                    <div class="metric">
                        <span>CPU "Usage": </span>
                        <span>${Math.round(metrics.cpu.user / 1000000)}%</span>
                    </div>
                    <div class="metric">
                        <span>"Uptime": </span>
                        <span>${Math.floor(metrics.uptime / 3600)}h ${Math.floor((metrics.uptime % 3600) / 60)}m</span>
                    </div>
                ";
            }
        }
        async function refreshData() {
            await Promise.all([updateSystemHealth(),
                updateProcesses(),
                updateMetrics()
            ]);
        }
        // Initial load and refresh every 5 seconds
        refreshData();
        setInterval(refreshData, 5000);
    </script>
</body>
</html>
            ";
            res.send(dashboardHTML);
        });
    }
    start() {
        this.app.listen(this.port, () => {
        });
    }
}
// Start the dashboard
const dashboard = new MonitoringDashboard();
dashboard.start();

const express = require('express')
const pm2 = require('pm2')
const fs = require('fs')
const path = require('path')
        this.app.use(express.static('public')
        this.app.get('/api/health')
                "status"
                console.error('Error fetching "data")
                "
                "
