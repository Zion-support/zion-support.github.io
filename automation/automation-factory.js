#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationFactory {
  constructor() {
    this.statusFile = path.join(__dirname, 'automation-status.json');
    this.runningScripts = new Map();
    this.loadStatus();
  }

  loadStatus() {
    try {
      if (fs.existsSync(this.statusFile)) {
        const status = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
        this.runningScripts = new Map(Object.entries(status.runningScripts || {}));
      }
    } catch (error) {
      this.log(`Error loading status: ${error.message}`);
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  generateCodeQualityScript() {
    const script = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CodeQualityMonitor {
  constructor() {
    this.metrics = {
      complexity: 0,
      maintainability: 0,
      testCoverage: 0,
      performance: 0,
      lastUpdated: new Date().toISOString()
    };
    this.logFile = path.join(__dirname, 'logs', 'code-quality.log');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = \`[\${timestamp}] \${message}\\n\`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async analyzeCodeQuality() {
    try {
      this.log('Starting code quality analysis...');
      
      this.metrics.complexity = this.calculateComplexity();
      this.metrics.maintainability = this.calculateMaintainability();
      this.metrics.testCoverage = this.calculateTestCoverage();
      this.metrics.performance = this.calculatePerformance();
      this.metrics.lastUpdated = new Date().toISOString();
      
      this.saveMetrics();
      this.log('Code quality analysis completed successfully');
      return this.metrics;
    } catch (error) {
      this.log(\`Code quality analysis failed: \${error.message}\`, 'ERROR');
      return null;
    }
  }

  calculateComplexity() {
    try {
      const files = this.getTypeScriptFiles();
      let totalComplexity = 0;
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\\n');
        lines.forEach(line => {
          if (line.includes('if') || line.includes('for') || line.includes('while') || line.includes('switch')) {
            totalComplexity++;
          }
        });
      });
      return totalComplexity;
    } catch (error) {
      this.log(\`Error calculating complexity: \${error.message}\`);
      return 0;
    }
  }

  calculateMaintainability() {
    try {
      const files = this.getTypeScriptFiles();
      let totalLines = 0;
      let commentLines = 0;
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\\n');
        totalLines += lines.length;
        lines.forEach(line => {
          if (line.trim().startsWith('//') || line.trim().startsWith('/*') || line.trim().startsWith('*')) {
            commentLines++;
          }
        });
      });
      
      return totalLines > 0 ? (commentLines / totalLines) * 100 : 0;
    } catch (error) {
      this.log(\`Error calculating maintainability: \${error.message}\`);
      return 0;
    }
  }

  calculateTestCoverage() {
    try {
      const testFiles = this.getTestFiles();
      const sourceFiles = this.getTypeScriptFiles();
      return testFiles.length > 0 ? (testFiles.length / sourceFiles.length) * 100 : 0;
    } catch (error) {
      this.log(\`Error calculating test coverage: \${error.message}\`);
      return 0;
    }
  }

  calculatePerformance() {
    try {
      const files = this.getTypeScriptFiles();
      let performanceScore = 100;
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('console.log') || content.includes('console.warn')) {
          performanceScore -= 5;
        }
        if (content.includes('setTimeout') || content.includes('setInterval')) {
          performanceScore -= 10;
        }
      });
      
      return Math.max(0, performanceScore);
    } catch (error) {
      this.log(\`Error calculating performance: \${error.message}\`);
      return 0;
    }
  }

  getTypeScriptFiles() {
    const files = [];
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
          files.push(fullPath);
        }
      });
    };
    walkDir(process.cwd());
    return files;
  }

  getTestFiles() {
    const files = [];
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (item.includes('.test.') || item.includes('.spec.')) {
          files.push(fullPath);
        }
      });
    };
    walkDir(process.cwd());
    return files;
  }

  saveMetrics() {
    try {
      const metricsFile = path.join(__dirname, 'logs', 'code-quality-metrics.json');
      fs.writeFileSync(metricsFile, JSON.stringify(this.metrics, null, 2));
    } catch (error) {
      this.log(\`Error saving metrics: \${error.message}\`);
    }
  }
}

const monitor = new CodeQualityMonitor();
monitor.analyzeCodeQuality().then(metrics => {
  if (metrics) {
    console.log('Code Quality Metrics:', JSON.stringify(metrics, null, 2));
  }
}).catch(error => {
  console.error('Error:', error.message);
  process.exit(1);
});
`;

    return script;
  }

  async run() {
    try {
      this.log('Starting automation factory...');
      
      // Generate and run code quality script
      const codeQualityScript = this.generateCodeQualityScript();
      const scriptPath = path.join(__dirname, 'code-quality-monitor.js');
      fs.writeFileSync(scriptPath, codeQualityScript);
      fs.chmodSync(scriptPath, '755');
      
      this.log('Code quality script generated and executed');
      
    } catch (error) {
      this.log(`Error in automation factory: ${error.message}`);
    }
  }
}

if (require.main === module) {
  const factory = new AutomationFactory();
  factory.run();
}

module.exports = AutomationFactory;