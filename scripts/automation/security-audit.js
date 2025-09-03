<<<<<<< HEAD
#!/usr/bin/env node;,"});,"})
import { execSync } from;,"});,"})
  'child_process';,"});,"})
import fs from;,"});,"})
  'fs';,"});,"})
import path from;,"});,"})
  'path';,"});,"})
import { fileURLToPath } from;,"});,"})
  'url';,"});,"})
const __dirname = path.dirname(__filename);,"});,"})
// // // // // // // console.log(;,"});,"})
  '🔒 Starting continuous security audit automation...');,"});,"})
;,"});,"})
// // // console.log(;,"});,"})
  '🔒 Starting continuous security audit automation...');,"});,"})
// Get automation interval from environment variable (default: 4 hours);,"});,"})
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours;,"});,"})
async function runSecurityAudit() {;,"});,"})
  try {;,"});,"})
    // // // console.log(`🔒 Running security audit at ${new Date().toISOString()}`);,"});,"})
    // Run npm audit;,"});,"})
    // // // console.log(,;,"});,"})
  🔍 Running npm security audit...');,"});,"})
    try {;,"});,"})
      execSync(;,"});,"})
  'npm audit --audit-level=moderate', { stdio: 'inherit });,"});,"})
      // // // console.log(,;,"});,"})
  ✅ Security audit completed - no issues found');,"});,"})
    } catch (error) {;,"});,"})
      // // // console.log(;,"});,"})
  '⚠️  Security issues found, attempting auto-fix...');,"});,"})
      try {;,"});,"})
        execSync(;,"});,"})
  'npm audit fix --audit-level=moderate', { stdio: 'inherit });,"});,"})
        // // // console.log(,;,"});,"})
  ✅ Security issues auto-fixed');,"});,"})
      } catch (fixError) {;,"});,"})
        // // // console.log(;,"});,"})
  '❌ Could not auto-fix security issues');,"});,"})
    // // // // // // // console.log(`🔒 Running security audit at ${new Date().toISOString()}`);,"});,"})
    // Run npm audit;,"});,"})
    // // // // // // // console.log(;,"});,"})
  '🔍 Running npm security audit...');,"});,"})
    try {;,"});,"})
      execSync(;,"});,"})
  'npm audit --audit-level=moderate', { stdio: 'inherit });,"});,"})
      // // // // // // // console.log(,;,"});,"})
  ✅ Security audit completed - no issues found');,"});,"})
    } catch (error) {;,"});,"})
      // // // // // // // console.log(;,"});,"})
  '⚠️  Security issues found, attempting auto-fix...');,"});,"})
      try {;,"});,"})
        execSync(;,"});,"})
  'npm audit fix --audit-level=moderate', { stdio: 'inherit });,"});,"})
        // // // // // // // console.log(,;,"});,"})
  ✅ Security issues auto-fixed');,"});,"})
      } catch (fixError) {;,"});,"})
        // // // // // // // console.log(;,"});,"})
  '❌ Could not auto-fix security issues');,"});,"})
