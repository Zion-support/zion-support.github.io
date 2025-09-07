const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveHealthCheck {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'health-check.log');
    fs.appendFileSync(logFile, `${logMessage  }\n`);
  }

  async runHealthCheck() {
    this.log('🏥 Starting comprehensive health check...');
    
    const health = {
      timestamp: new Date().toISOString(),
      checks: [],
      overall: 'healthy'
    };

    const checks = [
      {
        name: 'Git Status',
        command: 'git status --porcelain',
        expected: 'clean'
      },
      {
        name: 'Build Status',
        command: 'npm run build',
        expected: 'success'
      },
      {
        name: 'Dependencies',
        command: 'npm list --depth=0',
        expected: 'installed'
      }
    ];

    for (const check of checks) {
      try {
        this.log(`🔍 Running: ${check.name}`);
        const output = execSync(check.command, { 
          encoding: 'utf8', 
          cwd: '/workspace',
          stdio: 'pipe'
        });
        
        health.checks.push({
          name: check.name,
          status: 'passed',
          output: output.substring(0, 200),
          timestamp: new Date().toISOString()
        });
        
        this.log(`✅ ${check.name} passed`);
        
      } catch (error) {
        health.checks.push({
          name: check.name,
          status: 'failed',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        
        health.overall = 'unhealthy';
        this.log(`❌ ${check.name} failed: ${error.message}`, 'error');
      }
    }

    const reportFile = path.join(this.logsDir, 'health-check-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(health, null, 2));
    
    this.log(`📊 Health Check Complete: ${health.overall.toUpperCase()}`);
    this.log(`Report saved to: ${reportFile}`);
    
    return health;
  }
}

const healthCheck = new ComprehensiveHealthCheck();
healthCheck.runHealthCheck().catch(console.error);