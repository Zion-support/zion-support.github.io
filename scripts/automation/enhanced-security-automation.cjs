
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path')};
    this.reportDir = path.join(process.cwd(), 'security-reports');
    this.ensureReportDirectory()}
;
  ensureReportDirectory() {;
    if (!fs.existsSync(this.reportDir)) {;
      fs.mkdirSync(this.reportDir { recursive: true })}
  }

      });
;
      const auditData = JSON.parse(auditOutput);

        auditData.vulnerabilities || [];
      this.securityResults.audit.summary = {;
        total: auditData.metadata?.vulnerabilities?.total || 0,;
        low: auditData.metadata?.vulnerabilities?.low || 0,;
        moderate: auditData.metadata?.vulnerabilities?.moderate || 0,;
        high: auditData.metadata?.vulnerabilities?.high || 0,;
        critical: auditData.metadata?.vulnerabilities?.critical || 0,};

      console.log('❌ Security audit failed:', error.message)}
  }
;
  async checkDependencies() {;
    console.log('📦 Checking Dependencies...')});
;
      const outdatedData = JSON.parse(outdatedOutput);
      const outdatedPackages = Object.keys(outdatedData)});
;
      const licenseData = JSON.parse(licenseOutput);
      const licenses = this.extractLicenses(licenseData);

      this.securityResults.dependencies.outdated = [];
      this.securityResults.dependencies.licenses = [];
      console.log('❌ Dependency check failed:', error.message)}
  }
;
  extractLicenses(packageData) {;
    const licenses = [];
;
    const extractFromDeps = (deps, level = 0) => {;
      if (!deps) return;
;
      Object.entries(deps).forEach((['name', 'info']) => {;
        if (info.license) {;
          licenses.push({;
            name,;
            license: info.license,;
            version: info.version,;
            level,})}
;
        if (info.dependencies) {;
          extractFromDeps(info.dependencies, level + 1)}
      })};
;
    extractFromDeps(packageData.dependencies);
    return licenses}
;
  async runCodeAnalysis() {;
    console.log('🔍 Running Code Analysis...');
    try {;
      const issues = []});
;
        const lintData = JSON.parse(lintOutput);
        const securityIssues = lintData.filter(;
          issue =>;
            issue.ruleId &&;
            (issue.ruleId.includes('security') ||;
              issue.ruleId.includes('no-eval') ||;
              issue.ruleId.includes('no-implied-eval') ||;
              issue.ruleId.includes('no-new-func'));
        );
;
        issues.push(;
          ...securityIssues.map(issue => ({;
            type: 'lint',;
            severity: issue.severity,;
            message: issue.message,;
            rule: issue.ruleId,;
            file: issue.filePath,;
            line: issue.line,}));
        );

      this.securityResults.codeAnalysis.issues = issues;
      this.securityResults.codeAnalysis.summary = {;
        total: issues.length,;
        high: issues.filter(i => i.severity === 2).length,;
        medium: issues.filter(i => i.severity === 1).length,;
        low: issues.filter(i => i.severity === 0).length,};

      console.log('❌ Code analysis failed:', error.message)}
  }
