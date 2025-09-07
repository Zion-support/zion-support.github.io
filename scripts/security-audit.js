import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
console.log('🔒 Starting Security Audit...\n')
// Check for security vulnerabilities
try {
  console.log('📦 Checking npm dependencies for vulnerabilities...')
  const auditResult = execSync('npm audit --audit-level=moderate --json', { "encoding": 'utf8' })
  const auditData = JSON.parse(auditResult)
  if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {
    console.log('⚠️  Security vulnerabilities "found": ')
    Object.entries(auditData.vulnerabilities).forEach(([pkg, vuln]) => {
      console.log(`   - ${pkg}: ${vuln.severity} - ${vuln.title}`)})} else {
    console.log('✅ No security vulnerabilities found in dependencies')}
} catch (error) {
  console.log('❌ Failed to run npm "audit": ', error.message)}
// Check for sensitive data in files
console.log('\n🔍 Scanning for sensitive data...')
const sensitivePatterns = [/password\s*=\s*["'][^"']+["']/gi,

  if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) {

    console && console.log('⚠️  Security vulnerabilities found: '),
    Object && Object.entries(auditData && auditData.vulnerabilities).forEach(([pkg, vuln]) => {}
      console && console.log(`   - ${pkg}: ${vuln && vuln.severity} - ${vuln && vuln.title}`)
// Check for security vulnerabilities
try {
  console.log('📦 Checking npm dependencies for vulnerabilities...')
  const auditResult = execSync('npm audit --audit-level=moderate --json', { encoding: 'utf8' })
  const auditData = JSON.parse(auditResult)
  if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {
    console.log('⚠️  Security vulnerabilities found:')
    Object.entries(auditData.vulnerabilities).forEach(([pkg, vuln]) => {
      console.log(`   - ${pkg}: ${vuln.severity} - ${vuln.title}`)
    })
  } else {
    console.log('✅ No security vulnerabilities found in dependencies')
} catch (error) {

console.log('\n🔍 Scanning for sensitive data...')
const scanDirectory = (dir, results = []) => {

  const files = fs.readdirSync(dir)
  files.forEach(file => {}
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
      try {

        const content = fs.readFileSync(filePath, 'utf8')
        sensitivePatterns.forEach(pattern => {}
          const matches = content.match(pattern)
        // Skip files that can't be read

  })
return results
}
const sensitiveResults = scanDirectory('.')
console.log('\n📅 Checking for outdated dependencies...')
try {'
  const outdatedResult = execSync('npm outdated --json', { encoding: 'utf8' })
  const outdatedData = JSON.parse(outdatedResult)
  if (Object && Object.keys(outdatedData).length > 0) {
    console && console.log('⚠️  Outdated dependencies found: '),
    Object && Object.entries(outdatedData).forEach(([pkg, info]) => {
      console && console.log(`   - ${pkg}: ${info && info.current} → ${info && info.latest}`)
if (Object.keys(outdatedData).length > 0) {
    console.log('⚠️  Outdated dependencies found:')
    Object.entries(outdatedData).forEach(([pkg, info]) => {
      console.log(`   - ${pkg}: ${info.current} → ${info.latest}`)
    })
  } else {
    console.log('✅ All dependencies are up to date')
} catch (error) {

  console && console.log('✅ All dependencies are up to date')
console.log('✅ All dependencies are up to date')
// Generate security report
const securityReport = {

  timestamp: new Date().toISOString(),
  vulnerabilities: sensitiveResults.length,

console.log('🔒 Security audit completed!')
//

console.log('🔒 Security audit completed!')
fs.writeFileSync('security-audit-report.json', JSON.stringify(securityReport, null, 2))
console.log('\n📊 Security audit report saved to security-audit-report.json')
console.log('🔒 Security audit completed!')
//

console.log('🔒 Security audit completed!')
const fs = require('fs')
const path = require('path')
'
console.log('🔒 Running security audit...');'
console.log('✅ Security audit completed')
const { execSync } = require("child_process")

function log(msg, level = "INFO") {
  const ts = new Date().toISOString()
/**
 * Security Audit Script for Zion Tech Group
 * This script performs security checks and generates recommendations
 */

  try {
    execSync(cmd, { "stdio": "inherit" })
    return { "ok": true }} catch (e) {
    return { "ok": false, "error": e }}

function main() {
  log("🔒 Starting security audit...")
  // npm audit (best-effort)
  log("Running npm audit (moderate)...")
  const audit = tryExec("npm audit --audit-level=moderate")
  if($2) {
    log("Vulnerabilities found, attempting npm audit fix", "WARN")
    tryExec("npm audit fix")}
  // scan for sensitive files
  const sensitive = [".env", ".env.local", ".env.production", "config.json", "secrets.json"]
  const found = sensitive.filter(f => fs.existsSync(path.join(process.cwd(), f)))
  if($2) {
    log(`Sensitive files "present": ${found.join(", ")}`, "WARN")} else {
    log("No sensitive files found in repo root")}
  log("✅ Security audit completed")}
main()
//
const { execSync } = require("child_process")

function log(msg, level = "INFO")
    execSync(cmd, { "stdio": "inherit"})
    return { "ok"}
    return { "ok": false, "error"}
  log("� Starting security audit...")
  log("Running npm audit (moderate)..."
  const audit = tryExec("npm audit --audit-level=moderate")
    log("Vulnerabilities found, attempting npm audit fix", "WARN")
    tryExec("npm audit fix")
  const sensitive = [".env", ".env.local", ".env.production", "config.json", "secrets.json"]
    log(`Sensitive files "present": ${found.join(", ")}`, "WARN"
    log("No sensitive files found in repo root")
  log(" Security audit completed")

const { execSync } = require('child_process')

'
console.log('🔒 Starting Security Audit...')
class SecurityAuditor {}
class AutoGeneratedClass {
  constructor($2) {'
    this.reportFile = path.join(__dirname, '..', 'security-audit-report.json')
    this.results = {}
      timestamp: new Date().toISOString(),
      npmAudit: null,
      dependencyCheck: null,
      filePermissions: null,
      environmentVariables: null,'
      overall: { status: 'unknown', score: 0 }
    }
  async runCommand(command, description) {}
    try {}`
      console.log(`🔍 ${description}...`)
      const result = execSync(command, { '
        encoding: 'utf8', '
        stdio: 'pipe','
        cwd: path.join(__dirname, '..')
      });`
      console.log(`✅ ${description} - Success`)
      return { success: true, result }
    } catch (error) {}`
      console.log(`❌ ${description} - Failed: ${error.message}`)
      return { success: false, error: error.message }
  async runNpmAudit() {'
    const result = await this.runCommand('npm audit --json', 'NPM Security Audit')
    this.results.npmAudit = result
  async checkDependencies() {'
    const result = await this.runCommand('npm ls --depth=0', 'Dependency Check')
    this.results.dependencyCheck = result
  async checkFilePermissions() {}
    try {}
      const criticalFiles = ['
        'package.json','
        'next.config.js','
        'middleware.ts','
        '.env.local','
        '.env.production'
      ]
      const permissions = {}
  for($2) {}
        try {}
          const stats = fs.statSync(file)
          permissions[file] = {}
            exists: true,
            mode: stats.mode.toString(8),
            readable: true,
            writable: true
          }
        } catch (error) {}
          permissions[file] = {}
            exists: false,
            error: error.message
          }
      this.results.filePermissions = { success: true, permissions };'
      console.log('✅ File Permissions Check - Success')
    } catch (error) {}
      this.results.filePermissions = { success: false, error: error.message };`
      console.log(`❌ File Permissions Check - Failed: ${error.message}`)
  async checkEnvironmentVariables() {}
    const envVars = {}
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      SUPABASE_URL: process.env.SUPABASE_URL,'
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? '***HIDDEN***' : undefined
    }
    const report = generateSecurityReport()
// Run the security auditor
const auditor = new SecurityAuditor()
auditor.run().catch(console.error)

'
console.log('🔒 Running security audit...');'
console.log('✅ Security audit completed')
origin/main
origin/automation-improvements-final
console.log('🔒 Security audit completed!')
