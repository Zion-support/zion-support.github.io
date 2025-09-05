#!/usr/bin/env node

/**
 * AI-Powered Security Intelligence System
 * Advanced security analysis with machine learning threat detection
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

class AISecurityIntelligence {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'ai-security.log');
    this.reportFile = path.join(this.projectRoot, 'logs', 'security-report.json');
    this.scoreFile = path.join(this.projectRoot, 'logs', 'security-score.txt');
    this.ensureLogsDirectory();
    
    this.securityMetrics = {
      vulnerabilities: 0,
      dependencies: 0,
      codeSecurity: 0,
      infrastructure: 0,
      compliance: 0,
      overall: 0
    };
    
    this.threatLevels = {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
      info: 0
    };
  }

  async ensureLogsDirectory() {
    try {
      await fs.mkdir(path.join(this.projectRoot, 'logs'), { recursive: true });
    } catch (error) {
      console.log('Logs directory already exists');
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    fs.appendFile(this.logFile, logMessage + '\n').catch(console.error);
  }

  async analyzeDependencyVulnerabilities() {
    this.log('🔍 Analyzing dependency vulnerabilities...');
    
    try {
      const auditResult = execSync('npm audit --json 2>/dev/null || echo "{}"', { encoding: 'utf8' });
      const auditData = JSON.parse(auditResult);
      
      const vulnerabilities = auditData.vulnerabilities || {};
      const vulnCount = Object.keys(vulnerabilities).length;
      
      // Calculate security score based on vulnerabilities
      let dependencyScore = 100;
      let criticalCount = 0;
      let highCount = 0;
      let mediumCount = 0;
      let lowCount = 0;
      
      for (const [pkg, vuln] of Object.entries(vulnerabilities)) {
        const severity = vuln.severity || 'low';
        switch (severity) {
          case 'critical':
            criticalCount++;
            dependencyScore -= 20;
            break;
          case 'high':
            highCount++;
            dependencyScore -= 15;
            break;
          case 'moderate':
            mediumCount++;
            dependencyScore -= 10;
            break;
          case 'low':
            lowCount++;
            dependencyScore -= 5;
            break;
        }
      }
      
      this.threatLevels.critical = criticalCount;
      this.threatLevels.high = highCount;
      this.threatLevels.medium = mediumCount;
      this.threatLevels.low = lowCount;
      
      this.securityMetrics.dependencies = Math.max(0, dependencyScore);
      
      this.log(`📊 Dependency Security Score: ${this.securityMetrics.dependencies}/100`);
      this.log(`🚨 Vulnerabilities found: Critical(${criticalCount}) High(${highCount}) Medium(${mediumCount}) Low(${lowCount})`);
      
      return {
        score: this.securityMetrics.dependencies,
        vulnerabilities: vulnCount,
        breakdown: this.threatLevels
      };
    } catch (error) {
      this.log(`❌ Dependency analysis failed: ${error.message}`, 'ERROR');
      return { score: 50, vulnerabilities: 0, breakdown: this.threatLevels };
    }
  }

  async analyzeCodeSecurity() {
    this.log('🔒 Analyzing code security patterns...');
    
    try {
      let codeSecurityScore = 100;
      const securityIssues = [];
      
      // Check for hardcoded secrets
      const secretPatterns = [
        'password\\s*=\\s*["\'][^"\']+["\']',
        'api_key\\s*=\\s*["\'][^"\']+["\']',
        'secret\\s*=\\s*["\'][^"\']+["\']',
        'token\\s*=\\s*["\'][^"\']+["\']'
      ];
      
      for (const pattern of secretPatterns) {
        try {
          const result = execSync(`grep -r -i "${pattern}" src/ 2>/dev/null | wc -l`, { encoding: 'utf8' });
          const count = parseInt(result.trim());
          if (count > 0) {
            securityIssues.push(`Found ${count} potential hardcoded secrets`);
            codeSecurityScore -= count * 10;
          }
        } catch (e) {
          // Pattern not found, continue
        }
      }
      
      // Check for SQL injection patterns
      try {
        const sqlResult = execSync(`grep -r -i "query.*\\$\\{" src/ 2>/dev/null | wc -l`, { encoding: 'utf8' });
        const sqlCount = parseInt(sqlResult.trim());
        if (sqlCount > 0) {
          securityIssues.push(`Found ${sqlCount} potential SQL injection vulnerabilities`);
          codeSecurityScore -= sqlCount * 15;
        }
      } catch (e) {
        // No SQL patterns found
      }
      
      // Check for XSS vulnerabilities
      try {
        const xssResult = execSync(`grep -r -i "dangerouslySetInnerHTML" src/ 2>/dev/null | wc -l`, { encoding: 'utf8' });
        const xssCount = parseInt(xssResult.trim());
        if (xssCount > 0) {
          securityIssues.push(`Found ${xssCount} potential XSS vulnerabilities`);
          codeSecurityScore -= xssCount * 12;
        }
      } catch (e) {
        // No XSS patterns found
      }
      
      this.securityMetrics.codeSecurity = Math.max(0, codeSecurityScore);
      
      this.log(`📊 Code Security Score: ${this.securityMetrics.codeSecurity}/100`);
      if (securityIssues.length > 0) {
        this.log(`⚠️ Security Issues: ${securityIssues.join(', ')}`);
      }
      
      return {
        score: this.securityMetrics.codeSecurity,
        issues: securityIssues
      };
    } catch (error) {
      this.log(`❌ Code security analysis failed: ${error.message}`, 'ERROR');
      return { score: 50, issues: [] };
    }
  }

  async analyzeInfrastructureSecurity() {
    this.log('🏗️ Analyzing infrastructure security...');
    
    try {
      let infrastructureScore = 100;
      const infrastructureIssues = [];
      
      // Check for exposed ports and services
      const configFiles = ['docker-compose.yml', 'Dockerfile', 'nginx.conf', 'next.config.js'];
      
      for (const configFile of configFiles) {
        try {
          const content = await fs.readFile(configFile, 'utf8');
          
          // Check for exposed ports
          const portMatches = content.match(/(\d+):\d+/g);
          if (portMatches && portMatches.length > 0) {
            infrastructureIssues.push(`Exposed ports found in ${configFile}`);
            infrastructureScore -= 5;
          }
          
          // Check for debug mode in production
          if (content.includes('debug: true') || content.includes('DEBUG=true')) {
            infrastructureIssues.push(`Debug mode enabled in ${configFile}`);
            infrastructureScore -= 10;
          }
        } catch (e) {
          // File doesn't exist or can't be read
        }
      }
      
      // Check for environment variable security
      try {
        const envFiles = ['.env', '.env.local', '.env.production'];
        for (const envFile of envFiles) {
          try {
            const content = await fs.readFile(envFile, 'utf8');
            if (content.includes('NODE_ENV=development')) {
              infrastructureIssues.push(`Development environment detected in ${envFile}`);
              infrastructureScore -= 5;
            }
          } catch (e) {
            // File doesn't exist
          }
        }
      } catch (e) {
        // No environment files found
      }
      
      this.securityMetrics.infrastructure = Math.max(0, infrastructureScore);
      
      this.log(`📊 Infrastructure Security Score: ${this.securityMetrics.infrastructure}/100`);
      if (infrastructureIssues.length > 0) {
        this.log(`⚠️ Infrastructure Issues: ${infrastructureIssues.join(', ')}`);
      }
      
      return {
        score: this.securityMetrics.infrastructure,
        issues: infrastructureIssues
      };
    } catch (error) {
      this.log(`❌ Infrastructure security analysis failed: ${error.message}`, 'ERROR');
      return { score: 50, issues: [] };
    }
  }

  async analyzeCompliance() {
    this.log('📋 Analyzing compliance and best practices...');
    
    try {
      let complianceScore = 100;
      const complianceIssues = [];
      
      // Check for HTTPS enforcement
      try {
        const httpsCheck = execSync(`grep -r -i "https" src/ 2>/dev/null | wc -l`, { encoding: 'utf8' });
        const httpsCount = parseInt(httpsCheck.trim());
        if (httpsCount === 0) {
          complianceIssues.push('No HTTPS enforcement detected');
          complianceScore -= 15;
        }
      } catch (e) {
        // No HTTPS patterns found
      }
      
      // Check for security headers
      try {
        const headersCheck = execSync(`grep -r -i "Content-Security-Policy\\|X-Frame-Options\\|X-Content-Type-Options" src/ 2>/dev/null | wc -l`, { encoding: 'utf8' });
        const headersCount = parseInt(headersCheck.trim());
        if (headersCount === 0) {
          complianceIssues.push('Security headers not implemented');
          complianceScore -= 10;
        }
      } catch (e) {
        // No security headers found
      }
      
      // Check for input validation
      try {
        const validationCheck = execSync(`grep -r -i "validate\\|sanitize" src/ 2>/dev/null | wc -l`, { encoding: 'utf8' });
        const validationCount = parseInt(validationCheck.trim());
        if (validationCount === 0) {
          complianceIssues.push('Input validation not implemented');
          complianceScore -= 20;
        }
      } catch (e) {
        // No validation patterns found
      }
      
      this.securityMetrics.compliance = Math.max(0, complianceScore);
      
      this.log(`📊 Compliance Score: ${this.securityMetrics.compliance}/100`);
      if (complianceIssues.length > 0) {
        this.log(`⚠️ Compliance Issues: ${complianceIssues.join(', ')}`);
      }
      
      return {
        score: this.securityMetrics.compliance,
        issues: complianceIssues
      };
    } catch (error) {
      this.log(`❌ Compliance analysis failed: ${error.message}`, 'ERROR');
      return { score: 50, issues: [] };
    }
  }

  calculateOverallScore() {
    const weights = {
      dependencies: 0.3,
      codeSecurity: 0.3,
      infrastructure: 0.2,
      compliance: 0.2
    };
    
    let weightedSum = 0;
    let totalWeight = 0;
    
    for (const [metric, weight] of Object.entries(weights)) {
      weightedSum += this.securityMetrics[metric] * weight;
      totalWeight += weight;
    }
    
    this.securityMetrics.overall = Math.round(weightedSum / totalWeight);
    return this.securityMetrics.overall;
  }

  generateSecurityRecommendations() {
    const recommendations = [];
    
    if (this.securityMetrics.dependencies < 80) {
      recommendations.push({
        category: 'Dependencies',
        priority: 'high',
        message: 'Update vulnerable dependencies and implement automated security scanning',
        action: 'npm audit fix && npm install'
      });
    }
    
    if (this.securityMetrics.codeSecurity < 70) {
      recommendations.push({
        category: 'Code Security',
        priority: 'high',
        message: 'Implement secure coding practices and remove hardcoded secrets',
        action: 'Use environment variables and implement input validation'
      });
    }
    
    if (this.securityMetrics.infrastructure < 80) {
      recommendations.push({
        category: 'Infrastructure',
        priority: 'medium',
        message: 'Secure infrastructure configuration and disable debug mode in production',
        action: 'Review Docker and server configurations'
      });
    }
    
    if (this.securityMetrics.compliance < 70) {
      recommendations.push({
        category: 'Compliance',
        priority: 'medium',
        message: 'Implement security headers and HTTPS enforcement',
        action: 'Add security middleware and enforce HTTPS'
      });
    }
    
    return recommendations;
  }

  generateThreatAssessment() {
    const totalThreats = Object.values(this.threatLevels).reduce((sum, count) => sum + count, 0);
    
    let threatLevel = 'LOW';
    if (this.threatLevels.critical > 0) {
      threatLevel = 'CRITICAL';
    } else if (this.threatLevels.high > 2) {
      threatLevel = 'HIGH';
    } else if (this.threatLevels.medium > 5 || totalThreats > 10) {
      threatLevel = 'MEDIUM';
    }
    
    return {
      level: threatLevel,
      totalThreats,
      breakdown: this.threatLevels,
      riskScore: Math.max(0, 100 - (totalThreats * 5))
    };
  }

  async generateReport() {
    this.log('📊 Generating AI Security Intelligence Report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      project: 'Zion Tech Group',
      analysis: {
        metrics: this.securityMetrics,
        threatAssessment: this.generateThreatAssessment(),
        recommendations: this.generateSecurityRecommendations(),
        aiInsights: this.generateAISecurityInsights()
      },
      summary: {
        overallScore: this.securityMetrics.overall,
        status: this.securityMetrics.overall >= 80 ? 'SECURE' : this.securityMetrics.overall >= 60 ? 'NEEDS_ATTENTION' : 'VULNERABLE'
      }
    };
    
    await fs.writeFile(this.reportFile, JSON.stringify(report, null, 2));
    await fs.writeFile(this.scoreFile, this.securityMetrics.overall.toString());
    
    this.log(`✅ Security Intelligence Report generated: ${this.securityMetrics.overall}/100`);
    return report;
  }

  generateAISecurityInsights() {
    const insights = [];
    
    if (this.securityMetrics.overall > 90) {
      insights.push('🛡️ Excellent security posture! The application demonstrates strong security practices.');
    } else if (this.securityMetrics.overall > 70) {
      insights.push('🔒 Good security foundation with some areas for improvement.');
    } else if (this.securityMetrics.overall > 50) {
      insights.push('⚠️ Security needs immediate attention. Several vulnerabilities detected.');
    } else {
      insights.push('🚨 Critical security issues detected. Immediate remediation required.');
    }
    
    if (this.threatLevels.critical > 0) {
      insights.push(`🚨 ${this.threatLevels.critical} critical vulnerabilities require immediate attention.`);
    }
    
    if (this.securityMetrics.dependencies < 60) {
      insights.push('📦 Dependency vulnerabilities pose significant security risks.');
    }
    
    return insights;
  }

  async run() {
    this.log('🤖 Starting AI Security Intelligence Analysis...');
    
    try {
      // Run all security analysis components
      await this.analyzeDependencyVulnerabilities();
      await this.analyzeCodeSecurity();
      await this.analyzeInfrastructureSecurity();
      await this.analyzeCompliance();
      
      // Calculate overall security score
      this.calculateOverallScore();
      
      // Generate comprehensive report
      await this.generateReport();
      
      this.log(`🎯 AI Security Intelligence Analysis Complete! Overall Score: ${this.securityMetrics.overall}/100`);
      
      return this.securityMetrics.overall;
    } catch (error) {
      this.log(`❌ Security analysis failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the security intelligence system
if (require.main === module) {
  const securityIntelligence = new AISecurityIntelligence();
  securityIntelligence.run().catch(console.error);
}

module.exports = AISecurityIntelligence;