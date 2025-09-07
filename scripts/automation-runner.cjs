const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationRunner {
  constructor() {
    this.scriptsDir = path.join(__dirname);
    this.reportFile = path.join(__dirname, '..', 'automation-runner-report.json');
    this.results = [];
  }

  log(message) {
    console.log(`[Automation Runner] ${message}`);
  }

  async runScript(scriptName) {
    this.log(`Running ${scriptName}...`);
    const startTime = Date.now();
    
    try {
      const scriptPath = path.join(this.scriptsDir, scriptName);
      
      if (!fs.existsSync(scriptPath)) {
        throw new Error(`Script ${scriptName} not found`);
      }
      
      execSync(`node ${scriptPath}`, { stdio: 'inherit' });
      
      const duration = Date.now() - startTime;
      this.results.push({
        script: scriptName,
        status: 'success',
        duration: duration,
        timestamp: new Date().toISOString()
      });
      
      this.log(`${scriptName} completed successfully in ${duration}ms`);
    } catch (error) {
      const duration = Date.now() - startTime;
      this.results.push({
        script: scriptName,
        status: 'failed',
        error: error.message,
        duration: duration,
        timestamp: new Date().toISOString()
      });
      
      this.log(`${scriptName} failed: ${error.message}`);
    }
  }

  async runAllScripts() {
    this.log('Starting automation runner...');
    
    const scripts = [
      'performance-optimizer.cjs',
      'security-enhancer.cjs',
      'app-improvement-automation.cjs'
    ];
    
    for (const script of scripts) {
      await this.runScript(script);
    }
    
    await this.generateReport();
    this.log('Automation runner completed!');
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        total_scripts: this.results.length,
        successful: this.results.filter(r => r.status === 'success').length,
        failed: this.results.filter(r => r.status === 'failed').length,
        total_duration: this.results.reduce((sum, r) => sum + r.duration, 0)
      }
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to ${this.reportFile}`);
  }
}

if (require.main === module) {
  const runner = new AutomationRunner();
  runner.runAllScripts().catch(console.error);
}

module.exports = AutomationRunner;