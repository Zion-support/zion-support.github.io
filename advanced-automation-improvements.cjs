#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Advanced Automation Improvements
 * Creates additional scripts and improvements
 */
class AdvancedAutomationImprovements {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.improvements = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix =
      type === 'ERROR'
        ? '❌'
        : type === 'SUCCESS'
          ? '✅'
          : type === 'WARNING'
            ? '⚠️'
            : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  createIntelligentErrorDetector() {
    const script = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentErrorDetector {
  constructor() {
    this.errorPatterns = {
      syntax: /SyntaxError|ParseError|Unexpected token/gi,
      type: /TypeError|ReferenceError/gi,
      module: /Cannot find module|Module not found/gi,
      import: /Cannot resolve module|Import error/gi,
      build: /Build failed|Compilation error/gi,
      runtime: /Runtime error|Uncaught exception/gi
    };
    this.logFile = path.join(__dirname, 'logs', 'error-detection.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = \`[\${timestamp}] [\${level}] \${message}\\n\`;
    console.log(\`[\${level}] \${message}\`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async detectErrors() {
    this.log('🔍 Starting intelligent error detection...');
    
    const errors = {
      syntax: await this.detectSyntaxErrors(),
      type: await this.detectTypeErrors(),
      module: await this.detectModuleErrors(),
      import: await this.detectImportErrors(),
      build: await this.detectBuildErrors(),
      runtime: await this.detectRuntimeErrors()
    };

    const totalErrors = Object.values(errors).reduce((sum, arr) => sum + arr.length, 0);
    this.log(\`Found \${totalErrors} total errors across all categories\`);

    if (totalErrors > 0) {
      await this.generateErrorReport(errors);
      await this.suggestFixes(errors);
    }

    return errors;
  }

  async detectSyntaxErrors() {
    try {
      const result = execSync('npx eslint . --format json', { 
        stdio: 'pipe', 
        cwd: process.cwd() 
      });
      const eslintOutput = JSON.parse(result);
      return eslintOutput.filter(issue => 
        issue.messages.some(msg => this.errorPatterns.syntax.test(msg.message))
      );
    } catch (error) {
      return [];
    }
  }

  async detectTypeErrors() {
    try {
      const result = execSync('npx tsc --noEmit --skipLibCheck', { 
        stdio: 'pipe', 
        cwd: process.cwd() 
      });
      return [];
    } catch (error) {
      const lines = error.stdout.split('\\n');
      return lines.filter(line => this.errorPatterns.type.test(line));
    }
  }

  async detectModuleErrors() {
    try {
      const result = execSync('npm run build', { 
        stdio: 'pipe', 
        cwd: process.cwd() 
      });
      return [];
    } catch (error) {
      const lines = (error.stdout || error.stderr || '').split('\\n');
      return lines.filter(line => this.errorPatterns.module.test(line));
    }
  }

  async detectImportErrors() {
    try {
      const result = execSync('npx eslint . --rule "import/no-unresolved: error"', { 
        stdio: 'pipe', 
        cwd: process.cwd() 
      });
      return [];
    } catch (error) {
      const lines = (error.stdout || error.stderr || '').split('\\n');
      return lines.filter(line => this.errorPatterns.import.test(line));
    }
  }

  async detectBuildErrors() {
    try {
      const result = execSync('npm run build', { 
        stdio: 'pipe', 
        cwd: process.cwd() 
      });
      return [];
    } catch (error) {
      const lines = (error.stdout || error.stderr || '').split('\\n');
      return lines.filter(line => this.errorPatterns.build.test(line));
    }
  }

  async detectRuntimeErrors() {
    // This would typically involve running the app and monitoring logs
    // For now, we'll check for common runtime error patterns in the code
    const files = this.getSourceFiles();
    const runtimeErrors = [];
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (this.errorPatterns.runtime.test(content)) {
          runtimeErrors.push({
            file,
            line: content.split('\\n').findIndex(line => 
              this.errorPatterns.runtime.test(line)
            ) + 1
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    });

    return runtimeErrors;
  }

  getSourceFiles() {
    const files = [];
    const walkDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            walkDir(fullPath);
          } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
            files.push(fullPath);
          }
        });
      } catch (error) {
        // Skip directories that can't be read
      }
    };
    
    walkDir(process.cwd());
    return files;
  }

  async generateErrorReport(errors) {
    const report = {
      timestamp: new Date().toISOString(),
      totalErrors: Object.values(errors).reduce((sum, arr) => sum + arr.length, 0),
      errorsByCategory: Object.entries(errors).reduce((acc, [category, errorList]) => {
        acc[category] = errorList.length;
        return acc;
      }, {}),
      details: errors
    };

    const reportFile = path.join(__dirname, 'reports', 'error-detection-report.json');
    fs.mkdirSync(path.dirname(reportFile), { recursive: true });
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(\`Error report generated: \${reportFile}\`);
  }

  async suggestFixes(errors) {
    const suggestions = [];
    
    if (errors.syntax.length > 0) {
      suggestions.push('Run ESLint with --fix to automatically fix syntax errors');
    }
    
    if (errors.type.length > 0) {
      suggestions.push('Review TypeScript configuration and type definitions');
    }
    
    if (errors.module.length > 0) {
      suggestions.push('Check module imports and dependencies');
    }
    
    if (errors.import.length > 0) {
      suggestions.push('Verify import paths and module resolution');
    }
    
    if (errors.build.length > 0) {
      suggestions.push('Review build configuration and dependencies');
    }
    
    if (errors.runtime.length > 0) {
      suggestions.push('Add proper error handling and validation');
    }

    if (suggestions.length > 0) {
      this.log('💡 Suggested fixes:');
      suggestions.forEach((suggestion, index) => {
        this.log(\`   \${index + 1}. \${suggestion}\`);
      });
    }
  }
}

// Run if called directly
if (require.main === module) {
  const detector = new IntelligentErrorDetector();
  detector.detectErrors().catch(console.error);
}

module.exports = IntelligentErrorDetector;`;

    const scriptPath = path.join(
      this.projectRoot,
      'automation',
      'intelligent-error-detector.cjs'
    );
    fs.writeFileSync(scriptPath, script);
    this.improvements.push('Created intelligent error detector');
    this.log('✅ Created intelligent error detector');
  }

  createPerformanceMonitor() {
    const script = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      lastUpdated: new Date().toISOString()
    };
    this.logFile = path.join(__dirname, 'logs', 'performance-monitor.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = \`[\${timestamp}] [\${level}] \${message}\\n\`;
    console.log(\`[\${level}] \${message}\`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async monitorPerformance() {
    this.log('⚡ Starting performance monitoring...');
    
    try {
      // Monitor build time
      const buildTime = await this.measureBuildTime();
      this.metrics.buildTime = buildTime;
      
      // Monitor bundle size
      const bundleSize = await this.measureBundleSize();
      this.metrics.bundleSize = bundleSize;
      
      // Monitor memory usage
      const memoryUsage = process.memoryUsage();
      this.metrics.memoryUsage = memoryUsage.heapUsed / 1024 / 1024; // MB
      
      // Monitor CPU usage
      const cpuUsage = process.cpuUsage();
      this.metrics.cpuUsage = cpuUsage.user / 1000000; // seconds
      
      this.metrics.lastUpdated = new Date().toISOString();
      
      await this.saveMetrics();
      await this.generatePerformanceReport();
      
      this.log('Performance monitoring completed');
      return this.metrics;
    } catch (error) {
      this.log(\`Performance monitoring failed: \${error.message}\`, 'ERROR');
      return null;
    }
  }

  async measureBuildTime() {
    const startTime = Date.now();
    try {
      execSync('npm run build', { stdio: 'pipe', cwd: process.cwd() });
      return Date.now() - startTime;
    } catch (error) {
      return -1; // Build failed
    }
  }

  async measureBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(buildDir)) {
        return 0;
      }
      
      const getDirSize = (dir) => {
        let size = 0;
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            size += getDirSize(filePath);
          } else {
            size += stat.size;
          }
        });
        
        return size;
      };
      
      return getDirSize(buildDir);
    } catch (error) {
      return 0;
    }
  }

  async saveMetrics() {
    const metricsFile = path.join(__dirname, 'reports', 'performance-metrics.json');
    fs.mkdirSync(path.dirname(metricsFile), { recursive: true });
    fs.writeFileSync(metricsFile, JSON.stringify(this.metrics, null, 2));
  }

  async generatePerformanceReport() {
    const report = {
      ...this.metrics,
      recommendations: this.generateRecommendations()
    };

    const reportFile = path.join(__dirname, 'reports', 'performance-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(\`Performance report generated: \${reportFile}\`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 60000) { // 1 minute
      recommendations.push('Consider optimizing build process - build time is high');
    }
    
    if (this.metrics.bundleSize > 5000000) { // 5MB
      recommendations.push('Consider code splitting - bundle size is large');
    }
    
    if (this.metrics.memoryUsage > 100) { // 100MB
      recommendations.push('Consider memory optimization - high memory usage detected');
    }
    
    return recommendations;
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.monitorPerformance().catch(console.error);
}

module.exports = PerformanceMonitor;`;

    const scriptPath = path.join(
      this.projectRoot,
      'automation',
      'performance-monitor.cjs'
    );
    fs.writeFileSync(scriptPath, script);
    this.improvements.push('Created performance monitor');
    this.log('✅ Created performance monitor');
  }

  createSecurityScanner() {
    const script = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityScanner {
  constructor() {
    this.vulnerabilities = [];
    this.securityIssues = [];
    this.logFile = path.join(__dirname, 'logs', 'security-scanner.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = \`[\${timestamp}] [\${level}] \${message}\\n\`;
    console.log(\`[\${level}] \${message}\`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async scanSecurity() {
    this.log('🔒 Starting security scan...');
    
    try {
      // Scan for vulnerabilities
      await this.scanVulnerabilities();
      
      // Scan for security issues in code
      await this.scanCodeSecurity();
      
      // Scan for sensitive data
      await this.scanSensitiveData();
      
      // Generate security report
      await this.generateSecurityReport();
      
      this.log('Security scan completed');
      return {
        vulnerabilities: this.vulnerabilities,
        securityIssues: this.securityIssues
      };
    } catch (error) {
      this.log(\`Security scan failed: \${error.message}\`, 'ERROR');
      return null;
    }
  }

  async scanVulnerabilities() {
    try {
      const result = execSync('npm audit --json', { 
        stdio: 'pipe', 
        cwd: process.cwd() 
      });
      const auditData = JSON.parse(result);
      
      if (auditData.vulnerabilities) {
        Object.entries(auditData.vulnerabilities).forEach(([name, vuln]) => {
          this.vulnerabilities.push({
            name,
            severity: vuln.severity,
            description: vuln.description,
            recommendation: vuln.recommendation
          });
        });
      }
    } catch (error) {
      this.log('Could not scan vulnerabilities', 'WARNING');
    }
  }

  async scanCodeSecurity() {
    const files = this.getSourceFiles();
    const securityPatterns = {
      hardcodedSecrets: /(password|secret|key|token)\\s*[:=]\\s*['"][^'"]+['"]/gi,
      evalUsage: /eval\\s*\\(/gi,
      innerHTML: /innerHTML\\s*=/gi,
      dangerousFunctions: /(document\\.write|setTimeout|setInterval)\\s*\\(/gi
    };

    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        Object.entries(securityPatterns).forEach(([patternName, pattern]) => {
          const matches = content.match(pattern);
          if (matches) {
            this.securityIssues.push({
              file,
              type: patternName,
              matches: matches.length,
              description: \`Potential \${patternName} found\`
            });
          }
        });
      } catch (error) {
        // Skip files that can't be read
      }
    });
  }

  async scanSensitiveData() {
    const sensitivePatterns = {
      apiKeys: /(api[_-]?key|apikey)\\s*[:=]\\s*['"][^'"]+['"]/gi,
      passwords: /(password|pwd)\\s*[:=]\\s*['"][^'"]+['"]/gi,
      tokens: /(token|access[_-]?token)\\s*[:=]\\s*['"][^'"]+['"]/gi
    };

    const files = this.getSourceFiles();
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        Object.entries(sensitivePatterns).forEach(([patternName, pattern]) => {
          const matches = content.match(pattern);
          if (matches) {
            this.securityIssues.push({
              file,
              type: 'sensitive_data',
              pattern: patternName,
              matches: matches.length,
              description: \`Potential \${patternName} found - review for sensitive data\`
            });
          }
        });
      } catch (error) {
        // Skip files that can't be read
      }
    });
  }

  getSourceFiles() {
    const files = [];
    const walkDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            walkDir(fullPath);
          } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
            files.push(fullPath);
          }
        });
      } catch (error) {
        // Skip directories that can't be read
      }
    };
    
    walkDir(process.cwd());
    return files;
  }

  async generateSecurityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      securityIssues: this.securityIssues,
      summary: {
        totalVulnerabilities: this.vulnerabilities.length,
        totalSecurityIssues: this.securityIssues.length,
        criticalIssues: this.vulnerabilities.filter(v => v.severity === 'critical').length
      }
    };

    const reportFile = path.join(__dirname, 'reports', 'security-report.json');
    fs.mkdirSync(path.dirname(reportFile), { recursive: true });
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(\`Security report generated: \${reportFile}\`);
  }
}

// Run if called directly
if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.scanSecurity().catch(console.error);
}

module.exports = SecurityScanner;`;

    const scriptPath = path.join(
      this.projectRoot,
      'automation',
      'security-scanner.cjs'
    );
    fs.writeFileSync(scriptPath, script);
    this.improvements.push('Created security scanner');
    this.log('✅ Created security scanner');
  }

  createGitWorkflowAutomator() {
    const script = `#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitWorkflowAutomator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(__dirname, 'logs', 'git-workflow.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = \`[\${timestamp}] [\${level}] \${message}\\n\`;
    console.log(\`[\${level}] \${message}\`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    this.log(\`Running: \${description}\`);
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log(\`✅ \${description} completed successfully\`);
      return { success: true, output: result };
    } catch (error) {
      this.log(\`❌ \${description} failed: \${error.message}\`, 'ERROR');
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async automateGitWorkflow() {
    this.log('🔄 Starting Git workflow automation...');
    
    try {
      // Check current branch
      const currentBranch = await this.getCurrentBranch();
      this.log(\`Current branch: \${currentBranch}\`);
      
      // Add all changes
      await this.runCommand('git add .', 'Add all changes');
      
      // Check if there are changes to commit
      const statusResult = await this.runCommand('git status --porcelain', 'Check git status');
      if (!statusResult.success || !statusResult.output.trim()) {
        this.log('No changes to commit');
        return;
      }
      
      // Commit changes
      const commitMessage = \`feat: Automated improvements and fixes - \${new Date().toISOString()}\`;
      await this.runCommand(\`git commit -m "\${commitMessage}"\`, 'Commit changes');
      
      // Push changes
      await this.runCommand('git push origin HEAD', 'Push changes');
      
      // If on a feature branch, create PR
      if (currentBranch !== 'main' && currentBranch !== 'master') {
        await this.createPullRequest(currentBranch);
      }
      
      this.log('Git workflow automation completed');
    } catch (error) {
      this.log(\`Git workflow automation failed: \${error.message}\`, 'ERROR');
    }
  }

  async getCurrentBranch() {
    try {
      const result = execSync('git branch --show-current', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      return result.trim();
    } catch (error) {
      return 'unknown';
    }
  }

  async createPullRequest(branchName) {
    try {
      // This would typically use GitHub CLI or API
      this.log(\`Would create PR for branch: \${branchName}\`);
      // For now, just log the intention
    } catch (error) {
      this.log(\`Could not create PR: \${error.message}\`, 'WARNING');
    }
  }

  async mergeToMain() {
    this.log('🔄 Starting merge to main...');
    
    try {
      // Switch to main branch
      await this.runCommand('git checkout main', 'Switch to main branch');
      
      // Pull latest changes
      await this.runCommand('git pull origin main', 'Pull latest changes');
      
      // Merge current branch
      const currentBranch = await this.getCurrentBranch();
      if (currentBranch !== 'main') {
        await this.runCommand(\`git merge \${currentBranch}\`, \`Merge \${currentBranch} into main\`);
      }
      
      // Push to main
      await this.runCommand('git push origin main', 'Push to main');
      
      this.log('Merge to main completed');
    } catch (error) {
      this.log(\`Merge to main failed: \${error.message}\`, 'ERROR');
    }
  }
}

// Run if called directly
if (require.main === module) {
  const automator = new GitWorkflowAutomator();
  const command = process.argv[2];
  
  if (command === 'merge') {
    automator.mergeToMain().catch(console.error);
  } else {
    automator.automateGitWorkflow().catch(console.error);
  }
}

module.exports = GitWorkflowAutomator;`;

    const scriptPath = path.join(
      this.projectRoot,
      'automation',
      'git-workflow-automator.cjs'
    );
    fs.writeFileSync(scriptPath, script);
    this.improvements.push('Created Git workflow automator');
    this.log('✅ Created Git workflow automator');
  }

  async run() {
    this.log('🚀 Starting Advanced Automation Improvements');
    this.log('='.repeat(60));

    try {
      // Create automation scripts
      this.createIntelligentErrorDetector();
      this.createPerformanceMonitor();
      this.createSecurityScanner();
      this.createGitWorkflowAutomator();

      // Run the new scripts
      await this.runCommand(
        'node automation/intelligent-error-detector.cjs',
        'Run error detector'
      );
      await this.runCommand(
        'node automation/performance-monitor.cjs',
        'Run performance monitor'
      );
      await this.runCommand(
        'node automation/security-scanner.cjs',
        'Run security scanner'
      );

      this.log('\\n📊 ADVANCED AUTOMATION IMPROVEMENTS COMPLETED');
      this.log('='.repeat(60));
      this.log(`Total improvements: ${this.improvements.length}`);
      this.improvements.forEach((improvement, index) => {
        this.log(`${index + 1}. ${improvement}`);
      });
    } catch (error) {
      this.log(
        `Advanced automation improvements failed: ${error.message}`,
        'ERROR'
      );
    }
  }
}

// Run the advanced automation improvements
if (require.main === module) {
  const improvements = new AdvancedAutomationImprovements();
  improvements.run().catch(console.error);
}

module.exports = AdvancedAutomationImprovements;
