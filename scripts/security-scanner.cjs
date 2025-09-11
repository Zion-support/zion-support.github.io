<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilities = [];
    this.recommendations = [];
    this.stats = {
      filesScanned: 0,
      vulnerabilitiesFound: 0,
      highRisk: 0,
      mediumRisk: 0,
      lowRisk: 0
    };
  }
  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const emoji = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'SECURITY': '🔒',
      'CRITICAL': '🚨'
    }[type] || 'ℹ️';
  }
  async scanDependencies() {
    this.log('Scanning dependencies for vulnerabilities...', 'SECURITY');
    try {
      // Run npm audit
      const auditOutput = execSync('npm audit --json', {
        cwd: this.projectRoot,
        stdio: 'pipe',
const fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class SecurityScanner { constructor() { this.projectRoot = process.cwd(); this.vulnerabilities = []; this.recommendations = []; this.stats = { filesScanned: 0, vulnerabilitiesFound: 0, highRisk: 0, mediumRisk: 0, lowRisk: 0 }; }" log(message, type = "INFO") { const timestamp = new Date().toISOString(); const emoji = {" INFO: ""," SUCCESS: ""," ERROR: ""," WARNING: ""," SECURITY: ""," CRITICAL: """ }[type] | ""; console.log(`[${timestamp}] [${type}] ${emoji} ${message}`); } async scanDependencies() {" this.log("Scanning dependencies for vulnerabilities.", "SECURITY"); try { / Run npm audit" const auditOutput = execSync("npm audit --json", { cwd: this.projectRoot," stdio: "pipe"," encoding: "utf8" }).toString(); const auditData = JSON.parse(auditOutput); if (auditData.vulnerabilities) { Object.entries(auditData.vulnerabilities).forEach(([packageName, vuln]) => {" const severity = vuln.severity | "low"; const riskLevel = this.getRiskLevel(severity); this.vulnerabilities.push({" type: "dependency", package: packageName, severity: severity, riskLevel: riskLevel," description: vuln.description | "No description available"," recommendation: vuln.recommendation | "Update to latest version" }); this.stats.vulnerabilitiesFound++;" this.stats[riskLevel + "Risk"]++; }); } "` this.log(`Found ${this.stats.vulnerabilitiesFound} dependency vulnerabilities`, "WARNING"); } catch (error) {"` this.log(`Dependency scan failed: ${error.message}`, "ERROR"); } } async scanCode() {" this.log("Scanning code for security issues.", "SECURITY"); const files = this.getAllFiles(this.projectRoot); const securityPatterns = [ {" pattern: /password\s*=\s*[""][^""]+[""]/gi," type: "hardcoded_password"," severity: "high"," message: "Hardcoded password found" }, {"" pattern: /api[_-]?key\s*=\s*[""][^""]+[""]/gi," type: "hardcoded_api_key"," severity: "high"," message: "Hardcoded API key found" }, {"" pattern: /secret\s*=\s*[""][^""]+[""]/gi," type: "hardcoded_secret"," severity: "high"," message: "Hardcoded secret found" }, { pattern: /eval\s*\(/gi," type: "eval_usage"," severity: "high"," message: "eval() function usage detected" }, { pattern: /innerHTML\s*=/gi," type: "innerhtml_usage"," severity: "medium"," message: "innerHTML usage detected (potential XSS)" }, { pattern: /document\.write\s*\(/gi," type: "document_write"," severity: "medium"," message: "document.write() usage detected" }, { pattern: /http:\/\/gi," type: "insecure_http"," severity: "medium"," message: "Insecure HTTP URL found" }, { pattern: /console\.log\s*\([^)]*password[^)]*\)/gi," type: "password_logging"," severity: "high"," message: "Password logging detected" } ]; files.forEach(file => { if (this.isCodeFile(file)) { this.stats.filesScanned++;" const content = fs.readFileSync(file, "utf8"); securityPatterns.forEach(pattern => { const matches = content.match(pattern.pattern); if (matches) { matches.forEach(match => { const lineNumber = this.getLineNumber(content, match); const riskLevel = this.getRiskLevel(pattern.severity); this.vulnerabilities.push({ type: pattern.type, file: path.relative(this.projectRoot, file), line: lineNumber, severity: pattern.severity, riskLevel: riskLevel, description: pattern.message, code: match.trim(), recommendation: this.getRecommendation(pattern.type) }); this.stats.vulnerabilitiesFound++;" this.stats[riskLevel + "Risk"]++; }); } }); } }); "` this.log(`Scanned ${this.stats.filesScanned} files`, "INFO"); } async scanEnvironment() {" this.log("Scanning environment configuration.", "SECURITY"); " const envFiles = [".env", ".env.local", ".env.development", ".env.production"]; envFiles.forEach(envFile => { const envPath = path.join(this.projectRoot, envFile); if (fs.existsSync(envPath)) {" const content = fs.readFileSync(envPath, "utf8");" const lines = content.split("\n"); lines.forEach((line, index) => {" if (line.includes("=") && !line.startsWith("#")) {" const [key, value] = line.split("="); / Check for sensitive data" if (key.toLowerCase().includes("password") | " key.toLowerCase().includes("secret") | " key.toLowerCase().includes("key")) { if (value && value.length < 8) { this.vulnerabilities.push({" type: "weak_environment_variable", file: envFile, line: index + 1," severity: "medium"," riskLevel: "medium",` description: `Weak ${key} in environment file`," recommendation: "Use stronger values for sensitive environment variables" }); this.stats.vulnerabilitiesFound++; this.stats.mediumRisk++; } } } }); } }); } async checkSecurityHeaders() {" this.log("Checking security headers.", "SECURITY"); " const nextConfigPath = path.join(this.projectRoot, "next.config.js"); if (fs.existsSync(nextConfigPath)) {" const content = fs.readFileSync(nextConfigPath, "utf8"); " if (!content.includes("securityHeaders") && !content.includes("headers")) { this.recommendations.push({" type: "security_headers"," priority: "high"," message: "Add security headers to Next.js configuration"," recommendation: "Implement CSP, HSTS, X-Frame-Options, and other security headers" }); } } } getRiskLevel(severity) { switch (severity.toLowerCase()) {" case critical:" case high:" return "high";" case moderate:" case medium:" return "medium";" case low:" case info:" return "low"; default:" return "low"; } } getLineNumber(content, match) {" const lines = content.split("\n"); for (let i = 0; i < lines.length; i++) { if (lines[i].includes(match)) { return i + 1; } } return 0; } getRecommendation(type) { const recommendations = {" hardcoded_password: "Use environment variables or secure credential management"," hardcoded_api_key: "Store API keys in environment variables"," hardcoded_secret: "Use secure secret management system"," eval_usage: "Avoid eval() - use safer alternatives"," innerhtml_usage: "Use textContent or sanitize HTML content"," document_write: "Use modern DOM manipulation methods"," insecure_http: "Use HTTPS for all external resources"," password_logging: "Never log sensitive information"," weak_environment_variable: "Use stronger values for sensitive variables" }; " return recommendations[type] | "Review and fix security issue"; } isCodeFile(filePath) { const ext = path.extname(filePath).toLowerCase();" return [".js", ".jsx", ".ts", ".tsx", ".cjs", ".mjs"].includes(ext); } getAllFiles(dirPath) { let files = []; try { const items = fs.readdirSync(dirPath); items.forEach(item => { const fullPath = path.join(dirPath, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { / Skip node_modules, .next, .git directories" if (item !== "node_modules" && item !== ".next" && item !== ".git") { files = files.concat(this.getAllFiles(fullPath)); } } else { files.push(fullPath); } }); } catch (error) {" / Skip directories we can"t read } return files; } generateReport() {" this.log("\n Security Scan Report", "SECURITY");" this.log("=" .repeat(50));` console.log(`\n Files Scanned: ${this.stats.filesScanned}`);` console.log(` Total Vulnerabilities: ${this.stats.vulnerabilitiesFound}`);` console.log(` High Risk: ${this.stats.highRisk}`);` console.log(` Medium Risk: ${this.stats.mediumRisk}`);` console.log(` Low Risk: ${this.stats.lowRisk}`); if (this.vulnerabilities.length > 0) {" console.log("\n Vulnerabilities Found:"); / Group by risk level" const highRisk = this.vulnerabilities.filter(v => v.riskLevel === "high");" const mediumRisk = this.vulnerabilities.filter(v => v.riskLevel === "medium");" const lowRisk = this.vulnerabilities.filter(v => v.riskLevel === "low"); if (highRisk.length > 0) {" console.log("\n High Risk Issues:"); highRisk.forEach((vuln, index) => {` console.log(` ${index + 1}. ${vuln.description}`);"` console.log(` File: ${vuln.file}${vuln.line ? `:${vuln.line}` : ""}`);` console.log(` Recommendation: ${vuln.recommendation}`); }); } if (mediumRisk.length > 0) {" console.log("\n Medium Risk Issues:"); mediumRisk.forEach((vuln, index) => {` console.log(` ${index + 1}. ${vuln.description}`);"` console.log(` File: ${vuln.file}${vuln.line ? `:${vuln.line}` : ""}`); }); } if (lowRisk.length > 0) {" console.log("\n Low Risk Issues:"); lowRisk.forEach((vuln, index) => {` console.log(` ${index + 1}. ${vuln.description}`);"` console.log(` File: ${vuln.file}${vuln.line ? `:${vuln.line}` : ""}`); }); } } if (this.recommendations.length > 0) {" console.log("\n Security Recommendations:"); this.recommendations.forEach((rec, index) => {" const priority = rec.priority === "high" ? "" : rec.priority === "medium" ? "" : "";` console.log(` ${index + 1}. ${priority} ${rec.message}`);` console.log(` ${rec.recommendation}`); }); } / Security grade" let grade = "A";" if (this.stats.highRisk > 0) grade = "D";" else if (this.stats.mediumRisk > 5) grade = "C";" else if (this.stats.mediumRisk > 0) grade = "B";` console.log(`\n Security Grade: ${grade}`); if (this.stats.highRisk > 0) {" this.log(" CRITICAL: High-risk vulnerabilities found!", "CRITICAL"); } else if (this.stats.mediumRisk > 0) {" this.log(" Medium-risk vulnerabilities found", "WARNING"); } else {" this.log(" No critical security issues found!", "SUCCESS"); } } async run() {" this.log(" Starting Security Scanner", "SECURITY");` this.log(`Project Root: ${this.projectRoot}`); try { await this.scanDependencies(); await this.scanCode(); await this.scanEnvironment(); await this.checkSecurityHeaders(); this.generateReport(); } catch (error) {"` this.log(`Error during security scan: ${error.message}`, "ERROR"); process.exit(1); } }}/ Run the scannerif (require.main === module) { const scanner = new SecurityScanner(); scanner.run().catch(console.error);}module.exports = SecurityScanner;'"`'"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')
      'INFO': 'ℹ'
      'SUCCESS': ''
      'ERROR': ''
      'WARNING': '⚠'
      'SECURITY': '�'
      'CRITICAL': '�'
    }[type] || 'ℹ'
    this.log('Scanning dependencies for vulnerabilities...', 'SECURITY')
      const auditOutput = execSync('npm audit --json')
        stdio: 'pipe'
        encoding: 'utf8'
          const severity = vuln.severity || 'low'
            type: 'dependency'
            description: vuln.description || 'No description available'
            recommendation: vuln.recommendation || 'Update to latest version'
<<<<<<< HEAD
          });
          this.stats.vulnerabilitiesFound++;
          this.stats[riskLevel + 'Risk']++;
        });
      }
      this.log(`Found ${this.stats.vulnerabilitiesFound} dependency vulnerabilities`, 'WARNING');
    } catch (error) {
      this.log(`Dependency scan failed: ${error.message}`, 'ERROR');
    }
  }
  async scanCode() {
    this.log('Scanning code for security issues...', 'SECURITY');
    const files = this.getAllFiles(this.projectRoot);
    const securityPatterns = [
      {
        pattern: /password\s*=\s*['"][^'"]+['"]/gi,
        type: 'hardcoded_password',
        severity: 'high',
        message: 'Hardcoded password found'
      },
      {
        pattern: /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
        type: 'hardcoded_api_key',
        severity: 'high',
        message: 'Hardcoded API key found'
      },
      {
        pattern: /secret\s*=\s*['"][^'"]+['"]/gi,
        type: 'hardcoded_secret',
        severity: 'high',
        message: 'Hardcoded secret found'
      },
      {
        pattern: /eval\s*\(/gi,
        type: 'eval_usage',
        severity: 'high',
        message: 'eval() function usage detected'
      },
      {
        pattern: /innerHTML\s*=/gi,
        type: 'innerhtml_usage',
        severity: 'medium',
        message: 'innerHTML usage detected (potential XSS)'
      },
      {
        pattern: /document\.write\s*\(/gi,
        type: 'document_write',
        severity: 'medium',
        message: 'document.write() usage detected'
      },
      {
        pattern: /http:\/\//gi,
        type: 'insecure_http',
        severity: 'medium',
        message: 'Insecure HTTP URL found'
      },
      {
        pattern: /console\.log\s*\([^)]*password[^)]*\)/gi,
        type: 'password_logging',
        severity: 'high',
        message: 'Password logging detected'
      }
    ];
    files.forEach(file => {
      if (this.isCodeFile(file)) {
        this.stats.filesScanned++;
        const content = fs.readFileSync(file, 'utf8');
        securityPatterns.forEach(pattern => {
          const matches = content.match(pattern.pattern);
          if (matches) {
            matches.forEach(match => {
              const lineNumber = this.getLineNumber(content, match);
              const riskLevel = this.getRiskLevel(pattern.severity);
              this.vulnerabilities.push({
                type: pattern.type,
                file: path.relative(this.projectRoot, file),
                line: lineNumber,
                severity: pattern.severity,
                riskLevel: riskLevel,
                description: pattern.message,
                code: match.trim(),
                recommendation: this.getRecommendation(pattern.type)
              });
              this.stats.vulnerabilitiesFound++;
              this.stats[riskLevel + 'Risk']++;
            });
          }
        });
      }
    });
    this.log(`Scanned ${this.stats.filesScanned} files`, 'INFO');
  }
  async scanEnvironment() {
    this.log('Scanning environment configuration...', 'SECURITY');
    const envFiles = ['.env', '.env.local', '.env.development', '.env.production'];
    envFiles.forEach(envFile => {
      const envPath = path.join(this.projectRoot, envFile);
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if (line.includes('=') && !line.startsWith('#')) {
            const [key, value] = line.split('=');
            // Check for sensitive data
            if (key.toLowerCase().includes('password') || 
                key.toLowerCase().includes('secret') || 
                key.toLowerCase().includes('key')) {
              if (value && value.length < 8) {
                this.vulnerabilities.push({
                  type: 'weak_environment_variable',
                  file: envFile,
                  line: index + 1,
                  severity: 'medium',
                  riskLevel: 'medium',
                  description: `Weak ${key} in environment file`,
                  recommendation: 'Use stronger values for sensitive environment variables'
                });
                this.stats.vulnerabilitiesFound++;
                this.stats.mediumRisk++;
              }
            }
          }
        });
      }
    });
  }
  async checkSecurityHeaders() {
    this.log('Checking security headers...', 'SECURITY');
    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    if (fs.existsSync(nextConfigPath)) {
      const content = fs.readFileSync(nextConfigPath, 'utf8');
      if (!content.includes('securityHeaders') && !content.includes('headers')) {
        this.recommendations.push({
          type: 'security_headers',
          priority: 'high',
          message: 'Add security headers to Next.js configuration',
          recommendation: 'Implement CSP, HSTS, X-Frame-Options, and other security headers'
        });
      }
    }
  }
  getRiskLevel(severity) {
    switch (severity.toLowerCase()) {
      case 'critical':
      case 'high':
        return 'high';
      case 'moderate':
      case 'medium':
        return 'medium';
      case 'low':
      case 'info':
        return 'low';
      default:
        return 'low';
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
  getRecommendation(type) {
    const recommendations = {
      'hardcoded_password': 'Use environment variables or secure credential management',
      'hardcoded_api_key': 'Store API keys in environment variables',
      'hardcoded_secret': 'Use secure secret management system',
      'eval_usage': 'Avoid eval() - use safer alternatives',
      'innerhtml_usage': 'Use textContent or sanitize HTML content',
      'document_write': 'Use modern DOM manipulation methods',
      'insecure_http': 'Use HTTPS for all external resources',
      'password_logging': 'Never log sensitive information',
      'weak_environment_variable': 'Use stronger values for sensitive variables'
    };
    return recommendations[type] || 'Review and fix security issue';
  }
  isCodeFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'].includes(ext);
  }
  getAllFiles(dirPath) {
    let files = [];
    try {
      const items = fs.readdirSync(dirPath);
      items.forEach(item => {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          // Skip node_modules, .next, .git directories
          if (item !== 'node_modules' && item !== '.next' && item !== '.git') {
            files = files.concat(this.getAllFiles(fullPath));
          }
        } else {
          files.push(fullPath);
        }
      });
    } catch (error) {
      // Skip directories we can't read
    }
    return files;
  }
  generateReport() {
    this.log('\n📊 Security Scan Report', 'SECURITY');
    this.log('=' .repeat(50));
    if (this.vulnerabilities.length > 0) {
      // Group by risk level
      const highRisk = this.vulnerabilities.filter(v => v.riskLevel === 'high');
      const mediumRisk = this.vulnerabilities.filter(v => v.riskLevel === 'medium');
      const lowRisk = this.vulnerabilities.filter(v => v.riskLevel === 'low');
      if (highRisk.length > 0) {
        highRisk.forEach((vuln, index) => {
        });
      }
      if (mediumRisk.length > 0) {
        mediumRisk.forEach((vuln, index) => {
        });
      }
      if (lowRisk.length > 0) {
        lowRisk.forEach((vuln, index) => {
        });
      }
    }
    if (this.recommendations.length > 0) {
      this.recommendations.forEach((rec, index) => {
        const priority = rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢';
      });
    }
    // Security grade
    let grade = 'A';
    if (this.stats.highRisk > 0) grade = 'D';
    else if (this.stats.mediumRisk > 5) grade = 'C';
    else if (this.stats.mediumRisk > 0) grade = 'B';
    if (this.stats.highRisk > 0) {
      this.log('🚨 CRITICAL: High-risk vulnerabilities found!', 'CRITICAL');
    } else if (this.stats.mediumRisk > 0) {
      this.log('⚠️  Medium-risk vulnerabilities found', 'WARNING');
    } else {
      this.log('🎉 No critical security issues found!', 'SUCCESS');
    }
  }
  async run() {
    this.log('🔒 Starting Security Scanner', 'SECURITY');
    this.log(`Project Root: ${this.projectRoot}`);
    try {
      await this.scanDependencies();
      await this.scanCode();
      await this.scanEnvironment();
      await this.checkSecurityHeaders();
      this.generateReport();
    } catch (error) {
      this.log(`Error during security scan: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}
// Run the scanner
if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.run().catch(console.error);
}
module.exports = SecurityScanner;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
          this.stats[riskLevel + 'Risk']
      this.log(`Found ${this.stats.vulnerabilitiesFound} dependency vulnerabilities`, 'WARNING'`)
      this.log(`Dependency scan failed: ${error.message}`, 'ERROR'`)
    this.log('Scanning code for security issues...', 'SECURITY')
        pattern: /password\s*=\s*['"][^'']
        pattern: /api[_-]?key\s*=\s*['"][^'']
<<<<<<< HEAD
        pattern: /secret\s*=\s*['"][^'']
=======
        pattern: /secret\s*=\s*['"][^'']
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
