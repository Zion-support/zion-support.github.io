
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
;};
};
;
  log(message, level = "INFO") {;
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityScanner {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'security-scan.log');
    this.resultsFile = path.join(__dirname, 'reports', 'security-results.json');
    this.ensureDirectories();
    this.vulnerabilities = [];
    this.results = {
      timestamp: new Date().toISOString(),
      vulnerabilities: [],
      status: 'pending'
    };
  }

  ensureDirectories() {
    const dirs = ['logs', 'reports'];
    dirs.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
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
          };        });
      } catch (error) {
        // Skip directories we can't read
      }
    };
    walkDir(process.cwd());
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

  saveResults() {
    try {
      this.results.vulnerabilities = this.vulnerabilities;
      this.results.timestamp = new Date().toISOString();
      fs.writeFileSync(this.resultsFile, JSON.stringify(this.results, null, 2));
      this.log(`Security scan results saved to ${this.resultsFile}`);
    } catch (error) {
      this.log(`Error saving results: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    try {
      this.log('Starting security scan...');
      
      await this.runSecurityAudit();
      await this.scanDependencies();
      await this.scanFiles();
      
      this.saveResults();
      
      const vulnCount = this.vulnerabilities.length;
      if (vulnCount > 0) {
        this.log(`Security scan completed with ${vulnCount} issues found`, 'WARN');
      } else {
        this.log('Security scan completed - no issues found');
      }
      
    } catch (error) {
      this.log(`Security scan failed: ${error.message}`, 'ERROR');
      this.results.status = 'failed';
      this.saveResults();
    }
  }
}

if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.run();
}

module.exports = SecurityScanner;
