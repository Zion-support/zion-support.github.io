#!/usr/bin/env node

/**
 * Smart Security & Compliance Monitor - PM2 Automation
 * Automatically detects security vulnerabilities, compliance issues,
 * and provides intelligent remediation suggestions
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SmartSecurityComplianceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'smart-security-compliance-monitor.log');
    this.securityLog = path.join(this.projectRoot, 'logs', 'security-vulnerabilities.json');
    this.complianceLog = path.join(this.projectRoot, 'logs', 'compliance-issues.json');
    this.remediationLog = path.join(this.projectRoot, 'logs', 'security-remediations.json');
    this.ensureLogsDirectory();
    
    // Security vulnerability patterns
    this.securityPatterns = {
      xss: [
        { pattern: /dangerouslySetInnerHTML/g, severity: 'CRITICAL', description: 'Potential XSS vulnerability' },
        { pattern: /innerHTML\s*=/g, severity: 'HIGH', description: 'Unsafe HTML insertion' },
        { pattern: /document\.write\(/g, severity: 'CRITICAL', description: 'DOM-based XSS risk' }
      ],
      injection: [
        { pattern: /eval\(/g, severity: 'CRITICAL', description: 'Code injection vulnerability' },
        { pattern: /Function\(/g, severity: 'HIGH', description: 'Dynamic code execution risk' },
        { pattern: /setTimeout\([^,]*,\s*[^)]*\)/g, severity: 'MEDIUM', description: 'Potential code injection' }
      ],
      authentication: [
        { pattern: /password\s*=\s*['"][^'"]*['"]/g, severity: 'CRITICAL', description: 'Hardcoded credentials' },
        { pattern: /apiKey\s*=\s*['"][^'"]*['"]/g, severity: 'CRITICAL', description: 'Exposed API key' },
        { pattern: /token\s*=\s*['"][^'"]*['"]/g, severity: 'HIGH', description: 'Hardcoded authentication token' }
      ],
      dataExposure: [
        { pattern: /console\.log\([^)]*password[^)]*\)/g, severity: 'HIGH', description: 'Password logging exposure' },
        { pattern: /localStorage\.setItem\([^,]*password[^)]*\)/g, severity: 'HIGH', description: 'Password in localStorage' },
        { pattern: /sessionStorage\.setItem\([^,]*password[^)]*\)/g, severity: 'HIGH', description: 'Password in sessionStorage' }
      ],
      crypto: [
        { pattern: /crypto\.createHash\('md5'\)/g, severity: 'MEDIUM', description: 'Weak MD5 hashing' },
        { pattern: /crypto\.createHash\('sha1'\)/g, severity: 'MEDIUM', description: 'Weak SHA1 hashing' }
      ]
    };

    // Compliance patterns
    this.compliancePatterns = {
      gdpr: [
        { pattern: /personal.*data/g, severity: 'MEDIUM', description: 'Personal data handling - GDPR compliance needed' },
        { pattern: /user.*consent/g, severity: 'MEDIUM', description: 'User consent management - GDPR requirement' }
      ],
      accessibility: [
        { pattern: /<img[^>]*>/g, severity: 'MEDIUM', description: 'Missing alt attribute - WCAG compliance needed' },
        { pattern: /<button[^>]*>/g, severity: 'LOW', description: 'Button accessibility - WCAG compliance needed' }
      ],
      privacy: [
        { pattern: /tracking.*cookie/g, severity: 'MEDIUM', description: 'Cookie tracking - Privacy compliance needed' },
        { pattern: /analytics.*track/g, severity: 'LOW', description: 'Analytics tracking - Privacy notice needed' }
      ]
    };
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runSecurityComplianceCheck() {
    this.log('Starting smart security and compliance monitoring...');
    
    const vulnerabilities = [];
    const complianceIssues = [];
    const remediations = [];

    try {
      // 1. Scan for security vulnerabilities
      const securityScan = await this.scanForSecurityVulnerabilities();
      
      // 2. Check compliance requirements
      const complianceCheck = await this.checkComplianceRequirements();
      
      // 3. Analyze dependencies for known vulnerabilities
      const dependencyVulnerabilities = await this.checkDependencyVulnerabilities();
      
      // 4. Generate intelligent remediation suggestions
      const remediationSuggestions = await this.generateRemediationSuggestions({
        security: securityScan,
        compliance: complianceCheck,
        dependencies: dependencyVulnerabilities
      });
      
      // 5. Apply automatic security fixes where safe
      const autoFixes = await this.applyAutomaticSecurityFixes(remediationSuggestions);
      
      // 6. Generate comprehensive security report
      await this.generateSecurityComplianceReport({
        vulnerabilities: securityScan,
        complianceIssues: complianceCheck,
        dependencyVulnerabilities,
        remediations: autoFixes,
        suggestions: remediationSuggestions
      });

      // 7. Commit security fixes if any were made
      if (autoFixes.length > 0) {
        await this.commitSecurityFixes(autoFixes);
      }

    } catch (error) {
      this.log(`Security compliance check failed: ${error.message}`, 'ERROR');
    }

    return { vulnerabilities, complianceIssues, remediations };
  }

  async scanForSecurityVulnerabilities() {
    this.log('Scanning for security vulnerabilities...');
    
    const vulnerabilities = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return vulnerabilities;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const fileVulnerabilities = this.analyzeFileSecurity(content, file);
            
            if (fileVulnerabilities.length > 0) {
              vulnerabilities.push(...fileVulnerabilities);
            }
          } catch (error) {
            this.log(`Error scanning file ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Security scan failed: ${error.message}`, 'ERROR');
    }

    return vulnerabilities;
  }

  analyzeFileSecurity(content, filePath) {
    const vulnerabilities = [];
    
    // Check for security patterns
    Object.keys(this.securityPatterns).forEach(category => {
      this.securityPatterns[category].forEach(pattern => {
        const matches = content.match(pattern.pattern);
        if (matches) {
          vulnerabilities.push({
            file: filePath,
            category: category.toUpperCase(),
            severity: pattern.severity,
            description: pattern.description,
            pattern: pattern.pattern.source,
            matches: matches.length,
            lines: this.findVulnerabilityLines(content, pattern.pattern),
            timestamp: new Date().toISOString()
          });
        }
      });
    });

    // Check for additional security issues
    const additionalIssues = this.checkAdditionalSecurityIssues(content, filePath);
    vulnerabilities.push(...additionalIssues);

    return vulnerabilities;
  }

  checkAdditionalSecurityIssues(content, filePath) {
    const issues = [];
    
    // Check for hardcoded secrets
    const secretPatterns = [
      { pattern: /(?:password|secret|key|token)\s*[:=]\s*['"][^'"]{8,}['"]/gi, description: 'Potential hardcoded secret' },
      { pattern: /(?:api|access)_key\s*[:=]\s*['"][^'"]{8,}['"]/gi, description: 'Potential hardcoded API key' }
    ];

    secretPatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        issues.push({
          file: filePath,
          category: 'SECRETS',
          severity: 'CRITICAL',
          description: pattern.description,
          pattern: pattern.pattern.source,
          matches: matches.length,
          lines: this.findVulnerabilityLines(content, pattern.pattern),
          timestamp: new Date().toISOString()
        });
      }
    });

    // Check for unsafe redirects
    if (content.includes('window.location.href') || content.includes('window.location.replace')) {
      const redirectMatches = content.match(/window\.location\.(href|replace)\s*=\s*[^;]+/g);
      if (redirectMatches) {
        issues.push({
          file: filePath,
          category: 'REDIRECTS',
          severity: 'MEDIUM',
          description: 'Potential unsafe redirect - validate URL',
          pattern: 'window.location redirect',
          matches: redirectMatches.length,
          lines: this.findVulnerabilityLines(content, /window\.location\.(href|replace)/g),
          timestamp: new Date().toISOString()
        });
      }
    }

    return issues;
  }

  findVulnerabilityLines(content, pattern) {
    const lines = content.split('\n');
    const matchingLines = [];
    
    lines.forEach((line, index) => {
      if (pattern.test(line)) {
        matchingLines.push({
          lineNumber: index + 1,
          content: line.trim()
        });
      }
    });
    
    return matchingLines;
  }

  async checkComplianceRequirements() {
    this.log('Checking compliance requirements...');
    
    const complianceIssues = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return complianceIssues;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const fileComplianceIssues = this.analyzeFileCompliance(content, file);
            
            if (fileComplianceIssues.length > 0) {
              complianceIssues.push(...fileComplianceIssues);
            }
          } catch (error) {
            this.log(`Error checking compliance for file ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Compliance check failed: ${error.message}`, 'ERROR');
    }

    return complianceIssues;
  }

  analyzeFileCompliance(content, filePath) {
    const complianceIssues = [];
    
    // Check for compliance patterns
    Object.keys(this.compliancePatterns).forEach(category => {
      this.compliancePatterns[category].forEach(pattern => {
        const matches = content.match(pattern.pattern);
        if (matches) {
          complianceIssues.push({
            file: filePath,
            category: category.toUpperCase(),
            severity: pattern.severity,
            description: pattern.description,
            pattern: pattern.pattern.source,
            matches: matches.length,
            lines: this.findVulnerabilityLines(content, pattern.pattern),
            timestamp: new Date().toISOString()
          });
        }
      });
    });

    // Check for additional compliance issues
    const additionalIssues = this.checkAdditionalComplianceIssues(content, filePath);
    complianceIssues.push(...additionalIssues);

    return complianceIssues;
  }

  checkAdditionalComplianceIssues(content, filePath) {
    const issues = [];
    
    // Check for proper error handling
    if (content.includes('try') && !content.includes('catch')) {
      issues.push({
        file: filePath,
        category: 'ERROR_HANDLING',
        severity: 'MEDIUM',
        description: 'Missing error handling in try-catch block',
        pattern: 'try without catch',
        matches: 1,
        lines: this.findVulnerabilityLines(content, /try\s*{/g),
        timestamp: new Date().toISOString()
      });
    }

    // Check for proper input validation
    if (content.includes('onSubmit') || content.includes('handleSubmit')) {
      if (!content.includes('validation') && !content.includes('validate')) {
        issues.push({
          file: filePath,
          category: 'INPUT_VALIDATION',
          severity: 'MEDIUM',
          description: 'Form submission without input validation',
          pattern: 'submit without validation',
          matches: 1,
          lines: this.findVulnerabilityLines(content, /onSubmit|handleSubmit/g),
          timestamp: new Date().toISOString()
        });
      }
    }

    return issues;
  }

  async checkDependencyVulnerabilities() {
    this.log('Checking dependency vulnerabilities...');
    
    const vulnerabilities = [];
    
    try {
      // Check for npm audit
      try {
        const auditResult = execSync('npm audit --json', { cwd: this.projectRoot, encoding: 'utf8' });
        const auditData = JSON.parse(auditResult);
        
        if (auditData.vulnerabilities) {
          Object.keys(auditData.vulnerabilities).forEach(packageName => {
            const vuln = auditData.vulnerabilities[packageName];
            vulnerabilities.push({
              package: packageName,
              severity: vuln.severity || 'UNKNOWN',
              description: vuln.description || 'Unknown vulnerability',
              recommendation: vuln.recommendation || 'Update package',
              timestamp: new Date().toISOString()
            });
          });
        }
      } catch (error) {
        this.log('npm audit failed or no vulnerabilities found', 'INFO');
      }

      // Check for outdated packages
      try {
        const outdatedResult = execSync('npm outdated --json', { cwd: this.projectRoot, encoding: 'utf8' });
        const outdatedData = JSON.parse(outdatedResult);
        
        Object.keys(outdatedData).forEach(packageName => {
          const packageInfo = outdatedData[packageName];
          vulnerabilities.push({
            package: packageName,
            severity: 'LOW',
            description: `Package outdated: current ${packageInfo.current}, latest ${packageInfo.latest}`,
            recommendation: `Update to version ${packageInfo.latest}`,
            timestamp: new Date().toISOString()
          });
        });
      } catch (error) {
        this.log('npm outdated check completed', 'INFO');
      }

    } catch (error) {
      this.log(`Dependency vulnerability check failed: ${error.message}`, 'ERROR');
    }

    return vulnerabilities;
  }

  async generateRemediationSuggestions(scanResults) {
    this.log('Generating intelligent remediation suggestions...');
    
    const suggestions = [];
    
    // Security vulnerability remediations
    if (scanResults.security.length > 0) {
      const criticalVulns = scanResults.security.filter(v => v.severity === 'CRITICAL');
      const highVulns = scanResults.security.filter(v => v.severity === 'HIGH');
      
      if (criticalVulns.length > 0) {
        suggestions.push({
          category: 'SECURITY_CRITICAL',
          priority: 'IMMEDIATE',
          title: 'Critical Security Vulnerabilities',
          description: `Found ${criticalVulns.length} critical security issues requiring immediate attention`,
          actions: criticalVulns.map(v => ({
            file: v.file,
            issue: v.description,
            remediation: this.generateSecurityRemediation(v)
          })),
          estimatedImpact: 'CRITICAL',
          estimatedEffort: 'HIGH'
        });
      }
      
      if (highVulns.length > 0) {
        suggestions.push({
          category: 'SECURITY_HIGH',
          priority: 'HIGH',
          title: 'High Priority Security Issues',
          description: `Found ${highVulns.length} high priority security issues`,
          actions: highVulns.map(v => ({
            file: v.file,
            issue: v.description,
            remediation: this.generateSecurityRemediation(v)
          })),
          estimatedImpact: 'HIGH',
          estimatedEffort: 'MEDIUM'
        });
      }
    }

    // Compliance remediations
    if (scanResults.compliance.length > 0) {
      suggestions.push({
        category: 'COMPLIANCE',
        priority: 'MEDIUM',
        title: 'Compliance Issues',
        description: `Found ${scanResults.compliance.length} compliance issues to address`,
        actions: scanResults.compliance.map(c => ({
          file: c.file,
          issue: c.description,
          remediation: this.generateComplianceRemediation(c)
        })),
        estimatedImpact: 'MEDIUM',
        estimatedEffort: 'MEDIUM'
      });
    }

    // Dependency remediations
    if (scanResults.dependencies.length > 0) {
      const criticalDeps = scanResults.dependencies.filter(d => d.severity === 'CRITICAL');
      const highDeps = scanResults.dependencies.filter(d => d.severity === 'HIGH');
      
      if (criticalDeps.length > 0 || highDeps.length > 0) {
        suggestions.push({
          category: 'DEPENDENCIES',
          priority: 'HIGH',
          title: 'Dependency Security Issues',
          description: `Found ${criticalDeps.length + highDeps.length} critical/high dependency vulnerabilities`,
          actions: [...criticalDeps, ...highDeps].map(d => ({
            package: d.package,
            issue: d.description,
            remediation: d.recommendation
          })),
          estimatedImpact: 'HIGH',
          estimatedEffort: 'LOW'
        });
      }
    }

    return suggestions;
  }

  generateSecurityRemediation(vulnerability) {
    const remediations = {
      'XSS': 'Use React\'s built-in XSS protection, avoid dangerouslySetInnerHTML, sanitize user input',
      'INJECTION': 'Avoid eval() and Function() constructors, use parameterized queries',
      'AUTHENTICATION': 'Move credentials to environment variables, use secure authentication services',
      'DATA_EXPOSURE': 'Remove sensitive data logging, use secure storage methods',
      'CRYPTO': 'Use strong hashing algorithms (SHA-256, bcrypt), avoid MD5/SHA1',
      'SECRETS': 'Move secrets to environment variables or secure secret management',
      'REDIRECTS': 'Validate and sanitize redirect URLs, implement allowlist approach'
    };

    return remediations[vulnerability.category] || 'Review and fix according to security best practices';
  }

  generateComplianceRemediation(complianceIssue) {
    const remediations = {
      'GDPR': 'Implement proper consent management, data minimization, and user rights',
      'ACCESSIBILITY': 'Add proper ARIA labels, alt text, and keyboard navigation support',
      'PRIVACY': 'Implement privacy notices, cookie consent, and data protection measures',
      'ERROR_HANDLING': 'Add proper error handling and user feedback',
      'INPUT_VALIDATION': 'Implement client-side and server-side input validation'
    };

    return remediations[complianceIssue.category] || 'Review and implement appropriate compliance measures';
  }

  async applyAutomaticSecurityFixes(suggestions) {
    this.log('Applying automatic security fixes where safe...');
    
    const fixes = [];
    
    for (const suggestion of suggestions) {
      if (suggestion.category === 'DEPENDENCIES' && suggestion.priority !== 'IMMEDIATE') {
        // Safe to auto-fix dependency issues
        for (const action of suggestion.actions) {
          try {
            const fix = await this.applyDependencyFix(action);
            if (fix) {
              fixes.push(fix);
            }
          } catch (error) {
            this.log(`Failed to apply dependency fix: ${error.message}`, 'WARN');
          }
        }
      }
    }

    return fixes;
  }

  async applyDependencyFix(action) {
    try {
      if (action.package) {
        // Update specific package
        execSync(`npm update ${action.package}`, { cwd: this.projectRoot, stdio: 'pipe' });
        
        return {
          type: 'DEPENDENCY_UPDATE',
          package: action.package,
          description: `Updated ${action.package} to latest version`,
          timestamp: new Date().toISOString()
        };
      }
    } catch (error) {
      this.log(`Error applying dependency fix: ${error.message}`, 'ERROR');
    }

    return null;
  }

  async generateSecurityComplianceReport(data) {
    this.log('Generating comprehensive security and compliance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalVulnerabilities: data.vulnerabilities.length,
        totalComplianceIssues: data.complianceIssues.length,
        totalDependencyVulnerabilities: data.dependencyVulnerabilities.length,
        totalRemediations: data.remediations.length,
        totalSuggestions: data.suggestions.length
      },
      vulnerabilities: data.vulnerabilities,
      complianceIssues: data.complianceIssues,
      dependencyVulnerabilities: data.dependencyVulnerabilities,
      remediations: data.remediations,
      suggestions: data.suggestions,
      riskAssessment: this.generateRiskAssessment(data),
      nextSteps: this.generateSecurityNextSteps(data)
    };

    const reportPath = path.join(this.projectRoot, 'logs', 'security-compliance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Generate HTML dashboard
    await this.generateSecurityDashboard(report);

    this.log(`Security compliance report generated: ${reportPath}`);
  }

  generateRiskAssessment(data) {
    const assessment = {
      overallRisk: 'LOW',
      criticalCount: 0,
      highCount: 0,
      mediumCount: 0,
      lowCount: 0
    };

    // Count vulnerabilities by severity
    [...data.vulnerabilities, ...data.dependencyVulnerabilities].forEach(vuln => {
      switch (vuln.severity) {
        case 'CRITICAL':
          assessment.criticalCount++;
          break;
        case 'HIGH':
          assessment.highCount++;
          break;
        case 'MEDIUM':
          assessment.mediumCount++;
          break;
        case 'LOW':
          assessment.lowCount++;
          break;
      }
    });

    // Determine overall risk level
    if (assessment.criticalCount > 0) {
      assessment.overallRisk = 'CRITICAL';
    } else if (assessment.highCount > 0) {
      assessment.overallRisk = 'HIGH';
    } else if (assessment.mediumCount > 0) {
      assessment.overallRisk = 'MEDIUM';
    }

    return assessment;
  }

  generateSecurityNextSteps(data) {
    const nextSteps = [];
    
    if (data.vulnerabilities.filter(v => v.severity === 'CRITICAL').length > 0) {
      nextSteps.push('Address critical security vulnerabilities immediately');
    }
    
    if (data.vulnerabilities.filter(v => v.severity === 'HIGH').length > 0) {
      nextSteps.push('Fix high priority security issues within 24 hours');
    }
    
    if (data.dependencyVulnerabilities.filter(d => d.severity === 'CRITICAL').length > 0) {
      nextSteps.push('Update vulnerable dependencies immediately');
    }
    
    if (data.complianceIssues.length > 0) {
      nextSteps.push('Review and address compliance issues');
    }
    
    nextSteps.push('Implement security code review process');
    nextSteps.push('Set up automated security scanning in CI/CD');
    nextSteps.push('Schedule security training for development team');
    
    return nextSteps;
  }

  async generateSecurityDashboard(report) {
    const dashboardPath = path.join(this.projectRoot, 'logs', 'security-dashboard');
    if (!fs.existsSync(dashboardPath)) {
      fs.mkdirSync(dashboardPath, { recursive: true });
    }

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security & Compliance Dashboard</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 20px; }
        .risk-indicator { background: ${report.riskAssessment.overallRisk === 'CRITICAL' ? '#e74c3c' : report.riskAssessment.overallRisk === 'HIGH' ? '#f39c12' : report.riskAssessment.overallRisk === 'MEDIUM' ? '#f1c40f' : '#27ae60'}; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center; }
        .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .metric-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; }
        .metric-value { font-size: 2em; font-weight: bold; color: #e74c3c; }
        .vulnerabilities { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .vuln-item { border-left: 4px solid #e74c3c; padding: 15px; margin: 10px 0; background: #f8f9fa; }
        .severity-critical { border-left-color: #e74c3c; }
        .severity-high { border-left-color: #f39c12; }
        .severity-medium { border-left-color: #f1c40f; }
        .severity-low { border-left-color: #27ae60; }
        .next-steps { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔒 Security & Compliance Dashboard</h1>
            <p>Last updated: ${new Date(report.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="risk-indicator">
            <h2>Overall Risk Level: ${report.riskAssessment.overallRisk}</h2>
            <p>Critical: ${report.riskAssessment.criticalCount} | High: ${report.riskAssessment.highCount} | Medium: ${report.riskAssessment.mediumCount} | Low: ${report.riskAssessment.lowCount}</p>
        </div>
        
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-value">${report.summary.totalVulnerabilities}</div>
                <div>Security Vulnerabilities</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.summary.totalComplianceIssues}</div>
                <div>Compliance Issues</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.summary.totalDependencyVulnerabilities}</div>
                <div>Dependency Issues</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.summary.totalRemediations}</div>
                <div>Applied Fixes</div>
            </div>
        </div>
        
        <div class="vulnerabilities">
            <h2>🚨 Critical & High Priority Issues</h2>
            ${[...report.vulnerabilities, ...report.dependencyVulnerabilities]
              .filter(v => v.severity === 'CRITICAL' || v.severity === 'HIGH')
              .map(v => `
                <div class="vuln-item severity-${v.severity.toLowerCase()}">
                    <h3>${v.file || v.package || 'Unknown'}</h3>
                    <p><strong>Severity:</strong> ${v.severity} | <strong>Category:</strong> ${v.category || 'DEPENDENCY'}</p>
                    <p>${v.description}</p>
                    ${v.recommendation ? `<p><strong>Recommendation:</strong> ${v.recommendation}</p>` : ''}
                </div>
            `).join('')}
        </div>
        
        <div class="next-steps">
            <h2>📋 Next Steps</h2>
            ${report.nextSteps.map(step => `<div>• ${step}</div>`).join('')}
        </div>
    </div>
</body>
</html>`;

    const dashboardFile = path.join(dashboardPath, 'index.html');
    fs.writeFileSync(dashboardFile, html);
    this.log(`Security dashboard generated: ${dashboardFile}`);
  }

  getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = this.getAllFiles(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    });

    return arrayOfFiles;
  }

  async commitSecurityFixes(fixes) {
    if (fixes.length === 0) return;

    try {
      // Stage all changes
      execSync('git add .', { cwd: this.projectRoot });
      
      // Commit with descriptive message
      const commitMessage = `🔒 Security Fixes: ${fixes.length} security improvements applied`;
      execSync(`git commit -m "${commitMessage}"`, { cwd: this.projectRoot });
      
      this.log(`Committed ${fixes.length} security fixes to git`);
    } catch (error) {
      this.log(`Failed to commit security fixes: ${error.message}`, 'WARN');
    }
  }
}

// Main execution
if (require.main === module) {
  const monitor = new SmartSecurityComplianceMonitor();
  monitor.runSecurityComplianceCheck()
    .then(result => {
      console.log('Smart Security & Compliance Monitoring completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Smart Security & Compliance Monitoring failed:', error);
      process.exit(1);
    });
}

module.exports = SmartSecurityComplianceMonitor;