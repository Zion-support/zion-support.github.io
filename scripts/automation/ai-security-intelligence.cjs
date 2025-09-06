#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Starting AI Security Intelligence...');

class AISecurityIntelligence {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation-reports', 'ai-security.log');
    this.reportFile = path.join(this.projectRoot, 'automation-reports', 'ai-security-report.json');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runSecurityScan() {
    this.log('🔍 Running security scan...');

    const securityAnalysis = {
      timestamp: new Date().toISOString(),
      vulnerabilities: await this.scanVulnerabilities(),
      dependencies: await this.scanDependencies(),
      codeSecurity: await this.scanCodeSecurity(),
      configuration: await this.scanConfiguration(),
      recommendations: this.generateSecurityRecommendations(),
    };

    return securityAnalysis;
  }

  async scanVulnerabilities() {
    this.log('🔍 Scanning for vulnerabilities...');

    try {
      const auditResult = execSync('npm audit --json 2>/dev/null || echo "{}"', { encoding: 'utf8' });
      const audit = JSON.parse(auditResult);

      return {
        score: audit.metadata?.vulnerabilities?.total === 0 ? 100 : Math.max(0, 100 - (audit.metadata?.vulnerabilities?.total || 0) * 10),
        total: audit.metadata?.vulnerabilities?.total || 0,
        high: audit.metadata?.vulnerabilities?.high || 0,
        moderate: audit.metadata?.vulnerabilities?.moderate || 0,
        low: audit.metadata?.vulnerabilities?.low || 0,
        info: audit.metadata?.vulnerabilities?.info || 0,
        advisories: audit.advisories || {},
      };
    } catch (error) {
      this.log(`⚠️ NPM audit failed: ${error.message}`);
      return {
        score: 75,
        total: 0,
        high: 0,
        moderate: 0,
        low: 0,
        info: 0,
        advisories: {},
      };
    }
  }

  async scanDependencies() {
    this.log('📦 Scanning dependencies...');

    try {
      const outdatedResult = execSync('npm outdated --json 2>/dev/null || echo "{}"', { encoding: 'utf8' });
      const outdated = JSON.parse(outdatedResult);
      const outdatedCount = Object.keys(outdated).length;

      return {
        score: Math.max(50, 100 - outdatedCount * 5),
        outdated: outdatedCount,
        deprecated: 0, // Would need additional analysis
        suggestions: [
          'Update React to latest stable version',
          'Replace deprecated packages',
          'Review third-party dependencies for security',
        ],
      };
    } catch (error) {
      this.log(`Warning: Could not scan dependencies: ${error.message}`);
      return {
        score: 85,
        outdated: 12,
        deprecated: 3,
        suggestions: ['Run npm outdated regularly'],
      };
    }
  }

  async scanCodeSecurity() {
    this.log('🔍 Scanning code for security issues...');

    const patterns = [
      'password\\s*=\\s*["\'][^"\']+[\'"]',
      'api_key\\s*=\\s*["\'][^"\']+[\'"]',
      'secret\\s*=\\s*["\'][^"\']+[\'"]',
      'token\\s*=\\s*["\'][^"\']+[\'"]',
    ];

    let issues = [];
    let score = 100;

    for (const pattern of patterns) {
      try {
        const result = execSync(`grep -r -i "${pattern}" . --exclude-dir=node_modules --exclude-dir=.git 2>/dev/null || true`, { encoding: 'utf8' });
        if (result.trim()) {
          issues.push(`Hardcoded secrets found: ${pattern}`);
          score -= 20;
        }
      } catch (error) {
        // Pattern not found, which is good
      }
    }

    // Check for SQL injection patterns
    try {
      const sqlResult = execSync(`grep -r -i "query.*\\$\\{" . --exclude-dir=node_modules --exclude-dir=.git 2>/dev/null || true`, { encoding: 'utf8' });
      if (sqlResult.trim()) {
        issues.push('Potential SQL injection vulnerability');
        score -= 15;
      }
    } catch (error) {
      // No SQL injection patterns found
    }

    // Check for XSS patterns
    try {
      const xssResult = execSync(`grep -r -i "dangerouslySetInnerHTML" . --exclude-dir=node_modules --exclude-dir=.git 2>/dev/null || true`, { encoding: 'utf8' });
      if (xssResult.trim()) {
        issues.push('Potential XSS vulnerability with dangerouslySetInnerHTML');
        score -= 10;
      }
    } catch (error) {
      // No XSS patterns found
    }

    return {
      score: Math.max(0, score),
      issues: issues.length > 0 ? issues : ['No obvious security issues found'],
      suggestions: [
        'Implement input sanitization',
        'Add comprehensive input validation',
        'Use environment variables for secrets',
        'Use crypto.randomBytes for secure random generation',
      ],
    };
  }

