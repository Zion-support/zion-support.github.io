
    };
  };
,
  log(message, level = "INFO") {,
    const timestamp = new Date().toISOString(),
    const logMessage = `[${timestamp}] [${level}] ${message}\n`,
    console.log(`[${level}] ${message}`),
    fs.appendFileSync(this.logFile, logMessage)
  };
,
  async runSecurityAudit() {,
    try {,
      this.log("Running security audit..."),
      const output = execSync("npm audit --json", { stdio: 'pipe' }),
      const auditResult = JSON.parse(output.toString()),
,
      if (auditResult.vulnerabilities) {,
        const vulnCount = Object.keys(auditResult.vulnerabilities).length,
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`),
        this.log(`Found ${vulnCount} vulnerabilities`, "WARN")
      } else {,
        this.log("✓ No vulnerabilities found")
      };
    } catch (error) {,
      this.log(`Security audit failed: ${error.message}`, "ERROR")
    };
  };
,
  async checkSecrets() {,
    try {,
      this.log("Checking for exposed secrets..."),
      const files = this.getSourceFiles(),
      let secretCount = 0,
,
      files.forEach(file => {,
        const content = fs.readFileSync(file, "utf8"),
        const secretPatterns = [,
          /api[_-]?key\s*[:=]\s*["'][^"']+["']/gi,
          /secret\s*[:=]\s*["'][^"']+["']/gi,
          /password\s*[:=]\s*["'][^"']+["']/gi,
          /token\s*[:=]\s*["'][^"']+["']/gi
        ],
,
        secretPatterns.forEach(pattern => {,
          if (pattern.test(content)) {,
            secretCount++
          };
        })
      }),
,
      if (secretCount > 0) {,
        this.vulnerabilities.push(`${secretCount} potential secrets found`),
        this.log(`Found ${secretCount} potential secrets`, "WARN")
      } else {,
        this.log("✓ No exposed secrets found")
      };
    } catch (error) {,
      this.log(`Secret check failed: ${error.message}`, "ERROR")
    };
  };
,
  getSourceFiles() {,
    const files = [],
    const srcDir = path.join(process.cwd(), "src"),
,
    if (fs.existsSync(srcDir)) {,
      const walkDir = (dir) => {,
        const items = fs.readdirSync(dir),
        items.forEach(item => {,
          const fullPath = path.join(dir, item),
          const stat = fs.statSync(fullPath),
,
          if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {,
            walkDir(fullPath)
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx")) {,
            files.push(fullPath)
          };
        })
      };
,
      walkDir(srcDir)
    };
,
    return files
  };
,
  async generateReport() {,
    const report = {,
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      recommendations: [,
        "Run npm audit fix to address vulnerabilities",
        "Review and remove any hardcoded secrets",
        "Use environment variables for sensitive data",
        "Implement proper authentication and authorization",

        "Regularly update dependencies"
      ]
    };
,
    const reportFile = path.join(__dirname, "reports", "security-report.json"),
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)),
    this.log(`Security report saved to: ${reportFile}`)
  };
,
  async run() {,
    this.log("🔒 Starting Security Scanner"),
,
    try {,
      await this.runSecurityAudit(),
      await this.checkSecrets(),
      await this.generateReport(),

,
      this.log("=" * 50),
      this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`))} catch (error) {,
      this.log(`❌ Security Scanner failed: ${error.message}`, "ERROR")
    };
  };
};
,
// Main execution,
if (import.meta.url === `file: //${process.argv[1]}`) {,
  const scanner = new SecurityScanner(),
  scanner.run().catch(console.error)
};
,
export default SecurityScanner,
