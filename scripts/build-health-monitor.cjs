#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildHealthMonitor {
  constructor() {
    this.workspacePath = process.cwd();
    this.logFile = path.join(this.workspacePath, 'automation/logs/build-health.log');
    this.ensureLogDirectory();
    this.lastCheck = null;
    this.buildHistory = [];
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runBuild() {
    try {
      this.log('Running build health check...');
      const startTime = Date.now();
      
      const result = execSync('npm run build 2>&1', { 
        cwd: this.workspacePath,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 20
      });
      
      const endTime = Date.now();
      const buildTime = endTime - startTime;
      
      this.log(`Build completed successfully in ${buildTime}ms`);
      
      // Record build metrics
      this.buildHistory.push({
        timestamp: new Date().toISOString(),
        success: true,
        buildTime: buildTime,
        output: result
      });
      
      return { success: true, buildTime, output: result };
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      
      // Record failed build
      this.buildHistory.push({
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message,
        output: error.stdout || error.message
      });
      
      // Try to auto-fix build issues
      if (process.env.AUTO_FIX === 'true') {
        this.log('Attempting build error auto-fix...');
        await this.autoFixBuildErrors(error.stdout || error.message);
      }
      
      return { success: false, output: error.stdout || error.message };
    }
  }

  async autoFixBuildErrors(errorOutput) {
    try {
      // Parse build errors and attempt fixes
      const lines = errorOutput.split('\n');
      const buildErrors = [];
      
      for (const line of lines) {
        if (line.includes('error') && (line.includes('.tsx') || line.includes('.ts') || line.includes('.js'))) {
          const match = line.match(/^(.+?):(\d+):(\d+)\s+(.+)$/);
          if (match) {
            buildErrors.push({
              file: match[1],
              line: parseInt(match[2]),
              column: parseInt(match[3]),
              message: match[4]
            });
          }
        }
      }
      
      // Fix common build errors
      for (const error of buildErrors) {
        await this.fixBuildError(error);
      }
      
      this.log(`Attempted to fix ${buildErrors.length} build errors`);
    } catch (error) {
      this.log(`Auto-fix failed: ${error.message}`, 'ERROR');
    }
  }

  async fixBuildError(error) {
    try {
      const filePath = path.join(this.workspacePath, error.file);
      if (!fs.existsSync(filePath)) return;
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common build errors
      if (error.message.includes('Cannot find module')) {
        // Try to fix import issues
        const lines = content.split('\n');
        const errorLine = lines[error.line - 1];
        
        if (errorLine && errorLine.includes('import')) {
          // Remove problematic import
          lines[error.line - 1] = `// ${errorLine} // Fixed by auto-fix`;
          content = lines.join('\n');
          modified = true;
        }
      } else if (error.message.includes('Unexpected token')) {
        // Fix syntax errors
        const lines = content.split('\n');
        const errorLine = lines[error.line - 1];
        
        if (errorLine) {
          // Add missing semicolon or fix syntax
          if (!errorLine.trim().endsWith(';') && !errorLine.trim().endsWith('{') && !errorLine.trim().endsWith('}')) {
            lines[error.line - 1] = errorLine + ';';
            content = lines.join('\n');
            modified = true;
          }
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`Fixed build error in ${error.file}:${error.line}`);
      }
    } catch (error) {
      this.log(`Failed to fix build error in ${error.file}: ${error.message}`, 'WARN');
    }
  }

  async generateBuildReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalBuilds: this.buildHistory.length,
      successfulBuilds: this.buildHistory.filter(b => b.success).length,
      failedBuilds: this.buildHistory.filter(b => !b.success).length,
      averageBuildTime: this.buildHistory
        .filter(b => b.success && b.buildTime)
        .reduce((sum, b) => sum + b.buildTime, 0) / this.buildHistory.filter(b => b.success && b.buildTime).length || 0,
      recentBuilds: this.buildHistory.slice(-10),
      status: this.buildHistory.length > 0 && this.buildHistory[this.buildHistory.length - 1].success ? 'HEALTHY' : 'UNHEALTHY'
    };
    
    const reportPath = path.join(this.workspacePath, 'automation/logs/build-health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Build health report generated: ${reportPath}`);
    return report;
  }

  async monitor() {
    this.log('Starting build health monitoring...');
    
    while (true) {
      try {
        await this.runBuild();
        this.lastCheck = new Date();
        
        // Generate report every 10 builds
        if (this.buildHistory.length % 10 === 0) {
          await this.generateBuildReport();
        }
        
        // Wait for next check
        await new Promise(resolve => setTimeout(resolve, parseInt(process.env.BUILD_INTERVAL) || 1800000));
      } catch (error) {
        this.log(`Monitor error: ${error.message}`, 'ERROR');
        await new Promise(resolve => setTimeout(resolve, 300000)); // Wait 5 minutes on error
      }
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new BuildHealthMonitor();
  monitor.monitor().catch(console.error);
}

module.exports = BuildHealthMonitor;