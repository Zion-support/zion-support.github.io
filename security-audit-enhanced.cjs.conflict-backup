<<<<<<< HEAD
<<<<<<< HEAD


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

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
        "severity"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
        "severity"
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
        "severity"
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

<<<<<<< HEAD
        "severity"

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
