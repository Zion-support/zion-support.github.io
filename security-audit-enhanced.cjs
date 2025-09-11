<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
class SecurityAuditor {
  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilities = [];
    this.recommendations = []}
  log(message) {
    .toISOString()}] ${message}`)}
  async auditSecurity() {
    this.log('🔒 Running Security Audit');
    // Check for common security issues
    const securityChecks = [{
        "name": 'Hardcoded Secrets',
        "pattern": /(password|secret|key|token)\s*=\s*['"][^'"]+['"]/gi,
        "severity": 'high'
      },
      {
        "name": 'SQL Injection Risk',
        "pattern": /\$\{[^}]*\}/g,
        "severity": 'medium'
      },
      {
        "name": 'XSS Vulnerability',
        "pattern": /dangerouslySetInnerHTML/g,
        "severity": 'medium'
      }
    ];
    const srcDir = path.join(this.projectRoot, 'src');
    if (fs.existsSync(srcDir)) {
      const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
      for (const file of files.slice(0, 100)) { // Limit to first 100 files
        try {
          const content = fs.readFileSync(file, 'utf8');
          for (const check of securityChecks) {
            const matches = content.match(check.pattern);
            if (matches) {
              this.vulnerabilities.push({
                "file": path.relative(this.projectRoot, file),
                "type": check.name,
                "severity": check.severity,
                "count": matches.length
              })}
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
    // Generate recommendations
    if (this.vulnerabilities.length > 0) {
      this.recommendations.push('Review and remove hardcoded secrets');
      this.recommendations.push('Implement proper input validation');
      this.recommendations.push('Use parameterized queries for database operations');
      this.recommendations.push('Sanitize user input to prevent XSS')}
    const report = {
      "timestamp": new Date().toISOString(),
      "vulnerabilities": this.vulnerabilities,
      "recommendations": this.recommendations,
      "securityScore": Math.max(0, 100 - this.vulnerabilities.length * 5)
    };
    fs.writeFileSync(
      path.join(this.projectRoot, 'security-audit-enhanced.json'),
      JSON.stringify(report, null, 2)
    );
    this.log(`🔒 Security "Score": ${report.securityScore}/100`);
    this.log(`⚠️  Vulnerabilities "Found": ${this.vulnerabilities.length}`)}
  getAllFiles(dir, extensions) {
    let files = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath)}
      }
    } catch (error) {}
    return files}
}
const auditor = new SecurityAuditor();
auditor.auditSecurity().catch(console.error);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");class SecurityAuditor { constructor() { this.projectRoot = process.cwd(); this.vulnerabilities = []; this.recommendations = []} log(message) { console.log(`[${new Date().toISOString()}] ${message}`)} async auditSecurity() {" this.log(" Running Security Audit"); / Check for common security issues const securityChecks = [{" name: "Hardcoded Secrets","" pattern: /(password|secret|key|token)\s*=\s*[""][^""]+[""]/gi,"" severity: "high" }, {"" name: "SQL Injection Risk"," pattern: /\$\{[^}]*\}/g,"" severity: "medium" }, {"" name: "XSS Vulnerability"," pattern: /dangerouslySetInnerHTML/g,"" severity: "medium" } ]; " const srcDir = path.join(this.projectRoot, "src"); if (fs.existsSync(srcDir)) {" const files = this.getAllFiles(srcDir, [".tsx", ".ts", ".jsx", ".js"]); for (const file of files.slice(0, 100)) { / Limit to first 100 files try {" const content = fs.readFileSync(file, "utf8"); for (const check of securityChecks) { const matches = content.match(check.pattern); if (matches) { this.vulnerabilities.push({" file: path.relative(this.projectRoot, file)," type: check.name," severity: check.severity," count: matches.length })} } } catch (error) {" / Skip files that can"t be read } } } / Generate recommendations if (this.vulnerabilities.length > 0) {" this.recommendations.push("Review and remove hardcoded secrets");" this.recommendations.push("Implement proper input validation");" this.recommendations.push("Use parameterized queries for database operations");" this.recommendations.push("Sanitize user input to prevent XSS")} const report = {" timestamp: new Date().toISOString()," vulnerabilities: this.vulnerabilities," recommendations: this.recommendations," securityScore: Math.max(0, 100 - this.vulnerabilities.length * 5) }; fs.writeFileSync(" path.join(this.projectRoot, "security-audit-enhanced.json"), JSON.stringify(report, null, 2) ); "` this.log(` Security Score: ${report.securityScore}/100`);"` this.log(` Vulnerabilities Found: ${this.vulnerabilities.length}`)} getAllFiles(dir, extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) {} return files}}const auditor = new SecurityAuditor();auditor.auditSecurity().catch(console.error);'"`'"`
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    this.log('� Running Security Audit')
        "name"
        "pattern": /(password|secret|key|token)\s*=\s*['"][^'']
        "severity"
        "name"
        "severity"
        "name"
<<<<<<< HEAD
        "severity"
=======
        "severity"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
