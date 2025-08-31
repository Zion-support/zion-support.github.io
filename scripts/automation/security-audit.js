#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(__filename);
<<<<<<< HEAD

// // // // // // // console.log('🔒 Starting continuous security audit automation...');
// // // console.log('🔒 Starting continuous security audit automation...');

=======
// // // // // // // console.log('🔒 Starting continuous security audit automation...');
=======
// // // console.log('🔒 Starting continuous security audit automation...');
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours
async function runSecurityAudit() {
  try {
    // // // console.log(`🔒 Running security audit at ${new Date().toISOString()}`);
    // Run npm audit
    // // // console.log('🔍 Running npm security audit...');
    try {
      execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
      // // // console.log('✅ Security audit completed - no issues found');
    } catch (error) {
      // // // console.log('⚠️  Security issues found, attempting auto-fix...');
      try {
        execSync('npm audit fix --audit-level=moderate', { stdio: 'inherit' });
        // // // console.log('✅ Security issues auto-fixed');
      } catch (fixError) {
        // // // console.log('❌ Could not auto-fix security issues');
    // // // // // // // console.log(`🔒 Running security audit at ${new Date().toISOString()}`);
    // Run npm audit
    // // // // // // // console.log('🔍 Running npm security audit...');
    try {
      execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
      // // // // // // // console.log('✅ Security audit completed - no issues found');
    } catch (error) {
      // // // // // // // console.log('⚠️  Security issues found, attempting auto-fix...');
      try {
        execSync('npm audit fix --audit-level=moderate', { stdio: 'inherit' });
        // // // // // // // console.log('✅ Security issues auto-fixed');
      } catch (fixError) {
        // // // // // // // console.log('❌ Could not auto-fix security issues');
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
        // Don't exit, just log the error and continue
    // Check for known vulnerabilities in dependencies
    // // // console.log('📦 Checking for known vulnerabilities...');
    try {
      execSync('npm audit --json', { stdio: 'pipe' });
      // // // console.log('✅ No known vulnerabilities found');
    } catch (error) {
      // // // console.log('⚠️  Known vulnerabilities detected');
    // Check for outdated packages with security implications
    // // // console.log('🔄 Checking for outdated packages...');
    try {
      execSync('npm outdated', { stdio: 'inherit' });
    } catch (error) {
      // // // console.log('✅ All packages are up to date');
    // Run security scan if available
    // // // console.log('🔍 Running additional security scans...');
    // // // // // // // console.log('📦 Checking for known vulnerabilities...');
    try {
      execSync('npm audit --json', { stdio: 'pipe' });
      // // // // // // // console.log('✅ No known vulnerabilities found');
    } catch (error) {
      // // // // // // // console.log('⚠️  Known vulnerabilities detected');
    }
    // Check for outdated packages with security implications
    // // // // // // // console.log('🔄 Checking for outdated packages...');
    try {
      execSync('npm outdated', { stdio: 'inherit' });
    } catch (error) {
      // // // // // // // console.log('✅ All packages are up to date');
    }
    // Run security scan if available
    // // // // // // // console.log('🔍 Running additional security scans...');
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    try {
      if (fs.existsSync('security-scan.js')) {
        execSync('node security-scan.js', { stdio: 'inherit' });
    } catch (error) {
      // // // // // // // console.log('ℹ️  No additional security scan available');
    }
<<<<<<< HEAD
      // // // console.log('ℹ️  No additional security scan available');

=======
=======
      // // // console.log('ℹ️  No additional security scan available');
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    // Generate security report
  status: 'completed'
};
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    const reportPath = path.join(process.cwd(), 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    // // // console.log(`📊 Report saved to ${reportPath}`);
    // // // console.log('✅ Continuous security audit completed successfully');
  } catch (error) {
    // // // console.error('❌ Continuous security audit failed:', error.message);
    // // // // // // // console.log(`📊 Report saved to ${reportPath}`);
    // // // // // // // console.log('✅ Continuous security audit completed successfully');
  } catch (error) {
    // // // // // // // console.error('❌ Continuous security audit failed:', error.message);
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    // Don't exit, just log the error and continue
// Main continuous loop
async function runContinuous() {
  // // // // // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
<<<<<<< HEAD
  // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);

=======
=======
  // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // Run initial security audit
  await runSecurityAudit();
  // Set up continuous execution
  setInterval(async () => {
    await runSecurityAudit();
  }, AUTOMATION_INTERVAL);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // // // // // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}
// Handle graceful shutdown
process.on('SIGINT', () => {
  // // // // // // // console.log('🛑 Received SIGINT, shutting down gracefully...');
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
// Handle graceful shutdown
process.on('SIGINT', () => {
  // // // console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});
process.on('SIGTERM', () => {
  // // // // // // // console.log('🛑 Received SIGTERM, shutting down gracefully...');
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // // // console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});
// Start the continuous security audit
runContinuous().catch(error => {
  // // // // // // // console.error('❌ Failed to start continuous security audit:', error);
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  // // // console.error('❌ Failed to start continuous security audit:', error);
  process.exit(1);
});
}}}}}}}}}