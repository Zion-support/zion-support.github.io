main();#!/usr/bin/env node;
=======
main();
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Enhanced Security Scanner v2.0");"console.log("======");const securityReport = { timestamp: new Date().toISOString()," sessionId: Date.now().toString()," vulnerabilities: []," recommendations: []," summary: { totalChecks: 0," vulnerabilities: 0," high: 0," medium: 0," low: 0," securityScore: 0 }};function log(level, message) { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`)}function checkDependencies() {" log("info", "Checking dependencies for vulnerabilities"); try {"" const output = execSync("npm audit --json", { encoding: "utf8" }); const audit = JSON.parse(output); if (audit.vulnerabilities) { Object.entries(audit.vulnerabilities).forEach(([name, vuln]) => { securityReport.vulnerabilities.push({"" type: "dependency", name," severity: vuln.severity," description: vuln.description," recommendation: vuln.recommendation })})} securityReport.summary.totalChecks++;" log("info", "Dependency security check completed")} catch (error) {" log("warn", "Dependency audit failed", error.message)}}function checkSecrets() {" log("info", "Scanning for exposed secrets"); "" const secretPatterns = [/password\s*=\s*[""][^""]+[""]/gi,"" /api[_-]?key\s*=\s*[""][^""]+[""]/gi,"" /secret\s*=\s*[""][^""]+[""]/gi,"" /token\s*=\s*[""][^""]+[""]/gi ]; function scanFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8"); secretPatterns.forEach((pattern, index) => { const matches = content.match(pattern); if (matches) { matches.forEach(match => { securityReport.vulnerabilities.push({"" type: "secret"," file: filePath,"" severity: "high","` description: `Potential secret exposed: ${match.substring(0, 50)}.`,"" recommendation: "Remove or move secrets to environment variables" })})} })} catch (error) {" / Skip files that can"t be read } } function scanDirectory(dir) { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); " if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDirectory(filePath)} else if (stat.isFile() && /\.(js|ts|jsx|tsx|json|env)$/.test(file)) { scanFile(filePath)} })} scanDirectory(process.cwd()); securityReport.summary.totalChecks++;" log("info", "Secret scanning completed")}function checkFilePermissions() {" log("info", "Checking file permissions"); " const sensitiveFiles = ["package.json"," "package-lock.json"," ".env"," ".env.local"," ".env.production" ]; sensitiveFiles.forEach(file => { try { const stats = fs.statSync(file);" const mode = stats.mode & parseInt("777", 8); " if (mode > parseInt("644", 8)) { securityReport.vulnerabilities.push({"" type: "permission", file,"" severity: "medium","` description: `File has overly permissive permissions: ${mode.toString(8)}`,"" recommendation: "Set file permissions to 644 or more restrictive" })} } catch (error) {" / File doesn"t exist, skip } }); securityReport.summary.totalChecks++;" log("info", "File permission check completed")}function generateRecommendations() { const recommendations = []; if (securityReport.summary.high > 0) { recommendations.push({"" priority: "critical","` message: `${securityReport.summary.high} high severity vulnerabilities found`,"" action: "Address high severity issues immediately" })} if (securityReport.summary.medium > 0) { recommendations.push({"" priority: "high","` message: `${securityReport.summary.medium} medium severity vulnerabilities found`,"" action: "Address medium severity issues within 48 hours" })} recommendations.push({"" priority: "medium","" message: "Implement automated security scanning","" action: "Set up CI/CD pipeline with security checks" }); recommendations.push({"" priority: "low","" message: "Regular security audits","" action: "Schedule monthly security reviews" }); return recommendations}function calculateSecurityScore() { let score = 100; score -= securityReport.summary.high * 20; score -= securityReport.summary.medium * 10; score -= securityReport.summary.low * 5; return Math.max(0, Math.min(100, score))}async function main() { try {" log("info", "Starting enhanced security scan"); checkDependencies(); checkSecrets(); checkFilePermissions(); / Calculate summary securityReport.vulnerabilities.forEach(vuln => { securityReport.summary.vulnerabilities++; securityReport.summary[vuln.severity]++}); securityReport.summary.securityScore = calculateSecurityScore(); securityReport.recommendations = generateRecommendations(); / Display summary" log("info", "Enhanced Security Scanner Summary");" log("info", "=====");""` log("info", `Total checks: ${securityReport.summary.totalChecks}`);""` log("info", `Vulnerabilities found: ${securityReport.summary.vulnerabilities}`);""` log("info", `High severity: ${securityReport.summary.high}`);""` log("info", `Medium severity: ${securityReport.summary.medium}`);""` log("info", `Low severity: ${securityReport.summary.low}`);""` log("info", `Security score: ${securityReport.summary.securityScore}/100`); if (securityReport.vulnerabilities.length > 0) {"" log("warn", "Vulnerabilities found: "); securityReport.vulnerabilities.forEach(vuln => {"` log("warn", `- [${vuln.severity.toUpperCase()}] ${vuln.description}`)})} if (securityReport.recommendations.length > 0) {"" log("info", "Security Recommendations: "); securityReport.recommendations.forEach(rec => {"` log("info", `- [${rec.priority.toUpperCase()}] ${rec.message}`);""` log("info", ` Action: ${rec.action}`)})} / Save report` const reportPath = path.join(process.cwd(), `enhanced-security-report-${securityReport.sessionId}.json`); fs.writeFileSync(reportPath, JSON.stringify(securityReport, null, 2)); ""` log("info", `Enhanced security report saved to: enhanced-security-report-${securityReport.sessionId}.json`); / Exit with appropriate status if (securityReport.summary.securityScore < 50) {" log("error", "Security score is below 50% - immediate attention required"); process.exit(1)} else if (securityReport.summary.securityScore < 80) {" log("warn", "Security score is below 80% - security improvements recommended"); process.exit(0)} else {" log("info", "Security scan completed successfully"); process.exit(0)} } catch (error) {" log("error", "Fatal error in enhanced security scanner", error.message); process.exit(1)}}main();""`"`
=======
=======
=======
=======>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node;
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log('� Enhanced Security Scanner v2.0')
console.log('======')
  log('info', 'Checking dependencies for vulnerabilities')
    const output = execSync('npm audit --json', { "encoding"})
          "type"
  const secretPatterns = [/password\s*=\s*['"][^'']
    /api[_-]?key\s*=\s*['"][^'']
    /secret\s*=\s*['"][^'']
    /token\s*=\s*['"][^'']
              "type"
              "severity"
              "recommendation"
          "type"
          "severity"
          "recommendation"
      "priority"
      "action"
      "priority"
      "action"
    "priority"
    "message"
    "action"
    "priority"
    "message"
    "action"
      log('warn', 'Vulnerabilities "found")
<<<<<<< HEAD
      log('info', 'Security "Recommendations")
=======
<<<<<<< HEAD
      log('info', 'Security "Recommendations")
=======
<<<<<<< HEAD
      log('info', 'Security "Recommendations")
=======
      log('info', 'Security "Recommendations")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
