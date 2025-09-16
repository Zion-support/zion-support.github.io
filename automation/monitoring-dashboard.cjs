const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const DASHBOARD_PATH = path.join(process.cwd(), 'automation', 'dashboard.html');

function generateDashboard() {
  console.log('📊 Generating monitoring dashboard...');
  
  try {
    // Read all report files
    const reports = {
      error: readReport('error-report.json'),
      performance: readReport('performance-report.json'),
      security: readReport('security-report.json'),
      seo: readReport('seo-report.json')
    };

    // Get PM2 status
    const pm2Status = getPM2Status();

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Tech Group - Automation Dashboard</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px; }
        .header h1 { font-size: 2.5rem; margin-bottom: 10px; }
        .header p { font-size: 1.2rem; opacity: 0.9; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .card { background: white; border-radius: 10px; padding: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .card h2 { color: #333; margin-bottom: 15px; font-size: 1.5rem; }
        .status { display: inline-block; padding: 5px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: bold; }
        .status.success { background: #d4edda; color: #155724; }
        .status.warning { background: #fff3cd; color: #856404; }
        .status.error { background: #f8d7da; color: #721c24; }
        .metric { display: flex; justify-content: space-between; margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 5px; }
        .metric-label { font-weight: 600; color: #555; }
        .metric-value { color: #333; font-weight: bold; }
        .recommendations { margin-top: 15px; }
        .recommendation { background: #e3f2fd; padding: 10px; margin: 5px 0; border-radius: 5px; border-left: 4px solid #2196f3; }
        .timestamp { color: #666; font-size: 0.9rem; margin-top: 20px; }
        .refresh-btn { background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-bottom: 20px; }
        .refresh-btn:hover { background: #0056b3; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Zion Tech Group</h1>
            <p>Automation & Monitoring Dashboard</p>
        </div>
        
        <button class="refresh-btn" onclick="location.reload()">🔄 Refresh Dashboard</button>
        
        <div class="grid">
            <div class="card">
                <h2>🔧 Error Monitoring</h2>
                <div class="status ${reports.error?.lintErrors ? 'error' : 'success'}">
                    ${reports.error?.lintErrors ? 'Errors Found' : 'No Errors'}
                </div>
                <div class="status ${reports.error?.typeCheckErrors ? 'error' : 'success'}">
                    ${reports.error?.typeCheckErrors ? 'TypeScript Errors' : 'TypeScript OK'}
                </div>
                <div class="timestamp">Last updated: ${reports.error?.timestamp || 'Never'}</div>
            </div>
            
            <div class="card">
                <h2>⚡ Performance</h2>
                <div class="metric">
                    <span class="metric-label">Build Status:</span>
                    <span class="metric-value">${reports.performance?.buildStatus || 'Unknown'}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Bundle Size:</span>
                    <span class="metric-value">${reports.performance?.bundleSize || 'Unknown'}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Memory Usage:</span>
                    <span class="metric-value">${reports.performance?.memoryUsage?.heapUsed || 'Unknown'}</span>
                </div>
                <div class="timestamp">Last updated: ${reports.performance?.timestamp || 'Never'}</div>
            </div>
            
            <div class="card">
                <h2>🛡️ Security</h2>
                <div class="metric">
                    <span class="metric-label">Vulnerabilities:</span>
                    <span class="metric-value">${reports.security?.npmAudit?.vulnerabilities?.total || 0}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">High Severity:</span>
                    <span class="metric-value">${reports.security?.npmAudit?.vulnerabilities?.high || 0}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Code Issues:</span>
                    <span class="metric-value">${Object.values(reports.security?.codeSecurity || {}).flat().length}</span>
                </div>
                <div class="timestamp">Last updated: ${reports.security?.timestamp || 'Never'}</div>
            </div>
            
            <div class="card">
                <h2>📈 SEO Optimization</h2>
                <div class="metric">
                    <span class="metric-label">Meta Descriptions:</span>
                    <span class="metric-value">${reports.seo?.metaTags?.withDescription || 0}/${reports.seo?.metaTags?.total || 0}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Alt Attributes:</span>
                    <span class="metric-value">${reports.seo?.altAttributes?.withAlt || 0}/${reports.seo?.altAttributes?.total || 0}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Internal Links:</span>
                    <span class="metric-value">${reports.seo?.internalLinks?.count || 0}</span>
                </div>
                <div class="timestamp">Last updated: ${reports.seo?.timestamp || 'Never'}</div>
            </div>
            
            <div class="card">
                <h2>🔄 PM2 Processes</h2>
                <div class="metric">
                    <span class="metric-label">Total Processes:</span>
                    <span class="metric-value">${pm2Status.total || 0}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Running:</span>
                    <span class="metric-value">${pm2Status.running || 0}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Stopped:</span>
                    <span class="metric-value">${pm2Status.stopped || 0}</span>
                </div>
                <div class="timestamp">Last updated: ${new Date().toLocaleString()}</div>
            </div>
            
            <div class="card">
                <h2>💡 Recommendations</h2>
                <div class="recommendations">
                    ${getAllRecommendations(reports).map(rec => `<div class="recommendation">${rec}</div>`).join('')}
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;

    fs.writeFileSync(DASHBOARD_PATH, html);
    console.log('✅ Dashboard generated successfully');
    console.log(`📊 Dashboard available at: ${DASHBOARD_PATH}`);

  } catch (error) {
    console.error('❌ Dashboard generation failed:', error);
  }
}

function readReport(filename) {
  try {
    const filePath = path.join(process.cwd(), filename);
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (error) {
    console.log(`⚠️  Could not read ${filename}:`, error.message);
  }
  return null;
}

function getPM2Status() {
  try {
    const { execSync } = require('child_process');
    const output = execSync('pm2 jlist', { encoding: 'utf8' });
    const processes = JSON.parse(output);
    
    return {
      total: processes.length,
      running: processes.filter(p => p.pm2_env?.status === 'online').length,
      stopped: processes.filter(p => p.pm2_env?.status === 'stopped').length
    };
  } catch (error) {
    return { total: 0, running: 0, stopped: 0 };
  }
}

function getAllRecommendations(reports) {
  const recommendations = [];
  
  Object.values(reports).forEach(report => {
    if (report && report.recommendations) {
      recommendations.push(...report.recommendations);
    }
  });
  
  return recommendations.slice(0, 10); // Limit to 10 recommendations
}

// Generate dashboard every 5 minutes
setInterval(generateDashboard, 5 * 60 * 1000);
generateDashboard(); // Generate immediately

console.log('📊 Monitoring dashboard generator started');