;,"});,"})
        // Don;,"});,"})
  't exit, just log the error and continue;,"});,"})
    // Check for known vulnerabilities in dependencies;,"});,"})
    // // // console.log('📦 Checking for known vulnerabilities...;,"});,"})
  ');,"});,"})
    try {;,"});,"})
      execSync('npm audit --json;,"});,"})
  ', { stdio: 'pipe });,"});,"})
      // // // console.log(,;,"});,"})
  ✅ No known vulnerabilities found;,"});,"})
  ');,"});,"})
    } catch (error) {;,"});,"})
      // // // console.log('⚠️  Known vulnerabilities detected;,"});,"})
  ');,"});,"})
    // Check for outdated packages with security implications;,"});,"})
    // // // console.log('🔄 Checking for outdated packages...;,"});,"})
  ');,"});,"})
    try {;,"});,"})
      execSync('npm outdated;,"});,"})
  ', { stdio: 'inherit });,"});,"})
    } catch (error) {;,"});,"})
      // // // console.log(,;,"});,"})
  ✅ All packages are up to date;,"});,"})
  ');,"});,"})
    // Run security scan if available;,"});,"})
    // // // console.log('🔍 Running additional security scans...;,"});,"})
  ');,"});,"})
    // // // // // // // console.log('📦 Checking for known vulnerabilities...;,"});,"})
  ');,"});,"})
    try {;,"});,"})
      execSync('npm audit --json;,"});,"})
  ', { stdio: 'pipe });,"});,"})
      // // // // // // // console.log(,;,"});,"})
  ✅ No known vulnerabilities found;,"});,"})
  ');,"});,"})
    } catch (error) {;,"});,"})
      // // // // // // // console.log('⚠️  Known vulnerabilities detected;,"});,"})
  ');,"});,"})
    }"});,"})
    // Check for outdated packages with security implications;,"});,"})
    // // // // // // // console.log('🔄 Checking for outdated packages...;,"});,"})
  ');,"});,"})
    try {;,"});,"})
      execSync('npm outdated;,"});,"})
  ', { stdio: 'inherit });,"});,"})
    } catch (error) {;,"});,"})
      // // // // // // // console.log(,;,"});,"})
  ✅ All packages are up to date;,"});,"})
  ');,"});,"})
    }"});,"})
    // Run security scan if available;,"});,"})
    // // // // // // // console.log('🔍 Running additional security scans...;,"});,"})
  ');,"});,"})
;,"});,"})
    try {;,"});,"})
      if (fs.existsSync('security-scan.js;,"});,"})
  ')) {;,"});,"})
        execSync('node security-scan.js;,"});,"})
  ', { stdio: 'inherit });,"});,"})
    } catch (error) {;,"});,"})
      // // // // // // // console.log(,;,"});,"})
  ℹ️  No additional security scan available;,"});,"})
  ');,"});,"})
    }"});,"})
;,"});,"})
      // // // console.log('ℹ️  No additional security scan available;,"});,"})
  ');,"});,"})
    // Generate security report;,"});,"})
  status: 'completed;,"});,"})
};,"});,"})
;,"});,"})
    const reportPath = path.join(process.cwd(), ,;,"});,"})
  security-audit-report.json;,"});,"})
  ');,"});,"})
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));,"});,"})
    // // // console.log(`📊 Report saved to ${reportPath}`);,"});,"})
    // // // console.log('✅ Continuous security audit completed successfully;,"});,"})
  ');,"});,"})
  } catch (error) {;,"});,"})
    // // // console.error('❌ Continuous security audit failed: , error.message);,"});,"})
    // // // // // // // console.log(`📊 Report saved to ${reportPath}`);,"});,"})
    // // // // // // // console.log(,;,"});,"})
  ✅ Continuous security audit completed successfully;,"});,"})
  ');,"});,"})
  } catch (error) {;,"});,"})
    // // // // // // // console.error('❌ Continuous security audit failed: , error.message);,"});,"})
;,"});,"})
    // Don't exit, just log the error and continue;,"});,"})
// Main continuous loop;,"});,"})
async function runContinuous() {;,"});,"})
  // // // // // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);,"});,"})
;,"});,"})
  // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);,"});,"})
  // Run initial security audit;,"});,"})
  await runSecurityAudit();,"});,"})
  // Set up continuous execution;,"});,"})
  setInterval(async () => {;,"});,"})
    await runSecurityAudit();,"});,"})
  }, AUTOMATION_INTERVAL);,"});,"})
  // // // // // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);,"});,"})
}"});,"})
// Handle graceful shutdown;,"});,"})
process.on(;,"});,"})
  'SIGINT', () => {;,"});,"})
  // // // // // // // console.log(;,"});,"})
  '🛑 Received SIGINT, shutting down gracefully...');,"});,"})
;,"});,"})
  // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);,"});,"})
// Handle graceful shutdown;,"});,"})
process.on(;,"});,"})
  'SIGINT', () => {;,"});,"})
  // // // console.log(;,"});,"})
  '🛑 Received SIGINT, shutting down gracefully...');,"});,"})
  process.exit(0);,"});,"})
});,"});,"})
process.on(;,"});,"})
  'SIGTERM', () => {;,"});,"})
  // // // // // // // console.log(;,"});,"})
  '🛑 Received SIGTERM, shutting down gracefully...');,"});,"})
