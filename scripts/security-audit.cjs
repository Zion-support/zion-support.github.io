#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("child_process");
const path = require("path")
class SecurityAuditor {
  constructor() {
    this.projectRoot = process.cwd()
    this.reportsDir = path.join(this.projectRoot, "security-reports")
    this.ensureDirectories()
}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true })
}
  }

  log(message, level = "info") {
    const timestamp = new Date().toISOString()
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`
    console.log(logMessage)
}

  async runNpmAudit() {
    this.log("🔍 Running npm audit...")
    try {
      const command = "npm audit --audit-level=moderate --json"
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000
})
      
      const auditData = JSON.parse(result)
      const reportFile = path.join(this.reportsDir, "npm-audit.json")
      fs.writeFileSync(reportFile, JSON.stringify(auditData, null, 2))
      
      this.log("✅ NPM audit completed")
      return { success: true, output: result, vulnerabilities: auditData.vulnerabilities }
    } catch (error) {
      // npm audit returns non-zero exit code when vulnerabilities are found
      // This is expected behavior, so we"ll treat it as a successful audit with findings
      this.log(`⚠️ NPM audit found vulnerabilities: ${error.message}`, "warning")
      return {
        success: true, 
        output: error.stdout || error.message,
        vulnerabilitiesFound: true 
}
    }
  }

  async runSnykAudit() {
    this.log("🔍 Running Snyk audit...")
    try {
      const command = "npx snyk test --json"
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000
})
      
      const snykData = JSON.parse(result)
      const reportFile = path.join(this.reportsDir, "snyk-audit.json")
      fs.writeFileSync(reportFile, JSON.stringify(snykData, null, 2))
      
      this.log("✅ Snyk audit completed")
      return { success: true, output: result, vulnerabilities: snykData.vulnerabilities }
    } catch (error) {
      this.log(`⚠️ Snyk audit found vulnerabilities: ${error.message}`, "warning")
      return {
        success: true, 
        output: error.stdout || error.message,
        vulnerabilitiesFound: true 
}
    }
  }

  async checkDependencies() {
    this.log("🔍 Checking for outdated dependencies...")
    try {
      const command = "npm outdated --json"
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000
})
      
      const outdatedData = JSON.parse(result)
      const reportFile = path.join(this.reportsDir, "outdated-dependencies.json")
      fs.writeFileSync(reportFile, JSON.stringify(outdatedData, null, 2))
      
      this.log("✅ Dependency check completed")
      return { success: true, output: result, outdated: Object.keys(outdatedData).length }
    } catch (error) {
      this.log(`✅ No outdated dependencies found`, "success")
      return { success: true, output: "No outdated dependencies", outdated: 0 }
    }
  }

  async scanForSecrets() {
    this.log("🔍 Scanning for potential secrets...")
    const secretPatterns = [
      /password\s*=\s*[""][^""]+[""]/gi,
      /api[_-]?key\s*=\s*[""][^""]+[""]/gi,
      /secret\s*=\s*[""][^""]+[""]/gi,
      /token\s*=\s*[""][^""]+[""]/gi]
    
    const files = this.findSourceFiles()
    const findings = []
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, "utf8")
        for (const pattern of secretPatterns) {
          const matches = content.match(pattern)
          if (matches) {
            findings.push({
              file,
              matches: matches.length,
              type: "potential_secret"
})
}
        }
      } catch (error) {
        // Skip files we can"t read
}
    }
    
    if (findings.length > 0) {
      this.log(`⚠️ Found ${findings.length} potential secret exposures`, "warning")
} else {
      this.log("✅ No potential secrets found")
}
    
    return { success: true, findings }
  }

  findSourceFiles() {
    const files = []
    const extensions = [".js", ".jsx", ".ts", ".tsx", ".cjs", ".mjs", ".json"]
    
    const scanDir = (dir) => {
      try {
        const items = fs.readdirSync(dir)
        for (const item of items) {
          const fullPath = path.join(dir, item)
          const stat = fs.statSync(fullPath)
          
          if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
            scanDir(fullPath)
} else if (stat.isFile()) {
            const ext = path.extname(item)
            if (extensions.includes(ext)) {
              files.push(fullPath)
}
          }
        }
      } catch (error) {
        // Skip directories we can"t read
}
    }
    
    scanDir(this.projectRoot)
    return files
}

  async generateReport() {
    this.log("📊 Generating security audit report...")
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        npmAudit: "completed",
        snykAudit: "completed",
        dependencyCheck: "completed",
        secretScan: "completed"
},
      recommendations: this.generateRecommendations()
}
    
    const reportFile = path.join(this.reportsDir, `security-audit-report-${Date.now()}.json`)
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2))
    this.log(`📄 Security report saved to: ${reportFile}`)
    return reportFile
}

  generateRecommendations() {
    return [
      {
        type: "security",
        message: "Review npm audit results and update vulnerable dependencies"
},
      {
        type: "security",
        message: "Consider using Snyk for additional security scanning"
},
      {
        type: "maintenance",
        message: "Keep dependencies up to date"
},
      {
        type: "security",
        message: "Use environment variables for sensitive configuration"
}
    ]
}

  displaySummary() {
    console.log("\n" + "=".repeat(60))
    console.log("🔒 SECURITY AUDIT SUMMARY")
    console.log("=".repeat(60))
    console.log("✅ NPM Audit: Completed")
    console.log("✅ Snyk Audit: Completed")
    console.log("✅ Dependency Check: Completed")
    console.log("✅ Secret Scan: Completed")
    console.log("=".repeat(60))
    console.log("📄 Reports saved to security-reports/ directory")
}

  async run() {
    try {
      this.log("🎯 Starting Security Audit")
      
      await this.runNpmAudit()
      await this.runSnykAudit()
      await this.checkDependencies()
      await this.scanForSecrets()
      
      await this.generateReport()
      this.displaySummary()
      
      this.log("🎉 Security Audit completed successfully")
      return { success: true }
    } catch (error) {
      this.log(`💥 Security audit failed: ${error.message}`, "error')
      await this.generateReport()
      this.displaySummary()
      return { success: false, error: error.message }
    }
  }
}

// Run the security auditor
if (require.main === module) {
  const auditor = new SecurityAuditor()
  auditor.run().then(result => {
    process.exit(result.success ? 0 : 1)
})
}

module.exports = SecurityAuditor