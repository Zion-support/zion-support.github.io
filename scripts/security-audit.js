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
  console.log('❌ Failed to run npm audit:', error.message);
}

// Check for sensitive data in files
console.log('\n🔍 Scanning for sensitive data...')
const sensitivePatterns = [/password\s*=\s*["'][^"']+["']/gi,

  if (auditData && auditData.vulnerabilities && Object && Object.keys(auditData && auditData.vulnerabilities).length > 0) {

const sensitiveResults = scanDirectory('.');
if (sensitiveResults.length > 0) {
  console.log('⚠️  Potential sensitive data found:');
  sensitiveResults.forEach(result => {
    console.log(`   - ${result.file}`);
    result.matches.forEach(match => {
      console.log(`     ${match.substring(0, 50)}...`);
    });
  });
} else {
  console.log('✅ No sensitive data patterns found');
}

// Check for outdated dependencies
console.log('\n📅 Checking for outdated dependencies...');
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
  console.log('✅ All dependencies are up to date');
}
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
