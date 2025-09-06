#!/usr/bin/env node

/**
 * Monitoring Dashboard for Zion Tech Group
 * Real-time monitoring and alerting system
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📊 Zion Tech Group - Monitoring Dashboard');
console.log('=========================================');

const monitoringData = {
    timestamp: new Date().toISOString(),
    systemHealth: {},
    performance: {},
    alerts: []
};

function checkSystemHealth() {
    console.log('\n🏥 Checking system health...');
    
    try {
        // Check disk space
        const diskUsage = execSync('df -h .', { encoding: 'utf8' });
        const usage = diskUsage.split('\n')[1].split(/\s+/)[4];
        monitoringData.systemHealth.diskUsage = usage;
        
        // Check memory
        const memory = execSync('free -m', { encoding: 'utf8' });
        const memLines = memory.split('\n');
        const memInfo = memLines[1].split(/\s+/);
        const totalMem = parseInt(memInfo[1]);
        const usedMem = parseInt(memInfo[2]);
        const memPercent = Math.round((usedMem / totalMem) * 100);
        
        monitoringData.systemHealth.memoryUsage = `${memPercent}%`;
        
        // Check CPU load
        const loadAvg = execSync('uptime', { encoding: 'utf8' });
        const load = loadAvg.split('load average:')[1].split(',')[0].trim();
        monitoringData.systemHealth.cpuLoad = load;
        
        console.log(`✅ Disk: ${usage}, Memory: ${memPercent}%, Load: ${load}`);
        
        // Generate alerts
        if (memPercent > 80) {
            monitoringData.alerts.push({
                type: 'memory',
                severity: 'warning',
                message: `High memory usage: ${memPercent}%`,
                timestamp: new Date().toISOString()
            });
        }
        
        if (parseFloat(load) > 2.0) {
            monitoringData.alerts.push({
                type: 'cpu',
                severity: 'warning',
                message: `High CPU load: ${load}`,
                timestamp: new Date().toISOString()
            });
        }
        
    } catch (error) {
        console.log(`❌ Error checking system health: ${error.message}`);
    }
}

function checkApplicationHealth() {
    console.log('\n🔍 Checking application health...');
    
    try {
        // Check if build exists
        if (fs.existsSync('.next')) {
            monitoringData.systemHealth.buildStatus = 'ready';
            console.log('✅ Application build is ready');
        } else {
            monitoringData.systemHealth.buildStatus = 'not_built';
            monitoringData.alerts.push({
                type: 'build',
                severity: 'error',
                message: 'Application not built',
                timestamp: new Date().toISOString()
            });
            console.log('❌ Application not built');
        }
        
        // Check package.json
        if (fs.existsSync('package.json')) {
            const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
            monitoringData.systemHealth.dependencies = Object.keys(packageJson.dependencies || {}).length;
            console.log(`✅ Dependencies: ${monitoringData.systemHealth.dependencies}`);
        }
        
    } catch (error) {
        console.log(`❌ Error checking application: ${error.message}`);
    }
}

function generateDashboardHTML() {
    console.log('\n🌐 Generating monitoring dashboard...');
    
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Tech Group - Monitoring Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .card { background: white; padding: 20px; margin: 10px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .status-good { color: #28a745; }
        .status-warning { color: #ffc107; }
        .status-error { color: #dc3545; }
        .metric { display: inline-block; margin: 10px 20px 10px 0; }
        .alert { padding: 10px; margin: 5px 0; border-radius: 4px; }
        .alert-warning { background: #fff3cd; border: 1px solid #ffeaa7; }
        .alert-error { background: #f8d7da; border: 1px solid #f5c6cb; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Zion Tech Group - Monitoring Dashboard</h1>
        <p>Last updated: ${new Date().toLocaleString()}</p>
        
        <div class="card">
            <h2>🏥 System Health</h2>
            <div class="metric">💾 Disk Usage: <span class="status-good">${monitoringData.systemHealth.diskUsage || 'N/A'}</span></div>
            <div class="metric">🧠 Memory Usage: <span class="status-good">${monitoringData.systemHealth.memoryUsage || 'N/A'}</span></div>
            <div class="metric">⚡ CPU Load: <span class="status-good">${monitoringData.systemHealth.cpuLoad || 'N/A'}</span></div>
            <div class="metric">📦 Build Status: <span class="status-good">${monitoringData.systemHealth.buildStatus || 'N/A'}</span></div>
            <div class="metric">📚 Dependencies: <span class="status-good">${monitoringData.systemHealth.dependencies || 'N/A'}</span></div>
        </div>
        
        <div class="card">
            <h2>🚨 Alerts</h2>
            ${monitoringData.alerts.length === 0 ? 
                '<p class="status-good">✅ No alerts - System is healthy</p>' :
                monitoringData.alerts.map(alert => 
                    `<div class="alert alert-${alert.severity}">
                        <strong>${alert.type.toUpperCase()}:</strong> ${alert.message}
                        <br><small>${new Date(alert.timestamp).toLocaleString()}</small>
                    </div>`
                ).join('')
            }
        </div>
        
        <div class="card">
            <h2>📊 Quick Actions</h2>
            <p>
                <button onclick="location.reload()">🔄 Refresh Dashboard</button>
                <button onclick="window.open('/health', '_blank')">🏥 Health Check</button>
                <button onclick="window.open('/api/status', '_blank')">📡 API Status</button>
            </p>
        </div>
    </div>
    
    <script>
        // Auto-refresh every 30 seconds
        setTimeout(() => location.reload(), 30000);
    </script>
</body>
</html>`;

    fs.writeFileSync('monitoring-dashboard.html', html);
    console.log('✅ Monitoring dashboard generated: monitoring-dashboard.html');
}

// Run monitoring
checkSystemHealth();
checkApplicationHealth();
generateDashboardHTML();

// Save monitoring data
const reportPath = 'monitoring-data.json';
fs.writeFileSync(reportPath, JSON.stringify(monitoringData, null, 2));

console.log('\n📊 Monitoring Summary');
console.log('=====================');
console.log(`Alerts: ${monitoringData.alerts.length}`);
console.log(`System Status: ${monitoringData.alerts.length === 0 ? 'Healthy' : 'Needs Attention'}`);

console.log(`\n📄 Monitoring data saved to: ${reportPath}`);

process.exit(0);