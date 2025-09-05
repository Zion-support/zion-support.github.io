
    };
  };
,
  log(message, level = &quot;INFO&quot;) {,
    const timestamp = new Date().toISOString(),
    const logMessage = `[${timestamp}] [${level}] ${message}\n`,
    // console.log(`[${level}] ${message}`),
    fs.appendFileSync(this.logFile, logMessage)
  };
,
  async runSecurityAudit() {,
    try {,
      this.log(&quot;Running security audit...&quot;),
      const output = execSync(&quot;npm audit --json&quot;, { stdio: 'pipe' }),
      const auditResult = JSON.parse(output.toString()),
,
      if (auditResult.vulnerabilities) {,
        const vulnCount = Object.keys(auditResult.vulnerabilities).length,
        this.vulnerabilities.push(`${vulnCount} vulnerabilities found`),
        this.log(`Found ${vulnCount} vulnerabilities`, &quot;WARN&quot;)
      } else {,
        this.log(&quot;✓ No vulnerabilities found&quot;)
      };
    } catch (error) {,
      this.log(`Security audit failed: ${error.message}`, &quot;ERROR&quot;)
    };
  };
,
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
          };
        })
      }),
,
      if (secretCount > 0) {,
        this.vulnerabilities.push(`${secretCount} potential secrets found`),
        this.log(`Found ${secretCount} potential secrets`, &quot;WARN&quot;)
      } else {,
        this.log(&quot;✓ No exposed secrets found&quot;)
      };
    } catch (error) {,
      this.log(`Secret check failed: ${error.message}`, &quot;ERROR&quot;)
    };
  };
,
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
        &quot;Run npm audit fix to address vulnerabilities&quot;,
        &quot;Review and remove any hardcoded secrets&quot;,
        &quot;Use environment variables for sensitive data&quot;,
        &quot;Implement proper authentication and authorization&quot;,

        &quot;Regularly update dependencies&quot;
      ]
    };
,
    const reportFile = path.join(__dirname, &quot;reports&quot;, &quot;security-report.json&quot;),
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)),
    this.log(`Security report saved to: ${reportFile}`)
  };
,
  async run() {,
    this.log(&quot;🔒 Starting Security Scanner&quot;),
,
    try {,
      await this.runSecurityAudit(),
      await this.checkSecrets(),
      await this.generateReport(),

,
      this.log(&quot;=&quot; * 50),
      this.log(`🎯 Security Scanner completed. Issues found: ${this.vulnerabilities.length}`),
      this.vulnerabilities.forEach(vuln => this.log(`  ⚠️  ${vuln}`))} catch (error) {,
      this.log(`❌ Security Scanner failed: ${error.message}`, &quot;ERROR&quot;)
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
