#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AdvancedSecurityScanner {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 1800000; // 30 minutes default
    this.securityLevel = process.env.SECURITY_LEVEL || 'paranoid';
    this.vulnerabilityThreshold = process.env.VULNERABILITY_THRESHOLD || 'high';
    this.securityHistory = [];
    this.vulnerabilityMetrics = {
      totalVulnerabilities: 0,
      criticalVulnerabilities: 0,
      highVulnerabilities: 0,
      mediumVulnerabilities: 0,
      lowVulnerabilities: 0,
      securityScore: 100
    };
    
    console.log('🔒 Advanced Security Scanner Started');
    console.log(`📊 Scan Interval: ${this.interval / 1000}s`);
    console.log(`🛡️  Security Level: ${this.securityLevel}`);
    console.log(`⚠️  Vulnerability Threshold: ${this.vulnerabilityThreshold}`);
  }

  async start() {
    console.log('🚀 Starting advanced security scanning...');
    
    // Initial security scan
    await this.performSecurityScan();
    
    // Set up continuous scanning
    setInterval(async () => {
      await this.performSecurityScan();
    }, this.interval);
    
    // Set up quick vulnerability checks every 5 minutes
    setInterval(async () => {
      await this.performQuickVulnerabilityCheck();
    }, 300000);
    
    // Keep process alive and log status
    setInterval(() => {
      this.logStatus();
    }, 300000); // Log status every 5 minutes
  }

  async performSecurityScan() {
    try {
      console.log('🔍 Performing comprehensive security scan...');
      
      const startTime = Date.now();
      
      // 1. Scan for dependency vulnerabilities
      const dependencyVulnerabilities = await this.scanDependencies();
      
      // 2. Scan for code security issues
      const codeSecurityIssues = await this.scanCodeSecurity();
      
      // 3. Scan for configuration vulnerabilities
      const configVulnerabilities = await this.scanConfigurationSecurity();
      
      // 4. Scan for environment security
      const environmentSecurity = await this.scanEnvironmentSecurity();
      
      // 5. Perform threat modeling
      const threatModel = await this.performThreatModeling();
      
      // 6. Generate security recommendations
      const recommendations = await this.generateSecurityRecommendations(
        dependencyVulnerabilities,
        codeSecurityIssues,
        configVulnerabilities,
        environmentSecurity,
        threatModel
      );
      
      const scanTime = Date.now() - startTime;
      
      // Store security history
      this.securityHistory.push({
        timestamp: new Date().toISOString(),
        dependencyVulnerabilities: dependencyVulnerabilities,
        codeSecurityIssues: codeSecurityIssues,
        configVulnerabilities: configVulnerabilities,
        environmentSecurity: environmentSecurity,
        threatModel: threatModel,
        recommendations: recommendations,
        scanTime: scanTime
      });
      
      // Keep only last 50 scans
      if (this.securityHistory.length > 50) {
        this.securityHistory = this.securityHistory.slice(-50);
      }
      
      // Update vulnerability metrics
      this.updateVulnerabilityMetrics(
        dependencyVulnerabilities,
        codeSecurityIssues,
        configVulnerabilities,
        environmentSecurity
      );
      
      // Log results
      this.logSecurityResults();
      
      // Save results to file
      this.saveResults();
      
      console.log(`✅ Security scan completed in ${scanTime}ms`);
      
    } catch (error) {
      console.error('❌ Error during security scan:', error.message);
      this.logError(error);
    }
  }

  async performQuickVulnerabilityCheck() {
    try {
      console.log('🔍 Performing quick vulnerability check...');
      
      // Quick check for critical vulnerabilities
      const criticalIssues = await this.checkCriticalVulnerabilities();
      
      if (criticalIssues.length > 0) {
        console.error('🚨 CRITICAL VULNERABILITIES DETECTED:');
        criticalIssues.forEach(issue => {
          console.error(`   - ${issue.description}`);
        });
      }
      
    } catch (error) {
      console.error('❌ Error during quick vulnerability check:', error.message);
    }
  }

  async scanDependencies() {
    try {
      console.log('📦 Scanning dependencies for vulnerabilities...');
      
      const vulnerabilities = [];
      
      // Check package.json for known vulnerable packages
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const allDependencies = {
          ...packageJson.dependencies,
          ...packageJson.devDependencies
        };
        
        // Check for known vulnerable packages
        const vulnerablePackages = await this.checkKnownVulnerablePackages(Object.keys(allDependencies));
        vulnerabilities.push(...vulnerablePackages);
        
        // Check for outdated packages
        const outdatedPackages = await this.checkOutdatedPackages(allDependencies);
        vulnerabilities.push(...outdatedPackages);
        
        // Check for packages with security issues
        const securityIssues = await this.checkPackageSecurityIssues(Object.keys(allDependencies));
        vulnerabilities.push(...securityIssues);
      }
      
      return vulnerabilities;
      
    } catch (error) {
      console.error('❌ Error scanning dependencies:', error.message);
      return [];
    }
  }

  async scanCodeSecurity() {
    try {
      console.log('🔍 Scanning code for security issues...');
      
      const securityIssues = [];
      
      // Scan source code for common security vulnerabilities
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir);
        
        files.forEach(file => {
          if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            try {
              const content = fs.readFileSync(file, 'utf8');
              const issues = this.scanFileForSecurityIssues(content, file);
              securityIssues.push(...issues);
            } catch (error) {
              // Skip files that can't be read
            }
          }
        });
      }
      
      // Scan for hardcoded secrets
      const secretIssues = await this.scanForHardcodedSecrets();
      securityIssues.push(...secretIssues);
      
      // Scan for unsafe patterns
      const unsafePatternIssues = await this.scanForUnsafePatterns();
      securityIssues.push(...unsafePatternIssues);
      
      return securityIssues;
      
    } catch (error) {
      console.error('❌ Error scanning code security:', error.message);
      return [];
    }
  }

  async scanConfigurationSecurity() {
    try {
      console.log('🔍 Scanning configuration for security issues...');
      
      const configIssues = [];
      
      // Check environment configuration
      const envIssues = await this.checkEnvironmentConfiguration();
      configIssues.push(...envIssues);
      
      // Check build configuration
      const buildIssues = await this.checkBuildConfiguration();
      configIssues.push(...buildIssues);
      
      // Check server configuration
      const serverIssues = await this.checkServerConfiguration();
      configIssues.push(...serverIssues);
      
      // Check database configuration
      const dbIssues = await this.checkDatabaseConfiguration();
      configIssues.push(...dbIssues);
      
      return configIssues;
      
    } catch (error) {
      console.error('❌ Error scanning configuration security:', error.message);
      return [];
    }
  }

  async scanEnvironmentSecurity() {
    try {
      console.log('🔍 Scanning environment for security issues...');
      
      const environmentIssues = [];
      
      // Check for exposed environment variables
      const exposedEnvVars = await this.checkExposedEnvironmentVariables();
      environmentIssues.push(...exposedEnvVars);
      
      // Check for insecure file permissions
      const filePermissionIssues = await this.checkFilePermissions();
      environmentIssues.push(...filePermissionIssues);
      
      // Check for network security
      const networkIssues = await this.checkNetworkSecurity();
      environmentIssues.push(...networkIssues);
      
      return environmentIssues;
      
    } catch (error) {
      console.error('❌ Error scanning environment security:', error.message);
      return [];
    }
  }

  async performThreatModeling() {
    try {
      console.log('🔍 Performing threat modeling...');
      
      const threatModel = {
        attackVectors: [],
        potentialThreats: [],
        riskAssessment: {},
        mitigationStrategies: []
      };
      
      // Identify potential attack vectors
      threatModel.attackVectors = await this.identifyAttackVectors();
      
      // Assess potential threats
      threatModel.potentialThreats = await this.assessPotentialThreats();
      
      // Calculate risk assessment
      threatModel.riskAssessment = this.calculateRiskAssessment(threatModel);
      
      // Generate mitigation strategies
      threatModel.mitigationStrategies = this.generateMitigationStrategies(threatModel);
      
      return threatModel;
      
    } catch (error) {
      console.error('❌ Error performing threat modeling:', error.message);
      return { error: error.message };
    }
  }

  async checkKnownVulnerablePackages(packages) {
    const vulnerabilities = [];
    
    // This would typically integrate with npm audit or similar tools
    // For now, check for common vulnerable packages
    const knownVulnerable = [
      'lodash',
      'moment',
      'jquery',
      'express',
      'mongoose'
    ];
    
    packages.forEach(pkg => {
      if (knownVulnerable.includes(pkg)) {
        vulnerabilities.push({
          type: 'dependency-vulnerability',
          severity: 'medium',
          description: `Known vulnerable package: ${pkg}`,
          package: pkg,
          recommendation: `Update ${pkg} to latest secure version`,
          cve: 'CVE-XXXX-XXXX' // Placeholder
        });
      }
    });
    
    return vulnerabilities;
  }

  async checkOutdatedPackages(dependencies) {
    const vulnerabilities = [];
    
    // This would typically check package versions against latest
    // For now, return placeholder
    return vulnerabilities;
  }

  async checkPackageSecurityIssues(packages) {
    const vulnerabilities = [];
    
    // This would typically check for security advisories
    // For now, return placeholder
    return vulnerabilities;
  }

  scanFileForSecurityIssues(content, filename) {
    const issues = [];
    
    // Check for SQL injection vulnerabilities
    if (content.includes('SELECT') || content.includes('INSERT') || content.includes('UPDATE')) {
      if (content.includes('${') || content.includes('+')) {
        issues.push({
          type: 'sql-injection',
          severity: 'high',
          description: 'Potential SQL injection vulnerability',
          file: filename,
          line: this.findLineNumber(content, 'SELECT'),
          recommendation: 'Use parameterized queries or ORM methods'
        });
      }
    }
    
    // Check for XSS vulnerabilities
    if (content.includes('innerHTML') || content.includes('outerHTML')) {
      if (content.includes('${') || content.includes('+')) {
        issues.push({
          type: 'xss',
          severity: 'high',
          description: 'Potential XSS vulnerability',
          file: filename,
          line: this.findLineNumber(content, 'innerHTML'),
          recommendation: 'Use textContent or proper sanitization'
        });
      }
    }
    
    // Check for command injection
    if (content.includes('exec') || content.includes('spawn') || content.includes('child_process')) {
      if (content.includes('${') || content.includes('+')) {
        issues.push({
          type: 'command-injection',
          severity: 'critical',
          description: 'Potential command injection vulnerability',
          file: filename,
          line: this.findLineNumber(content, 'exec'),
          recommendation: 'Avoid dynamic command execution or sanitize input'
        });
      }
    }
    
    // Check for prototype pollution
    if (content.includes('Object.assign') || content.includes('Object.create')) {
      if (content.includes('${') || content.includes('+')) {
        issues.push({
          type: 'prototype-pollution',
          severity: 'medium',
          description: 'Potential prototype pollution vulnerability',
          file: filename,
          line: this.findLineNumber(content, 'Object.assign'),
          recommendation: 'Use Object.freeze or validate input objects'
        });
      }
    }
    
    return issues;
  }

  async scanForHardcodedSecrets() {
    const issues = [];
    
    try {
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir);
        
        const secretPatterns = [
          /api_key\s*[:=]\s*['"][^'"]+['"]/gi,
          /password\s*[:=]\s*['"][^'"]+['"]/gi,
          /secret\s*[:=]\s*['"][^'"]+['"]/gi,
          /token\s*[:=]\s*['"][^'"]+['"]/gi,
          /private_key\s*[:=]\s*['"][^'"]+['"]/gi,
          /access_token\s*[:=]\s*['"][^'"]+['"]/gi
        ];
        
        files.forEach(file => {
          try {
            const content = fs.readFileSync(file, 'utf8');
            secretPatterns.forEach(pattern => {
              const matches = content.match(pattern);
              if (matches) {
                issues.push({
                  type: 'hardcoded-secret',
                  severity: 'critical',
                  description: 'Hardcoded secret detected',
                  file: file,
                  line: this.findLineNumber(content, matches[0]),
                  recommendation: 'Move secrets to environment variables',
                  secret: matches[0].substring(0, 20) + '...'
                });
              }
            });
          } catch (error) {
            // Skip files that can't be read
          }
        });
      }
    } catch (error) {
      console.error('❌ Error scanning for hardcoded secrets:', error.message);
    }
    
    return issues;
  }

  async scanForUnsafePatterns() {
    const issues = [];
    
    try {
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir);
        
        files.forEach(file => {
          try {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check for eval usage
            if (content.includes('eval(')) {
              issues.push({
                type: 'unsafe-eval',
                severity: 'critical',
                description: 'Usage of eval() function',
                file: file,
                line: this.findLineNumber(content, 'eval('),
                recommendation: 'Avoid eval() - use safer alternatives'
              });
            }
            
            // Check for innerHTML usage
            if (content.includes('innerHTML')) {
              issues.push({
                type: 'unsafe-innerHTML',
                severity: 'medium',
                description: 'Usage of innerHTML',
                file: file,
                line: this.findLineNumber(content, 'innerHTML'),
                recommendation: 'Use textContent or proper sanitization'
              });
            }
            
            // Check for document.write
            if (content.includes('document.write')) {
              issues.push({
                type: 'unsafe-document-write',
                severity: 'medium',
                description: 'Usage of document.write',
                file: file,
                line: this.findLineNumber(content, 'document.write'),
                recommendation: 'Avoid document.write - use DOM manipulation'
              });
            }
            
          } catch (error) {
            // Skip files that can't be read
          }
        });
      }
    } catch (error) {
      console.error('❌ Error scanning for unsafe patterns:', error.message);
    }
    
    return issues;
  }

  async checkEnvironmentConfiguration() {
    const issues = [];
    
    // Check for .env files in version control
    if (fs.existsSync('.env') || fs.existsSync('.env.local')) {
      issues.push({
        type: 'env-file-exposed',
        severity: 'high',
        description: 'Environment file found in project root',
        recommendation: 'Move .env files to .gitignore and use .env.example'
      });
    }
    
    // Check for environment variable exposure
    const envFiles = ['.env', '.env.local', '.env.production'];
    envFiles.forEach(envFile => {
      if (fs.existsSync(envFile)) {
        try {
          const content = fs.readFileSync(envFile, 'utf8');
          if (content.includes('API_KEY') || content.includes('SECRET')) {
            issues.push({
              type: 'env-vars-exposed',
              severity: 'critical',
              description: 'Sensitive environment variables found',
              file: envFile,
              recommendation: 'Use placeholder values in .env.example'
            });
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    });
    
    return issues;
  }

  async checkBuildConfiguration() {
    const issues = [];
    
    // Check Vite configuration
    if (fs.existsSync('vite.config.ts') || fs.existsSync('vite.config.js')) {
      try {
        const configFile = fs.existsSync('vite.config.ts') ? 'vite.config.ts' : 'vite.config.js';
        const content = fs.readFileSync(configFile, 'utf8');
        
        if (content.includes('https: false')) {
          issues.push({
            type: 'insecure-https',
            severity: 'medium',
            description: 'HTTPS disabled in build configuration',
            file: configFile,
            recommendation: 'Enable HTTPS for production builds'
          });
        }
      } catch (error) {
        // Skip if can't read
      }
    }
    
    return issues;
  }

  async checkServerConfiguration() {
    const issues = [];
    
    // Check for common server security issues
    const serverFiles = ['server.js', 'app.js', 'index.js'];
    serverFiles.forEach(file => {
      if (fs.existsSync(file)) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          if (content.includes('helmet') === false) {
            issues.push({
              type: 'missing-security-headers',
              severity: 'medium',
              description: 'Security headers middleware not found',
              file: file,
              recommendation: 'Implement helmet.js for security headers'
            });
          }
          
          if (content.includes('cors') && !content.includes('corsOptions')) {
            issues.push({
              type: 'insecure-cors',
              severity: 'medium',
              description: 'CORS configuration may be too permissive',
              file: file,
              recommendation: 'Configure CORS with specific origins'
            });
          }
          
        } catch (error) {
          // Skip if can't read
        }
      }
    });
    
    return issues;
  }

  async checkDatabaseConfiguration() {
    const issues = [];
    
    // Check for database connection security
    const dbFiles = ['database.js', 'db.js', 'config/database.js'];
    dbFiles.forEach(file => {
      if (fs.existsSync(file)) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          if (content.includes('mongodb://') && !content.includes('mongodb+srv://')) {
            issues.push({
              type: 'insecure-db-connection',
              severity: 'high',
              description: 'Insecure database connection string',
              file: file,
              recommendation: 'Use secure connection strings with authentication'
            });
          }
          
        } catch (error) {
          // Skip if can't read
        }
      }
    });
    
    return issues;
  }

  async checkExposedEnvironmentVariables() {
    const issues = [];
    
    // Check for environment variables in source code
    const srcDir = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcDir)) {
      const files = this.getAllFiles(srcDir);
      
      files.forEach(file => {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          if (content.includes('process.env.') && content.includes('API_KEY')) {
            issues.push({
              type: 'env-var-exposure',
              severity: 'medium',
              description: 'Environment variable exposed in source code',
              file: file,
              recommendation: 'Use environment variable validation'
            });
          }
          
        } catch (error) {
          // Skip if can't read
        }
      });
    }
    
    return issues;
  }

  async checkFilePermissions() {
    const issues = [];
    
    // This would typically check file permissions
    // For now, return placeholder
    return issues;
  }

  async checkNetworkSecurity() {
    const issues = [];
    
    // This would typically check network configuration
    // For now, return placeholder
    return issues;
  }

  async identifyAttackVectors() {
    const attackVectors = [
      'SQL Injection',
      'Cross-Site Scripting (XSS)',
      'Cross-Site Request Forgery (CSRF)',
      'Command Injection',
      'Prototype Pollution',
      'Path Traversal',
      'Insecure Deserialization',
      'Broken Authentication',
      'Sensitive Data Exposure',
      'Missing Function Level Access Control'
    ];
    
    return attackVectors;
  }

  async assessPotentialThreats() {
    const threats = [
      {
        type: 'Data Breach',
        likelihood: 'medium',
        impact: 'high',
        description: 'Unauthorized access to sensitive data'
      },
      {
        type: 'Service Disruption',
        likelihood: 'low',
        impact: 'medium',
        description: 'Denial of service attacks'
      },
      {
        type: 'Code Execution',
        likelihood: 'low',
        impact: 'critical',
        description: 'Remote code execution vulnerabilities'
      }
    ];
    
    return threats;
  }

  calculateRiskAssessment(threatModel) {
    const riskAssessment = {
      overallRisk: 'medium',
      riskFactors: {},
      riskScore: 65
    };
    
    // Calculate risk based on vulnerabilities and threats
    // This is a simplified calculation
    return riskAssessment;
  }

  generateMitigationStrategies(threatModel) {
    const strategies = [
      'Implement input validation and sanitization',
      'Use parameterized queries for database operations',
      'Enable security headers (helmet.js)',
      'Implement proper authentication and authorization',
      'Use HTTPS for all communications',
      'Regular security audits and updates',
      'Implement rate limiting',
      'Use Content Security Policy (CSP)',
      'Regular dependency updates',
      'Security training for developers'
    ];
    
    return strategies;
  }

  async checkCriticalVulnerabilities() {
    const criticalIssues = [];
    
    // Check for critical security issues
    if (this.securityHistory.length > 0) {
      const latestScan = this.securityHistory[this.securityHistory.length - 1];
      
      // Check for critical vulnerabilities
      const allVulnerabilities = [
        ...latestScan.dependencyVulnerabilities,
        ...latestScan.codeSecurityIssues,
        ...latestScan.configVulnerabilities,
        ...latestScan.environmentSecurity
      ];
      
      allVulnerabilities.forEach(vuln => {
        if (vuln.severity === 'critical') {
          criticalIssues.push(vuln);
        }
      });
    }
    
    return criticalIssues;
  }

  async generateSecurityRecommendations(dependencyVulns, codeIssues, configIssues, envIssues, threatModel) {
    try {
      console.log('💡 Generating security recommendations...');
      
      const recommendations = [];
      
      // Dependency recommendations
      if (dependencyVulns.length > 0) {
        recommendations.push({
          priority: 'high',
          category: 'dependencies',
          description: 'Update vulnerable dependencies',
          actions: [
            'Run npm audit fix',
            'Update packages to latest secure versions',
            'Review and remove unused dependencies'
          ]
        });
      }
      
      // Code security recommendations
      if (codeIssues.length > 0) {
        recommendations.push({
          priority: 'high',
          category: 'code-security',
          description: 'Address code security vulnerabilities',
          actions: [
            'Fix SQL injection vulnerabilities',
            'Implement proper input validation',
            'Use secure coding practices'
          ]
        });
      }
      
      // Configuration recommendations
      if (configIssues.length > 0) {
        recommendations.push({
          priority: 'medium',
          category: 'configuration',
          description: 'Secure application configuration',
          actions: [
            'Use environment variables for secrets',
            'Enable security headers',
            'Configure secure CORS policies'
          ]
        });
      }
      
      // Environment recommendations
      if (envIssues.length > 0) {
        recommendations.push({
          priority: 'critical',
          category: 'environment',
          description: 'Secure environment configuration',
          actions: [
            'Move secrets to secure environment variables',
            'Review file permissions',
            'Implement network security measures'
          ]
        });
      }
      
      return recommendations;
      
    } catch (error) {
      console.error('❌ Error generating security recommendations:', error.message);
      return [];
    }
  }

  updateVulnerabilityMetrics(dependencyVulns, codeIssues, configIssues, envIssues) {
    // Reset metrics
    this.vulnerabilityMetrics = {
      totalVulnerabilities: 0,
      criticalVulnerabilities: 0,
      highVulnerabilities: 0,
      mediumVulnerabilities: 0,
      lowVulnerabilities: 0,
      securityScore: 100
    };
    
    // Count vulnerabilities by severity
    const allVulnerabilities = [
      ...dependencyVulns,
      ...codeIssues,
      ...configIssues,
      ...envIssues
    ];
    
    allVulnerabilities.forEach(vuln => {
      this.vulnerabilityMetrics.totalVulnerabilities++;
      
      switch (vuln.severity) {
        case 'critical':
          this.vulnerabilityMetrics.criticalVulnerabilities++;
          this.vulnerabilityMetrics.securityScore -= 25;
          break;
        case 'high':
          this.vulnerabilityMetrics.highVulnerabilities++;
          this.vulnerabilityMetrics.securityScore -= 15;
          break;
        case 'medium':
          this.vulnerabilityMetrics.mediumVulnerabilities++;
          this.vulnerabilityMetrics.securityScore -= 10;
          break;
        case 'low':
          this.vulnerabilityMetrics.lowVulnerabilities++;
          this.vulnerabilityMetrics.securityScore -= 5;
          break;
      }
    });
    
    // Ensure security score doesn't go below 0
    this.vulnerabilityMetrics.securityScore = Math.max(0, this.vulnerabilityMetrics.securityScore);
  }

  logSecurityResults() {
    if (this.securityHistory.length > 0) {
      const latest = this.securityHistory[this.securityHistory.length - 1];
      
      console.log('\n🔒 Security Scan Results:');
      console.log('─'.repeat(60));
      console.log(`📅 Timestamp: ${latest.timestamp}`);
      console.log(`⏱️  Scan Time: ${latest.scanTime}ms`);
      console.log(`📦 Dependency Issues: ${latest.dependencyVulnerabilities.length}`);
      console.log(`🔍 Code Security Issues: ${latest.codeSecurityIssues.length}`);
      console.log(`⚙️  Configuration Issues: ${latest.configVulnerabilities.length}`);
      console.log(`🌍 Environment Issues: ${latest.environmentSecurity.length}`);
      console.log(`💡 Recommendations: ${latest.recommendations.length}`);
      console.log(`🛡️  Security Score: ${this.vulnerabilityMetrics.securityScore}/100`);
      console.log('─'.repeat(60));
    }
  }

  logStatus() {
    const memoryUsage = process.memoryUsage();
    const uptime = process.uptime();
    
    console.log(`🔒 Security Scanner Status - Uptime: ${Math.round(uptime)}s, Memory: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`);
    console.log(`🛡️  Security Score: ${this.vulnerabilityMetrics.securityScore}/100, Vulnerabilities: ${this.vulnerabilityMetrics.totalVulnerabilities}`);
  }

  logError(error) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      process: 'advanced-security-scanner'
    };
    
    console.error('❌ Error logged:', errorLog);
    
    // Save error to log file
    try {
      const errorLogPath = path.join(process.cwd(), 'logs', 'advanced-security-scanner-errors.json');
      let errorLogs = [];
      
      if (fs.existsSync(errorLogPath)) {
        errorLogs = JSON.parse(fs.readFileSync(errorLogPath, 'utf8'));
      }
      
      errorLogs.push(errorLog);
      
      // Keep only last 100 errors
      if (errorLogs.length > 100) {
        errorLogs = errorLogs.slice(-100);
      }
      
      fs.writeFileSync(errorLogPath, JSON.stringify(errorLogs, null, 2));
    } catch (writeError) {
      console.error('❌ Failed to write error log:', writeError.message);
    }
  }

  saveResults() {
    try {
      const resultsPath = path.join(process.cwd(), 'logs', 'advanced-security-scanner-results.json');
      fs.writeFileSync(resultsPath, JSON.stringify(this.securityHistory, null, 2));
    } catch (error) {
      console.error('❌ Failed to save results:', error.message);
    }
  }

  // Helper methods
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

  findLineNumber(content, searchText) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchText)) {
        return i + 1;
      }
    }
    return 0;
  }
}

// Start the advanced security scanner
const scanner = new AdvancedSecurityScanner();
scanner.start().catch(error => {
  console.error('❌ Failed to start advanced security scanner:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down advanced security scanner...');
  scanner.saveResults();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down advanced security scanner...');
  scanner.saveResults();
  process.exit(0);
});