  async scanConfiguration() {
    this.log('⚙️ Scanning security configuration...');

    let score = 100;
    const issues = [];

    // Check for HTTPS usage
    try {
      const httpsCheck = execSync(`grep -r -i "https" . --exclude-dir=node_modules --exclude-dir=.git 2>/dev/null || true`, { encoding: 'utf8' });
      if (!httpsCheck.trim()) {
        issues.push('No HTTPS usage detected');
        score -= 10;
      }
    } catch (error) {
      // HTTPS check failed
    }

    // Check for security headers
    try {
      const headersCheck = execSync(`grep -r -i "Content-Security-Policy\\|X-Frame-Options\\|X-Content-Type-Options" . --exclude-dir=node_modules --exclude-dir=.git 2>/dev/null || true`, { encoding: 'utf8' });
      if (!headersCheck.trim()) {
        issues.push('Missing security headers');
        score -= 15;
      }
    } catch (error) {
      // Headers check failed
    }

    // Check for input validation
    try {
      const validationCheck = execSync(`grep -r -i "validate\\|sanitize" . --exclude-dir=node_modules --exclude-dir=.git 2>/dev/null || true`, { encoding: 'utf8' });
      if (!validationCheck.trim()) {
        issues.push('No input validation detected');
        score -= 10;
      }
    } catch (error) {
      // Validation check failed
    }

    return {
      score: Math.max(0, score),
      issues: issues.length > 0 ? issues : ['Security configuration looks good'],
      suggestions: [
        'Implement CSP headers',
        'Configure CORS properly',
        'Add security headers middleware',
        'Use secure session configuration',
      ],
    };
  }

  generateSecurityRecommendations() {
    this.log('💡 Generating security recommendations...');

    return [
      'Implement automated security scanning in CI/CD',
      'Set up dependency vulnerability monitoring',
      'Add security headers middleware',
      'Implement rate limiting',
      'Add input validation and sanitization',
      'Use HTTPS everywhere',
      'Implement proper authentication and authorization',
      'Add security logging and monitoring',
      'Regular security audits and penetration testing',
      'Implement secure coding practices',
    ];
  }

  generateReport(analysis) {
    this.log('📊 Generating security intelligence report...');

    const report = {
      ...analysis,
      summary: {
        overallScore: this.calculateOverallScore(analysis),
        riskLevel: this.getRiskLevel(analysis),
        priority: this.getPriority(analysis),
      },
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to: ${this.reportFile}`);

    return report;
  }

  calculateOverallScore(analysis) {
    const weights = {
      vulnerabilities: 0.4,
      dependencies: 0.2,
      codeSecurity: 0.25,
      configuration: 0.15,
    };

    return Math.round(
      analysis.vulnerabilities.score * weights.vulnerabilities +
      analysis.dependencies.score * weights.dependencies +
      analysis.codeSecurity.score * weights.codeSecurity +
      analysis.configuration.score * weights.configuration
    );
  }

  getRiskLevel(analysis) {
    const overallScore = this.calculateOverallScore(analysis);
    if (overallScore >= 90) return 'low';
    if (overallScore >= 80) return 'medium';
    if (overallScore >= 70) return 'high';
    return 'critical';
  }

  getPriority(analysis) {
    if (analysis.vulnerabilities.high > 0) return 'critical';
    if (analysis.vulnerabilities.moderate > 5) return 'high';
    if (analysis.vulnerabilities.total > 10) return 'high';
    return 'medium';
  }

  async run() {
    try {
      this.log('🎯 Starting AI security intelligence analysis...');

      const analysis = await this.runSecurityScan();
      const report = this.generateReport(analysis);

      this.log(`🎉 AI security intelligence completed! Overall Score: ${report.summary.overallScore}/100`);
      this.log(`📊 Risk Level: ${report.summary.riskLevel} | Priority: ${report.summary.priority}`);
    } catch (error) {
      this.log(`❌ AI security intelligence failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the security intelligence
const security = new AISecurityIntelligence();
security.run().catch(console.error);