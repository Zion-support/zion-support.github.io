#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/security-monitor.log');
    this.securityFile = path.join(this.projectRoot, 'logs/pm2/security-report.json');
    this.vulnerabilitiesFile = path.join(this.projectRoot, 'logs/pm2/vulnerabilities.json');
    this.startTime = Date.now();
    this.securityReport = {
      timestamp: new Date().toISOString(),
      vulnerabilities: [],
      dependencies: {},
      codeSecurity: {},
      recommendations: [],
      riskScore: 0
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = ['logs/pm2', 'logs/automation', 'logs/reports'];
    dirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async scanDependencies() {
    this.log('🔍 Scanning dependencies for vulnerabilities...');
    
    try {
      const vulnerabilities = [];
      
      // Run npm audit
      try {
        const auditResult = execSync('npm audit --json', {
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const audit = JSON.parse(auditResult);
        if (audit.vulnerabilities) {
          Object.entries(audit.vulnerabilities).forEach(([name, vuln]) => {
            vulnerabilities.push({
              type: 'dependency',
              name,
              severity: vuln.severity,
              title: vuln.title,
              description: vuln.description,
              recommendation: vuln.recommendation,
              cwe: vuln.cwe,
              cve: vuln.cve
            });
          });
        }
      } catch (error) {
        this.log(`NPM audit failed: ${error.message}`, 'WARN');
      }

      // Check for outdated packages
      try {
        const outdatedResult = execSync('npm outdated --json', {
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const outdated = JSON.parse(outdatedResult);
        Object.entries(outdated).forEach(([name, info]) => {
          vulnerabilities.push({
            type: 'outdated',
            name,
            current: info.current,
            wanted: info.wanted,
            latest: info.latest,
            severity: 'medium',
            recommendation: `Update ${name} from ${info.current} to ${info.latest}`
          });
        });
      } catch (error) {
        // No outdated packages or error
      }

      this.securityReport.dependencies = {
        totalVulnerabilities: vulnerabilities.length,
        critical: vulnerabilities.filter(v => v.severity === 'critical').length,
        high: vulnerabilities.filter(v => v.severity === 'high').length,
        moderate: vulnerabilities.filter(v => v.severity === 'moderate').length,
        low: vulnerabilities.filter(v => v.severity === 'low').length,
        vulnerabilities
      };

      this.log(`🔍 Dependency scan completed - ${vulnerabilities.length} issues found`);
      return vulnerabilities;
    } catch (error) {
      this.log(`❌ Dependency scan failed: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async scanCodeSecurity() {
    this.log('🔒 Scanning code for security issues...');
    
    try {
      const securityIssues = [];
      const sourceFiles = this.getSourceFiles();
      
      for (const file of sourceFiles) {
        const issues = await this.scanFileSecurity(file);
        securityIssues.push(...issues);
      }

      this.securityReport.codeSecurity = {
        totalIssues: securityIssues.length,
        critical: securityIssues.filter(i => i.severity === 'critical').length,
        high: securityIssues.filter(i => i.severity === 'high').length,
        medium: securityIssues.filter(i => i.severity === 'medium').length,
        low: securityIssues.filter(i => i.severity === 'low').length,
        issues: securityIssues
      };

      this.log(`🔒 Code security scan completed - ${securityIssues.length} issues found`);
      return securityIssues;
    } catch (error) {
      this.log(`❌ Code security scan failed: ${error.message}`, 'ERROR');
      return [];
    }
  }

  getSourceFiles() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'];
    const excludeDirs = ['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'];
    const files = [];

    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!excludeDirs.includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        });
      } catch (error) {
        // Skip inaccessible directories
      }
    };

    scanDirectory(this.projectRoot);
    return files;
  }

  async scanFileSecurity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(this.projectRoot, filePath);
      const issues = [];

      // Check for dangerous patterns
      const securityPatterns = [
        {
          name: 'eval usage',
          regex: /\beval\s*\(/g,
          severity: 'critical',
          description: 'eval() can execute arbitrary code and is a security risk',
          recommendation: 'Avoid eval() - use JSON.parse() or other safe alternatives'
        },
        {
          name: 'innerHTML with user input',
          regex: /\.innerHTML\s*=\s*[^;]*\+/g,
          severity: 'high',
          description: 'innerHTML with concatenation can lead to XSS attacks',
          recommendation: 'Use textContent or sanitize input before setting innerHTML'
        },
        {
          name: 'dangerous URLs',
          regex: /window\.location\s*=\s*[^;]*\+/g,
          severity: 'high',
          description: 'Dynamic URL assignment can lead to open redirects',
          recommendation: 'Validate URLs before assignment'
        },
        {
          name: 'localStorage with sensitive data',
          regex: /localStorage\.setItem\s*\(\s*['"][^'"]*['"]\s*,\s*[^)]*password[^)]*\)/gi,
          severity: 'high',
          description: 'Storing passwords in localStorage is insecure',
          recommendation: 'Use secure storage or server-side session management'
        },
        {
          name: 'dangerous regex',
          regex: /new RegExp\s*\([^)]*\+[^)]*\)/g,
          severity: 'medium',
          description: 'Dynamic regex construction can lead to ReDoS attacks',
          recommendation: 'Use static regex patterns or validate input'
        },
        {
          name: 'unsafe JSON parsing',
          regex: /JSON\.parse\s*\([^)]*\+/g,
          severity: 'medium',
          description: 'Dynamic JSON parsing can be dangerous',
          recommendation: 'Validate JSON input before parsing'
        },
        {
          name: 'console.log with sensitive data',
          regex: /console\.(log|warn|error)\s*\([^)]*password[^)]*\)/gi,
          severity: 'low',
          description: 'Logging sensitive data can expose credentials',
          recommendation: 'Remove or mask sensitive data in logs'
        },
        {
          name: 'hardcoded secrets',
          regex: /(password|secret|key|token)\s*[:=]\s*['"][^'"]{8,}['"]/gi,
          severity: 'critical',
          description: 'Hardcoded secrets should not be in source code',
          recommendation: 'Use environment variables for secrets'
        }
      ];

      securityPatterns.forEach(pattern => {
        const matches = content.match(pattern.regex);
        if (matches) {
          matches.forEach(match => {
            issues.push({
              file: relativePath,
              type: 'security',
              pattern: pattern.name,
              severity: pattern.severity,
              description: pattern.description,
              recommendation: pattern.recommendation,
              match: match.substring(0, 100) + '...',
              line: this.getLineNumber(content, match)
            });
          });
        }
      });

      return issues;
    } catch (error) {
      this.log(`Error scanning file ${filePath}: ${error.message}`, 'ERROR');
      return [];
    }
  }

  getLineNumber(content, match) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(match)) {
        return i + 1;
      }
    }
    return 0;
  }

  async scanConfigurationSecurity() {
    this.log('⚙️ Scanning configuration files for security issues...');
    
    try {
      const configIssues = [];
      const configFiles = [
        'package.json',
        'next.config.js',
        'vite.config.js',
        'webpack.config.js',
        '.env',
        '.env.local',
        'docker-compose.yml',
        'Dockerfile'
      ];

      for (const configFile of configFiles) {
        if (fs.existsSync(configFile)) {
          const issues = await this.scanConfigFile(configFile);
          configIssues.push(...issues);
        }
      }

      this.log(`⚙️ Configuration scan completed - ${configIssues.length} issues found`);
      return configIssues;
    } catch (error) {
      this.log(`❌ Configuration scan failed: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async scanConfigFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const issues = [];
      const relativePath = path.relative(this.projectRoot, filePath);

      // Check for common configuration security issues
      const configPatterns = [
        {
          name: 'exposed secrets',
          regex: /(password|secret|key|token)\s*[:=]\s*['"][^'"]+['"]/gi,
          severity: 'critical',
          description: 'Secrets should not be hardcoded in configuration files'
        },
        {
          name: 'debug mode enabled',
          regex: /debug\s*[:=]\s*true/gi,
          severity: 'medium',
          description: 'Debug mode should be disabled in production'
        },
        {
          name: 'cors wildcard',
          regex: /cors\s*[:=]\s*['"]\*['"]/gi,
          severity: 'high',
          description: 'CORS wildcard allows requests from any origin'
        },
        {
          name: 'insecure protocols',
          regex: /https?:\/\/[^s]/gi,
          severity: 'medium',
          description: 'Use HTTPS instead of HTTP for external resources'
        }
      ];

      configPatterns.forEach(pattern => {
        const matches = content.match(pattern.regex);
        if (matches) {
          matches.forEach(match => {
            issues.push({
              file: relativePath,
              type: 'configuration',
              pattern: pattern.name,
              severity: pattern.severity,
              description: pattern.description,
              match: match.substring(0, 100) + '...',
              line: this.getLineNumber(content, match)
            });
          });
        }
      });

      return issues;
    } catch (error) {
      this.log(`Error scanning config file ${filePath}: ${error.message}`, 'ERROR');
      return [];
    }
  }

  calculateRiskScore() {
    const deps = this.securityReport.dependencies;
    const code = this.securityReport.codeSecurity;
    
    let score = 0;
    
    // Dependency vulnerabilities
    if (deps.critical > 0) score += deps.critical * 10;
    if (deps.high > 0) score += deps.high * 5;
    if (deps.moderate > 0) score += deps.moderate * 2;
    if (deps.low > 0) score += deps.low * 1;
    
    // Code security issues
    if (code.critical > 0) score += code.critical * 15;
    if (code.high > 0) score += code.high * 8;
    if (code.medium > 0) score += code.medium * 3;
    if (code.low > 0) score += code.low * 1;
    
    // Normalize to 0-100
    this.securityReport.riskScore = Math.min(100, score);
    
    return this.securityReport.riskScore;
  }

  generateRecommendations() {
    const recommendations = [];
    const deps = this.securityReport.dependencies;
    const code = this.securityReport.codeSecurity;
    const riskScore = this.securityReport.riskScore;

    // High priority recommendations
    if (deps.critical > 0) {
      recommendations.push({
        priority: 'critical',
        category: 'dependencies',
        message: `${deps.critical} critical dependency vulnerabilities found`,
        action: 'Run npm audit fix --force to fix critical vulnerabilities',
        impact: 'High - immediate security risk'
      });
    }

    if (code.critical > 0) {
      recommendations.push({
        priority: 'critical',
        category: 'code',
        message: `${code.critical} critical code security issues found`,
        action: 'Review and fix critical security issues immediately',
        impact: 'High - immediate security risk'
      });
    }

    // Medium priority recommendations
    if (deps.high > 0) {
      recommendations.push({
        priority: 'high',
        category: 'dependencies',
        message: `${deps.high} high-severity dependency vulnerabilities found`,
        action: 'Update vulnerable dependencies to secure versions',
        impact: 'High - potential security risk'
      });
    }

    if (code.high > 0) {
      recommendations.push({
        priority: 'high',
        category: 'code',
        message: `${code.high} high-severity code security issues found`,
        action: 'Review and fix high-priority security issues',
        impact: 'High - potential security risk'
      });
    }

    // General recommendations
    if (riskScore > 50) {
      recommendations.push({
        priority: 'medium',
        category: 'general',
        message: 'High overall security risk score',
        action: 'Implement comprehensive security review and fixes',
        impact: 'Medium - overall security posture needs improvement'
      });
    }

    if (deps.outdated > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'dependencies',
        message: 'Outdated dependencies detected',
        action: 'Update dependencies to latest versions',
        impact: 'Medium - may contain security fixes'
      });
    }

    this.securityReport.recommendations = recommendations;
    this.log(`💡 Generated ${recommendations.length} security recommendations`);
  }

  async saveSecurityReport() {
    try {
      fs.writeFileSync(this.securityFile, JSON.stringify(this.securityReport, null, 2));
      this.log(`💾 Security report saved: ${this.securityFile}`);
    } catch (error) {
      this.log(`❌ Error saving security report: ${error.message}`, 'ERROR');
    }
  }

  displaySummary() {
    console.log('\n🔒 SECURITY MONITOR SUMMARY');
    console.log('===========================');
    
    const deps = this.securityReport.dependencies;
    const code = this.securityReport.codeSecurity;
    const riskScore = this.securityReport.riskScore;
    const recommendations = this.securityReport.recommendations;

    console.log(`📊 Risk Score: ${riskScore}/100`);
    console.log(`🔴 Critical: ${deps.critical + code.critical}`);
    console.log(`🟠 High: ${deps.high + code.high}`);
    console.log(`🟡 Medium: ${deps.moderate + code.medium}`);
    console.log(`🟢 Low: ${deps.low + code.low}`);
    
    console.log(`\n📦 Dependencies:`);
    console.log(`   Total Issues: ${deps.totalVulnerabilities || 0}`);
    console.log(`   Critical: ${deps.critical || 0}`);
    console.log(`   High: ${deps.high || 0}`);
    console.log(`   Moderate: ${deps.moderate || 0}`);
    console.log(`   Low: ${deps.low || 0}`);
    
    console.log(`\n💻 Code Security:`);
    console.log(`   Total Issues: ${code.totalIssues || 0}`);
    console.log(`   Critical: ${code.critical || 0}`);
    console.log(`   High: ${code.high || 0}`);
    console.log(`   Medium: ${code.medium || 0}`);
    console.log(`   Low: ${code.low || 0}`);

    if (recommendations.length > 0) {
      console.log('\n💡 Top Recommendations:');
      recommendations.slice(0, 5).forEach((rec, index) => {
        console.log(`  ${index + 1}. [${rec.priority.toUpperCase()}] ${rec.message}`);
        console.log(`     → ${rec.action}`);
      });
    }

    console.log(`\n📄 Security report saved to: ${this.securityFile}`);
  }

  async run() {
    this.log('🚀 Starting Security Monitor...');
    
    try {
      // Run all security scans
      await this.scanDependencies();
      await this.scanCodeSecurity();
      await this.scanConfigurationSecurity();
      
      // Calculate risk score
      this.calculateRiskScore();
      
      // Generate recommendations
      this.generateRecommendations();
      
      // Save report
      await this.saveSecurityReport();
      
      // Display summary
      this.displaySummary();
      
      this.log('✅ Security Monitor completed successfully');
    } catch (error) {
      this.log(`❌ Security Monitor failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new SecurityMonitor();
  monitor.run();
}

module.exports = SecurityMonitor;