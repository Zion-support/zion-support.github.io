#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityAutomation {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 3600000; // 1 hour
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.workingDir = process.cwd();
    this.securityData = {};
    this.vulnerabilityHistory = [];
    this.securityScore = 100;
    this.criticalThreshold = 5;
    this.highThreshold = 10;
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async runSecurityAudit() {
    try {
      this.log('🛡️ Running security audit...', 'info');
      
      const auditResults = {
        npm: await this.runNpmAudit(),
        dependencies: await this.analyzeDependencies(),
        code: await this.analyzeCodeSecurity(),
        configuration: await this.analyzeConfigurationSecurity(),
        timestamp: new Date().toISOString()
      };

      this.securityData.audit = auditResults;
      this.log('Security audit completed', 'info');
      return auditResults;
    } catch (error) {
      this.log(`Security audit failed: ${error.message}`, 'error');
      return null;
    }
  }

  async runNpmAudit() {
    try {
      this.log('Running npm audit...', 'info');
      
      const result = execSync('npm audit --json', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(result);
      
      const summary = {
        vulnerabilities: auditData.metadata?.vulnerabilities || {},
        totalVulnerabilities: 0,
        critical: 0,
        high: 0,
        moderate: 0,
        low: 0,
        info: 0,
        recommendations: []
      };

      // Count vulnerabilities by severity
      if (auditData.vulnerabilities) {
        for (const [pkg, vuln] of Object.entries(auditData.vulnerabilities)) {
          const severity = vuln.severity || 'moderate';
          summary[severity]++;
          summary.totalVulnerabilities++;
        }
      }

      // Generate recommendations
      if (summary.critical > 0) {
        summary.recommendations.push(`CRITICAL: ${summary.critical} critical vulnerabilities found - update immediately`);
      }
      if (summary.high > 0) {
        summary.recommendations.push(`HIGH: ${summary.high} high severity vulnerabilities found - update soon`);
      }
      if (summary.moderate > 0) {
        summary.recommendations.push(`MODERATE: ${summary.moderate} moderate vulnerabilities found - review and update`);
      }

      return {
        ...summary,
        rawData: auditData,
        status: summary.critical > 0 ? 'critical' : summary.high > 0 ? 'high' : summary.moderate > 0 ? 'moderate' : 'secure'
      };
    } catch (error) {
      return {
        error: error.message,
        status: 'failed',
        totalVulnerabilities: 0
      };
    }
  }

  async analyzeDependencies() {
    try {
      this.log('Analyzing dependencies for security...', 'info');
      
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const analysis = {
        totalDependencies: Object.keys(dependencies).length,
        outdated: [],
        deprecated: [],
        securityIssues: [],
        recommendations: []
      };

      // Check for outdated packages
      try {
        const outdated = execSync('npm outdated --json', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        if (outdated.trim()) {
          const outdatedData = JSON.parse(outdated);
          analysis.outdated = Object.keys(outdatedData);
          analysis.recommendations.push(`${analysis.outdated.length} packages are outdated - update for security`);
        }
      } catch (error) {
        // No outdated packages
      }

      // Check for deprecated packages
      try {
        const deprecationCheck = execSync('npm ls --json', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const depData = JSON.parse(deprecationCheck);
        if (depData.deprecated) {
          analysis.deprecated = Object.keys(depData.deprecated);
          analysis.recommendations.push(`${analysis.deprecated.length} packages are deprecated - replace with maintained alternatives`);
        }
      } catch (error) {
        // Error checking deprecations
      }

      return analysis;
    } catch (error) {
      return {
        error: error.message,
        totalDependencies: 0
      };
    }
  }

  async analyzeCodeSecurity() {
    try {
      this.log('Analyzing code for security issues...', 'info');
      
      const analysis = {
        issues: [],
        patterns: [],
        recommendations: []
      };

      // Check for common security anti-patterns
      const securityPatterns = [
        { pattern: 'eval\\(', severity: 'critical', description: 'eval() usage detected - security risk' },
        { pattern: 'innerHTML', severity: 'high', description: 'innerHTML usage - potential XSS risk' },
        { pattern: 'document\\.write', severity: 'high', description: 'document.write usage - potential XSS risk' },
        { pattern: 'localStorage', severity: 'moderate', description: 'localStorage usage - ensure sensitive data not stored' },
        { pattern: 'sessionStorage', severity: 'moderate', description: 'sessionStorage usage - ensure sensitive data not stored' },
        { pattern: 'console\\.log', severity: 'low', description: 'console.log in production - remove for security' }
      ];

      const srcDir = path.join(this.workingDir, 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.findSourceFiles(srcDir);
        
        for (const file of files) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            
            for (const pattern of securityPatterns) {
              const matches = content.match(new RegExp(pattern.pattern, 'g'));
              if (matches) {
                analysis.issues.push({
                  file: path.relative(this.workingDir, file),
                  pattern: pattern.pattern,
                  severity: pattern.severity,
                  description: pattern.description,
                  count: matches.length
                });
              }
            }
          } catch (readError) {
            // Skip files that can't be read
          }
        }
      }

      // Generate recommendations based on findings
      const criticalIssues = analysis.issues.filter(i => i.severity === 'critical');
      const highIssues = analysis.issues.filter(i => i.severity === 'high');
      
      if (criticalIssues.length > 0) {
        analysis.recommendations.push(`CRITICAL: ${criticalIssues.length} critical security issues found - fix immediately`);
      }
      if (highIssues.length > 0) {
        analysis.recommendations.push(`HIGH: ${highIssues.length} high security issues found - fix soon`);
      }

      return analysis;
    } catch (error) {
      return {
        error: error.message,
        issues: [],
        recommendations: []
      };
    }
  }

  findSourceFiles(dir, files = []) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          this.findSourceFiles(fullPath, files);
        } else if (stat.isFile() && ['.js', '.jsx', '.ts', '.tsx'].includes(path.extname(item))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return files;
  }

  async analyzeConfigurationSecurity() {
    try {
      this.log('Analyzing configuration security...', 'info');
      
      const analysis = {
        issues: [],
        recommendations: []
      };

      // Check package.json for security-related configurations
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      
      // Check for security-related scripts
      if (packageJson.scripts) {
        const scripts = Object.keys(packageJson.scripts);
        if (!scripts.includes('security:audit')) {
          analysis.recommendations.push('Add security:audit script to package.json');
        }
        if (!scripts.includes('security:fix')) {
          analysis.recommendations.push('Add security:fix script to package.json');
        }
      }

      // Check for security-related dependencies
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      const securityDeps = ['helmet', 'cors', 'helmet-csp', 'rate-limiter-flexible'];
      
      for (const dep of securityDeps) {
        if (!dependencies[dep]) {
          analysis.recommendations.push(`Consider adding ${dep} for enhanced security`);
        }
      }

      // Check for environment configuration
      const envFiles = ['.env', '.env.local', '.env.production'];
      for (const envFile of envFiles) {
        if (fs.existsSync(path.join(this.workingDir, envFile))) {
          analysis.recommendations.push(`Ensure ${envFile} is not committed to version control`);
        }
      }

      return analysis;
    } catch (error) {
      return {
        error: error.message,
        issues: [],
        recommendations: []
      };
    }
  }

  async runSecurityUpdates() {
    try {
      this.log('🔄 Running security updates...', 'info');
      
      const updates = {
        npm: await this.updateNpmPackages(),
        security: await this.fixSecurityIssues(),
        timestamp: new Date().toISOString()
      };

      this.securityData.updates = updates;
      this.log('Security updates completed', 'info');
      return updates;
    } catch (error) {
      this.log(`Security updates failed: ${error.message}`, 'error');
      return null;
    }
  }

  async updateNpmPackages() {
    try {
      this.log('Updating npm packages...', 'info');
      
      // Check for security updates
      const auditFix = execSync('npm audit fix --json', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const fixData = JSON.parse(auditFix);
      
      return {
        status: 'completed',
        fixed: fixData.metadata?.vulnerabilities || {},
        message: 'Security vulnerabilities fixed'
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message
      };
    }
  }

  async fixSecurityIssues() {
    try {
      this.log('Fixing security issues...', 'info');
      
      const fixes = [];
      
      // Try to fix critical security issues
      try {
        execSync('npm audit fix --force', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        fixes.push('Forced security fixes applied');
      } catch (error) {
        fixes.push('Some security issues require manual intervention');
      }

      return {
        status: 'completed',
        fixes,
        message: 'Security fixes applied where possible'
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message
      };
    }
  }

  calculateSecurityScore() {
    let score = 100;
    
    if (this.securityData.audit?.npm) {
      const npm = this.securityData.audit.npm;
      score -= npm.critical * 20; // Critical vulnerabilities heavily penalize
      score -= npm.high * 10;     // High vulnerabilities moderately penalize
      score -= npm.moderate * 5;  // Moderate vulnerabilities slightly penalize
      score -= npm.low * 2;       // Low vulnerabilities minimally penalize
    }
    
    if (this.securityData.audit?.code?.issues) {
      const codeIssues = this.securityData.audit.code.issues;
      const criticalCode = codeIssues.filter(i => i.severity === 'critical').length;
      const highCode = codeIssues.filter(i => i.severity === 'high').length;
      
      score -= criticalCode * 15;
      score -= highCode * 8;
    }
    
    return Math.max(0, score);
  }

  async generateSecurityReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          securityScore: this.calculateSecurityScore(),
          totalVulnerabilities: this.securityData.audit?.npm?.totalVulnerabilities || 0,
          criticalIssues: this.securityData.audit?.npm?.critical || 0,
          highIssues: this.securityData.audit?.npm?.high || 0,
          status: this.securityData.audit?.npm?.status || 'unknown'
        },
        audit: this.securityData.audit,
        updates: this.securityData.updates,
        recommendations: this.generateSecurityRecommendations(),
        history: this.vulnerabilityHistory.slice(-5) // Last 5 runs
      };

      // Save report
      const reportPath = path.join(this.workingDir, 'logs', 'security-automation-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log('Security report generated', 'info');
      return report;
    } catch (error) {
      this.log(`Report generation failed: ${error.message}`, 'error');
      return null;
    }
  }

  generateSecurityRecommendations() {
    const recommendations = [];
    
    // NPM audit recommendations
    if (this.securityData.audit?.npm) {
      recommendations.push(...this.securityData.audit.npm.recommendations);
    }
    
    // Dependency recommendations
    if (this.securityData.audit?.dependencies) {
      recommendations.push(...this.securityData.audit.dependencies.recommendations);
    }
    
    // Code security recommendations
    if (this.securityData.audit?.code) {
      recommendations.push(...this.securityData.audit.code.recommendations);
    }
    
    // Configuration recommendations
    if (this.securityData.audit?.configuration) {
      recommendations.push(...this.securityData.audit.configuration.recommendations);
    }
    
    // General security recommendations
    recommendations.push('Enable automated security scanning in CI/CD pipeline');
    recommendations.push('Regularly review and update security policies');
    recommendations.push('Implement security headers and CSP policies');
    recommendations.push('Use environment variables for sensitive configuration');
    
    return [...new Set(recommendations)]; // Remove duplicates
  }

  async run() {
    this.log('🛡️ Starting Security Automation...', 'info');
    
    try {
      await this.runSecurityAudit();
      await this.runSecurityUpdates();
      
      const report = await this.generateSecurityReport();
      
      if (report) {
        this.log(`✅ Security automation completed:`, 'info');
        this.log(`   Security Score: ${report.summary.securityScore}/100`, 'info');
        this.log(`   Total Vulnerabilities: ${report.summary.totalVulnerabilities}`, 'info');
        this.log(`   Critical Issues: ${report.summary.criticalIssues}`, 'info');
        this.log(`   High Issues: ${report.summary.highIssues}`, 'info');
        
        if (report.recommendations.length > 0) {
          this.log(`   Recommendations: ${report.recommendations.length}`, 'info');
        }
        
        // Store in history
        this.vulnerabilityHistory.push(report);
        if (this.vulnerabilityHistory.length > 10) {
          this.vulnerabilityHistory.shift();
        }
      }
      
    } catch (error) {
      this.log(`Security automation failed: ${error.message}`, 'error');
    }
  }

  start() {
    this.log('🔄 Security automation started with interval:', 'info');
    this.log(`   Interval: ${this.interval / 1000} seconds`, 'info');
    this.log(`   Working directory: ${this.workingDir}`, 'info');
    
    // Run immediately
    this.run();
    
    // Set up interval
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const security = new SecurityAutomation();
  security.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    security.log('🛑 Security automation shutting down...', 'info');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    security.log('🛑 Security automation shutting down...', 'info');
    process.exit(0);
  });
}

module.exports = SecurityAutomation;