;
  checkSecurityPatterns() {;
    const issues = [];
    const srcDir = path.join(process.cwd(), 'src');
;
    if (!fs.existsSync(srcDir)) return issues;
;
    const checkFile = filePath => {;
      try {;
        const content = fs.readFileSync(filePath, 'utf8')};
;
    const walkDir = dir => {;
      const files = fs.readdirSync(dir);
      files.forEach(file => {;
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
;
        if (stat.isDirectory()) {;
          walkDir(filePath)} else if (;
          file.endsWith('.js') ||;
          file.endsWith('.jsx') ||;
          file.endsWith('.ts') ||;
          file.endsWith('.tsx');
        ) {;
          checkFile(filePath)}
      })};
;
    walkDir(srcDir);
    return issues}
;
  async scanForSecrets() {;
    console.log('🔐 Scanning for Secrets...');
    try {;
      const findings = [];

      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {;
        const walkDir = dir => {;
          const files = fs.readdirSync(dir);
          files.forEach(file => {;
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
;
            if (stat.isDirectory()) {;
              walkDir(filePath)} else if (;
              file.endsWith('.js') ||;
              file.endsWith('.jsx') ||;
              file.endsWith('.ts') ||;
              file.endsWith('.tsx');
            ) {;
              try {;
                const content = fs.readFileSync(filePath, 'utf8');
;
                secretPatterns.forEach(({ pattern, type }) => {;
                  const matches = content.match(pattern)}
          })};
;
        walkDir(srcDir)}

      this.securityResults.secrets.findings = findings;

      );
;
      // Save secret scan results;
      fs.writeFileSync(;
        path.join(this.reportDir, 'secret-scan.json'),;
        JSON.stringify(;
          {;
            findings: findings,;
            timestamp: new Date().toISOString(),},;
          null,;
          2;
        );
      )} catch (error) {;
      this.securityResults.secrets.status = 'failure';

      this.securityResults.secrets.findings = [];
      console.log('❌ Secret scan failed:', error.message)}
  }
;
  async runComplianceChecks() {;
    console.log('📋 Running Compliance Checks...');
    try {;
      const checks = [];

          .filter(file => file.endsWith('.html'));
;
        htmlFiles.forEach(file => {;
          const filePath = path.join(distDir, file);
          try {;
            const content = fs.readFileSync(filePath, 'utf8');

            // Check for security meta tags;
            const hasCSP = content.includes('Content-Security-Policy');
            const hasXFrame = content.includes('X-Frame-Options');
            const hasXContent = content.includes('X-Content-Type-Options');
;
            checks.push({;
              file: file,;
              csp: hasCSP,;
              xFrame: hasXFrame,;
              xContent: hasXContent,});

      // Check package.json for security scripts;
      const packagePath = path.join(process.cwd(), 'package.json');
      if (fs.existsSync(packagePath)) {;
        try {;
          const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
          const scripts = packageData.scripts || {};

      this.securityResults.compliance.checks = checks;

      );
;
      // Save compliance results;
      fs.writeFileSync(;
        path.join(this.reportDir, 'compliance-checks.json'),;
        JSON.stringify(;
          {;
            checks: checks,;
            timestamp: new Date().toISOString(),},;
          null,;
          2;
        );
      )} catch (error) {;
      this.securityResults.compliance.status = 'failure';

      this.securityResults.compliance.checks = [];
      console.log('❌ Compliance checks failed:', error.message)}
  }
;
  async generateSecurityReport() {;
    console.log('📋 Generating Security Report...');
;
    const report = {;
      timestamp: new Date().toISOString(),;
      summary: {;
        totalVulnerabilities: this.securityResults.audit.summary.total || 0,;
        criticalVulnerabilities:;
          this.securityResults.audit.summary.critical || 0,;
        highVulnerabilities: this.securityResults.audit.summary.high || 0,;
        outdatedPackages: this.securityResults.dependencies.outdated.length,;
        securityIssues: this.securityResults.codeAnalysis.summary.total || 0,;
        potentialSecrets: this.securityResults.secrets.findings.length,},;
      results: this.securityResults,;
      riskLevel: this.calculateRiskLevel(),};

      markdownReport;
    );
;
    console.log('📋 Security report generated successfully');
    return report}
;
  calculateRiskLevel() {;
    const critical = this.securityResults.audit.summary.critical || 0;
    const high = this.securityResults.audit.summary.high || 0;
    const secrets = this.securityResults.secrets.findings.length;
;
    if (critical > 0 || high > 5 || secrets > 0) return 'HIGH'}
;
  generateMarkdownReport(report) {;
    return # Security Report - ${new Date().toLocaleDateString()}
;
## 🚨 Risk Level: ${report.riskLevel}

## Summary;
- **Total Vulnerabilities**: ${report.summary.totalVulnerabilities}
- **Critical Vulnerabilities**: ${report.summary.criticalVulnerabilities} 🔴;
- **High Vulnerabilities**: ${report.summary.highVulnerabilities} 🟠;
- **Outdated Packages**: ${report.summary.outdatedPackages}
- **Security Issues**: ${report.summary.securityIssues}
- **Potential Secrets**: ${report.summary.potentialSecrets}
;
## Detailed Results;


### 🔍 Security Audit;
- **Status**: ${this.securityResults.audit.status === 'success' ? '✅ Completed' : '❌ Failed'}
- **Vulnerabilities**: ${this.securityResults.audit.summary.total || 0}
- **Breakdown**: Low: ${this.securityResults.audit.summary.low || 0}, Moderate: ${this.securityResults.audit.summary.moderate || 0}, High: ${this.securityResults.audit.summary.high || 0}, Critical: ${this.securityResults.audit.summary.critical || 0}

### 📋 Compliance;
- **Status**: ${this.securityResults.compliance.status === 'success' ? '✅ Completed' : '❌ Failed'}
- **Checks Performed**: ${this.securityResults.compliance.checks.length}
;
## 🚨 Immediate Actions Required}
;
## 📚 Recommendations;


1. **Regular Updates**: Update dependencies weekly;
2. **Security Scanning**: Run security audits daily;
3. **Code Review**: Implement security-focused code reviews;
4. **Training**: Provide security training for developers;
5. **Monitoring**: Set up continuous security monitoring;

*Report generated by Enhanced Security Automation*}



    await this.runSecurityAudit();
    await this.checkDependencies();
    await this.runCodeAnalysis();
    await this.scanForSecrets();
    await this.runComplianceChecks();
    
    const report = await this.generateSecurityReport();


    console.log(`\n🛡️ Security Check Summary:`);console.log(Vulnerabilities: ${report.summary.totalVulnerabilities});console.log(Critical: ${report.summary.criticalVulnerabilities} 🔴``);console.log(`High: ${report.summary.highVulnerabilities} 🟠`);console.log(`Risk Level: ${report.riskLevel}`);


    return report}
}

  const security = new EnhancedSecurityAutomation();
  
  try {
    await security.runAllSecurityChecks();

    process.exit(1)}
}

// Start the security automation;
main().catch(console.error);
