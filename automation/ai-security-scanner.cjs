#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AISecurityScanner {
  constructor() {
    this.vulnerabilities = new Map();
    this.securityIssues = new Map();
    this.scanHistory = [];
    this.logFile = path.join(__dirname, 'logs', 'ai-security-scanner.log');
    this.ensureLogDirectory();
    
    // Configuration from environment
    this.scanInterval = parseInt(process.env.SCAN_INTERVAL) || 600000; // 10 minutes
    this.aiThreatDetection = process.env.AI_THREAT_DETECTION === 'true';
    this.autoPatch = process.env.AUTO_PATCH === 'true';
    
    // Security patterns database
    this.securityPatterns = this.initializeSecurityPatterns();
    
    this.log('🚀 AI Security Scanner initialized');
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  initializeSecurityPatterns() {
    return {
      // Critical security vulnerabilities
      critical: [
        { pattern: 'eval\\(', severity: 'critical', description: 'Code injection vulnerability', fix: 'Remove eval() usage' },
        { pattern: 'innerHTML\\s*=', severity: 'critical', description: 'XSS vulnerability', fix: 'Use textContent or sanitize input' },
        { pattern: 'document\\.write', severity: 'critical', description: 'XSS vulnerability', fix: 'Use safer DOM manipulation' },
        { pattern: 'setTimeout\\(["\']', severity: 'critical', description: 'Code injection vulnerability', fix: 'Use function references instead of strings' },
        { pattern: 'setInterval\\(["\']', severity: 'critical', description: 'Code injection vulnerability', fix: 'Use function references instead of strings' }
      ],
      
      // High security risks
      high: [
        { pattern: 'localStorage\\.setItem', severity: 'high', description: 'Sensitive data storage', fix: 'Review data being stored, consider encryption' },
        { pattern: 'sessionStorage\\.setItem', severity: 'high', description: 'Sensitive data storage', fix: 'Review data being stored, consider encryption' },
        { pattern: 'cookies\\.set', severity: 'high', description: 'Sensitive data in cookies', fix: 'Review cookie data, set secure flags' },
        { pattern: 'fetch\\(', severity: 'high', description: 'Network request', fix: 'Validate and sanitize URLs' },
        { pattern: 'XMLHttpRequest', severity: 'high', description: 'Network request', fix: 'Validate and sanitize URLs' }
      ],
      
      // Medium security risks
      medium: [
        { pattern: 'console\\.log', severity: 'medium', description: 'Debug information exposure', fix: 'Remove or secure debug logs in production' },
        { pattern: 'debugger;', severity: 'medium', description: 'Debug statement', fix: 'Remove debugger statements' },
        { pattern: 'alert\\(', severity: 'medium', description: 'User input display', fix: 'Sanitize user input before display' },
        { pattern: 'confirm\\(', severity: 'medium', description: 'User input handling', fix: 'Validate user input' },
        { pattern: 'prompt\\(', severity: 'medium', description: 'User input collection', fix: 'Validate and sanitize user input' }
      ],
      
      // Low security risks
      low: [
        { pattern: '\\/\\*\\s*TODO', severity: 'low', description: 'Unfinished security implementation', fix: 'Complete security implementation' },
        { pattern: '\\/\\/\\s*FIXME', severity: 'low', description: 'Security issue to fix', fix: 'Address security concerns' },
        { pattern: '\\/\\/\\s*HACK', severity: 'low', description: 'Security workaround', fix: 'Implement proper security solution' }
      ]
    };
  }

  async startSecurityScanning() {
    this.log('🔒 Starting AI-powered security scanning...');
    
    // Run initial security scan
    await this.runSecurityScan();
    
    // Set up continuous scanning
    setInterval(async () => {
      this.log('🔄 Running continuous security scan...');
      await this.runSecurityScan();
    }, this.scanInterval);
    
    // Set up file watcher for immediate response
    this.startSecurityFileWatcher();
    
    this.log(`✅ Security scanning started with ${this.scanInterval / 1000}s intervals`);
  }

  async runSecurityScan() {
    this.log('🔍 Starting comprehensive security scan...');
    
    try {
      // Scan source code for security vulnerabilities
      await this.scanSourceCode();
      
      // Scan dependencies for known vulnerabilities
      await this.scanDependencies();
      
      // Scan configuration files for security issues
      await this.scanConfigurationFiles();
      
      // Scan for common security anti-patterns
      await this.scanSecurityAntiPatterns();
      
      // Generate security report
      const report = this.generateSecurityReport();
      
      // Apply auto-patches if enabled
      if (this.autoPatch) {
        await this.applySecurityPatches();
      }
      
      this.log('✅ Security scan completed successfully');
      return report;
      
    } catch (error) {
      this.log(`❌ Security scan failed: ${error.message}`);
      return null;
    }
  }

  async scanSourceCode() {
    this.log('🔍 Scanning source code for security vulnerabilities...');
    
    const sourceFiles = this.getSourceFiles();
    let totalIssues = 0;
    
    for (const filePath of sourceFiles) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fileIssues = this.analyzeFileSecurity(content, filePath);
        
        if (fileIssues.length > 0) {
          this.securityIssues.set(filePath, fileIssues);
          totalIssues += fileIssues.length;
        }
      } catch (error) {
        this.log(`⚠️ Error reading file ${filePath}: ${error.message}`);
      }
    }
    
    this.log(`🔍 Source code scan completed: ${totalIssues} security issues found`);
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'pages', 'components', 'utils', 'hooks', 'services'];
    const sourceFiles = [];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, sourceFiles);
      }
    }
    
    return sourceFiles.filter(file => 
      file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')
    );
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else {
        files.push(fullPath);
      }
    }
  }

  analyzeFileSecurity(content, filePath) {
    const issues = [];
    
    // Check each security pattern category
    for (const [severity, patterns] of Object.entries(this.securityPatterns)) {
      for (const pattern of patterns) {
        const matches = content.match(new RegExp(pattern.pattern, 'gi'));
        if (matches) {
          issues.push({
            severity,
            pattern: pattern.pattern,
            description: pattern.description,
            fix: pattern.fix,
            matches: matches.length,
            lineNumbers: this.findLineNumbers(content, pattern.pattern)
          });
        }
      }
    }
    
    // AI-powered additional security analysis
    if (this.aiThreatDetection) {
      const aiIssues = this.performAISecurityAnalysis(content, filePath);
      issues.push(...aiIssues);
    }
    
    return issues;
  }

  findLineNumbers(content, pattern) {
    const lines = content.split('\n');
    const lineNumbers = [];
    
    for (let i = 0; i < lines.length; i++) {
      if (new RegExp(pattern, 'i').test(lines[i])) {
        lineNumbers.push(i + 1);
      }
    }
    
    return lineNumbers;
  }

  performAISecurityAnalysis(content, filePath) {
    const aiIssues = [];
    
    // Analyze import statements for security risks
    const importMatches = content.match(/import\s+.*from\s+['"]([^'"]+)['"]/g);
    if (importMatches) {
      for (const importStmt of importMatches) {
        if (importStmt.includes('http://') && !importStmt.includes('localhost')) {
          aiIssues.push({
            severity: 'high',
            pattern: 'insecure-import',
            description: 'Insecure HTTP import detected',
            fix: 'Use HTTPS or local imports only',
            matches: 1,
            lineNumbers: this.findLineNumbers(content, importStmt)
          });
        }
      }
    }
    
    // Analyze API endpoints for security
    const apiMatches = content.match(/fetch\s*\(\s*['"]([^'"]+)['"]/g);
    if (apiMatches) {
      for (const apiCall of apiMatches) {
        if (apiCall.includes('http://') && !apiCall.includes('localhost')) {
          aiIssues.push({
            severity: 'high',
            pattern: 'insecure-api',
            description: 'Insecure HTTP API call detected',
            fix: 'Use HTTPS endpoints only',
            matches: 1,
            lineNumbers: this.findLineNumbers(content, apiCall)
          });
        }
      }
    }
    
    // Analyze authentication patterns
    if (content.includes('password') && content.includes('localStorage')) {
      aiIssues.push({
        severity: 'critical',
        pattern: 'password-storage',
        description: 'Password stored in localStorage',
        fix: 'Use secure authentication methods, never store passwords in localStorage',
        matches: 1,
        lineNumbers: this.findLineNumbers(content, 'password.*localStorage')
      });
    }
    
    // Analyze form handling
    if (content.includes('form') && content.includes('innerHTML')) {
      aiIssues.push({
        severity: 'critical',
        pattern: 'form-xss',
        description: 'Form content rendered with innerHTML',
        fix: 'Use textContent or sanitize form input before rendering',
        matches: 1,
        lineNumbers: this.findLineNumbers(content, 'form.*innerHTML')
      });
    }
    
    return aiIssues;
  }

  async scanDependencies() {
    this.log('📦 Scanning dependencies for known vulnerabilities...');
    
    try {
      // Check if npm audit is available
      const auditResult = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditResult);
      
      if (auditData.vulnerabilities) {
        for (const [packageName, vulnData] of Object.entries(auditData.vulnerabilities)) {
          this.vulnerabilities.set(packageName, {
            severity: vulnData.severity,
            title: vulnData.title,
            description: vulnData.description,
            recommendation: vulnData.recommendation,
            via: vulnData.via
          });
        }
      }
      
      this.log(`📦 Dependency scan completed: ${this.vulnerabilities.size} vulnerabilities found`);
      
    } catch (error) {
      this.log(`⚠️ Dependency scan failed: ${error.message}`);
    }
  }

  async scanConfigurationFiles() {
    this.log('⚙️ Scanning configuration files for security issues...');
    
    const configFiles = [
      'package.json',
      'vite.config.ts',
      'tsconfig.json',
      '.env',
      '.env.local',
      '.env.production'
    ];
    
    for (const configFile of configFiles) {
      if (fs.existsSync(configFile)) {
        await this.analyzeConfigFileSecurity(configFile);
      }
    }
  }

  async analyzeConfigFileSecurity(configFile) {
    try {
      const content = fs.readFileSync(configFile, 'utf8');
      
      // Check for sensitive information
      if (content.includes('API_KEY') || content.includes('SECRET') || content.includes('PASSWORD')) {
        this.log(`⚠️ Potential sensitive information in ${configFile}`);
      }
      
      // Check for insecure configurations
      if (configFile === 'vite.config.ts' && content.includes('https: false')) {
        this.log(`⚠️ HTTPS disabled in ${configFile}`);
      }
      
    } catch (error) {
      this.log(`⚠️ Error analyzing config file ${configFile}: ${error.message}`);
    }
  }

  async scanSecurityAntiPatterns() {
    this.log('🚫 Scanning for security anti-patterns...');
    
    // Check for common security mistakes
    const antiPatterns = [
      'hardcoded-credentials',
      'exposed-endpoints',
      'insecure-defaults',
      'missing-csrf-protection',
      'weak-authentication'
    ];
    
    for (const pattern of antiPatterns) {
      await this.checkAntiPattern(pattern);
    }
  }

  async checkAntiPattern(pattern) {
    // Implementation for checking specific anti-patterns
    switch (pattern) {
      case 'hardcoded-credentials':
        await this.checkHardcodedCredentials();
        break;
      case 'exposed-endpoints':
        await this.checkExposedEndpoints();
        break;
      case 'insecure-defaults':
        await this.checkInsecureDefaults();
        break;
      case 'missing-csrf-protection':
        await this.checkCSRFProtection();
        break;
      case 'weak-authentication':
        await this.checkWeakAuthentication();
        break;
    }
  }

  async checkHardcodedCredentials() {
    const sourceFiles = this.getSourceFiles();
    
    for (const filePath of sourceFiles) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for hardcoded credentials
        if (content.includes('password') && content.includes('"') && content.includes('=')) {
          this.log(`⚠️ Potential hardcoded credentials in ${filePath}`);
        }
        
        if (content.includes('api_key') && content.includes('"') && content.includes('=')) {
          this.log(`⚠️ Potential hardcoded API key in ${filePath}`);
        }
        
      } catch (error) {
        // Continue with next file
      }
    }
  }

  async checkExposedEndpoints() {
    // Check for exposed API endpoints
    const sourceFiles = this.getSourceFiles();
    
    for (const filePath of sourceFiles) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for exposed endpoints
        if (content.includes('/api/') && !content.includes('auth') && !content.includes('protected')) {
          this.log(`⚠️ Potential exposed API endpoint in ${filePath}`);
        }
        
      } catch (error) {
        // Continue with next file
      }
    }
  }

  async checkInsecureDefaults() {
    // Check for insecure default configurations
    if (fs.existsSync('vite.config.ts')) {
      try {
        const content = fs.readFileSync('vite.config.ts', 'utf8');
        
        if (content.includes('https: false') || content.includes('secure: false')) {
          this.log('⚠️ Insecure defaults detected in Vite configuration');
        }
        
      } catch (error) {
        // Continue
      }
    }
  }

  async checkCSRFProtection() {
    // Check for CSRF protection
    const sourceFiles = this.getSourceFiles();
    let hasCSRFProtection = false;
    
    for (const filePath of sourceFiles) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('csrf') || content.includes('CSRF') || content.includes('X-CSRF-Token')) {
          hasCSRFProtection = true;
          break;
        }
        
      } catch (error) {
        // Continue with next file
      }
    }
    
    if (!hasCSRFProtection) {
      this.log('⚠️ No CSRF protection detected');
    }
  }

  async checkWeakAuthentication() {
    // Check for weak authentication patterns
    const sourceFiles = this.getSourceFiles();
    
    for (const filePath of sourceFiles) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for weak authentication
        if (content.includes('password') && content.includes('==') && !content.includes('bcrypt')) {
          this.log(`⚠️ Weak password comparison detected in ${filePath}`);
        }
        
        if (content.includes('localStorage') && content.includes('token')) {
          this.log(`⚠️ Authentication token stored in localStorage in ${filePath}`);
        }
        
      } catch (error) {
        // Continue with next file
      }
    }
  }

  async applySecurityPatches() {
    this.log('🔧 Applying security patches...');
    
    let patchesApplied = 0;
    
    // Apply patches for source code issues
    for (const [filePath, issues] of this.securityIssues) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        let modifiedContent = content;
        let hasChanges = false;
        
        for (const issue of issues) {
          if (issue.severity === 'critical' || issue.severity === 'high') {
            const patchedContent = this.applySecurityPatch(modifiedContent, issue);
            if (patchedContent !== modifiedContent) {
              modifiedContent = patchedContent;
              hasChanges = true;
              patchesApplied++;
            }
          }
        }
        
        if (hasChanges) {
          fs.writeFileSync(filePath, modifiedContent);
          this.log(`🔧 Applied security patches to ${filePath}`);
        }
        
      } catch (error) {
        this.log(`❌ Error applying patches to ${filePath}: ${error.message}`);
      }
    }
    
    this.log(`🔧 Security patches applied: ${patchesApplied} patches`);
  }

  applySecurityPatch(content, issue) {
    let modifiedContent = content;
    
    switch (issue.pattern) {
      case 'eval\\(':
        // Replace eval with safer alternatives
        modifiedContent = modifiedContent.replace(/eval\s*\(/g, '// SECURITY: eval() removed - ');
        break;
      case 'innerHTML\\s*=':
        // Replace innerHTML with textContent
        modifiedContent = modifiedContent.replace(/innerHTML\s*=/g, 'textContent =');
        break;
      case 'document\\.write':
        // Comment out document.write
        modifiedContent = modifiedContent.replace(/document\.write/g, '// SECURITY: document.write removed');
        break;
      case 'setTimeout\\(["\']':
        // Replace string setTimeout with function reference
        modifiedContent = modifiedContent.replace(/setTimeout\s*\(\s*["']([^"']+)["']/g, 'setTimeout(() => { /* $1 */ })');
        break;
      case 'setInterval\\(["\']':
        // Replace string setInterval with function reference
        modifiedContent = modifiedContent.replace(/setInterval\s*\(\s*["']([^"']+)["']/g, 'setInterval(() => { /* $1 */ })');
        break;
    }
    
    return modifiedContent;
  }

  generateSecurityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: this.securityIssues.size,
        totalVulnerabilities: this.vulnerabilities.size,
        criticalIssues: 0,
        highIssues: 0,
        mediumIssues: 0,
        lowIssues: 0
      },
      sourceCodeIssues: Object.fromEntries(
        Array.from(this.securityIssues.entries()).map(([file, issues]) => [
          file,
          issues.map(issue => ({
            severity: issue.severity,
            description: issue.description,
            fix: issue.fix,
            matches: issue.matches,
            lineNumbers: issue.lineNumbers
          }))
        ])
      ),
      dependencyVulnerabilities: Object.fromEntries(this.vulnerabilities),
      recommendations: this.generateSecurityRecommendations(),
      riskScore: this.calculateRiskScore()
    };
    
    // Calculate summary counts
    for (const [file, issues] of this.securityIssues) {
      for (const issue of issues) {
        report.summary[`${issue.severity}Issues`]++;
      }
    }
    
    // Save report
    const reportFile = path.join(__dirname, 'logs', 'security-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log('📊 Security report generated and saved');
    return report;
  }

  generateSecurityRecommendations() {
    const recommendations = [];
    
    // Generate recommendations based on findings
    if (this.securityIssues.size > 0) {
      recommendations.push({
        priority: 'high',
        category: 'source-code',
        message: 'Address critical and high severity security issues in source code',
        action: 'Review and fix identified security vulnerabilities'
      });
    }
    
    if (this.vulnerabilities.size > 0) {
      recommendations.push({
        priority: 'high',
        category: 'dependencies',
        message: 'Update dependencies with known vulnerabilities',
        action: 'Run npm audit fix and update vulnerable packages'
      });
    }
    
    // Add specific recommendations based on patterns found
    for (const [file, issues] of this.securityIssues) {
      for (const issue of issues) {
        if (issue.severity === 'critical') {
          recommendations.push({
            priority: 'critical',
            category: 'immediate-action',
            message: `Fix critical security issue: ${issue.description}`,
            action: issue.fix,
            file: file
          });
        }
      }
    }
    
    return recommendations;
  }

  calculateRiskScore() {
    let riskScore = 100; // Start with perfect score
    
    // Deduct points for each issue
    for (const [file, issues] of this.securityIssues) {
      for (const issue of issues) {
        switch (issue.severity) {
          case 'critical':
            riskScore -= 25;
            break;
          case 'high':
            riskScore -= 15;
            break;
          case 'medium':
            riskScore -= 10;
            break;
          case 'low':
            riskScore -= 5;
            break;
        }
      }
    }
    
    // Deduct points for dependency vulnerabilities
    for (const [package, vuln] of this.vulnerabilities) {
      switch (vuln.severity) {
        case 'critical':
          riskScore -= 20;
          break;
        case 'high':
          riskScore -= 15;
          break;
        case 'moderate':
          riskScore -= 10;
          break;
        case 'low':
          riskScore -= 5;
          break;
      }
    }
    
    return Math.max(0, riskScore);
  }

  startSecurityFileWatcher() {
    this.log('👀 Starting security file watcher...');
    
    // Watch source directories for security-relevant changes
    const watchDirs = ['src', 'pages', 'components', 'utils', 'hooks', 'services'];
    
    for (const dir of watchDirs) {
      if (fs.existsSync(dir)) {
        fs.watch(dir, { recursive: true }, (eventType, filename) => {
          if (filename && (filename.endsWith('.ts') || filename.endsWith('.tsx') || filename.endsWith('.js'))) {
            const filePath = path.join(dir, filename);
            this.log(`📝 Security check for changed file: ${filePath}`);
            
            // Wait a bit for file to be fully written
            setTimeout(async () => {
              await this.checkFileSecurity(filePath);
            }, 2000);
          }
        });
      }
    }
    
    this.log('✅ Security file watcher started');
  }

  async checkFileSecurity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const issues = this.analyzeFileSecurity(content, filePath);
      
      if (issues.length > 0) {
        this.log(`⚠️ Security issues detected in ${filePath}: ${issues.length} issues`);
        
        if (this.autoPatch) {
          await this.processFileSecurityIssues(filePath, issues);
        }
      }
      
    } catch (error) {
      this.log(`❌ Error checking security for ${filePath}: ${error.message}`);
    }
  }

  async processFileSecurityIssues(filePath, issues) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let hasChanges = false;
      
      for (const issue of issues) {
        if (issue.severity === 'critical' || issue.severity === 'high') {
          const patchedContent = this.applySecurityPatch(content, issue);
          if (patchedContent !== content) {
            content = patchedContent;
            hasChanges = true;
          }
        }
      }
      
      if (hasChanges) {
        fs.writeFileSync(filePath, content);
        this.log(`🔧 Auto-patched security issues in ${filePath}`);
      }
      
    } catch (error) {
      this.log(`❌ Error processing security issues for ${filePath}: ${error.message}`);
    }
  }

  getStatus() {
    return {
      running: true,
      lastScan: this.scanHistory.length > 0 ? this.scanHistory[this.scanHistory.length - 1].timestamp : null,
      totalIssues: this.securityIssues.size,
      totalVulnerabilities: this.vulnerabilities.size,
      riskScore: this.calculateRiskScore(),
      aiThreatDetection: this.aiThreatDetection,
      autoPatch: this.autoPatch,
      scanInterval: this.scanInterval
    };
  }

  stop() {
    this.log('🛑 AI Security Scanner stopped');
  }
}

// CLI handling
const scanner = new AISecurityScanner();
const command = process.argv[2];

switch (command) {
  case 'start':
    scanner.startSecurityScanning();
    break;
  case 'scan':
    scanner.runSecurityScan();
    break;
  case 'status':
    const status = scanner.getStatus();
    console.log(JSON.stringify(status, null, 2));
    process.exit(0);
    break;
  case 'report':
    const report = scanner.generateSecurityReport();
    console.log(JSON.stringify(report, null, 2));
    process.exit(0);
    break;
  default:
    console.log('Usage: node ai-security-scanner.cjs [start|scan|status|report]');
    console.log('\nCommands:');
    console.log('  start   - Start continuous security scanning');
    console.log('  scan    - Run single security scan');
    console.log('  status  - Show current status');
    console.log('  report  - Generate security report');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  scanner.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  scanner.stop();
  process.exit(0);
});