#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(__filename);

<<<<<<< HEAD
<<<<<<< HEAD
// // // console.log('🔒 Starting continuous security audit automation...');
=======
// // // // // // // console.log('🔒 Starting continuous security audit automation...');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
// // // console.log('🔒 Starting continuous security audit automation...');
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours

async function runSecurityAudit() {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD
=======
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
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        // Don't exit, just log the error and continue


    // Check for known vulnerabilities in dependencies
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD
=======
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
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    try {
      if (fs.existsSync('security-scan.js')) {
        execSync('node security-scan.js', { stdio: 'inherit' });

    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      // // // console.log('ℹ️  No additional security scan available');
=======
      // // // // // // // console.log('ℹ️  No additional security scan available');
    }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
      // // // console.log('ℹ️  No additional security scan available');
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    // Generate security report
<<<<<<< HEAD
    const report = {
  timestamp: new Date().toISOString(),
      summary: 'Security audit completed',
<<<<<<< HEAD
      status: 'completed'
    };

    const reportPath = path.join(process.cwd(), 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
<<<<<<< HEAD
=======
  status: 'completed'
    

};

=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    const reportPath = path.join(process.cwd(), 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    // // // console.log(`📊 Report saved to ${reportPath}`);

    // // // console.log('✅ Continuous security audit completed successfully');

  } catch (error) {
    // // // console.error('❌ Continuous security audit failed:', error.message);
<<<<<<< HEAD
=======
    // // // // // // // console.log(`📊 Report saved to ${reportPath}`);

    // // // // // // // console.log('✅ Continuous security audit completed successfully');

  } catch (error) {
    // // // // // // // console.error('❌ Continuous security audit failed:', error.message);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    // Don't exit, just log the error and continue


// Main continuous loop
async function runContinuous() {
<<<<<<< HEAD
<<<<<<< HEAD
  // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
=======
  // // // // // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
  // // // console.log(`🚀 Starting continuous security audit with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  // Run initial security audit
  await runSecurityAudit();

  // Set up continuous execution
  setInterval(async () => {
    await runSecurityAudit();
  }, AUTOMATION_INTERVAL);

<<<<<<< HEAD
<<<<<<< HEAD
  // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);

// Handle graceful shutdown
process.on('SIGINT', () => {
  // // // console.log('🛑 Received SIGINT, shutting down gracefully...');
=======
  // // // // // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  // // // // // // // console.log('🛑 Received SIGINT, shutting down gracefully...');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
  // // // console.log(`✅ Continuous security audit running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);

// Handle graceful shutdown
process.on('SIGINT', () => {
  // // // console.log('🛑 Received SIGINT, shutting down gracefully...');
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  process.exit(0);
});

process.on('SIGTERM', () => {
<<<<<<< HEAD
<<<<<<< HEAD
  // // // console.log('🛑 Received SIGTERM, shutting down gracefully...');
=======
  // // // // // // // console.log('🛑 Received SIGTERM, shutting down gracefully...');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
  // // // console.log('🛑 Received SIGTERM, shutting down gracefully...');
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  process.exit(0);
});

// Start the continuous security audit
runContinuous().catch(error => {
<<<<<<< HEAD
<<<<<<< HEAD
  // // // console.error('❌ Failed to start continuous security audit:', error);
=======
  // // // // // // // console.error('❌ Failed to start continuous security audit:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
  // // // console.error('❌ Failed to start continuous security audit:', error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  process.exit(1);
});
}}}}}}}}}