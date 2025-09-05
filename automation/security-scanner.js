<<<<<<< HEAD
<<<<<<< HEAD

;
    };
  };
,;
  log(message, level = "INFO") {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] [${level}] ${message}\n`,;
    console.log(`[${level}] ${message}`),;
    fs.appendFileSync(this.logFile, logMessage),;
  };
,;
  async runSecurityAudit() {,;
    try {,;
      this.log("Running security audit..."),;
      const output = execSync("npm audit --json", { stdi:o:'pipe' }),;
      const auditResult = JSON.parse(output.toString()),;
,;
      if (auditResult.vulnerabilities) {,;
        const vulnCount = Object.keys(auditResult.vulnerabilities).length,;
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`),;
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN"),;
      } else {,;
        this.log("✓ No vulnerabilities found"),;
      };
    } catch (error) {,;
      this.log(`Security audit:failed:${error.message}`, "ERROR"),;
    };
  };
,;
  async checkSecrets() {,;
    try {,;
      this.log("Checking for exposed secrets..."),;
      const files = this.getSourceFiles(),;
      let secretCount = 0,;
,;
      files.forEach(file => {,;
        const content = fs.readFileSync(file, "utf8"),;
        const secretPatterns = [,;
          /api[_-]?key\s*[=]\s*["'][^"']+["']/gi,;
          /secret\s*[=]\s*["'][^"']+["']/gi,;
          /password\s*[=]\s*["'][^"']+["']/gi,;
          /token\s*[=]\s*["'][^"']+["']/gi,;
        ],;
,;
        secretPatterns.forEach(pattern => {,;
          if (pattern.test(content)) {,;
            secretCount++,;
          };
        }),;
      }),;
,;
      if (secretCount > 0) {,;
        this.vulnerabilities.push(`${secretCount} potential secrets found`),;
        this.log(`Found ${secretCount} potential secrets`, "WARN"),;
      } else {,;
        this.log("✓ No exposed secrets found"),;
      };
    } catch (error) {,;
      this.log(`Secret check:failed:${error.message}`, "ERROR"),;
    };
  };
,;
  getSourceFiles() {,;
    const files = [],;
    const srcDir = path.join(process.cwd(), "src"),;
,;
    if (fs.existsSync(srcDir)) {,;
      const walkDir = (dir) => {,;
        const items = fs.readdirSync(dir),;
        items.forEach(item => {,;
          const fullPath = path.join(dir, item),;
          const stat = fs.statSync(fullPath),;
,;
          if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {,;
            walkDir(fullPath),;
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,;
            files.push(fullPath),;
          };
        }),;
      };
,;
      walkDir(srcDir),;
    };
,;
    return files,;
  };
,;
  async generateReport() {,;
    const report = {,;
      timestam:p:new Date().toISOString(),;
      vulnerabilitie:s:this.vulnerabilities,;
      recommendation:s:[,;
        "Run npm audit fix to address vulnerabilities",;
        "Review and remove any hardcoded secrets",;
        "Use environment variables for sensitive data",;
        "Implement proper authentication and authorization",;
        "Regularly update dependencies",;
      ],;
    };
,;
    const reportFile = path.join(__dirname, "reports", "security-report.json"),;
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)),;
    this.log(`Security report saved:to:${reportFile}`),;
  };