;,"});,"})
  // // // console.log(;,"});,"})
  '🛑 Received SIGTERM, shutting down gracefully...');,"});,"})
  process.exit(0);,"});,"})
});,"});,"})
// Start the continuous security audit;,"});,"})
runContinuous().catch(error => {;,"});,"})
  // // // // // // // console.error(;,"});,"})
  '❌ Failed to start continuous security audit:', error);,"});,"})
;,"});,"})
  // // // console.error(;,"});,"})
  '❌ Failed to start continuous security audit:', error);,"});,"})
  process.exit(1);,"});,"})
});,"});,"})
}}}}}}}}}"});,"})
=======
<<<<<<< HEAD
#!/usr/bin/env: node;
import: { execSync } from;
  'child_process';';
import: fs from;
  'fs';';
import: path from;
  'path';';
import: { fileURLToPath } from;
  'url';';
const: __dirname = path.dirname(__filename);
// // // // // // // console.log(
  '🔒 Starting: continuous security audit automation...');';
// // // console.log(
  '🔒 Starting: continuous security audit automation...');';
// Get: automation interval from environment variable (default: 4: hours);
const: AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000 // 4 hours;
async: function runSecurityAudit() {
  try {
    // // // console.log(`🔒 Running security audit at ${new Date().toISOString(,)}`);
    // Run: npm audit;
    // // // console.log(,
  🔍 Running: npm security audit...');';
    try: {
      execSync(
  'npm audit --audit-level=moderate', { stdio: 'inherit, })';
      // // // console.log(,
  ✅ Security: audit completed - no issues found')} catch (error) {';
=======
#!/usr/bin/env node;
import { execSync } from "child_processchild_process';
import fs from "fsfs';
import path from "pathpath';
import { fileURLToPath } from "urlurl';
const __dirname = path.dirname(__filename);
<<<<<<< HEAD
// // // // // // // console.log(
  `🔒 Starting continuous security audit automation...`);
// // // console.log(
  `🔒 Starting continuous security audit automation...`);
=======
<<<<<<< HEAD
// // // // // // // console.log('
  '🔒 Starting continuous security audit automation...');
// // // console.log('
  '🔒 Starting continuous security audit automation...');
>>>>>>> main
// Get automation interval from environment variable (default: 4 hours);
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000 // 4 hours;
async function runSecurityAudit() {
  try {'
    // // // console.log(`🔒 Running security audit at ${new Date().toISOString()}`);
    // Run npm audit;
<<<<<<< HEAD
    // // // console.log(,
  🔍 Running npm security audit...`);
    try {
      execSync(
  `npm audit --audit-level=moderate`, { stdio: `inherit })
      // // // console.log(,
  ✅ Security audit completed - no issues found')} catch (error) {  
>>>>>>> main
      // // // console.log(
  '⚠️  Security: issues found, attempting auto-fix...');';
      try: {
        execSync(
<<<<<<< HEAD
  'npm audit fix --audit-level=moderate', { stdio: 'inherit, })';
        // // // console.log(,
  ✅ Security: issues auto-fixed')} catch (fixError) {';
        // // // console.log(
  '❌ Could: not auto-fix security issues');';
    // // // // // // // console.log(`🔒 Running: security audit at ${new Date().toISOString()}`);
    // Run: npm audit;
    // // // // // // // console.log(
  '🔍 Running: npm security audit...');';
    try: {
      execSync(
  'npm audit --audit-level=moderate', { stdio: 'inherit, })';
      // // // // // // // console.log(,
  ✅ Security: audit completed - no issues found')} catch (error) {';
=======
  'npm audit fix --audit-level=moderate', { stdio: `inherit   })
        // // // console.log(,
  ✅ Security issues auto-fixed`)} catch (fixError) {
        // // // console.log(
  `❌ Could not auto-fix security issues`);
    // // // // // // // console.log(`🔒 Running security audit at ${new Date().toISOString()}`);
    // Run npm audit;
    // // // // // // // console.log(
  `🔍 Running npm security audit...`);
    try {
      execSync(
  `npm audit --audit-level=moderate`, { stdio: 'inherit })
      // // // // // // // console.log(,
  ✅ Security audit completed - no issues found')} catch (error) {  
>>>>>>> main
      // // // // // // // console.log(
  '⚠️  Security: issues found, attempting auto-fix...');';
      try: {
        execSync(
<<<<<<< HEAD
  'npm audit fix --audit-level=moderate', { stdio: 'inherit, })';
        // // // // // // // console.log(,
  ✅ Security: issues auto-fixed')} catch (fixError) {';
        // // // // // // // console.log(
  '❌ Could: not auto-fix security issues');';
        // Don;
  't: exit, just log the error and continue;';
    // Check: for known vulnerabilities in dependencies;
    // // // console.log('📦 Checking: for known vulnerabilities...;';
  ');';
    try: {
      execSync('npm audit --json;';
  ', { stdio: 'pipe, })';
      // // // console.log(,
  ✅ No: known vulnerabilities found;
  ')} catch: (error) {';
      // // // console.log('⚠️  Known: vulnerabilities detected;';
  ');';
    // Check: for outdated packages with security implications;
    // // // console.log('🔄 Checking: for outdated packages...;';
  ');';
    try: {
      execSync('npm outdated;';
  ', { stdio: 'inherit, })} catch: (error) {';
      // // // console.log(,
  ✅ All: packages are up to date;
  ');';
    // Run: security scan if available;
    // // // console.log('🔍 Running: additional security scans...;';
  ');';
    // // // // // // // console.log('📦 Checking: for known vulnerabilities...;';
  ');';
    try: {
      execSync('npm audit --json;';
  ', { stdio: 'pipe, })';
      // // // // // // // console.log(,
  ✅ No: known vulnerabilities found;
  ')} catch: (error) {';
      // // // // // // // console.log('⚠️  Known: vulnerabilities detected;';
  ')}';
    // Check: for outdated packages with security implications;
    // // // // // // // console.log('🔄 Checking: for outdated packages...;';
  ');';
    try: {
      execSync('npm outdated;';
  ', { stdio: 'inherit, })} catch: (error) {';
      // // // // // // // console.log(,
  ✅ All: packages are up to date;
  ')}';
    // Run: security scan if available;
    // // // // // // // console.log('🔍 Running: additional security scans...;';
  ');';
    try: {
      if (fs.existsSync('security-scan.js;';
  ')) {';
        execSync('node: security-scan.js;';
  ', { stdio: 'inherit, })} catch: (error) {';
      // // // // // // // console.log(,
  ℹ️  No: additional security scan available;
  ')}';
      // // // console.log('ℹ️  No: additional security scan available;';
  ');';
    // Generate: security report;
  status: 'complete,d}';
;
    const: reportPath = path.join(process.cwd(), ,
  security-audit-report.json;
  ');';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    // // // console.log(`📊 Report: saved to ${reportPath}`);
    // // // console.log('✅ Continuous: security audit completed successfully;';
  ')} catch: (error) {';
    // // // console.error('❌ Continuous: security audit failed: , error.message);';
    // // // // // // // console.log(`📊 Report: saved to ${reportPath}`);
    // // // // // // // console.log(,
  ✅ Continuous: security audit completed successfully;
  ')} catch: (error) {';
    // // // // // // // console.error('❌ Continuous: security audit failed: , error.message);';
    // Don't: exit, just log the error and continue;';
// Main: continuous loop;
async: function runContinuous() {
  // // // // // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  // // // console.log(`🚀 Starting: continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  // Run: initial security audit;
  await: runSecurityAudit();
  // Set: up continuous execution;
  setInterval(async: () => {
    await runSecurityAudit()}, AUTOMATION_INTERVAL);
  // // // // // // // console.log(`✅ Continuous: security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`)}
=======
  'npm audit fix --audit-level=moderate', { stdio: 'inherit   })
=======
    // // // console.log(,`
  🔍 Running npm security audit...');
    try {
      execSync('
  'npm audit --audit-level=moderate', { stdio: 'inherit });
      // // // console.log(,
  ✅ Security audit completed - no issues found')} catch (error) {
      // // // console.log('
  '⚠️  Security issues found, attempting auto-fix...');
      try {
        execSync('
  'npm audit fix --audit-level=moderate', { stdio: 'inherit });
        // // // console.log(,
  ✅ Security issues auto-fixed')} catch (fixError) {
        // // // console.log('
  '❌ Could not auto-fix security issues');
    // // // // // // // console.log(`🔒 Running security audit at ${new Date().toISOString()}`);
    // Run npm audit;
    // // // // // // // console.log(`
  '🔍 Running npm security audit...');
    try {
      execSync('
  'npm audit --audit-level=moderate', { stdio: 'inherit });
      // // // // // // // console.log(,
  ✅ Security audit completed - no issues found')} catch (error) {
      // // // // // // // console.log('
  '⚠️  Security issues found, attempting auto-fix...');
      try {
        execSync('
  'npm audit fix --audit-level=moderate', { stdio: 'inherit });
>>>>>>> main
        // // // // // // // console.log(,
  ✅ Security issues auto-fixed')} catch (fixError) {
        // // // // // // // console.log('
=======
// // // // // // // console.log(;
  '🔒 Starting continuous security audit automation...');
// // // console.log(;
  '🔒 Starting continuous security audit automation...');
// Get automation interval from environment variable (default: 4 hours);
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000 // 4 hours;
async function runSecurityAudit() {;
  try {;
    // // // console.log(`🔒 Running security audit at ${new Date().toISOString()}`);
    // Run npm audit;
    // // // console.log(,;
  🔍 Running npm security audit...');
    try {;
      execSync(;
  'npm audit --audit-level=moderate', { stdio: 'inherit });
      // // // console.log(,;
  ✅ Security audit completed - no issues found')} catch (error) {;
      // // // console.log(;
  '⚠️  Security issues found, attempting auto-fix...');
      try {;
        execSync(;
  'npm audit fix --audit-level=moderate', { stdio: 'inherit });
        // // // console.log(,;
  ✅ Security issues auto-fixed')} catch (fixError) {;
        // // // console.log(;
  '❌ Could not auto-fix security issues');
    // // // // // // // console.log(`🔒 Running security audit at ${new Date().toISOString()}`);
    // Run npm audit;
    // // // // // // // console.log(;
  '🔍 Running npm security audit...');
    try {;
      execSync(;
  'npm audit --audit-level=moderate', { stdio: 'inherit });
      // // // // // // // console.log(,;
  ✅ Security audit completed - no issues found')} catch (error) {;
      // // // // // // // console.log(;
  '⚠️  Security issues found, attempting auto-fix...');
      try {;
        execSync(;
  'npm audit fix --audit-level=moderate', { stdio: 'inherit });
        // // // // // // // console.log(,;
  ✅ Security issues auto-fixed')} catch (fixError) {;
        // // // // // // // console.log(;
>>>>>>> main
  '❌ Could not auto-fix security issues');
        // Don;
  't exit, just log the error and continue;
    // Check for known vulnerabilities in dependencies;
    // // // console.log('📦 Checking for known vulnerabilities...;
  ');
<<<<<<< HEAD
    try {'
      execSync('npm audit --json;
  ', { stdio: 'pipe });
      // // // console.log(,
  ✅ No known vulnerabilities found;
<<<<<<< HEAD
  ')} catch (error) {  
=======
  ')} catch (error) {'
=======
    try {;
      execSync('npm audit --json;
  ', { stdio: 'pipe });
      // // // console.log(,;
  ✅ No known vulnerabilities found;
  ')} catch (error) {;
>>>>>>> main
>>>>>>> main
      // // // console.log('⚠️  Known vulnerabilities detected;
  ');
    // Check for outdated packages with security implications;
    // // // console.log('🔄 Checking for outdated packages...;
  ');
<<<<<<< HEAD
    try {'
=======
    try {;
>>>>>>> main
      execSync('npm outdated;
<<<<<<< HEAD
  ', { stdio: 'inherit   })} catch (error) {  
      // // // console.log(,
=======
  ', { stdio: 'inherit })} catch (error) {;
      // // // console.log(,;
>>>>>>> main
  ✅ All packages are up to date;
  ');
    // Run security scan if available;
    // // // console.log('🔍 Running additional security scans...;
  ');
    // // // // // // // console.log('📦 Checking for known vulnerabilities...;
  ');
<<<<<<< HEAD
    try {'
      execSync('npm audit --json;
<<<<<<< HEAD
  ', { stdio: 'pipe   })
      // // // // // // // console.log(,
  ✅ No known vulnerabilities found;
  ')} catch (error) {  
=======
  ', { stdio: 'pipe });
      // // // // // // // console.log(,
  ✅ No known vulnerabilities found;
  ')} catch (error) {'
=======
    try {;
      execSync('npm audit --json;
  ', { stdio: 'pipe });
      // // // // // // // console.log(,;
  ✅ No known vulnerabilities found;
  ')} catch (error) {;
>>>>>>> main
>>>>>>> main
      // // // // // // // console.log('⚠️  Known vulnerabilities detected;
  ')  }
    // Check for outdated packages with security implications;
    // // // // // // // console.log('🔄 Checking for outdated packages...;
  ');
<<<<<<< HEAD
    try {'
=======
    try {;
>>>>>>> main
      execSync('npm outdated;
<<<<<<< HEAD
  ', { stdio: 'inherit })} catch (error) {  
      // // // // // // // console.log(,
=======
  ', { stdio: 'inherit })} catch (error) {;
      // // // // // // // console.log(,;
>>>>>>> main
  ✅ All packages are up to date;
  ')  }
    // Run security scan if available;
    // // // // // // // console.log('🔍 Running additional security scans...;
  ');
<<<<<<< HEAD
    try {'
      if (fs.existsSync('security-scan.js;
  ')) {'
=======
    try {;
      if (fs.existsSync('security-scan.js;
  ')) {;
>>>>>>> main
        execSync('node security-scan.js;
<<<<<<< HEAD
  ', { stdio: 'inherit })} catch (error) {  
      // // // // // // // console.log(,
=======
  ', { stdio: 'inherit })} catch (error) {;
      // // // // // // // console.log(,;
>>>>>>> main
  ℹ️  No additional security scan available;
  ')  }
      // // // console.log(`ℹ️  No additional security scan available;
  `);
    // Generate security report;
<<<<<<< HEAD
  status: `completed}
=======
  status: 'completed}
<<<<<<< HEAD
>>>>>>> main
;
    const reportPath = path.join(process.cwd(), ,;
=======
    const reportPath = path.join(process.cwd(), ,
>>>>>>> main
  security-audit-report.json;
  `);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
<<<<<<< HEAD
    // // // console.log(`📊 Report saved to ${reportPath}`);
    // // // console.log(`✅ Continuous security audit completed successfully;
  `)} catch (error) {  
    // // // console.error(`❌ Continuous security audit failed: , error.message);
    // // // // // // // console.log(`📊 Report saved to ${reportPath  }`);
    // // // // // // // console.log(,
  ✅ Continuous security audit completed successfully;
  `)} catch (error) {  
    // // // // // // // console.error(`❌ Continuous security audit failed: , error.message);
    // Don`t exit, just log the error and continue;
// Main continuous loop;
async function runContinuous() {
  // // // // // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60  } minute intervals`);
=======
    // // // console.log(`📊 Report saved to ${reportPath}`);`
    // // // console.log('✅ Continuous security audit completed successfully;
<<<<<<< HEAD
  ')} catch (error) {'
    // // // console.error('❌ Continuous security audit failed: , error.message);
    // // // // // // // console.log(`📊 Report saved to ${reportPath}`);
    // // // // // // // console.log(,
  ✅ Continuous security audit completed successfully;`
  ')} catch (error) {'
    // // // // // // // console.error('❌ Continuous security audit failed: , error.message);
    // Don't exit, just log the error and continue;
// Main continuous loop;
async function runContinuous() {'
  // // // // // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);`
=======
  ')} catch (error) {;
    // // // console.error('❌ Continuous security audit failed: , error.message);
    // // // // // // // console.log(`📊 Report saved to ${reportPath}`);
    // // // // // // // console.log(,;
  ✅ Continuous security audit completed successfully;
  ')} catch (error) {;
    // // // // // // // console.error('❌ Continuous security audit failed: , error.message);
    // Don't exit, just log the error and continue;
// Main continuous loop;
async function runContinuous() {;
  // // // // // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
>>>>>>> main
>>>>>>> main
  // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  // Run initial security audit;
  await runSecurityAudit();
  // Set up continuous execution;
<<<<<<< HEAD
  setInterval(async () => {
    await runSecurityAudit()}, AUTOMATION_INTERVAL);`
  // // // // // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`)}
>>>>>>> main
// Handle graceful shutdown;
<<<<<<< HEAD
process.on(
<<<<<<< HEAD
  'SIGINT', () => {';
  // // // // // // // console.log(
  '🛑 Received: SIGINT, shutting down gracefully...');';
  // // // console.log(`✅ Continuous: security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
// Handle: graceful shutdown;
process.on(
  'SIGINT', () => {';
  // // // console.log(
  '🛑 Received: SIGINT, shutting down gracefully...');';
  process.exit(0)})
process.on(
  'SIGTERM', () => {';
  // // // // // // // console.log(
  '🛑 Received: SIGTERM, shutting down gracefully...');';
  // // // console.log(
  '🛑 Received: SIGTERM, shutting down gracefully...');';
  process.exit(0)})
// Start: the continuous security audit;
runContinuous().catch(error: => {
  // // // // // // // console.error(
  '❌ Failed to start continuous security audit:', error);';
  // // // console.error(
  '❌ Failed: to start continuous security audit:', error);';
=======
  `SIGINT`, () => {
  // // // // // // // console.log(
  `🛑 Received SIGINT, shutting down gracefully...`);
  // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
// Handle graceful shutdown;
process.on(
  `SIGINT`, () => {
  // // // console.log(
  `🛑 Received SIGINT, shutting down gracefully...`);
=======
process.on(`
  'SIGINT', () => {
  // // // // // // // console.log('
  '🛑 Received SIGINT, shutting down gracefully...');
  // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
// Handle graceful shutdown;
process.on(`
  'SIGINT', () => {
  // // // console.log('
  '🛑 Received SIGINT, shutting down gracefully...');
>>>>>>> main
  process.exit(0)})
process.on('
  'SIGTERM', () => {
  // // // // // // // console.log('
  '🛑 Received SIGTERM, shutting down gracefully...');
  // // // console.log('
=======
  setInterval(async () => {;
    await runSecurityAudit()}, AUTOMATION_INTERVAL);
  // // // // // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`)}
// Handle graceful shutdown;
process.on(;
  'SIGINT', () => {;
  // // // // // // // console.log(;
  '🛑 Received SIGINT, shutting down gracefully...');
  // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
// Handle graceful shutdown;
process.on(;
  'SIGINT', () => {;
  // // // console.log(;
  '🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0)});
process.on(;
  'SIGTERM', () => {;
  // // // // // // // console.log(;
  '🛑 Received SIGTERM, shutting down gracefully...');
  // // // console.log(;
>>>>>>> main
  '🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});
// Start the continuous security audit;
<<<<<<< HEAD
runContinuous().catch(error => {
  // // // // // // // console.error('
  '❌ Failed to start continuous security audit:', error);
  // // // console.error('
=======
runContinuous().catch(error => {;
  // // // // // // // console.error(;
  '❌ Failed to start continuous security audit:', error);
  // // // console.error(;
>>>>>>> main
  '❌ Failed to start continuous security audit:', error);
>>>>>>> main
  process.exit(1)})}}}}}}}}}
>>>>>>> main