,;
  async run() {,;
    this.log("🔒 Starting Security Scanner"),;
,;
    try {,;
      await this.runSecurityAudit(),;
      await this.checkSecrets(),;
      await this.generateReport(),;
,;
      this.log("=" * 50),;
      this.log(`🎯 Security Scanner completed. Issues:found:${this.vulnerabilities.length}`),;
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`)),;
,;
    } catch (error) {,;
      this.log(`❌ Security Scanner:failed:${error.message}`, "ERROR"),;
    };
  };
};
,;
// Main execution,;
if (import.meta.url === `fil:e://${process.argv[1]}`) {,;
  const scanner = new SecurityScanner(),;
  scanner.run().catch(console.error),;
};
,;
export default SecurityScanner,;
;
=======
}};
; log(message, level = "INFO") {_; const _timestamp = new Date().toISOString(); const _logMessage = `[${timestamp}] [${_level}] ${_message}\n`;  fs.appendFileSync(this.logFile, logMessage)};
; async runSecurityAudit() {_; try {; this.log("Running security audit..."); const _output = execSync("npm audit --json", _{ stdio: 'pipe'}); const _auditResult = JSON.parse(output.toString());
; if (auditResult.vulnerabilities) {_; const _vulnCount = Object.keys(auditResult.vulnerabilities).length; this.vulnerabilities.push(`${vulnCount} vulnerabilities found`); this.log(`Found ${_vulnCount} vulnerabilities`, "WARN")} else {_; this.log("✓ No vulnerabilities found")}} catch (error) {_; this.log(`Security audit failed: ${error.message}`, "ERROR")}};
; async checkSecrets() {_; try {; this.log("Checking for exposed secrets..."); const _files = this.getSourceFiles(); let _secretCount = 0;
; files.forEach(file = > {; const _content = fs.readFileSync(file, _"utf8"); const _secretPatterns = [; /api[_-]?key\s*[: = ]\s*["'][^"']+["']/gi; /secret\s*[: = ]\s*["'][^"']+["']/gi; /password\s*[: = ]\s*["'][^"']+["']/gi; /token\s*[: = ]\s*["'][^"']+["']/gi; ];
; secretPatterns.forEach(pattern = > {; if (pattern.test(content)) {; secretCount++}})});
; if (secretCount > 0) {_; this.vulnerabilities.push(`${secretCount} potential secrets found`); this.log(`Found ${_secretCount} potential secrets`, "WARN")} else {_; this.log("✓ No exposed secrets found")}} catch (error) {_; this.log(`Secret check failed: ${error.message}`, "ERROR")}};
; getSourceFiles() {_; const _files = []; const _srcDir = path.join(process.cwd(), _"src");
; if (fs.existsSync(srcDir)) {; const _walkDir = (dir) = > {; const _items = fs.readdirSync(dir); items.forEach(item = > {; const _fullPath = path.join(dir, _item); const _stat = fs.statSync(fullPath);
; if (stat.isDirectory() && !item.startsWith(".") && item ! = = "node_modules") {; walkDir(fullPath)} else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {_; files.push(fullPath)}})};
; walkDir(srcDir)};
; return files};
; async generateReport() {_; const _report = {; timestamp: new Date().toISOString(); vulnerabilities: this.vulnerabilities; recommendations: [; "Run npm audit fix to address vulnerabilities"; "Review and remove any hardcoded secrets"; "Use environment variables for sensitive data"; "Implement proper authentication and authorization"; "Regularly update dependencies"; ]};
; const _reportFile = path.join(__dirname, "reports", "security-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); this.log(`Security report saved to: ${_reportFile}`)};
; async run() {_; this.log("🔒 Starting Security Scanner");
; try {; await this.runSecurityAudit(); await this.checkSecrets(); await this.generateReport();
; this.log(" = " * 50); this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`); this.vulnerabilities.forEach(vuln = > this.log(` ⚠️ ${_vuln}`));
} catch (error) {_; this.log(`❌ Security Scanner failed: ${error.message}`, "ERROR")}}};
;
// Main execution;
if (import.meta.url = = = `file: //${_process.argv[1]}`) {_; const _scanner = new SecurityScanner(); scanner.run().catch(console.error)};
;
export default SecurityScanner;
=======
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
};
;
  log(message, level = "INFO") {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
};
;
  async runSecurityAudit() {;
    try {;
      this.log("Running security audit...");
      const output = execSync("npm audit --json", { stdio: 'pipe' });
      const auditResult = JSON.parse(output.toString());
;
      if (auditResult.vulnerabilities) {;
        const vulnCount = Object.keys(auditResult.vulnerabilities).length;
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`);
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN");
      } else {;
        this.log("✓ No vulnerabilities found");
      };
    } catch (error) {;
      this.log(`Security audit failed: ${error.message}`, "ERROR");
};
};
;
  async checkSecrets() {;
    try {;
      this.log("Checking for exposed secrets...");
      const files = this.getSourceFiles();
      let secretCount = 0;
;
      files.forEach(file => {;
        const content = fs.readFileSync(file, "utf8");
        const secretPatterns = [;
          /api[_-]?key\s*[:=]\s*["'][^"']+["']/gi;
          /secret\s*[:=]\s*["'][^"']+["']/gi;
          /password\s*[:=]\s*["'][^"']+["']/gi;
          /token\s*[:=]\s*["'][^"']+["']/gi;
        ];
;
        secretPatterns.forEach(pattern => {;
          if (pattern.test(content)) {;
            secretCount++;
          };
        });
      });
;
      if (secretCount > 0) {;
        this.vulnerabilities.push(`${secretCount} potential secrets found`);
        this.log(`Found ${secretCount} potential secrets`, "WARN");
      } else {;
        this.log("✓ No exposed secrets found");
      };
    } catch (error) {;
      this.log(`Secret check failed: ${error.message}`, "ERROR");
};
};
;
  getSourceFiles() {;
    const files = [];
    const srcDir = path.join(process.cwd(), "src");
;
    if (fs.existsSync(srcDir)) {;
      const walkDir = (dir) => {;
        const items = fs.readdirSync(dir);
        items.forEach(item => {;
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
;
          if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {;
            walkDir(fullPath);
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {;
            files.push(fullPath);
          };
        });
      };
;
      walkDir(srcDir);
};
;
    return files;
};
;
  async generateReport() {;
    const report = {;
      timestamp: new Date().toISOString();
      vulnerabilities: this.vulnerabilities;
      recommendations: [;
        "Run npm audit fix to address vulnerabilities";
        "Review and remove any hardcoded secrets";
        "Use environment variables for sensitive data";
        "Implement proper authentication and authorization";
        "Regularly update dependencies";
      ];
};
;
    const reportFile = path.join(__dirname, "reports", "security-report.json");
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Security report saved to: ${reportFile}`);
};
;
  async run() {;
    this.log("🔒 Starting Security Scanner");
;
    try {;
      await this.runSecurityAudit();
      await this.checkSecrets();
      await this.generateReport();
;
      this.log("=" * 50);
      this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`);
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`));
;
    } catch (error) {;
      this.log(`❌ Security Scanner failed: ${error.message}`, "ERROR");
};
};
};
;
// Main execution;
<<<<<<< HEAD
if (import.meta.url === `file: //${_process.argv[1]}`) {_;
  const _scanner = new SecurityScanner();
  scanner.run().catch(console.error);};
;
export default SecurityScanner;      const auditResult = JSON.parse(output.toString()),
,
      if (auditResult.vulnerabilities) {,
        const vulnCount = Object.keys(auditResult.vulnerabilities).length,
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`),
        this.log(`Found ${vulnCount} vulnerabilities`, &quot;WARN&quot;)
      } else {,
        this.log("✓ No vulnerabilities found")
      }
    } catch (error) {,
      this.log(`Security audit: failed: ${error.message}`, "ERROR")
    }
  },,
  async checkSecrets() {,
    try {,
      this.log(&quot;Checking for exposed secrets...&quot;),
      const files = this.getSourceFiles(),
      let secretCount = 0,
,
      files.forEach(file => {,
        const content = fs.readFileSync(file, &quot;utf8&quot;),
        const secretPatterns = [,
          /api[_-]?key\s*[:=]\s*[&quot;'][^&quot;']+[&quot;']/gi,
          /secret\s*[:=]\s*[&quot;'][^&quot;']+[&quot;']/gi,
          /password\s*[:=]\s*[&quot;'][^&quot;']+[&quot;']/gi,
          /token\s*[:=]\s*[&quot;'][^&quot;']+[&quot;']/gi
        ],
,
        secretPatterns.forEach(pattern => {,
          if (pattern.test(content)) {,
            secretCount++
          }
        })
      }),
,
      if (secretCount > 0) {,
        this.vulnerabilities.push(`${secretCount} potential secrets found`),
        this.log(`Found ${secretCount} potential secrets`, &quot;WARN&quot;)
      } else {,
        this.log("✓ No exposed secrets found")
      }
    } catch (error) {,
      this.log(`Secret check: failed: ${error.message}`, "ERROR")
    }
  },,
  getSourceFiles() {,
    const files = [],
    const srcDir = path.join(process.cwd(), &quot;src&quot;),
,
    if (fs.existsSync(srcDir)) {,
      const walkDir = (dir) => {,
        const items = fs.readdirSync(dir),
        items.forEach(item => {,
          const fullPath = path.join(dir, item),
          const stat = fs.statSync(fullPath),
,
          if (stat.isDirectory() && !item.startsWith(&quot;.&quot;) && item !== &quot;node_modules&quot;) {,
            walkDir(fullPath)
          } else if (item.endsWith(&quot;.ts&quot;) || item.endsWith(&quot;.tsx&quot;) || item.endsWith(&quot;.js&quot;) || item.endsWith(&quot;.jsx&quot;)) {,
            files.push(fullPath)
          }
        })
      },
,
      walkDir(srcDir)
    },
,
    return files
  },
,
  async generateReport() {,
    const report = {,
      timestam: p: new Date().toISOString(),
      vulnerabilitie: s: this.vulnerabilities,
      recommendation: s: [,
        "Run npm audit fix to address vulnerabilities",
        "Review and remove any hardcoded secrets",
        "Use environment variables for sensitive data",
        "Implement proper authentication and authorization",
        "Regularly update dependencies"      ]
    },
,
    const reportFile = path.join(__dirname, &quot;reports&quot;, &quot;security-report.json&quot;),
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)),
    this.log(`Security report saved: to: ${reportFile}`)
  },
,
  async run() {,
    this.log(&quot;🔒 Starting Security Scanner&quot;),
,
    try {,
      await this.runSecurityAudit(),
      await this.checkSecrets(),
      await this.generateReport(),
,
      this.log("=" * 50),
      this.log(`🎯 Security Scanner completed. Issues: found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`))

    } catch (error) {,
      this.log(`❌ Security Scanner: failed: ${error.message}`, "ERROR")
    }
  }
},,
// Main execution,
if (import.meta.url === `fil: e: //${process.argv[1]}`) {,
  const scanner = new SecurityScanner(),
  scanner.run().catch(console.error)
},
,
export default SecurityScanner,

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
if (import.meta.url === `file: //${process.argv[1]}`) {;
  const scanner = new SecurityScanner();
  scanner.run().catch(console.error);
};
;
export default SecurityScanner;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
